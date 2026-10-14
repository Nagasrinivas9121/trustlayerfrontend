import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Security Review (30-Min Scoping)",
  description: "Schedule a 30-minute security scoping review under mutual NDA. We evaluate your API, SaaS, and AI attack surface and provide a tailored testing roadmap.",
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/free-assessment",
  },
  openGraph: {
    title: "Get a Free Security Review | 30-Min Scoping | TrustLayerLabs",
    description: "Get a practitioner-led architecture evaluation, threat surface scoping, and tailored security proposal under mutual NDA.",
    url: "https://www.trustlayerlabs.co.in/free-assessment",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Get a Free Security Review — TrustLayerLabs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get a Free Security Review | 30-Min Scoping | TrustLayerLabs",
    description: "Request a practitioner-led 30-minute security review and scope evaluation under mutual NDA.",
    images: ["/og-image.jpg"],
  },
};

export default function FreeAssessmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
