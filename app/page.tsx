import React from "react";
import Hero from "@/components/Hero";
import WhoWeHelp from "@/components/WhoWeHelp";
import ProblemsWeSolve from "@/components/ProblemsWeSolve";
import SecurityReportPreview from "@/components/SecurityReportPreview";
import Proof from "@/components/Proof";
import WhatYouReceive from "@/components/WhatYouReceive";
import WhyChooseUs from "@/components/WhyChooseUs";
import ManualTestingMatters from "@/components/ManualTestingMatters";
import HowItWorks from "@/components/HowItWorks";
import CoreServicesSection from "@/components/CoreServicesSection";
import GrcHomeSection from "@/components/GrcHomeSection";
import CaseStudy from "@/components/CaseStudy";
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

      {/* 2. WHO TRUSTLAYERLABS HELPS (B2B SaaS, AI, FinTech) */}
      <WhoWeHelp />

      {/* 3. SECURITY PROBLEMS / VULNERABILITIES TESTED */}
      <ProblemsWeSolve />

      {/* 4. PROOF / SAMPLE SECURITY REPORT & COMPLIANCE ALIGNMENT */}
      <SecurityReportPreview />
      <Proof />

      {/* 5. TANGIBLE DELIVERABLES (WHAT YOU RECEIVE) */}
      <WhatYouReceive />

      {/* 6. WHY TRUSTLAYERLABS & HUMAN REASONING VS AUTOMATED SCANNERS */}
      <WhyChooseUs />
      <ManualTestingMatters />

      {/* 7. METHODOLOGY / ENGAGEMENT PROCESS */}
      <HowItWorks />

      {/* 8. SERVICES & OFFER ARCHITECTURE */}
      <CoreServicesSection />
      <GrcHomeSection />

      {/* 9. DEEP TECHNICAL RESEARCH & PRACTITIONER CREDIBILITY */}
      <CaseStudy />
      <Founder />
      <BlogSection />

      {/* 10. BUYER FAQ */}
      <Faq />

      {/* 11. FINAL CTA & DIRECT LEAD CONVERSION INTAKE */}
      <CTA />
      <ContactForm />

      {/* Floating Helpers */}
      <FloatingActions />
    </div>
  );
}
