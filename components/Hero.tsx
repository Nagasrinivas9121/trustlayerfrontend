"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight, ShieldCheck, Terminal, CheckCircle2, Shield, Lock, Star, Sparkles, FileText } from "lucide-react";
import { openCalendly } from "@/lib/calendly";
import { trackHeroPrimaryCta, trackCalendarClick } from "@/lib/analytics";

export default function Hero() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    trackHeroPrimaryCta();

    const existingLeads = JSON.parse(localStorage.getItem("trustlayer_leads") || "[]");
    existingLeads.push({
      email,
      scope: "hero-inline",
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem("trustlayer_leads", JSON.stringify(existingLeads));

    router.push(`/free-assessment?email=${encodeURIComponent(email)}`);
  };

  return (
    <section id="home" className="relative w-full flex flex-col items-center justify-center pt-28 md:pt-36 pb-16 overflow-hidden px-4 sm:px-6 bg-[#FAFAFA]">
      
      {/* CodeDale Dot Matrix Radial Mask Background */}
      <div 
        className="absolute inset-0 w-full h-[620px] opacity-25 [mask-image:radial-gradient(circle,black_35%,transparent_100%)] pointer-events-none z-0"
        style={{
          backgroundImage: "radial-gradient(#64748b 1.25px, transparent 1.25px)",
          backgroundSize: "28px 28px",
          backgroundPosition: "center top"
        }}
      />

      {/* 1. CodeDale Availability Pill Badge */}
      <div className="flex items-center justify-center z-10 mb-6 sm:mb-8">
        <a
          href="https://cal.com/nagasrinivasarao/30min"
          onClick={(e) => {
            e.preventDefault();
            trackCalendarClick("hero_availability_pill");
            openCalendly();
          }}
          className="flex items-center justify-center gap-2.5 bg-white border border-neutral-200/90 rounded-full pr-1.5 pl-4 py-1.5 text-xs md:text-sm tracking-tight text-neutral-800 font-semibold shadow-sm hover:border-neutral-400 hover:shadow-md transition-all cursor-pointer group min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
        >
          <span className="pulse-ring shrink-0" />
          <span className="truncate">Direct Practitioner Scoping · 30-Min Confidential Review</span>
          <div className="bg-neutral-100 group-hover:bg-neutral-200 w-7 h-7 rounded-full flex items-center justify-center ml-1 text-neutral-900 transition-colors shrink-0">
            <ArrowRight size={13} className="-rotate-45" />
          </div>
        </a>
      </div>

      {/* Main Container with CodeDale 3-Column Tilted Layout */}
      <div className="relative w-full max-w-7xl mx-auto flex items-center justify-center px-4 z-10">
        
        {/* Left Tilted Code/PoC Card (Desktop XL only - CodeDale Signature) */}
        <div className="xl:block hidden shrink-0 -mr-6 z-10">
          <div className="relative w-[240px]">
            {/* Under card for depth */}
            <div className="absolute inset-0 bg-white rounded-2xl -rotate-[6deg] border border-black/5 shadow-sm -z-10" />
            
            {/* Main rotated card */}
            <div className="relative bg-white rounded-2xl text-xs card-shadow p-5 w-full rotate-[-14deg] border border-black/5 hover:rotate-[-6deg] transition-transform duration-300">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-neutral-100">
                <span className="text-[10px] font-mono font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md">
                  BOLA VULNERABILITY
                </span>
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
              </div>
              <p className="text-neutral-700 font-mono text-[11px] leading-relaxed mb-3">
                GET /api/v1/invoices/9843<br />
                <span className="text-neutral-400">Auth: Bearer &lt;Tenant_A&gt;</span><br />
                <span className="text-rose-600 font-bold">&rarr; 200 OK (Leaks Tenant B)</span>
              </p>
              <div className="border-t border-neutral-100 pt-2 flex items-center justify-between">
                <span className="text-[10px] font-semibold text-neutral-500">Manual Logic Scrutiny</span>
                <span className="text-[10px] font-bold text-neutral-900">PoC Verified ✓</span>
              </div>
            </div>
          </div>
        </div>

        {/* Center Main Headline & CTA Content */}
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto z-20">
          
          {/* CodeDale Headline with Embedded Rotated Icon Badges */}
          <h1 className="text-[32px] leading-[1.12] font-semibold tracking-tighter px-2 text-center text-neutral-950 sm:text-[40px] md:px-0 md:text-[50px] md:leading-[1.15] md:font-bold md:tracking-tight md:max-w-3xl xl:tracking-tighter xl:leading-[64px]">
            <span className="md:flex md:items-center md:justify-center md:gap-2 md:whitespace-nowrap">
              Practical Security Testing
              <span className="hidden md:flex ml-2 logo-shadow bg-white rounded-lg w-10 h-10 rotate-12 translate-x-1 translate-y-1 items-center justify-center border border-black/5">
                <Shield size={20} className="text-primary" />
              </span>
              <span className="hidden md:flex logo-shadow bg-white rounded-lg w-10 h-10 -rotate-12 z-10 -translate-x-1 translate-y-1 items-center justify-center border border-black/5">
                <Terminal size={19} className="text-neutral-900" />
              </span>
            </span>
            <span className="md:flex md:items-center md:justify-center md:gap-2 md:whitespace-nowrap mt-1">
              for APIs, SaaS &amp;
              <span className="hidden md:flex ml-2 logo-shadow bg-white rounded-lg w-10 h-10 translate-y-1 items-center rotate-12 justify-center border border-black/5">
                <Lock size={19} className="text-emerald-600" />
              </span>
              AI Logic
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-[#323745] text-sm md:text-lg mx-4 sm:mx-10 text-center max-w-xl tracking-tight leading-relaxed mt-4 mb-8">
            Security assessments focused on authorization, tenant isolation, and business logic flaws that automated scanners miss — with clear technical findings and actionable developer fixes.
          </p>

          {/* Primary Action Row - Clean Hierarchy */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-6 w-full sm:w-auto">
            {/* Primary Action: Book a 30-Min Call */}
            <a
              href="https://cal.com/nagasrinivasarao/30min"
              onClick={(e) => {
                e.preventDefault();
                trackCalendarClick("hero_primary_call_button");
                openCalendly();
              }}
              className="w-full sm:w-auto flex items-center justify-center gap-3 py-3.5 px-7 group transition-all duration-300 font-semibold bg-[#151619] hover:bg-[#252830] text-white rounded-full shadow-lg tracking-tight whitespace-nowrap text-sm cursor-pointer min-h-[46px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
            >
              <div className="relative w-14 md:w-7 h-7 origin-center md:group-hover:w-14 transition-all duration-300 ease-in-out flex items-center justify-center">
                <div className="absolute left-0 shrink-0 z-10 w-7 h-7 rounded-full bg-white flex items-center justify-center border border-black/10 overflow-hidden shadow-xs">
                  <Image
                    src="/logo-icon.png"
                    alt="TrustLayerLabs"
                    width={18}
                    height={18}
                    className="w-4 h-4 object-contain"
                  />
                </div>
                <span className="text-[10px] text-neutral-400 font-bold">+</span>
                <div className="absolute right-0 shrink-0 w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center font-bold text-[10px] shadow-xs">
                  You
                </div>
              </div>
              <span>Book a 30-Min Scoping Call</span>
            </a>

            {/* Secondary Action: Explore Security Services */}
            <Link
              href="/services"
              className="w-full sm:w-auto flex items-center justify-center gap-2 py-3.5 px-6 font-semibold text-neutral-800 hover:text-black bg-white hover:bg-neutral-50 border border-neutral-200/90 rounded-full transition-all text-xs sm:text-sm tracking-tight shadow-sm cursor-pointer min-h-[46px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
            >
              <span>Explore Security Services</span>
              <ArrowRight size={14} className="text-neutral-500" />
            </Link>
          </div>

          {/* Dedicated Quick Scope Estimate Capsule (Separated Vertical Rhythm) */}
          <div className="w-full max-w-lg mx-auto bg-white/90 border border-neutral-200/90 rounded-3xl p-3 sm:p-2 sm:rounded-full shadow-sm mb-7 backdrop-blur-sm">
            <form
              onSubmit={handleLeadSubmit}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2"
            >
              <div className="flex items-center gap-2 px-3 flex-1">
                <FileText size={16} className="text-neutral-400 shrink-0 hidden sm:block" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter work email for scoping estimate..."
                  aria-label="Work email address for scoping estimate"
                  className="w-full py-2.5 sm:py-2 text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 bg-transparent focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="bg-neutral-900 hover:bg-black text-white text-xs font-semibold px-5 py-3 sm:py-2.5 rounded-2xl sm:rounded-full transition-all active:scale-95 whitespace-nowrap cursor-pointer shadow-sm min-h-[44px] sm:min-h-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
              >
                Get Scoping Estimate
              </button>
            </form>
          </div>

          {/* Credibility Strip: Truthful Certified Analysts & MSME Proof (Zero Fake Clients) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-1">
            <div className="flex -space-x-3 items-center">
              <Image
                src="/nagasrinivasarao.jpg"
                alt="Nagasrinivasa Rao, Lead Security Architect"
                width={40}
                height={40}
                className="rounded-full w-10 h-10 border-2 border-white object-cover shadow-sm"
              />
              <Image
                src="/ramineniteja.jpg"
                alt="Ramineni Teja, GRC Lead"
                width={40}
                height={40}
                className="rounded-full w-10 h-10 border-2 border-white object-cover shadow-sm"
              />
              <Image
                src="/nayansianand.jpg"
                alt="Nayansi Anand, VAPT Specialist"
                width={40}
                height={40}
                className="rounded-full w-10 h-10 border-2 border-white object-cover shadow-sm"
              />
              <span className="bg-white w-10 h-10 text-neutral-900 border border-neutral-200 rounded-full flex items-center justify-center text-[10px] font-bold ml-1 shadow-sm font-mono">
                MSME
              </span>
            </div>

            <div className="flex flex-col justify-start items-center sm:items-start gap-0.5 text-center sm:text-left">
              <div className="flex space-x-0.5 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill="currentColor" />
                ))}
              </div>
              <span className="text-neutral-700 text-xs sm:text-[13px] tracking-tight font-medium font-sans">
                Certified Analysts · CEH · CWL C3SA · ISO 27001 LA
              </span>
            </div>
          </div>

        </div>

        {/* Right Tilted Credibility Card (Desktop XL only - CodeDale Signature) */}
        <div className="xl:block hidden shrink-0 -ml-6 z-10">
          <div className="relative w-[240px]">
            {/* Under card for depth */}
            <div className="absolute inset-0 bg-white rounded-2xl rotate-[20deg] border border-black/5 shadow-sm -z-10" />
            
            {/* Main rotated card */}
            <div className="relative bg-white rounded-2xl text-xs card-shadow p-5 w-full rotate-[14deg] border border-black/5 hover:rotate-[6deg] transition-transform duration-300">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-neutral-100">
                <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                  BUYER ASSURANCE
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>
              <p className="text-neutral-700 text-[11px] font-medium leading-relaxed mb-3">
                &ldquo;Mutual NDA executed upfront. 100% manual logic scrutiny, zero scanner noise, and 30-day retest attestation.&rdquo;
              </p>
              <div className="border-t border-neutral-100 pt-2 flex items-center justify-between">
                <span className="text-[10px] font-semibold text-neutral-500">Practitioner Attestation</span>
                <span className="text-[10px] font-bold text-neutral-900">Auditor Ready ✓</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Verifiable Assurances Strip */}
      <div className="w-full max-w-4xl mx-auto mt-12 pt-6 border-t border-dashed border-neutral-200 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-neutral-600 font-medium z-10 px-4">
        <span className="flex items-center gap-1.5">
          <CheckCircle2 size={13} className="text-emerald-600 shrink-0" /> Mutual NDA Executed Upfront
        </span>
        <span className="flex items-center gap-1.5">
          <CheckCircle2 size={13} className="text-emerald-600 shrink-0" /> Verified Developer PoCs with cURL
        </span>
        <span className="flex items-center gap-1.5">
          <CheckCircle2 size={13} className="text-emerald-600 shrink-0" /> Complimentary 30-Day Retesting Included
        </span>
      </div>

    </section>
  );
}
