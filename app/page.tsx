import React from "react";
import Hero from "@/components/Hero";
import Proof from "@/components/Proof";
import About from "@/components/About";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import CaseStudy from "@/components/CaseStudy";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <div className="bg-background">
      <Hero />
      <Proof />
      <About />
      <Services />
      <HowItWorks />
      <CaseStudy />
      <CTA />
    </div>
  );
}
