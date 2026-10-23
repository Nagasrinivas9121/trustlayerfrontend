"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckSquare, Square, Download, FileText, CheckCircle, Code, ArrowRight, ShieldCheck, Terminal } from "lucide-react";

interface ChecklistItem {
  id: string;
  category: string;
  item: string;
}

const checklistItems: ChecklistItem[] = [
  { id: "1", category: "Authentication & JWT", item: "Verify that JWT signatures are validated using a strong cryptographic key on all endpoints." },
  { id: "2", category: "Authentication & JWT", item: "Ensure that 'alg: none' is strictly disallowed and rejected in the token validator." },
  { id: "3", category: "Authentication & JWT", item: "Enforce multi-factor auth (MFA) on all admin panels and customer onboarding routes." },
  
  { id: "4", category: "Authorization & Tenant Boundaries", item: "Verify that every database query checks ownership (resource-level validation / BOLA check)." },
  { id: "5", category: "Authorization & Tenant Boundaries", item: "Ensure row-level isolation policies (RLS) are active on multi-tenant tables." },
  { id: "6", category: "Authorization & Tenant Boundaries", item: "Validate that debug/admin endpoints are stripped from production builds." },

  { id: "7", category: "Cloud & Storage Configuration", item: "Verify that all S3/GCS buckets have public policy blocked and enforce signed URLs." },
  { id: "8", category: "Cloud & Storage Configuration", item: "Enforce least-privilege IAM policies, restricting service account permissions." },
  { id: "9", category: "Cloud & Storage Configuration", item: "Enable logging & security audit trails (e.g. AWS CloudTrail, CloudWatch)." },

  { id: "10", category: "Rate Limiting & GRC", item: "Implement IP and User-based rate-limits on login, OTP, and checkout endpoints." },
  { id: "11", category: "Rate Limiting & GRC", item: "Define standard incident response policy and host key database logs securely." }
];

