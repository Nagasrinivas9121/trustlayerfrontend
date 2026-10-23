import React from "react";
import Link from "next/link";
import { ArrowLeft, CheckSquare, Download, Shield, Code, CheckCircle, ArrowRight, Terminal } from "lucide-react";
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
    <div className="bg-[#FAFAFA] min-h-screen pt-32 pb-24 font-sans text-neutral-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Pill */}
        <Link 
          href="/" 
          className="inline-flex items-center text-xs font-semibold text-neutral-500 hover:text-neutral-900 transition-colors gap-2 mb-8 group px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 shadow-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/80 shadow-sm text-xs font-semibold text-neutral-800 mb-4">
            <CheckSquare size={14} className="text-neutral-900" />
            <span>Developer Reference Guide</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 mb-4">
            API Security <span className="text-neutral-900">Checklist (2026)</span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl">
            Essential developer checklist for securing REST, GraphQL, and gRPC endpoints before pushing to production. Focus on authorization boundaries, token integrity, and rate limiting.
          </p>
        </div>

        {/* Checklist Modules */}
        <div className="mb-14 space-y-6">
          <div className="flex items-center justify-between pb-2 border-b border-dashed border-neutral-200">
            <h2 className="text-lg font-bold text-neutral-950">
              OWASP API Security Top 10 Verification Modules
            </h2>
            <span className="text-xs font-mono text-neutral-400">REST • GraphQL • gRPC</span>
          </div>

          <div className="space-y-5">
            {checklistSections.map((sec, idx) => (
              <div key={idx} className="p-7 sm:p-8 bg-white border border-neutral-200/80 rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.02)] space-y-4 hover:border-neutral-300 transition-colors">
                <h3 className="text-base font-bold text-neutral-950">{sec.title}</h3>
                <div className="space-y-3">
                  {sec.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-start gap-3 text-sm text-neutral-600">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                        <CheckCircle size={13} />
                      </div>
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Developer Remediation Advice */}
        <div className="mb-14 p-8 sm:p-10 bg-white border border-neutral-200/80 rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.02)] space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-900">
              <Code size={18} />
            </div>
            <h2 className="text-lg font-bold text-neutral-950">
              How to Remediate BOLA in Multi-Tenant Backend APIs
            </h2>
          </div>
          <p className="text-sm text-neutral-600 leading-relaxed pl-12">
            Broken Object Level Authorization (BOLA/IDOR) is responsible for over 40% of critical API data breaches. To eliminate BOLA, never query database models using URL parameters alone. Instead, always couple the requested resource identifier with the authenticated user&apos;s tenant ID retrieved directly from the verified session token or signed JWT context.
          </p>
          <div className="pl-12">
            <div className="p-5 bg-neutral-950 border border-neutral-800 rounded-2xl font-mono text-xs text-neutral-200 overflow-x-auto leading-relaxed shadow-inner">
              <div className="text-neutral-500 mb-2">// Secure Pattern: Always scope queries by authenticated tenant context</div>
              <div><span className="text-rose-400">const</span> order = <span className="text-rose-400">await</span> db.orders.<span className="text-emerald-400">findOne</span>({`{`}</div>
              <div className="pl-4">_id: req.params.orderId,</div>
              <div className="pl-4 text-emerald-300">tenantId: req.user.tenantId <span className="text-neutral-500">// Enforce tenant boundary!</span></div>
              <div>{`});`}</div>
              <div className="mt-2"><span className="text-rose-400">if</span> (!order) <span className="text-rose-400">return</span> res.status(404).json({`{`} error: <span className="text-amber-300">&apos;Order not found&apos;</span> {`}`});</div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="p-8 sm:p-12 bg-white border border-dashed border-neutral-300 rounded-3xl text-center space-y-6 shadow-sm">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-semibold text-neutral-800">
            <Shield size={14} className="text-neutral-900" />
            <span>Offensive API Security Practice</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950">
            Need a Manual API Penetration Test?
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 max-w-xl mx-auto leading-relaxed">
            Our offensive security practitioners manually test your APIs for BOLA, authentication flaws, and business logic bypasses in 5 to 7 days. Explore our{" "}
            <Link href="/services/api-security" className="text-neutral-950 font-bold underline underline-offset-2">
              API Security Testing & BOLA Pentesting
            </Link>{" "}
            services or schedule a scoping conversation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/free-assessment"
              className="w-full sm:w-auto px-7 py-3.5 bg-neutral-900 hover:bg-black text-white font-semibold text-xs rounded-full shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Get Free Scoping Review</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/sample-report"
              className="w-full sm:w-auto px-7 py-3.5 bg-white border border-neutral-200 hover:border-neutral-400 text-neutral-800 font-semibold text-xs rounded-full shadow-sm transition-all"
            >
              View Sample Report
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
