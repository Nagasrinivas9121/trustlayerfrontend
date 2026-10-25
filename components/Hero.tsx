"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, CheckCircle2, MessageSquare, Award } from "lucide-react";
import { openQuoteModal } from "@/components/QuoteModal";
import { trackPrimaryQuoteClick, trackWhatsappClick } from "@/lib/analytics";
import { BRAND } from "@/lib/constants";

export default function Hero() {
  return (
    <section id="home" className="relative w-full flex flex-col items-center justify-center pt-28 md:pt-36 pb-16 overflow-hidden px-4 sm:px-6 bg-[#FAFAFA]">
      
      {/* Editorial Dot Grid Background (Static CSS) */}
      <div 
        className="absolute inset-0 w-full h-[640px] opacity-25 [mask-image:radial-gradient(circle,black_35%,transparent_100%)] pointer-events-none z-0"
        style={{
          backgroundImage: "radial-gradient(#64748b 1.25px, transparent 1.25px)",
          backgroundSize: "28px 28px",
          backgroundPosition: "center top"
        }}
      />

      {/* 1. Top Availability Pill Badge (Static, no animated pulse ring) */}
      <div className="flex items-center justify-center z-10 mb-6 sm:mb-8">
        <button
          type="button"
          onClick={() => {
            trackPrimaryQuoteClick("hero_pill");
            openQuoteModal();
          }}
          className="flex items-center justify-center gap-2.5 bg-white border border-neutral-200/90 rounded-full pr-2 pl-4 py-1.5 text-xs md:text-sm tracking-tight text-neutral-800 font-semibold shadow-xs hover:border-neutral-400 hover:shadow-sm transition-colors cursor-pointer group min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" />
          <span className="truncate">Direct Senior Practitioner Scoping · Fixed-Price Quote in 24h</span>
          <div className="bg-neutral-100 group-hover:bg-neutral-200 w-6 h-6 rounded-full flex items-center justify-center ml-1 text-neutral-900 transition-colors shrink-0">
            <ArrowRight size={12} className="-rotate-45" />
          </div>
        </button>
      </div>

      {/* Main Hero Container */}
      <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center text-center z-10">
        
        {/* Outcome-Led Headline */}
        <h1 className="text-3xl leading-[1.14] font-bold tracking-tight text-neutral-950 sm:text-4xl md:text-5xl lg:text-[54px] lg:leading-[1.15] max-w-4xl mx-auto">
          Your enterprise deal is waiting on a pentest report.{" "}
          <span className="text-primary block sm:inline">Get one in 5-10 business days.</span>
        </h1>

        {/* Subhead */}
        <p className="text-neutral-700 text-sm md:text-lg max-w-2xl mx-auto tracking-tight leading-relaxed mt-5 mb-8 font-sans">
          Manual API and multi-tenant SaaS penetration testing with reproducible PoCs, critical findings briefed within 48 hours, a free 30-day retest, and a signed retest attestation letter.
        </p>

        {/* Primary CTA + Secondary WhatsApp Action Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10 w-full sm:w-auto">
          {/* Primary CTA: Get a fixed-price quote in 24h */}
          <button
            type="button"
            onClick={() => {
              trackPrimaryQuoteClick("hero_primary_button");
              openQuoteModal();
            }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 py-3.5 px-8 font-semibold bg-neutral-950 hover:bg-neutral-800 text-white rounded-full shadow-md tracking-tight whitespace-nowrap text-sm cursor-pointer min-h-[48px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
          >
            <span>Get a fixed-price quote in 24h</span>
            <ArrowRight size={15} />
          </button>

          {/* Secondary CTA: WhatsApp Link */}
          <a
            href={BRAND.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsappClick("hero_secondary_button")}
            className="w-full sm:w-auto flex items-center justify-center gap-2 py-3.5 px-6 font-semibold text-emerald-800 hover:text-emerald-950 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 rounded-full transition-colors text-xs sm:text-sm tracking-tight shadow-xs cursor-pointer min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700"
          >
            <MessageSquare size={16} className="text-emerald-700 shrink-0" />
            <span>Chat on WhatsApp (+91 93912 20328)</span>
          </a>
        </div>

        {/* Credibility Strip: Certified Analysts & MSME Proof (Zero Fake Star Rating / Zero Invented Metrics) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-1 mb-10">
          <div className="flex -space-x-2.5 items-center">
            <Image
              src="/nagasrinivasarao.jpg"
              alt="Nagasrinivasa Rao, Lead Security Architect (IIT Guwahati, CEH, CWL C3SA)"
              width={36}
              height={36}
              className="rounded-full w-9 h-9 border-2 border-white object-cover shadow-xs"
            />
            <Image
              src="/ramineniteja.jpg"
              alt="Ramineni Teja, GRC Lead (ISO 27001 Lead Auditor, CWL C3SA)"
              width={36}
              height={36}
              className="rounded-full w-9 h-9 border-2 border-white object-cover shadow-xs"
            />
            <Image
              src="/nayansianand.jpg"
              alt="Nayansi Anand, VAPT Specialist (CEH)"
              width={36}
              height={36}
              className="rounded-full w-9 h-9 border-2 border-white object-cover shadow-xs"
            />
            <span className="bg-white w-9 h-9 text-neutral-800 border border-neutral-200 rounded-full flex items-center justify-center text-[10px] font-bold ml-1 shadow-xs font-mono" title="Govt. of India Registered MSME">
              MSME
            </span>
          </div>

          <div className="flex flex-col justify-start items-center sm:items-start text-center sm:text-left">
            <span className="text-neutral-900 text-xs sm:text-sm font-semibold tracking-tight font-sans">
              Certified Security Architects · CEH · CWL C3SA · ISO/IEC 27001 LA
            </span>
            <span className="text-neutral-500 text-[11px] font-sans">
              Every assessment executed by qualified lead practitioners. Never outsourced.
            </span>
          </div>
        </div>
      </div>

      {/* Static Trust Strip directly under Hero */}
      <div className="w-full max-w-4xl mx-auto mt-12 pt-6 border-t border-dashed border-neutral-200 flex flex-wrap items-center justify-center gap-y-2.5 gap-x-6 text-xs text-neutral-700 font-medium z-10 px-4">
        <span className="flex items-center gap-1.5">
          <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
          Govt. Registered MSME (UDYAM-AP-21-0044317)
        </span>
        <span className="flex items-center gap-1.5">
          <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
          Bilateral Mutual NDA Executed Upfront
        </span>
        <span className="flex items-center gap-1.5">
          <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
          Complimentary 30-Day Retesting Included
        </span>
        <span className="flex items-center gap-1.5">
          <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
          Every Finding Verified with Reproducible PoC
        </span>
      </div>

    </section>
  );
}
