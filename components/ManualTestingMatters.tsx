"use client";

import React from "react";
import Link from "next/link";
import { Check, X, Shield, ArrowRight, UserCheck, Bot } from "lucide-react";

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
            <span>Methodology Comparison</span>
          </div>
          <h2 className="heading-2 mb-6 font-sans">
            Why Human-Led Testing <span className="text-primary">Finds What Scanners Miss</span>
          </h2>
          <p className="body-text text-textSecondary font-sans">
            Automated tools provide fast baseline scans for known CVEs. However, critical vulnerabilities in modern apps reside in business logic, authorization, and workflows.
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
                  <span>Rapid detection of known CVEs and outdated packages</span>
                </li>
                <li className="text-xs text-textSecondary flex items-start gap-2.5">
                  <Check size={14} className="text-success mt-0.5 flex-shrink-0" />
                  <span>Basic port scanning and SSL/TLS cipher reviews</span>
                </li>
                <li className="text-xs text-textSecondary flex items-start gap-2.5">
                  <X size={14} className="text-critical mt-0.5 flex-shrink-0" />
                  <span>Cannot understand multi-step business logic or workflow rules</span>
                </li>
                <li className="text-xs text-textSecondary flex items-start gap-2.5">
                  <X size={14} className="text-critical mt-0.5 flex-shrink-0" />
                  <span>Blind to object-level authorization (BOLA/IDOR) across user roles</span>
                </li>
                <li className="text-xs text-textSecondary flex items-start gap-2.5">
                  <X size={14} className="text-critical mt-0.5 flex-shrink-0" />
                  <span>High false-positive rate requiring heavy developer triage time</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-border/40 mt-6">
              <span className="text-[11px] font-mono text-textSecondary block">
                Best used for: CI/CD baseline scans & dependency monitoring
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
                Certified security architects actively analyzing session contexts, tenant boundaries, and multi-role API parameters.
              </p>

              <ul className="space-y-3 border-t border-border/60 pt-5">
                <li className="text-xs text-textPrimary flex items-start gap-2.5">
                  <Check size={14} className="text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>BOLA / IDOR Testing:</strong> Verifying whether User A can query User B&apos;s data</span>
                </li>
                <li className="text-xs text-textPrimary flex items-start gap-2.5">
                  <Check size={14} className="text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>Business-Logic Flaws:</strong> Testing discount stacking, transaction flows & race conditions</span>
                </li>
                <li className="text-xs text-textPrimary flex items-start gap-2.5">
                  <Check size={14} className="text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>Multi-Tenant Isolation:</strong> Validating database row-level boundaries in SaaS</span>
                </li>
                <li className="text-xs text-textPrimary flex items-start gap-2.5">
                  <Check size={14} className="text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>Validated Findings:</strong> Every finding is manually validated with reproducible PoC scripts and code fixes</span>
                </li>
                <li className="text-xs text-textPrimary flex items-start gap-2.5">
                  <Check size={14} className="text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>Retesting Verification:</strong> Verifying deployed patches before issuing the final verification letter</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-border/40 mt-6">
              <Link 
                href="/sample-report"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase font-sans tracking-wider text-primary hover:underline"
              >
                <span>See PoC reproduction in our Sample Report</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
