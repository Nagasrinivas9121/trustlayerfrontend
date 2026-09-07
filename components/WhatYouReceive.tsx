"use client";

import React from "react";
import Link from "next/link";
import { 
  FileText, 
  Code2, 
  ShieldCheck, 
  FileCheck2, 
  Terminal, 
  CheckCircle2, 
  ArrowRight, 
  Calendar 
} from "lucide-react";

const deliverables = [
  {
    title: "Executive Risk Summary",
    subtitle: "For Founders, Board & Enterprise Buyers",
    description: "High-level risk posture summary translating technical vulnerabilities into clear business, compliance, and revenue risk contexts.",
    icon: FileText,
    badge: "Leadership & Sales"
  },
  {
    title: "Detailed Technical Findings",
    subtitle: "Detailed Technical Findings & Severity Ratings",
    description: "Comprehensive vulnerability catalog with affected endpoints, authorization scopes, root-cause analysis, and threat severity ratings.",
    icon: Terminal,
    badge: "Engineering Deep-Dive"
  },
  {
    title: "Reproducible Proof-of-Concepts",
    subtitle: "Step-by-Step Exploit Payloads",
    description: "Exact curl commands, HTTP request payloads, and reproduction scripts so your engineering team can independently verify the attack path.",
    icon: Code2,
    badge: "PoC & Reproduction"
  },
  {
    title: "Developer-Ready Remediation Guidance",
    subtitle: "Code Fixes & Config Guidance",
    description: "Actionable code snippets (Node, Python, Go, Java), framework configurations, and architectural recommendations to patch root causes.",
    icon: CheckCircle2,
    badge: "Remediation Support"
  },
  {
    title: "Retest & Verification",
    subtitle: "Within 30 Days of Remediation",
    description: "Collaborative debrief with your developers, retesting of applied patches, and validation that fixed endpoints cannot be bypassed.",
    icon: ShieldCheck,
    badge: "Included Free"
  },
  {
    title: "Final Security Assessment Report",
    subtitle: "Auditor & Customer Ready",
    description: "Formal, signed VAPT assessment report and Retest Verification summary suitable for enterprise vendor onboarding, SOC 2, and ISO 27001 readiness.",
    icon: FileCheck2,
    badge: "Compliance Deliverable"
  }
];

export default function WhatYouReceive() {
  return (
    <section className="py-24 bg-background border-t border-border relative" id="deliverables">
      {/* Radial Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="section-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-6">
            <span>Engagement Deliverables</span>
          </div>
          <h2 className="heading-2 mb-6 font-sans">
            What You <span className="text-primary">Receive</span>
          </h2>
          <p className="body-text text-textSecondary font-sans max-w-2xl mx-auto">
            Tangible, developer-ready deliverables designed to help your team fix vulnerabilities quickly and give enterprise buyers verifiable proof of security.
          </p>
        </div>

        {/* 6 Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {deliverables.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="premium-card p-8 bg-surface border border-border/80 hover:border-zinc-400 transition-all rounded-2xl flex flex-col justify-between shadow-sm relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full pointer-events-none group-hover:bg-primary/10 transition-colors" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-sm">
                      <Icon size={22} />
                    </div>
                    <span className="px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider bg-background border border-border text-primary rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-textPrimary tracking-tight font-sans mb-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-[11px] font-semibold text-primary uppercase tracking-wider font-sans mb-3">
                    {item.subtitle}
                  </p>

                  <p className="text-xs text-textSecondary leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-border/40 flex items-center gap-2 text-[11px] font-mono text-textSecondary uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>Verified Standard Deliverable</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Deliverables Action Callout */}
        <div className="max-w-4xl mx-auto p-8 bg-surface border border-border rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-bold text-textPrimary uppercase tracking-wider font-sans">
              Need a Custom Scoping Review?
            </h4>
            <p className="text-xs text-textSecondary font-sans">
              We review your target architecture, API surface, and compliance requirements under mutual NDA.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0 w-full sm:w-auto">
            <Link
              href="/free-assessment"
              className="w-full sm:w-auto text-center py-2.5 px-5 bg-primary hover:bg-primary/90 text-white text-xs uppercase font-sans font-bold tracking-wider rounded-full shadow-sm transition-all"
            >
              Request Assessment
            </Link>
            <Link
              href="/sample-report"
              className="w-full sm:w-auto text-center py-2.5 px-5 bg-background border border-border hover:border-zinc-400 text-xs uppercase font-sans font-semibold tracking-wider rounded-full text-textPrimary hover:text-primary transition-all"
            >
              View Sample Report
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
