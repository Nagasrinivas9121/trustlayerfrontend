"use client";

import React, { useState } from "react";
import { 
  ShieldCheck, 
  CheckCircle2, 
  Award, 
  Database, 
  Lock, 
  Check, 
  FileCheck, 
  FileText, 
  ExternalLink, 
  Scale, 
  ShieldAlert,
  Globe
} from "lucide-react";
import CertificateModal from "@/components/CertificateModal";

const AUDIT_FRAMEWORKS = [
  {
    type: "COMPLIANCE & CONTROLS",
    title: "SOC 2 Type II & ISO 27001:2022 Alignment",
    impact: "We map authorization boundaries, tenant segregation, and audit logging to SOC 2 Security and Confidentiality Trust Services Criteria and ISO/IEC 27001:2022 Annex A controls.",
    icon: ShieldCheck,
    tag: "SOC 2 & ISO 27001",
    points: [
      "Auditor-ready evidence packet with reproduction steps",
      "Tenant segregation and cross-organization boundary validation",
      "Executive summary tailored for enterprise vendor risk reviews"
    ]
  },
  {
    type: "DATA INTEGRITY",
    title: "Multi-Tenant Isolation & RLS Boundary Testing",
    impact: "We test row-level database policies (RLS), cache scoping in Redis, and background worker jobs to ensure one customer can never inspect another tenant's data.",
    icon: Database,
    tag: "Multi-Tenant Isolation",
    points: [
      "Cross-tenant BOLA and IDOR endpoint validation",
      "Database row-level security (RLS) enforcement verification",
      "JWT and session token invalidation upon role changes"
    ]
  },
  {
    type: "CLOUD INFRASTRUCTURE",
    title: "CIS Cloud Benchmarks & IAM Least Privilege",
    impact: "We review cloud infrastructure configurations, S3/GCS bucket ACLs, and IAM policies to prevent unauthorized privilege escalation and sensitive database exposure.",
    icon: Lock,
    tag: "CIS Benchmarks",
    points: [
      "IAM role assumption and privilege escalation vector testing",
      "Object storage and database public exposure auditing",
      "Every finding manually verified with a reproducible PoC"
    ]
  }
];

