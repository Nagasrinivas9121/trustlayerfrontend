"use client";

import React from "react";
import Link from "next/link";
import { CORE_PILLARS } from "@/lib/constants";
import { ArrowRight, CheckCircle2, Shield, Calendar, Layers, Lock, ShieldCheck, Cloud, FileText } from "lucide-react";

const icons: Record<string, React.ElementType> = {
  "api-web-security": Lock,
  "fintech-security-testing": ShieldCheck,
  "cloud-infrastructure-security": Cloud,
  "grc-enterprise-readiness": FileText,
};

export default function CoreServicesSection() {
  return (
    <section className="py-24 bg-background border-t border-border relative" id="core-services">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="section-container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-6">
            <Layers size={12} className="text-primary" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="heading-2 mb-6 font-sans">
            Specialized Technical Security & <span className="text-primary">GRC Services</span>
          </h2>
          <p className="body-text text-textSecondary font-sans">
            We focus on four foundational pillars designed to eliminate vulnerabilities and accelerate enterprise buyer trust.
          </p>
        </div>

        {/* 4 Pillars Grid: 2x2 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {CORE_PILLARS.map((pillar) => {
            const Icon = icons[pillar.id] || Shield;
            return (
              <div 
                key={pillar.id}
                className="premium-card p-8 md:p-10 bg-surface border border-border rounded-2xl flex flex-col justify-between hover:border-zinc-400 transition-all duration-300 shadow-sm relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-28 h-28 bg-primary/5 rounded-bl-full pointer-events-none -z-10 group-hover:bg-primary/10 transition-colors" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-sm">
                      <Icon size={22} />
                    </div>
                    <span className="px-3 py-1 text-[10px] font-sans font-bold uppercase tracking-wider bg-background border border-border text-primary rounded-full">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-textPrimary tracking-tight font-sans mb-1 group-hover:text-primary transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs font-semibold text-primary uppercase tracking-wider font-sans mb-4">
                    {pillar.tagline}
                  </p>

                  <p className="text-xs text-textSecondary leading-relaxed font-sans mb-6">
                    {pillar.description}
                  </p>

                  {/* Key Deliverables */}
                  <div className="border-t border-border/80 pt-5 mb-8">
                    <div className="text-[11px] font-bold text-textPrimary uppercase tracking-wider font-sans mb-3">
                      Included Scope & Deliverables:
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {pillar.deliverables.map((item, i) => (
                        <li key={i} className="text-xs text-textSecondary flex items-start gap-2">
                          <CheckCircle2 size={13} className="text-primary mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-border/60 flex flex-col sm:flex-row items-center gap-3">
                  <Link 
                    href={pillar.href}
                    className="w-full sm:flex-1 text-center py-2.5 px-4 bg-background border border-border hover:border-zinc-400 text-xs uppercase font-sans font-semibold tracking-wider rounded-lg text-textPrimary hover:text-primary transition-all"
                  >
                    {pillar.ctaText} →
                  </Link>
                  <Link 
                    href="https://calendar.app.google/jnamj3gawxVunPJm9"
                    target="_blank"
                    className="w-full sm:flex-1 text-center py-2.5 px-4 bg-primary text-white text-xs uppercase font-sans font-semibold tracking-wider rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-1.5"
                  >
                    <Calendar size={13} />
                    Book Review
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

        {/* View All Services Link */}
        <div className="text-center pt-6">
          <Link 
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-surface border border-border hover:border-zinc-400 rounded-full text-xs font-sans font-bold uppercase tracking-wider text-textPrimary hover:text-primary transition-all shadow-sm group"
          >
            <span>View Complete Catalogue (19+ Specialized Security Services)</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-primary" />
          </Link>
        </div>

      </div>
    </section>
  );
}
