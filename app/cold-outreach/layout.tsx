import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Startup Security Snapshot",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/cold-outreach",
  },
};

export default function ColdOutreachLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
