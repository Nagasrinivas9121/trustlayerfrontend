import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Checklist for Startups & Engineering Teams",
  description: "Comprehensive application security, API testing, and compliance checklist for SaaS and tech startups preparing for audits and pen tests.",
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/checklist",
  },
  openGraph: {
    title: "Security Checklist for Startups & Engineering Teams | TrustLayerLabs",
    description: "Interactive readiness checklist covering authentication, BOLA, cloud security, and compliance controls.",
    url: "https://www.trustlayerlabs.co.in/checklist",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Security Checklist for Startups" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Security Checklist for Startups & Engineering Teams | TrustLayerLabs",
    description: "Interactive startup security and audit readiness checklist.",
    images: ["/og-image.jpg"],
  },
};

export default function ChecklistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
