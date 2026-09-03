import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JWT Decoder & Security Analyzer",
  description: "Decode, inspect, and analyze JSON Web Tokens for security vulnerabilities, weak signatures, 'none' algorithm exploits, and sensitive payload leaks.",
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/tools/jwt-decoder",
  },
  openGraph: {
    title: "JWT Decoder & Security Analyzer | TrustLayerLabs",
    description: "Free developer security tool to decode and audit JWT tokens for algorithm confusion, expiration issues, and secret exposures.",
    url: "https://www.trustlayerlabs.co.in/tools/jwt-decoder",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "JWT Decoder & Security Analyzer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "JWT Decoder & Security Analyzer | TrustLayerLabs",
    description: "Free developer security tool to decode and audit JWT tokens for algorithm confusion and vulnerabilities.",
    images: ["/og-image.jpg"],
  },
};

export default function JwtDecoderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
