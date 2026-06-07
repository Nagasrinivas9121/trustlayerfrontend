import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VAPT & API Security Testing in Bangalore",
  description:
    "TrustLayerLabs offers expert VAPT, API penetration testing, and cloud security audits for tech startups in Bangalore — HSR Layout, Koramangala, and Whitefield. OSCP certified team. NDA in 2 hours.",
  keywords: [
    "VAPT Bangalore",
    "API security testing Bangalore",
    "penetration testing HSR Layout",
    "cybersecurity company Bangalore",
    "SOC2 audit Bangalore",
    "cloud security Bangalore",
    "fintech security audit Bangalore",
    "startup security testing Bengaluru",
  ],
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/vapt-bangalore",
  },
  openGraph: {
    title: "VAPT & API Security Testing in Bangalore | TrustLayerLabs",
    description:
      "Expert API pen testing and VAPT for Bangalore tech startups. OSCP certified security team in HSR Layout. Fast intake, signed NDA in 2 hours.",
    url: "https://www.trustlayerlabs.co.in/vapt-bangalore",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "VAPT Services Bangalore" }],
  },
};

export default function VaptBangaloreLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "TrustLayerLabs — Bangalore",
    "description": "VAPT and API security testing services in Bangalore, Karnataka.",
    "url": "https://www.trustlayerlabs.co.in/vapt-bangalore",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "HSR Layout",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560102",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "12.9116",
      "longitude": "77.6370",
    },
    "telephone": "+91-9912350493",
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
