"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, ArrowRight, AlertOctagon, ArrowLeft, Calendar, FileText } from "lucide-react";

export default function ColdOutreachPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen pt-32 pb-24 text-neutral-900 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Pill */}
        <Link 
          href="/" 
          className="inline-flex items-center text-xs font-semibold text-neutral-500 hover:text-neutral-900 transition-colors gap-2 mb-8 group px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 shadow-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>

        {/* Main Hero Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/80 shadow-sm text-xs font-semibold text-neutral-800">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Priority Startup Audits Available</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950">
            Get an Expert <span className="text-neutral-900">Security Snapshot</span> in 48 Hours.
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Are you pitching to an enterprise buyer or closing your next funding round? Don&apos;t let compliance blocks or unpatched API bugs stall your deal. We perform expedited logic checks on your critical endpoints.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link 
              href="https://cal.com/nagasrinivasarao/30min" 
              target="_blank"
              className="w-full sm:w-auto px-7 py-3.5 bg-neutral-900 hover:bg-black text-white text-xs font-semibold rounded-full flex items-center justify-center gap-2 shadow-md transition-all group"
            >
              <Calendar size={14} />
              <span>Request Free Pilot Scope</span>
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link 
              href="/contact" 
              className="w-full sm:w-auto px-7 py-3.5 bg-white border border-neutral-200 hover:border-neutral-400 text-neutral-800 text-xs font-semibold rounded-full shadow-sm transition-all"
            >
              Talk to Architect
            </Link>
          </div>
        </div>

        {/* Quick Comparison Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          
          {/* Scanners Card */}
          <div className="bg-white border border-neutral-200/80 p-8 rounded-3xl space-y-4 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
            <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600">
              <AlertOctagon size={18} />
            </div>
            <h3 className="text-base font-bold text-neutral-950 tracking-tight">
              Automated Scanners
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-600">
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold">•</span>
                <span>Miss authorization logic (BOLA/IDOR)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold">•</span>
                <span>Throw 100+ false-positive alerts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold">•</span>
                <span>Fail to provide usable remediation code</span>
              </li>
            </ul>
          </div>

          {/* TrustLayer Card */}
          <div className="bg-white border border-neutral-900/10 p-8 rounded-3xl space-y-4 shadow-[0_4px_24px_rgba(0,0,0,0.02)] relative overflow-hidden">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
              <ShieldCheck size={18} />
            </div>
            <h3 className="text-base font-bold text-neutral-950 tracking-tight">
              TrustLayerLabs Manual VAPT
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-700">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>100% manual business logic auditing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Expedited 48-hour initial log reports</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Retest verification documentation for enterprise buyers</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Transparent Testing Commitment */}
        <div className="p-8 sm:p-10 bg-white border border-dashed border-neutral-300 rounded-3xl text-center space-y-4 shadow-sm">
          <h4 className="text-xs font-bold text-neutral-950 uppercase tracking-wider">
            Confidential & Practitioner-Led Reviews
          </h4>
          <p className="text-xs sm:text-sm text-neutral-600 max-w-xl mx-auto leading-relaxed">
            All scoping and security evaluations are executed under a mutual Non-Disclosure Agreement (NDA). We review your API authorization architecture, token state handling, and business logic without disrupting production traffic.
          </p>
          <div className="pt-2">
            <Link
              href="/sample-report"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-950 hover:underline underline-offset-2"
            >
              <span>View Redacted Sample Report</span> &rarr;
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
