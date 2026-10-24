"use client";

import React from "react";
import Link from "next/link";
import { Handshake, FileText, Calendar, ArrowRight } from "lucide-react";
import { trackPartnerCtaClick, trackSampleReportCtaClick, trackCalendarCtaClick } from "@/lib/analytics";
import { openCalendly } from "@/lib/calendly";

export default function PartnershipActions() {
  return (
    <div className="flex flex-wrap items-center gap-3 pt-2">
      <Link 
        href="#contact"
        onClick={() => trackPartnerCtaClick("partnerships_hero_become_partner")}
        className="px-6 py-3.5 bg-neutral-900 hover:bg-black text-white text-xs font-semibold rounded-full transition-[color,background-color,border-color,box-shadow,transform] shadow-md flex items-center gap-2 group"
      >
        <Handshake size={15} />
        <span>Become a Security Partner</span>
        <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
      </Link>

      <button
        type="button"
        onClick={() => {
          trackCalendarCtaClick("partnerships_hero_schedule", "Schedule Partner Scoping");
          openCalendly();
        }}
        className="px-6 py-3.5 bg-white border border-neutral-200 hover:border-neutral-400 text-xs font-semibold rounded-full text-neutral-800 transition-[color,background-color,border-color,box-shadow,transform] flex items-center gap-2 cursor-pointer shadow-sm"
      >
        <Calendar size={15} className="text-neutral-500" />
        <span>Schedule Partner Call</span>
      </button>

      <Link 
        href="/sample-report"
        onClick={() => trackSampleReportCtaClick("partnerships_hero", "View the Sample Assessment Report")}
        className="px-6 py-3.5 bg-white border border-neutral-200 hover:border-neutral-400 text-xs font-semibold rounded-full text-neutral-800 transition-[color,background-color,border-color,box-shadow,transform] flex items-center gap-2 shadow-sm"
      >
        <FileText size={15} className="text-neutral-500" />
        <span>View Sample Report</span>
      </Link>
    </div>
  );
}
