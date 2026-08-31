"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, AlertTriangle, CheckCircle2, Code2, Terminal } from "lucide-react";
import { CASE_STUDIES } from "@/lib/constants";

export default function CaseStudiesPage() {
  return (
    <div className="bg-background min-h-screen">
      <main className="pt-32 pb-24 font-sans text-textPrimary">
        <div className="section-container">
          
          {/* Breadcrumb & Header */}
          <div className="mb-12">
            <Link 
              href="/" 
              className="inline-flex items-center text-xs uppercase font-sans tracking-widest text-textSecondary hover:text-textPrimary transition-colors gap-2 mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
              Back to Home
            </Link>

            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-6">
              <Code2 size={13} className="text-primary" />
              <span>Technical Security Knowledge Base</span>
            </div>

            <h1 className="heading-1 mb-6 text-textPrimary font-extrabold font-sans tracking-tight">
              Illustrative <span className="text-primary">Security Scenarios</span>
            </h1>
            <p className="body-text text-base max-w-3xl text-textSecondary font-sans">
              Educational breakdowns of common authorization flaws, authentication bypasses, and cloud misconfigurations observed in modern tech platforms, along with developer remediation patterns.
            </p>
          </div>

          {/* Prominent Credibility Disclaimer */}
          <div className="p-4 bg-amber-500/5 border border-amber-500/20 rounded-xl mb-12 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-textSecondary leading-relaxed font-sans">
              <strong className="text-textPrimary font-semibold">Educational Notice:</strong> These are illustrative security scenarios designed to explain vulnerability vectors, exploit mechanisms, and remediation patterns. They do not represent specific TrustLayerLabs customer engagements or confidential data.
            </p>
          </div>

          {/* Cards List */}
          <div className="space-y-10">
            {CASE_STUDIES.map((item, i) => (
              <div 
                key={item.slug}
                className="premium-card p-8 md:p-10 relative overflow-hidden bg-surface border border-border rounded-2xl shadow-sm hover:border-zinc-400 transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Main Details */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="px-2.5 py-0.5 bg-primary/10 border border-primary/20 text-[10px] font-bold uppercase font-mono tracking-wider text-primary rounded-md">
                        {item.category}
                      </span>
                      <span className="px-2.5 py-0.5 bg-red-500/10 border border-red-500/20 text-[10px] font-bold uppercase font-mono tracking-wider text-red-600 rounded-md">
                        {item.vulnerabilityClass || "Vulnerability Vector"}
                      </span>
                    </div>

                    <h2 className="text-xl md:text-2xl font-bold text-textPrimary leading-snug font-sans tracking-tight">
                      {item.title}
                    </h2>

                    <div className="space-y-4 text-xs font-sans">
                      <div>
                        <span className="text-[10px] font-bold font-sans text-textSecondary uppercase tracking-wider block mb-1">
                          Scenario & Architecture Context:
                        </span>
                        <p className="text-textSecondary leading-relaxed font-sans">
                          {item.problem}
                        </p>
                      </div>

                      <div>
                        <span className="text-[10px] font-bold font-sans text-primary uppercase tracking-wider block mb-1">
                          Vulnerability Vector & Exploit Path:
                        </span>
                        <p className="font-mono bg-background border border-border text-textPrimary p-3.5 rounded-xl leading-relaxed text-xs">
                          {item.exploit}
                        </p>
                      </div>

                      <div>
                        <span className="text-[10px] font-bold font-sans text-warning uppercase tracking-wider block mb-1">
                          Potential Impact & Risk Exposure:
                        </span>
                        <p className="text-textSecondary leading-relaxed font-sans">
                          {item.impact}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Remediation Details */}
                  <div className="lg:col-span-5 space-y-6 lg:border-l lg:border-border/60 lg:pl-8 flex flex-col justify-between h-full">
                    
                    <div className="p-5 bg-primary/5 border border-primary/20 rounded-xl space-y-3 font-sans">
                      <h4 className="text-[10px] font-bold font-sans text-primary uppercase tracking-wider flex items-center gap-1.5">
                        <ShieldCheck size={14} className="text-primary" /> Recommended Engineering Fix
                      </h4>
                      <p className="text-xs text-textPrimary leading-relaxed font-medium font-sans">
                        {item.fix}
                      </p>
                    </div>

                    <div className="space-y-4 font-sans text-xs">
                      <div className="p-4 bg-background border border-border rounded-xl space-y-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-textSecondary block">
                          Mitigation Pattern:
                        </span>
                        <p className="text-xs text-textPrimary font-sans">
                          {item.mitigationStrategy || "Enforce strict server-side validation and access control."}
                        </p>
                      </div>

                      <div>
                        <span className="text-[10px] font-bold font-sans text-textSecondary uppercase tracking-wider block mb-2">
                          Associated Technologies:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {item.technologies.map((tech) => (
                            <span 
                              key={tech} 
                              className="px-2 py-0.5 bg-surface border border-border rounded-md text-[10px] font-mono text-textPrimary"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <Link 
                        href="https://calendar.app.google/jnamj3gawxVunPJm9"
                        target="_blank"
                        className="w-full inline-flex items-center justify-center py-2.5 bg-primary hover:bg-primary-hover text-xs uppercase font-sans font-bold tracking-wider rounded-xl text-white shadow-sm transition-all"
                      >
                        Book a 20-Min Security Review
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
