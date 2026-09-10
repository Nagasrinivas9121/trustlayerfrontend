import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VAPT & API Security Testing in Hyderabad",
  description:
    "TrustLayerLabs provides manual VAPT, API penetration testing, and compliance readiness for tech startups in Hyderabad and across India.",
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/vapt-hyderabad",
  },
  openGraph: {
    title: "VAPT & API Security Testing in Hyderabad | TrustLayerLabs",
    description:
      "Manual API pen testing and VAPT for Hyderabad tech startups. Experienced offensive security team.",
    url: "https://www.trustlayerlabs.co.in/vapt-hyderabad",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "VAPT Services Hyderabad" }],
  },
};

export default function VaptHyderabadLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "TrustLayerLabs — Hyderabad",
    "description": "VAPT and API security testing services in Hyderabad, Telangana.",
    "url": "https://www.trustlayerlabs.co.in/vapt-hyderabad",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "addressCountry": "IN",
    },
    "telephone": "+91-8822402811",
    "areaServed": "Hyderabad",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
