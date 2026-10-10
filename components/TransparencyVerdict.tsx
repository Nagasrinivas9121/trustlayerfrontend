"use client";

import React from "react";
import { ShieldCheck, AlertCircle, ArrowUpRight, Award, TrendingUp, CheckCircle } from "lucide-react";

export default function TransparencyVerdict() {
  const remediationItems = [
    {
      area: "Zero Fabricated Social Proof & Testimonials",
      feedback: "How does a prospective client verify TrustLayerLabs without past client testimonials?",
      status: "Guaranteed",
      resolution: "We do not publish fabricated client reviews or purchased ratings. Instead, we provide our full sample VAPT report and reproducible attack logic so technical leaders can judge our rigor directly.",
      detailsLink: "/sample-report"
    },
    {
      area: "Illustrative Vulnerability Research & Attack Scenarios",
      feedback: "Are public vulnerability write-ups real client breach engagements?",
      status: "Verified",
      resolution: "All published scenarios are research-driven technical breakdowns built on synthetic testbeds and modern frameworks, ensuring zero manufactured customer stories.",
      detailsLink: "/case-studies"
    },
    {
      area: "Verifiable Practitioner Identity & MSME Entity",
      feedback: "Who executes the security assessments and what legal entity backs the engagement?",
      status: "Verified",
      resolution: "Every engagement is led by our founding security architects (IIT Guwahati & VIT Bhopal) backed by our official Govt. of India Udyam MSME registration (UDYAM-AP-21-0044317).",
      detailsLink: "/#team"
    },
    {
      area: "Strict Bilateral NDA Execution",
      feedback: "How is proprietary startup architecture safeguarded during scoping and testing?",
      status: "Enforced",
      resolution: "We execute a bilateral Non-Disclosure Agreement prior to receiving any staging URLs, API keys, or architectural documentation.",
      detailsLink: "/nda-process"
    }
  ];

  return (
    <div className="mt-16 border-t border-border/60 pt-16" id="verdict">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center gap-2.5 mb-8">
          <div className="w-1.5 h-6 bg-primary rounded-full"></div>
          <h3 className="text-lg font-bold text-textPrimary uppercase tracking-wider font-sans">
            Credibility & Transparency Commitments
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
                  Founder-Led Credibility Standard
                </span>
                <p className="text-sm md:text-base text-textPrimary font-semibold leading-relaxed mt-2 italic font-sans">
                  &ldquo;As an emerging offensive security consultancy, TrustLayerLabs rejects manufactured social proof, fake client logos, and inflated experience claims. We earn engineering trust through transparent manual methodologies, reproducible PoCs, mutual NDAs, and verifiable legal accountability.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Areas of Improvement & Response */}
        <div className="space-y-6">
          <h4 className="text-xs font-mono text-textSecondary uppercase tracking-widest font-bold mb-4">
            Our Core Transparency Guarantees
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
                      Inquiry: &ldquo;{item.feedback}&rdquo;
                    </p>
                    <p className="text-xs text-textPrimary leading-relaxed font-semibold">
                      Commitment: {item.resolution}
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
                    title="View details"
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
