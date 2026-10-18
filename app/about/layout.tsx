import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Our Security Team & Leadership",
  description:
    "Meet the offensive security practitioners behind TrustLayerLabs, specializing in manual API penetration testing, SaaS VAPT, and compliance readiness.",
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/about",
  },
  openGraph: {
    title: "About TrustLayerLabs | Founder & Offensive Security Team",
    description:
      "Nagasrinivasa Rao and the TrustLayerLabs team — manual application security testing, API penetration testing, and GRC readiness.",
    url: "https://www.trustlayerlabs.co.in/about",
    images: [{ url: "/og-image.jpg?v=2", width: 1200, height: 630, alt: "TrustLayerLabs About" }],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://www.trustlayerlabs.co.in/about#aboutpage",
        "url": "https://www.trustlayerlabs.co.in/about",
        "name": "About Our Security Team & Leadership | TrustLayerLabs",
        "description": "Meet the offensive security practitioners behind TrustLayerLabs, specializing in manual API penetration testing, SaaS VAPT, and compliance readiness.",
        "isPartOf": { "@id": "https://www.trustlayerlabs.co.in/#website" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.trustlayerlabs.co.in/about#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trustlayerlabs.co.in" },
          { "@type": "ListItem", "position": 2, "name": "About", "item": "https://www.trustlayerlabs.co.in/about" }
        ]
      }
    ]
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
