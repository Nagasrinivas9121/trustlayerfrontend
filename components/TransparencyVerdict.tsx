"use client";

import React from "react";
import { ShieldCheck, AlertCircle, ArrowUpRight, Award, TrendingUp, CheckCircle } from "lucide-react";

export default function TransparencyVerdict() {
  const remediationItems = [
    {
      area: "Independently verifiable customer reviews & testimonials",
      feedback: "More independently verifiable customer reviews and testimonials.",
      status: "Implemented",
      resolution: "LinkedIn links added to all client testimonials for direct executive verification, alongside linked directory profiles on Clutch, GoodFirms, and DesignRush.",
      detailsLink: "/#testimonials"
    },
    {
      area: "Detailed public case studies with measurable outcomes",
      feedback: "More detailed public case studies with measurable outcomes.",
      status: "Implemented",
      resolution: "Expanded our VAPT case studies with quantifiable impact parameters, including customer records secured, compliance metrics, and contracts unlocked.",
      detailsLink: "/case-studies"
    },
    {
      area: "Greater visibility of team members, certifications, or industry recognition",
      feedback: "Greater visibility of team members, certifications, or industry recognition.",
      status: "Implemented",
      resolution: "Moved our CEH, eWPT, VAPT, and Network Pentesting certified engineering team section to the main homepage. Prominently featured our MSME Government of India registration.",
      detailsLink: "/#team"
    },
    {
      area: "Expanded technical blogs and research to strengthen search authority",
      feedback: "Expanded technical blogs and research to strengthen search authority and thought leadership.",
      status: "Implemented",
      resolution: "Enriched our Security Library with deep-dive, code-level vulnerability write-ups (e.g., GraphQL & REST API BOLA/IDOR auditing protocols).",
      detailsLink: "/blog"
    }
  ];

  return (
    <div className="mt-16 border-t border-border/60 pt-16" id="verdict">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center gap-2.5 mb-8">
          <div className="w-1.5 h-6 bg-primary rounded-full"></div>
          <h3 className="text-lg font-bold text-textPrimary uppercase tracking-wider font-sans">
            Independent Evaluation & Transparency Report
          </h3>
        </div>

        {/* Verdict Box */}
        <div className="premium-card p-8 bg-surface/40 border border-border/80 rounded-2xl relative overflow-hidden mb-12 shadow-sm">
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full pointer-events-none" />
          
          <div className="flex gap-5 items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center text-primary shadow-sm">
                <Award size={22} />
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-mono text-primary uppercase tracking-widest font-bold">
                  External Evaluator Final Verdict
                </span>
                <p className="text-sm md:text-base text-textPrimary font-semibold leading-relaxed mt-2 italic font-sans">
                  &ldquo;For a relatively new cybersecurity company, TrustLayer Labs presents itself professionally and appears well-positioned in the VAPT and application security space. Publicly available information indicates a focus on modern application, API, and cloud security assessments aligned with industry best practices.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Areas of Improvement & Response */}
        <div className="space-y-6">
          <h4 className="text-xs font-mono text-textSecondary uppercase tracking-widest font-bold mb-4">
            Response & Active Remediation Checklist
          </h4>

          <div className="grid grid-cols-1 gap-4">
            {remediationItems.map((item, index) => (
              <div 
                key={index}
                className="p-6 bg-surface border border-border/80 rounded-xl flex flex-col md:flex-row justify-between gap-6 hover:border-zinc-400 transition-colors"
              >
                <div className="flex gap-4 items-start flex-1">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-success fill-success/10" />
                  </div>
                  <div className="space-y-2">
                    <h5 className="text-xs font-bold text-textPrimary uppercase tracking-wider font-sans">
                      {item.area}
                    </h5>
                    <p className="text-xs text-textSecondary leading-relaxed italic">
                      Critique: &ldquo;{item.feedback}&rdquo;
                    </p>
                    <p className="text-xs text-textPrimary leading-relaxed font-semibold">
                      Resolution: {item.resolution}
                    </p>
                  </div>
                </div>

                <div className="flex items-center self-start md:self-center gap-3">
                  <span className="px-2.5 py-1 text-[9px] font-mono font-bold uppercase tracking-wider bg-success/10 text-success border border-success/20 rounded-md">
                    {item.status}
                  </span>
                  
                  <a 
                    href={item.detailsLink} 
                    className="p-1.5 bg-background border border-border hover:border-primary text-textSecondary hover:text-primary rounded-lg transition-colors"
                    title="View updates"
                  >
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
