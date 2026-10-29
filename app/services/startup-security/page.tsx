import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Startup Security & SOC 2 Readiness",
  description: "Fast-track SOC 2 Type II, ISO 27001, and enterprise vendor audit readiness for SaaS, AI, and FinTech startups. GRC controls mapping and pentest attestation.",
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/services/startup-security",
  },
};

export default function StartupSecurityPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Startup Security & SOC2 / ISO 27001 Readiness",
        "provider": { "@id": "https://www.trustlayerlabs.co.in/#organization" },
        "serviceType": "Compliance Consulting",
        "description": "Fast-track SOC2 Type II, ISO 27001, and enterprise vendor audit readiness for SaaS, AI, and FinTech startups. GRC controls mapping and pentest attestation.",
        "areaServed": "India",
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trustlayerlabs.co.in" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.trustlayerlabs.co.in/services" },
          { "@type": "ListItem", "position": 3, "name": "Startup Security & SOC2 / ISO 27001 Readiness", "item": "https://www.trustlayerlabs.co.in/services/startup-security" },
        ],
      },
    ],
  };

  return (
    <div className="bg-background min-h-screen pt-32 pb-24 font-sans text-textPrimary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="section-container max-w-5xl mx-auto">
        <Link href="/services" className="inline-flex items-center text-xs uppercase tracking-widest text-textSecondary hover:text-textPrimary transition-colors gap-2 mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" /> Back to All Services
        </Link>
        <div className="mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-widest mb-4">
            <span>GRC & Compliance Readiness</span>
          </div>
          <h1 className="heading-1 mb-6 text-textPrimary font-extrabold tracking-tight">
            Startup Security & <span className="text-primary">SOC2 / ISO Readiness</span>
          </h1>
          <p className="body-text text-base max-w-3xl text-textSecondary leading-relaxed">
            Close enterprise sales deals faster by establishing audited security policies, automated evidence pipelines (Vanta, Drata, Secureframe), and third-party pentest attestations.
          </p>
        </div>
        <div className="mb-16">
          <h2 className="text-xl font-bold text-textPrimary font-sans mb-6">
            Startup Security & Readiness Modules
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-surface border border-border/80 rounded-xl space-y-3 shadow-sm">
              <h3 className="text-sm font-bold text-textPrimary font-sans">1. SOC 2 Type II & ISO 27001 Gap Analysis</h3>
              <p className="text-xs text-textSecondary leading-relaxed">
                Mapping internal engineering controls against Trust Services Criteria and ISO 27001 Annex A requirements to clear enterprise vendor risk questionnaires and accelerate security reviews.
              </p>
            </div>
            <div className="p-6 bg-surface border border-border/80 rounded-xl space-y-3 shadow-sm">
              <h3 className="text-sm font-bold text-textPrimary font-sans">2. Automated Evidence Integration (Vanta / Drata)</h3>
              <p className="text-xs text-textSecondary leading-relaxed">
                Integrating cloud posture and developer workflows into continuous compliance platforms like Vanta, Drata, and Secureframe to automate access reviews, policy tracking, and audit log verification.
              </p>
            </div>
            <div className="p-6 bg-surface border border-border/80 rounded-xl space-y-3 shadow-sm">
              <h3 className="text-sm font-bold text-textPrimary font-sans">3. Enterprise Vendor Risk Questionnaire Support</h3>
              <p className="text-xs text-textSecondary leading-relaxed">
                Assisting engineering and revenue teams in completing complex security questionnaires (SIG Lite, CAIQ, custom vendor security assessments) with verified architectural evidence and policy citations.
              </p>
            </div>
            <div className="p-6 bg-surface border border-border/80 rounded-xl space-y-3 shadow-sm">
              <h3 className="text-sm font-bold text-textPrimary font-sans">4. Pentest Attestation & Trust Badges</h3>
              <p className="text-xs text-textSecondary leading-relaxed">
                Issuing executive pentest attestation reports and verifiable trust badges for your website security page to give enterprise buyers instant confidence and prove third-party validation.
              </p>
            </div>
          </div>
        </div>

        {/* Deliverables Section */}
        <div className="mb-16 bg-surface border border-border/80 rounded-2xl p-8 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-textPrimary font-sans">
            Startup Compliance Deliverables & Audit Readiness Framework
          </h2>
          <p className="text-xs text-textSecondary leading-relaxed font-sans">
            Our startup security program is specifically tailored for rapid-growth engineering teams. We deliver modular information security policies (ISPs), disaster recovery plans, employee access guidelines, and an auditor-approved remediation roadmap that minimizes engineering overhead.
          </p>
        </div>

        {/* Startup Security FAQs */}
        <div className="mb-16 bg-surface border border-border/80 rounded-2xl p-6 sm:p-8 shadow-sm">
          <h2 className="text-lg sm:text-xl font-bold text-textPrimary font-sans mb-6">
            Frequently Asked Startup Security & Compliance Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-textSecondary">
            <div className="space-y-2">
              <h3 className="text-xs sm:text-sm font-bold text-textPrimary font-sans">
                When should a startup begin preparing for SOC 2 or ISO 27001?
              </h3>
              <p className="leading-relaxed">
                Startups should begin readiness when enterprise prospects request security attestations or vendor risk questionnaires (SIG, CAIQ). Preparing early prevents deal slippage and avoids disruptive code refactoring later in the sales cycle.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xs sm:text-sm font-bold text-textPrimary font-sans">
                How do platforms like Vanta, Drata, and Secureframe fit into your program?
              </h3>
              <p className="leading-relaxed">
                We assist you in configuring automated compliance tools, connecting cloud APIs, remediating failing tests, and setting up access review workflows so your audit dashboard shows green before external auditors arrive.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xs sm:text-sm font-bold text-textPrimary font-sans">
                Does TrustLayerLabs provide the required annual third-party penetration test?
              </h3>
              <p className="leading-relaxed">
                Yes. Both SOC 2 Type II and ISO 27001 mandate annual independent penetration tests. We perform CREST-aligned testing covering web apps, cloud infrastructure, and APIs, and issue an auditor-recognized attestation letter.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xs sm:text-sm font-bold text-textPrimary font-sans">
                Can you help our team answer enterprise vendor risk questionnaires?
              </h3>
              <p className="leading-relaxed">
                Yes. We work alongside your engineering and revenue operations teams to complete detailed enterprise security questionnaires, providing documented policy citations and architectural proof.
              </p>
            </div>
          </div>
        </div>

        <div className="p-8 bg-surface border border-primary/30 rounded-2xl text-center space-y-4">
          <h2 className="text-xl font-bold text-textPrimary font-sans">Book Startup Security Review</h2>
          <p className="text-xs text-textSecondary max-w-xl mx-auto">
            Clear your enterprise security questionnaires in days with our startup readiness program.
          </p>
          <div className="pt-2">
            <Link href="/free-assessment" className="inline-flex items-center gap-2 px-8 py-3 bg-[#0a0a0a] text-white font-bold text-xs uppercase tracking-wider rounded-full hover:bg-zinc-800 transition-colors">
              Get a fixed-price quote in 24h <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
