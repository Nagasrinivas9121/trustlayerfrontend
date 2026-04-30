import Hero from "@/components/Hero";
import dynamic from "next/dynamic";

// Below the fold components - Dynamic Import
const Features = dynamic(() => import("@/components/Features"));
const Process = dynamic(() => import("@/components/Process"));
const ScannerFlow = dynamic(() => import("@/components/ScannerFlow"), {
  loading: () => <div className="h-96 animate-pulse bg-slate-50" />
});
const CaseStudies = dynamic(() => import("@/components/CaseStudies"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const SeoSections = dynamic(() => import("@/components/SeoSections"));
const FinalCTA = dynamic(() => import("@/components/FinalCTA"));

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
