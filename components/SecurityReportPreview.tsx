"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Code, CheckCircle, AlertTriangle, FileText, ChevronRight, Info } from "lucide-react";

export default function SecurityReportPreview() {
  const [activeTab, setActiveTab] = useState<"summary" | "vulnerabilities" | "tracking">("summary");
  
  const vulns = [
    {
      id: "SAMPLE-FINDING-01",
      title: "Broken Object Level Authorization (BOLA)",
      class: "API Security",
      severity: "Critical",
      score: "9.8",
      analysis: "Illustrative example: API routes failed to verify resource-level tenancy boundaries against session claims.",
      patch: "Enforce ownership validation: req.user.accountId === req.body.account_id",
      status: "Example Retest Status: Verified"
    },
    {
      id: "SAMPLE-FINDING-02",
      title: "Direct Public Storage Bucket Access",
      class: "Cloud Infrastructure",
      severity: "High",
      score: "8.2",
      analysis: "Illustrative example: Cloud storage objects accessible without signed token parameters.",
      patch: "Generate pre-signed URLs with a 15-minute expiration limit.",
      status: "Example Retest Status: Verified"
    }
  ];

  return (
    <section className="py-24 bg-background border-t border-border relative" id="report-preview">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="section-container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-6">
            <span>Illustrative Sample</span>
          </div>
          <h2 className="heading-2 mb-4 font-sans">
            Actionable Reports Built for <span className="text-primary">Engineering Teams</span>
          </h2>
          <p className="body-text text-base text-textSecondary font-sans">
            Clear, developer-focused reports designed for efficient remediation with root-cause analysis, reproduction steps, and suggested code fixes.
          </p>
        </div>

        {/* Prominent Educational Notice */}
        <div className="max-w-5xl mx-auto p-4 bg-amber-500/5 border border-amber-500/20 rounded-2xl mb-12 flex items-start gap-3 shadow-sm">
          <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-textSecondary leading-relaxed font-sans">
            <span className="font-bold text-textPrimary uppercase tracking-wider block mb-0.5">
              ILLUSTRATIVE SAMPLE — NOT A CLIENT ENGAGEMENT
            </span>
            This sample demonstrates the structure and level of technical detail that may appear in a TrustLayerLabs security assessment. The application, findings, identifiers, and results shown here are illustrative and do not represent a customer engagement.
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Left Column: Report Controls / Summary */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-textPrimary font-mono uppercase tracking-wider">
                Sample Report Sections
              </h3>
              <p className="text-xs text-textSecondary leading-relaxed font-sans">
                Explore the structure of a TrustLayerLabs report. Select a section to view example findings and remediation guidance.
              </p>
            </div>

            {/* Selector list */}
            <div className="flex flex-col space-y-2.5 font-mono text-xs uppercase tracking-wider font-semibold">
              <button
                onClick={() => setActiveTab("summary")}
                className={`flex items-center justify-between p-4 rounded-xl border transition-all text-left ${
                  activeTab === "summary"
                    ? "bg-surface border-primary text-textPrimary shadow-sm"
                    : "bg-surface/40 border-border hover:border-zinc-400 text-textSecondary hover:text-textPrimary"
                }`}
              >
                <span>1. Executive Summary</span>
                <ChevronRight size={14} className={activeTab === "summary" ? "text-primary" : "text-textSecondary"} />
              </button>

              <button
                onClick={() => setActiveTab("vulnerabilities")}
                className={`flex items-center justify-between p-4 rounded-xl border transition-all text-left ${
                  activeTab === "vulnerabilities"
                    ? "bg-surface border-primary text-textPrimary shadow-sm"
                    : "bg-surface/40 border-border hover:border-zinc-400 text-textSecondary hover:text-textPrimary"
                }`}
              >
                <span>2. Technical Findings & PoCs</span>
                <ChevronRight size={14} className={activeTab === "vulnerabilities" ? "text-primary" : "text-textSecondary"} />
              </button>

              <button
                onClick={() => setActiveTab("tracking")}
                className={`flex items-center justify-between p-4 rounded-xl border transition-all text-left ${
                  activeTab === "tracking"
                    ? "bg-surface border-primary text-textPrimary shadow-sm"
                    : "bg-surface/40 border-border hover:border-zinc-400 text-textSecondary hover:text-textPrimary"
                }`}
              >
                <span>3. Remediation & Retest Log</span>
                <ChevronRight size={14} className={activeTab === "tracking" ? "text-primary" : "text-textSecondary"} />
              </button>
            </div>

            {/* Deliverables Info Box */}
            <div className="p-4 bg-surface border border-border rounded-xl flex items-center space-x-3.5 shadow-sm">
              <div className="w-8 h-8 rounded bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                <FileText size={16} />
              </div>
              <div className="font-mono text-xs">
                <span className="text-textPrimary block font-bold">Standard Deliverable</span>
                <span className="text-textSecondary block mt-0.5 text-[10px]">Technical Report + Exec Summary</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Preview Container */}
          <div className="lg:col-span-8 bg-surface border border-border rounded-2xl p-6 md:p-8 flex flex-col justify-between min-h-[380px] shadow-sm">
            
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
                      <span className="text-[10px] font-mono text-primary font-bold uppercase tracking-wider border border-primary/20 bg-primary/10 px-2 py-0.5 rounded">
                        Illustrative Summary Template
                      </span>
                      <h4 className="text-sm font-bold text-textPrimary font-mono uppercase tracking-wider mt-2">
                        Ref: TTL-SAMPLE-ASSESSMENT
                      </h4>
                    </div>
                    <div className="text-right font-mono text-[11px] text-textSecondary">
                      <p>Scope: API & Cloud Assessment</p>
                      <p>Target: Multi-Tenant Web App</p>
                    </div>
                  </div>

                  <p className="text-xs text-textSecondary leading-relaxed font-sans">
                    Illustrative assessment scope: a hypothetical multi-tenant SaaS application with REST/GraphQL APIs and cloud infrastructure. Testing focuses on tenant isolation boundaries, authorization (BOLA/IDOR), authentication token validation, and cloud configuration hygiene.
                  </p>

                  <div className="p-4 bg-background border border-border rounded-xl space-y-2 font-sans">
                    <h5 className="text-xs font-bold text-textPrimary font-mono uppercase tracking-wider">
                      Assessment Scopes & Structure:
                    </h5>
                    <ul className="space-y-1.5 text-xs text-textSecondary font-sans">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span>All API endpoints evaluated for resource ownership and authorization logic.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span>Cloud IAM configurations mapped against security best practices.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span>Example findings included in this sample: 2 illustrative items.</span>
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
                    Example Vulnerability Findings (Illustrative)
                  </div>

                  <div className="space-y-4 max-h-[300px] overflow-y-auto pr-1">
                    {vulns.map((v, idx) => (
                      <div key={idx} className="p-4 bg-background border border-border rounded-xl space-y-3 font-sans">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-bold text-textPrimary font-mono">{v.id} : {v.title}</span>
                          <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold font-mono ${
                            v.severity === "Critical" ? "bg-red-500/10 border border-red-500/20 text-red-600" : "bg-amber-500/10 border border-amber-500/20 text-amber-600"
                          }`}>
                            {v.severity} (CVSS {v.score})
                          </span>
                        </div>

                        <div className="text-xs text-textSecondary font-sans leading-relaxed">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-textSecondary block mb-0.5">Example Analysis:</span>
                          {v.analysis}
                        </div>

                        <div className="p-3 bg-surface border border-border rounded-lg font-mono text-xs text-textPrimary">
                          <div className="flex items-center gap-1.5 text-xs text-primary font-bold uppercase tracking-wider mb-1.5">
                            <Code size={12} /> Suggested Remediation:
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
                    Example Remediation & Retesting Log
                  </div>

                  <div className="space-y-3">
                    {[
                      { item: "Implement resource-level validation check on account endpoints", status: "Verified" },
                      { item: "Configure private storage bucket with signed URL access controls", status: "Verified" },
                      { item: "Enforce short-lived expiration on generated media tokens", status: "Verified" },
                      { item: "Restrict IAM policy permissions to least-privilege principles", status: "Verified" }
                    ].map((row, idx) => (
                      <div key={idx} className="flex items-start justify-between p-3.5 bg-background border border-border rounded-xl font-mono text-xs">
                        <span className="text-textSecondary leading-relaxed pr-6">{row.item}</span>
                        <span className="flex-shrink-0 px-2 py-0.5 bg-primary/10 border border-primary/20 rounded text-[10px] font-bold text-primary uppercase">
                          Example Status: {row.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="border-t border-border/60 pt-4 mt-6 text-right font-mono text-[11px] text-textSecondary">
              <span>Standard assessment format for developer and audit reviews.</span>
            </div>
            
          </div>
          
        </div>

      </div>
    </section>
  );
}
