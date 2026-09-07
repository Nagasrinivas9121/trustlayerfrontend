import React from "react";
import Hero from "@/components/Hero";
import Proof from "@/components/Proof";
import SecurityReportPreview from "@/components/SecurityReportPreview";
import CaseStudy from "@/components/CaseStudy";
import WhoWeHelp from "@/components/WhoWeHelp";
import ProblemsWeSolve from "@/components/ProblemsWeSolve";
import CoreServicesSection from "@/components/CoreServicesSection";
import WhatYouReceive from "@/components/WhatYouReceive";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import ManualTestingMatters from "@/components/ManualTestingMatters";
import GrcHomeSection from "@/components/GrcHomeSection";
import Founder from "@/components/Founder";
import BlogSection from "@/components/BlogSection";
import Faq from "@/components/Faq";
import CTA from "@/components/CTA";
import ContactForm from "@/components/ContactForm";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      {/* 1. HERO & PRIMARY TRUST SIGNALS */}
      <Hero />

      {/* 2. TRUST / COMPLIANCE ALIGNMENT SIGNALS */}
      <Proof />

      {/* 3. PROOF OF WORK / SAMPLE SECURITY REPORT */}
      <SecurityReportPreview />

      {/* 4. SECURITY RESEARCH & TECHNICAL INSIGHTS */}
      <CaseStudy />

      {/* 5. WHO WE HELP & PROBLEMS WE SOLVE */}
      <WhoWeHelp />
      <ProblemsWeSolve />

      {/* 6. CORE SERVICES: 4 Outcome-Focused Pillars */}
      <CoreServicesSection />

      {/* 7. WHAT YOU RECEIVE: 6 Tangible Deliverables */}
      <WhatYouReceive />

      {/* 8. WHY CHOOSE TRUSTLAYERLABS & METHODOLOGY */}
      <WhyChooseUs />
      <HowItWorks />
      <ManualTestingMatters />

      {/* 9. GRC & ENTERPRISE READINESS */}
      <GrcHomeSection />

      {/* 10. PRACTITIONER TEAM (SUPPORTING CREDIBILITY) */}
      <Founder />

      {/* 11. SECURITY RESEARCH & INSIGHTS BLOG */}
      <BlogSection />

      {/* 12. BUYER FAQ */}
      <Faq />

      {/* 13. FINAL CTA & DIRECT CONTACT */}
      <CTA />
      <ContactForm />

      {/* Floating Helpers */}
      <FloatingActions />
    </div>
  );
}


