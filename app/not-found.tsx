"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, ArrowLeft, Home, FileText, Calendar, Search } from "lucide-react";

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
    <div className="min-h-screen bg-background text-textPrimary flex items-center justify-center px-6 py-24 font-sans">
      <div className="max-w-xl w-full text-center space-y-8 bg-surface border border-border p-8 sm:p-12 rounded-3xl shadow-sm">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary border border-primary/20 mx-auto">
          <AlertCircle size={32} />
        </div>

        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
            404 Error • Page Not Found
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-textPrimary">
            Looking for a Security Resource?
          </h1>
          <p className="text-sm text-textSecondary leading-relaxed max-w-md mx-auto">
            The endpoint or resource you requested is no longer located here or may have moved to a dedicated service path.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 p-3 bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm"
          >
            <Home size={15} /> Return Home
          </Link>
          <Link
            href="/services"
            className="flex items-center justify-center gap-2 p-3 bg-surface border border-border hover:border-zinc-400 text-textPrimary text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow-sm"
          >
            <Search size={15} /> All Security Services
          </Link>
          <Link
            href="/sample-report"
            className="flex items-center justify-center gap-2 p-3 bg-surface border border-border hover:border-zinc-400 text-textPrimary text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow-sm"
          >
            <FileText size={15} /> Sample Report
          </Link>
          <Link
            href="https://calendly.com/nagasrinivasaraoeevuri/30min"
            target="_blank"
            className="flex items-center justify-center gap-2 p-3 bg-surface border border-border hover:border-zinc-400 text-primary text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm"
          >
            <Calendar size={15} /> Book 20-Min Review
          </Link>
        </div>

        <div className="pt-6 border-t border-border/40 text-xs text-textSecondary">
          <p>
            Need immediate security assistance? Email us at{" "}
            <a href="mailto:ceo@trustlayerlabs.co.in" className="text-primary hover:underline font-medium">
              ceo@trustlayerlabs.co.in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
