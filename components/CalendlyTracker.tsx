"use client";

import { useEffect } from "react";

export default function CalendlyTracker() {
  useEffect(() => {
    // 1. Message listener for embedded Calendly widgets / popups
    const handleCalendlyMessage = (e: MessageEvent) => {
      try {
        if (!e.origin || !e.origin.includes("calendly.com")) return;
        const data = e.data;
        if (data && data.event === "calendly.event_scheduled") {
          if (typeof window !== "undefined") {
            const w = window as any;
            w.dataLayer = w.dataLayer || [];
            w.dataLayer.push({
              event: "calendly_event_scheduled",
              event_category: "conversion",
              event_label: "Calendly Meeting Scheduled",
              calendly_payload: data.payload,
            });

            if (typeof w.gtag === "function") {
              w.gtag("event", "calendly_event_scheduled", {
                event_category: "conversion",
                event_label: "Calendly Meeting Scheduled",
                value: 1,
              });
            }
          }
        }
      } catch (err) {
        console.error("Error processing Calendly postMessage event:", err);
      }
    };

    window.addEventListener("message", handleCalendlyMessage);

    // 2. Click delegation for all Calendly outbound links
    const handleCalendlyClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (target && target.href && target.href.includes("calendly.com")) {
        if (typeof window !== "undefined") {
          const w = window as any;
          w.dataLayer = w.dataLayer || [];
          w.dataLayer.push({
            event: "calendly_click",
            event_category: "conversion",
            event_label: target.href,
            page_location: window.location.pathname,
          });

          if (typeof w.gtag === "function") {
            w.gtag("event", "calendly_click", {
              event_category: "conversion",
              event_label: target.href,
              page_location: window.location.pathname,
            });
          }
        }
      }
    };

    document.addEventListener("click", handleCalendlyClick);

    return () => {
      window.removeEventListener("message", handleCalendlyMessage);
      document.removeEventListener("click", handleCalendlyClick);
    };
  }, []);

  return null;
}
