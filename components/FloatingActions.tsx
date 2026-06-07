"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, Phone, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import { BRAND } from "@/lib/constants";

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
      <div className="fixed bottom-24 sm:bottom-8 right-6 z-40 group">
        <div className="absolute -left-36 top-1/2 -translate-y-1/2 bg-surface border border-border text-[11px] font-bold text-textPrimary px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none uppercase tracking-widest shadow-md">
          Chat with Security
        </div>
        <Link
          href={BRAND.contact.whatsapp}
          target="_blank"
          className="flex items-center justify-center w-14 h-14 bg-[#1D9E75] hover:bg-[#15805f] text-white rounded-full shadow-[0_4px_12px_rgba(29,158,117,0.2)] hover:shadow-[0_6px_16px_rgba(29,158,117,0.3)] hover:scale-110 active:scale-95 transition-all duration-200"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-6 h-6 fill-white" />
        </Link>
      </div>

      {/* Sticky Mobile CTA Bar */}
      <div 
        className={`fixed bottom-0 left-0 right-0 z-40 bg-surface/90 backdrop-blur-md border-t border-border p-3.5 md:hidden transition-transform duration-300 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex items-center gap-3">
          <Link
            href="https://calendar.app.google/jnamj3gawxVunPJm9"
            target="_blank"
            className="flex-1 bg-primary hover:bg-primary-hover text-white py-2 text-xs font-bold text-center flex items-center justify-center gap-1.5 uppercase tracking-widest rounded-full shadow-sm"
          >
            <Calendar className="w-3.5 h-3.5" /> Book Review
          </Link>
          <Link
            href={`tel:${BRAND.contact.phone}`}
            className="bg-surface border border-border hover:border-zinc-400 text-textPrimary py-2 text-xs font-bold px-4 flex items-center justify-center gap-1.5 uppercase tracking-widest rounded-full shadow-sm"
            aria-label="Call security officer"
          >
            <Phone className="w-3.5 h-3.5" /> Call
          </Link>
        </div>
      </div>
    </>
  );
}
