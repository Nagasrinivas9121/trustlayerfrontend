import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Book a Security Assessment",
  description:
    "Connect with TrustLayerLabs for scoping advice, security assessment enquiries, or to execute a mutual NDA. We aim to respond within one business day.",
  keywords: [
    "book security audit India",
    "contact penetration testing team",
    "security consultation",
    "VAPT quote India",
    "API security assessment booking",
  ],
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/contact",
  },
  openGraph: {
    title: "Contact TrustLayerLabs | Book a Security Review",
    description:
      "Connect with TrustLayerLabs for scoping advice, security assessment enquiries, or to execute a mutual NDA. We aim to respond within one business day.",
    url: "https://www.trustlayerlabs.co.in/contact",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Contact TrustLayerLabs" }],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