export default function ChecklistPage() {
  const [activeTab, setActiveTab] = useState<"checklist" | "report">("checklist");
  const [checkedIds, setCheckedIds] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const toggleCheck = (id: string) => {
    setCheckedIds((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSuccess(true);
    setEmail("");
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen pt-32 pb-24 font-sans text-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Pill */}
        <Link 
          href="/" 
          className="inline-flex items-center text-xs font-semibold text-neutral-500 hover:text-neutral-900 transition-colors gap-2 mb-8 group px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 shadow-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/80 shadow-sm text-xs font-semibold text-neutral-800 mb-4">
            <ShieldCheck size={14} className="text-neutral-900" />
            <span>Interactive Security Toolkits</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 mb-4">
            SaaS Security <span className="text-neutral-900">Toolkits & Audit Checklists</span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 max-w-3xl leading-relaxed">
            Audit your startup against critical logic vulnerability checklists or inspect our sample redacted lab report.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 p-1.5 bg-neutral-200/60 rounded-full w-fit mb-10 border border-neutral-300/40">
          <button
            onClick={() => setActiveTab("checklist")}
            className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
              activeTab === "checklist" 
                ? "bg-white text-neutral-950 shadow-sm" 
                : "text-neutral-600 hover:text-neutral-950"
            }`}
          >
            Interactive Checklist ({checkedIds.length}/{checklistItems.length})
          </button>
          <button
            onClick={() => setActiveTab("report")}
            className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
              activeTab === "report" 
                ? "bg-white text-neutral-950 shadow-sm" 
                : "text-neutral-600 hover:text-neutral-950"
            }`}
          >
            Sample Redacted Lab Report
          </button>
        </div>

        {activeTab === "checklist" ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Interactive Checklist */}
            <div className="lg:col-span-8 space-y-8 bg-white border border-neutral-200/80 rounded-3xl p-8 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-dashed border-neutral-200">
                <div>
                  <h2 className="text-base font-bold text-neutral-950">
                    Startup API & SaaS Security Checklist
                  </h2>
                  <p className="text-xs text-neutral-500 mt-1">
                    Click any requirement to track your compliance posture
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-semibold text-neutral-800">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>{checkedIds.length} of {checklistItems.length} Verified</span>
                </div>
              </div>

              <div className="space-y-6">
                {["Authentication & JWT", "Authorization & Tenant Boundaries", "Cloud & Storage Configuration", "Rate Limiting & GRC"].map((category) => {
                  const items = checklistItems.filter((i) => i.category === category);
                  return (
                    <div key={category} className="space-y-3">
                      <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-wider pb-1">
                        {category}
                      </h3>
                      <div className="space-y-2.5">
                        {items.map((item) => {
                          const isChecked = checkedIds.includes(item.id);
                          return (
                            <button
                              key={item.id}
                              onClick={() => toggleCheck(item.id)}
                              className={`w-full flex items-start text-left gap-3.5 p-3.5 rounded-2xl border transition-all duration-200 ${
                                isChecked 
                                  ? "bg-emerald-50/50 border-emerald-200/70" 
                                  : "bg-[#FAFAFA] border-neutral-200/70 hover:border-neutral-300 hover:bg-white"
                              }`}
                            >
                              <div className="shrink-0 mt-0.5">
                                {isChecked ? (
                                  <CheckSquare size={16} className="text-emerald-600" />
                                ) : (
                                  <Square size={16} className="text-neutral-400 group-hover:text-neutral-700" />
                                )}
                              </div>
                              <span className={`text-xs sm:text-sm leading-relaxed ${isChecked ? "text-neutral-400 line-through" : "text-neutral-700"}`}>
                                {item.item}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Implementation Guidance */}
              <div className="border-t border-dashed border-neutral-200 pt-6 space-y-2">
                <h3 className="text-xs font-bold text-neutral-950 uppercase tracking-wider">
                  Implementation Guidance for Engineering Teams
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Automated security linters catch syntax issues but miss broken access logic. When securing multi-tenant architectures, always enforce context-aware authorization middleware at the database query layer. Never trust client-provided IDs without verifying tenant ownership in the active session context.
                </p>
              </div>
            </div>

            {/* Right Column: Download Lead Form */}
            <div className="lg:col-span-4 bg-white border border-neutral-200/80 p-8 rounded-3xl space-y-6 text-center shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
              <div className="w-12 h-12 bg-neutral-100 border border-neutral-200 rounded-2xl flex items-center justify-center text-neutral-900 mx-auto">
                <Download size={20} />
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-neutral-950">Download PDF Playbook</h3>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Get our complete 64-point engineering checklist with step-by-step remediation snippets.
                </p>
              </div>

              {success ? (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs text-emerald-800 font-semibold">
                  ✓ Playbook sent to your inbox!
                </div>
              ) : (
                <form onSubmit={handleDownload} className="space-y-3">
                  <input 
                    type="email" 
                    id="checklist-email"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="founder@yourstartup.com"
                    className="w-full bg-[#FAFAFA] border border-neutral-200 hover:border-neutral-300 focus:border-neutral-950 rounded-full px-4 py-3 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none transition-all"
                  />
                  <button 
                    type="submit"
                    className="w-full py-3 bg-neutral-900 hover:bg-black text-xs font-semibold rounded-full text-white transition-all shadow-md"
                  >
                    Get PDF Playbook
                  </button>
                </form>
              )}

              <div className="pt-4 border-t border-dashed border-neutral-200 text-[11px] text-neutral-400">
                100% spam-free • Practitioner-curated
              </div>
            </div>

          </div>
        ) : (
          <div className="space-y-8 bg-white border border-neutral-200/80 rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
            {/* Synthetic Lab Redacted Report Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-dashed border-neutral-200 pb-6 gap-4">
              <div>
                <span className="text-[10px] font-semibold text-neutral-700 uppercase tracking-wider border border-neutral-200 bg-neutral-100 px-3 py-1 rounded-full">
                  SYNTHETIC LAB SAMPLE AUDIT ADVISORY
                </span>
                <h2 className="text-xl font-bold text-neutral-950 mt-3">
                  Ref: TTL-2026-LAB-04
                </h2>
              </div>
              <div className="text-right text-xs text-neutral-500">
                <p>Environment: <span className="text-neutral-900 font-medium">Synthetic Lab Architecture (Mock Testbed)</span></p>
                <p>Audit Class: <span className="text-neutral-900 font-medium">API Governance & Tenancy Audit</span></p>
              </div>
            </div>

            {/* Reproduction Walkthrough */}
            <div className="space-y-6 text-sm text-neutral-600">
              
              {/* Vulnerability Metadata */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-b border-dashed border-neutral-200 pb-6 text-xs">
                <div className="p-3 bg-[#FAFAFA] rounded-2xl border border-neutral-200/60">
                  <span className="text-neutral-400 block text-[10px] uppercase">CONTROL CLASS</span>
                  <span className="text-neutral-950 font-bold block mt-0.5">AC-04 (Access Control Boundaries)</span>
                </div>
                <div className="p-3 bg-rose-50 rounded-2xl border border-rose-200/60">
                  <span className="text-rose-600 block text-[10px] uppercase font-semibold">SEVERITY FOCUS</span>
                  <span className="text-rose-950 font-bold block mt-0.5">CRITICAL GAP RESOLVED</span>
                </div>
                <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-200/60">
                  <span className="text-emerald-600 block text-[10px] uppercase font-semibold">STATUS</span>
                  <span className="text-emerald-950 font-bold block mt-0.5">VERIFIED & ATTESTED</span>
                </div>
              </div>

              {/* Scoping Section */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold text-neutral-950 uppercase tracking-wider flex items-center gap-2">
                  <FileText size={15} className="text-neutral-900" /> Audit Control Gap Analysis
                </h3>
                <p className="leading-relaxed">
                  During our audit of the application transactions resolver in this simulated environment, we noted that the system database queried transfer logs using user-supplied parameters without validating session tenancy. This allowed arbitrary account queries unless strict server-side boundary checks were active.
                </p>
              </div>

              {/* Audit Control Mapping Schema */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold text-neutral-950 uppercase tracking-wider">
                  Control Mapping & Scopes:
                </h3>
                <div className="p-5 bg-neutral-950 border border-neutral-800 rounded-2xl font-mono text-xs text-neutral-300 overflow-x-auto leading-relaxed shadow-inner">
                  <div>Control Standards: SOC2 CC6.1 (Logical Access Controls) | ISO 27001 A.9.4.1</div>
                  <div>Target API Endpoint: POST /api/v1/accounts/transfers</div>
                  <div>Testing Methodology: Manual logic verification of context ownership</div>
                  <div>Compliance Verification: Confirmed multi-tenant boundary checks</div>
                </div>
              </div>

              {/* Code fix diff */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold text-neutral-950 uppercase tracking-wider flex items-center gap-2">
                  <Terminal size={15} className="text-emerald-600" /> Applied Remediation Commit
                </h3>
                <div className="p-5 bg-neutral-950 border border-neutral-800 rounded-2xl font-mono text-xs text-neutral-200 overflow-x-auto leading-relaxed shadow-inner">
                  <div className="text-neutral-500">@@ -12,4 +12,8 @@</div>
                  <div className="text-rose-400">- // Query database directly by account ID</div>
                  <div className="text-rose-400">- const account = await Account.findById(req.body.account_id);</div>
                  <div className="text-emerald-400">+ // Row-level validation check against JWT session metadata</div>
                  <div className="text-emerald-400">+ if (req.user.accountId !== req.body.account_id) {`{`}</div>
                  <div className="text-emerald-400">+   return res.status(403).json({`{`} error: &quot;Access denied: Account ID mismatch&quot; {`}`});</div>
                  <div className="text-emerald-400">+ {`}`}</div>
                  <div className="text-emerald-400">+ const account = await Account.findOne({`{`} _id: req.body.account_id {`}`});</div>
                </div>
              </div>

            </div>

            {/* Bottom attestation badge */}
            <div className="border-t border-dashed border-neutral-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-neutral-500">
                Verified using manual security governance audit controls.
              </span>
              <Link
                href="https://cal.com/nagasrinivasarao/30min"
                target="_blank"
                className="px-6 py-2.5 bg-neutral-900 hover:bg-black text-xs font-semibold text-white rounded-full shadow-sm transition-all"
              >
                Schedule 30-Min Review
              </Link>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 p-8 sm:p-12 bg-white rounded-3xl border border-dashed border-neutral-300 text-center space-y-6 shadow-sm">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 text-neutral-800 border border-neutral-200 text-xs font-semibold">
            <ShieldCheck size={14} className="text-neutral-900" />
            <span>Next Step for Fast-Moving Teams</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight">
            Need Help Reviewing Your Architecture Against This Checklist?
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 max-w-xl mx-auto leading-relaxed">
            Schedule a direct 30-minute architecture and scoping call with our lead security architects under mutual NDA. We will evaluate your attack surface and outline high-priority test vectors.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/free-assessment"
              className="w-full sm:w-auto px-7 py-3.5 bg-neutral-900 hover:bg-black text-white text-xs font-semibold rounded-full shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Get Free Scoping Review</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/sample-report"
              className="w-full sm:w-auto px-7 py-3.5 bg-white border border-neutral-200 hover:border-neutral-400 text-neutral-800 text-xs font-semibold rounded-full shadow-sm transition-all"
            >
              View Sample Report
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
