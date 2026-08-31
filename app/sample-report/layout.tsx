import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Illustrative Sample VAPT Report | TrustLayerLabs",
  description: "Explore an illustrative sample VAPT report from TrustLayerLabs. See CVSS scores, reproduction steps, code patches, and assessment report structures.",
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
