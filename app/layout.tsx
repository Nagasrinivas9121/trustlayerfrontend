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
import { FAQS } from "@/lib/constants";

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
    default: "Manual API & SaaS Security Testing | TrustLayerLabs",
    template: "%s | TrustLayerLabs",
  },
  description: "Manual API, SaaS & AI security testing focused on authorization, tenant isolation, business logic, and attack paths requiring human reasoning.",
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
    locale: "en",
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
    google: "O3NO3SF_l7xN6N9X0gzRJ84kqy7D2_I-dUrLxVRda5o",
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=4", sizes: "any" },
      { url: "/symbol.png?v=4", type: "image/png" },
      { url: "/icon.png?v=4", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png?v=4" },
      { url: "/symbol.png?v=4" },
    ],
    shortcut: ["/favicon.ico?v=4"],
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
        "legalName": "TRUSTLAYER LABS",
        "identifier": "UDYAM-AP-21-0044317",
        "url": "https://www.trustlayerlabs.co.in",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.trustlayerlabs.co.in/logo.jpeg",
          "width": 200,
          "height": 200,
        },
        "image": "https://www.trustlayerlabs.co.in/og-image.jpg",
        "description": "Application security, manual API penetration testing, and GRC readiness consulting for FinTech, SaaS, and AI teams by offensive security and compliance practitioners.",
        "telephone": "+91-9391220328",
        "email": "ceo@trustlayerlabs.co.in",
        "address": [
          {
            "@type": "PostalAddress",
            "addressLocality": "Bengaluru",
            "addressRegion": "Karnataka",
            "addressCountry": "IN",
          },
          {
            "@type": "PostalAddress",
            "addressLocality": "Hyderabad",
            "addressRegion": "Telangana",
            "addressCountry": "IN",
          },
        ],
        "areaServed": ["Bangalore", "Hyderabad", "India", "Global"],
        "priceRange": "₹₹₹",
        "foundingDate": "2026-04-24",
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
        "sameAs": [
          "https://www.linkedin.com/company/trustlayerlabs1/",
          "https://x.com/trustlayerlabs",
          "https://clutch.co/profile/trustlayerlabs",
          "https://www.goodfirms.co/company/trustlayerlabs",
          "https://techbehemoths.com/company/trustlayerlabs",
        ],
        "founder": {
          "@type": "Person",
          "name": "Nagasrinivasa Rao",
          "jobTitle": "Founder & Lead Security Architect",
          "description": "Offensive security practitioner specializing in manual API penetration testing, web application security assessments, and cloud infrastructure reviews.",
          "url": "https://www.trustlayerlabs.co.in/about",
          "knowsAbout": ["Penetration Testing", "API Security", "Cloud Security", "SOC2", "OWASP"],
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
        <link rel="icon" type="image/x-icon" href="/favicon.ico?v=4" />
        <link rel="icon" type="image/png" sizes="32x32" href="/symbol.png?v=4" />
        <link rel="shortcut icon" href="/favicon.ico?v=4" />
        <link rel="apple-touch-icon" href="/symbol.png?v=4" />
        <link rel="help" type="text/plain" href="https://www.trustlayerlabs.co.in/llms.txt" title="llms.txt" />
        <link rel="preload" as="image" href="/trustlayerlabs-api-security-logo.png" fetchPriority="high" />
        <link rel="preload" as="image" href="/trustlayerlabs-verified-vendor-boost.svg" type="image/svg+xml" fetchPriority="high" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-background selection:bg-primary/20 selection:text-primary">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none font-sans text-xs font-bold uppercase tracking-wider"
        >
          Skip to content
        </a>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;var p=null;try{var s=localStorage.getItem("cookie-consent");if(s)p=JSON.parse(s)}catch(e){}if(p&&typeof p==="object"){gtag("consent","default",{ad_storage:p.marketing?"granted":"denied",ad_user_data:p.marketing?"granted":"denied",ad_personalization:p.marketing?"granted":"denied",analytics_storage:p.analytics?"granted":"denied",personalization_storage:p.functional?"granted":"denied",functionality_storage:p.functional?"granted":"denied",security_storage:"granted",wait_for_update:500})}else{gtag("consent","default",{ad_storage:"denied",ad_user_data:"denied",ad_personalization:"denied",analytics_storage:"denied",personalization_storage:"denied",functionality_storage:"denied",security_storage:"granted",wait_for_update:500})}gtag("set","ads_data_redaction",true);gtag("set","url_passthrough",true);`
          }}
        />
        {/* Google Tag Manager (GTM) */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N98LZ37G');
          `}
        </Script>
        {/* Google Tag Manager (noscript fallback) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N98LZ37G"
            height="0"
            width="0"
            className="hidden"
          />
        </noscript>
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
        <main>{children}</main>
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
