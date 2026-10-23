"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { FAQS } from "@/lib/constants";

export default function FaqChat() {
  // Open first FAQ by default
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  // Select top 6 high-conversion FAQs for the chat interaction
  const displayFaqs = FAQS.slice(0, 6);

  return (
    <div id="faq" className="w-full bg-[#FAFAFA] px-4 sm:px-6 py-20 scroll-mt-10 border-t border-dashed border-neutral-200">
      <section className="max-w-[1140px] mx-auto dashed-x-custom w-full flex flex-col items-center justify-center">
        
        {/* Section Header */}
        <div className="w-full max-w-xl mx-auto flex flex-col items-center justify-center text-center py-8 sm:py-12 gap-2.5 px-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/80 shadow-sm text-xs font-semibold text-neutral-800 mb-2">
            <HelpCircle size={14} className="text-primary" />
            <span>Clear Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-md">
            Got questions about testing boundaries, scoping, or deliverables? Here are clear, practitioner-level answers:
          </p>
        </div>

        {/* Chat Stream Style FAQ Container (CodeDale Signature) */}
        <div className="w-full dashed-y-custom py-12 px-4 sm:px-6">
          <div className="max-w-[780px] mx-auto w-full flex flex-col gap-6 items-start justify-start py-4 dashed-x-custom px-3 sm:px-8 bg-white/40 rounded-3xl">
            {displayFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div key={idx} className="w-full flex flex-col gap-3">
                  
                  {/* User Question Bubble (Right Aligned) */}
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    className="self-end flex items-center gap-2.5 cursor-pointer text-left group/faq focus:outline-none"
                  >
                    {/* Plus / Minus Circular Toggle Button */}
                    <span
                      className={`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center shrink-0 rounded-full transition-all duration-300 ${
                        isOpen
                          ? "bg-[#151619] text-white shadow-md rotate-180"
                          : "border border-neutral-300 text-neutral-800 bg-white group-hover/faq:scale-105 group-hover/faq:-rotate-12 shadow-xs"
                      }`}
                    >
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>

                    {/* Question Chat Bubble */}
                    <span
                      className={`w-fit p-3.5 sm:p-4 rounded-l-3xl rounded-tr-3xl text-xs sm:text-[14.5px] font-semibold transition-colors duration-300 shadow-xs max-w-md ${
                        isOpen
                          ? "bg-[#151619] text-white"
                          : "bg-neutral-200/80 text-neutral-900 hover:bg-neutral-300/80"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </button>

                  {/* Practitioner Answer Bubble (Left Aligned with Avatar) */}
                  {isOpen && (
                    <div className="max-w-[560px] mr-auto w-full flex items-end gap-2.5 pt-1 animate-fade-in z-10">
                      <div className="relative shrink-0">
                        <Image
                          src="/nagasrinivasarao.jpg"
                          alt="Nagasrinivasa Rao"
                          width={38}
                          height={38}
                          className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-sm"
                        />
                      </div>
                      
                      <div className="w-fit p-4 sm:p-5 rounded-e-3xl rounded-tl-2xl text-neutral-900 bg-white text-xs sm:text-[14px] leading-relaxed shadow-sm border border-black/5">
                        <p>{faq.answer}</p>
                        <span className="block text-[10px] font-mono font-semibold text-primary uppercase tracking-wider mt-2.5">
                          Nagasrinivasa Rao · Lead Security Architect · CEH · C3SA
                        </span>
                      </div>
                    </div>
                  )}

                </div>
              );
            })}
          </div>
        </div>

      </section>
    </div>
  );
}