export default function Proof() {
  const [showCertificate, setShowCertificate] = useState(false);

  return (
    <section className="py-20 sm:py-28 bg-[#FAFAFA] border-t border-dashed border-neutral-200" id="trust">
      <div className="section-container max-w-[1140px] mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-neutral-200/90 shadow-sm rounded-full text-xs font-semibold text-neutral-800 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>Institutional Governance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 font-sans leading-tight mb-4">
              Compliance Frameworks &amp; <br className="hidden sm:inline" />
              <span className="text-primary">Institutional Trust Vault</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-sans">
              How our manual security assessments satisfy auditor requirements, vendor risk reviews, and enterprise procurement mandates.
            </p>
          </div>

          {/* Quick Pill Badges */}
          <div className="flex flex-wrap gap-2">
            {["Remote-First Delivery (India)", "SOC 2 & ISO 27001 Aligned", "Bilateral Mutual NDA", "USD & Multi-Currency Billing"].map((item, i) => (
              <div 
                key={i} 
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-neutral-200/80 rounded-full text-xs font-semibold text-neutral-700 shadow-xs font-sans"
              >
                <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Asymmetric Split Layout: Left = Audit Frameworks / Right = Legal Guarantees */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: 3 Framework Cards (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-mono uppercase text-neutral-500 font-bold tracking-wider mb-2 flex items-center gap-2">
              <Scale size={14} className="text-primary" />
              <span>AUDIT &amp; REGULATORY STANDARDS MAPPING</span>
            </div>

            {AUDIT_FRAMEWORKS.map((fw, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 bg-white border border-neutral-200/90 rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:border-neutral-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-primary text-[10px] font-mono font-bold tracking-wider">
                      <fw.icon size={12} />
                      <span>{fw.type}</span>
                    </div>
                    <span className="text-[10px] font-mono text-neutral-600 font-semibold bg-neutral-100 px-2.5 py-0.5 rounded-md">
                      {fw.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-900 tracking-tight font-sans mb-2 group-hover:text-primary transition-colors">
                    {fw.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans mb-5">
                    {fw.impact}
                  </p>
                </div>

                {/* Technical Points Checklist */}
                <div className="border-t border-dashed border-neutral-200 pt-3.5 space-y-2">
                  {fw.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-neutral-700 font-sans">
                      <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200 mt-0.5">
                        <Check size={9} strokeWidth={3} />
                      </div>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Institutional Verification Vault (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-mono uppercase text-neutral-500 font-bold tracking-wider mb-2 flex items-center gap-2">
              <ShieldCheck size={14} className="text-emerald-600" />
              <span>OFFICIAL VERIFIABLE ASSURANCES</span>
            </div>

            {/* Card 1: Govt of India MSME Registration */}
            <div className="p-6 sm:p-7 bg-white border border-neutral-200/90 rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.02)] space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-200/70 flex items-center justify-center text-primary shadow-xs">
                  <Award size={20} />
                </div>
                <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-md">
                  VERIFIED LEGAL ENTITY
                </span>
              </div>

              <div>
                <h4 className="text-base font-bold text-neutral-950 font-sans mb-1">
                  Govt. of India Registered MSME
                </h4>
                <p className="text-xs font-mono text-neutral-500 font-semibold mb-2">
                  UDYAM-AP-21-0044317
                </p>
                <p className="text-xs text-neutral-600 leading-relaxed font-sans mb-4">
                  Officially registered enterprise under the Ministry of Micro, Small and Medium Enterprises, Government of India.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowCertificate(true)}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-neutral-900 hover:bg-black text-white text-xs font-semibold transition-all cursor-pointer min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 shadow-sm"
              >
                <Award size={14} />
                <span>Inspect Official Registration Certificate ↗</span>
              </button>
            </div>

            {/* Card 2: Mutual NDA Guarantee */}
            <div className="p-6 sm:p-7 bg-white border border-neutral-200/90 rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.02)] space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200/70 flex items-center justify-center text-emerald-600 shadow-xs">
                  <FileCheck size={20} />
                </div>
                <span className="text-[10px] font-mono font-bold text-neutral-600 bg-neutral-100 px-2.5 py-0.5 rounded-md">
                  UPFRONT LEGAL PROTECTION
                </span>
              </div>

              <h4 className="text-base font-bold text-neutral-950 font-sans mb-1">
                Bilateral Mutual NDA Executed First
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                We sign a legally binding Mutual Non-Disclosure Agreement before receiving access to staging endpoints, architecture diagrams, or API tokens.
              </p>

              <div className="pt-2">
                <a
                  href="/nda-process"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-blue-700 transition-colors"
                >
                  <span>Review our standard NDA workflow</span>
                  <ExternalLink size={11} />
                </a>
              </div>
            </div>

            {/* Card 3: Free Retesting & Attestation Letter */}
            <div className="p-6 sm:p-7 bg-white border border-neutral-200/90 rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.02)] space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-2xl bg-indigo-50 border border-indigo-200/70 flex items-center justify-center text-indigo-600 shadow-xs">
                  <ShieldCheck size={20} />
                </div>
                <span className="text-[10px] font-mono font-bold text-primary bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-md">
                  AUDITOR-READY
                </span>
              </div>

              <h4 className="text-base font-bold text-neutral-950 font-sans mb-1">
                Formal Retest Attestation Deliverable
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                Includes complimentary 30-day retesting. After your team patches reported vulnerabilities, we verify the fixes and issue a signed Attestation Letter.
              </p>

              <div className="pt-2">
                <a
                  href="/sample-report"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-blue-700 transition-colors"
                >
                  <span>Preview sample deliverable &amp; attestation</span>
                  <ExternalLink size={11} />
                </a>
              </div>
            </div>

            {/* Card 4: Remote-First Engagements & Transparent Billing */}
            <div className="p-6 sm:p-7 bg-white border border-neutral-200/90 rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.02)] space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-2xl bg-sky-50 border border-sky-200/70 flex items-center justify-center text-sky-600 shadow-xs">
                  <Globe size={20} />
                </div>
                <span className="text-[10px] font-mono font-bold text-sky-700 bg-sky-50 border border-sky-200 px-2.5 py-0.5 rounded-md">
                  REMOTE-FIRST STARTUPS
                </span>
              </div>

              <h4 className="text-base font-bold text-neutral-950 font-sans mb-1">
                Serving Startups in India &amp; Remotely
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                Remote-first execution under international mutual NDAs. We accommodate US (PST/EST), European (GMT/CET), and APAC time zones with multi-currency billing in USD, EUR, GBP, and INR via Stripe or SWIFT wire transfer.
              </p>
            </div>

          </div>

        </div>

        {/* Credibility Footer Bar with StartupBase badge */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-white border border-dashed border-neutral-300 rounded-2xl">
          <p className="text-xs text-neutral-600 font-sans text-center sm:text-left">
            <strong>Institutional Trust Assurance:</strong> Independent offensive assessments for SaaS, FinTech, and AI startups preparing for enterprise audits.
          </p>

          <a 
            href="https://startupbase.io/products/trustlayerlabs?utm_source=startupbase&utm_medium=badge&utm_campaign=launch-badge-light" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center transition-transform hover:scale-105 h-[38px] shrink-0"
            title="TrustLayerLabs launched on StartupBase"
          >
            <img 
              src="https://statics.startupbase.io/site/badges/launched-on-sb.svg" 
              alt="Launched on StartupBase" 
              height="38" 
              style={{ height: "38px", width: "auto" }}
              className="rounded-full shadow-xs border border-neutral-200"
            />
          </a>
        </div>

      </div>

      {/* Certificate Modal Showcase */}
      <CertificateModal 
        isOpen={showCertificate} 
        initialCertId="msme"
        onClose={() => setShowCertificate(false)} 
      />
    </section>
  );
}
