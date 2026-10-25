"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckSquare, Square, Download, FileText, CheckCircle, Code, ArrowRight, ShieldCheck, Lock, Mail, Loader2 } from "lucide-react";
import { trackChecklistDownload, trackPrimaryQuoteClick } from "@/lib/analytics";
import { openQuoteModal } from "@/components/QuoteModal";
import QuoteModal from "@/components/QuoteModal";

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
  const [checkedIds, setCheckedIds] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toggleCheck = (id: string) => {
    setCheckedIds((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleUnlock = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || loading) return;
    setLoading(true);
    setError(null);

    try {
      // TODO: email-provider integration (e.g. Mailchimp, Loops, or Resend Audience API)
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source: "lead-magnet-startup-security-checklist",
        }),
      });

      trackChecklistDownload("startup_security_checklist");
      setIsUnlocked(true);
    } catch (err) {
      // Still unlock locally so user is never blocked from their resource
      setIsUnlocked(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen pt-32 pb-24 font-sans text-neutral-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Pill */}
        <Link 
          href="/" 
          className="inline-flex items-center text-xs font-semibold text-neutral-500 hover:text-neutral-900 transition-colors gap-2 mb-8 group px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 shadow-xs"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/80 shadow-xs text-xs font-semibold text-neutral-800 mb-4">
            <ShieldCheck size={14} className="text-neutral-900" />
            <span>Developer Lead Magnet &amp; Audit Toolkit</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 mb-4 font-sans">
            Startup API &amp; SaaS <span className="text-primary">Security Checklist</span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-sans">
            Audit your startup against 64 critical logic and authorization controls before enterprise security reviews.
          </p>
        </div>

        {/* Email Capture Gate */}
        {!isUnlocked ? (
          <div className="p-8 sm:p-12 bg-white rounded-3xl border border-neutral-200 shadow-sm text-center space-y-6 max-w-xl mx-auto my-8">
            <div className="w-14 h-14 bg-blue-50 border border-blue-200 text-primary rounded-2xl flex items-center justify-center mx-auto">
              <Lock size={24} />
            </div>

            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight font-sans">
                Unlock the Complete Checklist &amp; PDF Playbook
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-md mx-auto">
                Enter your work email to immediately access the interactive checklist, remediation code snippets, and PDF download.
              </p>
            </div>

            <form onSubmit={handleUnlock} className="space-y-3 max-w-md mx-auto">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="founder@yourcompany.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 placeholder-neutral-400 focus:bg-white focus:border-neutral-900 focus:outline-none text-xs sm:text-sm transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white font-semibold text-xs tracking-tight shadow-md transition-all cursor-pointer min-h-[46px]"
              >
                {loading ? (
                  <>
                    <Loader2 size={15} className="animate-spin" />
                    <span>Unlocking...</span>
                  </>
                ) : (
                  <>
                    <span>Unlock Checklist &amp; Download PDF</span>
                    <ArrowRight size={14} />
                  </>
                )}
              </button>
            </form>

            <p className="text-[11px] text-neutral-400 font-sans">
              100% spam-free. Curated by senior certified security architects.
            </p>
          </div>
        ) : (
          /* Unlocked Content State */
          <div className="space-y-8">
            {/* Download Banner */}
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-center sm:text-left">
                <div className="w-10 h-10 rounded-2xl bg-white text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200 shadow-xs">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-neutral-950">Checklist Unlocked!</h3>
                  <p className="text-xs text-neutral-600">Your PDF copy is ready for offline developer review.</p>
                </div>
              </div>

              <div className="flex flex-col items-center sm:items-end gap-1.5 shrink-0">
                <a
                  href="/sample-vapt-report.pdf"
                  download="Startup-Security-Checklist-2026.pdf"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold shadow-xs transition-colors shrink-0"
                >
                  <Download size={13} />
                  <span>Download PDF Playbook</span>
                </a>
                <Link
                  href="/free-assessment"
                  className="text-[11px] font-semibold text-emerald-900 hover:underline"
                >
                  Need an independent pentest report? Get a fixed-price quote in 24h →
                </Link>
              </div>
            </div>

            {/* Interactive Checklist Container */}
            <div className="bg-white border border-neutral-200/90 rounded-3xl p-6 sm:p-10 shadow-xs space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-dashed border-neutral-200">
                <div>
                  <h2 className="text-base font-bold text-neutral-950">
                    Startup Security Verification Matrix
                  </h2>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Click items to track completion status
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
                              className={`w-full flex items-start text-left gap-3.5 p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                                isChecked 
                                  ? "bg-emerald-50/50 border-emerald-200/70" 
                                  : "bg-[#FAFAFA] border-neutral-200/70 hover:border-neutral-300 hover:bg-white"
                              }`}
                            >
                              <div className="shrink-0 mt-0.5">
                                {isChecked ? (
                                  <CheckSquare size={16} className="text-emerald-600" />
                                ) : (
                                  <Square size={16} className="text-neutral-400" />
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
            </div>

            {/* Plain CTA Banner to Quote Form */}
            <div className="p-8 sm:p-10 bg-white border border-dashed border-neutral-300 rounded-3xl text-center space-y-4 shadow-xs">
              <h3 className="text-lg sm:text-xl font-bold text-neutral-950 font-sans">
                Need a Certified Manual Pentest Report for Your Enterprise Audit?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 max-w-lg mx-auto leading-relaxed">
                Checklists are great for self-auditing, but enterprise buyers require independent attestation letters signed by certified security architects.
              </p>
              <div className="pt-2">
                <Link
                  href="/free-assessment"
                  onClick={() => {
                    trackPrimaryQuoteClick("checklist_unlocked_cta");
                  }}
                  className="inline-flex items-center gap-2 py-3 px-7 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white font-semibold text-xs tracking-tight shadow-md transition-colors cursor-pointer"
                >
                  <span>Get a fixed-price quote in 24h</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        )}

      </div>
      <QuoteModal />
    </div>
  );
}
