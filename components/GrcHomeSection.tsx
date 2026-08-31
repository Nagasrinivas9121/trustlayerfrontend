"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, CheckCircle2, ArrowRight, FileText, Calendar, Building2, Lock } from "lucide-react";

export default function GrcHomeSection() {
  return (
    <section className="py-24 bg-background border-t border-border relative" id="grc-readiness-section">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-primary/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="section-container">
        
        <div className="premium-card p-8 md:p-14 bg-surface border border-border rounded-3xl relative overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-background border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider">
                <Building2 size={12} className="text-primary" />
                <span>Enterprise Deal Acceleration</span>
              </div>

              <h2 className="heading-2 font-sans">
                Security That Supports <br />
                <span className="text-primary">Enterprise Customer Readiness</span>
              </h2>

              <p className="text-sm text-textSecondary leading-relaxed font-sans">
                Closing enterprise SaaS contracts requires both deep technical security testing and structured governance. We bridge the gap between engineering controls and buyer compliance expectations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  { title: "SOC 2 Technical Readiness", desc: "Penetration test reports & controls mapping aligned to CC6.1–CC6.3 requirements." },
                  { title: "ISO 27001 Gap Analysis", desc: "Annex A technical control audits and risk register development." },
                  { title: "Security Policy Development", desc: "Custom, audit-ready policies tailored to your actual tech stack and workflows." },
                  { title: "Vendor Security Questionnaires", desc: "Assisting founders and CTOs with enterprise procurement questionnaires." }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 bg-background border border-border/80 rounded-xl space-y-1.5">
                    <h4 className="text-xs font-bold text-textPrimary font-sans flex items-center gap-1.5">
                      <CheckCircle2 size={13} className="text-primary flex-shrink-0" />
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-textSecondary leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-3.5 bg-background border border-border/60 rounded-xl text-[11px] text-textSecondary font-sans leading-normal">
                <strong className="text-textPrimary font-semibold">Governance & Advisory Notice:</strong> TrustLayerLabs provides technical assessments, control mapping, and readiness advisory. Formal SOC 2 attestations and ISO certificates are issued by accredited external CPA/certification firms.
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link 
                  href="/grc-readiness"
                  className="px-6 py-2.5 bg-background border border-border hover:border-zinc-400 text-xs uppercase font-sans font-bold tracking-wider rounded-lg text-textPrimary hover:text-primary transition-all flex items-center gap-2"
                >
                  <span>Explore GRC Readiness</span>
                  <ArrowRight size={13} className="text-primary" />
                </Link>

                <Link 
                  href="https://calendar.app.google/jnamj3gawxVunPJm9"
                  target="_blank"
                  className="px-6 py-2.5 bg-primary hover:bg-primary-hover text-white text-xs uppercase font-sans font-bold tracking-wider rounded-lg transition-all flex items-center gap-2 shadow-sm"
                >
                  <Calendar size={13} />
                  <span>Book Readiness Call</span>
                </Link>
              </div>
            </div>

            {/* Right Card Graphic: Deliverables */}
            <div className="lg:col-span-5 bg-background border border-border p-6 rounded-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-border">
                <div className="flex items-center gap-2">
                  <Lock size={15} className="text-primary" />
                  <span className="text-xs font-bold text-textPrimary font-sans uppercase tracking-wider">Assessment Deliverables</span>
                </div>
                <span className="text-[10px] font-mono font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">Standard Package</span>
              </div>

              <div className="space-y-3 font-sans">
                {[
                  { step: "01", name: "Penetration Testing Report", format: "Findings + PoCs" },
                  { step: "02", name: "Executive Security Summary", format: "Business Context" },
                  { step: "03", name: "Technical Controls Gap Review", format: "Where in Scope" },
                  { step: "04", name: "Retest Verification Letter", format: "Post-Remediation" }
                ].map((doc, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-surface border border-border/70 rounded-xl text-xs">
                    <div className="flex items-center gap-2.5">
                      <span className="text-[10px] font-mono font-bold text-primary">{doc.step}</span>
                      <span className="text-textPrimary font-medium text-xs">{doc.name}</span>
                    </div>
                    <span className="text-[10px] font-mono text-textSecondary uppercase">{doc.format}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-center">
                <Link 
                  href="/sample-report"
                  className="text-xs font-sans text-textSecondary hover:text-primary uppercase tracking-wider font-semibold transition-colors inline-flex items-center gap-1"
                >
                  <FileText size={12} />
                  <span>View Sample Report Layout →</span>
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
