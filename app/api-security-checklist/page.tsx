import React from "react";
import Link from "next/link";
import { ArrowLeft, CheckSquare, Download, Shield, Code, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "API Security Checklist 2026",
  description: "Comprehensive 2026 API Security Checklist covering BOLA, JWT authentication, CORS, rate limiting, and OWASP API Top 10 vulnerabilities.",
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/api-security-checklist",
  },
};

export default function ApiSecurityChecklistPage() {
  const checklistSections = [
    {
      title: "1. Authentication & Session Security",
      items: [
        "Enforce HTTPS/TLS 1.3 on all API endpoints; redirect HTTP traffic automatically.",
        "Store JWTs in HTTP-Only, SameSite=Strict cookies rather than localStorage.",
        "Use asymmetric RS256/ES256 algorithms with strong 2048-bit RSA keys.",
        "Implement mandatory refresh token rotation and short (15-min) access token TTLs."
      ]
    },
    {
      title: "2. Authorization & Tenant Isolation (BOLA / BFLA)",
      items: [
        "Verify row-level tenant ownership (req.user.tenantId === record.tenantId) on every endpoint.",
        "Ensure object IDs (UUID v4) cannot be enumerated to access unauthorized records.",
        "Validate role-based access control (RBAC) on administrative endpoints.",
        "Prevent Broken Object Property Level Authorization by filtering input DTO payloads."
      ]
    },
    {
      title: "3. Input Validation & Rate Limiting",
      items: [
        "Sanitize all JSON payloads, query parameters, and headers against injection (SQLi, XSS, Command Injection).",
        "Implement Redis-backed sliding window rate-limiting per IP and user ID.",
        "Restrict payload body size (e.g., max 1MB) to mitigate denial of service.",
        "Configure strict CORS policies; avoid Access-Control-Allow-Origin: * on authenticated APIs."
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
            Essential developer checklist for securing REST, GraphQL, and gRPC endpoints before pushing to production.
          </p>
        </div>

        <div className="space-y-8 mb-16">
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

        {/* CTA Banner */}
        <div className="p-8 bg-surface border border-primary/30 rounded-2xl text-center space-y-4">
          <h3 className="text-xl font-bold text-textPrimary font-sans">Need a Manual API Penetration Test?</h3>
          <p className="text-xs text-textSecondary max-w-xl mx-auto">
            Our offensive security practitioners manually test your APIs for BOLA, authentication flaws, and business logic bypasses in 5 to 7 days.
          </p>
          <div className="pt-2">
            <Link
              href="https://calendar.app.google/jnamj3gawxVunPJm9"
              target="_blank"
              className="inline-block px-8 py-3 bg-[#0a0a0a] text-white font-bold text-xs uppercase tracking-wider rounded-full hover:bg-zinc-800 transition-colors"
            >
              Book Free API Security Review
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
