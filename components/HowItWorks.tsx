"use client";

import React from "react";
import { Search, ShieldCheck, FileText, CheckCircle2, RefreshCw } from "lucide-react";

const icons = [Search, ShieldCheck, FileText, RefreshCw, CheckCircle2];

const steps = [
  {
    phase: "01",
    title: "Discovery",
    description: "Initial scoping, asset discovery, architecture walkthroughs, credential handover, and threat modeling."
  },
  {
    phase: "02",
    title: "Assessment",
    description: "Deep manual logical review and compliance gaps assessment targeting access boundaries and controls."
  },
  {
    phase: "03",
    title: "Testing",
    description: "Rigorous testing of access logic, token payloads, and database boundary isolation constraints."
  },
  {
    phase: "04",
    title: "Reporting",
    description: "Compiling findings into an actionable report mapping gaps directly to SOC2 and ISO compliance controls."
  },
  {
    phase: "05",
    title: "Remediation",
    description: "Direct engineering collaboration to explain controls gaps, suggest resolutions, and review code fixes."
  },
  {
    phase: "06",
    title: "Retesting",
    description: "Manual re-validation of applied patches before issuing signed attestation badges."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-background border-t border-border relative" id="process">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="section-container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-6">
            <span>Audit Lifecycle</span>
          </div>
          <h2 className="heading-2 mb-6">
            Our Collaborative <span className="text-primary">Execution Workflow</span>
          </h2>
          <p className="body-text text-textSecondary">
            We work as an extension of your engineering team to identify gaps and verify fixes without interrupting deployment cycles.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative mt-12">
          
          {steps.map((step, i) => {
            const Icon = icons[i] || Search;
            return (
              <div 
                key={i} 
                className="flex flex-col items-center lg:items-start text-center lg:text-left bg-surface border border-border p-6 rounded-2xl relative group hover:border-zinc-400 transition-colors duration-300 shadow-sm"
              >
                {/* Step Icon */}
                <div className="w-10 h-10 bg-background border border-border rounded-xl flex items-center justify-center mb-5 shadow-sm group-hover:border-primary transition-colors">
                  <Icon size={16} className="text-primary" />
                </div>

                {/* Phase Number */}
                <span className="text-xs font-bold font-mono uppercase tracking-wider text-primary mb-2 block">
                  Phase {step.phase}
                </span>

                <h3 className="text-base font-bold text-textPrimary tracking-tight mb-2 font-sans">
                  {step.title}
                </h3>
                
                <p className="text-sm text-textSecondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
