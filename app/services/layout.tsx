export const revalidate = 3600;
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VAPT & API Security Testing Services",
  description:
    "Manual API security testing, web VAPT, cloud audits, and SOC 2 readiness for fast-growing SaaS and AI startups. Fast turnarounds and free retesting.",
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/services",
    languages: {
      "en": "https://www.trustlayerlabs.co.in/services",
      "x-default": "https://www.trustlayerlabs.co.in/services",
    },
  },
  openGraph: {
    title: "VAPT & API Security Services | TrustLayerLabs",
    description:
      "Comprehensive manual security services: API penetration testing, VAPT, SOC 2 readiness, cloud security audits, and developer remediation support.",
    url: "https://www.trustlayerlabs.co.in/services",
    images: [{ url: "/og-image.jpg?v=2", width: 1200, height: 630, alt: "TrustLayerLabs Security Services" }],
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
