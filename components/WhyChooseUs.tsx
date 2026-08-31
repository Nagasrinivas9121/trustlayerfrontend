"use client";

import React from "react";
import { WHY_CHOOSE_US } from "@/lib/constants";
import { UserCheck, Layers, Code, RefreshCw, ShieldCheck, Users, HelpCircle } from "lucide-react";

const icons: Record<string, React.ElementType> = {
  UserCheck: UserCheck,
  Layers: Layers,
  Code: Code,
  RefreshCw: RefreshCw,
  ShieldCheck: ShieldCheck,
  Users: Users
};

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-background border-t border-border relative" id="why-choose-us">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="section-container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-6">
            <HelpCircle size={12} className="text-primary" />
            <span>Technical Differentiation</span>
          </div>
          <h2 className="heading-2 mb-6 font-sans">
            Why Choose <span className="text-primary">TrustLayerLabs?</span>
          </h2>
          <p className="body-text text-textSecondary font-sans">
            Why high-growth FinTech, SaaS, and AI teams choose our manual, engineering-led assessments over generic automated vulnerability scans.
          </p>
        </div>

        {/* 6 Cards Grid: 2 rows x 3 columns on Desktop, 2 cols on Tablet, 1 on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => {
            const Icon = icons[item.iconName] || ShieldCheck;
            return (
              <div 
                key={idx}
                className="premium-card p-8 bg-surface border border-border rounded-2xl flex flex-col justify-start hover:border-zinc-400 transition-all duration-300 shadow-sm group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-105 transition-transform">
                  <Icon size={20} />
                </div>

                <h3 className="text-base font-bold text-textPrimary tracking-tight font-sans mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-textSecondary leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
