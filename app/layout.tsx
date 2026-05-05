import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "API Security Testing & GRC for SaaS & AI | TrustLayerLabs",
  description: "Identify vulnerabilities before attackers do. Expert VAPT, GRC, and API security testing for SaaS and AI startups. Manual logic testing with 48h report delivery.",
  keywords: "API security testing India, VAPT services, GRC compliance, SOC2 readiness, penetration testing SaaS, API vulnerability testing, TrustLayerLabs security",
  metadataBase: new URL("https://trustlayerlabs.co.in"),
  openGraph: {
    title: "TrustLayerLabs | VAPT, API Security & GRC",
    description: "Expert security audits and compliance for SaaS & AI products.",
    url: "https://trustlayerlabs.co.in",
    siteName: "TrustLayerLabs",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TrustLayerLabs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TrustLayerLabs | API, AI Security & GRC",
    description: "Manual security audits and compliance for startups in 48 hours.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TrustLayerLabs",
    "url": "https://trustlayerlabs.co.in",
    "logo": "https://trustlayerlabs.co.in/logo.jpeg",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "security@trustlayerlabs.co.in",
      "contactType": "security support"
    },
    "service": {
      "@type": "SecurityService",
      "name": "VAPT & API Security Testing",
      "description": "Expert manual security audits for SaaS & AI startups."
    }
  };

  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
