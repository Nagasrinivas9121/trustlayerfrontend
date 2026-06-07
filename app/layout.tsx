import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.trustlayerlabs.co.in"),
  title: {
    default: "TrustLayerLabs | API Security Testing & VAPT for SaaS & AI Startups",
    template: "%s | TrustLayerLabs",
  },
  description: "India's premier VAPT and API security consultancy for SaaS, AI, and FinTech startups. Manual penetration testing, SOC2 readiness, cloud security audits. OSCP & CEH certified team. 48-hour report delivery.",
  keywords: [
    "API security testing India",
    "VAPT services Bangalore",
    "VAPT services Hyderabad",
    "penetration testing for SaaS",
    "API vulnerability assessment",
    "SOC2 readiness consulting",
    "ISO 27001 gap analysis",
    "cloud security audit AWS",
    "cybersecurity for startups India",
    "manual penetration testing",
    "OSCP certified security",
    "GRC compliance consulting",
    "fintech security audit",
    "AI startup security testing",
    "TrustLayerLabs",
  ],
  authors: [{ name: "Nagasrinivasa Rao", url: "https://www.trustlayerlabs.co.in/about" }],
  creator: "TrustLayerLabs",
  publisher: "TrustLayerLabs",
  category: "Cybersecurity",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in",
  },
  openGraph: {
    title: "TrustLayerLabs | API Security & VAPT for Startups",
    description: "India's top manual API security testing and VAPT consultancy. OSCP certified team helping SaaS, AI & FinTech companies secure their products and pass enterprise audits.",
    url: "https://www.trustlayerlabs.co.in",
    siteName: "TrustLayerLabs",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TrustLayerLabs — API Security & VAPT for SaaS Startups",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@trustlayerlabs",
    creator: "@trustlayerlabs",
    title: "TrustLayerLabs | API Security & VAPT",
    description: "Manual penetration testing, SOC2 readiness & API security audits for SaaS & AI startups. OSCP certified. 48-hour delivery.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "google-site-verification-token",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["ProfessionalService", "LocalBusiness"],
        "@id": "https://www.trustlayerlabs.co.in/#organization",
        "name": "TrustLayerLabs",
        "alternateName": "TrustLayer Labs",
        "url": "https://www.trustlayerlabs.co.in",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.trustlayerlabs.co.in/logo.jpeg",
          "width": 200,
          "height": 200,
        },
        "image": "https://www.trustlayerlabs.co.in/og-image.jpg",
        "description": "India's premier VAPT and API security consultancy for SaaS, AI, and FinTech startups. Manual penetration testing, SOC2 readiness, cloud security audits by OSCP & CEH certified security architects.",
        "telephone": "+91-9912350493",
        "email": "security@trustlayerlabs.co.in",
        "address": [
          {
            "@type": "PostalAddress",
            "streetAddress": "HSR Layout",
            "addressLocality": "Bengaluru",
            "addressRegion": "Karnataka",
            "postalCode": "560102",
            "addressCountry": "IN",
          },
          {
            "@type": "PostalAddress",
            "streetAddress": "HITEC City",
            "addressLocality": "Hyderabad",
            "addressRegion": "Telangana",
            "postalCode": "500081",
            "addressCountry": "IN",
          },
        ],
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "12.9116",
          "longitude": "77.6370",
        },
        "areaServed": ["Bangalore", "Hyderabad", "India", "Global"],
        "priceRange": "₹₹₹",
        "foundingDate": "2023",
        "knowsAbout": [
          "API Security Testing",
          "Penetration Testing",
          "VAPT",
          "SOC2 Compliance",
          "ISO 27001",
          "Cloud Security",
          "GRC",
          "OWASP",
        ],
        "hasCredential": ["OSCP", "CEH", "eWPT"],
        "sameAs": [
          "https://www.linkedin.com/company/trustlayerlabs",
          "https://clutch.co/profile/trustlayerlabs",
          "https://www.goodfirms.co/company/trustlayerlabs",
          "https://techbehemoths.com/company/trustlayerlabs",
        ],
        "founder": {
          "@type": "Person",
          "name": "Nagasrinivasa Rao",
          "jobTitle": "Founder & Lead Security Architect",
          "description": "Offensive security professional with 8+ years auditing enterprise APIs, cloud architectures, and financial systems. OSCP, CEH, and eWPT certified.",
          "url": "https://www.trustlayerlabs.co.in/about",
          "knowsAbout": ["Penetration Testing", "API Security", "Cloud Security", "SOC2", "OWASP"],
          "hasCredential": [
            { "@type": "EducationalOccupationalCredential", "name": "OSCP" },
            { "@type": "EducationalOccupationalCredential", "name": "CEH" },
            { "@type": "EducationalOccupationalCredential", "name": "eWPT" },
          ],
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Security Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "API Penetration Testing",
                "description": "Manual OWASP API Top 10 testing, BOLA/IDOR detection, JWT abuse, and authorization boundary validation.",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "VAPT — Vulnerability Assessment & Penetration Testing",
                "description": "Comprehensive web, mobile, and network vulnerability assessment with manual validation and remediation guidance.",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "SOC2 & ISO 27001 Readiness",
                "description": "Gap analysis, control mapping, policy drafting, and evidence collection to prepare for SOC2 Type II and ISO 27001 certification.",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Cloud Security Audit",
                "description": "AWS, GCP, and Azure security configuration reviews, IAM policy analysis, and CIS benchmark validation.",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://www.trustlayerlabs.co.in/#website",
        "url": "https://www.trustlayerlabs.co.in",
        "name": "TrustLayerLabs",
        "description": "API Security Testing & VAPT for SaaS & AI Startups in India",
        "publisher": { "@id": "https://www.trustlayerlabs.co.in/#organization" },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.trustlayerlabs.co.in/blog?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
        "inLanguage": "en-IN",
      },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");
o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,
o.onload=function(){window.trackingFunctions.onLoad({appId:"69fd616911fb0a00115c74ca"})},
document.head.appendChild(o)}initApollo();`
          }}
        />
      </head>
      <body className="font-sans antialiased bg-background selection:bg-primary/20 selection:text-primary">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
