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
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://www.trustlayerlabs.co.in/vapt-hyderabad#service",
        "name": "TrustLayerLabs - Hyderabad VAPT & Mobile Security",
        "description": "Manual VAPT and API security testing services for technology teams in Hyderabad and across India.",
        "url": "https://www.trustlayerlabs.co.in/vapt-hyderabad",
        "telephone": "+91-9391220328",
        "areaServed": "Hyderabad"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.trustlayerlabs.co.in/vapt-hyderabad#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trustlayerlabs.co.in" },
          { "@type": "ListItem", "position": 2, "name": "VAPT Hyderabad", "item": "https://www.trustlayerlabs.co.in/vapt-hyderabad" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.trustlayerlabs.co.in/vapt-hyderabad#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do your assessments comply with CERT-In and RBI cybersecurity directives for Hyderabad fintechs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Our testing methodology strictly adheres to CERT-In security guidelines and the RBI Cyber Security Framework for banks, NBFCs, and payment aggregators, providing formal attestation and comprehensive risk mitigation roadmaps."
            }
          },
          {
            "@type": "Question",
            "name": "Can you audit Electronic Health Record (EHR) systems and HIPAA controls for HealthTech platforms?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. For Hyderabad's thriving HealthTech corridor, we test ePHI data flows, role-based access permissions, API token lifetimes, and database encryption at rest to fulfill both HIPAA security rules and DPDP Act 2023 mandates."
            }
          },
          {
            "@type": "Question",
            "name": "What is your onboarding timeline under mutual NDA?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We execute our mutual bilateral NDA or sign your standard corporate agreement within hours. Technical scoping calls are conducted directly with our lead architects, initiating testing within 48 to 72 hours of receiving staging credentials."
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
