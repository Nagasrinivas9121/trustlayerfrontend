"use client";

import { useEffect } from "react";
import { openCalendly } from "@/lib/calendly";

export default function CalendlyTracker() {
  useEffect(() => {
    // 1. Message listener for embedded Calendly widgets (inline & popups)
    const handleCalendlyMessage = (e: MessageEvent) => {
      try {
        if (!e.origin || !e.origin.includes("calendly.com")) return;
        let data = e.data;
        if (typeof data === "string") {
          try {
            data = JSON.parse(data);
          } catch {
            // Not a JSON string
          }
        }
        if (!data || !data.event) return;

        const w = window as any;
        w.dataLayer = w.dataLayer || [];

        if (data.event === "calendly.event_scheduled") {
          // Push to GTM dataLayer
          w.dataLayer.push({
            event: "calendly_event_scheduled",
            event_category: "conversion",
            event_label: "Calendly Meeting Scheduled",
            calendly_payload: data.payload,
          });

          // GA4 conversion event
          if (typeof w.gtag === "function") {
            w.gtag("event", "calendly_event_scheduled", {
              event_category: "conversion",
              event_label: "Calendly Meeting Scheduled",
              value: 1,
            });
            w.gtag("event", "conversion", {
              event_category: "Calendly",
              event_label: "Meeting Scheduled",
            });
          }
        } else if (data.event === "calendly.date_and_time_selected") {
          w.dataLayer.push({
            event: "calendly_date_time_selected",
            event_category: "engagement",
            event_label: "Calendly Slot Selected",
          });
          if (typeof w.gtag === "function") {
            w.gtag("event", "calendly_date_time_selected", {
              event_category: "engagement",
              event_label: "Calendly Slot Selected",
            });
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
        // Prevent opening in a raw unmonitored external tab; open via popup widget with tracking
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
