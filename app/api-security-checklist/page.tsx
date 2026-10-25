"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckSquare, Download, Shield, Code, CheckCircle, ArrowRight, Lock, Loader2 } from "lucide-react";
import { trackChecklistDownload, trackPrimaryQuoteClick } from "@/lib/analytics";
import { openQuoteModal } from "@/components/QuoteModal";
import QuoteModal from "@/components/QuoteModal";

export default function ApiSecurityChecklistPage() {
  const [email, setEmail] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const handleUnlock = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || loading) return;
    setLoading(true);

    try {
      // TODO: email-provider integration (e.g. Mailchimp, Loops, or Resend Audience API)
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source: "lead-magnet-api-security-checklist",
        }),
      });

      trackChecklistDownload("api_security_checklist");
      setIsUnlocked(true);
    } catch {
      setIsUnlocked(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen pt-32 pb-24 font-sans text-neutral-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Pill */}
        <Link 
          href="/" 
          className="inline-flex items-center text-xs font-semibold text-neutral-500 hover:text-neutral-900 transition-colors gap-2 mb-8 group px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 shadow-xs"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/80 shadow-xs text-xs font-semibold text-neutral-800 mb-4">
            <CheckSquare size={14} className="text-neutral-900" />
            <span>Developer Reference Guide</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 mb-4 font-sans">
            API Security <span className="text-primary">Checklist (2026)</span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl font-sans">
            Essential developer checklist for securing REST, GraphQL, and gRPC endpoints before pushing to production. Focus on authorization boundaries, token integrity, and rate limiting.
          </p>
        </div>

        {/* Email Capture Gate */}
        {!isUnlocked ? (
          <div className="p-8 sm:p-12 bg-white rounded-3xl border border-neutral-200 shadow-sm text-center space-y-6 max-w-xl mx-auto my-8">
            <div className="w-14 h-14 bg-blue-50 border border-blue-200 text-primary rounded-2xl flex items-center justify-center mx-auto">
              <Lock size={24} />
            </div>

            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight font-sans">
                Access the 2026 API Security Checklist
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-md mx-auto">
                Enter your work email to view the OWASP API Top 10 verification guide and download the developer PDF cheatsheet.
              </p>
            </div>

            <form onSubmit={handleUnlock} className="space-y-3 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="developer@yourstartup.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 placeholder-neutral-400 focus:bg-white focus:border-neutral-900 focus:outline-none text-xs sm:text-sm transition-all"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white font-semibold text-xs tracking-tight shadow-md transition-all cursor-pointer min-h-[46px]"
              >
                {loading ? (
                  <>
                    <Loader2 size={15} className="animate-spin" />
                    <span>Unlocking Guide...</span>
                  </>
                ) : (
                  <>
                    <span>Unlock Checklist &amp; PDF</span>
                    <ArrowRight size={14} />
                  </>
                )}
              </button>
            </form>

            <p className="text-[11px] text-neutral-400 font-sans">
              100% spam-free. Curated by offensive practitioners.
            </p>
          </div>
        ) : (
          /* Unlocked Content State */
          <div>
            {/* Download Banner */}
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
              <div className="flex items-center gap-3 text-center sm:text-left">
                <div className="w-10 h-10 rounded-2xl bg-white text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200 shadow-xs">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-neutral-950">API Checklist Unlocked!</h3>
                  <p className="text-xs text-neutral-600">Download the PDF cheatsheet for engineering sprint planning.</p>
                </div>
              </div>

              <a
                href="/sample-vapt-report.pdf"
                download="API-Security-Checklist-2026.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold shadow-xs transition-colors shrink-0"
              >
                <Download size={13} />
                <span>Download PDF Cheatsheet</span>
              </a>
            </div>

            {/* Checklist Modules */}
            <div className="mb-14 space-y-6">
              <div className="flex items-center justify-between pb-2 border-b border-dashed border-neutral-200">
                <h2 className="text-lg font-bold text-neutral-950 font-sans">
                  OWASP API Security Top 10 Verification Modules
                </h2>
                <span className="text-xs font-mono text-neutral-400">REST • GraphQL • gRPC</span>
              </div>

              <div className="space-y-5">
                {checklistSections.map((sec, idx) => (
                  <div key={idx} className="p-7 sm:p-8 bg-white border border-neutral-200/80 rounded-3xl shadow-xs space-y-4">
                    <h3 className="text-base font-bold text-neutral-950 font-sans">{sec.title}</h3>
                    <div className="space-y-3">
                      {sec.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-600 font-sans">
                          <div className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                            <CheckCircle size={11} />
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
            <div className="mb-14 p-8 sm:p-10 bg-white border border-neutral-200/80 rounded-3xl shadow-xs space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-900">
                  <Code size={18} />
                </div>
                <h2 className="text-lg font-bold text-neutral-950 font-sans">
                  How to Remediate BOLA in Multi-Tenant Backend APIs
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
                Broken Object Level Authorization (BOLA/IDOR) is the leading cause of critical API data breaches. To eliminate BOLA, never query database models using URL parameters alone. Instead, always couple the requested resource identifier with the authenticated user&apos;s tenant ID retrieved directly from the verified session token or signed JWT context.
              </p>
              <div>
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

            {/* Plain CTA Banner to Quote Form */}
            <div className="p-8 sm:p-12 bg-white border border-dashed border-neutral-300 rounded-3xl text-center space-y-5 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 font-sans">
                Need a Certified Manual API Penetration Test?
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 max-w-xl mx-auto leading-relaxed font-sans">
                Our offensive security practitioners manually test your APIs for BOLA, authentication flaws, and business logic bypasses in 5 business days.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    trackPrimaryQuoteClick("api_checklist_cta");
                    openQuoteModal("api-security-checklist");
                  }}
                  className="inline-flex items-center gap-2 py-3.5 px-8 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white font-semibold text-xs tracking-tight shadow-md transition-colors cursor-pointer"
                >
                  <span>Get a fixed-price quote in 24h</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
      <QuoteModal />
    </div>
  );
}
