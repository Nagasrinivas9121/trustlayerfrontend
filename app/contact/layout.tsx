import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Book a Security Assessment",
  description:
    "Connect with TrustLayerLabs for scoping advice, security assessment enquiries, or to execute a mutual NDA. We aim to respond within one business day.",
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/contact",
  },
  openGraph: {
    title: "Contact TrustLayerLabs | Book a Security Review",
    description:
      "Connect with TrustLayerLabs for scoping advice, security assessment enquiries, or to execute a mutual NDA. We aim to respond within one business day.",
    url: "https://www.trustlayerlabs.co.in/contact",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Contact TrustLayerLabs" }],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://www.trustlayerlabs.co.in/contact#contactpage",
        "name": "Contact TrustLayerLabs — Security Assessment Scoping",
        "url": "https://www.trustlayerlabs.co.in/contact",
        "description": "Connect with TrustLayerLabs for scoping advice, security assessment enquiries, or to execute a mutual NDA.",
        "mainEntity": {
          "@type": "Organization",
          "@id": "https://www.trustlayerlabs.co.in/#organization",
          "name": "TrustLayerLabs",
          "url": "https://www.trustlayerlabs.co.in",
          "email": "ceo@trustlayerlabs.co.in",
          "telephone": "+91-9391220328"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.trustlayerlabs.co.in/contact#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trustlayerlabs.co.in" },
          { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://www.trustlayerlabs.co.in/contact" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.trustlayerlabs.co.in/contact#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How long does it take to receive a formal assessment proposal?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Once you share your API endpoint count or architecture summary, our team typically delivers a tailored scope proposal with timeline and fixed pricing within 24 to 48 hours."
            }
          },
          {
            "@type": "Question",
            "name": "Do we need to test staging or production environments?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We recommend staging or pre-production environments that accurately replicate production configurations. If staging is unavailable, we can test production during agreed-upon maintenance windows using non-destructive methodologies."
            }
          },
          {
            "@type": "Question",
            "name": "Can TrustLayerLabs provide reports suitable for SOC 2, ISO 27001, and enterprise vendors?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We provide both an in-depth Technical Remediation Report for your engineering team and an Executive Attestation Letter signed by certified security practitioners (OSCP, ISO 27001 LA) for your enterprise clients and compliance auditors."
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
