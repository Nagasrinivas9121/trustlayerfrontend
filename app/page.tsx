import React from "react";
import Hero from "@/components/Hero";
import WhoWeHelp from "@/components/WhoWeHelp";
import ProblemsWeSolve from "@/components/ProblemsWeSolve";
import ManualTestingMatters from "@/components/ManualTestingMatters";
import SecurityReportPreview from "@/components/SecurityReportPreview";
import Proof from "@/components/Proof";
import WhatYouReceive from "@/components/WhatYouReceive";
import WhyChooseUs from "@/components/WhyChooseUs";
import CoreServicesSection from "@/components/CoreServicesSection";
import HowItWorks from "@/components/HowItWorks";
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

      {/* 2. WHO TRUSTLAYERLABS HELPS (Primary ICP: B2B SaaS, AI, FinTech) */}
      <WhoWeHelp />

      {/* 3. SECURITY PROBLEMS / VULNERABILITIES TESTED */}
      <ProblemsWeSolve />

      {/* 4. WHY MANUAL TESTING MATTERS (Human Reasoning vs Automated Scanners) */}
      <ManualTestingMatters />

      {/* 5. PROOF / SAMPLE SECURITY REPORT & COMPLIANCE ALIGNMENT */}
      <SecurityReportPreview />
      <Proof />

      {/* 6. TANGIBLE DELIVERABLES (WHAT YOU RECEIVE) */}
      <WhatYouReceive />

      {/* 7. WHY CHOOSE TRUSTLAYERLABS */}
      <WhyChooseUs />

      {/* 8. OFFER ARCHITECTURE (Security Snapshot, API Security, Full VAPT, Enterprise Readiness) */}
      <CoreServicesSection />

      {/* 9. METHODOLOGY / 8-PHASE ENGAGEMENT PROCESS */}
      <HowItWorks />

      {/* 10. GRC & ENTERPRISE READINESS ADVISORY */}
      <GrcHomeSection />

      {/* 11. DEEP TECHNICAL RESEARCH & PRACTITIONER CREDIBILITY */}
      <CaseStudy />
      <Founder />
      <BlogSection />

      {/* 12. BUYER FAQ */}
      <Faq />

      {/* 13. FINAL CTA & DIRECT LEAD CONVERSION INTAKE */}
      <CTA />
      <ContactForm />

      {/* 14. FLOATING CONVERSION HELPERS */}
      <FloatingActions />
    </div>
  );
}
