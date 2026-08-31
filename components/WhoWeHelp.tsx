"use client";

import React from "react";
import Link from "next/link";
import { WHO_WE_HELP } from "@/lib/constants";
import { ArrowRight, CheckCircle2, Shield, Landmark, Cloud, Sparkles } from "lucide-react";

const icons = [Landmark, Cloud, Sparkles];

export default function WhoWeHelp() {
  return (
    <section className="py-24 bg-background border-t border-border relative" id="who-we-help">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-6">
            <Shield size={12} className="text-primary" />
            <span>Targeted Industry Expertise</span>
          </div>
          <h2 className="heading-2 mb-6 font-sans">
            Offensive Security Built for <span className="text-primary">High-Growth Tech Sectors</span>
          </h2>
          <p className="body-text text-textSecondary font-sans">
            We specialize in the unique architectural models, multi-role access controls, and attack surfaces of modern engineering teams.
          </p>
        </div>

        {/* 3-Column Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WHO_WE_HELP.map((sector, index) => {
            const Icon = icons[index] || Shield;
            return (
              <div 
                key={sector.category} 
                className="premium-card p-8 flex flex-col justify-between group relative overflow-hidden bg-surface shadow-sm border border-border hover:border-zinc-400 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full pointer-events-none -z-10 group-hover:bg-primary/10 transition-colors" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-sm">
                      <Icon size={18} />
                    </div>
                    <span className="px-2.5 py-1 text-[10px] font-sans font-bold uppercase tracking-wider bg-background border border-border text-textSecondary rounded-full">
                      {sector.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-textPrimary tracking-tight font-sans mb-3 group-hover:text-primary transition-colors">
                    {sector.category}
                  </h3>

                  <p className="text-xs text-textSecondary leading-relaxed font-sans mb-6">
                    {sector.description}
                  </p>

                  <div className="border-t border-border/80 pt-5 mb-6">
                    <div className="text-[11px] font-bold text-textPrimary uppercase tracking-wider font-sans mb-3">
                      Key Attack Surfaces Evaluated:
                    </div>
                    <ul className="space-y-2.5">
                      {sector.surfaces.map((surface, i) => (
                        <li key={i} className="text-xs text-textSecondary flex items-start gap-2">
                          <CheckCircle2 size={13} className="text-primary mt-0.5 flex-shrink-0" />
                          <span>{surface}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-2 border-t border-border/60">
                  <Link 
                    href={sector.href}
                    className="inline-flex items-center justify-between w-full py-2.5 px-4 bg-background border border-border hover:border-zinc-400 rounded-lg text-xs font-sans font-semibold uppercase tracking-wider text-textPrimary hover:text-primary transition-all group/btn"
                  >
                    <span>{sector.cta}</span>
                    <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform text-primary" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
