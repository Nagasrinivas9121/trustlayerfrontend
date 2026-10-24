import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import CookieConsent from "@/components/CookieConsent";
import LiveChat from "@/components/LiveChat";
import CalendlyTracker from "@/components/CalendlyTracker";
import AnalyticsTracker from "@/components/AnalyticsTracker";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FAFAFA",
};

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
    default: "TrustLayerLabs — Security Testing for Startups & Fast Growing Businesses",
    template: "%s | TrustLayerLabs",
  },
  description: "Offensive security assessments, manual API penetration testing, and GRC readiness built for startups and fast-growing businesses. Zero false positives, verified developer PoCs.",
  authors: [{ name: "Nagasrinivasa Rao", url: "https://www.trustlayerlabs.co.in/about" }],
  creator: "TrustLayerLabs",
  publisher: "TrustLayerLabs",
  category: "Cybersecurity",
  robots: {
    index: true,
    follow: true,
    nocache: false,
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
    languages: {
      "en": "https://www.trustlayerlabs.co.in",
      "en-IN": "https://www.trustlayerlabs.co.in",
      "x-default": "https://www.trustlayerlabs.co.in",
    },
  },
  openGraph: {
    title: "TrustLayerLabs — Security Testing for Startups & Fast Growing Businesses",
    description: "Offensive security assessments, manual API penetration testing, and GRC readiness built for startups and fast-growing businesses. Zero false positives, verified developer PoCs.",
    url: "https://www.trustlayerlabs.co.in",
    siteName: "TrustLayerLabs",
    images: [
      {
        url: "/og-image.jpg?v=2",
        width: 1200,
        height: 630,
        alt: "TrustLayerLabs — Security Testing for Startups & Fast Growing Businesses",
      },
    ],
    locale: "en",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@trustlayerlabs",
    creator: "@trustlayerlabs",
    title: "TrustLayerLabs — Security Testing for Startups & Fast Growing Businesses",
    description: "Offensive security assessments, manual API penetration testing, and GRC readiness built for startups and fast-growing businesses. Zero false positives, verified developer PoCs.",
    images: ["/og-image.jpg?v=2"],
  },
  verification: {
    google: "O3NO3SF_l7xN6N9X0gzRJ84kqy7D2_I-dUrLxVRda5o",
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=5", sizes: "any" },
      { url: "/symbol.png?v=5", type: "image/png" },
      { url: "/icon.png?v=5", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png?v=5" },
      { url: "/symbol.png?v=5" },
    ],
    shortcut: ["/favicon.ico?v=5"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": "https://www.trustlayerlabs.co.in/#organization",
    "name": "TrustLayerLabs",
    "alternateName": "TrustLayer Labs",
    "legalName": "TRUSTLAYER LABS",
    "identifier": "UDYAM-AP-21-0044317",
    "url": "https://www.trustlayerlabs.co.in",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.trustlayerlabs.co.in/symbol.png",
      "width": 1024,
      "height": 1024,
    },
    "image": "https://www.trustlayerlabs.co.in/og-image.jpg",
    "description": "Application security, manual API penetration testing, and GRC readiness consulting for FinTech, SaaS, and AI teams by offensive security and compliance practitioners.",
    "telephone": "+91-9391220328",
    "email": "ceo@trustlayerlabs.co.in",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
    },
    "areaServed": ["India", "Global"],
    "priceRange": "₹₹₹",
    "foundingDate": "2024-01-15",
    "knowsAbout": [
      "API Security Testing",
      "Penetration Testing",
      "VAPT",
      "SOC2 Compliance",
      "ISO 27001",
      "Cloud Security",
      "GRC",
      "OWASP",
      "SaaS Multi-Tenant Isolation",
      "BOLA / IDOR Testing",
      "AI & LLM Security Testing",
      "RAG Application Security",
      "FinTech Security",
      "Business Logic Vulnerability Assessment",
    ],
    "sameAs": [
      "https://www.linkedin.com/company/trustlayerlabs1/",
      "https://x.com/trustlayerlabs",
    ],
    "founder": {
      "@type": "Person",
      "name": "Nagasrinivasa Rao",
      "jobTitle": "Founder & Lead Security Architect",
      "description": "Offensive security practitioner specializing in manual API penetration testing, web application security assessments, and cloud infrastructure reviews. Holds CEH and CWL C3SA credentials.",
      "url": "https://www.trustlayerlabs.co.in/about",
      "alumniOf": "IIT Guwahati",
      "hasCredential": ["CEH", "C3SA (Certified Cyber Security Analyst)"],
      "knowsAbout": ["Penetration Testing", "API Security", "Cloud Security", "SOC2", "OWASP", "AI Security", "BOLA / IDOR Testing", "SaaS Multi-Tenancy"],
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
            "name": "SaaS Multi-Tenant Isolation & Authorization Testing",
            "description": "Manual security testing evaluating tenant isolation boundaries, BOLA/IDOR vulnerabilities, and cross-tenant privilege escalation in multi-tenant SaaS architectures.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI & RAG Application Security Testing",
            "description": "Security testing for generative AI applications, RAG pipelines, vector database access controls, prompt injection defenses, and enterprise data exposure.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "FinTech Security Assessment & VAPT",
            "description": "Specialized FinTech penetration testing covering payment gateways, transaction integrity, banking APIs, authentication boundaries, and regulatory compliance.",
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
            "description": "Technical penetration testing, gap analysis, control mapping, and evidence collection to prepare for SOC 2 Type II and ISO 27001 audits.",
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
  };

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.trustlayerlabs.co.in/#website",
    "url": "https://www.trustlayerlabs.co.in",
    "name": "TrustLayerLabs",
    "description": "API Security Testing & VAPT for SaaS & AI Startups in India",
    "publisher": { 
      "@type": "Organization", 
      "@id": "https://www.trustlayerlabs.co.in/#organization" 
    },
    "datePublished": "2024-01-15T00:00:00+05:30",
    "dateModified": "2026-10-04T00:00:00+05:30",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.trustlayerlabs.co.in/blog?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
    "inLanguage": "en-IN",
  };

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico?v=5" />
        <link rel="icon" type="image/png" sizes="32x32" href="/symbol.png?v=5" />
        <link rel="shortcut icon" href="/favicon.ico?v=5" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=5" />
        <link rel="sitemap" type="application/xml" title="Sitemap" href="https://www.trustlayerlabs.co.in/sitemap.xml" />
        <link rel="help" type="text/plain" href="https://www.trustlayerlabs.co.in/llms.txt" title="llms.txt" />
        <link rel="alternate" type="text/plain" href="https://www.trustlayerlabs.co.in/llms.txt" title="llms.txt" />
        <link rel="preload" as="image" href="/trustlayerlabs-api-security-logo.png" fetchPriority="high" />
        <link rel="preload" as="image" href="/trustlayerlabs-verified-vendor-boost.svg" type="image/svg+xml" fetchPriority="high" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
        {/* Google Consent Mode v2 Default Initialization - MUST be in head before any tags */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;var p=null;try{var s=localStorage.getItem("cookie-consent");if(s)p=JSON.parse(s)}catch(e){}if(p&&typeof p==="object"){gtag("consent","default",{ad_storage:p.marketing?"granted":"denied",ad_user_data:p.marketing?"granted":"denied",ad_personalization:p.marketing?"granted":"denied",analytics_storage:p.analytics?"granted":"denied",personalization_storage:p.functional?"granted":"denied",functionality_storage:p.functional?"granted":"denied",security_storage:"granted",wait_for_update:500})}else{gtag("consent","default",{ad_storage:"denied",ad_user_data:"denied",ad_personalization:"denied",analytics_storage:"denied",personalization_storage:"denied",functionality_storage:"denied",security_storage:"granted",wait_for_update:500})}gtag("set","ads_data_redaction",true);gtag("set","url_passthrough",true);`
          }}
        />
      </head>
      <body className="font-sans antialiased bg-background selection:bg-primary/20 selection:text-primary">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none font-sans text-xs font-bold uppercase tracking-wider"
        >
          Skip to content
        </a>
        {/* Google tag (gtag.js) */}
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
          <Script id="microsoft-clarity" strategy="lazyOnload">
            {`
              function loadClarity() {
                if (window.__clarity_initialized) return;
                window.__clarity_initialized = true;
                (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
              }

              function checkClarityConsent(e) {
                try {
                  var consent = (e && e.detail) ? e.detail : null;
                  if (!consent) {
                    var savedConsent = localStorage.getItem('cookie-consent');
                    if (savedConsent) consent = JSON.parse(savedConsent);
                  }
                  if (consent && (consent.analytics || consent.analytics_storage)) {
                    loadClarity();
                  }
                } catch(err) {}
              }

              checkClarityConsent();
              window.addEventListener("cookie_consent_update", checkClarityConsent);
            `}
          </Script>
        )}
        {/* Apollo Website Tracker */}
        <Script id="apollo-tracker-init" strategy="lazyOnload">
          {`
            function loadApolloTracker() {
              if (window.__apollo_initialized) return;
              window.__apollo_initialized = true;
              var o = document.createElement("script");
              o.src = "https://assets.apollo.io/micro/website-tracker/tracker.iife.js";
              o.async = true;
              o.onload = function() {
                try {
                  if (window.trackingFunctions && typeof window.trackingFunctions.onLoad === "function") {
                    window.trackingFunctions.onLoad({ appId: "69fd616911fb0a00115c74ca" });
                  }
                } catch(e) {}
              };
              o.onerror = function() {};
              document.head.appendChild(o);
            }

            function checkApolloConsent(e) {
              try {
                var consent = (e && e.detail) ? e.detail : null;
                if (!consent) {
                  var savedConsent = localStorage.getItem('cookie-consent');
                  if (savedConsent) consent = JSON.parse(savedConsent);
                }
                if (consent && (consent.marketing || consent.ad_storage)) {
                  if (document.readyState === "complete") {
                    setTimeout(loadApolloTracker, 1500);
                  } else {
                    window.addEventListener("load", function() {
                      setTimeout(loadApolloTracker, 1500);
                    });
                  }
                }
              } catch(err) {}
            }

            checkApolloConsent();
            window.addEventListener("cookie_consent_update", checkApolloConsent);
          `}
        </Script>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <CookieConsent />
        <CalendlyTracker />
        <AnalyticsTracker />
        <LiveChat />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
