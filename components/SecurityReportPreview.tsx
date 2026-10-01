"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Code, CheckCircle, AlertTriangle, FileText, ChevronRight, Info, ArrowRight } from "lucide-react";

import { trackSampleReportClick, trackFreeSecurityReviewStart } from "@/lib/analytics";

export default function SecurityReportPreview() {
  const [activeTab, setActiveTab] = useState<"summary" | "vulnerabilities" | "remediation" | "tracking">("summary");
  
  const vulns = [
    {
      id: "TTL-FINDING-01",
      title: "Broken Object Level Authorization (BOLA / IDOR) on Export Endpoint",
      endpoint: "GET /api/v1/workspaces/{workspaceId}/export",
      class: "SaaS API Authorization",
      severity: "Critical",
      score: "9.8",
      attackScenario: "Authenticated member from Tenant A alters the workspaceId parameter to Tenant B's UUID in the export endpoint. The API fails to verify session tenant binding and streams Tenant B's full audit records.",
      evidence: "curl -X GET 'https://api.app.com/api/v1/workspaces/ws_tenant_b/export' -H 'Authorization: Bearer <Tenant_A_Token>' => HTTP 200 OK with cross-tenant customer records.",
      impact: "Cross-tenant data exposure exposing confidential enterprise data, SOC 2 control failure, and contractual isolation breach.",
      rootCause: "Database query resolved workspace directly from URL parameter without enforcing req.user.tenantId === requestedWorkspace.tenantId in the ORM filter.",
      remediation: "Enforce strict tenant scoping in data access layer: WHERE workspace_id = :id AND tenant_id = :sessionTenantId.",
      retest: "Verified Patched: Re-testing confirmed endpoint strictly returns HTTP 403 Forbidden with security event alert."
    },
    {
      id: "TTL-FINDING-02",
      title: "Multi-Tenant Isolation Failure in Async Background Reports Worker",
      endpoint: "POST /api/v1/jobs/schedule-report",
      class: "SaaS Multi-Tenancy",
      severity: "Critical",
      score: "9.1",
      attackScenario: "Scheduled report jobs placed in background Redis queue without caller tenant context. The consumer worker executes under ambient service role, leaking cross-tenant records into generated CSV artifacts.",
      evidence: "Background worker generates report file containing merged tenant customer records when multiple tenant export requests are queued simultaneously.",
      impact: "Scheduled reports emailed or accessible across different customer accounts.",
      rootCause: "Worker process lacks tenant-isolated database session and reads from shared Redis buffer without per-tenant prefixing.",
      remediation: "Bind all queued jobs to tenant context token; instantiate worker database connection using tenant-scoped schema or row filter.",
      retest: "Verified Patched: Background jobs execute strictly under isolated tenant database contexts."
    }
  ];

  return (
    <section className="py-24 bg-background border-t border-border relative" id="report-preview">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="section-container">
        
        {/* Header (Section 14: See exactly what your engineering team receives) */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-6">
            <span>Audit-Grade Deliverable Sample</span>
          </div>
          <h2 className="heading-2 mb-4 font-sans">
            See Exactly What Your <span className="text-primary">Engineering Team Receives.</span>
          </h2>
          <p className="body-text text-base text-textSecondary font-sans max-w-2xl mx-auto">
            Every TrustLayerLabs deliverable provides audit-grade clarity: affected endpoints, step-by-step attack scenarios, curl PoCs, root-cause analysis, framework-specific code fixes, and verified retesting.
          </p>
        </div>

        {/* Prominent Educational Notice */}
        <div className="max-w-5xl mx-auto p-4 bg-surface border border-border/80 rounded-2xl mb-12 flex items-start gap-3 shadow-sm">
          <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <div className="text-xs text-textSecondary leading-relaxed font-sans">
            <span className="font-bold text-textPrimary uppercase tracking-wider block mb-0.5">
              Representative example — not a client engagement.
            </span>
            This sample demonstrates how TrustLayerLabs structures findings, severity scoring (CVSS), reproducible exploit steps, code-level remediation snippets, and retest verification. The target application and findings shown are representative examples.
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Left Column: Report Controls / Summary */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-textPrimary font-mono uppercase tracking-wider">
                Assessment Report Pillars
              </h3>
              <p className="text-xs text-textSecondary leading-relaxed font-sans">
                Review the 4 sections included in every TrustLayerLabs security assessment deliverable.
              </p>
            </div>

            {/* Selector list */}
            <div className="flex flex-col space-y-2.5 font-mono text-xs uppercase tracking-wider font-semibold">
              <button
                onClick={() => {
                  trackSampleReportClick("tab_summary");
                  setActiveTab("summary");
                }}
                className={`flex items-center justify-between p-3.5 rounded-xl border transition-all text-left cursor-pointer ${
                  activeTab === "summary"
                    ? "bg-surface border-primary text-textPrimary shadow-sm"
                    : "bg-surface/40 border-border hover:border-zinc-400 text-textSecondary hover:text-textPrimary"
                }`}
              >
                <span>1. Executive Risk Summary</span>
                <ChevronRight size={14} className={activeTab === "summary" ? "text-primary" : "text-textSecondary"} />
              </button>

              <button
                onClick={() => {
                  trackSampleReportClick("tab_vulnerabilities");
                  setActiveTab("vulnerabilities");
                }}
                className={`flex items-center justify-between p-3.5 rounded-xl border transition-all text-left cursor-pointer ${
                  activeTab === "vulnerabilities"
                    ? "bg-surface border-primary text-textPrimary shadow-sm"
                    : "bg-surface/40 border-border hover:border-zinc-400 text-textSecondary hover:text-textPrimary"
                }`}
              >
                <span>2. Technical Finding + PoC</span>
                <ChevronRight size={14} className={activeTab === "vulnerabilities" ? "text-primary" : "text-textSecondary"} />
              </button>

              <button
                onClick={() => {
                  trackSampleReportClick("tab_remediation");
                  setActiveTab("remediation");
                }}
                className={`flex items-center justify-between p-3.5 rounded-xl border transition-all text-left cursor-pointer ${
                  activeTab === "remediation"
                    ? "bg-surface border-primary text-textPrimary shadow-sm"
                    : "bg-surface/40 border-border hover:border-zinc-400 text-textSecondary hover:text-textPrimary"
                }`}
              >
                <span>3. Remediation Guidance</span>
                <ChevronRight size={14} className={activeTab === "remediation" ? "text-primary" : "text-textSecondary"} />
              </button>

              <button
                onClick={() => {
                  trackSampleReportClick("tab_tracking");
                  setActiveTab("tracking");
                }}
                className={`flex items-center justify-between p-3.5 rounded-xl border transition-all text-left cursor-pointer ${
                  activeTab === "tracking"
                    ? "bg-surface border-primary text-textPrimary shadow-sm"
                    : "bg-surface/40 border-border hover:border-zinc-400 text-textSecondary hover:text-textPrimary"
                }`}
              >
                <span>4. Retest Verification</span>
                <ChevronRight size={14} className={activeTab === "tracking" ? "text-primary" : "text-textSecondary"} />
              </button>
            </div>

            {/* CTAs */}
            <div className="space-y-2 pt-2">
              <Link
                href="/free-assessment"
                onClick={() => trackFreeSecurityReviewStart("report_preview_primary")}
                className="w-full text-center flex items-center justify-center bg-primary hover:bg-primary/90 text-white text-xs uppercase tracking-wider font-sans font-bold py-3 px-4 rounded-xl shadow-md transition-all active:scale-[0.98] gap-1.5"
              >
                Get a Free Security Review
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/sample-report"
                onClick={() => trackSampleReportClick("report_preview_secondary")}
                className="w-full text-center flex items-center justify-center bg-background border border-border hover:border-zinc-400 text-textPrimary hover:text-primary text-xs uppercase tracking-wider font-sans font-semibold py-2.5 px-4 rounded-xl transition-all"
              >
                View Sample Report Details
              </Link>
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
                      <span className="text-[10px] font-mono text-blue-800 font-bold uppercase tracking-wider border border-blue-200/80 bg-blue-50 px-2 py-0.5 rounded">
                        Illustrative Summary Template
                      </span>
                      <h3 className="text-sm font-bold text-textPrimary font-mono uppercase tracking-wider mt-2">
                        Ref: TTL-SAMPLE-ASSESSMENT
                      </h3>
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
                    <p className="text-xs font-bold text-textPrimary font-mono uppercase tracking-wider">
                      Assessment Scopes & Structure:
                    </p>
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
                  <div className="text-xs font-mono text-textSecondary uppercase tracking-wider border-b border-border/60 pb-3 flex justify-between items-center">
                    <span>Pillar 2: Technical Finding + PoC (Illustrative)</span>
                    <span className="text-[10px] text-primary">All 8 Core Finding Specs Included</span>
                  </div>

                  <div className="space-y-5 max-h-[360px] overflow-y-auto pr-1">
                    {vulns.map((v, idx) => (
                      <div key={idx} className="p-5 bg-background border border-border rounded-xl space-y-3 font-sans">
                        {/* 1. Finding & Severity */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/60 pb-2.5">
                          <span className="text-xs font-bold text-textPrimary font-mono">{v.id} : {v.title}</span>
                          <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold font-mono self-start sm:self-auto ${
                            v.severity === "Critical" ? "bg-red-50 border border-red-200 text-red-700" : "bg-amber-50 border border-amber-200 text-amber-800"
                          }`}>
                            {v.severity} (CVSS {v.score})
                          </span>
                        </div>

                        {/* 2. Affected Endpoint / Resource */}
                        <div className="text-xs font-mono text-textPrimary bg-surface p-2.5 rounded-lg border border-border/70">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-textSecondary block mb-0.5">Affected Endpoint / Resource:</span>
                          <code className="text-primary font-bold">{v.endpoint}</code>
                        </div>

                        {/* 3. Attack Scenario */}
                        <div className="text-xs text-textSecondary font-sans leading-relaxed">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-textSecondary font-bold block mb-0.5">Attack Scenario:</span>
                          {v.attackScenario}
                        </div>

                        {/* 4. Evidence / PoC */}
                        <div className="p-3 bg-surface border border-border rounded-lg font-mono text-[11px] text-textPrimary overflow-x-auto">
                          <div className="text-[10px] text-primary font-bold uppercase tracking-wider mb-1">PoC Reproduction Payload:</div>
                          <code>{v.evidence}</code>
                        </div>

                        {/* 5. Business Impact & 6. Root Cause */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                          <div className="p-2.5 bg-surface/50 border border-border/60 rounded-lg">
                            <span className="text-[10px] font-mono uppercase tracking-wider text-amber-900 font-bold block mb-0.5">Business Impact:</span>
                            <span className="text-textSecondary text-[11px] leading-normal">{v.impact}</span>
                          </div>
                          <div className="p-2.5 bg-surface/50 border border-border/60 rounded-lg">
                            <span className="text-[10px] font-mono uppercase tracking-wider text-textPrimary font-bold block mb-0.5">Identified Root Cause:</span>
                            <span className="text-textSecondary text-[11px] leading-normal">{v.rootCause}</span>
                          </div>
                        </div>

                        {/* 7. Remediation Guidance & 8. Retest Verification */}
                        <div className="p-3 bg-surface border border-border rounded-lg font-mono text-xs text-textPrimary space-y-2">
                          <div>
                            <div className="flex items-center gap-1.5 text-xs text-primary font-bold uppercase tracking-wider mb-1">
                              <Code size={12} /> Suggested Code Remediation:
                            </div>
                            <span className="text-[11px] text-textSecondary font-sans">{v.remediation}</span>
                          </div>
                          <div className="pt-2 border-t border-border/60 flex items-center gap-1.5 text-[10px] font-mono text-blue-900 font-bold uppercase">
                            <CheckCircle size={12} className="text-primary" />
                            <span>{v.retest}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "remediation" && (
                <motion.div
                  key="remediation"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <div className="text-xs font-mono text-textSecondary uppercase tracking-wider border-b border-border/60 pb-3">
                    Pillar 3: Developer-Ready Remediation Guidance (Illustrative)
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 bg-background border border-border rounded-xl space-y-3 font-sans">
                      <div className="text-xs font-bold text-textPrimary font-mono">
                        Node.js / Express Authorization Ownership Check
                      </div>
                      <p className="text-xs text-textSecondary leading-relaxed">
                        Rather than trusting client-provided tenant identifiers, validate caller session claims against the database resource scope.
                      </p>
                      <pre className="p-3 bg-surface border border-border rounded-lg font-mono text-[11px] text-textPrimary overflow-x-auto">
{`// Enforce tenant boundary on object resolution
async function getAccountData(req, res) {
  const { resourceId } = req.params;
  const resource = await db.find(resourceId);
  
  if (!resource || resource.tenantId !== req.user.tenantId) {
    return res.status(403).json({ error: "Access denied" });
  }
  return res.json(resource);
}`}
                      </pre>
                    </div>

                    <div className="p-4 bg-background border border-border rounded-xl space-y-2 font-sans">
                      <div className="text-xs font-bold text-textPrimary font-mono">
                        Direct Debrief with Lead Security Practitioner
                      </div>
                      <p className="text-xs text-textSecondary leading-relaxed">
                        Every assessment includes a direct code review and remediation walkthrough call with your engineering leads to ensure patches are implemented correctly without regressions.
                      </p>
                    </div>
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
                    Pillar 4: Retest Verification & Attestation Log (Illustrative)
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
                        <span className="flex-shrink-0 px-2 py-0.5 bg-blue-50 border border-blue-200/80 rounded text-[10px] font-bold text-blue-800 uppercase">
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
