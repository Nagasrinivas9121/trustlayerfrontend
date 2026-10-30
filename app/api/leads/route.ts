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

  // 5. Server-side validation of company, website/stack, deadline, compliance goal, work email
  const company = typeof body.company === "string" 
    ? body.company.trim().slice(0, 100) 
    : typeof body.startup === "string" 
    ? body.startup.trim().slice(0, 100) 
    : "";
  const website = typeof body.website === "string" 
    ? body.website.trim().slice(0, 200) 
    : typeof body.website_or_stack === "string"
    ? body.website_or_stack.trim().slice(0, 200)
    : "";
  const deadline = typeof body.deadline === "string" 
    ? body.deadline.trim().slice(0, 100) 
    : typeof body.timeline === "string"
    ? body.timeline.trim().slice(0, 100)
    : "";
  const complianceGoal = typeof body.compliance_goal === "string" 
    ? body.compliance_goal.trim().slice(0, 100) 
    : typeof body.complianceGoal === "string"
    ? body.complianceGoal.trim().slice(0, 100)
    : typeof body.promptTrigger === "string" 
    ? body.promptTrigger.trim().slice(0, 100) 
    : typeof body.securityConcern === "string"
    ? body.securityConcern.trim().slice(0, 100)
    : "";
  const email = typeof body.email === "string" 
    ? body.email.trim().slice(0, 120) 
    : typeof body.workEmail === "string"
    ? body.workEmail.trim().slice(0, 120)
    : "";
  const pkg = typeof body.package === "string" ? body.package.trim().slice(0, 100) : "";
  const foundingInterest = typeof body.founding_interest === "boolean" 
    ? body.founding_interest 
    : typeof body.foundingInterest === "boolean"
    ? body.foundingInterest
    : false;
  const source = typeof body.source === "string" ? body.source.trim().slice(0, 50) : "free-assessment";
  const rawName = typeof body.name === "string" ? body.name.trim().slice(0, 100) : "";
  const name = rawName || (company ? `${company} Team` : "Security Lead");
  const message = typeof body.message === "string" ? body.message.trim().slice(0, 2000) : "";

  if (!company || !website || !deadline || !complianceGoal || !email || !EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { 
        success: false, 
        error: "Validation error: company, website/tech stack, deadline, compliance goal, and a valid work email are required.",
        code: "VALIDATION_ERROR"
      },
      { status: 422 }
    );
  }

  // 5b. Anti-duplicate submission protection (same email & source within 60s)
  const dedupeKey = `${email.toLowerCase()}:${source}:${clientIp}`;
  if (isDuplicateSubmission(dedupeKey)) {
    return NextResponse.json({
      success: true,
      message: "We will send a fixed-price quote within 24 hours.",
      code: "DUPLICATE_ACCEPTED",
    });
  }

  // Full lead payload
  const leadPayload = {
    source,
    name,
    company,
    website,
    deadline,
    complianceGoal,
    email,
    package: pkg,
    founding_interest: foundingInterest,
    message,
    timestamp: new Date().toISOString(),
    ip: clientIp,
  };

  // 3. Fallback: ALWAYS write the full lead payload to server logs with a clear "NEW LEAD" prefix
  console.log("NEW LEAD:", JSON.stringify(leadPayload, null, 2));

  // Delivery configuration: (1) LEAD_WEBHOOK_URL; (2) RESEND_API_KEY
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.LEADS_TO_EMAIL || process.env.LEAD_NOTIFICATION_EMAIL || "ceo@trustlayerlabs.co.in";
  const fromEmail = process.env.LEADS_FROM_EMAIL || process.env.LEAD_FROM_EMAIL || "leads@trustlayerlabs.co.in";

  let delivered = false;
  let deliveryProvider = "none";
  let deliveryError = "";

  // Priority 1: Webhook Delivery (POST JSON)
  if (webhookUrl) {
    deliveryProvider = "webhook";
    try {
      const isSlack = webhookUrl.includes("hooks.slack.com");
      const webhookPayload = isSlack
        ? {
            text: `🎯 *New Lead Received on TrustLayerLabs* (${source})\n*Company:* ${company}\n*Website:* ${website}\n*Email:* ${email}\n*Package:* ${pkg || "General"}\n*Founding Client Interest:* ${foundingInterest ? "Yes" : "No"}\n*Deadline:* ${deadline}\n*Compliance Goal:* ${complianceGoal}\n*Message:* ${message || "None"}`,
          }
        : {
            event: "new_lead",
            ...leadPayload,
          };

      const webhookRes = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(webhookPayload),
        redirect: "follow",
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

  // Priority 2: Email Provider (Resend) to ceo@trustlayerlabs.co.in
  if (!delivered && resendApiKey) {
    deliveryProvider = "resend";
    try {
      const safeName = escapeHtml(name);
      const safeEmail = escapeHtml(email);
      const safeCompany = escapeHtml(company);
      const safeWebsite = escapeHtml(website);
      const safeConcern = escapeHtml(complianceGoal);
      const safeTimeline = escapeHtml(deadline);
      const safePackage = escapeHtml(pkg || "None");
      const safeMessage = escapeHtml(message || "None").replace(/\n/g, "<br/>");

      const emailSubject = `[TrustLayerLabs Enquiry] ${safeName} from ${safeCompany} (${safePackage || source})`;

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
        <td style="padding: 8px 0; color: #8a8f9e; width: 140px;">Company:</td>
        <td style="padding: 8px 0; color: #ffffff; font-weight: bold;">${safeCompany}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #8a8f9e;">Work Email:</td>
        <td style="padding: 8px 0;"><a href="mailto:${safeEmail}" style="color: #3b5bdb; text-decoration: none; font-weight: bold;">${safeEmail}</a></td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #8a8f9e;">Website / Tech:</td>
        <td style="padding: 8px 0; color: #ffffff;">${safeWebsite}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #8a8f9e;">Selected Package:</td>
        <td style="padding: 8px 0; color: #ffffff;">${safePackage}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #8a8f9e;">Founding Interest:</td>
        <td style="padding: 8px 0; color: #ffffff;">${foundingInterest ? "Yes (~30% off list)" : "No"}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #8a8f9e;">Compliance Goal:</td>
        <td style="padding: 8px 0; color: #ffffff;">${safeConcern}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #8a8f9e;">Target Deadline:</td>
        <td style="padding: 8px 0; color: #ffffff;">${safeTimeline}</td>
      </tr>
    </table>
    <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #1f2937;">
      <p style="margin: 0 0 8px; color: #8a8f9e; font-size: 13px; font-weight: bold; text-transform: uppercase;">Message:</p>
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
Company: ${company}
Website: ${website}
Work Email: ${email}
Package: ${pkg || "None"}
Founding Client Interest: ${foundingInterest ? "Yes" : "No"}
Compliance Goal: ${complianceGoal}
Deadline: ${deadline}

Message:
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
      }
    } catch (err: any) {
      deliveryError = err?.message || "Failed to reach Resend API";
    }
  }

  // 6. Responses
  if (delivered) {
    console.info(`[Leads API] Enquiry accepted and delivered via ${deliveryProvider}`);
    return NextResponse.json({
      success: true,
      message: "We will send a fixed-price quote within 24 hours.",
    });
  }

  // Fallback when NO delivery channel is configured or delivery fails at runtime
  const fallbackMessage = "We could not submit this form right now. Please message us on WhatsApp: https://wa.me/919391220328 or email ceo@trustlayerlabs.co.in.";
  console.error("NEW LEAD DELIVERY FAILED:", {
    error: deliveryError || "No real delivery channel configured (LEAD_WEBHOOK_URL or RESEND_API_KEY unset)",
    payload: leadPayload,
  });

  return NextResponse.json(
    {
      success: false,
      error: fallbackMessage,
      code: webhookUrl || resendApiKey ? "DELIVERY_FAILED" : "NO_DELIVERY_CHANNEL",
    },
    { status: webhookUrl || resendApiKey ? 502 : 503 }
  );
}
