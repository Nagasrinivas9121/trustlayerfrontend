"use client";

import React from "react";
import { ArrowRight, ShieldCheck, MessageSquare, Mail } from "lucide-react";
import { openQuoteModal } from "@/components/QuoteModal";
import { trackPrimaryQuoteClick, trackWhatsappClick } from "@/lib/analytics";
import { BRAND } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section id="final-cta" className="w-full px-4 sm:px-6 py-14 sm:py-20 bg-[#FAFAFA]">
      <div className="max-w-5xl mx-auto w-full bg-neutral-950 text-white rounded-[36px] p-8 sm:p-14 lg:p-16 flex flex-col items-center text-center justify-between relative shadow-xl border border-neutral-800">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-800/80 border border-neutral-700 text-xs font-mono uppercase tracking-wider text-neutral-300 mb-6">
          <ShieldCheck size={14} className="text-emerald-400" />
          <span>Practitioner-Led Security Assessments</span>
        </div>

        {/* Outcome-Led Headline */}
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl text-white leading-[1.15] mb-5 font-sans">
          Ready to unblock your enterprise deal?{" "}
          <span className="text-primary block sm:inline">Get your pentest report in 5 days.</span>
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-neutral-400 max-w-xl leading-relaxed mb-8 font-sans">
          Pass enterprise security questionnaires, satisfy buyer procurement requirements, and harden your application before launch. Bilateral mutual NDA executed upfront.
        </p>

        {/* Action Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-8">
          <button
            type="button"
            onClick={() => {
              trackPrimaryQuoteClick("final_cta_primary");
              openQuoteModal("final-cta");
            }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 py-3.5 px-8 rounded-full bg-white text-neutral-950 hover:bg-neutral-100 font-semibold text-xs sm:text-sm tracking-tight shadow-md transition-colors cursor-pointer min-h-[48px]"
          >
            <span>Get a fixed-price quote in 24h</span>
            <ArrowRight size={14} />
          </button>

          <a
            href={BRAND.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsappClick("final_cta_whatsapp")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-neutral-900 hover:bg-neutral-850 text-emerald-400 font-semibold text-xs sm:text-sm transition-colors border border-neutral-800 tracking-tight cursor-pointer min-h-[48px]"
          >
            <MessageSquare size={16} />
            <span>Chat on WhatsApp (+91 93912 20328)</span>
          </a>
        </div>

        {/* Bottom Static Bar */}
        <div className="w-full pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-400 font-sans">
          <span>Govt. of India Registered MSME · UDYAM-AP-21-0044317</span>
          <a
            href="mailto:ceo@trustlayerlabs.co.in"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Mail size={13} />
            <span>ceo@trustlayerlabs.co.in</span>
          </a>
        </div>

      </div>
    </section>
  );
}
