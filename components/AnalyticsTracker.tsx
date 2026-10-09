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

    try {
      // Standard GTM & GA4 SPA Page View Dispatch
      if (typeof window !== "undefined") {
        const w = window as any;
        const sanitizedLocation = (window.location.origin || "https://www.trustlayerlabs.co.in") + pathname;
        w.dataLayer = w.dataLayer || [];
        w.dataLayer.push({
          event: "page_view",
          page_location: sanitizedLocation,
          page_path: pathname,
          page_title: typeof document !== "undefined" ? document.title : "",
        });
        if (typeof w.gtag === "function") {
          w.gtag("config", "G-51DXDHGGHS", {
            page_path: pathname,
            page_location: sanitizedLocation,
            page_title: typeof document !== "undefined" ? document.title : "",
          });
        }
      }
    } catch {
      // Silently handle any tracker exception
    }
  }, [pathname]);

  return null;
}
