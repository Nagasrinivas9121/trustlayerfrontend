"use client";

import React, { useState } from "react";
import { CASE_STUDIES } from "@/lib/constants";
import { ArrowRight, CheckSquare, Database } from "lucide-react";
import Link from "next/link";

export default function CaseStudy() {
  const [activeIdx, setActiveIdx] = useState(0);
  const currentCase = CASE_STUDIES[activeIdx];

  return (
    <section className="py-24 bg-background border-y border-border relative" id="cases">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="section-container">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-6">
              <span>Security Portfolio</span>
            </div>
            <h2 className="heading-2 mb-6 font-sans">
              Battle-Tested <span className="text-primary">VAPT Case Studies</span>
            </h2>
            <p className="body-text text-textSecondary">
              Real-world vulnerability highlights discovered by our team and fixed for scaling tech platforms.
            </p>
          </div>

          {/* Tabs Selector */}
          <div className="flex space-x-2 p-1 bg-surface border border-border rounded-xl self-start md:self-auto font-sans text-xs font-semibold uppercase tracking-wider shadow-sm">
            {CASE_STUDIES.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`px-4 py-2 rounded-lg transition-all ${
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

        {/* Case Study Body */}
        <div className="premium-card p-8 md:p-12 border border-border relative overflow-hidden bg-surface shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-xs font-sans font-bold text-textSecondary uppercase tracking-wider flex items-center gap-1.5 mb-2.5">
                  <Database size={12} className="text-primary" /> TARGET INFRASTRUCTURE: {currentCase.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-textPrimary leading-tight font-sans tracking-tight">
                  {currentCase.title}
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold font-sans text-textSecondary uppercase tracking-wider mb-1.5 block">
                    The Problem
                  </span>
                  <p className="text-sm text-textSecondary leading-relaxed font-sans">
                    {currentCase.problem}
                  </p>
                </div>

                <div>
                  <span className="text-xs font-bold font-sans text-primary uppercase tracking-wider mb-1.5 block">
                    Control Gap Analysis
                  </span>
                  <p className="text-sm font-mono bg-background text-textPrimary p-4 rounded-xl border border-border leading-relaxed">
                    {currentCase.exploit}
                  </p>
                </div>

                <div>
                  <span className="text-xs font-bold font-sans text-warning uppercase tracking-wider mb-1.5 block">
                    Business Impact
                  </span>
                  <p className="text-sm text-textSecondary leading-relaxed font-sans">
                    {currentCase.impact}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-5 space-y-6 lg:border-l lg:border-border/60 lg:pl-10 h-full flex flex-col justify-between">
              
              <div className="p-6 bg-primary/5 border border-primary/20 rounded-xl space-y-4">
                <div className="text-xs font-bold font-sans text-primary uppercase tracking-wider flex items-center gap-1.5">
                  <CheckSquare size={13} className="text-primary" /> Security Improvement & Fix
                </div>
                <p className="text-sm text-textPrimary leading-relaxed font-semibold font-sans">
                  {currentCase.fix}
                </p>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 border-y border-border/40 py-4 text-sm font-sans">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-textSecondary block mb-1">Impact Metric:</span>
                    <span className="text-sm text-success font-bold font-sans uppercase tracking-wide block">{currentCase.metrics}</span>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-textSecondary block mb-1">Key Results:</span>
                    <span className="text-sm text-textPrimary font-bold block">{currentCase.results}</span>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-bold font-sans text-textSecondary uppercase tracking-wider block mb-2">
                    Technologies Audited:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentCase.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-0.5 bg-background border border-border rounded text-xs font-mono text-textPrimary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link 
                  href="/case-studies"
                  className="w-full inline-flex items-center justify-center py-3.5 bg-primary hover:bg-primary-hover text-sm uppercase font-sans font-semibold tracking-wider rounded-lg text-white shadow-sm transition-all group"
                >
                  View All Technical Portfolios <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
