"use client";

import React from "react";
import Link from "next/link";
import { SECURITY_BOUNDARIES } from "@/lib/constants";
import { 
  UserCheck, 
  Building2, 
  ShieldCheck, 
  Database, 
  Lock, 
  GitBranch, 
  ArrowRight,
  CheckCircle2,
  Cpu
} from "lucide-react";
import { trackFreeReviewCtaClick, trackSampleReportClick } from "@/lib/analytics";

const boundaryIcons = [
  UserCheck, // Identity
  Building2, // Tenant
  ShieldCheck, // Role
  Database, // Object
  Lock, // Action
  GitBranch // State
];

export default function SecurityBoundaries() {
  return (
    <section className="py-24 bg-background border-t border-border relative overflow-hidden" id="security-boundaries">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="section-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-6">
            <Cpu size={12} className="text-primary" />
            <span>The TrustLayerLabs Mental Model</span>
          </div>
          
          <h2 className="heading-2 mb-6 font-sans">
            The 6 Security Boundaries <br className="hidden sm:inline" />
            <span className="text-primary">Every Modern SaaS Assumes.</span>
          </h2>
          
          <p className="body-text text-textSecondary font-sans max-w-2xl mx-auto">
            Automated vulnerability scanners check for syntax and known CVE signatures. TrustLayerLabs manually evaluates whether your application&apos;s authorization relationships, tenant isolation, and business logic actually hold under adversarial pressure.
          </p>
        </div>

        {/* 6 Core Security Boundaries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SECURITY_BOUNDARIES.map((item, index) => {
            const Icon = boundaryIcons[index] || ShieldCheck;
            return (
              <div 
                key={item.layer}
                className="premium-card p-8 bg-surface border border-border hover:border-zinc-400 transition-all rounded-2xl flex flex-col justify-between shadow-sm relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full pointer-events-none group-hover:bg-primary/10 transition-colors" />

                <div>
                  {/* Top Layer Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-sm group-hover:scale-105 transition-transform">
                      <Icon size={22} />
                    </div>
                    <span className="px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider bg-background border border-border text-primary rounded-full">
                      Layer 0{index + 1} • {item.layer}
                    </span>
                  </div>

                  {/* Question */}
                  <h3 className="text-base font-bold text-textPrimary tracking-tight font-sans mb-1 group-hover:text-primary transition-colors">
                    {item.question}
                  </h3>

                  <p className="text-[11px] font-mono text-primary font-semibold uppercase tracking-wider mb-3">
                    Boundary: {item.layer} Control
                  </p>

                  {/* Focus Scope */}
                  <p className="text-xs text-textSecondary leading-relaxed font-sans mb-4">
                    {item.focus}
                  </p>
                </div>

                {/* Example Assessment Scenario */}
                <div className="pt-4 border-t border-border/60">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-textSecondary mb-1.5 flex items-center gap-1.5 font-sans">
                    <CheckCircle2 size={12} className="text-primary flex-shrink-0" />
                    <span>How We Test It:</span>
                  </div>
                  <p className="text-xs text-textPrimary font-mono leading-relaxed bg-background/60 p-3 rounded-lg border border-border/60">
                    {item.example}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Context Banner & Direct Conversion CTA */}
        <div className="max-w-4xl mx-auto p-8 bg-surface border border-border rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-sm font-bold text-textPrimary uppercase tracking-wider font-sans">
              Could Your SaaS Have An Authorization Gap?
            </h3>
            <p className="text-xs text-textSecondary font-sans">
              Review your multi-tenant isolation, BOLA boundaries, and API workflows with an offensive security practitioner.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0 w-full sm:w-auto">
            <Link
              href="/free-assessment"
              onClick={() => trackFreeReviewCtaClick("boundaries_section", "Get a Free Security Review")}
              className="w-full sm:w-auto text-center py-2.5 px-5 bg-primary hover:bg-primary/90 text-white text-xs uppercase font-sans font-bold tracking-wider rounded-full shadow-sm transition-all"
            >
              Get a Free Security Review →
            </Link>
            <Link
              href="/sample-report"
              onClick={() => trackSampleReportClick("boundaries_section")}
              className="w-full sm:w-auto text-center py-2.5 px-5 bg-background border border-border hover:border-zinc-400 text-xs uppercase font-sans font-semibold tracking-wider rounded-full text-textPrimary hover:text-primary transition-all"
            >
              View Sample Report →
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
