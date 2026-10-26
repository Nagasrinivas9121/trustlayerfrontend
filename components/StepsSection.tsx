"use client";

import React, { useState } from "react";
import { ShieldCheck, FileText, CheckCircle2, Terminal, ArrowRight, Lock } from "lucide-react";

interface Step {
  step: number;
  title: string;
  description: string;
  badge: string;
  mockup: {
    heading: string;
    subheading: string;
    lines: string[];
    highlightTag: string;
  };
}

const STEPS: Step[] = [
  {
    step: 1,
    title: "Share Your Scope & Sign Mutual NDA",
    description: "Tell us about your endpoints, user roles, and compliance goals. We execute a bilateral mutual NDA upfront before reviewing architecture diagrams or staging credentials.",
    badge: "Confidential Scoping",
    mockup: {
      heading: "Phase 1: Architecture & NDA",
      subheading: "Bilateral Mutual NDA Executed",
      highlightTag: "Pre-Assessment Confirmed",
      lines: [
        "✓ Mutual Non-Disclosure Agreement active",
        "✓ Target: Staging APIs, Web & RAG Vectors",
        "✓ User Roles defined: Tenant Admin, Member, Guest",
        "✓ Fixed-scope proposal delivered in 24 hours",
      ],
    },
  },
  {
    step: 2,
    title: "Deep Manual Penetration Testing",
    description: "Our certified practitioners (CEH, C3SA) systematically probe authorization boundaries, BOLA/IDOR, tenant escapes, and payment logic in staging with daily Slack/email updates.",
    badge: "Offensive Testing",
    mockup: {
      heading: "Phase 2: Active Penetration Testing",
      subheading: "Probing BOLA & Logic Flaws",
      highlightTag: "Critical Flaws Intercepted",
      lines: [
        "⚡ Cross-tenant object enumeration (BOLA)",
        "⚡ Broken function level role escalation (BFLA)",
        "⚡ Webhook replay & payment race condition testing",
        "⚡ Immediate debrief if critical issue is found (<48h)",
      ],
    },
  },
  {
    step: 3,
    title: "Developer PoCs & Retest Attestation",
    description: "Receive a comprehensive report with exact cURL reproduction commands and remediation code. After your team deploys fixes, we verify them and issue a formal Attestation Letter.",
    badge: "Remediation & Sign-Off",
    mockup: {
      heading: "Phase 3: Verified Deliverables",
      subheading: "Enterprise Retest Attestation",
      highlightTag: "Ready for SOC 2 & Enterprise Deals",
      lines: [
        "★ Executive Summary for stakeholders & buyers",
        "★ Verified curl reproduction steps for engineers",
        "★ Engineering debrief walkthrough call",
        "★ Official 30-day Retest Verification Letter",
      ],
    },
  },
];

export default function StepsSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div id="steps" className="w-full px-4 sm:px-6 py-20 bg-white border-t border-dashed border-neutral-200 scroll-mt-24">
      <section className="max-w-[1140px] mx-auto w-full flex flex-col items-center justify-center">
        
        {/* Section Header */}
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-semibold text-neutral-800 mb-4">
            <CheckCircle2 size={14} className="text-neutral-900" />
            <span>Structured Engagement Lifecycle</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 mb-4">
            How to Get Started with TrustLayer
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl mx-auto">
            Skip bureaucratic, slow security agencies. Experience high-velocity manual testing tailored to modern sprint cycles:
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 w-full justify-center items-center gap-8">
          
          {/* Left Side: Real Terminal Console */}
          <div className="relative w-full h-[380px] sm:h-[420px] rounded-3xl bg-neutral-950 text-white p-6 sm:p-8 flex flex-col justify-between shadow-xl border border-neutral-800 overflow-hidden">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-neutral-700" />
                <span className="w-3 h-3 rounded-full bg-neutral-700" />
                <span className="w-3 h-3 rounded-full bg-neutral-700" />
                <span className="text-xs font-mono text-neutral-400 ml-2">trustlayer-vapt.sh</span>
              </div>
              <span className="text-[10px] font-mono uppercase bg-neutral-900 text-neutral-300 px-3 py-1 rounded-full border border-neutral-700">
                {STEPS[activeStep].mockup.highlightTag}
              </span>
            </div>

            <div className="my-auto py-3 space-y-4">
              <div>
                <span className="text-xs text-neutral-400 font-mono font-bold uppercase tracking-widest">
                  {STEPS[activeStep].mockup.heading}
                </span>
                <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-1">
                  {STEPS[activeStep].mockup.subheading}
                </h4>
              </div>

              <div className="space-y-2.5 bg-neutral-900/90 rounded-2xl p-4 border border-neutral-800 font-mono text-xs sm:text-[13px] text-neutral-300">
                {STEPS[activeStep].mockup.lines.map((line, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="text-emerald-400 font-bold shrink-0">{line.substring(0, 2)}</span>
                    <span className="leading-snug">{line.substring(2)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-neutral-800 text-xs text-neutral-400">
              <span className="flex items-center gap-1.5">
                <Lock size={12} className="text-neutral-400" /> Bilateral Confidentiality Assured
              </span>
              <span className="font-mono text-neutral-300 font-bold">Step {STEPS[activeStep].step} of 3</span>
            </div>
          </div>

          {/* Right Side: Interactive Step Cards */}
          <div className="flex flex-col w-full items-center justify-center gap-4">
            {STEPS.map((item, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div
                  key={item.step}
                  onClick={() => setActiveStep(idx)}
                  className={`flex flex-col items-start gap-3 w-full p-6 rounded-3xl transition-all duration-200 cursor-pointer border ${
                    isSelected
                      ? "bg-white border-neutral-950 shadow-md"
                      : "bg-[#FAFAFA] border-neutral-200/80 hover:bg-white hover:border-neutral-300"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2.5">
                      <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                        isSelected ? "bg-neutral-950 text-white" : "bg-neutral-200 text-neutral-700"
                      }`}>
                        {item.step}
                      </span>
                      <span className="text-xs font-mono font-semibold text-neutral-500 uppercase tracking-wider">
                        {item.badge}
                      </span>
                    </div>
                    {isSelected && (
                      <span className="text-xs font-semibold text-neutral-950 flex items-center gap-1">
                        Active Step <ArrowRight size={12} />
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-neutral-950 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </section>
    </div>
  );
}
