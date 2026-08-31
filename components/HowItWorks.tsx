import React from "react";
import { ASSESSMENT_PROCESS_STEPS } from "@/lib/constants";
import { Search, Compass, ShieldAlert, Cpu, CheckCircle2, FileCode2, MessagesSquare, Award } from "lucide-react";

const stepIcons = [
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
  return (
    <section className="py-24 bg-background border-t border-border relative" id="process">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="section-container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-6">
            <span>Assessment Lifecycle</span>
          </div>
          <h2 className="heading-2 mb-6 font-sans">
            How Our Security <span className="text-primary">Assessments Work</span>
          </h2>
          <p className="body-text text-textSecondary font-sans">
            A transparent, 8-phase collaborative methodology designed to pinpoint deep logic flaws without slowing down your product shipping roadmap.
          </p>
        </div>

        {/* 8-Step Timeline Grid (2 rows of 4 on lg, 2 cols on sm, 1 col on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ASSESSMENT_PROCESS_STEPS.map((step, i) => {
            const Icon = stepIcons[i] || Search;
            return (
              <div 
                key={step.phase}
                className="flex flex-col justify-between bg-surface border border-border p-6 rounded-2xl relative group hover:border-zinc-400 transition-colors duration-300 shadow-sm"
              >
                <div>
                  {/* Step Icon & Phase Number */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 bg-background border border-border rounded-xl flex items-center justify-center shadow-sm group-hover:border-primary transition-colors">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <span className="text-xs font-bold font-mono uppercase tracking-wider text-primary px-2.5 py-1 bg-primary/10 rounded-md">
                      Phase {step.phase}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-textPrimary tracking-tight mb-2 font-sans">
                    {step.title}
                  </h3>
                  
                  <p className="text-xs text-textSecondary leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

