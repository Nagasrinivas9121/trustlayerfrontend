"use client";

import React from "react";
import { Check, X, AlertCircle, Shield, ArrowRight } from "lucide-react";

interface ComparisonRow {
  feature: string;
  trustlayer: string;
  scanners: string;
  consultancies: string;
}

const COMPARISONS: ComparisonRow[] = [
  {
    feature: "Business Logic & BOLA",
    trustlayer: "Deep manual testing of authorization & multi-step state",
    scanners: "Blind to logic, BOLA, and tenant boundaries",
    consultancies: "Checklist-driven; depends on junior staff",
  },
  {
    feature: "False Positive Rate",
    trustlayer: "0% — every finding validated with verified PoC",
    scanners: "High noise (40–60% false alarm rate)",
    consultancies: "Moderate noise; unverified scanner dumps common",
  },
  {
    feature: "Turnaround Time",
    trustlayer: "5–7 Days (Critical findings briefed in 48h)",
    scanners: "Instant scan, but leaves blindspots open",
    consultancies: "3–6 weeks + prolonged legal & onboarding",
  },
  {
    feature: "Cost & Pricing Model",
    trustlayer: "Fair, transparent fixed-scope pricing",
    scanners: "Expensive yearly SaaS licenses ($15k–$40k/yr)",
    consultancies: "Exorbitant enterprise billing ($25k–$60k+)",
  },
  {
    feature: "Developer Reproduction",
    trustlayer: "Exact cURL commands, parameters & code fixes",
    scanners: "Generic textbook remediation advice",
    consultancies: "Bloated 100-page compliance PDF reports",
  },
  {
    feature: "Retesting Guarantee",
    trustlayer: "Complimentary 30-day retesting & attestation letter",
    scanners: "Rescans only reproduce the same scanner flaws",
    consultancies: "Retesting billed as a separate paid add-on",
  },
  {
    feature: "Practitioner Access",
    trustlayer: "Direct access to CEH/C3SA senior security architects",
    scanners: "Zero human interaction or logic guidance",
    consultancies: "Junior analysts; layers of account managers",
  },
];

export default function ComparisonSection() {
  return (
    <div id="comparison" className="w-full bg-[#FAFAFA] px-4 sm:px-6 py-20 border-t border-dashed border-neutral-200">
      <section className="max-w-[1140px] mx-auto dashed-x-custom w-full flex flex-col items-center justify-start px-4">
        
        {/* Section Header */}
        <div className="w-full max-w-xl mx-auto flex flex-col items-center justify-center text-center py-8 sm:py-12 gap-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/80 shadow-sm text-xs font-semibold text-neutral-800 mb-2">
            <Shield size={14} className="text-primary" />
            <span>The Clear Choice</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 mb-3">
            What Makes Us Different
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-md">
            Why engineering teams prefer dedicated manual testing over automated scanners or traditional consultancies:
          </p>
        </div>

        {/* 4-Column Comparison Table (CodeDale Signature Matrix) */}
        <div className="w-full py-8 md:px-6 dashed-y-custom">
          {/* Mobile swipe hint */}
          <div className="md:hidden flex items-center justify-center gap-1.5 text-xs text-neutral-500 mb-4 font-mono">
            <span>Scroll horizontally to compare</span>
            <ArrowRight size={12} />
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto scrollbar-hide">
            <div className="flex flex-col items-center gap-4 w-[860px] h-full shrink-0 mx-auto">
              
              {/* Table Column Headers */}
              <div className="grid grid-cols-4 items-end w-full px-2 pb-2">
                <div className="text-xs font-mono uppercase text-neutral-400 font-bold">
                  Evaluation Matrix
                </div>
                
                {/* TrustLayer Highlight Header */}
                <div className="flex flex-col items-center gap-1.5 justify-center font-bold text-[22px] leading-tight text-neutral-950 tracking-tight">
                  <div className="w-8 h-8 rounded-full bg-blue-50 border border-primary/20 flex items-center justify-center text-primary shadow-xs">
                    <Shield size={16} />
                  </div>
                  <span>TrustLayerLabs</span>
                </div>

                <div className="flex items-center justify-center font-semibold text-base text-neutral-700 tracking-tight">
                  Automated Scanners
                </div>

                <div className="flex items-center justify-center font-semibold text-base text-neutral-700 tracking-tight">
                  Traditional Consultancies
                </div>
              </div>

              {/* Table Content Container */}
              <div className="w-full grid grid-cols-4 p-1.5 bg-white rounded-3xl shadow-md border border-black/5">
                
                {/* Column 1: Feature Labels */}
                <div className="flex flex-col items-start justify-center h-full text-xs font-semibold text-neutral-800 rounded-2xl divide-y divide-black/5 bg-[#f6f7f9] p-2">
                  {COMPARISONS.map((row) => (
                    <div key={row.feature} className="w-full h-18 flex items-center px-3 font-semibold text-neutral-900">
                      {row.feature}
                    </div>
                  ))}
                </div>

                {/* Column 2: TrustLayerLabs (Highlighted with Green Checks) */}
                <div className="flex flex-col items-start justify-center h-full text-xs rounded-2xl divide-y divide-blue-100 bg-blue-50/50 p-2 border border-primary/20">
                  {COMPARISONS.map((row) => (
                    <div key={row.feature} className="w-full h-18 flex items-center px-3 gap-2 text-neutral-900 font-medium leading-snug">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                        <Check size={13} strokeWidth={3} />
                      </div>
                      <span>{row.trustlayer}</span>
                    </div>
                  ))}
                </div>

                {/* Column 3: Automated Scanners */}
                <div className="flex flex-col items-start justify-center h-full text-xs rounded-2xl divide-y divide-black/5 p-2">
                  {COMPARISONS.map((row) => (
                    <div key={row.feature} className="w-full h-18 flex items-center px-3 gap-2 text-neutral-600 leading-snug">
                      <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center flex-shrink-0">
                        <X size={13} strokeWidth={3} />
                      </div>
                      <span>{row.scanners}</span>
                    </div>
                  ))}
                </div>

                {/* Column 4: Traditional Consultancies */}
                <div className="flex flex-col items-start justify-center h-full text-xs rounded-2xl divide-y divide-black/5 p-2">
                  {COMPARISONS.map((row) => (
                    <div key={row.feature} className="w-full h-18 flex items-center px-3 gap-2 text-neutral-600 leading-snug">
                      <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0">
                        <AlertCircle size={13} strokeWidth={3} />
                      </div>
                      <span>{row.consultancies}</span>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
