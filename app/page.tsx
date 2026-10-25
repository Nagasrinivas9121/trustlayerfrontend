import React from "react";
import Hero from "@/components/Hero";
import HowItWorksStatic from "@/components/HowItWorksStatic";
import BenefitsSection from "@/components/BenefitsSection";
import FoundingClientSection from "@/components/FoundingClientSection";
import PricingSection from "@/components/PricingSection";
import SecurityReportPreviewStatic from "@/components/SecurityReportPreviewStatic";
import TrackRecordSection from "@/components/TrackRecordSection";
import Founder from "@/components/Founder";
import FaqStatic from "@/components/FaqStatic";
import FinalCTA from "@/components/FinalCTA";
import QuoteModal from "@/components/QuoteModal";
import FloatingActions from "@/components/FloatingActions";
import { FAQS } from "@/lib/constants";

export default function Home() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://www.trustlayerlabs.co.in/#faq",
    "mainEntity": FAQS.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  const howToLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": "https://www.trustlayerlabs.co.in/#vapt-process",
    "name": "How to Conduct a Manual API & SaaS Penetration Test",
    "description": "Step-by-step offensive security testing methodology used by TrustLayerLabs to discover BOLA, tenant escapes, and business logic vulnerabilities before enterprise audits.",
    "totalTime": "P5D",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Confidential Scoping & Bilateral Mutual NDA",
        "text": "Define target API endpoints, microservices, and user roles. A bilateral mutual Non-Disclosure Agreement (NDA) is executed upfront before architecture diagrams or staging access are shared.",
        "url": "https://www.trustlayerlabs.co.in/#how-it-works"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Deep Manual Logic & Authorization Penetration Testing",
        "text": "Certified practitioners systematically probe authorization boundaries, BOLA/IDOR, tenant escapes, and multi-step state machines in an isolated staging environment with daily updates and 48-hour critical alert dispatches.",
        "url": "https://www.trustlayerlabs.co.in/#how-it-works"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Developer cURL Proof-of-Concepts & Retest Attestation",
        "text": "Receive an audit-ready technical report containing reproduction cURL scripts, video/HTTP proof-of-concept evidence, and remediation code. After fixes are deployed, complimentary 30-day retesting is performed and a signed Attestation Letter is issued.",
        "url": "https://www.trustlayerlabs.co.in/#how-it-works"
      }
    ]
  };

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.trustlayerlabs.co.in/#service-vapt",
    "name": "Manual API & SaaS Security Testing Worldwide",
    "serviceType": "Penetration Testing & Vulnerability Assessment",
    "description": "Manual offensive security assessments for SaaS, FinTech, and AI platforms targeting BOLA, broken access control, and business logic flaws overlooked by automated scanners.",
    "provider": {
      "@type": "Organization",
      "@id": "https://www.trustlayerlabs.co.in/#organization",
      "name": "TrustLayerLabs"
    },
    "areaServed": [
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "United Kingdom" },
      { "@type": "Country", "name": "Canada" },
      { "@type": "Country", "name": "Australia" },
      { "@type": "Country", "name": "Singapore" },
      { "@type": "Country", "name": "Germany" },
      { "@type": "AdministrativeArea", "name": "European Union" },
      { "@type": "Country", "name": "India" },
      { "@type": "AdministrativeArea", "name": "Worldwide" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Core Security Assessments",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "API Security Sprint" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SaaS Multi-Tenant Assessment" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SOC 2 Readiness Pentest" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI & RAG Application Security" } }
      ]
    }
  };

  return (
    <div className="bg-background min-h-screen text-textPrimary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />

      {/* 1. HERO + TRUST STRIP (Outcome-First, Static BOLA Block, Mutual NDA, MSME Proof) */}
      <Hero />

      {/* 2. HOW IT WORKS (3 Plain Numbered Steps, Zero Animation) */}
      <HowItWorksStatic />

      {/* 3. WHY CHOOSE US (Engineering Advantages, 48h Briefings, Direct Pentester Access) */}
      <BenefitsSection />

      {/* 4. FOUNDING CLIENT PROGRAM (2-3 Discounted Slots, Transparent Give & Get) */}
      <FoundingClientSection />

      {/* 4. PACKAGES & PRICING (3 Fixed-Scope Packages + Other Services Link List) */}
      <PricingSection />

      {/* 5. SAMPLE REPORT PREVIEW (Static Representative BOLA Finding + Retest Attestation) */}
      <SecurityReportPreviewStatic />

      {/* 6. VERIFIABLE TRACK RECORD (Driven by data file, hidden if empty, Founder LinkedIn Links) */}
      <TrackRecordSection />

      {/* 7. PRACTITIONER TEAM (IIT/VIT Credentials, CEH, CWL C3SA Footnote, Lead Auditors) */}
      <Founder />

      {/* 8. FREQUENTLY ASKED QUESTIONS (Plain Semantic <details> Elements, Zero JS Animation) */}
      <FaqStatic />

      {/* 9. HIGH-IMPACT FINAL CTA (Outcome-Led, Primary Quote CTA + Secondary WhatsApp) */}
      <FinalCTA />

      {/* Global Quote Request Modal */}
      <QuoteModal />

      {/* Floating WhatsApp Action & Mobile Bar */}
      <FloatingActions />
    </div>
  );
}
