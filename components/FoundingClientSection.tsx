"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Check, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";
import { FOUNDING_CLIENT_CONFIG } from "@/lib/pricing-config";
import { trackPrimaryQuoteClick } from "@/lib/analytics";

export default function FoundingClientSection() {
  const { slotsTotal, slotsLeft, discountPercentage, whatYouGet, whatWeAsk, note } = FOUNDING_CLIENT_CONFIG;

  return (
    <section id="founding-program" className="w-full bg-[#FAFAFA] px-4 sm:px-6 py-20 border-t border-dashed border-neutral-200">
      <div className="max-w-[1140px] mx-auto w-full flex flex-col items-center">
        
        {/* Section Header */}
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-primary mb-3">
            <Sparkles size={13} className="text-primary" />
            <span>Limited Cohort Offer</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 mb-4 font-sans">
            Founding Client Program: {slotsLeft} of {slotsTotal} slots open
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-xl mx-auto font-sans">
            Founding clients get {discountPercentage}% off listed package price for permission to publish an anonymized case study or short testimonial, plus priority scheduling.
          </p>

          {/* Slots Available Counter */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-neutral-300 shadow-xs text-xs font-mono font-semibold text-neutral-900">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 shrink-0" />
            <span>
              Availability: <strong className="text-emerald-700">{slotsLeft}</strong> of <strong>{slotsTotal}</strong> slots open
            </span>
          </div>
        </div>

        {/* 2-Column Transparent Comparison: What You Get vs. What We Ask */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mb-10">
          
          {/* Column 1: What You Get */}
          <div className="p-7 sm:p-8 bg-white rounded-3xl border border-neutral-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-100">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                  Deliverables & Inclusions
                </span>
                <span className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-md">
                  {discountPercentage}% Discounted
                </span>
              </div>

              <h3 className="text-xl font-bold text-neutral-950 font-sans mb-4">
                What You Receive
              </h3>

              <ul className="space-y-3 text-xs sm:text-sm text-neutral-700 font-sans">
                {whatYouGet.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={11} strokeWidth={3} />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-dashed border-neutral-200 text-xs text-neutral-500 flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-emerald-600" />
              <span>Full confidentiality under Bilateral Mutual NDA</span>
            </div>
          </div>

          {/* Column 2: What We Ask */}
          <div className="p-7 sm:p-8 bg-white rounded-3xl border border-neutral-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-100">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500">
                  Fair Exchange
                </span>
                <span className="text-[11px] font-mono font-bold text-neutral-700 bg-neutral-100 px-2.5 py-0.5 rounded-md">
                  Case Study Permission
                </span>
              </div>

              <h3 className="text-xl font-bold text-neutral-950 font-sans mb-4">
                What We Ask From You
              </h3>

              <ul className="space-y-3.5 text-xs sm:text-sm text-neutral-700 font-sans">
                {whatWeAsk.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-blue-100 text-primary flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                      {idx + 1}
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 p-3.5 bg-neutral-50 rounded-2xl border border-neutral-200 text-xs text-neutral-600 leading-relaxed">
                <strong className="text-neutral-900 block mb-0.5">Anonymization Guaranteed:</strong>
                If your company policies restrict public disclosure, your case study will be completely anonymized (e.g. &ldquo;Series-A B2B FinTech Platform&rdquo;) with zero logos or identifying marks.
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-dashed border-neutral-200">
              <Link
                href="/free-assessment?package=founding-client"
                onClick={() => {
                  trackPrimaryQuoteClick("founding_client_apply");
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white font-semibold text-xs tracking-tight shadow-md transition-colors cursor-pointer min-h-[44px]"
              >
                <span>Get a fixed-price quote in 24h</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

        </div>

        {/* Note under section */}
        <p className="text-xs text-neutral-500 font-sans text-center mt-2">
          {note}
        </p>

      </div>
    </section>
  );
}
