"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, ArrowLeft, Home, FileText, Calendar, Search } from "lucide-react";
import ObfuscatedEmailLink from "@/components/ObfuscatedEmailLink";

export default function NotFound() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const w = window as any;
      w.dataLayer = w.dataLayer || [];
      const errorData = {
        event: "page_view_404",
        broken_url: window.location.href,
        broken_path: window.location.pathname,
        referrer: document.referrer || "direct",
      };
      w.dataLayer.push(errorData);

      if (typeof w.gtag === "function") {
        w.gtag("event", "page_view_404", {
          event_category: "error",
          event_label: window.location.pathname,
          referrer: document.referrer || "direct",
        });
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-neutral-900 flex items-center justify-center px-4 sm:px-6 py-24 font-sans">
      <div className="max-w-xl w-full text-center space-y-8 bg-white border border-neutral-200/80 p-8 sm:p-12 rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
        
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200/80 text-xs font-semibold text-neutral-800 mx-auto">
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
          <span>404 Error • Endpoint Not Found</span>
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950">
            Looking for a Security Resource?
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-md mx-auto">
            The endpoint or resource you requested is no longer located here or may have moved to a dedicated service path.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 p-3.5 bg-neutral-900 hover:bg-black text-white text-xs font-semibold rounded-full transition-all shadow-sm"
          >
            <Home size={15} /> <span>Return Home</span>
          </Link>
          <Link
            href="/services"
            className="flex items-center justify-center gap-2 p-3.5 bg-white border border-neutral-200 hover:border-neutral-400 text-neutral-800 text-xs font-semibold rounded-full transition-all shadow-sm"
          >
            <Search size={15} /> <span>Security Services</span>
          </Link>
          <Link
            href="/sample-report"
            className="flex items-center justify-center gap-2 p-3.5 bg-white border border-neutral-200 hover:border-neutral-400 text-neutral-800 text-xs font-semibold rounded-full transition-all shadow-sm"
          >
            <FileText size={15} /> <span>Sample Report</span>
          </Link>
          <Link
            href="/free-assessment"
            className="flex items-center justify-center gap-2 p-3.5 bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-semibold rounded-full transition-all shadow-sm"
          >
            <Calendar size={15} /> <span>Get a fixed-price quote in 24h</span>
          </Link>
        </div>

        <div className="pt-6 border-t border-dashed border-neutral-200 text-xs text-neutral-500">
          <p>
            Need immediate security assistance? Email us at{" "}
            <ObfuscatedEmailLink className="text-neutral-900 hover:underline font-semibold" />
          </p>
        </div>
      </div>
    </div>
  );
}
