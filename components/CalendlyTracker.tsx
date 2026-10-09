"use client";

import { useEffect } from "react";
import { openCalendly } from "@/lib/calendly";
import { trackBookingStarted, trackScopingCallBooked } from "@/lib/analytics";

export default function CalendlyTracker() {
  useEffect(() => {
    // Session deduplication to prevent repeated events from duplicate postMessages or rerenders
    const processedBookings = new Set<string>();

    const isAllowedOrigin = (origin: string): boolean => {
      if (!origin) return false;
      return (
        /^https:\/\/([a-z0-9-]+\.)?calendly\.com$/.test(origin) ||
        /^https:\/\/([a-z0-9-]+\.)?cal\.com$/.test(origin)
      );
    };

    // 1. Message listener for embedded widgets (Cal.com & Calendly)
    const handleCalendlyMessage = (e: MessageEvent) => {
      try {
        if (!isAllowedOrigin(e.origin)) return;
        let data = e.data;
        if (typeof data === "string") {
          try {
            data = JSON.parse(data);
          } catch {
            // Not a JSON string
          }
        }
        if (!data || typeof data !== "object") return;

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
          const bookingId =
            data.payload?.event?.uri ||
            data.data?.uid ||
            data.payload?.invitee?.uri ||
            data.data?.bookingId ||
            "confirmed_booking";

          // Deduplicate repeated postMessage events
          if (processedBookings.has(bookingId)) {
            return;
          }
          processedBookings.add(bookingId);

          // Strictly verified meeting booked - single canonical dispatch
          trackScopingCallBooked({
            booking_id: typeof bookingId === "string" ? bookingId.slice(0, 100) : "confirmed",
          });
        } else if (isSlotSelected) {
          // User selected a date/time slot (booking funnel in progress)
          trackBookingStarted("calendar_slot_selected");
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
