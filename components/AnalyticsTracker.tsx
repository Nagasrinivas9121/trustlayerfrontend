"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { captureUtmAttribution, getUtmAttribution, trackLandingPageView } from "@/lib/analytics";

export default function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // Capture and persist UTM parameters on initial entry
    captureUtmAttribution();

    const pageType = pathname === "/" ? "home" : pathname.replace(/^\//, "");
    trackLandingPageView(pageType);

    // Debounce slightly to allow Next.js App Router to update document.title
    const timer = setTimeout(() => {
      try {
        if (typeof window !== "undefined") {
          const w = window as any;
          const safeOrigin = window.location.origin || "https://www.trustlayerlabs.co.in";
          const sanitizedLocation = safeOrigin + pathname;
          const pageTitle = typeof document !== "undefined" ? document.title : "";
          const utm = getUtmAttribution();
          const deviceType = window.innerWidth < 768 ? "mobile" : window.innerWidth < 1024 ? "tablet" : "desktop";
          const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-51DXDHGGHS";

          w.dataLayer = w.dataLayer || [];

          // 1. Dispatch custom virtual_page_view for GTM SPA triggers
          w.dataLayer.push({
            event: "virtual_page_view",
            page_location: sanitizedLocation,
            page_path: pathname,
            page_title: pageTitle,
            page_type: pageType,
            device_type: deviceType,
            ...utm,
          });

          // 2. Standard page_view for GA4 & Universal GTM triggers
          w.dataLayer.push({
            event: "page_view",
            page_location: sanitizedLocation,
            page_path: pathname,
            page_title: pageTitle,
            page_type: pageType,
          });

          // 3. Direct GA4 config dispatch if gtag is active
          if (typeof w.gtag === "function") {
            w.gtag("config", gaId, {
              page_path: pathname,
              page_location: sanitizedLocation,
              page_title: pageTitle,
            });
          }
        }
      } catch {
        // Silently handle tracker exceptions
      }
    }, 60);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

