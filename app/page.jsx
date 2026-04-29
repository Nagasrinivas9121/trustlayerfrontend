import Hero from "@/components/Hero";
import ScannerFlow from "@/components/ScannerFlow";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import SampleReport from "@/components/SampleReport";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export const metadata = {
  title: "TrustLayer Labs | Premium VAPT & Cybersecurity Services",
  description: "Secure your digital future with TrustLayer Labs. Elite manual penetration testing and automated vulnerability scanning for modern enterprises.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <ScannerFlow />
      <Services />
      <WhyChooseUs />
      <Process />
      <SampleReport />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
