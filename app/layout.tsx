import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import CookieConsent from "@/components/CookieConsent";
import LiveChat from "@/components/LiveChat";
import { FAQS } from "@/lib/constants";

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
  manifest: "/manifest.json",
  title: {
    default: "TrustLayerLabs | Application Security, API Security & GRC for FinTech, SaaS & AI",
    template: "%s | TrustLayerLabs",
  },
  description: "Manual application security testing, API penetration testing, FinTech security audits, and GRC readiness (SOC 2, ISO 27001) for growing technology teams. CEH, eWPT & ISO certified security architects.",
  keywords: [
    "Application Security FinTech India",
    "API security testing India",
    "FinTech VAPT testing Bangalore",
    "SaaS penetration testing Hyderabad",
    "API vulnerability assessment BOLA",
    "SOC 2 readiness consulting",
    "ISO 27001 gap analysis",
    "cloud security audit AWS GCP",
    "cybersecurity for startups India",
    "manual penetration testing",
    "GRC compliance consulting",
    "FinTech security audit",
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
    title: "TrustLayerLabs | Application Security, API Security & GRC",
    description: "Manual API & Application Security Testing and GRC Readiness for FinTech, SaaS, and AI Teams.",
    url: "https://www.trustlayerlabs.co.in",
    siteName: "TrustLayerLabs",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TrustLayerLabs — Application Security, API Security & GRC",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@trustlayerlabs",
    creator: "@trustlayerlabs",
    title: "TrustLayerLabs | Application Security, API Security & GRC",
    description: "Manual penetration testing, FinTech security, SOC 2 readiness & API security audits for SaaS & AI teams.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "UryoH0JchYIWZ4MGMGPKaHFCMsNC_S5cUxBPszHZBWk",
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
        "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
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
        "description": "Application security, manual API penetration testing, and GRC readiness consulting for FinTech, SaaS, and AI teams by CEH, eWPT, and ISO 27001 certified practitioners.",
        "telephone": "+91-8822402811",
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
        "hasCredential": ["CEH", "eWPT", "VAPT", "Network Pentesting"],
        "sameAs": [
          "https://www.linkedin.com/company/trustlayerlabs1/",
          "https://clutch.co/profile/trustlayerlabs",
          "https://www.goodfirms.co/company/trustlayerlabs",
          "https://techbehemoths.com/company/trustlayerlabs",
        ],
        "founder": {
          "@type": "Person",
          "name": "Nagasrinivasa Rao",
          "jobTitle": "Founder & Lead Security Architect",
          "description": "Offensive security professional with 2+ years auditing enterprise APIs, cloud architectures, and financial systems. CEH, eWPT, VAPT, and Network Pentesting certified.",
          "url": "https://www.trustlayerlabs.co.in/about",
          "knowsAbout": ["Penetration Testing", "API Security", "Cloud Security", "SOC2", "OWASP"],
          "hasCredential": [
            { "@type": "EducationalOccupationalCredential", "name": "CEH" },
            { "@type": "EducationalOccupationalCredential", "name": "eWPT" },
            { "@type": "EducationalOccupationalCredential", "name": "VAPT" },
            { "@type": "EducationalOccupationalCredential", "name": "Network Pentesting" },
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
      {
        "@type": "FAQPage",
        "@id": "https://www.trustlayerlabs.co.in/#faq",
        "mainEntity": FAQS.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
          },
        })),
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
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              
              var savedConsent = null;
              try {
                savedConsent = localStorage.getItem('cookie-consent');
              } catch(e) {}
              
              if (savedConsent) {
                var parsed = JSON.parse(savedConsent);
                gtag('consent', 'default', {
                  'ad_storage': parsed.marketing ? 'granted' : 'denied',
                  'ad_user_data': parsed.marketing ? 'granted' : 'denied',
                  'ad_personalization': parsed.marketing ? 'granted' : 'denied',
                  'analytics_storage': parsed.analytics ? 'granted' : 'denied',
                  'personalization_storage': parsed.functional ? 'granted' : 'denied',
                  'functionality_storage': parsed.functional ? 'granted' : 'denied',
                  'security_storage': 'granted'
                });
              } else {
                gtag('consent', 'default', {
                  'ad_storage': 'denied',
                  'ad_user_data': 'denied',
                  'ad_personalization': 'denied',
                  'analytics_storage': 'denied',
                  'personalization_storage': 'denied',
                  'functionality_storage': 'denied',
                  'security_storage': 'granted'
                });
              }
            `
          }}
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-51DXDHGGHS"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-51DXDHGGHS');
          `}
        </Script>
        {process.env.NEXT_PUBLIC_CLARITY_ID && (
          <Script id="microsoft-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
            `}
          </Script>
        )}
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
        <LiveChat />
      </body>
    </html>
  );
}
