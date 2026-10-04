import React from "react";
import Hero from "@/components/Hero";
import WhoWeHelp from "@/components/WhoWeHelp";
import SecurityBoundaries from "@/components/SecurityBoundaries";
import ProblemsWeSolve from "@/components/ProblemsWeSolve";
import ManualTestingMatters from "@/components/ManualTestingMatters";
import SecurityReportPreview from "@/components/SecurityReportPreview";
import WhatYouReceive from "@/components/WhatYouReceive";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import CoreServicesSection from "@/components/CoreServicesSection";
import GrcHomeSection from "@/components/GrcHomeSection";
import CaseStudy from "@/components/CaseStudy";
import BlogSection from "@/components/BlogSection";
import Founder from "@/components/Founder";
import Proof from "@/components/Proof";
import Faq from "@/components/Faq";
import CTA from "@/components/CTA";
import ContactForm from "@/components/ContactForm";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  return (
    <main id="main-content" className="bg-background min-h-screen">
      {/* 1. HERO */}
      <Hero />

      {/* 2. WHO WE HELP (Primary ICP: B2B SaaS, AI SaaS, FinTech) */}
      <WhoWeHelp />

      {/* 3. SECURITY BOUNDARIES WE TEST (Identity, Tenant, Role, Object, Action, State) */}
      <SecurityBoundaries />

      {/* 4. CRITICAL SECURITY FLAWS AUTOMATED SCANNERS MISS */}
      <ProblemsWeSolve />

      {/* 5. WHY MANUAL TESTING MATTERS (Human Reasoning vs Automated Scanners) */}
      <ManualTestingMatters />

      {/* 6. SAMPLE REPORT (Representative Example — Not Client Work) */}
      <SecurityReportPreview />

      {/* 7. WHAT THE CLIENT RECEIVES (Concrete Deliverables) */}
      <WhatYouReceive />

      {/* 8. WHY TRUSTLAYERLABS (Practitioner Credibility & Differentiation) */}
      <WhyChooseUs />

      {/* 9. ASSESSMENT METHODOLOGY (Understand → Test → Validate → Fix → Retest) */}
      <HowItWorks />

      {/* 10. CORE ASSESSMENT OPTIONS (Offer Architecture Sales Ladder) */}
      <CoreServicesSection />

      {/* 11. ENTERPRISE / GRC READINESS (Technical Security & Control Mapping) */}
      <GrcHomeSection />

      {/* 12. TECHNICAL RESEARCH (Attack Scenarios & Practitioner Insights) */}
      <CaseStudy />
      <BlogSection />

      {/* 13. PRACTITIONER CREDIBILITY & LEGITIMATE TRUST SIGNALS */}
      <Founder />
      <Proof />

      {/* 14. FAQ */}
      <Faq />

      {/* 15. FINAL CTA & INTAKE */}
      <CTA />
      <ContactForm />

      {/* 16. FLOATING ACTIONS */}
      <FloatingActions />
    </main>
  );
}
