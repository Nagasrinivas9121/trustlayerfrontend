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
    images: [{ url: "/og-image.jpg?v=2", width: 1200, height: 630, alt: "VAPT Services Bangalore" }],
  },
};

export default function VaptBangaloreLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://www.trustlayerlabs.co.in/vapt-bangalore#service",
        "name": "TrustLayerLabs - Bangalore VAPT & API Security",
        "description": "Manual VAPT and API security testing services for technology teams in Bangalore and across India.",
        "url": "https://www.trustlayerlabs.co.in/vapt-bangalore",
        "telephone": "+91-9391220328",
        "areaServed": "Bangalore"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.trustlayerlabs.co.in/vapt-bangalore#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trustlayerlabs.co.in" },
          { "@type": "ListItem", "position": 2, "name": "VAPT Bangalore", "item": "https://www.trustlayerlabs.co.in/vapt-bangalore" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.trustlayerlabs.co.in/vapt-bangalore#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How fast can we receive a VAPT report for our SOC 2 audit or US enterprise deal?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For fast-moving SaaS startups in Bengaluru, we offer accelerated scoping intake under mutual NDA. Standard web & API assessments wrap up in 5 to 7 business days, with immediate preliminary notifications for any Critical findings so your developers can patch while we finalize the report."
            }
          },
          {
            "@type": "Question",
            "name": "Do you test staging or production environments for Bangalore engineering teams?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We primarily test isolated staging or pre-production environments populated with realistic anonymized mock data. For complex microservices or serverless architectures hosted in AWS ap-south-1 (Mumbai), we coordinate safe non-destructive testing windows."
            }
          },
          {
            "@type": "Question",
            "name": "Will your Attestation Letter satisfy Tier-1 US enterprise vendor risk assessments?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Our executive attestation letters are signed by certified practitioners (CEH, C3SA, ISO 27001 Lead Auditor) and detail assessment scope, testing dates, methodology (OWASP Top 10, ASVS), and clean retest verification."
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
