import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VAPT & API Security Testing in Bangalore",
  description:
    "TrustLayerLabs provides manual VAPT, API penetration testing, and cloud security audits for tech startups in Bangalore and across India.",
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/vapt-bangalore",
  },
  openGraph: {
    title: "VAPT & API Security Testing in Bangalore | TrustLayerLabs",
    description:
      "Manual API penetration testing and VAPT for Bangalore tech startups. Experienced offensive security team.",
    url: "https://www.trustlayerlabs.co.in/vapt-bangalore",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "VAPT Services Bangalore" }],
  },
};

export default function VaptBangaloreLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "TrustLayerLabs",
    "description": "Manual VAPT and API security testing services for technology teams in Bangalore and across India.",
    "url": "https://www.trustlayerlabs.co.in/vapt-bangalore",
    "telephone": "+91-9391220328",
    "areaServed": "Bangalore",
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
