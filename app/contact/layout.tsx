import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Book a Security Assessment",
  description:
    "Book a scoping session with TrustLayerLabs. Get a free 30-minute security consultation, request a VAPT scope proposal, or reach our security team directly via email, WhatsApp, or Calendly.",
  keywords: [
    "book security audit India",
    "contact penetration testing team",
    "free security consultation",
    "VAPT quote India",
    "API security assessment booking",
  ],
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/contact",
  },
  openGraph: {
    title: "Contact TrustLayerLabs | Book a Security Review",
    description:
      "Schedule your free security scoping session. OSCP certified team available for VAPT, API security, and SOC2 readiness consultations.",
    url: "https://www.trustlayerlabs.co.in/contact",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Contact TrustLayerLabs" }],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
