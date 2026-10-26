import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import CookieConsent from "@/components/CookieConsent";
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
    default: "API & SaaS Penetration Testing for Startups | TrustLayerLabs",
    template: "%s | TrustLayerLabs",
  },
  description: "Global offensive security assessments, manual API penetration testing, and GRC readiness built for startups and fast-growing businesses worldwide. Every finding manually verified with reproducible cURL PoCs.",
  keywords: [
    "API Penetration Testing",
    "Manual API Security Testing",
    "SaaS Multi-Tenant Penetration Testing",
    "SOC 2 Type II Pentest",
    "OWASP API Top 10 Testing",
    "Cloud Penetration Testing Services",
    "BOLA IDOR Security Assessment",
    "AI LLM Prompt Injection Testing",
    "FinTech API Security",
    "Manual Penetration Testing Services",
    "B2B SaaS Security Audit",
    "Offensive Cybersecurity Consultancy USA UK Europe",
    "VAPT Services Worldwide",
    "ISO 27001 Security Audit",
    "Govt MSME Registered Cybersecurity Firm",
    "VAPT Bangalore",
    "VAPT Hyderabad"
  ],
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
      "en-US": "https://www.trustlayerlabs.co.in",
      "en-GB": "https://www.trustlayerlabs.co.in",
      "en-CA": "https://www.trustlayerlabs.co.in",
      "en-AU": "https://www.trustlayerlabs.co.in",
      "en-SG": "https://www.trustlayerlabs.co.in",
      "en-DE": "https://www.trustlayerlabs.co.in",
      "en-IN": "https://www.trustlayerlabs.co.in",
      "x-default": "https://www.trustlayerlabs.co.in",
    },
  },
  openGraph: {
    title: "TrustLayerLabs — Security Testing for Startups & Fast Growing Businesses Worldwide",
    description: "Offensive security assessments, manual API penetration testing, and GRC readiness built for startups and fast-growing businesses worldwide. Every finding manually verified with a reproducible PoC.",
    url: "https://www.trustlayerlabs.co.in",
    siteName: "TrustLayerLabs",
    images: [
      {
        url: "/og-image.jpg?v=2",
        width: 1200,
        height: 630,
        alt: "TrustLayerLabs — Security Testing for Startups & Fast Growing Businesses Worldwide",
      },
    ],
    locale: "en_US",
    alternateLocale: ["en_GB", "en_CA", "en_AU", "en_SG", "en_IN"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@trustlayerlabs",
    creator: "@trustlayerlabs",
    title: "TrustLayerLabs — Security Testing for Startups & Fast Growing Businesses Worldwide",
    description: "Offensive security assessments, manual API penetration testing, and GRC readiness built for startups and fast-growing businesses worldwide. Every finding manually verified with a reproducible PoC.",
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
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "";
  const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-51DXDHGGHS";

  const orgLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": "https://www.trustlayerlabs.co.in/#organization",
    "name": "TrustLayerLabs",
    "alternateName": ["TrustLayer Labs", "TrustLayer"],
    "legalName": "TRUSTLAYER LABS",
    "identifier": "UDYAM-AP-21-0044317",
    "taxID": "UDYAM-AP-21-0044317",
    "url": "https://www.trustlayerlabs.co.in",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.trustlayerlabs.co.in/symbol.png",
      "width": 1024,
      "height": 1024,
    },
    "image": "https://www.trustlayerlabs.co.in/og-image.jpg",
    "description": "Global offensive security consultancy providing manual API penetration testing, SaaS multi-tenant isolation testing, AI/LLM security assessments, and SOC 2 / ISO 27001 readiness for high-growth tech startups and B2B enterprises worldwide.",
    "telephone": "+91-9391220328",
    "email": "ceo@trustlayerlabs.co.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Phase 3, HITEC City, Madhapur",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500081",
      "addressCountry": "IN",
    },
    "areaServed": [
      { "@type": "Country", "name": "United States", "sameAs": "https://en.wikipedia.org/wiki/United_States" },
      { "@type": "Country", "name": "United Kingdom", "sameAs": "https://en.wikipedia.org/wiki/United_Kingdom" },
      { "@type": "Country", "name": "Canada", "sameAs": "https://en.wikipedia.org/wiki/Canada" },
      { "@type": "Country", "name": "Australia", "sameAs": "https://en.wikipedia.org/wiki/Australia" },
      { "@type": "Country", "name": "Singapore", "sameAs": "https://en.wikipedia.org/wiki/Singapore" },
      { "@type": "Country", "name": "Germany", "sameAs": "https://en.wikipedia.org/wiki/Germany" },
      { "@type": "AdministrativeArea", "name": "European Union", "sameAs": "https://en.wikipedia.org/wiki/European_Union" },
      { "@type": "Country", "name": "United Arab Emirates", "sameAs": "https://en.wikipedia.org/wiki/United_Arab_Emirates" },
      { "@type": "Country", "name": "India", "sameAs": "https://en.wikipedia.org/wiki/India" },
      { "@type": "City", "name": "Bengaluru", "sameAs": "https://en.wikipedia.org/wiki/Bangalore" },
      { "@type": "City", "name": "Hyderabad", "sameAs": "https://en.wikipedia.org/wiki/Hyderabad" },
      { "@type": "AdministrativeArea", "name": "Worldwide" },
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "21:00",
      },
    ],
    "paymentAccepted": "Stripe, International Wire Transfer (SWIFT), ACH, Wise, Corporate Credit Card, Bank Transfer, Razorpay, UPI",
    "currenciesAccepted": "USD, EUR, GBP, AUD, CAD, SGD, AED, INR",
    "priceRange": "$$",
    "foundingDate": "2024-01-15",
    "availableLanguage": [
      { "@type": "Language", "name": "English" }
    ],
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["#home h1", "#home p", "#why-choose-us h2", "#problems h2"],
    },
    "knowsAbout": [
      { "@type": "Thing", "name": "Penetration test", "sameAs": "https://en.wikipedia.org/wiki/Penetration_test" },
      { "@type": "Thing", "name": "Application security", "sameAs": "https://en.wikipedia.org/wiki/Application_security" },
      { "@type": "Thing", "name": "OWASP", "sameAs": "https://en.wikipedia.org/wiki/OWASP" },
      { "@type": "Thing", "name": "Software as a service", "sameAs": "https://en.wikipedia.org/wiki/Software_as_a_service" },
      { "@type": "Thing", "name": "ISO/IEC 27001", "sameAs": "https://en.wikipedia.org/wiki/ISO/IEC_27001" },
      { "@type": "Thing", "name": "System and Organization Controls (SOC 2)", "sameAs": "https://en.wikipedia.org/wiki/System_and_Organization_Controls" },
      { "@type": "Thing", "name": "Web API security & BOLA", "sameAs": "https://en.wikipedia.org/wiki/Web_API" },
      { "@type": "Thing", "name": "Generative Artificial Intelligence & LLM Security", "sameAs": "https://en.wikipedia.org/wiki/Generative_artificial_intelligence" },
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
      "https://startupbase.io/products/trustlayerlabs",
    ],
    "founder": {
      "@type": "Person",
      "name": "Nagasrinivasa Rao",
      "jobTitle": "Founder & Lead Security Architect",
      "description": "Offensive security practitioner specializing in manual API penetration testing, web application security assessments, and cloud infrastructure reviews. Holds CEH and CWL C3SA credentials.",
      "url": "https://www.trustlayerlabs.co.in/about",
      "alumniOf": "IIT Guwahati",
      "hasCredential": ["Certified Ethical Hacker (CEH)", "Certified Cyber Security Analyst (CWL C3SA)"],
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
    "description": "Manual API Security Testing, SaaS Pentesting & SOC 2 Readiness for Startups Worldwide",
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
    "inLanguage": ["en", "en-US", "en-GB", "en-IN"],
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
        <meta name="target" content="all" />
        <meta name="audience" content="all" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
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
        {/* Google Tag Manager Container (Initialized early in head when NEXT_PUBLIC_GTM_ID is provided) */}
        {gtmId && (
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `}
          </Script>
        )}
      </head>
      <body className="font-sans antialiased bg-background selection:bg-primary/20 selection:text-primary">
        {/* Google Tag Manager (noscript fallback) */}
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="Google Tag Manager"
            />
          </noscript>
        )}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none font-sans text-xs font-bold uppercase tracking-wider"
        >
          Skip to content
        </a>
        {/* Google tag (gtag.js) for GA4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${gaId}');
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
        <AnalyticsTracker />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
