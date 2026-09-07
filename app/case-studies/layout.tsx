import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Research & Technical Insights",
  description:
    "Explore practical security research, illustrative vulnerability scenarios, and developer remediation patterns for SaaS, FinTech, and AI platforms.",
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/case-studies",
  },
  openGraph: {
    title: "Security Research & Technical Insights | TrustLayerLabs",
    description:
      "Explore practical security research, illustrative vulnerability scenarios, and developer remediation patterns for SaaS, FinTech, and AI platforms.",
    url: "https://www.trustlayerlabs.co.in/case-studies",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "TrustLayerLabs Security Research & Insights" }],
  },
};

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
