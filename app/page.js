import Hero from "@/components/Hero";
import ScannerFlow from "@/components/ScannerFlow";
import Features from "@/components/Features";
import Process from "@/components/Process";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <ScannerFlow />
      <Features />
      <Process />
      <CaseStudies />
      <Testimonials />
      <FinalCTA />
    </div>
  );
}
