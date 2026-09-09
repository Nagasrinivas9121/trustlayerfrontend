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
    <section className="relative pt-36 md:pt-40 pb-24 overflow-hidden min-h-[90vh] flex items-center justify-center bg-background">
      {/* Subtle Dot Grid Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] [background-size:24px_24px] opacity-50 pointer-events-none -z-10" />
      
      {/* Soft Center Radial Highlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] max-w-[100vw] h-[550px] bg-primary/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="section-container w-full relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-7 max-w-3xl mx-auto relative z-20">
          
          {/* Top Category Eyebrow Label */}
          <Link 
            href="https://calendar.app.google/jnamj3gawxVunPJm9"
            target="_blank"
            className="inline-flex items-center space-x-2 px-3 py-1 bg-surface/80 border border-border/70 rounded-full text-[11px] font-mono font-medium text-textSecondary uppercase tracking-widest shadow-none animate-fade-in hover:text-textPrimary hover:border-border transition-all"
          >
            <span className="relative flex h-1.5 w-1.5 mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
            </span>
            <span>Manual API & Application Security Testing →</span>
          </Link>

          {/* Main Headline - Refined Vertical Rhythm */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-textPrimary tracking-tight leading-[1.08] max-w-4xl mx-auto font-sans">
            Security Verified. <br className="hidden sm:inline" />
            <span className="text-primary">Not Assumed.</span>
          </h1>

          {/* Subheadline & Supporting Text */}
          <div className="space-y-2 max-w-2xl mx-auto">
            <p className="text-base sm:text-lg md:text-xl font-semibold text-textPrimary font-sans">
              Manual security testing for SaaS, FinTech & AI teams.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-textSecondary leading-relaxed font-sans">
              Find critical vulnerabilities before your customers, auditors, or attackers do.
            </p>
          </div>

          {/* Action CTAs & Inline Lead Capture Form */}
          <div className="w-full max-w-lg mx-auto space-y-3">
            <form 
              onSubmit={handleLeadSubmit}
              className="flex flex-col sm:flex-row items-center gap-2 bg-surface/90 border border-border/80 p-1.5 rounded-xl sm:rounded-full shadow-sm hover:border-border focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/20 transition-all w-full"
            >
              <input
                type="email"
                id="hero-email"
                name="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email..."
                className="w-full sm:flex-1 px-4 py-2 sm:py-1.5 bg-transparent border-0 text-xs text-textPrimary placeholder:text-textSecondary/70 focus:outline-none font-sans"
              />
              <button
                type="submit"
                className="w-full sm:w-auto text-center flex items-center justify-center bg-primary hover:bg-primary/90 text-white text-xs uppercase tracking-wider font-sans font-bold py-2.5 px-5 rounded-lg sm:rounded-full shadow-sm transition-all active:scale-[0.98] gap-1.5 flex-shrink-0"
              >
                Request a Security Assessment
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>

            <p className="text-[11px] font-sans text-textSecondary text-center">
              ⚡ 20-min scoping review under mutual NDA • Direct consultation with lead offensive practitioner
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-sans text-textSecondary uppercase tracking-widest font-semibold pt-0.5">
              <Link 
                href="https://calendar.app.google/jnamj3gawxVunPJm9" 
                target="_blank" 
                className="hover:text-textPrimary transition-colors flex items-center gap-1.5 text-primary"
              >
                <span>Book a 20-Min Security Review →</span>
              </Link>
              <span className="text-border/60">•</span>
              <Link 
                href="/sample-report" 
                className="hover:text-textPrimary transition-colors flex items-center gap-1.5"
              >
                <span>View Sample Report</span>
              </Link>
            </div>
          </div>

          {/* Above-the-Fold Verifiable Trust Strip */}
          <div className="pt-4 w-full max-w-2xl mx-auto border-t border-border/50">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2.5 gap-x-4 text-left sm:text-center text-[11px] font-sans text-textSecondary">
              <div className="flex items-center justify-start sm:justify-center gap-1.5 font-medium">
                <CheckCircle size={12} className="text-primary flex-shrink-0" />
                <span>MSME/Udyam Registered</span>
              </div>
              <div className="flex items-center justify-start sm:justify-center gap-1.5 font-medium">
                <CheckCircle size={12} className="text-primary flex-shrink-0" />
                <span>Developer-Ready PoCs</span>
              </div>
              <div className="flex items-center justify-start sm:justify-center gap-1.5 font-medium">
                <CheckCircle size={12} className="text-primary flex-shrink-0" />
                <span>30-Day Retest Included</span>
              </div>
              <div className="flex items-center justify-start sm:justify-center gap-1.5 font-medium">
                <CheckCircle size={12} className="text-primary flex-shrink-0" />
                <span>Mutual NDA Upfront</span>
              </div>
              <div className="flex items-center justify-start sm:justify-center gap-1.5 font-medium">
                <CheckCircle size={12} className="text-primary flex-shrink-0" />
                <span>Sample Report Available</span>
              </div>
              <div className="flex items-center justify-start sm:justify-center gap-1.5 font-medium">
                <CheckCircle size={12} className="text-primary flex-shrink-0" />
                <span>Practitioner-Led VAPT</span>
              </div>
            </div>
          </div>

        </div>

        {/* Floating Information Cards Layout - Subdued for Visual Balance */}
        
        {/* Left Floating Card */}
        <div className="hidden lg:block absolute left-[-8px] xl:left-2 top-[50%] -translate-y-1/2 w-[240px] xl:w-[255px] rotate-[-2.5deg] hover:rotate-0 hover:scale-[1.02] opacity-80 hover:opacity-100 transition-all duration-300 shadow-sm bg-surface/85 backdrop-blur-sm border border-border/70 p-5 rounded-2xl z-10">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[9px] font-mono font-bold text-primary uppercase tracking-wider bg-primary/10 border border-primary/20 px-2 py-0.5 rounded">
              Offensive Security
            </span>
            <CheckCircle size={14} className="text-primary" />
          </div>
          <p className="text-[11px] text-textPrimary leading-relaxed font-sans mb-3.5">
            Manual authorization, BOLA & business-logic security testing for high-growth tech teams.
          </p>
          <div className="flex items-center gap-2.5 pt-2.5 border-t border-border/40">
            <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center font-sans font-bold text-[10px] text-primary">
              TL
            </div>
            <div>
              <h4 className="text-[11px] font-bold text-textPrimary uppercase tracking-wider font-sans">TrustLayerLabs</h4>
              <p className="text-[10px] font-sans text-textSecondary uppercase">Practitioner-Led Team</p>
            </div>
          </div>
        </div>

        {/* Right Floating Card */}
        <div className="hidden lg:block absolute right-[-8px] xl:right-2 top-[52%] -translate-y-1/2 w-[240px] xl:w-[255px] rotate-[2.5deg] hover:rotate-0 hover:scale-[1.02] opacity-80 hover:opacity-100 transition-all duration-300 shadow-sm bg-surface/85 backdrop-blur-sm border border-border/70 p-5 rounded-2xl z-10">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[9px] font-mono font-bold text-primary uppercase tracking-wider bg-primary/10 border border-primary/20 px-2 py-0.5 rounded">
              Technical GRC
            </span>
            <CheckCircle size={14} className="text-primary" />
          </div>
          <p className="text-[11px] text-textPrimary leading-relaxed font-sans mb-3.5">
            SOC 2 & ISO 27001 readiness, technical control mapping, and retest verification reports.
          </p>
          <div className="flex items-center gap-2.5 pt-2.5 border-t border-border/40">
            <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center font-sans font-bold text-[10px] text-primary">
              GRC
            </div>
            <div>
              <h4 className="text-[11px] font-bold text-textPrimary uppercase tracking-wider font-sans">Security Readiness</h4>
              <p className="text-[10px] font-sans text-textSecondary uppercase">Governance Advisory</p>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Fallback Grid */}
        <div className="lg:hidden mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto opacity-90">
          {/* Left card */}
          <div className="bg-surface/90 border border-border/80 p-5 rounded-2xl shadow-sm space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-[9px] font-mono font-bold text-primary uppercase tracking-wider bg-primary/10 border border-primary/20 px-2 py-0.5 rounded">
                Offensive Security
              </span>
              <CheckCircle size={14} className="text-primary" />
            </div>
            <p className="text-[11px] text-textPrimary leading-relaxed font-sans">
              Manual authorization, BOLA & business-logic security testing for high-growth tech teams.
            </p>
            <div className="flex items-center gap-2.5 pt-2.5 border-t border-border/40">
              <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center font-sans font-bold text-[10px] text-primary">
                TL
              </div>
              <div>
                <h4 className="text-[11px] font-bold text-textPrimary uppercase tracking-wider font-sans">TrustLayerLabs</h4>
                <p className="text-[10px] font-sans text-textSecondary uppercase">Practitioner-Led Team</p>
              </div>
            </div>
          </div>

          {/* Right card */}
          <div className="bg-surface/90 border border-border/80 p-5 rounded-2xl shadow-sm space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-[9px] font-mono font-bold text-primary uppercase tracking-wider bg-primary/10 border border-primary/20 px-2 py-0.5 rounded">
                Technical GRC
              </span>
              <CheckCircle size={14} className="text-primary" />
            </div>
            <p className="text-[11px] text-textPrimary leading-relaxed font-sans">
              SOC 2 & ISO 27001 readiness, technical control mapping, and retest verification reports.
            </p>
            <div className="flex items-center gap-2.5 pt-2.5 border-t border-border/40">
              <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center font-sans font-bold text-[10px] text-primary">
                GRC
              </div>
              <div>
                <h4 className="text-[11px] font-bold text-textPrimary uppercase tracking-wider font-sans">Security Readiness</h4>
                <p className="text-[10px] font-sans text-textSecondary uppercase">Governance Advisory</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
