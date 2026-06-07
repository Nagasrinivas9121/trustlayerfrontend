import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VAPT Case Studies — Real API Security Findings",
  description:
    "Read real-world VAPT case studies from TrustLayerLabs: BOLA/IDOR vulnerabilities discovered in FinTech APIs, broken authentication in SaaS platforms, and cloud misconfigurations that put customer data at risk.",
  keywords: [
    "VAPT case studies India",
    "API security case study",
    "penetration testing results",
    "BOLA vulnerability example",
    "SaaS security audit findings",
    "FinTech API vulnerability",
    "security assessment portfolio",
  ],
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/case-studies",
  },
  openGraph: {
    title: "VAPT Case Studies | Real API Security Findings | TrustLayerLabs",
    description:
      "See real vulnerabilities discovered by TrustLayerLabs: BOLA/IDOR in FinTech APIs, broken auth, S3 misconfigurations, and more. Proven security expertise.",
    url: "https://www.trustlayerlabs.co.in/case-studies",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "TrustLayerLabs Case Studies" }],
  },
};

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
