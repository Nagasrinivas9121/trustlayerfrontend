import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Nagasrinivasa Rao, OSCP Certified Security Architect",
  description:
    "Meet the founder of TrustLayerLabs — Nagasrinivasa Rao, an OSCP, CEH & eWPT certified offensive security professional with 8+ years auditing enterprise APIs, cloud architectures, and financial systems.",
  keywords: [
    "OSCP certified security architect India",
    "CEH penetration tester",
    "TrustLayerLabs founder",
    "offensive security professional India",
    "API security expert Bangalore",
  ],
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/about",
  },
  openGraph: {
    title: "About TrustLayerLabs | OSCP Certified Security Team",
    description:
      "Nagasrinivasa Rao — OSCP, CEH & eWPT certified. 8+ years securing APIs, cloud infrastructure, and financial systems for enterprise clients.",
    url: "https://www.trustlayerlabs.co.in/about",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "TrustLayerLabs About" }],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
