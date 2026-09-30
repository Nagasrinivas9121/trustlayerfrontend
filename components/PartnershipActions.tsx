"use client";

import React from "react";
import Link from "next/link";
import { Handshake, FileText, Calendar } from "lucide-react";
import { trackPartnerCtaClick, trackSampleReportCtaClick, trackCalendarCtaClick } from "@/lib/analytics";
import { openCalendly } from "@/lib/calendly";

export default function PartnershipActions() {
  return (
    <div className="flex flex-wrap items-center gap-4 pt-4">
      <Link 
        href="#contact"
        onClick={() => trackPartnerCtaClick("partnerships_hero_become_partner")}
        className="px-8 py-3.5 bg-primary hover:bg-primary-hover text-white text-xs uppercase font-sans font-bold tracking-wider rounded-xl transition-all shadow-md flex items-center gap-2"
      >
        <Handshake size={15} />
        <span>Become a Security Partner</span>
      </Link>

      <button
        type="button"
        onClick={() => {
          trackCalendarCtaClick("partnerships_hero_schedule", "Schedule Partner Scoping");
          openCalendly();
        }}
        className="px-6 py-3.5 bg-background border border-border hover:border-zinc-400 text-xs uppercase font-sans font-semibold tracking-wider rounded-xl text-textPrimary hover:text-primary transition-all flex items-center gap-2 cursor-pointer"
      >
        <Calendar size={15} className="text-primary" />
        <span>Schedule Partner Call</span>
      </button>

      <Link 
        href="/sample-report"
        onClick={() => trackSampleReportCtaClick("partnerships_hero", "View Sample Report")}
        className="px-6 py-3.5 bg-surface border border-border hover:border-zinc-400 text-xs uppercase font-sans font-semibold tracking-wider rounded-xl text-textPrimary hover:text-primary transition-all flex items-center gap-2"
      >
        <FileText size={15} />
        <span>View Sample Report</span>
      </Link>
    </div>
  );
}
