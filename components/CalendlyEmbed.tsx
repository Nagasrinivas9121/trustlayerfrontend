"use client";

import React, { useEffect, useRef, useState } from "react";
import { CALENDLY_URL } from "@/lib/calendly";
import { Calendar, Clock, ShieldCheck, ArrowRight, Loader2 } from "lucide-react";
import { trackCalendarLoaded } from "@/lib/analytics";

interface CalendlyEmbedProps {
  url?: string;
  minHeight?: string;
  className?: string;
  immediate?: boolean;
}

export default function CalendlyEmbed({
  url = CALENDLY_URL,
  minHeight = "680px",
  className = "",
  immediate = false,
}: CalendlyEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(immediate);
  const [isLoading, setIsLoading] = useState(false);

  // Lazy load on scroll intersection or user interaction
  useEffect(() => {
    if (shouldLoad) return;

    const el = wrapperRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [shouldLoad]);

  const isCal = url.includes("cal.com");
  const calEmbedUrl = isCal
    ? url.includes("embed=true")
      ? url
      : `${url}${url.includes("?") ? "&" : "?"}embed=true`
    : url;

  useEffect(() => {
    if (!shouldLoad) return;

    if (isCal) {
      // Cal.com will be rendered via iframe and resolve loading via onLoad
      return;
    }

    setIsLoading(true);

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
        if (!containerRef.current.querySelector("iframe")) {
          containerRef.current.innerHTML = "";
          w.Calendly.initInlineWidget({
            url: url,
            parentElement: containerRef.current,
          });
          trackCalendarLoaded("inline_embed");
        }
        setIsLoading(false);
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
      }, 100);
      const timeout = setTimeout(() => {
        clearInterval(interval);
        setIsLoading(false);
      }, 6000);
      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [shouldLoad, url, isCal]);

  return (
    <div
      ref={wrapperRef}
      className={`w-full max-w-full overflow-hidden rounded-xl bg-surface border border-border/80 shadow-sm relative min-h-[680px] ${className}`}
    >
      {!shouldLoad ? (
        <div className="flex flex-col items-center justify-center p-8 sm:p-12 text-center h-full min-h-[560px] space-y-5 bg-surface/50">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-blue-800 shadow-sm">
            <Calendar size={28} />
          </div>

          <div className="max-w-md space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Live Practitioner Availability
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-textPrimary tracking-tight font-sans">
              30-Minute Confidential Security Review
            </h3>
            <p className="text-xs text-textSecondary leading-relaxed font-sans">
              Speak directly with an offensive security architect. Choose your time slot with real-time calendar synchronization.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => setShouldLoad(true)}
              className="px-6 py-3 bg-primary hover:bg-primary-hover text-white text-xs uppercase font-sans font-bold tracking-wider rounded-xl transition-all flex items-center gap-2 shadow-sm cursor-pointer active:scale-95"
              aria-label="Load live scheduling calendar"
            >
              <span>Load Live Calendar</span>
              <ArrowRight size={14} />
            </button>
            <div className="flex items-center gap-2 text-xs text-textSecondary font-sans">
              <Clock size={13} className="text-primary" />
              <span>Instant Confirmation & NDA</span>
            </div>
          </div>
        </div>
      ) : (
        <>
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-surface/80 backdrop-blur-xs z-10 space-y-3">
              <Loader2 className="w-7 h-7 text-primary animate-spin" />
              <span className="text-xs font-mono font-medium text-textSecondary uppercase tracking-wider">
                Connecting Calendar...
              </span>
            </div>
          )}
          {isCal ? (
            <iframe
              src={calEmbedUrl}
              title="Confidential Security Review Calendar"
              className="w-full max-w-full min-w-full min-h-[680px] h-[680px] border-0 rounded-xl"
              onLoad={() => {
                setIsLoading(false);
                trackCalendarLoaded("inline_embed");
              }}
            />
          ) : (
            <div
              ref={containerRef}
              className="calendly-inline-widget w-full max-w-full min-w-full min-h-[680px] h-[680px]"
              data-url={url}
            />
          )}
        </>
      )}
    </div>
  );
}
