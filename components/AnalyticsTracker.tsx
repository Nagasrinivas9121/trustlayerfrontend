"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { captureUtmAttribution, trackLandingPageView } from "@/lib/analytics";

export default function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // Capture and persist UTM parameters on initial entry
    captureUtmAttribution();

    // Track landing page view per section 25
    const pageType = pathname === "/" ? "home" : pathname.replace(/^\//, "");
    trackLandingPageView(pageType);
  }, [pathname]);

  return null;
}
