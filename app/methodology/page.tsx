import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield, CheckCircle, Target, FileText, Code, Lock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VAPT Testing Methodology & Standards",
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
        <div className="mb-16">
          <h2 className="text-xl font-bold text-textPrimary tracking-tight font-sans mb-6">
            Global Offensive Security Standards We Adhere To
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-surface border border-border/80 rounded-xl space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-mono font-bold">
                OWASP
              </div>
              <h3 className="text-sm font-bold text-textPrimary font-sans">OWASP API & Web Top 10</h3>
              <p className="text-xs text-textSecondary leading-relaxed">
                Systematic auditing for Broken Object Level Authorization (BOLA/IDOR), Broken Function Level Authorization (BFLA), JWT manipulation, mass assignment, server-side request forgery (SSRF), and rate-limiting bypasses.
              </p>
            </div>

            <div className="p-6 bg-surface border border-border/80 rounded-xl space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-mono font-bold">
                NIST
              </div>
              <h3 className="text-sm font-bold text-textPrimary font-sans">NIST SP 800-115</h3>
              <p className="text-xs text-textSecondary leading-relaxed">
                Federal and enterprise-grade technical testing methodology covering target identification, target vulnerability analysis, exploitation verification, and post-exploitation risk scoring.
              </p>
            </div>

            <div className="p-6 bg-surface border border-border/80 rounded-xl space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-mono font-bold">
                PTES
              </div>
              <h3 className="text-sm font-bold text-textPrimary font-sans">PTES Framework</h3>
              <p className="text-xs text-textSecondary leading-relaxed">
                The Penetration Testing Execution Standard structuring pre-engagement interactions, intelligence gathering, threat modeling, vulnerability analysis, and remediation-oriented reporting.
              </p>
            </div>
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
                desc: "We define precise target parameters, execute a bilateral mutual NDA, verify staging environment credentials, and agree on testing windows to guarantee zero production disruption or data corruption."
              },
              {
                step: "Phase 2",
                title: "Passive & Active Intelligence Reconnaissance",
                desc: "Mapping subdomains, undiscovered staging endpoints, shadow APIs, CORS misconfigurations, authentication flows, public cloud storage buckets, and third-party software dependencies."
              },
              {
                step: "Phase 3",
                title: "Deep Manual Logic & Authorization Penetration",
                desc: "Our offensive security engineers manually intercept and manipulate API traffic in Burp Suite Professional. We simulate cross-tenant privilege escalation, inspect JWT cryptographic algorithms, evaluate payment transaction workflows, and test race conditions."
              },
              {
                step: "Phase 4",
                title: "CVSS v3.1 Severity Scoring & Remediation Reporting",
                desc: "Compiling zero-fluff, developer-centric technical reports with step-by-step reproduction curl scripts, proof-of-concept exploit recordings, CVSS v3.1 scoring, and ready-to-merge remediation code patches."
              },
              {
                step: "Phase 5",
                title: "Free Retesting & Remediation Verification Letter",
                desc: "After your engineering team deploys remediation patches, we re-evaluate every flagged vulnerability and issue a certified Executive Attestation Letter suitable for SOC 2 auditors, enterprise procurement, and cyber insurance underwriters."
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
          <h2 className="text-xl font-bold text-textPrimary font-sans">Ready to Audit Your SaaS or API?</h2>
          <p className="text-xs text-textSecondary max-w-xl mx-auto">
            Schedule a confidential 30-minute security review with our lead security architects under mutual NDA or view our sample report to see our methodology in action.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/free-assessment"
              className="px-6 py-3 bg-[#0a0a0a] text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-zinc-800 transition-colors"
            >
              Get a Free Security Review →
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
