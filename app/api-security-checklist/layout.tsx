import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "API Security Checklist (64 Production Controls) | TrustLayerLabs",
  description: "Comprehensive API security checklist covering authentication, BOLA/IDOR, tenant isolation, rate limiting, and business logic verification for modern APIs.",
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/api-security-checklist",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "API Security Checklist (64 Production Controls) | TrustLayerLabs",
    description: "Audit your startup APIs against 64 critical authorization, BOLA/IDOR, token, and rate-limiting controls before enterprise security reviews.",
    url: "https://www.trustlayerlabs.co.in/api-security-checklist",
    type: "website",
    images: [{ url: "/og-image.jpg?v=2", width: 1200, height: 630, alt: "API Security Checklist — TrustLayerLabs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "API Security Checklist (64 Production Controls) | TrustLayerLabs",
    description: "Audit your startup APIs against 64 critical authorization, BOLA/IDOR, token, and rate-limiting controls before enterprise security reviews.",
    images: ["/og-image.jpg?v=2"],
  },
};

export const revalidate = 3600;

export default function ApiSecurityChecklistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
