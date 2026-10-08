"use client";

import { useEffect } from "react";
import { openCalendly } from "@/lib/calendly";
import { trackBookingStarted, trackScopingCallBooked } from "@/lib/analytics";

export default function CalendlyTracker() {
  useEffect(() => {
    // 1. Message listener for embedded widgets (Cal.com & Calendly)
    const handleCalendlyMessage = (e: MessageEvent) => {
      try {
        if (!e.origin || (!e.origin.includes("calendly.com") && !e.origin.includes("cal.com"))) return;
        let data = e.data;
        if (typeof data === "string") {
          try {
            data = JSON.parse(data);
          } catch {
            // Not a JSON string
          }
        }
        if (!data) return;

        const w = window as any;
        w.dataLayer = w.dataLayer || [];

        // Check Calendly or Cal.com booking events
        const isBookingSuccessful =
          data.event === "calendly.event_scheduled" ||
          data.type === "bookingSuccessful" ||
          data.event === "bookingSuccessful" ||
          (data.data && data.data.type === "bookingSuccessful");

        const isSlotSelected =
          data.event === "calendly.date_and_time_selected" ||
          data.type === "dateSelected" ||
          data.type === "timeSelected" ||
          data.event === "dateSelected" ||
          data.event === "timeSelected";

        if (isBookingSuccessful) {
          // Strictly verified meeting booked
          trackScopingCallBooked({
            event_uri: data.payload?.event?.uri || data.data?.uid,
            invitee_uri: data.payload?.invitee?.uri || data.data?.bookingId,
          });

          // Maintain backward-compatibility for existing tags
          w.dataLayer.push({
            event: "calendar_event_scheduled",
            event_category: "conversion",
            event_label: "Meeting Scheduled",
          });
          w.dataLayer.push({
            event: "calendly_event_scheduled",
            event_category: "conversion",
            event_label: "Meeting Scheduled",
          });

          if (typeof w.gtag === "function") {
            w.gtag("event", "conversion", {
              event_category: "Booking",
              event_label: "Meeting Scheduled",
            });
          }
        } else if (isSlotSelected) {
          // User selected a date/time slot (booking funnel in progress)
          trackBookingStarted("calendar_slot_selected");

          w.dataLayer.push({
            event: "calendar_date_time_selected",
            event_category: "engagement",
            event_label: "Slot Selected",
          });
          w.dataLayer.push({
            event: "calendly_date_time_selected",
            event_category: "engagement",
            event_label: "Slot Selected",
          });
        }
      } catch (err) {
        console.error("Error processing Calendar postMessage event:", err);
      }
    };

    window.addEventListener("message", handleCalendlyMessage);

    // 2. Click delegation for all Calendly / Cal.com outbound links
    const handleCalendlyClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (target && target.href && (target.href.includes("calendly.com") || target.href.includes("cal.com"))) {
        // Prevent opening in a raw unmonitored external tab; open via modal/widget with tracking
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
