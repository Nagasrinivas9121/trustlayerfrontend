"use client";

import React, { useState } from "react";
import { CASE_STUDIES } from "@/lib/constants";
import { ArrowRight, ShieldCheck, Database, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function CaseStudy() {
  const [activeIdx, setActiveIdx] = useState(0);
  const currentCase = CASE_STUDIES[activeIdx];

  return (
    <section className="py-24 bg-background border-y border-border relative" id="scenarios">
      <div className="section-container">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-6">
              <span>Technical Knowledge Base</span>
            </div>
            <h2 className="heading-2 mb-4 font-sans">
              Illustrative <span className="text-primary">Security Scenarios</span>
            </h2>
            <p className="body-text text-textSecondary font-sans">
              Technical breakdowns of real-world vulnerability patterns, exploit vectors, and recommended engineering fixes.
            </p>
          </div>

          {/* Tabs Selector */}
          <div className="flex overflow-x-auto max-w-full scrollbar-none space-x-2 p-1 bg-surface border border-border rounded-xl self-start md:self-auto font-sans text-xs font-semibold uppercase tracking-wider shadow-sm whitespace-nowrap">
            {CASE_STUDIES.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`px-4 py-2 rounded-lg transition-all flex-shrink-0 ${
                  activeIdx === idx 
                    ? "bg-primary text-white shadow-sm" 
                    : "text-textSecondary hover:text-textPrimary"
                }`}
              >
                {item.category}
              </button>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="p-3.5 bg-amber-500/5 border border-amber-500/20 rounded-xl mb-8 flex items-start gap-2.5">
          <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-textSecondary font-sans leading-relaxed">
            <strong className="text-textPrimary font-semibold">Educational Scenario:</strong> This is an illustrative scenario designed to explain a security risk. It does not represent a specific TrustLayerLabs customer engagement.
          </p>
        </div>

        {/* Case Study Body */}
        <div className="premium-card p-8 md:p-12 border border-border relative overflow-hidden bg-surface shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-sans font-bold text-textSecondary uppercase tracking-wider flex items-center gap-1.5 mb-2.5">
                  <Database size={12} className="text-primary" /> CATEGORY: {currentCase.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-textPrimary leading-tight font-sans tracking-tight">
                  {currentCase.title}
                </h3>
              </div>

              <div className="space-y-5">
                <div>
                  <span className="text-xs font-bold font-sans text-textSecondary uppercase tracking-wider mb-1.5 block">
                    Scenario Context
                  </span>
                  <p className="text-xs text-textSecondary leading-relaxed font-sans">
                    {currentCase.problem}
                  </p>
                </div>

                <div>
                  <span className="text-xs font-bold font-sans text-primary uppercase tracking-wider mb-1.5 block">
                    Vulnerability Vector & Exploit Analysis
                  </span>
                  <p className="text-xs font-mono bg-background text-textPrimary p-4 rounded-xl border border-border leading-relaxed">
                    {currentCase.exploit}
                  </p>
                </div>

                <div>
                  <span className="text-xs font-bold font-sans text-warning uppercase tracking-wider mb-1.5 block">
                    Potential Risk Impact
                  </span>
                  <p className="text-xs text-textSecondary leading-relaxed font-sans">
                    {currentCase.impact}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-5 space-y-6 lg:border-l lg:border-border/60 lg:pl-10 h-full flex flex-col justify-between">
              
              <div className="p-6 bg-primary/5 border border-primary/20 rounded-xl space-y-4">
                <div className="text-xs font-bold font-sans text-primary uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-primary" /> Recommended Engineering Fix
                </div>
                <p className="text-xs text-textPrimary leading-relaxed font-medium font-sans">
                  {currentCase.fix}
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-background border border-border rounded-xl space-y-2 font-sans text-xs">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-textSecondary block">
                    Mitigation Pattern
                  </span>
                  <p className="text-xs text-textPrimary font-sans">
                    {currentCase.mitigationStrategy || "Strict server-side validation and access controls."}
                  </p>
                </div>

                <div>
                  <span className="text-xs font-bold font-sans text-textSecondary uppercase tracking-wider block mb-2">
                    Technologies Analyzed:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentCase.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-0.5 bg-background border border-border rounded text-[10px] font-mono text-textPrimary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link 
                  href="/case-studies"
                  className="w-full inline-flex items-center justify-center py-3 bg-surface border border-border hover:border-zinc-400 text-xs uppercase font-sans font-semibold tracking-wider rounded-xl text-textPrimary hover:text-primary shadow-sm transition-all group"
                >
                  View All Illustrative Scenarios <ArrowRight size={13} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
