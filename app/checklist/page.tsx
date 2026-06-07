"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckSquare, Square, Download, FileText, CheckCircle, Code } from "lucide-react";

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
    <div className="bg-background min-h-screen">
      <main className="pt-32 pb-24 text-textPrimary font-sans">
        <div className="section-container">
          
          {/* Header */}
          <div className="mb-12">
            <Link 
              href="/" 
              className="inline-flex items-center text-xs uppercase font-sans tracking-widest text-textSecondary hover:text-textPrimary transition-colors gap-2 mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
              Back to Home
            </Link>

            <h1 className="heading-1 mb-6 text-textPrimary font-extrabold font-sans tracking-tight">
              Security <span className="text-primary">Toolkits</span>
            </h1>
            <p className="body-text text-base max-w-3xl text-textSecondary">
              Audit your startup against critical logic vulnerability checklists or inspect our sample redacted audit report.
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-2 border-b border-border/40 pb-4 mb-10 font-sans text-[11px] font-semibold uppercase tracking-wider">
            <button
              onClick={() => setActiveTab("checklist")}
              className={`px-4 py-2 border-b-2 transition-colors ${
                activeTab === "checklist" ? "border-primary text-textPrimary" : "border-transparent text-textSecondary hover:text-textPrimary"
              }`}
            >
              Interactive Checklist
            </button>
            <button
              onClick={() => setActiveTab("report")}
              className={`px-4 py-2 border-b-2 transition-colors ${
                activeTab === "report" ? "border-primary text-textPrimary" : "border-transparent text-textSecondary hover:text-textPrimary"
              }`}
            >
              Sample Redacted Report
            </button>
          </div>

          {activeTab === "checklist" ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Interactive Checklist */}
              <div className="lg:col-span-8 space-y-8 bg-surface border border-border rounded-2xl p-8 shadow-sm">
                <div>
                  <h3 className="text-sm font-bold uppercase font-sans text-textPrimary tracking-wider mb-2 flex items-center gap-1.5">
                    Startup API Security Checklist
                  </h3>
                  <p className="text-[11px] text-textSecondary font-sans uppercase">
                    Verify how secure your code is by marking off completed checks. Current score: <span className="text-success font-bold font-sans text-xs">{checkedIds.length}/{checklistItems.length} checked</span>
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Group checklist by categories */}
                  {["Authentication & JWT", "Authorization & Tenant Boundaries", "Cloud & Storage Configuration", "Rate Limiting & GRC"].map((category) => {
                    const items = checklistItems.filter((i) => i.category === category);
                    return (
                      <div key={category} className="space-y-3">
                        <h4 className="text-[10px] font-bold font-sans text-primary uppercase tracking-wider border-b border-border/20 pb-1">
                          {category}
                        </h4>
                        <div className="space-y-3">
                          {items.map((item) => {
                            const isChecked = checkedIds.includes(item.id);
                            return (
                              <button
                                key={item.id}
                                onClick={() => toggleCheck(item.id)}
                                className="w-full flex items-start text-left gap-3.5 p-3 hover:bg-zinc-50 border border-border rounded-xl transition-colors group focus:outline-none"
                              >
                                <div className="text-primary flex-shrink-0 mt-0.5">
                                  {isChecked ? (
                                    <CheckSquare size={16} className="text-success" />
                                  ) : (
                                    <Square size={16} className="text-textSecondary group-hover:text-textPrimary" />
                                  )}
                                </div>
                                <span className={`text-[11px] leading-relaxed transition-all ${isChecked ? "text-textSecondary line-through" : "text-textPrimary"}`}>
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
              </div>

              {/* Right Column: Download Lead Form */}
              <div className="lg:col-span-4 bg-surface border border-border p-6 rounded-2xl space-y-6 text-center relative overflow-hidden shadow-sm">
                <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full pointer-events-none" />
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto">
                  <Download size={22} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-textPrimary uppercase tracking-wider font-sans">Download PDF Playbook</h4>
                  <p className="text-[10px] text-textSecondary mt-2 leading-relaxed">
                    Get our complete, detailed PDF checklist containing 64 points, tools checklist, and step-by-step remediation snippets.
                  </p>
                </div>

                {success ? (
                  <p className="text-[11px] text-success font-bold font-sans uppercase tracking-wider">
                    ✓ Playbook sent to your inbox!
                  </p>
                ) : (
                  <form onSubmit={handleDownload} className="space-y-3.5">
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="founder@yourstartup.com"
                      className="w-full bg-background border border-border hover:border-zinc-400 focus:border-primary rounded-lg px-3 py-2 text-xs text-textPrimary placeholder-textSecondary/60 focus:outline-none transition-all font-sans"
                    />
                    <button 
                      type="submit"
                      className="w-full inline-flex items-center justify-center py-2.5 bg-primary hover:bg-primary-hover text-xs uppercase font-sans font-semibold tracking-wider rounded-lg text-white font-semibold transition-all shadow-sm"
                    >
                      Get PDF playbooks
                    </button>
                  </form>
                )}
              </div>

            </div>
          ) : (
            <div className="space-y-8 bg-surface border border-border rounded-2xl p-8 max-w-4xl mx-auto shadow-sm">
              {/* Mock Redacted VAPT Report Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border/40 pb-6 gap-4 border-t-0">
                <div>
                  <span className="text-[9px] font-sans text-primary font-bold uppercase tracking-wider border border-primary/30 bg-primary/5 px-2.5 py-0.5 rounded-md">
                    REDACTED SECURITY AUDIT ADVISORY
                  </span>
                  <h3 className="text-lg font-bold text-textPrimary uppercase font-sans mt-3">
                    Ref: TTL-2026-AUDIT-04
                  </h3>
                </div>
                <div className="text-right font-sans text-[10px] text-textSecondary">
                  <p>Client: <span className="text-textPrimary">NeoBank Tech Ltd</span></p>
                  <p>Audit Class: <span className="text-textPrimary">API Governance Audit</span></p>
                </div>
              </div>

              {/* Reproduction Walkthrough */}
              <div className="space-y-6 text-xs">
                
                {/* Vulnerability Metadata */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-b border-border/20 pb-6 font-sans text-[10px]">
                  <div>
                    <span className="text-textSecondary block">CONTROL CLASS:</span>
                    <span className="text-textPrimary font-bold block mt-0.5">AC-04 (Access Control Boundaries)</span>
                  </div>
                  <div>
                    <span className="text-textSecondary block">SEVERITY FOCUS:</span>
                    <span className="text-critical font-bold block mt-0.5">CRITICAL GAP RESOLVED</span>
                  </div>
                  <div>
                    <span className="text-textSecondary block">STATUS:</span>
                    <span className="text-success font-bold block mt-0.5">VERIFIED & ATTESTED</span>
                  </div>
                </div>

                {/* Scoping Section */}
                <div className="space-y-2">
                  <h4 className="text-[10px] font-bold font-sans text-primary uppercase tracking-widest flex items-center gap-1.5">
                    <FileText size={14} className="text-primary" /> Audit Control Gap Analysis
                  </h4>
                  <p className="text-textSecondary leading-relaxed">
                    During our audit of the application transactions resolver, we noted that the system database queried transfer logs using user-supplied parameters without validating session tenancy. This allowed arbitrary account queries unless strict server-side boundary checks were active.
                  </p>
                </div>

                {/* Audit Control Mapping Schema */}
                <div className="space-y-2">
                  <h4 className="text-[10px] font-bold font-sans text-primary uppercase tracking-wider">
                    Control Mapping & Scopes:
                  </h4>
                  <pre className="p-4 bg-zinc-50 border border-border rounded-xl font-sans text-[10px] text-textPrimary overflow-x-auto leading-relaxed">
{`Control Standards: SOC2 CC6.1 (Logical Access Controls) | ISO 27001 A.9.4.1
Target API Endpoint: POST /api/v1/accounts/transfers
Testing Methodology: Manual logic verification of context ownership
Compliance Verification: Confirmed multi-tenant boundary checks`}
                  </pre>
                </div>

                {/* Code fix diff mock */}
                <div className="space-y-2">
                  <h4 className="text-[10px] font-bold font-sans text-success uppercase tracking-widest flex items-center gap-1.5">
                    <Code size={14} className="text-success" /> Applied Remediation Commit
                  </h4>
                  <pre className="p-4 bg-zinc-50 border border-border rounded-xl font-sans text-[10px] text-textSecondary overflow-x-auto leading-relaxed">
{`@@ -12,4 +12,8 @@
- // Query database directly by account ID
- const account = await Account.findById(req.body.account_id);
+ // Row-level validation check against JWT session metadata
+ if (req.user.accountId !== req.body.account_id) {
+   return res.status(403).json({ error: "Access denied: Account ID mismatch" });
+ }
+ const account = await Account.findOne({ _id: req.body.account_id });`}
                  </pre>
                </div>

              </div>

              {/* Bottom attestation certificate badge */}
              <div className="border-t border-border/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                <span className="text-[10px] font-sans text-textSecondary uppercase tracking-wider">
                  Verified using manual security governance audit controls.
                </span>
                <Link
                  href="/contact"
                  className="px-4 py-2 bg-primary hover:bg-primary-hover text-xs uppercase font-sans tracking-wider font-bold text-white rounded-lg shadow-sm transition-all"
                >
                  Book intake audit call
                </Link>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
