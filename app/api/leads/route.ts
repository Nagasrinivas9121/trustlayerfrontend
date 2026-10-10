import { NextRequest, NextResponse } from "next/server";

// In-memory sliding-window rate limiter (keyed by client IP)
const ipRequests = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = ipRequests.get(ip);

  if (!record || now > record.resetTime) {
    ipRequests.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  record.count += 1;
  return true;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// In-memory deduplication cache (prevents rapid double-submits within 60s window)
const duplicateSubmissions = new Map<string, number>();
const DEDUPLICATION_WINDOW_MS = 60 * 1000; // 60 seconds

function isDuplicateSubmission(key: string): boolean {
  const now = Date.now();
  const lastTime = duplicateSubmissions.get(key);
  if (lastTime && now - lastTime < DEDUPLICATION_WINDOW_MS) {
    return true;
  }
  duplicateSubmissions.set(key, now);
  if (duplicateSubmissions.size > 500) {
    for (const [k, timestamp] of duplicateSubmissions.entries()) {
      if (now - timestamp > DEDUPLICATION_WINDOW_MS) {
        duplicateSubmissions.delete(k);
      }
    }
  }
  return false;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  // 1. Validate Content-Type
  const contentType = req.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    return NextResponse.json(
      { success: false, error: "Unsupported Media Type. Expected application/json." },
      { status: 415 }
    );
  }

  // 2. Anti-abuse: IP rate limiting
  const forwardedFor = req.headers.get("x-forwarded-for");
  const clientIp = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";

  if (!checkRateLimit(clientIp)) {
    return NextResponse.json(
      {
        success: false,
        error: "Too many submission attempts. Please wait 10 minutes or email ceo@trustlayerlabs.co.in directly.",
        code: "RATE_LIMITED",
      },
      { status: 429 }
    );
  }

  // 3. Safe JSON parsing with structure check
  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Malformed or invalid JSON payload." },
      { status: 400 }
    );
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json(
      { success: false, error: "Payload must be a valid JSON object." },
      { status: 400 }
    );
  }

  // 4. Anti-bot Honeypot check
  if (body.bot_field || body.hp_company_field) {
    return NextResponse.json(
      { success: false, error: "Invalid submission detected." },
      { status: 400 }
    );
  }

  // 5. Server-side validation and boundary limiting
  const source = typeof body.source === "string" ? body.source.trim().slice(0, 50) : "website-form";
  const rawName = typeof body.name === "string" ? body.name.trim().slice(0, 100) : "";
  const name = rawName || (source.includes("sample-report") ? "Sample Report Requester" : "");
  const email = typeof body.email === "string" ? body.email.trim().slice(0, 120) : "";
  const company = typeof body.company === "string" 
    ? body.company.trim().slice(0, 100) 
    : typeof body.startup === "string" 
    ? body.startup.trim().slice(0, 100) 
    : "";
  const website = typeof body.website === "string" ? body.website.trim().slice(0, 200) : "";
  const promptTrigger = typeof body.promptTrigger === "string" 
    ? body.promptTrigger.trim().slice(0, 100) 
    : typeof body.productType === "string" 
    ? body.productType.trim().slice(0, 100) 
    : "";
  const securityConcern = typeof body.securityConcern === "string" 
    ? body.securityConcern.trim().slice(0, 100) 
    : typeof body.scope === "string" 
    ? body.scope.trim().slice(0, 100) 
    : "";
  const timeline = typeof body.timeline === "string" ? body.timeline.trim().slice(0, 50) : "";
  const message = typeof body.message === "string" ? body.message.trim().slice(0, 2000) : "";

  if (!name || name.length < 2) {
    return NextResponse.json(
      { success: false, error: "Full name is required (minimum 2 characters)." },
      { status: 422 }
    );
  }

  if (!email || !EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { success: false, error: "A valid email address is required." },
      { status: 422 }
    );
  }

  // 5b. Anti-duplicate submission protection (same email & source within 60s)
  const dedupeKey = `${email.toLowerCase()}:${source}:${clientIp}`;
  if (isDuplicateSubmission(dedupeKey)) {
    return NextResponse.json({
      success: true,
      message: "Enquiry already received and queued for review.",
      code: "DUPLICATE_ACCEPTED",
    });
  }

  // 6. Delivery Dispatch Configuration
  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.LEADS_TO_EMAIL || process.env.LEAD_NOTIFICATION_EMAIL || "ceo@trustlayerlabs.co.in";
  const fromEmail = process.env.LEADS_FROM_EMAIL || process.env.LEAD_FROM_EMAIL || "leads@trustlayerlabs.co.in";
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;

  let delivered = false;
  let deliveryProvider = "none";
  let deliveryError = "";

  // Strategy A: Transactional Email API (Resend)
  if (resendApiKey) {
    deliveryProvider = "resend";
    try {
      const safeName = escapeHtml(name);
      const safeEmail = escapeHtml(email);
      const safeCompany = escapeHtml(company || "Not provided");
      const safeWebsite = escapeHtml(website || "Not provided");
      const safeConcern = escapeHtml(securityConcern || "Not provided");
      const safeTrigger = escapeHtml(promptTrigger || "Not provided");
      const safeTimeline = escapeHtml(timeline || "Not provided");
      const safeMessage = escapeHtml(message || "None").replace(/\n/g, "<br/>");

      const emailSubject = source.includes("sample-report")
        ? `[TrustLayerLabs Sample Report Download] ${safeEmail} (${company || "Product Team"})`
        : `[TrustLayerLabs Enquiry] ${safeName} from ${company || "Product Team"} (${source})`;

      const emailHtml = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #0d0f14; color: #c8d0e0; margin: 0; padding: 24px;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #141720; border: 1px solid #1f2937; border-radius: 12px; padding: 28px;">
    <div style="border-bottom: 1px solid #1f2937; padding-bottom: 16px; margin-bottom: 20px;">
      <h2 style="margin: 0; color: #ffffff; font-size: 20px;">New Inbound Security Enquiry</h2>
      <p style="margin: 4px 0 0; color: #3b5bdb; font-size: 13px; font-weight: bold; text-transform: uppercase;">Source: ${escapeHtml(source)}</p>
    </div>
    <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
      <tr>
        <td style="padding: 8px 0; color: #8a8f9e; width: 140px;">Name:</td>
        <td style="padding: 8px 0; color: #ffffff; font-weight: bold;">${safeName}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #8a8f9e;">Work Email:</td>
        <td style="padding: 8px 0;"><a href="mailto:${safeEmail}" style="color: #3b5bdb; text-decoration: none; font-weight: bold;">${safeEmail}</a></td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #8a8f9e;">Company:</td>
        <td style="padding: 8px 0; color: #ffffff;">${safeCompany}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #8a8f9e;">Website:</td>
        <td style="padding: 8px 0; color: #ffffff;">${safeWebsite}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #8a8f9e;">Primary Concern:</td>
        <td style="padding: 8px 0; color: #ffffff;">${safeConcern}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #8a8f9e;">Review Trigger:</td>
        <td style="padding: 8px 0; color: #ffffff;">${safeTrigger}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #8a8f9e;">Timeline:</td>
        <td style="padding: 8px 0; color: #ffffff;">${safeTimeline}</td>
      </tr>
    </table>
    <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #1f2937;">
      <p style="margin: 0 0 8px; color: #8a8f9e; font-size: 13px; font-weight: bold; text-transform: uppercase;">Scoping Brief / Message:</p>
      <div style="background-color: #0d0f14; border: 1px solid #1f2937; border-radius: 8px; padding: 12px; font-size: 13px; line-height: 1.5; color: #e2e8f0;">
        ${safeMessage}
      </div>
    </div>
    <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #1f2937; font-size: 11px; color: #64748b; text-align: center;">
      Received at ${new Date().toUTCString()} via TrustLayerLabs Lead Intake
    </div>
  </div>
</body>
</html>`;

      const emailText = `New Enquiry on TrustLayerLabs:
Source: ${source}
Name: ${name}
Work Email: ${email}
Company: ${company || "Not provided"}
Website: ${website || "Not provided"}
Primary Concern: ${securityConcern || "Not provided"}
Review Trigger: ${promptTrigger || "Not provided"}
Timeline: ${timeline || "Not provided"}

Scoping Brief:
${message || "None"}

Timestamp: ${new Date().toISOString()}`;

      const emailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [toEmail],
          reply_to: email,
          subject: emailSubject,
          html: emailHtml,
          text: emailText,
        }),
      });

      if (emailRes.ok) {
        delivered = true;
      } else {
        const errJson = await emailRes.json().catch(() => ({}));
        deliveryError = errJson.message || `Resend API returned HTTP ${emailRes.status}`;
        if (errJson?.message?.toLowerCase().includes("not verified")) {
          console.error(`[Leads API] Domain in '${fromEmail}' is unverified in Resend DNS. Verify custom domain in Resend dashboard to send production emails.`);
        }
      }
    } catch (err: any) {
      deliveryError = err?.message || "Failed to reach Resend API";
    }
  }

  // Strategy B: Webhook Delivery (Slack, Discord, Zapier, Make, n8n, or internal CRM)
  if (!delivered && webhookUrl) {
    deliveryProvider = "webhook";
    try {
      const isSlack = webhookUrl.includes("hooks.slack.com");
      const webhookPayload = isSlack
        ? {
            text: `🎯 *New Lead Received on TrustLayerLabs* (${source})\n*Name:* ${name}\n*Email:* ${email}\n*Company:* ${company || "N/A"}\n*Website:* ${website || "N/A"}\n*Concern:* ${securityConcern || "N/A"}\n*Timeline:* ${timeline || "N/A"}\n*Brief:* ${message || "None"}`,
          }
        : {
            event: "lead_submission",
            source,
            timestamp: new Date().toISOString(),
            lead: {
              name,
              email,
              company,
              website,
              promptTrigger,
              securityConcern,
              timeline,
              message,
            },
          };

      const webhookRes = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(webhookPayload),
      });

      if (webhookRes.ok) {
        delivered = true;
      } else {
        deliveryError = `Webhook endpoint returned HTTP ${webhookRes.status}`;
      }
    } catch (err: any) {
      deliveryError = err?.message || "Failed to reach webhook URL";
    }
  }

  // 7. Responses & Safe Audit Logging (Never log names, emails, phone numbers, or message bodies)
  if (delivered) {
    console.info(`[Leads API] Enquiry accepted and delivered via ${deliveryProvider} (source: ${source})`);
    return NextResponse.json({
      success: true,
      message: "Enquiry delivered successfully to the TrustLayerLabs security team.",
    });
  }

  // Case: Neither provider is configured in environment
  if (!resendApiKey && !webhookUrl) {
    console.warn(`[Leads API] Submission received for ${source}, but no email delivery provider is configured (RESEND_API_KEY or LEAD_WEBHOOK_URL).`);
    return NextResponse.json(
      {
        success: false,
        error: "Email delivery service is currently not configured on this server. Please contact us directly at ceo@trustlayerlabs.co.in or via WhatsApp (+91 93912 20328).",
        code: "PROVIDER_NOT_CONFIGURED",
      },
      { status: 503 }
    );
  }

  // Case: Provider configured but dispatch failed
  console.error(`[Leads API] Delivery failed via ${deliveryProvider}. Details: ${deliveryError}`);
  return NextResponse.json(
    {
      success: false,
      error: "Unable to deliver enquiry due to a temporary email provider issue. Please retry or contact ceo@trustlayerlabs.co.in directly.",
      code: "DELIVERY_FAILED",
    },
    { status: 502 }
  );
}
