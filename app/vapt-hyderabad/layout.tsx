import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VAPT & API Security Testing in Hyderabad",
  description:
    "TrustLayerLabs provides expert VAPT, API penetration testing, and compliance audits for tech startups in Hyderabad — HITEC City, Gachibowli, and Madhapur. OSCP certified. Fast NDA turnaround.",
  keywords: [
    "VAPT Hyderabad",
    "API security testing Hyderabad",
    "penetration testing HITEC City",
    "cybersecurity company Hyderabad",
    "SOC2 audit Hyderabad",
    "cloud security Hyderabad",
    "fintech security Gachibowli",
    "startup security testing Telangana",
  ],
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/vapt-hyderabad",
  },
  openGraph: {
    title: "VAPT & API Security Testing in Hyderabad | TrustLayerLabs",
    description:
      "Expert API pen testing and VAPT for Hyderabad tech startups in HITEC City and Gachibowli. OSCP certified security team. Fast intake and NDA.",
    url: "https://www.trustlayerlabs.co.in/vapt-hyderabad",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "VAPT Services Hyderabad" }],
  },
};

export default function VaptHyderabadLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "TrustLayerLabs — Hyderabad",
    "description": "VAPT and API security testing services in Hyderabad, Telangana.",
    "url": "https://www.trustlayerlabs.co.in/vapt-hyderabad",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "HITEC City",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500081",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "17.4484",
      "longitude": "78.3747",
    },
    "telephone": "+91-9912350493",
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
