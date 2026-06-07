import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VAPT & API Security Testing Services",
  description:
    "Explore TrustLayerLabs' full range of security services: API penetration testing, VAPT, cloud security audits, SOC2 readiness, secure code review, and infrastructure hardening for SaaS and FinTech startups.",
  keywords: [
    "VAPT services India",
    "API penetration testing",
    "cloud security audit",
    "SOC2 readiness services",
    "secure code review",
    "infrastructure security audit",
    "OWASP API Top 10 testing",
  ],
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/services",
  },
  openGraph: {
    title: "VAPT & API Security Services | TrustLayerLabs",
    description:
      "Comprehensive manual security services: API pen testing, VAPT, SOC2 readiness, cloud security audits and more. OSCP certified team. 48-hour report delivery.",
    url: "https://www.trustlayerlabs.co.in/services",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "TrustLayerLabs Security Services" }],
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
