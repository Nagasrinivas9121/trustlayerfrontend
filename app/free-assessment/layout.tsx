import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free VAPT Scoping & Security Assessment",
  description: "Request a free application security and API penetration testing assessment scope review for your SaaS, FinTech, or AI product.",
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/free-assessment",
  },
  openGraph: {
    title: "Free VAPT Scoping & Security Assessment | TrustLayerLabs",
    description: "Get a practitioner-led scope evaluation, threat surface review, and tailored VAPT proposal for your engineering team.",
    url: "https://www.trustlayerlabs.co.in/free-assessment",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Free VAPT Scoping & Security Assessment" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free VAPT Scoping & Security Assessment | TrustLayerLabs",
    description: "Request a practitioner-led VAPT & API security assessment scope review.",
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
