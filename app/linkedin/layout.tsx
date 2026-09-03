import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LinkedIn Post Generator & Swipe File",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/linkedin",
  },
};

export default function LinkedinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
