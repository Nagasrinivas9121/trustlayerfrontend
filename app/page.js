import Hero from "@/components/Hero";
import ScannerFlow from "@/components/ScannerFlow";
import Features from "@/components/Features";
import Process from "@/components/Process";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import SeoSections from "@/components/SeoSections";
import FinalCTA from "@/components/FinalCTA";

export const metadata = {
  title: "TrustLayerLabs | VAPT Services in India | Penetration Testing Company",
  description: "Get expert VAPT services in India. Secure your web apps, APIs, and infrastructure with real penetration testing. Fast reports. Book a scan today.",
  keywords: "VAPT services India, penetration testing company India, web application security testing, API security testing",
};

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <ScannerFlow />
      <Features />
      <Process />
      <CaseStudies />
      <Testimonials />
      <SeoSections />
      <FinalCTA />
    </div>
  );
}
