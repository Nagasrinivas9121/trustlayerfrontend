"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Star, CheckCircle, Quote } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-40 pb-28 overflow-hidden min-h-[92vh] flex items-center justify-center bg-background">
      {/* Subtle Dot Grid Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none -z-10" />
      
      {/* Soft Center Radial Highlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="section-container w-full relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-10 max-w-3xl mx-auto relative z-20">
          
          {/* Top Floating Pill Badge (Slot Limiter style) */}
          <Link 
            href="https://calendar.app.google/jnamj3gawxVunPJm9"
            target="_blank"
            className="inline-flex items-center space-x-2 px-3.5 py-1 bg-surface border border-border rounded-full text-xs font-bold text-textPrimary uppercase tracking-wider shadow-sm animate-fade-in hover:border-zinc-400 transition-colors"
          >
            <span className="relative flex h-1.5 w-1.5 mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-success"></span>
            </span>
            <span>Only 2 Audit Slots Open This Month →</span>
          </Link>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-textPrimary tracking-tight leading-[1.1] max-w-4xl mx-auto font-sans">
            Security Reviews That Help Startups <br className="hidden md:inline" />
            <span className="text-primary">Win Enterprise Customers.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-sm sm:text-base md:text-lg text-textSecondary max-w-2xl mx-auto leading-relaxed font-sans">
            Manual API security testing, VAPT, cloud reviews, and compliance readiness for high-growth startups.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link 
              href="https://calendar.app.google/jnamj3gawxVunPJm9" 
              target="_blank" 
              className="w-full sm:w-auto text-center flex items-center justify-center bg-[#0A0A0A] hover:bg-zinc-800 text-white text-sm uppercase tracking-wider font-sans font-semibold py-3.5 px-8 rounded-full shadow-md transition-all active:scale-[0.98] gap-1.5"
            >
              Book Security Review
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/case-studies" 
              className="w-full sm:w-auto text-center bg-surface border border-border hover:border-zinc-400 text-textPrimary text-sm uppercase tracking-wider font-sans font-semibold py-3.5 px-8 rounded-full shadow-sm transition-all"
            >
              View Case Studies
            </Link>
          </div>

          {/* Overlapping customer avatars, stars, reviews count */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-in">
            <div className="flex -space-x-2.5 overflow-hidden">
              <div className="w-7 h-7 rounded-full bg-zinc-100 border-2 border-surface flex items-center justify-center font-bold text-[10px] text-zinc-600 shadow-sm">PF</div>
              <div className="w-7 h-7 rounded-full bg-zinc-200 border-2 border-surface flex items-center justify-center font-bold text-[10px] text-zinc-700 shadow-sm">CO</div>
              <div className="w-7 h-7 rounded-full bg-zinc-300 border-2 border-surface flex items-center justify-center font-bold text-[10px] text-zinc-800 shadow-sm">NB</div>
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex items-center text-amber-500 gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={11} className="fill-current" />)}
              </div>
              <span className="text-xs font-sans text-textSecondary uppercase tracking-wider font-semibold mt-0.5">
                From 12+ SaaS & FinTech Teams
              </span>
            </div>
          </div>

          {/* Tiny Floating Badges row */}
          <div className="pt-4 flex flex-wrap justify-center items-center gap-2.5">
            {["SOC2 Readiness", "ISO 27001", "API Security", "VAPT Auditing"].map((badge, idx) => (
              <span 
                key={idx} 
                className="px-3 py-1 bg-surface/50 border border-border/80 text-xs font-sans text-textSecondary uppercase tracking-wider rounded-full flex items-center gap-1.5 shadow-sm"
              >
                <CheckCircle size={10} className="text-primary" /> {badge}
              </span>
            ))}
          </div>

        </div>

        {/* Floating Testimonial Cards Layout - Absolute Positioned on Desktop */}
        
        {/* Left Floating Card */}
        <div className="hidden lg:block absolute left-0 xl:left-4 top-[50%] -translate-y-1/2 w-[280px] rotate-[-3deg] hover:rotate-0 hover:scale-[1.03] transition-all duration-300 shadow-md bg-surface border border-border p-6 rounded-2xl z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-1 text-primary">
              {[...Array(5)].map((_, i) => <Star key={i} size={10} className="fill-current" />)}
            </div>
            <Quote size={20} className="text-primary/10 fill-current" />
          </div>
          <p className="text-sm text-textPrimary leading-relaxed italic font-sans mb-4">
            &ldquo;We passed enterprise procurement after TrustLayerLabs completed our API security review.&rdquo;
          </p>
          <div className="flex items-center gap-3 pt-3 border-t border-border/40">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-sans font-bold text-xs text-primary">
              PF
            </div>
            <div>
              <h4 className="text-xs font-bold text-textPrimary uppercase tracking-wider font-sans">PayFlow India</h4>
              <p className="text-[11px] font-sans text-textSecondary uppercase">CTO Office</p>
            </div>
          </div>
        </div>

        {/* Right Floating Card */}
        <div className="hidden lg:block absolute right-0 xl:right-4 top-[52%] -translate-y-1/2 w-[280px] rotate-[3deg] hover:rotate-0 hover:scale-[1.03] transition-all duration-300 shadow-md bg-surface border border-border p-6 rounded-2xl z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-1 text-primary">
              {[...Array(5)].map((_, i) => <Star key={i} size={10} className="fill-current" />)}
            </div>
            <Quote size={20} className="text-primary/10 fill-current" />
          </div>
          <p className="text-sm text-textPrimary leading-relaxed italic font-sans mb-4">
            &ldquo;TrustLayerLabs helped us prepare for SOC2 readiness and infrastructure hardening.&rdquo;
          </p>
          <div className="flex items-center gap-3 pt-3 border-t border-border/40">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-sans font-bold text-xs text-primary">
              CO
            </div>
            <div>
              <h4 className="text-xs font-bold text-textPrimary uppercase tracking-wider font-sans">CareOS Tech</h4>
              <p className="text-[11px] font-sans text-textSecondary uppercase">VP of Engineering</p>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Fallback Grid */}
        <div className="lg:hidden mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Left testimonial card */}
          <div className="bg-surface border border-border p-6 rounded-2xl shadow-sm space-y-4 hover:translate-y-[-2px] transition-transform duration-300">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-1 text-primary">
                {[...Array(5)].map((_, i) => <Star key={i} size={11} className="fill-current" />)}
              </div>
              <Quote size={20} className="text-primary/10 fill-current" />
            </div>
            <p className="text-sm text-textPrimary leading-relaxed italic font-sans">
              &ldquo;We passed enterprise procurement after TrustLayerLabs completed our API security review.&rdquo;
            </p>
            <div className="flex items-center gap-3 pt-3 border-t border-border/40">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-sans font-bold text-xs text-primary">
                PF
              </div>
              <div>
                <h4 className="text-xs font-bold text-textPrimary uppercase tracking-wider font-sans">PayFlow India</h4>
                <p className="text-[11px] font-sans text-textSecondary uppercase">CTO Office</p>
              </div>
            </div>
          </div>

          {/* Right testimonial card */}
          <div className="bg-surface border border-border p-6 rounded-2xl shadow-sm space-y-4 hover:translate-y-[-2px] transition-transform duration-300">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-1 text-primary">
                {[...Array(5)].map((_, i) => <Star key={i} size={11} className="fill-current" />)}
              </div>
              <Quote size={20} className="text-primary/10 fill-current" />
            </div>
            <p className="text-sm text-textPrimary leading-relaxed italic font-sans">
              &ldquo;TrustLayerLabs helped us prepare for SOC2 readiness and infrastructure hardening.&rdquo;
            </p>
            <div className="flex items-center gap-3 pt-3 border-t border-border/40">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-sans font-bold text-xs text-primary">
                CO
              </div>
              <div>
                <h4 className="text-xs font-bold text-textPrimary uppercase tracking-wider font-sans">CareOS Tech</h4>
                <p className="text-[11px] font-sans text-textSecondary uppercase">VP of Engineering</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
