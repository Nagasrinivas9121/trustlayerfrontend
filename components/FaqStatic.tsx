"use client";

import React from "react";
import Link from "next/link";
import { HelpCircle, ChevronDown } from "lucide-react";
import { FAQS } from "@/lib/constants";

import { HOMEPAGE_FAQS } from "@/lib/homepage-faqs";

export default function FaqStatic() {
  const questions = HOMEPAGE_FAQS;

  return (
    <section id="faq" className="w-full bg-[#FAFAFA] px-4 sm:px-6 py-20 border-t border-dashed border-neutral-200 scroll-mt-24">
      <div className="max-w-[840px] mx-auto w-full flex flex-col items-center">
        
        {/* Section Header */}
        <div className="w-full max-w-xl mx-auto flex flex-col items-center justify-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 shadow-xs text-xs font-semibold text-neutral-800 mb-3">
            <HelpCircle size={14} className="text-primary" />
            <span>Clear Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 mb-3 font-sans">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-sans">
            Clear, practitioner-level answers about testing boundaries, mutual NDAs, and audit-ready deliverables:
          </p>
        </div>

        {/* Plain Semantic <details> FAQ Container (Zero JS Animation) */}
        <div className="w-full space-y-3.5">
          {questions.map((faq, idx) => (
            <details
              key={idx}
              className="group p-5 bg-white rounded-2xl border border-neutral-200 shadow-xs [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none text-left font-sans font-bold text-neutral-900 text-sm sm:text-base select-none gap-4">
                <span>{faq.q}</span>
                <span className="w-7 h-7 rounded-full bg-neutral-100 group-hover:bg-neutral-200 flex items-center justify-center text-neutral-600 shrink-0 transition-transform group-open:rotate-180">
                  <ChevronDown size={15} />
                </span>
              </summary>
              <div className="pt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans border-t border-dashed border-neutral-100 mt-3">
                <p>{faq.a}</p>
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}
