"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { BRAND } from "@/lib/constants";
import { openQuoteModal } from "@/components/QuoteModal";
import { trackWhatsappClick, trackPrimaryQuoteClick } from "@/lib/analytics";

export default function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past 600px
      if (window.scrollY > 600) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating WhatsApp Action Button */}
      <div className="fixed bottom-24 right-5 sm:right-6 z-40 group">
        <div className="absolute -left-36 top-1/2 -translate-y-1/2 bg-surface border border-border text-[11px] font-bold text-textPrimary px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none uppercase tracking-widest shadow-md">
          Chat on WhatsApp
        </div>
        <Link
          href={BRAND.contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsappClick("floating_button")}
          className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#1D9E75] hover:bg-[#15805f] text-white rounded-full shadow-[0_4px_12px_rgba(29,158,117,0.2)] hover:shadow-[0_6px_16px_rgba(29,158,117,0.3)] hover:scale-105 active:scale-95 transition-all duration-200"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 fill-white" />
          <span className="sr-only">Chat on WhatsApp (+91 93912 20328)</span>
        </Link>
      </div>

      {/* Sticky Mobile CTA Bar */}
      <div 
        className={`fixed bottom-0 left-0 right-0 z-40 bg-surface/95 backdrop-blur-md border-t border-border p-3 md:hidden transition-transform duration-300 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex items-center gap-2.5">
          <Link
            href="/free-assessment"
            onClick={() => {
              trackPrimaryQuoteClick("mobile_floating_bar");
            }}
            className="flex-1 bg-neutral-900 hover:bg-black text-white py-2.5 text-xs font-bold text-center flex items-center justify-center gap-1.5 rounded-full shadow-sm"
          >
            <span>Get a fixed-price quote in 24h</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href={BRAND.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsappClick("mobile_floating_bar")}
            className="bg-emerald-50 border border-emerald-200 text-emerald-800 hover:bg-emerald-100 py-2.5 text-xs font-bold px-4 flex items-center justify-center gap-1.5 rounded-full shadow-sm"
            aria-label="Chat on WhatsApp"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-700" /> WhatsApp
          </Link>
        </div>
      </div>
    </>
  );
}
