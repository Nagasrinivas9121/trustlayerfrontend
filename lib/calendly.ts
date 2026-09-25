export const CALENDLY_URL = "https://calendly.com/nagasrinivasaraoeevuri/30min";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
      closePopupWidget: () => void;
    };
  }
}

export function openCalendly(url: string = CALENDLY_URL) {
  if (typeof window === "undefined") return;

  const targetUrl = url || CALENDLY_URL;

  // Track click event immediately for GA4 and dataLayer
  const w = window as any;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({
    event: "calendly_click",
    event_category: "conversion",
    event_label: targetUrl,
    page_location: window.location.pathname,
  });

  if (typeof w.gtag === "function") {
    w.gtag("event", "calendly_click", {
      event_category: "conversion",
      event_label: targetUrl,
      page_location: window.location.pathname,
    });
  }

  // Ensure Calendly widget stylesheet is injected
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
