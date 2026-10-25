"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, Calendar, ArrowRight, ShieldCheck } from "lucide-react";
import { openCalendly } from "@/lib/calendly";
import { trackCalendarClick } from "@/lib/analytics";

export default function JoinUsCTA() {
  const [typedText, setTypedText] = useState("");
  const fullText = "TrustLayerLabs...";

  useEffect(() => {
    let index = 0;
    let forward = true;
    const interval = setInterval(() => {
      if (forward) {
        if (index <= fullText.length) {
          setTypedText(fullText.slice(0, index));
          index++;
        } else {
          forward = false;
          setTimeout(() => {}, 1200);
        }
      } else {
        if (index > 0) {
          index--;
          setTypedText(fullText.slice(0, index));
        } else {
          forward = true;
        }
      }
    }, 180);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="join-us" className="w-full px-4 sm:px-6 py-10 sm:py-14">
      <section className="max-w-6xl mx-auto w-full bg-[#161616] text-white rounded-[36px] p-6 sm:p-12 lg:p-16 flex flex-col justify-between overflow-hidden relative shadow-2xl border border-white/10">
        
        {/* Background Radial Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

        {/* Center Content */}
        <div className="flex flex-col items-center justify-center gap-8 text-center w-full z-10 py-6 sm:py-10">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs font-mono uppercase tracking-wider text-blue-300">
            <ShieldCheck size={14} className="text-emerald-400" />
            <span>Practitioner-Led Security</span>
          </div>

          <h3 className="text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight max-w-2xl text-white leading-[1.15]">
            You&apos;ve reached the end — now let&apos;s secure your application!
          </h3>

          <p className="text-sm sm:text-base text-gray-300 max-w-lg leading-relaxed">
            Ready to find the BOLA, tenant escapes, and business logic flaws automated scanners miss? Book your confidential review under mutual NDA.
          </p>

          {/* Action Button */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/free-assessment"
              className="relative p-[2px] rounded-full overflow-hidden group cursor-pointer min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white text-gray-950 font-semibold tracking-tight text-sm sm:text-base hover:bg-gray-100 transition-all shadow-xl active:scale-98 min-h-[46px]">
                <Sparkles size={16} className="text-primary" />
                <span>Get a fixed-price quote in 24h</span>
              </div>
            </Link>

            <a
              href="https://wa.me/919391220328"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-medium text-sm transition-all border border-white/15 tracking-tight cursor-pointer min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Chat on WhatsApp (+91 93912 20328)</span>
              <ArrowRight size={14} />
            </a>
          </div>

        </div>

        {/* Bottom Banner with CodeDale Terminal Reveal */}
        <div className="w-full mt-10 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center bg-gradient-to-b from-[#212121] to-[#1c1b1b] border border-white/5 z-10">
          <div className="relative flex items-center justify-center">
            <div className="flex items-center bg-[#282828] text-white px-5 py-2.5 rounded-xl border border-white/10 font-mono text-sm tracking-wider shadow-inner">
              <span className="text-primary font-bold mr-2">&gt;</span>
              <span>{typedText}</span>
              <span className="w-2 h-4 bg-primary inline-block ml-1 animate-pulse" />
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
