"use client";

import React from "react";
import { TESTIMONIALS } from "@/lib/constants";
import { Quote, Linkedin, ArrowUpRight, ShieldCheck, Check } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 bg-background border-t border-border relative" id="testimonials">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="section-container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-6">
            <span>Client References</span>
          </div>
          <h2 className="heading-2 mb-6">
            Trusted by <span className="text-primary">Startup Founders & CTOs</span>
          </h2>
          <p className="body-text text-textSecondary mb-6">
            Hear from engineering leadership teams who partnered with us to secure their API logic and pass enterprise vendor reviews.
          </p>
          <div className="inline-flex items-center gap-2 text-[10px] md:text-xs font-semibold text-primary uppercase tracking-wider bg-primary/5 border border-primary/20 rounded-lg py-2 px-4 max-w-lg mx-auto shadow-sm">
            <ShieldCheck size={14} className="text-primary" />
            <span>Independently Verifiable Client Testimonials</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, i) => (
            <div 
              key={i} 
              className="premium-card p-8 flex flex-col justify-between relative group hover:border-zinc-400 bg-surface shadow-sm border border-border rounded-2xl"
            >
              <div className="absolute top-4 right-6 text-primary/10 transition-colors">
                <Quote size={48} className="fill-current" />
              </div>

              <div className="relative z-10 space-y-6">
                <p className="text-sm text-textPrimary leading-relaxed italic font-sans">
                  &ldquo;{item.quote}&rdquo;
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-border/60 font-sans">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-background border border-border flex-shrink-0 flex items-center justify-center font-sans font-bold text-xs text-primary">
                    {item.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1.5 w-full">
                      <h4 className="text-xs font-bold text-textPrimary uppercase tracking-wider font-sans truncate">{item.name}</h4>
                      {item.linkedin && (
                        <a 
                          href={item.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center gap-1 text-[9px] text-emerald-500 hover:text-emerald-400 font-semibold tracking-wider transition-colors bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 px-2 py-0.5 rounded-md flex-shrink-0"
                          title="Verify Profile on LinkedIn"
                        >
                          <Check size={9} className="text-emerald-500" />
                          Verify
                        </a>
                      )}
                    </div>
                    <p className="text-xs font-sans text-textSecondary uppercase tracking-wider mt-0.5 truncate">
                      {item.role}, <span className="text-primary">{item.company}</span>
                    </p>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Directory Reviews */}
        <div className="mt-16 text-center">
          <p className="text-xs text-textSecondary mb-4">
            We are also reviewed on global B2B service directories.
          </p>
          <div className="inline-flex flex-wrap justify-center items-center gap-4">
            <a 
              href="https://clutch.co/profile/trustlayerlabs" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-textPrimary hover:text-primary border border-border hover:border-primary px-4 py-2 bg-surface rounded-xl transition-all shadow-sm"
            >
              <span>Clutch Profile</span>
              <ArrowUpRight size={12} className="text-textSecondary" />
            </a>
            <a 
              href="https://www.goodfirms.co/company/trustlayerlabs" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-textPrimary hover:text-primary border border-border hover:border-primary px-4 py-2 bg-surface rounded-xl transition-all shadow-sm"
            >
              <span>GoodFirms Reviews</span>
              <ArrowUpRight size={12} className="text-textSecondary" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

