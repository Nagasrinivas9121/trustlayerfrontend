"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Star, CheckCircle, Quote } from "lucide-react";

export default function Hero() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Save lead details
    const existingLeads = JSON.parse(localStorage.getItem("trustlayer_leads") || "[]");
    existingLeads.push({
      email,
      scope: "hero-inline",
      timestamp: new Date().toISOString()
    });
    localStorage.setItem("trustlayer_leads", JSON.stringify(existingLeads));

    // Redirect
    router.push(`/free-assessment?email=${encodeURIComponent(email)}`);
  };

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
            <span>Manual API & Application Security Testing →</span>
          </Link>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-textPrimary tracking-tight leading-[1.1] max-w-4xl mx-auto font-sans">
            Application Security, API Security & GRC for <br className="hidden md:inline" />
            <span className="text-primary">Growing FinTech, SaaS and AI Teams</span>
          </h1>

          {/* Subheadline */}
          <p className="text-sm sm:text-base md:text-lg text-textSecondary max-w-2xl mx-auto leading-relaxed font-sans">
            Identify authorization, authentication, business-logic and security-control gaps before they become customer, compliance or production risks.
          </p>

          {/* Action CTAs & Inline Lead Capture Form */}
          <div className="w-full max-w-xl mx-auto space-y-4">
            <form 
              onSubmit={handleLeadSubmit}
              className="flex flex-col sm:flex-row items-center gap-2.5 bg-surface border border-border p-2 rounded-2xl sm:rounded-full shadow-lg w-full"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email..."
                className="w-full sm:flex-1 px-4 py-2.5 sm:py-1.5 bg-transparent border-0 text-xs text-textPrimary placeholder:text-textSecondary focus:outline-none font-sans"
              />
              <button
                type="submit"
                className="w-full sm:w-auto text-center flex items-center justify-center bg-primary hover:bg-primary-hover text-white text-xs uppercase tracking-wider font-sans font-bold py-2.5 px-6 rounded-xl sm:rounded-full shadow-md transition-all active:scale-[0.98] gap-1.5 flex-shrink-0"
              >
                Book a 20-Min Security Review
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-sans text-textSecondary uppercase tracking-widest font-semibold pt-1">
              <Link 
                href="/sample-report" 
                className="hover:text-textPrimary transition-colors flex items-center gap-1.5"
              >
                📄 View Sample Report
              </Link>
              <span className="text-border">•</span>
              <Link 
                href="https://calendar.app.google/jnamj3gawxVunPJm9" 
                target="_blank"
                className="hover:text-textPrimary transition-colors flex items-center gap-1.5 text-primary"
              >
                📅 Schedule 20-Min Intake Call
              </Link>
            </div>
          </div>

          {/* Verified team practitioner focus row */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-in">
            <div className="flex items-center gap-1.5 text-xs font-sans text-textSecondary uppercase tracking-wider font-semibold">
              <span className="text-primary font-bold font-mono">Manual VAPT • API Security • SOC 2 & ISO 27001 Readiness</span>
            </div>
          </div>

          {/* Tiny Floating Badges row */}
          <div className="pt-4 flex flex-wrap justify-center items-center gap-2.5">
            {["Manual API Security", "FinTech Testing", "SaaS Multi-Tenancy", "SOC 2 Readiness", "ISO 27001 Alignment"].map((badge, idx) => (
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
        {/* Left Floating Card */}
        <div className="hidden lg:block absolute left-0 xl:left-4 top-[50%] -translate-y-1/2 w-[280px] rotate-[-3deg] hover:rotate-0 hover:scale-[1.03] transition-all duration-300 shadow-md bg-surface border border-border p-6 rounded-2xl z-10">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-mono font-bold text-primary uppercase tracking-wider bg-primary/10 border border-primary/20 px-2 py-0.5 rounded">
              Offensive Security
            </span>
            <CheckCircle size={16} className="text-primary" />
          </div>
          <p className="text-xs text-textPrimary leading-relaxed font-sans mb-4">
            Manual authorization, BOLA & business-logic security testing for high-growth tech teams.
          </p>
          <div className="flex items-center gap-3 pt-3 border-t border-border/40">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-sans font-bold text-xs text-primary">
              TL
            </div>
            <div>
              <h4 className="text-xs font-bold text-textPrimary uppercase tracking-wider font-sans">TrustLayerLabs</h4>
              <p className="text-[11px] font-sans text-textSecondary uppercase">Practitioner-Led Team</p>
            </div>
          </div>
        </div>

        {/* Right Floating Card */}
        <div className="hidden lg:block absolute right-0 xl:right-4 top-[52%] -translate-y-1/2 w-[280px] rotate-[3deg] hover:rotate-0 hover:scale-[1.03] transition-all duration-300 shadow-md bg-surface border border-border p-6 rounded-2xl z-10">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-mono font-bold text-primary uppercase tracking-wider bg-primary/10 border border-primary/20 px-2 py-0.5 rounded">
              Technical GRC
            </span>
            <CheckCircle size={16} className="text-primary" />
          </div>
          <p className="text-xs text-textPrimary leading-relaxed font-sans mb-4">
            SOC 2 & ISO 27001 readiness, technical control mapping, and retest verification reports.
          </p>
          <div className="flex items-center gap-3 pt-3 border-t border-border/40">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-sans font-bold text-xs text-primary">
              GRC
            </div>
            <div>
              <h4 className="text-xs font-bold text-textPrimary uppercase tracking-wider font-sans">Security Readiness</h4>
              <p className="text-[11px] font-sans text-textSecondary uppercase">Governance Advisory</p>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Fallback Grid */}
        <div className="lg:hidden mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Left card */}
          <div className="bg-surface border border-border p-6 rounded-2xl shadow-sm space-y-4 hover:translate-y-[-2px] transition-transform duration-300">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-mono font-bold text-primary uppercase tracking-wider bg-primary/10 border border-primary/20 px-2 py-0.5 rounded">
                Offensive Security
              </span>
              <CheckCircle size={16} className="text-primary" />
            </div>
            <p className="text-xs text-textPrimary leading-relaxed font-sans">
              Manual authorization, BOLA & business-logic security testing for high-growth tech teams.
            </p>
            <div className="flex items-center gap-3 pt-3 border-t border-border/40">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-sans font-bold text-xs text-primary">
                TL
              </div>
              <div>
                <h4 className="text-xs font-bold text-textPrimary uppercase tracking-wider font-sans">TrustLayerLabs</h4>
                <p className="text-[11px] font-sans text-textSecondary uppercase">Practitioner-Led Team</p>
              </div>
            </div>
          </div>

          {/* Right card */}
          <div className="bg-surface border border-border p-6 rounded-2xl shadow-sm space-y-4 hover:translate-y-[-2px] transition-transform duration-300">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-mono font-bold text-primary uppercase tracking-wider bg-primary/10 border border-primary/20 px-2 py-0.5 rounded">
                Technical GRC
              </span>
              <CheckCircle size={16} className="text-primary" />
            </div>
            <p className="text-xs text-textPrimary leading-relaxed font-sans">
              SOC 2 & ISO 27001 readiness, technical control mapping, and retest verification reports.
            </p>
            <div className="flex items-center gap-3 pt-3 border-t border-border/40">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-sans font-bold text-xs text-primary">
                GRC
              </div>
              <div>
                <h4 className="text-xs font-bold text-textPrimary uppercase tracking-wider font-sans">Security Readiness</h4>
                <p className="text-[11px] font-sans text-textSecondary uppercase">Governance Advisory</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
