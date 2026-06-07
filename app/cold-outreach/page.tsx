"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, ArrowRight, AlertOctagon } from "lucide-react";

export default function ColdOutreachPage() {
  return (
    <div className="bg-background min-h-screen">
      <main className="pt-32 pb-24 text-textPrimary">
        <div className="section-container max-w-4xl">
          
          {/* Main Hero Header */}
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-surface border border-border rounded-full text-[10px] font-bold text-critical uppercase tracking-widest shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-critical opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-critical"></span>
              </span>
              <span>Priority Startup Audits Available</span>
            </div>

            <h1 className="heading-1 text-textPrimary text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Get an Expert <span className="text-primary">Security Snapshot</span> in 48 Hours.
            </h1>

            <p className="body-text text-base max-w-2xl mx-auto">
              Are you pitching to an enterprise buyer or closing your next funding round? Don&apos;t let compliance blocks or unpatched API bugs stall your deal. We perform expedited logic checks on your critical endpoints.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link 
                href="https://calendar.app.google/jnamj3gawxVunPJm9" 
                target="_blank"
                className="bg-primary hover:bg-primary-hover text-white text-xs uppercase font-sans tracking-wider font-semibold py-3.5 px-8 rounded-full flex items-center gap-1.5 shadow-md transition-all active:scale-[0.98]"
              >
                Claim Free Snapshot <ArrowRight size={14} />
              </Link>
              <Link 
                href="/contact" 
                className="bg-surface border border-border hover:border-zinc-400 text-textPrimary text-xs uppercase font-sans tracking-wider font-semibold py-3.5 px-8 rounded-full shadow-sm transition-all"
              >
                Talk to Architect
              </Link>
            </div>
          </div>

          {/* Quick Comparison Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
            {/* Scanners Card */}
            <div className="bg-surface border border-border p-6 rounded-2xl space-y-4 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-critical/10 flex items-center justify-center text-critical">
                <AlertOctagon size={18} />
              </div>
              <h3 className="text-base font-bold text-textPrimary tracking-tight font-sans">
                Automated Scanners
              </h3>
              <ul className="space-y-2 text-xs text-textSecondary font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-critical">•</span>
                  <span>Miss authorization logic (BOLA/IDOR)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-critical">•</span>
                  <span>Throw 100+ false-positive alerts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-critical">•</span>
                  <span>Fail to provide usable remediation code</span>
                </li>
              </ul>
            </div>

            {/* TrustLayer Card */}
            <div className="bg-primary/5 border border-primary/20 p-6 rounded-2xl space-y-4 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center text-success">
                <ShieldCheck size={18} />
              </div>
              <h3 className="text-base font-bold text-textPrimary tracking-tight font-sans text-primary">
                TrustLayerLabs VAPT
              </h3>
              <ul className="space-y-2 text-xs text-textPrimary font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-success">✓</span>
                  <span>100% manual business logic auditing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success">✓</span>
                  <span>Expedited 48-hour initial log reports</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success">✓</span>
                  <span>Attestation certificates for enterprise buyers</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Social Proof */}
          <div className="p-8 bg-surface border border-border rounded-2xl text-center space-y-6 shadow-sm">
            <p className="text-xs text-textSecondary italic leading-relaxed">
              &ldquo;TrustLayerLabs was a lifesaver. They identified an auth bypass in our payments gateway in under 12 hours. We patched it overnight and passed our hospital procurement review the following morning.&rdquo;
            </p>
            <div className="font-sans text-[10px] text-textSecondary uppercase tracking-wider font-bold">
              — Siddharth Sharma, Co-Founder & CTO at PayFlow India
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
