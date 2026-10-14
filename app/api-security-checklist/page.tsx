import React from "react";
import Link from "next/link";
import { ArrowLeft, CheckSquare, Download, Shield, Code, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "API Security Checklist 2026",
  description: "Free 2026 API Security Checklist for developers. Audit REST, GraphQL & gRPC endpoints for BOLA, broken auth, rate limits, and OWASP API Top 10.",
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/api-security-checklist",
  },
  openGraph: {
    title: "API Security Checklist 2026 | TrustLayerLabs",
    description: "Free 2026 API Security Checklist for developers. Audit REST, GraphQL & gRPC endpoints for BOLA, broken auth, rate limits, and OWASP API Top 10.",
    url: "https://www.trustlayerlabs.co.in/api-security-checklist",
    siteName: "TrustLayerLabs",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "API Security Checklist 2026 | TrustLayerLabs",
    description: "Free 2026 API Security Checklist for developers. Audit REST, GraphQL & gRPC endpoints for BOLA, broken auth, rate limits, and OWASP API Top 10.",
  },
};

export default function ApiSecurityChecklistPage() {
  const checklistSections = [
    {
      title: "1. Authentication & Session Security",
      items: [
        "Enforce HTTPS/TLS 1.3 on all API endpoints; redirect HTTP traffic automatically.",
        "Store JWTs in HTTP-Only, SameSite=Strict cookies rather than localStorage to prevent XSS exfiltration.",
        "Use asymmetric RS256/ES256 algorithms with strong 2048-bit RSA keys; reject 'none' algorithm tokens.",
        "Implement mandatory refresh token rotation and short (15-min) access token TTLs with revocation blacklists."
      ]
    },
    {
      title: "2. Authorization & Tenant Isolation (BOLA / BFLA)",
      items: [
        "Verify row-level tenant ownership (req.user.tenantId === record.tenantId) on every endpoint before database queries.",
        "Ensure object IDs (UUID v4) cannot be enumerated or guessed to access unauthorized customer records.",
        "Validate role-based access control (RBAC) on administrative endpoints; reject privilege escalation attempts.",
        "Prevent Broken Object Property Level Authorization by filtering input DTO payloads with strict schema validators."
      ]
    },
    {
      title: "3. Input Validation & Rate Limiting",
      items: [
        "Sanitize all JSON payloads, query parameters, and headers against injection (SQLi, NoSQLi, Command Injection).",
        "Implement Redis-backed sliding window rate-limiting per IP and user ID to mitigate automated credential stuffing.",
        "Restrict payload body size (e.g., max 1MB) and timeout parameters to prevent memory starvation attacks.",
        "Configure strict CORS policies; avoid Access-Control-Allow-Origin: * on authenticated microservice APIs."
      ]
    },
    {
      title: "4. Logging, Secrets & Infrastructure Defense",
      items: [
        "Mask all sensitive data (passwords, payment card numbers, PII) in application logs and observability collectors.",
        "Never commit API keys, cloud secrets, or private keys to source control; use secret management vaults.",
        "Disable stack traces and verbose error messages in production responses; return generic error envelopes.",
        "Enforce automated dependency vulnerability scanning (Snyk / Dependabot) in your CI/CD deployment pipelines."
      ]
    }
  ];

  return (
    <div className="bg-background min-h-screen pt-32 pb-24 font-sans text-textPrimary">
      <div className="section-container max-w-4xl mx-auto">
        <Link 
          href="/" 
          className="inline-flex items-center text-xs uppercase font-sans tracking-widest text-textSecondary hover:text-textPrimary transition-colors gap-2 mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
          Back to Home
        </Link>

        <div className="mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-widest mb-4">
            <span>Free Security Resource</span>
          </div>
          <h1 className="heading-1 mb-6 text-textPrimary font-extrabold tracking-tight">
            API Security <span className="text-primary">Checklist (2026)</span>
          </h1>
          <p className="body-text text-base text-textSecondary leading-relaxed">
            Essential developer checklist for securing REST, GraphQL, and gRPC endpoints before pushing to production. Focus on authorization boundaries, token integrity, and rate limiting.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-xl font-bold text-textPrimary font-sans mb-6">
            OWASP API Security Top 10 Verification Modules
          </h2>
          <div className="space-y-6">
            {checklistSections.map((sec, idx) => (
              <div key={idx} className="p-6 bg-surface border border-border/80 rounded-xl space-y-4 shadow-sm">
                <h3 className="text-sm font-bold text-textPrimary font-sans">{sec.title}</h3>
                <div className="space-y-3">
                  {sec.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-start gap-3 text-xs text-textSecondary">
                      <CheckCircle size={16} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Developer Remediation Advice */}
        <div className="mb-16 p-8 bg-surface border border-border/80 rounded-2xl shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-textPrimary font-sans">
            How to Remediate BOLA in Multi-Tenant Backend APIs
          </h2>
          <p className="text-xs text-textSecondary leading-relaxed font-sans">
            Broken Object Level Authorization (BOLA/IDOR) is responsible for over 40% of critical API data breaches. To eliminate BOLA, never query database models using URL parameters alone. Instead, always couple the requested resource identifier with the authenticated user&apos;s tenant ID retrieved directly from the verified session token or signed JWT context.
          </p>
          <div className="p-4 bg-background border border-border/60 rounded-xl font-mono text-[11px] text-textSecondary overflow-x-auto leading-relaxed">
            <code>
              {`// Secure Pattern: Always scope queries by authenticated tenant context\nconst order = await db.orders.findOne({\n  _id: req.params.orderId,\n  tenantId: req.user.tenantId // Enforce tenant boundary!\n});\nif (!order) return res.status(404).json({ error: 'Order not found' });`}
            </code>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="p-8 bg-surface border border-primary/30 rounded-2xl text-center space-y-4">
          <h2 className="text-xl font-bold text-textPrimary font-sans">Need a Manual API Penetration Test?</h2>
          <p className="text-xs text-textSecondary max-w-xl mx-auto">
            Our offensive security practitioners manually test your APIs for BOLA, authentication flaws, and business logic bypasses in 5 to 7 days. Explore our{" "}
            <Link href="/services/api-security" className="text-primary font-bold hover:underline">
              API Security Testing & BOLA Pentesting
            </Link>{" "}
            services or schedule a scoping conversation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/free-assessment"
              className="px-8 py-3 bg-primary hover:bg-primary-hover text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md"
            >
              Get a Free Security Review →
            </Link>
            <Link
              href="/sample-report"
              className="px-8 py-3 bg-surface border border-border hover:border-zinc-400 text-textPrimary hover:text-primary font-semibold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm"
            >
              View Sample Report
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
