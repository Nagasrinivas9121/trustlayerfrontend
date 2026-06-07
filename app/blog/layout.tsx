import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Blog — API Vulnerability Research & GRC Guides",
  description:
    "Expert API security research, VAPT playbooks, penetration testing guides, and GRC compliance articles from TrustLayerLabs. Stay ahead of OWASP API Top 10 threats.",
  keywords: [
    "API security blog India",
    "penetration testing guides",
    "OWASP API Top 10",
    "VAPT articles",
    "GRC compliance guides",
    "cybersecurity research India",
    "cloud security best practices",
    "SOC2 compliance tips",
  ],
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/blog",
  },
  openGraph: {
    title: "Security Blog | API Vulnerability Research | TrustLayerLabs",
    description:
      "OWASP research, VAPT playbooks, SOC2 guides, and API security deep dives from India's leading penetration testing consultancy.",
    url: "https://www.trustlayerlabs.co.in/blog",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "TrustLayerLabs Security Blog" }],
    type: "website",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
