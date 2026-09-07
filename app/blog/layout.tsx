import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Blog & Vulnerability Research",
  description:
    "Expert API security research, VAPT playbooks, penetration testing guides, and GRC compliance articles from TrustLayerLabs. Stay ahead of OWASP API Top 10 threats.",
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/blog",
  },
  openGraph: {
    title: "Security Blog | API Vulnerability Research | TrustLayerLabs",
    description:
      "OWASP research, VAPT playbooks, SOC2 guides, and API security deep dives from offensive security and compliance practitioners.",
    url: "https://www.trustlayerlabs.co.in/blog",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "TrustLayerLabs Security Blog" }],
    type: "website",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
