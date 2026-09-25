"use client";

import { useEffect } from "react";
import { openCalendly } from "@/lib/calendly";

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

    // 2. Click delegation for all Calendly outbound links -> open in popup widget
    const handleCalendlyClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (target && target.href && target.href.includes("calendly.com")) {
        // Prevent opening in a new tab; open as embedded Calendly popup
        e.preventDefault();
        openCalendly(target.href);
      }
    };

    document.addEventListener("click", handleCalendlyClick, true);

    return () => {
      window.removeEventListener("message", handleCalendlyMessage);
      document.removeEventListener("click", handleCalendlyClick, true);
    };
  }, []);

  return null;
}
