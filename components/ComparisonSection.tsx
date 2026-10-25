"use client";

import React from "react";
import { Check, X, AlertCircle, Shield } from "lucide-react";

interface ComparisonRow {
  feature: string;
  trustlayer: string;
  scanners: string;
  consultancies: string;
}

const COMPARISONS: ComparisonRow[] = [
  {
    feature: "Business Logic & BOLA",
    trustlayer: "Deep manual testing of authorization & multi-step state machines",
    scanners: "Blind to logic, BOLA/IDOR, and tenant isolation boundaries",
    consultancies: "Often checklist-driven and delegated to junior staff",
  },
  {
    feature: "Finding Verification",
    trustlayer: "Every finding manually verified with a reproducible PoC",
    scanners: "High volume of unverified alerts requiring developer triage [1]",
    consultancies: "Moderate noise; unverified scanner exports common",
  },
  {
    feature: "Turnaround Time",
    trustlayer: "5-10 business days depending on package (critical findings briefed within 48 hours)",
    scanners: "Instant scan, but misses contextual application logic",
    consultancies: "Multi-week scheduling queues & prolonged enterprise onboarding",
  },
  {
    feature: "Cost Model",
    trustlayer: "Predictable, transparent fixed-scope pricing",
    scanners: "Heavy annual multi-seat SaaS licensing commitments [2]",
    consultancies: "High enterprise day-rate billing models [2]",
  },
  {
    feature: "Developer Reproduction",
    trustlayer: "Exact cURL commands, parameters & code-level fixes",
    scanners: "Generic textbook remediation advice",
    consultancies: "Lengthy compliance PDF dumps without actionable PoCs",
  },
  {
    feature: "Retesting Guarantee",
    trustlayer: "Complimentary 30-day retesting & signed Attestation Letter",
    scanners: "Automated rescans only re-flag the same syntactic patterns",
    consultancies: "Retesting frequently billed as a separate paid add-on",
  },
  {
    feature: "Practitioner Access",
    trustlayer: "Direct collaboration with certified architects (CEH, CWL C3SA, ISO 27001 LA)",
    scanners: "Zero human interaction or architecture reasoning",
    consultancies: "Layers of sales reps and account managers before technical staff",
  },
];

export default function ComparisonSection() {
  return (
    <section id="comparison" className="w-full bg-[#FAFAFA] px-4 sm:px-6 py-20 border-t border-dashed border-neutral-200">
      <div className="max-w-[1140px] mx-auto w-full flex flex-col items-center">
        
        {/* Section Header */}
        <div className="w-full max-w-xl mx-auto flex flex-col items-center justify-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/80 shadow-xs text-xs font-semibold text-neutral-800 mb-3">
            <Shield size={14} className="text-primary" />
            <span>The Clear Choice</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 mb-3 font-sans">
            What Makes Us Different
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-md font-sans">
            Why engineering teams prefer dedicated manual testing over automated scanners or traditional consultancies:
          </p>
        </div>

        {/* Desktop / Tablet Matrix (Non-scrolling, responsive grid) */}
        <div className="w-full hidden md:block">
          <div className="w-full bg-white rounded-3xl border border-neutral-200 shadow-sm overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-12 bg-neutral-50/80 border-b border-neutral-200 p-4 text-xs font-mono font-bold uppercase tracking-wider text-neutral-500">
              <div className="col-span-3">Evaluation Criteria</div>
              <div className="col-span-3 text-neutral-950 font-bold flex items-center gap-1.5 text-primary">
                <Shield size={13} />
                <span>TrustLayerLabs</span>
              </div>
              <div className="col-span-3 text-neutral-700">Automated Scanners</div>
              <div className="col-span-3 text-neutral-700">Traditional Consultancies</div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-neutral-100 text-xs font-sans">
              {COMPARISONS.map((row, idx) => (
                <div key={idx} className="grid grid-cols-12 p-4 items-center gap-4 hover:bg-neutral-50/50 transition-colors">
                  <div className="col-span-3 font-bold text-neutral-900">
                    {row.feature}
                  </div>
                  <div className="col-span-3 text-neutral-950 font-semibold flex items-start gap-2 bg-blue-50/50 p-2.5 rounded-xl border border-blue-100/80">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={11} strokeWidth={3} />
                    </div>
                    <span>{row.trustlayer}</span>
                  </div>
                  <div className="col-span-3 text-neutral-600 flex items-start gap-2 p-2">
                    <div className="w-4 h-4 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center shrink-0 mt-0.5">
                      <X size={11} strokeWidth={3} />
                    </div>
                    <span>{row.scanners}</span>
                  </div>
                  <div className="col-span-3 text-neutral-600 flex items-start gap-2 p-2">
                    <div className="w-4 h-4 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                      <AlertCircle size={11} strokeWidth={3} />
                    </div>
                    <span>{row.consultancies}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Stacked View (Zero Horizontal Scrolling) */}
        <div className="w-full md:hidden space-y-4">
          {COMPARISONS.map((row, idx) => (
            <div key={idx} className="p-5 bg-white rounded-2xl border border-neutral-200/90 shadow-xs space-y-3">
              <span className="text-xs font-bold text-neutral-950 font-sans block pb-2 border-b border-neutral-100">
                {row.feature}
              </span>
              
              {/* TrustLayer highlight */}
              <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-200/60 text-xs font-medium text-neutral-950 flex items-start gap-2">
                <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={10} strokeWidth={3} />
                </div>
                <div>
                  <strong className="text-primary block text-[11px] font-mono uppercase">TrustLayerLabs:</strong>
                  {row.trustlayer}
                </div>
              </div>

              {/* Scanners */}
              <div className="text-xs text-neutral-600 flex items-start gap-2 px-1">
                <div className="w-4 h-4 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center shrink-0 mt-0.5">
                  <X size={10} strokeWidth={3} />
                </div>
                <div>
                  <span className="text-neutral-500 block text-[10px] font-mono uppercase">Scanners:</span>
                  {row.scanners}
                </div>
              </div>

              {/* Consultancies */}
              <div className="text-xs text-neutral-600 flex items-start gap-2 px-1">
                <div className="w-4 h-4 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                  <AlertCircle size={10} strokeWidth={3} />
                </div>
                <div>
                  <span className="text-neutral-500 block text-[10px] font-mono uppercase">Consultancies:</span>
                  {row.consultancies}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Credibility Footnotes */}
        <div className="w-full max-w-4xl mt-8 pt-4 border-t border-dashed border-neutral-200 text-[11px] text-neutral-500 space-y-1">
          <p>[1] Industry Benchmark: Automated signature scanners flag code patterns without contextual runtime verification, requiring engineering triage.</p>
          <p>[2] Market Comparison: Reflects typical enterprise annual platform seat contracts and traditional consulting firm rate cards.</p>
        </div>

      </div>
    </section>
  );
}
