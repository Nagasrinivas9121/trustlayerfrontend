import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Research & Technical Insights",
  description:
    "Explore practical security research, illustrative vulnerability scenarios, and developer remediation patterns for SaaS, FinTech, and AI platforms.",
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/case-studies",
  },
  openGraph: {
    title: "Security Research & Technical Insights | TrustLayerLabs",
    description:
      "Explore practical security research, illustrative vulnerability scenarios, and developer remediation patterns for SaaS, FinTech, and AI platforms.",
    url: "https://www.trustlayerlabs.co.in/case-studies",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "TrustLayerLabs Security Research & Insights" }],
  },
};

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.trustlayerlabs.co.in/case-studies#webpage",
        "url": "https://www.trustlayerlabs.co.in/case-studies",
        "name": "Security Research & Technical Insights | TrustLayerLabs",
        "description": "Explore practical security research, illustrative vulnerability scenarios, and developer remediation patterns for SaaS, FinTech, and AI platforms.",
        "isPartOf": { "@id": "https://www.trustlayerlabs.co.in/#website" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.trustlayerlabs.co.in/case-studies#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trustlayerlabs.co.in" },
          { "@type": "ListItem", "position": 2, "name": "Research & Insights", "item": "https://www.trustlayerlabs.co.in/case-studies" }
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
