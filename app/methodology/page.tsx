import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield, CheckCircle, Target, FileText, Code, Lock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VAPT Testing Methodology | OWASP, NIST & PTES Standards",
  description: "Learn TrustLayerLabs' manual vulnerability assessment & penetration testing methodology combining OWASP Top 10, NIST SP 800-115, and PTES standards.",
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/methodology",
  },
};

export default function MethodologyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Testing Methodology — TrustLayerLabs",
    "url": "https://www.trustlayerlabs.co.in/methodology",
    "description": "Manual VAPT and API security testing methodology adhering to OWASP, NIST SP 800-115, and PTES standards.",
  };

  return (
    <div className="bg-background min-h-screen pt-32 pb-24 font-sans text-textPrimary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="section-container max-w-5xl mx-auto">
        <Link 
          href="/" 
          className="inline-flex items-center text-xs uppercase font-sans tracking-widest text-textSecondary hover:text-textPrimary transition-colors gap-2 mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
          Back to Home
        </Link>

        <div className="mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-widest mb-4">
            <span>Security Engineering Process</span>
          </div>
          <h1 className="heading-1 mb-6 text-textPrimary font-extrabold tracking-tight">
            Our Offensive <span className="text-primary">Testing Methodology</span>
          </h1>
          <p className="body-text text-base max-w-3xl text-textSecondary leading-relaxed">
            TrustLayerLabs combines industry-standard frameworks — OWASP Top 10, NIST SP 800-115, and PTES — with expert manual logic penetration testing to discover vulnerabilities automated scanners miss.
          </p>
        </div>

        {/* Methodology Standards Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 bg-surface border border-border/80 rounded-xl space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-mono font-bold">
              OWASP
            </div>
            <h3 className="text-sm font-bold text-textPrimary font-sans">OWASP API & Web Top 10</h3>
            <p className="text-xs text-textSecondary leading-relaxed">
              Targeting BOLA, IDOR, BFLA, JWT signature exploits, XSS, SQLi, and rate-limiting bypasses.
            </p>
          </div>

          <div className="p-6 bg-surface border border-border/80 rounded-xl space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-mono font-bold">
              NIST
            </div>
            <h3 className="text-sm font-bold text-textPrimary font-sans">NIST SP 800-115</h3>
            <p className="text-xs text-textSecondary leading-relaxed">
              Rigorous technical security testing guidelines for system discovery, vulnerability scanning, and exploitation.
            </p>
          </div>

          <div className="p-6 bg-surface border border-border/80 rounded-xl space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-mono font-bold">
              PTES
            </div>
            <h3 className="text-sm font-bold text-textPrimary font-sans">PTES Framework</h3>
            <p className="text-xs text-textSecondary leading-relaxed">
              Structured Penetration Testing Execution Standard covering intelligence gathering, threat modeling, and reporting.
            </p>
          </div>
        </div>

        {/* 5 Phase Breakdown */}
        <div className="space-y-8 mb-16">
          <h2 className="heading-2 text-textPrimary font-bold">
            The 5 Phases of a TrustLayer VAPT Audit
          </h2>

          <div className="space-y-6">
            {[
              {
                step: "Phase 1",
                title: "Scoping & Mutual NDA Execution",
                desc: "We define precise target parameters, sign a mutual NDA, verify staging environment credentials, and agree on testing windows to guarantee zero production disruption."
              },
              {
                step: "Phase 2",
                title: "Passive & Active Intelligence Reconnaissance",
                desc: "Mapping subdomains, active API routes, authentication endpoints, cloud storage buckets, and third-party dependency trees."
              },
              {
                step: "Phase 3",
                title: "Deep Manual Logic & Authorization Penetration",
                desc: "Our OSCP-certified security architects manually intercept API queries in Burp Suite, test row-level tenant authorization (BOLA/IDOR), bypass JWT tokens, and validate session privileges."
              },
              {
                step: "Phase 4",
                title: "CVSS v3.1 Severity Scoring & Remediation Reporting",
                desc: "Compiling zero-fluff technical reports with exact step-by-step reproduction scripts, PoCs, CVSS ratings, and ready-to-commit code patches."
              },
              {
                step: "Phase 5",
                title: "Free Retesting & Scope Attestation Certificate",
                desc: "After your developers apply code patches, we retest 100% of discovered vulnerabilities for free within 30 days and issue your signed Attestation Certificate."
              }
            ].map((phase, idx) => (
              <div key={idx} className="p-6 bg-surface border border-border/80 rounded-xl space-y-2 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-primary uppercase tracking-wider">{phase.step}</span>
                  <CheckCircle size={16} className="text-success" />
                </div>
                <h3 className="text-base font-bold text-textPrimary font-sans">{phase.title}</h3>
                <p className="text-xs text-textSecondary leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="p-8 bg-surface border border-primary/30 rounded-2xl text-center space-y-4">
          <h3 className="text-xl font-bold text-textPrimary font-sans">Ready to Audit Your SaaS or API?</h3>
          <p className="text-xs text-textSecondary max-w-xl mx-auto">
            Book a free 15-minute consultation with our lead pentester or download our sample report to see our methodology in action.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="https://calendar.app.google/jnamj3gawxVunPJm9"
              target="_blank"
              className="px-6 py-3 bg-[#0a0a0a] text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-zinc-800 transition-colors"
            >
              Book Free Review
            </Link>
            <Link
              href="/sample-report"
              className="px-6 py-3 bg-surface border border-border text-textPrimary text-xs font-bold uppercase tracking-wider rounded-full hover:border-zinc-400 transition-colors"
            >
              View Sample Report
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
