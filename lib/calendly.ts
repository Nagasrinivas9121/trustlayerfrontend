import { trackBookingLinkClick } from "./analytics";

export const CAL_URL = "https://cal.com/nagasrinivasarao/30min";
export const CALENDLY_URL = CAL_URL;
export const BOOKING_URL = CAL_URL;

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
      closePopupWidget: () => void;
    };
    Cal?: any;
  }
}

export function openCalModal(url: string = CAL_URL) {
  if (typeof window === "undefined") return;

  const targetUrl = url || CAL_URL;
  const calLink = targetUrl.replace(/^https?:\/\/(app\.)?cal\.com\//, "").split("?")[0];

  const w = window as any;
  if (!w.Cal) {
    (function (C: any, A: string, L: string) {
      const p = function (a: any, ar: any) { a.q.push(ar); };
      const d = C.document;
      C.Cal = C.Cal || function (...args: any[]) {
        const cal = C.Cal;
        const ar = args;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          const s = d.createElement("script");
          s.src = A;
          s.async = true;
          s.onerror = () => {
            window.open(targetUrl, "_blank");
          };
          d.head.appendChild(s);
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api: any = function (...apiArgs: any[]) { p(api, apiArgs); };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");
    w.Cal("init", { origin: "https://app.cal.com" });
  }

  try {
    w.Cal("modal", {
      calLink: calLink || "nagasrinivasarao/30min",
      config: { layout: "month_view" },
    });
  } catch {
    window.open(targetUrl, "_blank");
  }
}

export function openCalendly(url: string = CALENDLY_URL) {
  if (typeof window === "undefined") return;

  const targetUrl = url || CALENDLY_URL;

  // Track click event via sanitized tracker (strictly non-conversion event)
  trackBookingLinkClick("booking_launcher", targetUrl);

  if (targetUrl.includes("cal.com")) {
    openCalModal(targetUrl);
    return;
  }

  // Ensure Calendly widget stylesheet is injected (for legacy Calendly links)
  if (!document.getElementById("calendly-widget-css")) {
    const link = document.createElement("link");
    link.id = "calendly-widget-css";
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }

  // Launch popup widget
  if (window.Calendly && typeof window.Calendly.initPopupWidget === "function") {
    window.Calendly.initPopupWidget({ url: targetUrl });
  } else {
    // If widget.js is not yet loaded, inject it and trigger upon load
    let script = document.getElementById("calendly-widget-js") as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = "calendly-widget-js";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }

    const triggerPopup = () => {
      if (window.Calendly && typeof window.Calendly.initPopupWidget === "function") {
        window.Calendly.initPopupWidget({ url: targetUrl });
      } else {
        window.open(targetUrl, "_blank");
      }
    };

    if (window.Calendly) {
      triggerPopup();
    } else {
      script.addEventListener("load", triggerPopup, { once: true });
      script.addEventListener("error", () => window.open(targetUrl, "_blank"), { once: true });
    }
  }
}

export const openBooking = openCalendly;
