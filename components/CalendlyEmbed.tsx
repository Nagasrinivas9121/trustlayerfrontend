"use client";

import React, { useEffect, useRef } from "react";
import { CALENDLY_URL } from "@/lib/calendly";

interface CalendlyEmbedProps {
  url?: string;
  minHeight?: string;
  className?: string;
}

export default function CalendlyEmbed({
  url = CALENDLY_URL,
  minHeight = "680px",
  className = "",
}: CalendlyEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure widget styles are injected
    if (!document.getElementById("calendly-widget-css")) {
      const link = document.createElement("link");
      link.id = "calendly-widget-css";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }

    // Ensure widget script is injected
    const ensureScript = () => {
      if (!document.getElementById("calendly-widget-js")) {
        const script = document.createElement("script");
        script.id = "calendly-widget-js";
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);
      }
    };
    ensureScript();

    // Initialize the inline widget
    const initWidget = () => {
      const w = window as any;
      if (w.Calendly && typeof w.Calendly.initInlineWidget === "function" && containerRef.current) {
        // Prevent duplicate iframes
        if (!containerRef.current.querySelector("iframe")) {
          containerRef.current.innerHTML = "";
          w.Calendly.initInlineWidget({
            url: url,
            parentElement: containerRef.current,
          });
        }
      }
    };

    const w = window as any;
    if (w.Calendly && typeof w.Calendly.initInlineWidget === "function") {
      initWidget();
    } else {
      const interval = setInterval(() => {
        if ((window as any).Calendly && typeof (window as any).Calendly.initInlineWidget === "function") {
          clearInterval(interval);
          initWidget();
        }
      }, 150);
      const timeout = setTimeout(() => clearInterval(interval), 6000);
      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [url]);

  return (
    <div className={`w-full max-w-full overflow-hidden rounded-xl bg-surface border border-border/80 shadow-sm ${className}`}>
      <div
        ref={containerRef}
        className="calendly-inline-widget w-full max-w-full"
        data-url={url}
        style={{ minWidth: "100%", width: "100%", height: minHeight }}
      />
    </div>
  );
}
