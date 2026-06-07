"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Code, CheckCircle, AlertTriangle, FileText, ChevronRight } from "lucide-react";

export default function SecurityReportPreview() {
  const [activeTab, setActiveTab] = useState<"summary" | "vulnerabilities" | "tracking">("summary");
  
  const vulns = [
    {
      id: "TTL-2026-01",
      title: "Broken Object Level Authorization (BOLA)",
      class: "API Security",
      severity: "Critical",
      score: "9.8",
      analysis: "API routes failed to verify row-level tenancy permissions against token attributes.",
      patch: "Enforce row-level check: req.user.accountId === req.body.account_id",
      status: "Patched & Verified"
    },
    {
      id: "TTL-2026-02",
      title: "Unsigned S3 Diagnostic Attachment URLs",
      class: "Cloud Configuration",
      severity: "High",
      score: "8.2",
      analysis: "Data storage vault permitted resource URL queries without validation signature signatures.",
      patch: "Generate pre-signed URL with 15 minutes expiration limits.",
      status: "Patched & Verified"
    }
  ];

  return (
    <section className="py-24 bg-background border-t border-border relative" id="report-preview">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="section-container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-widest mb-6">
            <span>Redacted Sample Report</span>
          </div>
          <h2 className="heading-2 mb-6">
            Actionable Reports Built for <span className="text-primary">Engineering Teams</span>
          </h2>
          <p className="body-text text-base">
            No page-filler. We deliver clear, reproducible vulnerability reports containing remediation code commits, direct API payload maps, and attestation statuses.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Left Column: Report Controls / Summary */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-white font-mono uppercase tracking-widest">
                Interactive Report Preview
              </h3>
              <p className="text-xs text-textSecondary leading-relaxed font-sans">
                Review the structure of a live TrustLayer VAPT audit. Select sections on the right to examine vulnerability parameters and code fixes.
              </p>
            </div>

            {/* Selector list */}
            <div className="flex flex-col space-y-2.5 font-mono text-xs uppercase tracking-wider font-semibold">
              <button
                onClick={() => setActiveTab("summary")}
                className={`flex items-center justify-between p-4 rounded-xl border transition-all text-left ${
                  activeTab === "summary"
                    ? "bg-surface border-primary text-white"
                    : "bg-surface/30 border-border hover:border-zinc-700 text-textSecondary hover:text-white"
                }`}
              >
                <span>1. Executive Summary</span>
                <ChevronRight size={14} className={activeTab === "summary" ? "text-primary" : "text-textSecondary"} />
              </button>

              <button
                onClick={() => setActiveTab("vulnerabilities")}
                className={`flex items-center justify-between p-4 rounded-xl border transition-all text-left ${
                  activeTab === "vulnerabilities"
                    ? "bg-surface border-primary text-white"
                    : "bg-surface/30 border-border hover:border-zinc-700 text-textSecondary hover:text-white"
                }`}
              >
                <span>2. Controls & Gap Analysis</span>
                <ChevronRight size={14} className={activeTab === "vulnerabilities" ? "text-primary" : "text-textSecondary"} />
              </button>

              <button
                onClick={() => setActiveTab("tracking")}
                className={`flex items-center justify-between p-4 rounded-xl border transition-all text-left ${
                  activeTab === "tracking"
                    ? "bg-surface border-primary text-white"
                    : "bg-surface/30 border-border hover:border-zinc-700 text-textSecondary hover:text-white"
                }`}
              >
                <span>3. Remediation Checklist</span>
                <ChevronRight size={14} className={activeTab === "tracking" ? "text-primary" : "text-textSecondary"} />
              </button>
            </div>

            {/* Bottom attestation card */}
            <div className="p-4 bg-surface border border-border rounded-xl flex items-center space-x-3.5">
              <div className="w-8 h-8 rounded bg-success/15 border border-success/30 flex items-center justify-center text-success">
                <CheckCircle size={16} />
              </div>
              <div className="font-mono text-xs">
                <span className="text-white block font-bold">Scope Attestation</span>
                <span className="text-textSecondary block mt-0.5">Approved & Issued</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Preview Container */}
          <div className="lg:col-span-8 bg-surface border border-border rounded-xl p-6 md:p-8 flex flex-col justify-between min-h-[380px]">
            
            <AnimatePresence mode="wait">
              {activeTab === "summary" && (
                <motion.div
                  key="summary"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between border-b border-border/60 pb-4">
                    <div>
                      <span className="text-xs font-mono text-primary font-bold uppercase tracking-wider border border-primary/20 bg-primary/10 px-2 py-0.5 rounded">
                        Audit attestation details
                      </span>
                      <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider mt-2">
                        Ref: TTL-2026-AUDIT-SUMMARY
                      </h4>
                    </div>
                    <div className="text-right font-mono text-xs text-textSecondary">
                      <p>Date: June 2026</p>
                      <p>Class: API + Cloud Audit</p>
                    </div>
                  </div>

                  <p className="text-sm text-textSecondary leading-relaxed">
                    Our team conducted a manual logic audit and cloud security audit on the production infrastructure of the target SaaS platform. The scoping targeted multi-tenant tenant isolation, JWT validation mechanisms, pre-signed attachment configurations, and AWS IAM policies.
                  </p>

                  <div className="p-4 bg-black/40 border border-border rounded-lg space-y-2">
                    <h5 className="text-xs font-bold text-white font-mono uppercase tracking-wider">
                      Audit Scopes & Outcome:
                    </h5>
                    <ul className="space-y-1.5 text-xs text-textSecondary">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span>All REST & GraphQL endpoints reviewed manually.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span>AWS IAM configurations mapped against CIS benchmarks.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span>2 vulnerabilities discovered, patched, and verified.</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}

              {activeTab === "vulnerabilities" && (
                <motion.div
                  key="vulnerabilities"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <div className="text-xs font-mono text-textSecondary uppercase tracking-wider border-b border-border/60 pb-3">
                    Security Findings & Remediation Control Commit
                  </div>

                  <div className="space-y-4 max-h-[300px] overflow-y-auto pr-1">
                    {vulns.map((v, idx) => (
                      <div key={idx} className="p-4 bg-black/30 border border-border rounded-lg space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-bold text-white font-mono">{v.id} : {v.title}</span>
                          <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold font-mono ${
                            v.severity === "Critical" ? "bg-critical/10 border border-critical/20 text-critical" : "bg-warning/10 border border-warning/20 text-warning"
                          }`}>
                            {v.severity} ({v.score})
                          </span>
                        </div>

                        <div className="text-sm text-textSecondary font-sans leading-relaxed">
                          <span className="text-xs font-mono uppercase tracking-wider text-textSecondary block mb-0.5">Gap Analysis:</span>
                          {v.analysis}
                        </div>

                        <div className="p-3 bg-[#050505] border border-border/60 rounded font-mono text-xs text-textPrimary">
                          <div className="flex items-center gap-1.5 text-xs text-success font-bold uppercase tracking-wider mb-1.5">
                            <Code size={12} /> Applied Patch Commit:
                          </div>
                          {v.patch}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "tracking" && (
                <motion.div
                  key="tracking"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <div className="text-xs font-mono text-textSecondary uppercase tracking-wider border-b border-border/60 pb-3">
                    Remediation Tracking Checklist
                  </div>

                  <div className="space-y-3.5">
                    {[
                      { item: "Implement resource-level validation check on /v1/accounts/transfers", status: "complete" },
                      { item: "Set up private storage bucket configuration for patient diagnostic reports", status: "complete" },
                      { item: "Enforce pre-signed cookies/URLs for media download assets", status: "complete" },
                      { item: "Review and restrict IAM policy rights on developer access keys", status: "complete" }
                    ].map((row, idx) => (
                      <div key={idx} className="flex items-start justify-between p-3.5 bg-black/30 border border-border/60 rounded-xl font-mono text-xs">
                        <span className="text-textSecondary leading-relaxed pr-6">{row.item}</span>
                        <span className="flex-shrink-0 px-2 py-0.5 bg-success/15 border border-success/30 rounded text-xs font-bold text-success uppercase">
                          Patched
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="border-t border-border/60 pt-4 mt-6 text-right font-mono text-xs text-textSecondary uppercase">
              <span>Verification attestation complete.</span>
            </div>
            
          </div>
          
        </div>

      </div>
    </section>
  );
}
