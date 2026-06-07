import React from "react";
import Hero from "@/components/Hero";
import Proof from "@/components/Proof";
import CaseStudy from "@/components/CaseStudy";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import BlogSection from "@/components/BlogSection";
import Faq from "@/components/Faq";
import ContactForm from "@/components/ContactForm";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <Hero />
      <Proof />
      <CaseStudy />
      <Services />
      <HowItWorks />
      <Testimonials />
      <BlogSection />
      <Faq />
      <ContactForm />
      <FloatingActions />
    </div>
  );
}
