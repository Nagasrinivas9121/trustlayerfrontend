import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";
import Script from "next/script";

// Dynamic imports for non-critical components with extra optimization
const WhatsApp = dynamic(() => import("@/components/WhatsApp"));

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  preload: true,
  // Using a more specific subset if possible, but latin is standard
});

export const metadata = {
  title: "TrustLayer Labs VAPT Services in India | Penetration Testing Company",
  description: "TrustLayer Labs is a leading penetration testing company in India. We provide expert-led VAPT services, web application security, and cloud audits to secure your business.",
  keywords: "VAPT services India, penetration testing company India, web application security testing, api security testing, cybersecurity services india",
  icons: {
    icon: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
  verification: {
    google: [
      "O3NO3SF_l7xN6N9X0gzRJ84kqy7D2_I-dUrLxVRda5o",
      "UryoH0JchYIWZ4MGMGPKaHFCMsNC_S5cUxBPszHZBWk"
    ],
  },
  metadataBase: new URL("https://www.trustlayerlabs.co.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TrustLayer Labs | VAPT & Cybersecurity Services",
    description: "Professional VAPT and penetration testing services to secure your business.",
    url: "https://www.trustlayerlabs.co.in",
    siteName: "TrustLayer Labs",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TrustLayer Labs",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TrustLayer Labs | VAPT & Cybersecurity Services",
    description: "Professional VAPT and penetration testing services to secure your business.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preload critical assets if any, though Inter is handled by next/font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col bg-slate-50`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.trustlayerlabs.co.in/#organization",
                  "name": "TrustLayer Labs",
                  "url": "https://www.trustlayerlabs.co.in",
                  "logo": "https://www.trustlayerlabs.co.in/logo.jpeg",
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "email": "security@trustlayerlabs.co.in",
                    "contactType": "customer service"
                  }
                },
                {
                  "@type": "Service",
                  "name": "Vulnerability Assessment and Penetration Testing (VAPT)",
                  "provider": {
                    "@id": "https://www.trustlayerlabs.co.in/#organization"
                  },
                  "areaServed": "IN",
                  "description": "Enterprise-grade manual penetration testing and automated vulnerability scanning for web applications, APIs, and cloud infrastructure."
                }
              ]
            })
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

        {/* noscript fallback for GTM */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N98LZ37G"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Scripts optimized for non-blocking execution */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-51DXDHGGHS"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-51DXDHGGHS');
          `}
        </Script>

        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        
        {/* Interaction-based / Deferred components */}
        <WhatsApp />
      </body>
    </html>
  );
}
