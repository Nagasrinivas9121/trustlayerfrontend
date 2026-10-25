"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, CheckCircle2, FileText, ArrowRight, Info, AlertTriangle, Code } from "lucide-react";
import { openQuoteModal } from "@/components/QuoteModal";
import { trackPrimaryQuoteClick, trackSampleReportView } from "@/lib/analytics";

export default function SecurityReportPreviewStatic() {
  return (
    <section id="sample-report-preview" className="w-full bg-[#FAFAFA] px-4 sm:px-6 py-20 border-t border-dashed border-neutral-200">
      <div className="max-w-[1140px] mx-auto w-full flex flex-col items-center">
        
        {/* Section Header */}
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 shadow-xs text-xs font-semibold text-neutral-800 mb-3">
            <FileText size={14} className="text-primary" />
            <span>Audit-Grade Deliverable</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 mb-4 font-sans">
            Sample Assessment Report Preview
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-xl mx-auto font-sans">
            See exactly what your engineering team receives: affected endpoints, reproducible cURL PoCs, root-cause analysis, code remediation, and retest verification.
          </p>
        </div>

        {/* Prominent Educational Notice: Representative Demonstration */}
        <div className="w-full max-w-4xl p-4 bg-white border border-amber-200 rounded-2xl mb-10 flex items-start gap-3 shadow-xs">
          <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-xs text-neutral-700 leading-relaxed font-sans">
            <strong className="text-neutral-950 uppercase tracking-wider block mb-0.5">
              Sample / Illustrative Finding — Not a Client Engagement
            </strong>
            This representative finding illustrates how TrustLayerLabs documents logical vulnerabilities, CVSS severity scoring, step-by-step developer reproduction scripts, and retesting verification under bilateral NDA.
          </div>
        </div>

        {/* Static Finding Card Showcase */}
        <div className="w-full max-w-4xl bg-white rounded-3xl border border-neutral-200 shadow-sm p-6 sm:p-8 space-y-6">
          
          {/* Finding Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-neutral-200 gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono font-bold text-neutral-400">FINDING-01</span>
                <span className="text-[11px] font-mono font-bold text-rose-700 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded-md">
                  CRITICAL (CVSS 9.8)
                </span>
                <span className="text-[11px] font-mono font-bold text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded-md">
                  CWE-639 / BOLA
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-neutral-950 font-sans">
                Broken Object Level Authorization (BOLA) on Workspace Export Endpoint
              </h3>
            </div>
            
            <div className="shrink-0">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold text-emerald-800">
                <CheckCircle2 size={13} />
                VERIFIED PATCHED
              </span>
            </div>
          </div>

          {/* Finding Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-sans">
            <div className="space-y-3">
              <div className="p-3.5 bg-neutral-50 rounded-2xl border border-neutral-200">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                  Vulnerable Target Endpoint
                </span>
                <code className="text-xs font-mono font-bold text-rose-600">
                  GET /api/v1/workspaces/&#123;workspaceId&#125;/export
                </code>
              </div>

              <div className="p-3.5 bg-neutral-50 rounded-2xl border border-neutral-200 space-y-1">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                  Attack Scenario &amp; Business Impact
                </span>
                <p className="text-neutral-700 leading-relaxed">
                  An authenticated user from Tenant A alters the <code className="font-mono bg-white px-1 py-0.5 rounded text-neutral-900">workspaceId</code> parameter to a UUID belonging to Tenant B. The API queries records without verifying tenant binding in the active session context, streaming confidential customer records across tenant boundaries.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="p-3.5 bg-neutral-50 rounded-2xl border border-neutral-200 space-y-1">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                  Root Cause Analysis
                </span>
                <p className="text-neutral-700 leading-relaxed">
                  The data access resolver queried the database exclusively by workspace ID from the URL path parameter, omitting a mandatory session tenant filter: <code className="font-mono bg-white px-1 py-0.5 rounded text-neutral-900">req.user.tenantId === requestedWorkspace.tenantId</code>.
                </p>
              </div>

              <div className="p-3.5 bg-emerald-50/60 rounded-2xl border border-emerald-200/80 space-y-1">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800 block mb-1">
                  30-Day Retest Verification Status
                </span>
                <p className="text-emerald-900 leading-relaxed font-medium">
                  Retested on commit <code className="font-mono bg-white px-1 py-0.5 rounded text-neutral-900">9c48f21</code>. Cross-tenant queries now strictly return <strong className="text-neutral-950 font-mono">HTTP 403 Forbidden</strong> and emit an authorization failure audit event.
                </p>
              </div>
            </div>
          </div>

          {/* Engineering Evidence & Reproduction Proof */}
          <div className="bg-neutral-50/80 rounded-2xl p-4 sm:p-5 border border-neutral-200 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-neutral-200 text-[11px] text-neutral-500 font-mono uppercase tracking-wider">
              <span className="font-semibold text-neutral-700">Reproducible Finding Proof of Concept</span>
              <span className="text-rose-700 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded text-[10px] font-bold">
                AUDIT EVIDENCE
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-white rounded-xl border border-neutral-200 space-y-1.5">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-600 block">
                  1. Unpatched Cross-Tenant Request
                </span>
                <div className="font-mono text-[11px] text-neutral-800 bg-neutral-50 p-2.5 rounded border border-neutral-200/60 break-all space-y-1">
                  <p><span className="text-emerald-700 font-bold">GET</span> /api/v1/workspaces/ws_tenant_bravo_02/export</p>
                  <p className="text-neutral-500 text-[10px]">Authorization: Bearer &lt;Tenant_A_JWT&gt;</p>
                </div>
                <p className="text-[11px] text-neutral-600 leading-relaxed font-sans">
                  <strong className="text-rose-700">Exploit Outcome:</strong> Server returned HTTP 200 with Tenant Bravo customer records.
                </p>
              </div>

              <div className="p-3 bg-white rounded-xl border border-emerald-200 space-y-1.5">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 block">
                  2. Patched &amp; Verified Retest
                </span>
                <div className="font-mono text-[11px] text-neutral-800 bg-neutral-50 p-2.5 rounded border border-neutral-200/60 break-all space-y-1">
                  <p><span className="text-neutral-900 font-bold">HTTP/2 403 Forbidden</span></p>
                  <p className="text-emerald-700 text-[10px]">{`{"error": "CROSS_TENANT_ACCESS_DENIED"}`}</p>
                </div>
                <p className="text-[11px] text-neutral-600 leading-relaxed font-sans">
                  <strong className="text-emerald-800">Resolution:</strong> Session tenant ID filter enforced in query. Cross-access strictly blocked.
                </p>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-dashed border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/sample-report"
              onClick={() => trackSampleReportView("sample_report_preview_card")}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-blue-700 transition-colors"
            >
              <span>Download full redacted sample PDF report</span>
              <ArrowRight size={13} />
            </Link>

            <button
              type="button"
              onClick={() => {
                trackPrimaryQuoteClick("sample_report_preview");
                openQuoteModal();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-semibold tracking-tight transition-colors cursor-pointer"
            >
              <span>Get a fixed-price quote in 24h</span>
              <ArrowRight size={14} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
