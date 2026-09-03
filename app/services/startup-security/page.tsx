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
        "areaServed": ["India", "Global"],
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="p-6 bg-surface border border-border/80 rounded-xl space-y-3">
            <h3 className="text-sm font-bold text-textPrimary font-sans">SOC2 & ISO 27001 Gap Analysis</h3>
            <p className="text-xs text-textSecondary leading-relaxed">
              Mapping internal controls against Trust Services Criteria and ISO 27001 Annex A requirements to clear enterprise vendor risk questionnaires.
            </p>
          </div>
          <div className="p-6 bg-surface border border-border/80 rounded-xl space-y-3">
            <h3 className="text-sm font-bold text-textPrimary font-sans">Pentest Attestation & Trust Badges</h3>
            <p className="text-xs text-textSecondary leading-relaxed">
              Issuing executive pentest attestation reports and verifiable trust badges for your website security page to give enterprise buyers instant confidence.
            </p>
          </div>
        </div>
        <div className="p-8 bg-surface border border-primary/30 rounded-2xl text-center space-y-4">
          <h3 className="text-xl font-bold text-textPrimary">Book Startup Security Review</h3>
          <p className="text-xs text-textSecondary max-w-xl mx-auto">
            Clear your enterprise security questionnaires in days with our startup readiness program.
          </p>
          <div className="pt-2">
            <Link href="https://calendar.app.google/jnamj3gawxVunPJm9" target="_blank" className="inline-flex items-center gap-2 px-8 py-3 bg-[#0a0a0a] text-white font-bold text-xs uppercase tracking-wider rounded-full hover:bg-zinc-800 transition-colors">
              Book Readiness Review <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
