import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";
import Script from "next/script";

// Dynamic imports for non-critical components
const WhatsApp = dynamic(() => import("@/components/WhatsApp"), { ssr: false });
const ExitPopup = dynamic(() => import("@/components/ExitPopup"), { ssr: false });
const StickyCTA = dynamic(() => import("@/components/StickyCTA"), { ssr: false });

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap", // Enable font-display: swap
  preload: true,
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-51DXDHGGHS"
          strategy="lazyOnload" // Optimized for third-party scripts
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
        <WhatsApp />
        <ExitPopup />
        <StickyCTA />
      </body>
    </html>
  );
}
