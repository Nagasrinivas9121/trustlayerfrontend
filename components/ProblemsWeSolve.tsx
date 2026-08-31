"use client";

import React from "react";
import { PROBLEMS_WE_SOLVE } from "@/lib/constants";
import { AlertCircle, ShieldAlert, Key, Workflow, Database, CloudCog, FileCheck } from "lucide-react";

const icons = [Key, ShieldAlert, Workflow, Database, CloudCog, FileCheck];

export default function ProblemsWeSolve() {
  return (
    <section className="py-24 bg-background border-t border-border relative" id="problems-we-solve">
      <div className="section-container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-critical uppercase tracking-wider mb-6">
            <AlertCircle size={12} className="text-critical" />
            <span>High-Impact Vulnerability Vectors</span>
          </div>
          <h2 className="heading-2 mb-6 font-sans">
            Real Security Challenges <span className="text-primary">We Identify & Prevent</span>
          </h2>
          <p className="body-text text-textSecondary font-sans">
            Automated tools often miss subtle architectural and authorization flaws. We manually probe these critical failure points.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROBLEMS_WE_SOLVE.map((problem, idx) => {
            const Icon = icons[idx] || AlertCircle;
            const isCritical = problem.severity === "Critical";
            const badgeClass = isCritical
              ? "bg-critical/10 text-critical border-critical/25"
              : problem.severity === "High"
              ? "bg-warning/10 text-warning border-warning/25"
              : "bg-primary/10 text-primary border-primary/25";

            return (
              <div 
                key={problem.title}
                className="premium-card p-7 bg-surface border border-border rounded-2xl flex flex-col justify-between hover:border-zinc-400 transition-all duration-300 shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center text-primary shadow-sm">
                      <Icon size={18} />
                    </div>
                    <span className={`px-2 py-0.5 text-[10px] font-sans font-bold uppercase tracking-wider border rounded-md ${badgeClass}`}>
                      {problem.severity} Risk
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-textPrimary tracking-tight font-sans mb-2.5">
                    {problem.title}
                  </h3>

                  <p className="text-xs text-textSecondary leading-relaxed font-sans mb-5">
                    {problem.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/60">
                  <span className="text-[11px] font-mono text-textPrimary block">
                    <strong className="text-textSecondary uppercase text-[9px] block mb-0.5 tracking-wider">Potential Impact:</strong>
                    {problem.impact}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
