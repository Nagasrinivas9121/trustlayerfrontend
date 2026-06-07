"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { CASE_STUDIES } from "@/lib/constants";

export default function CaseStudiesPage() {
  return (
    <div className="bg-background min-h-screen">
      <main className="pt-32 pb-24 font-sans text-textPrimary">
        <div className="section-container">
          
          {/* Breadcrumb & Header */}
          <div className="mb-16">
            <Link 
              href="/" 
              className="inline-flex items-center text-xs uppercase font-sans tracking-widest text-textSecondary hover:text-textPrimary transition-colors gap-2 mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
              Back to Home
            </Link>

            <h1 className="heading-1 mb-6 text-textPrimary font-extrabold font-sans tracking-tight">
              Technical <span className="text-primary">Audit Portfolios</span>
            </h1>
            <p className="body-text text-base max-w-3xl text-textSecondary">
              Deep dive reports detailing critical logic bugs discovered during our VAPT audits and secure validation patches implemented for client builds.
            </p>
          </div>

          {/* Cards List */}
          <div className="space-y-12">
            {CASE_STUDIES.map((item, i) => (
              <div 
                key={item.slug}
                className="premium-card p-8 md:p-12 relative overflow-hidden bg-surface border border-border rounded-2xl shadow-sm"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  
                  {/* Left Main Details */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-0.5 bg-primary/10 border border-primary/20 text-[9px] font-bold uppercase font-sans tracking-wider text-primary rounded-md">
                        {item.category}
                      </span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-extrabold text-textPrimary leading-snug font-sans tracking-tight">
                      {item.title}
                    </h2>

                    <div className="space-y-4 text-xs font-sans">
                      <div>
                        <span className="text-[10px] font-bold font-sans text-textSecondary uppercase tracking-wider block mb-1">
                          The Scoping Challenge:
                        </span>
                        <p className="text-textSecondary leading-relaxed">
                          {item.problem}
                        </p>
                      </div>

                      <div>
                        <span className="text-[10px] font-bold font-sans text-primary uppercase tracking-wider block mb-1">
                          Control Gap Analysis:
                        </span>
                        <p className="font-mono bg-zinc-50 border border-border text-textPrimary p-4 rounded-xl leading-relaxed">
                          {item.exploit}
                        </p>
                      </div>

                      <div>
                        <span className="text-[10px] font-bold font-sans text-warning uppercase tracking-wider block mb-1">
                          Calculated Exposure:
                        </span>
                        <p className="text-textSecondary leading-relaxed">
                          {item.impact}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Metrics & Fix Details */}
                  <div className="lg:col-span-5 space-y-6 lg:border-l lg:border-border/40 lg:pl-8 flex flex-col justify-between">
                    
                    <div className="p-5 bg-primary/5 border border-primary/20 rounded-xl space-y-3 font-sans">
                      <h4 className="text-[10px] font-bold font-sans text-primary uppercase tracking-wider flex items-center gap-1.5">
                        <ShieldCheck size={14} className="text-primary" /> Applied Solution Patch
                      </h4>
                      <p className="text-xs text-textPrimary leading-relaxed font-semibold">
                        {item.fix}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 border-y border-border/40 py-4 text-xs font-sans">
                        <div>
                          <span className="text-[9px] uppercase tracking-wider text-textSecondary block mb-1">Audit Metric:</span>
                          <span className="text-success font-bold font-sans uppercase tracking-wide block">{item.metrics}</span>
                        </div>
                        <div>
                          <span className="text-[9px] uppercase tracking-wider text-textSecondary block mb-1">Business Impact:</span>
                          <span className="text-textPrimary font-bold block">{item.results}</span>
                        </div>
                      </div>

                      <div>
                        <span className="text-[10px] font-bold font-sans text-textSecondary uppercase tracking-wider block mb-2">
                          Environment Scope:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {item.technologies.map((tech) => (
                            <span 
                              key={tech} 
                              className="px-2 py-0.5 bg-zinc-100 border border-border rounded-md text-[9px] font-mono text-textPrimary"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <Link 
                        href="/contact"
                        className="w-full inline-flex items-center justify-center py-3 bg-primary hover:bg-primary-hover text-xs uppercase font-sans font-semibold tracking-wider rounded-lg text-white shadow-sm transition-all"
                      >
                        Schedule Similar Audit
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}
