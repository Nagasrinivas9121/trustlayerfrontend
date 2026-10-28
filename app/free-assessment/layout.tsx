import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Security Scoping Review (30-Min Architecture Scoping)",
  description: "Schedule a 30-minute security scoping review under mutual NDA. We evaluate your API, SaaS, and AI attack surface and provide a tailored testing roadmap.",
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/free-assessment",
  },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Get a Free Security Scoping Review | 30-Min Scoping | TrustLayerLabs",
    description: "Get a practitioner-led architecture evaluation, threat surface scoping, and tailored security proposal under mutual NDA.",
    url: "https://www.trustlayerlabs.co.in/free-assessment",
    type: "website",
    images: [{ url: "/og-image.jpg?v=2", width: 1200, height: 630, alt: "Get a Free Security Scoping Review — TrustLayerLabs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get a Free Security Scoping Review | 30-Min Scoping | TrustLayerLabs",
    description: "Request a practitioner-led 30-minute security scoping review and architecture evaluation under mutual NDA.",
    images: ["/og-image.jpg?v=2"],
  },
};

export default function FreeAssessmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.trustlayerlabs.co.in/free-assessment#service",
        "name": "30-Minute Confidential Security Scoping Review",
        "serviceType": "Security Consulting & Scoping",
        "provider": {
          "@type": "Organization",
          "@id": "https://www.trustlayerlabs.co.in/#organization",
          "name": "TrustLayerLabs",
          "url": "https://www.trustlayerlabs.co.in",
          "telephone": "+91-9391220328",
          "email": "ceo@trustlayerlabs.co.in"
        },
        "description": "Schedule a practitioner-led 30-minute security scoping review under mutual NDA. We evaluate your API, SaaS, and AI attack surface and provide a tailored testing roadmap.",
        "areaServed": "IN",
        "isPlan": false
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.trustlayerlabs.co.in/free-assessment#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trustlayerlabs.co.in" },
          { "@type": "ListItem", "position": 2, "name": "Free Assessment", "item": "https://www.trustlayerlabs.co.in/free-assessment" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.trustlayerlabs.co.in/free-assessment#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What happens during the 30-minute security review?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We execute a bilateral mutual NDA upfront, review your authorization models (JWT/OAuth), multi-tenant isolation boundaries, and critical API endpoints, and pinpoint high-impact vulnerabilities automated scanners miss."
            }
          },
          {
            "@type": "Question",
            "name": "Do you sign a Mutual NDA before reviewing application architecture?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. A bilateral mutual Non-Disclosure Agreement (NDA) is executed prior to any technical disclosures, ensuring all architecture diagrams, endpoint lists, and discussions remain strictly confidential."
            }
          },
          {
            "@type": "Question",
            "name": "Who will lead the scoping consultation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You will speak directly with a lead offensive security practitioner, not a sales representative or account manager. We focus immediately on technical parameters, threat vectors, and testing windows."
            }
          }
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
