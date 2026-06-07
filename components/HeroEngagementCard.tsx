"use client";

import React from "react";
import { CheckCircle2, Shield, Calendar, ArrowUpRight, Code2 } from "lucide-react";

export default function HeroEngagementCard() {
  return (
    <div className="w-full rounded-2xl border border-border bg-[#121212] overflow-hidden shadow-2xl relative select-none">
      {/* Header bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-black/30">
        <div className="flex items-center space-x-2.5">
          <Shield size={14} className="text-primary" />
          <span className="text-[10px] font-mono font-bold text-white uppercase tracking-wider">
            Active Security Engagement
          </span>
        </div>
        <div className="flex items-center space-x-1.5 px-2 py-0.5 bg-success/10 border border-success/30 rounded text-[9px] font-bold text-success uppercase">
          <span className="w-1.5 h-1.5 bg-success rounded-full animate-pulse mr-1" />
          Verified Scope
        </div>
      </div>

      {/* Body Content */}
      <div className="p-6 space-y-6">
        
        {/* Engagement Parameters */}
        <div className="grid grid-cols-2 gap-4 border-b border-border/40 pb-5">
          <div>
            <span className="text-[9px] font-mono uppercase text-textSecondary tracking-wider block">Target Architecture</span>
            <span className="text-xs font-bold text-white block mt-0.5 font-sans">Multi-Tenant B2B SaaS</span>
          </div>
          <div>
            <span className="text-[9px] font-mono uppercase text-textSecondary tracking-wider block">Compliance Standards</span>
            <span className="text-xs font-bold text-white block mt-0.5 font-sans">SOC2 Type II & ISO 27001</span>
          </div>
        </div>

        {/* Audit Findings and Remediation Diff */}
        <div className="space-y-3">
          <div className="flex justify-between items-center text-[10px] font-mono">
            <span className="text-textSecondary uppercase tracking-wider">Audit Control: AC-04 (Access boundaries)</span>
            <span className="text-white font-bold">Ref: TTL-AUDIT-04</span>
          </div>
          
          {/* Mock Code Commit Box */}
          <div className="p-4 bg-black/40 border border-border rounded-xl font-mono text-[10px] leading-relaxed text-textSecondary">
            <div className="flex items-center gap-1.5 text-[9px] text-success font-bold uppercase tracking-wider mb-2">
              <Code2 size={12} /> Applied Remediation Patch
            </div>
            <div className="space-y-1.5">
              <div className="text-red-400 bg-red-500/5 px-1 rounded">- const account = await Account.findById(req.body.id);</div>
              <div className="text-success bg-success/5 px-1 rounded">+ if (req.user.accountId !== req.body.id) &#123;</div>
              <div className="text-success bg-success/5 px-1 rounded">+   return res.status(403).json(&#123; error: &quot;Unauthorized&quot; &#125;);</div>
              <div className="text-success bg-success/5 px-1 rounded">+ &#125;</div>
            </div>
          </div>
        </div>

        {/* Milestones / Checklist */}
        <div className="space-y-2.5 pt-1">
          <div className="text-[9px] font-mono text-textSecondary uppercase tracking-wider mb-2">Audit Engagement Milestones</div>
          
          <div className="flex items-center justify-between text-xs font-sans">
            <div className="flex items-center space-x-2 text-textSecondary">
              <CheckCircle2 size={14} className="text-primary" />
              <span>Manual API Scoping & Access Path Review</span>
            </div>
            <span className="text-[10px] font-mono text-textSecondary uppercase">Completed</span>
          </div>
          
          <div className="flex items-center justify-between text-xs font-sans">
            <div className="flex items-center space-x-2 text-textSecondary">
              <CheckCircle2 size={14} className="text-primary" />
              <span>Cloud IAM Credentials Lease Validation</span>
            </div>
            <span className="text-[10px] font-mono text-textSecondary uppercase">Completed</span>
          </div>

          <div className="flex items-center justify-between text-xs font-sans">
            <div className="flex items-center space-x-2 text-white font-semibold">
              <div className="w-3.5 h-3.5 rounded-full border-2 border-primary border-t-transparent animate-spin" />
              <span>Developer Remediation Check & Retesting</span>
            </div>
            <span className="text-[10px] font-mono text-primary uppercase font-bold">Active</span>
          </div>
        </div>

      </div>

      {/* Footer Attestation details */}
      <div className="border-t border-border/60 bg-black/10 px-6 py-4 flex items-center justify-between text-[9px] font-mono uppercase tracking-widest text-textSecondary">
        <span className="flex items-center gap-1.5">
          <Calendar size={12} className="text-primary" /> Audit Scheduled: June 2026
        </span>
        <span className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer">
          Intake Document <ArrowUpRight size={10} />
        </span>
      </div>
    </div>
  );
}
