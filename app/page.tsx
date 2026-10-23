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
    "@id": "https://trustlayerlabs.co.in/#faq",
    "mainEntity": FAQS.slice(0, 8).map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <div className="bg-background min-h-screen text-textPrimary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
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
