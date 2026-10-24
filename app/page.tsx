import React from "react";
import Hero from "@/components/Hero";
import BrandTicker from "@/components/BrandTicker";
import StatementSection from "@/components/StatementSection";
import ProblemsSection from "@/components/ProblemsSection";
import BenefitsSection from "@/components/BenefitsSection";
import StepsSection from "@/components/StepsSection";
import ServicesShowcase from "@/components/ServicesShowcase";
import ComparisonSection from "@/components/ComparisonSection";
import AchievementsSection from "@/components/AchievementsSection";
import SecurityReportPreview from "@/components/SecurityReportPreview";
import Founder from "@/components/Founder";
import Proof from "@/components/Proof";
import FaqChat from "@/components/FaqChat";
import JoinUsCTA from "@/components/JoinUsCTA";
import ContactForm from "@/components/ContactForm";
import FloatingActions from "@/components/FloatingActions";
import { FAQS } from "@/lib/constants";

export default function Home() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://www.trustlayerlabs.co.in/#faq",
    "mainEntity": FAQS.slice(0, 8).map((faq) => ({
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
    "totalTime": "P7D",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Confidential Scoping & Bilateral Mutual NDA",
        "text": "Define target API endpoints, microservices, and user roles. A bilateral mutual Non-Disclosure Agreement (NDA) is executed upfront before architecture diagrams or staging access are shared.",
        "url": "https://www.trustlayerlabs.co.in/#steps"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Deep Manual Logic & Authorization Penetration Testing",
        "text": "Certified practitioners systematically probe authorization boundaries, BOLA/IDOR, tenant escapes, and multi-step state machines in an isolated staging environment with daily updates and 48-hour critical alert dispatches.",
        "url": "https://www.trustlayerlabs.co.in/#steps"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Developer cURL Proof-of-Concepts & Free Retest Attestation",
        "text": "Receive an audit-ready technical report containing reproduction cURL scripts, video/HTTP proof-of-concept evidence, and remediation code. After fixes are deployed, complimentary 30-day retesting is performed and a signed Attestation Letter is issued.",
        "url": "https://www.trustlayerlabs.co.in/#steps"
      }
    ]
  };

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.trustlayerlabs.co.in/#service-vapt",
    "name": "Manual API & SaaS Security Testing",
    "serviceType": "Penetration Testing & Vulnerability Assessment",
    "description": "Manual offensive security assessments for SaaS, FinTech, and AI platforms targeting BOLA, broken access control, and business logic flaws overlooked by automated scanners.",
    "provider": {
      "@type": "Organization",
      "@id": "https://www.trustlayerlabs.co.in/#organization",
      "name": "TrustLayerLabs"
    },
    "areaServed": [
      { "@type": "City", "name": "Bengaluru" },
      { "@type": "City", "name": "Hyderabad" },
      { "@type": "Country", "name": "India" },
      { "@type": "AdministrativeArea", "name": "Global" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Core Security Assessments",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "API Security Testing" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SaaS Multi-Tenant VAPT" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI & RAG Application Security" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "FinTech Security Assessment" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SOC 2 & ISO 27001 Readiness" } }
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

      {/* 1. HERO (CodeDale Structure: Availability Pill, Tilted Quote Cards, Center Headline with Badges, Dual Avatar CTA) */}
      <Hero />

      {/* 2. BRAND & FRAMEWORK MARQUEE (CodeDale Infinite Marquee Ticker) */}
      <BrandTicker />

      {/* 3. PRACTITIONER STATEMENT (CodeDale Dashed Border Grid & Floating Cursor Badge) */}
      <StatementSection />

      {/* 4. THE CHALLENGES MODERN BUSINESSES FACE (CodeDale 6-Card Problem Grid with Code PoCs) */}
      <ProblemsSection />

      {/* 5. WHY CHOOSE TRUSTLAYER LABS (CodeDale 6-Grid Dashed Benefits & Rolling Button) */}
      <BenefitsSection />

      {/* 6. SOLUTIONS TAILORED FOR YOUR GROWTH (CodeDale 3x3 Overlapping Cards Showcase) */}
      <ServicesShowcase />

      {/* 7. HOW TO GET STARTED (CodeDale 3-Step Dynamic Mockup Switcher) */}
      <StepsSection />

      {/* 8. WHAT MAKES US DIFFERENT (CodeDale 4-Column Feature Matrix) */}
      <ComparisonSection />

      {/* 9. TECHNICAL STANDARDS & CAPABILITIES (CodeDale 3-Card Showcase: Fan-out Reports, Huge '8' with Floating Badges, Growth Graph) */}
      <AchievementsSection />

      {/* 12. SAMPLE ASSESSMENT REPORT PREVIEW (Interactive Deep Dive) */}
      <div id="sample-report-preview" className="py-8">
        <SecurityReportPreview />
      </div>

      {/* 13. PRACTITIONER CREDIBILITY & LEGITIMATE TRUST SIGNALS */}
      <Founder />
      <Proof />

      {/* 14. FREQUENTLY ASKED QUESTIONS (CodeDale Chat-Style FAQ with Founder Avatar) */}
      <FaqChat />

      {/* 15. HIGH-IMPACT END CTA (CodeDale Dark Card with Glowing Border Button & Terminal Animation) */}
      <JoinUsCTA />

      {/* 16. DETAILED INTAKE FORM */}
      <ContactForm />

      {/* 17. FLOATING ACTIONS */}
      <FloatingActions />
    </div>
  );
}
