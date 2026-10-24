"use client";

import React from "react";
import { 
  ShieldCheck, 
  Zap, 
  UserCheck, 
  RefreshCw, 
  ArrowRight, 
  Terminal, 
  AlertTriangle, 
  CheckCircle2, 
  FileCheck,
  Check,
  Clock,
  Shield
} from "lucide-react";
import { openCalendly } from "@/lib/calendly";
import { trackCalendarClick } from "@/lib/analytics";

export default function BenefitsSection() {
  return (
    <div id="why-choose-us" className="w-full bg-[#FAFAFA] px-4 sm:px-6 py-20 md:py-28 border-t border-dashed border-neutral-200">
      <section className="max-w-[1140px] mx-auto dashed-x-custom w-full flex flex-col items-center justify-center px-4">
        
        {/* Section Header */}
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center text-center py-6 sm:py-10 gap-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/90 shadow-sm text-xs font-semibold text-neutral-800 mb-2">
            <ShieldCheck size={14} className="text-primary" />
            <span>Our Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 mb-3 font-sans">
            Why High-Growth Teams Choose Us
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-xl">
            Offensive security built for engineering speed, manual logic depth, and zero scanner false positives.
          </p>
        </div>

        {/* Custom Asymmetric Editorial Showcase (Replaces Generic 6-Card Grid) */}
        <div className="w-full space-y-8 my-8 dashed-y-custom py-10">
          
          {/* Module 1: Large Split Feature - Manual Logic vs Scanner Blindspots */}
          <div className="w-full bg-white rounded-3xl border border-neutral-200/90 p-7 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:border-neutral-300 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Narrative */}
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-[11px] font-mono font-bold text-primary">
                  <Terminal size={12} />
                  <span>LOGIC DEPTH VS SCANNER NOISE</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 font-sans leading-snug">
                  Automated Scanners Check Syntax. <br />
                  <span className="text-primary">We Exploit Authorization Logic.</span>
                </h3>
                
                <p className="text-sm text-neutral-600 leading-relaxed font-sans">
                  Automated DAST and vulnerability scanners blindly report syntax errors and known CVE signatures while missing 
                  critical business logic vulnerabilities like BOLA, multi-tenant isolation escapes, and flawed state machines.
                </p>

                <div className="space-y-2.5 pt-2">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 font-sans">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200 mt-0.5">
                      <Check size={11} strokeWidth={3} />
                    </div>
                    <span><strong>100% Human-Verified Proof-of-Concepts:</strong> Every finding includes an exact reproducible cURL script and developer remediation code.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 font-sans">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200 mt-0.5">
                      <Check size={11} strokeWidth={3} />
                    </div>
                    <span><strong>Zero Scanner False Positives:</strong> We do not waste your engineering sprint sorting through irrelevant 200-page scanner dumps.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 font-sans">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200 mt-0.5">
                      <Check size={11} strokeWidth={3} />
                    </div>
                    <span><strong>Multi-Tenant Boundary Validation:</strong> Dedicated tests for cross-tenant row leaks, Redis cache contamination, and token revocation.</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Comparative Interactive PoC Terminal Card */}
              <div className="lg:col-span-6 bg-neutral-950 rounded-2xl p-5 sm:p-6 text-neutral-200 font-mono text-xs shadow-inner border border-neutral-800">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-800 text-[11px] text-neutral-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-neutral-400">scanner_vs_trustlayer.log</span>
                  </div>
                  <span className="text-primary text-[10px] bg-blue-950/70 border border-blue-800/60 px-2 py-0.5 rounded-md font-semibold">
                    BENCHMARK
                  </span>
                </div>

                {/* Automated Scanner Result */}
                <div className="p-3 bg-neutral-900/80 rounded-xl border border-neutral-800 mb-3 space-y-1">
                  <div className="flex items-center justify-between text-[10px] text-neutral-400 uppercase tracking-wider">
                    <span>Automated DAST Scanner Output</span>
                    <span className="text-amber-400 font-semibold">⚠️ BLIND TO LOGIC</span>
                  </div>
                  <p className="text-neutral-400 text-[11px]">$ zap-cli quick-scan --url https://api.saas.com</p>
                  <p className="text-emerald-400 text-[11px]">&gt; Status: 200 OK — 0 CVEs Detected (Clean Scan)</p>
                  <p className="text-neutral-400 text-[10px] italic">Verdict: Passed compliance scan, but vulnerable object IDs were never tested.</p>
                </div>

                {/* TrustLayer Manual Logic Result */}
                <div className="p-3 bg-rose-950/30 rounded-xl border border-rose-900/40 space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] text-rose-300 uppercase tracking-wider">
                    <span>TrustLayer Manual Logic Exploit</span>
                    <span className="text-rose-400 font-bold">🚨 CRITICAL BOLA CONFIRMED</span>
                  </div>
                  <p className="text-neutral-300 text-[11px]">curl -X GET https://api.saas.com/v1/invoices/9843 \</p>
                  <p className="text-neutral-400 text-[11px] pl-3">-H &quot;Authorization: Bearer &lt;Tenant_A_User&gt;&quot;</p>
                  <p className="text-rose-400 text-[11px] font-semibold">&gt; HTTP/2 200 OK — Leaked: Enterprise Tenant B Invoices ($42,500.00)</p>
                  <div className="pt-1.5 border-t border-rose-900/50 flex items-center justify-between text-[10px]">
                    <span className="text-rose-300">Impact: Full Cross-Tenant Breach</span>
                    <span className="text-emerald-400 font-bold">Patched in 48h ✓</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Module 2 & 3: 2-Column Split Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Feature A: Rapid 48-Hour Critical Briefings */}
            <div className="bg-white rounded-3xl border border-neutral-200/90 p-7 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:border-neutral-300 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/70 flex items-center justify-center text-amber-600 shadow-xs">
                    <Zap size={22} />
                  </div>
                  <span className="text-[11px] font-mono font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full">
                    SLA GUARANTEE
                  </span>
                </div>

                <h3 className="text-xl font-bold text-neutral-950 font-sans tracking-tight mb-2">
                  Fast 48-Hour Critical Briefings
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans mb-6">
                  Don&apos;t wait weeks for a bloated report when an enterprise contract is on the line. When we discover a Critical or High severity vulnerability, we alert your engineering team immediately so remediation begins while the audit continues.
                </p>

                {/* Simulated Slack/Webhook Incident Alert Box */}
                <div className="p-4 bg-neutral-50 rounded-2xl border border-neutral-200/80 font-sans text-xs space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-neutral-800 font-semibold text-[11px]">
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                    <span className="text-rose-700 font-mono uppercase font-bold">CRITICAL ALERT DISPATCH (Hour 28)</span>
                  </div>
                  <p className="text-neutral-700 text-xs">
                    <strong>Vulnerability:</strong> BOLA / IDOR on <code>/api/v1/invoices/:id</code>
                  </p>
                  <p className="text-neutral-500 text-[11px] leading-relaxed">
                    Reproduction cURL script and tenant isolation patch sent to engineering leads via shared Slack connect / encrypted email.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-dashed border-neutral-200 text-xs text-neutral-500 flex items-center justify-between">
                <span>Enterprise Deal Speed</span>
                <span className="text-neutral-900 font-semibold font-mono">0 Day Blockers</span>
              </div>
            </div>

            {/* Feature B: Direct Senior Practitioner Access & Free 30-Day Retesting */}
            <div className="bg-white rounded-3xl border border-neutral-200/90 p-7 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:border-neutral-300 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200/70 flex items-center justify-center text-primary shadow-xs">
                    <UserCheck size={22} />
                  </div>
                  <span className="text-[11px] font-mono font-bold text-primary bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full">
                    CERTIFIED LEADERSHIP
                  </span>
                </div>

                <h3 className="text-xl font-bold text-neutral-950 font-sans tracking-tight mb-2">
                  Senior Practitioner Partnership &amp; Free Retesting
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans mb-6">
                  You collaborate directly with certified offensive practitioners (CEH, CWL C3SA, ISO 27001 Lead Auditor). No junior proxies or account managers. Plus, once your fixes are deployed, we re-test at zero extra charge.
                </p>

                {/* Retesting & Attestation Letter Feature Capsule */}
                <div className="p-4 bg-emerald-50/60 rounded-2xl border border-emerald-200/80 font-sans text-xs space-y-2 mb-4">
                  <div className="flex items-center justify-between text-emerald-800 font-semibold text-[11px]">
                    <span className="flex items-center gap-1.5 font-bold">
                      <FileCheck size={14} className="text-emerald-600" />
                      FORMAL ATTESTATION LETTER
                    </span>
                    <span className="text-[10px] font-mono text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
                      INCLUDED FREE
                    </span>
                  </div>
                  <p className="text-neutral-700 text-xs">
                    Official Retest Attestation Letter issued upon fix verification, signed by an ISO 27001 Lead Auditor for your SOC 2 auditors and enterprise vendor risk reviewers.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-dashed border-neutral-200 text-xs text-neutral-500 flex items-center justify-between">
                <span>Complimentary Retest Window</span>
                <span className="text-neutral-900 font-semibold font-mono">30 Days Included</span>
              </div>
            </div>

          </div>

        </div>

        {/* CodeDale Rolling Call-to-Action Button */}
        <div className="my-8">
          <a
            href="https://cal.com/nagasrinivasarao/30min"
            onClick={(e) => {
              e.preventDefault();
              trackCalendarClick("benefits_rolling_button");
              openCalendly();
            }}
            className="group relative px-8 py-4 rounded-full flex items-center justify-center overflow-hidden cta-shadow bg-[#151619] hover:bg-[#252830] text-white transition-all duration-300 cursor-pointer shadow-lg active:scale-98 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
          >
            <div className="flex items-center gap-2.5 text-sm font-semibold tracking-tight">
              <span>Reserve Your Assessment Slot</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </div>

      </section>
    </div>
  );
}
