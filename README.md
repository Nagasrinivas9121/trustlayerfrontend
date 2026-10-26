# TrustLayerLabs Frontend

Production marketing and lead generation web application for TrustLayerLabs (trustlayerlabs.co.in) — manual API and multi-tenant SaaS penetration testing.

## Lead delivery setup

Lead intake occurs on `/free-assessment` and is processed by the API route `/api/leads`. To ensure no inbound lead is ever lost or silently fails, the handler employs strict priority-based multi-channel delivery:

### 1. Delivery Priority Order
1. **Webhook (Primary)**: If `LEAD_WEBHOOK_URL` is set, the payload is sent as an HTTP POST JSON request. Slack webhook URLs (`hooks.slack.com`) are automatically formatted as rich markdown notifications. Generic endpoints receive the complete JSON lead object with timestamp and client metadata.
2. **Transactional Email (Secondary)**: If `LEAD_WEBHOOK_URL` is unset or delivery returns an error, and `RESEND_API_KEY` is configured, an HTML and plaintext email alert is dispatched to `ceo@trustlayerlabs.co.in` via the Resend API.
3. **Server Log Fallback (Always)**: Regardless of delivery channel status, every submission with valid fields is written to server logs prefixed with `NEW LEAD:` containing the full JSON payload.

### 2. Failure Handling
- If **neither** `LEAD_WEBHOOK_URL` nor `RESEND_API_KEY` is configured, or if all configured channels fail at runtime, the API responds with an HTTP error status (502 / 503) and the user is immediately shown the fallback message with plain text links:
  > "We could not submit this form right now. Please message us on WhatsApp: https://wa.me/919391220328 or email ceo@trustlayerlabs.co.in."
- The form does **never** show a false success message when delivery fails.

### 3. Setting Up Environment Variables
Create `.env.local` in the project root (or set in your Vercel / deployment environment):
```bash
# Webhook destination (Slack, Discord, Zapier, Make, n8n, or internal CRM)
LEAD_WEBHOOK_URL=https://hooks.slack.com/services/...

# Resend API Key for email alerts
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
LEADS_FROM_EMAIL=leads@trustlayerlabs.co.in
LEADS_TO_EMAIL=ceo@trustlayerlabs.co.in
```

### 4. Testing Lead Delivery
- **No env vars set**: Submitting `/free-assessment` will log `NEW LEAD:` with the full JSON payload to stdout, return HTTP 503, and display the WhatsApp/email fallback error.
- **`LEAD_WEBHOOK_URL` set**: Submitting `/free-assessment` will POST JSON to the webhook, return HTTP 200, and display the confirmation message: *"We will send a fixed-price quote within 24 hours."*

---

## Microsoft Clarity Setup

Microsoft Clarity provides anonymous session recording and heatmaps. It is strictly configured to respect user privacy and cookie consent:

1. Obtain your Project ID from the [Microsoft Clarity Dashboard](https://clarity.microsoft.com/).
2. Add the variable to `.env.local` or deployment settings:
   ```bash
   NEXT_PUBLIC_CLARITY_ID=your_clarity_project_id
   ```
3. When unset, Clarity is completely disabled and no third-party script is requested.
4. When set, Clarity only loads after the user grants analytics consent via the cookie consent banner (`cookie_consent_update` event with `analytics: true`).
