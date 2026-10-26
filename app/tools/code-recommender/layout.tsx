import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secure Code Recommender & Vulnerability Patch Engine",
  description: "Diagnose OWASP and BOLA code vulnerabilities, generate hardened secure code patches, line-by-line diffs, and automated regression unit tests across TypeScript, Python, and Go.",
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/tools/code-recommender",
  },
  openGraph: {
    title: "Secure Code Recommender & Vulnerability Patch Engine | TrustLayerLabs",
    description: "Free developer security tool to diagnose BOLA, SQLi, broken JWTs, SSRF, and generate production-ready secure code refactors with unit tests.",
    url: "https://www.trustlayerlabs.co.in/tools/code-recommender",
    type: "website",
    images: [{ url: "/og-image.jpg?v=2", width: 1200, height: 630, alt: "Secure Code Recommender & Vulnerability Patch Engine" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Secure Code Recommender & Vulnerability Patch Engine | TrustLayerLabs",
    description: "Diagnose OWASP vulnerabilities and generate hardened secure code patches with regression unit tests.",
    images: ["/og-image.jpg?v=2"],
  },
};

export default function CodeRecommenderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": "https://www.trustlayerlabs.co.in/tools/code-recommender#webapp",
        "url": "https://www.trustlayerlabs.co.in/tools/code-recommender",
        "name": "Secure Code Recommender & Vulnerability Patch Engine | TrustLayerLabs",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "All",
        "browserRequirements": "Requires JavaScript. Requires HTML5.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "description": "Free developer security utility to inspect vulnerable backend code, diagnose BOLA, SQLi, broken JWTs, and generate hardened code patches with unit tests."
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.trustlayerlabs.co.in/tools/code-recommender#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trustlayerlabs.co.in" },
          { "@type": "ListItem", "position": 2, "name": "Tools", "item": "https://www.trustlayerlabs.co.in/tools" },
          { "@type": "ListItem", "position": 3, "name": "Secure Code Recommender", "item": "https://www.trustlayerlabs.co.in/tools/code-recommender" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.trustlayerlabs.co.in/tools/code-recommender#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is my proprietary code snippet sent to a remote server?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. The TrustLayerLabs Secure Code Recommender executes 100% locally in your browser sandbox using client-side JavaScript heuristics. No code or API credentials are ever uploaded or transmitted."
            }
          },
          {
            "@type": "Question",
            "name": "Can automated code recommenders replace a manual penetration test?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Automated tools check for known static syntax patterns (such as parameter binding or missing algorithms). However, enterprise breaches frequently exploit multi-step business logic flaws, role elevation, and tenant isolation escapes that require offensive human practitioners."
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
