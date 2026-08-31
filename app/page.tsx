import React from "react";
import Hero from "@/components/Hero";
import WhoWeHelp from "@/components/WhoWeHelp";
import ProblemsWeSolve from "@/components/ProblemsWeSolve";
import CoreServicesSection from "@/components/CoreServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import ManualTestingMatters from "@/components/ManualTestingMatters";
import SecurityReportPreview from "@/components/SecurityReportPreview";
import GrcHomeSection from "@/components/GrcHomeSection";
import Proof from "@/components/Proof";
import Founder from "@/components/Founder";
import BlogSection from "@/components/BlogSection";
import Faq from "@/components/Faq";
import CTA from "@/components/CTA";
import ContactForm from "@/components/ContactForm";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      {/* 1. HERO */}
      <Hero />

      {/* 2. WHO WE HELP: FinTech, SaaS, AI */}
      <WhoWeHelp />

      {/* 3. SECURITY PROBLEMS WE SOLVE */}
      <ProblemsWeSolve />

      {/* 4. CORE SERVICES: 4 Pillars + All Services link */}
      <CoreServicesSection />

      {/* 5. WHY CHOOSE TRUSTLAYERLABS */}
      <WhyChooseUs />

      {/* 6. HOW OUR ASSESSMENTS WORK (8-Phase Methodology) */}
      <HowItWorks />

      {/* 7. WHY MANUAL TESTING MATTERS */}
      <ManualTestingMatters />

      {/* 8. SAMPLE SECURITY REPORT / DELIVERABLES */}
      <SecurityReportPreview />

      {/* 9. GRC & ENTERPRISE READINESS */}
      <GrcHomeSection />

      {/* 10. REAL PROOF / CREDIBILITY */}
      <Proof />

      {/* 11. FOUNDER / PRACTITIONER TRUST */}
      <Founder />

      {/* 12. TECHNICAL BLOG & RESEARCH */}
      <BlogSection />

      {/* 13. BUYER FAQ */}
      <Faq />

      {/* 14. FINAL CTA & DIRECT CONTACT */}
      <CTA />
      <ContactForm />

      {/* Floating Helpers */}
      <FloatingActions />
    </div>
  );
}

