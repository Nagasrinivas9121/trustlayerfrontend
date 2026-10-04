"use client";

import React from "react";
import Link from "next/link";
import { Check, X, Shield, ArrowRight, UserCheck, Bot } from "lucide-react";

import { trackSampleReportClick } from "@/lib/analytics";

export default function ManualTestingMatters() {
  return (
    <section className="py-24 bg-background border-t border-border relative" id="manual-testing">
      {/* Background Radial Glow */}
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="section-container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-6">
            <UserCheck size={12} className="text-primary" />
            <span>Human Reasoning vs Automated Scanners</span>
          </div>
          <h2 className="heading-2 mb-6 font-sans">
            Scanners Find Signatures. <br className="hidden md:inline" />
            <span className="text-primary">Manual Testing Uncovers Logic Flaws.</span>
          </h2>
          <p className="body-text text-textSecondary font-sans">
            Automated tools provide fast baseline scans for known CVEs. However, critical vulnerabilities in modern SaaS, FinTech, and AI applications reside in business logic, authorization boundaries, and multi-step workflows.
          </p>
        </div>

        {/* Comparison Table / Two Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Automated Scanners Column */}
          <div className="premium-card p-8 bg-surface border border-border/80 rounded-2xl flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center text-textSecondary">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-textPrimary font-sans">Automated Vulnerability Scanners</h3>
                  <span className="text-[11px] font-mono text-textSecondary uppercase tracking-wider">Fast Baseline Coverage</span>
                </div>
              </div>

              <p className="text-xs text-textSecondary leading-relaxed font-sans mb-6">
                Useful for broad surface checks, outdated library detection, and syntax-level signature matching.
              </p>

              <ul className="space-y-3 border-t border-border/60 pt-5">
                <li className="text-xs text-textSecondary flex items-start gap-2.5">
                  <Check size={14} className="text-success mt-0.5 flex-shrink-0" />
                  <span>Rapid detection of known CVEs and outdated software packages</span>
                </li>
                <li className="text-xs text-textSecondary flex items-start gap-2.5">
                  <Check size={14} className="text-success mt-0.5 flex-shrink-0" />
                  <span>Basic port scanning and SSL/TLS configuration reviews</span>
                </li>
                <li className="text-xs text-textSecondary flex items-start gap-2.5">
                  <X size={14} className="text-critical mt-0.5 flex-shrink-0" />
                  <span>Cannot reason through multi-step business logic or workflow rules</span>
                </li>
                <li className="text-xs text-textSecondary flex items-start gap-2.5">
                  <X size={14} className="text-critical mt-0.5 flex-shrink-0" />
                  <span>Blind to object-level authorization (BOLA/IDOR) across user tenants</span>
                </li>
                <li className="text-xs text-textSecondary flex items-start gap-2.5">
                  <X size={14} className="text-critical mt-0.5 flex-shrink-0" />
                  <span>Cannot determine if an AI/RAG system leaks protected context</span>
                </li>
                <li className="text-xs text-textSecondary flex items-start gap-2.5">
                  <X size={14} className="text-critical mt-0.5 flex-shrink-0" />
                  <span>High false-positive rate requiring heavy developer triage overhead</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-border/40 mt-6">
              <span className="text-[11px] font-mono text-textSecondary block">
                Best used for: Scheduled CI/CD syntax checks & dependency monitoring
              </span>
            </div>
          </div>

          {/* Manual Human-Led Testing Column */}
          <div className="premium-card p-8 bg-surface border-2 border-primary/40 rounded-2xl flex flex-col justify-between shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 px-3 py-1 bg-primary text-white text-[10px] font-mono font-bold uppercase tracking-wider rounded-bl-xl">
              TrustLayerLabs Approach
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <UserCheck size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-textPrimary font-sans">Human-Led Penetration Testing</h3>
                  <span className="text-[11px] font-mono text-primary uppercase tracking-wider">Context & Architecture-Driven</span>
                </div>
              </div>

              <p className="text-xs text-textSecondary leading-relaxed font-sans mb-6">
                Offensive security practitioners actively testing the critical attack paths that require human reasoning:
              </p>

              <ul className="space-y-3 border-t border-border/60 pt-5">
                <li className="text-xs text-textPrimary flex items-start gap-2.5">
                  <Check size={14} className="text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>Can User A access User B&apos;s data?</strong> Probing object-level authorization (BOLA/IDOR) on every resource parameter</span>
                </li>
                <li className="text-xs text-textPrimary flex items-start gap-2.5">
                  <Check size={14} className="text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>Can one tenant access another tenant?</strong> Validating database row-level boundaries and ORM scoping in SaaS</span>
                </li>
                <li className="text-xs text-textPrimary flex items-start gap-2.5">
                  <Check size={14} className="text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>Can auth boundaries be bypassed?</strong> Testing JWT session handling, token forging & privilege escalation</span>
                </li>
                <li className="text-xs text-textPrimary flex items-start gap-2.5">
                  <Check size={14} className="text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>Can a workflow be manipulated?</strong> Testing multi-step order logic, race conditions & approval bypasses</span>
                </li>
                <li className="text-xs text-textPrimary flex items-start gap-2.5">
                  <Check size={14} className="text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>Can an AI/RAG system expose protected data?</strong> Probing vector store scoping and prompt injection</span>
                </li>
                <li className="text-xs text-textPrimary flex items-start gap-2.5">
                  <Check size={14} className="text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>Verified PoCs & 30-Day Retest:</strong> Developer-ready reproduction scripts and patch verification included</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-border/40 mt-6">
              <Link 
                href="/sample-report"
                onClick={() => trackSampleReportClick("manual_testing_card")}
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase font-sans tracking-wider text-primary hover:underline"
              >
                <span>View Sample Report →</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
