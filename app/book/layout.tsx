import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule a Security Review — 30-Min Confidential Consultation | TrustLayerLabs",
  description:
    "Schedule a direct 30-minute scoping call with an offensive security practitioner. Mutual NDA ready, direct scoping, and zero sales overhead.",
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/book",
  },
  openGraph: {
    title: "Schedule a Security Review | TrustLayerLabs",
    description:
      "Direct 30-minute technical scoping consultation with offensive security engineers. Discuss VAPT, cloud pentesting, and compliance readiness.",
    url: "https://www.trustlayerlabs.co.in/book",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Schedule a Security Review" }],
  },
};

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
