"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ASSESSMENT_PROCESS_STEPS } from "@/lib/constants";
import { 
  Compass, 
  Cpu, 
  CheckCircle2, 
  Code2, 
  ShieldCheck, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp,
  Search,
  ShieldAlert,
  FileCode2,
  MessagesSquare,
  Award
} from "lucide-react";
import { trackFreeReviewCtaClick } from "@/lib/analytics";

const compressedSteps = [
  {
    step: "01",
    phase: "Understand",
    title: "Architecture & Threat Model",
    description: "We sign an NDA upfront. Then we review your API routes, auth rules, and tenant models to map your exact threat surface.",
    icon: Compass,
    highlights: ["Mutual NDA upfront.", "Tenancy & auth flow mapping.", "Threat matrix definition."]
  },
  {
    step: "02",
    phase: "Test",
    title: "Manual Offensive Testing",
    description: "Our team tests your app manually. We probe authorization logic, BOLA flaws, and logic bugs that scanners miss.",
    icon: Cpu,
    highlights: ["BOLA & RBAC testing.", "Tenant boundary attacks.", "Workflow manipulation."]
  },
  {
    step: "03",
    phase: "Validate",
    title: "PoC Exploit Validation",
    description: "We verify every bug by hand with real exploit payloads. Your developers get zero false positives.",
    icon: CheckCircle2,
    highlights: ["Developer-ready curl PoCs.", "CVSS severity scoring.", "Zero false positives."]
  },
  {
    step: "04",
    phase: "Fix",
    title: "Remediation Walkthrough",
    description: "We provide clear remediation steps and code snippets. Then we host a debrief call with your engineers to guide fixes.",
    icon: Code2,
    highlights: ["Executive & technical reports.", "Framework-specific code fixes.", "Engineering debrief call."]
  },
  {
    step: "05",
    phase: "Retest",
    title: "Retest & Verification Letter",
    description: "After fixes are live, we test them again. We then issue an official verification letter for your enterprise customers.",
    icon: ShieldCheck,
    highlights: ["30-day retest included.", "Patch validation.", "Attestation verification letter."]
  }
];

const fullPhaseIcons = [
  Search,
  Compass,
  ShieldAlert,
  Cpu,
  CheckCircle2,
  FileCode2,
  MessagesSquare,
  Award
];

export default function HowItWorks() {
  const [showFullMethodology, setShowFullMethodology] = useState(false);

  return (
    <section className="py-24 bg-background border-t border-border relative overflow-hidden" id="process">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-primary/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="section-container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-6">
            <span>Assessment Methodology</span>
          </div>
          <h2 className="heading-2 mb-6 font-sans">
            How Our Security <span className="text-primary">Assessments Work</span>
          </h2>
          <p className="body-text text-textSecondary font-sans max-w-2xl mx-auto">
            A transparent, collaborative process engineered to uncover logic flaws and authorization gaps without disrupting your product shipping velocity.
          </p>
        </div>

        {/* Visually Compressed 5-Step Linear Flow: Understand → Test → Validate → Fix → Retest */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
          {compressedSteps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.phase}
                className="premium-card p-6 bg-surface border border-border rounded-2xl flex flex-col justify-between hover:border-zinc-400 transition-all duration-300 shadow-sm relative group"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                      <Icon size={18} />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary px-2 py-0.5 bg-background border border-border rounded-md">
                      {item.step}
                    </span>
                  </div>

                  <div className="text-[10px] font-mono uppercase tracking-wider text-textSecondary mb-1 font-semibold">
                    Stage • {item.phase}
                  </div>

                  <h3 className="text-sm font-bold text-textPrimary tracking-tight mb-2 font-sans">
                    {item.title}
                  </h3>

                  <p className="text-xs text-textSecondary leading-relaxed font-sans mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-border/60">
                  <ul className="space-y-1.5 text-[11px] font-sans text-textPrimary">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-textSecondary text-[10px]">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Expand / Collapse Full 8-Phase Methodology */}
        <div className="text-center space-y-6">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setShowFullMethodology(!showFullMethodology)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface border border-border hover:border-zinc-400 rounded-full text-xs font-sans font-semibold uppercase tracking-wider text-textPrimary hover:text-primary transition-all shadow-sm cursor-pointer"
            >
              <span>{showFullMethodology ? "Collapse Detailed Phases" : "View Full 8-Phase Methodology"}</span>
              {showFullMethodology ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>

            <Link
              href="/methodology"
              className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold uppercase tracking-wider text-textSecondary hover:text-primary transition-colors py-2 px-3"
            >
              <span>Explore Detailed Methodology Guide →</span>
            </Link>
          </div>

          {/* Full 8-Phase Grid on Expansion */}
          {showFullMethodology && (
            <div className="pt-8 border-t border-border/80 animate-fade-in text-left">
              <div className="max-w-2xl mx-auto text-center mb-8">
                <span className="text-[10px] font-mono text-primary uppercase tracking-widest font-bold block mb-1">
                  Comprehensive 8-Phase Execution Matrix
                </span>
                <h4 className="text-lg font-bold text-textPrimary font-sans">
                  The End-to-End Practitioner Lifecycle
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {ASSESSMENT_PROCESS_STEPS.map((step, i) => {
                  const Icon = fullPhaseIcons[i] || Search;
                  return (
                    <div 
                      key={step.phase}
                      className="bg-surface border border-border p-6 rounded-2xl relative shadow-sm"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-9 h-9 bg-background border border-border rounded-xl flex items-center justify-center text-primary">
                          <Icon size={16} />
                        </div>
                        <span className="text-xs font-mono font-bold text-blue-800 px-2 py-0.5 bg-blue-50 border border-blue-200/80 rounded">
                          Phase {step.phase}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-textPrimary mb-2 font-sans">
                        {step.title}
                      </h4>
                      <p className="text-xs text-textSecondary leading-relaxed font-sans">
                        {step.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
