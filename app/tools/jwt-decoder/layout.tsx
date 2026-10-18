import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JWT Decoder & Security Analyzer",
  description: "Decode, inspect, and analyze JSON Web Tokens for security vulnerabilities, weak signatures, 'none' algorithm exploits, and sensitive payload leaks.",
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/tools/jwt-decoder",
  },
  openGraph: {
    title: "JWT Decoder & Security Analyzer | TrustLayerLabs",
    description: "Free developer security tool to decode and audit JWT tokens for algorithm confusion, expiration issues, and secret exposures.",
    url: "https://www.trustlayerlabs.co.in/tools/jwt-decoder",
    type: "website",
    images: [{ url: "/og-image.jpg?v=2", width: 1200, height: 630, alt: "JWT Decoder & Security Analyzer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "JWT Decoder & Security Analyzer | TrustLayerLabs",
    description: "Free developer security tool to decode and audit JWT tokens for algorithm confusion and vulnerabilities.",
    images: ["/og-image.jpg?v=2"],
  },
};

export default function JwtDecoderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": "https://www.trustlayerlabs.co.in/tools/jwt-decoder#webapp",
        "url": "https://www.trustlayerlabs.co.in/tools/jwt-decoder",
        "name": "JWT Decoder & Security Analyzer | TrustLayerLabs",
        "applicationCategory": "SecurityApplication",
        "operatingSystem": "All",
        "browserRequirements": "Requires JavaScript. Requires HTML5.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "description": "Free developer security utility to decode, inspect, and analyze JSON Web Tokens for weak signatures, 'none' algorithm exploits, and expiration flaws."
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.trustlayerlabs.co.in/tools/jwt-decoder#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trustlayerlabs.co.in" },
          { "@type": "ListItem", "position": 2, "name": "Tools", "item": "https://www.trustlayerlabs.co.in/tools/jwt-decoder" },
          { "@type": "ListItem", "position": 3, "name": "JWT Decoder", "item": "https://www.trustlayerlabs.co.in/tools/jwt-decoder" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.trustlayerlabs.co.in/tools/jwt-decoder#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is my JWT token sent to a remote server when decoded?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Decoding and parsing are executed 100% locally in your browser using client-side JavaScript. No tokens, secrets, or payload claims are ever transmitted to any backend server."
            }
          },
          {
            "@type": "Question",
            "name": "What is the 'alg: none' JWT vulnerability?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The 'alg: none' vulnerability occurs when a server accepts unsigned tokens where the algorithm header is set to 'none', allowing attackers to forge arbitrary administrative claims without a valid signature."
            }
          },
          {
            "@type": "Question",
            "name": "What is the algorithm confusion attack between RS256 and HS256?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Algorithm confusion occurs when a verification server expects an RS256 asymmetric signature but naively trusts the token's algorithm header. If the header specifies HS256, an attacker can sign the token using the server's public RSA key as the HMAC secret, completely bypassing signature verification."
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
