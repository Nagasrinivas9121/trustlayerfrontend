import Hero from "@/components/Hero";
import dynamic from "next/dynamic";

const Features = dynamic(() => import("@/components/Features"), {
  loading: () => <div className="h-[600px] bg-slate-50 animate-pulse" />
});
const Process = dynamic(() => import("@/components/Process"), {
  loading: () => <div className="h-[600px] bg-slate-50 animate-pulse" />
});
const CaseStudies = dynamic(() => import("@/components/CaseStudies"), { 
  ssr: false,
  loading: () => <div className="h-[600px] bg-slate-900 animate-pulse" />
});
const Testimonials = dynamic(() => import("@/components/Testimonials"), { 
  ssr: false,
  loading: () => <div className="h-[500px] bg-white animate-pulse" />
});
const SeoSections = dynamic(() => import("@/components/SeoSections"), {
  loading: () => <div className="h-[1000px] bg-slate-50 animate-pulse" />
});
const FinalCTA = dynamic(() => import("@/components/FinalCTA"), {
  loading: () => <div className="h-[400px] bg-white animate-pulse" />
});

export const metadata = {
  title: "TrustLayerLabs | VAPT Services in India | Penetration Testing Company",
  description: "Get expert VAPT services in India. Secure your web apps, APIs, and infrastructure with real penetration testing. Fast reports. Book a scan today.",
  keywords: "VAPT services India, penetration testing company India, web application security testing, API security testing",
};

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <Features />
      <Process />
      <CaseStudies />
      <Testimonials />
      <SeoSections />
      <FinalCTA />
    </div>
  );
}
