"use client";

import React from "react";
import { ShieldCheck, Lock, Terminal, FileCode, CheckCircle2, AlertCircle, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AchievementsSection() {
  return (
    <section id="achievements" className="w-full bg-[#FAFAFA] scroll-mt-10 px-4 sm:px-6 py-20 border-t border-dashed border-neutral-200">
      <div className="max-w-[1140px] mx-auto w-full flex flex-col items-center justify-center">
        
        {/* Section Header */}
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/80 shadow-sm text-xs font-semibold text-neutral-800 mb-4">
            <ShieldCheck size={14} className="text-neutral-900" />
            <span>Offensive Engineering Standards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 mb-4">
            Our Technical Standards
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl mx-auto">
            Engineered for high-growth engineering teams that need thorough manual depth, verified developer PoCs, and auditor-ready deliverables.
          </p>
        </div>

        {/* 3 Technical Capability Cards (Realistic Technical UI) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full items-stretch">
          
          {/* Card 1: Manual Verification (Real Terminal Execution Box) */}
          <div className="p-7 bg-white rounded-3xl border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:border-neutral-300 transition-all flex flex-col justify-between">
            <div>
              {/* Realistic Terminal UI Console */}
              <div className="bg-neutral-950 rounded-2xl p-4 font-mono text-xs text-neutral-200 mb-6 shadow-inner border border-neutral-800">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-800 text-[11px] text-neutral-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                    <span className="ml-1 text-neutral-400">manual_audit.sh</span>
                  </div>
                  <span className="text-emerald-400 text-[10px] bg-emerald-950/80 border border-emerald-800/60 px-2 py-0.5 rounded-full">
                    HUMAN VERIFIED
                  </span>
                </div>
                
                <div className="space-y-1.5 text-[11px] leading-relaxed">
                  <p className="text-neutral-400"># 1. Probing contextual boundary bypass</p>
                  <p className="text-rose-400">curl -X GET &quot;https://api.app/v1/invoices/9843&quot; \</p>
                  <p className="text-neutral-300 pl-3">-H &quot;Authorization: Bearer &lt;Tenant_A_JWT&gt;&quot; \</p>
                  <p className="text-neutral-300 pl-3">-H &quot;X-Tenant-Scope: isolated&quot;</p>
                  <div className="pt-2 mt-2 border-t border-neutral-800/80">
                    <p className="text-emerald-400 font-semibold">&gt; HTTP/2 403 Forbidden</p>
                    <p className="text-neutral-400 text-[10px] mt-0.5">Resolved: Row-level tenant context enforced</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">
                  <Terminal size={12} />
                  <span>Every finding manually verified</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-950 tracking-tight">
                  Manual Verification
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Every vulnerability is manually validated with reproducible curl proof-of-concept scripts and practical remediation code snippets.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-dashed border-neutral-200 text-xs text-neutral-500 flex items-center justify-between">
              <span>Verified in Dedicated Staging</span>
              <span className="text-neutral-900 font-semibold font-mono">Verified PoCs</span>
            </div>
          </div>

          {/* Card 2: 8 Critical Attack Surfaces (Clean Structured Grid) */}
          <div className="p-7 bg-white rounded-3xl border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:border-neutral-300 transition-all flex flex-col justify-between">
            <div>
              {/* Structured Technical Matrix */}
              <div className="bg-neutral-50 rounded-2xl p-4 border border-neutral-200/70 mb-6">
                <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-neutral-200 text-xs font-semibold text-neutral-800">
                  <span>Attack Surface Coverage</span>
                  <span className="font-mono text-[10px] text-neutral-500">8 OF 8 SCOPES</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                  <div className="p-2 bg-white rounded-xl border border-neutral-200/60 flex items-center justify-between">
                    <span className="text-neutral-800 font-semibold">BOLA / IDOR</span>
                    <span className="text-emerald-600">✓</span>
                  </div>
                  <div className="p-2 bg-white rounded-xl border border-neutral-200/60 flex items-center justify-between">
                    <span className="text-neutral-800 font-semibold">Tenant RLS</span>
                    <span className="text-emerald-600">✓</span>
                  </div>
                  <div className="p-2 bg-white rounded-xl border border-neutral-200/60 flex items-center justify-between">
                    <span className="text-neutral-800 font-semibold">RBAC BFLA</span>
                    <span className="text-emerald-600">✓</span>
                  </div>
                  <div className="p-2 bg-white rounded-xl border border-neutral-200/60 flex items-center justify-between">
                    <span className="text-neutral-800 font-semibold">JWT Forgery</span>
                    <span className="text-emerald-600">✓</span>
                  </div>
                  <div className="p-2 bg-white rounded-xl border border-neutral-200/60 flex items-center justify-between">
                    <span className="text-neutral-800 font-semibold">Payment Logic</span>
                    <span className="text-emerald-600">✓</span>
                  </div>
                  <div className="p-2 bg-white rounded-xl border border-neutral-200/60 flex items-center justify-between">
                    <span className="text-neutral-800 font-semibold">RAG Leakage</span>
                    <span className="text-emerald-600">✓</span>
                  </div>
                  <div className="p-2 bg-white rounded-xl border border-neutral-200/60 flex items-center justify-between">
                    <span className="text-neutral-800 font-semibold">Webhook Replay</span>
                    <span className="text-emerald-600">✓</span>
                  </div>
                  <div className="p-2 bg-white rounded-xl border border-neutral-200/60 flex items-center justify-between">
                    <span className="text-neutral-800 font-semibold">Cloud IAM</span>
                    <span className="text-emerald-600">✓</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">
                  <FileCode size={12} />
                  <span>Logical Vulnerability Vectors</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-950 tracking-tight">
                  8 Critical Attack Surfaces
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Deep inspection of authorization logic, identity tokens, multi-tenancy, and state workflows that automated scanners cannot comprehend.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-dashed border-neutral-200 text-xs text-neutral-500 flex items-center justify-between">
              <span>OWASP &amp; PTES Aligned</span>
              <span className="text-neutral-900 font-semibold font-mono">Practitioner Scrutiny</span>
            </div>
          </div>

          {/* Card 3: Enterprise Attestation (Realistic Attestation Sheet) */}
          <div className="p-7 bg-white rounded-3xl border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:border-neutral-300 transition-all flex flex-col justify-between">
            <div>
              {/* Realistic Attestation Sheet UI */}
              <div className="bg-neutral-50 rounded-2xl p-4 border border-neutral-200/70 mb-6 font-sans">
                <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-neutral-200">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-neutral-900 text-white flex items-center justify-center text-[10px] font-bold">
                      TL
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-neutral-950 flex items-center gap-1.5">
                        <span>Attestation of Assessment</span>
                      </div>
                      <div className="text-[9px] font-mono text-neutral-400">Ref: TTL-SAMPLE-VAPT-01</div>
                    </div>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                    ATTESTED
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="text-[10px] text-amber-800 bg-amber-50 border border-amber-200/80 rounded-lg px-2.5 py-1 font-sans font-medium">
                    Sample / illustrative document, not a client engagement
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-neutral-200/60 space-y-1 text-[11px]">
                    <div className="flex justify-between text-neutral-500">
                      <span>Methodology:</span>
                      <span className="text-neutral-900 font-medium">OWASP Top 10 + ASVS</span>
                    </div>
                    <div className="flex justify-between text-neutral-500">
                      <span>Verification Window:</span>
                      <span className="text-neutral-900 font-medium">30-Day Free Retest</span>
                    </div>
                    <div className="flex justify-between text-neutral-500">
                      <span>Auditor Acceptance:</span>
                      <span className="text-emerald-700 font-semibold text-right">Designed to support SOC 2 / ISO 27001 evidence requests</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">
                  <CheckCircle2 size={12} className="text-emerald-600" />
                  <span>Buyer Risk Clearance</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-950 tracking-tight">
                  Unblocking Enterprise Deals
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Clear security questionnaires, satisfy enterprise buyer procurement requirements, and pass vendor risk assessments with signed attestation letters.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-dashed border-neutral-200 text-xs text-neutral-500 flex items-center justify-between">
              <span>Signed Attestation Included</span>
              <span className="text-neutral-900 font-semibold font-mono">30-Day Retest</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
