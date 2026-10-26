"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, FileText, ArrowRight } from "lucide-react";
import { openQuoteModal } from "@/components/QuoteModal";
import { trackPrimaryQuoteClick } from "@/lib/analytics";

interface StepItem {
  number: string;
  title: string;
  badge: string;
  duration: string;
  description: string;
  deliverables: string[];
}

const STEPS: StepItem[] = [
  {
    number: "01",
    title: "Confidential Scoping & Bilateral Mutual NDA",
    badge: "Day 0",
    duration: "24-Hour Fixed Scope",
    description: "Define target API endpoints, user roles, and compliance goals. We execute a legally binding Bilateral Mutual NDA upfront before architecture diagrams, Postman collections, or staging credentials are exchanged.",
    deliverables: [
      "Bilateral Mutual NDA executed upfront",
      "Fixed-price scope proposal within 24 hours",
      "Rules of Engagement (RoE) protocol agreed"
    ]
  },
  {
    number: "02",
    title: "Deep Manual Logic & Authorization Testing",
    badge: "Days 1–10",
    duration: "5-10 business days",
    description: "Certified security architects systematically probe authorization boundaries, BOLA/IDOR, tenant isolation escapes, and multi-step business logic state machines in an isolated staging environment.",
    deliverables: [
      "Every finding manually verified",
      "Daily asynchronous Slack/email progress updates",
      "Critical vulnerability debrief within 48 hours"
    ]
  },
  {
    number: "03",
    title: "Developer cURL PoCs & Retest Attestation",
    badge: "Delivery & Beyond",
    duration: "Complimentary 30-Day Retest",
    description: "Receive an audit-ready technical report containing exact cURL reproduction commands and remediation code. After fixes are deployed, complimentary 30-day retesting is performed and a signed Attestation Letter is issued.",
    deliverables: [
      "Exact reproducible cURL PoC scripts for engineers",
      "Executive summary tailored for enterprise buyers",
      "Signed Attestation Letter designed to support auditor evidence requests"
    ]
  }
];

export default function HowItWorksStatic() {
  return (
    <section id="steps" className="w-full px-4 sm:px-6 py-20 bg-white border-t border-dashed border-neutral-200 relative scroll-mt-24">
      <div id="how-it-works" className="scroll-mt-24" />
      <div className="max-w-[1140px] mx-auto w-full flex flex-col items-center">
        
        {/* Section Header */}
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-semibold text-neutral-800 mb-3">
            <CheckCircle2 size={14} className="text-neutral-900" />
            <span>Structured 3-Step Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 mb-4 font-sans">
            How It Works
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-xl mx-auto font-sans">
            No bureaucratic delays or multi-week agency onboarding. High-velocity manual offensive testing structured for modern SaaS sprint cycles:
          </p>
        </div>

        {/* 3 Numbered Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-stretch mb-12">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="p-7 sm:p-8 bg-[#FAFAFA] rounded-3xl border border-neutral-200/90 shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Step Top Bar */}
                <div className="flex items-center justify-between pb-3 mb-5 border-b border-neutral-200/80">
                  <span className="text-2xl font-bold font-mono text-neutral-900">
                    {step.number}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold text-neutral-600 bg-white border border-neutral-200 px-2 py-0.5 rounded-md">
                      {step.badge}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-neutral-950 font-sans mb-3 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs text-neutral-600 leading-relaxed font-sans mb-6">
                  {step.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2 border-t border-dashed border-neutral-200/80 pt-4">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                    Key Deliverables:
                  </span>
                  {step.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-neutral-700 font-sans">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 size={11} />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-6 border-t border-neutral-200/60 text-[11px] font-mono text-neutral-500">
                Phase Timeline: <strong className="text-neutral-800">{step.duration}</strong>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Bar */}
        <div className="w-full max-w-4xl p-6 bg-neutral-50 rounded-2xl border border-dashed border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-neutral-600 text-center sm:text-left">
            <strong className="text-neutral-900 block font-sans">Ready to begin scoping?</strong>
            Share your endpoints and compliance goals to receive a proposal in 24 hours.
          </div>
          <button
            type="button"
            onClick={() => {
              trackPrimaryQuoteClick("how_it_works_footer");
              openQuoteModal();
            }}
            className="inline-flex items-center gap-2 py-2.5 px-6 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-semibold tracking-tight transition-colors cursor-pointer shrink-0"
          >
            <span>Get a fixed-price quote in 24h</span>
            <ArrowRight size={13} />
          </button>
        </div>

      </div>
    </section>
  );
}
