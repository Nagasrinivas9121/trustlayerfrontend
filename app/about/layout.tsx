import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Nagasrinivasa Rao & TrustLayerLabs Security Team",
  description:
    "Meet the founder and team behind TrustLayerLabs — offensive security practitioners specializing in manual API penetration testing, web application VAPT, and compliance readiness.",
  keywords: [
    "VAPT offensive security practitioner India",
    "API security testing specialist",
    "TrustLayerLabs founder",
    "offensive security professional India",
    "API security expert Bangalore",
  ],
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/about",
  },
  openGraph: {
    title: "About TrustLayerLabs | Founder & Offensive Security Team",
    description:
      "Nagasrinivasa Rao and the TrustLayerLabs team — manual application security testing, API penetration testing, and GRC readiness.",
    url: "https://www.trustlayerlabs.co.in/about",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "TrustLayerLabs About" }],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
