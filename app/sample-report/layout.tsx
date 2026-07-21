import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Redacted Sample VAPT Report | TrustLayerLabs",
  description: "Explore a real redacted VAPT report from TrustLayerLabs. See CVSS scores, reproduction steps, code patches, and attestation certificate structures.",
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/sample-report",
  },
};

export default function SampleReportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
