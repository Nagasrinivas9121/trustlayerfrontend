import Services from "@/components/Services";
import CTA from "@/components/CTA";

export const metadata = {
  title: "VAPT Services | TrustLayer Labs",
  description: "Comprehensive penetration testing and security audit services.",
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <Services />
      <CTA />
    </div>
  );
}
