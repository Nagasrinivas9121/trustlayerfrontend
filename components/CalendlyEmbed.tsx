"use client";

import React from "react";
import { CALENDLY_URL } from "@/lib/calendly";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface CalendlyEmbedProps {
  url?: string;
  minHeight?: string;
  className?: string;
  immediate?: boolean;
}

export default function CalendlyEmbed({
  url = CALENDLY_URL,
  minHeight = "480px",
  className = "",
}: CalendlyEmbedProps) {
  return (
    <div
      className={`w-full max-w-full overflow-hidden rounded-2xl bg-white border border-neutral-200 p-8 sm:p-12 shadow-xs flex flex-col items-center justify-center text-center space-y-5 font-sans ${className}`}
      style={{ minHeight }}
    >
      <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-primary shadow-sm">
        <Calendar size={28} />
      </div>

      <div className="max-w-md space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          Direct Practitioner Availability
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight font-sans">
          30-Minute Confidential Security Review
        </h3>
        <p className="text-xs text-neutral-600 leading-relaxed font-sans">
          Speak directly with an offensive security architect under bilateral mutual NDA.
        </p>
      </div>

      <div className="pt-2">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3.5 bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-semibold uppercase tracking-wider rounded-full transition-colors shadow-sm"
        >
          <span>Open Scheduling Calendar</span>
          <ArrowRight size={14} />
        </a>
      </div>

      <div className="flex items-center gap-2 text-xs text-neutral-500 font-sans pt-1">
        <Clock size={13} className="text-primary" />
        <span>Direct plain link · Zero third-party embed loaded</span>
      </div>
    </div>
  );
}
