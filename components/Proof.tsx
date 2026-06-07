"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Info, CheckCircle2, Award, Rocket, Database, Network, Briefcase, ThumbsUp, Cpu, ListChecks, Star, FileText, BadgeCheck } from "lucide-react";

const auditFocusAreas = [
  {
    type: "COMPLIANCE & CONTROLS",
    title: "Regulatory Frameworks Mapping",
    impact: "Align application logic and infrastructure controls to meet SOC2 Type II, ISO 27001, and HIPAA criteria.",
    icon: ShieldCheck,
    color: "text-primary",
    border: "border-primary/20",
    bg: "bg-primary/5"
  },
  {
    type: "ACCESS SECURITY",
    title: "Tenant Boundary Validation",
    impact: "Verify row-level database access limits, session cookie validation, and secure API parameter authorization checks.",
    icon: Database,
    color: "text-primary",
    border: "border-primary/20",
    bg: "bg-primary/5"
  },
  {
    type: "DATA INTEGRITY",
    title: "Cloud & Storage Governance",
    impact: "Audit storage encryption protocols, pre-signed download controls, least-privilege AWS IAM policies, and log trails.",
    icon: Info,
    color: "text-primary",
    border: "border-primary/20",
    bg: "bg-primary/5"
  }
];

const platforms = [
  { name: "ProductHunt", icon: Rocket, color: "text-[#da552f]", href: "https://www.producthunt.com/@nagasrinivas" },
  { name: "Crunchbase", icon: Database, color: "text-[#1483c2]", href: "https://www.crunchbase.com/organization/trustlayerlabs" },
  { name: "F6S", icon: Network, color: "text-[#2e8c4a]" },
  { name: "Contra", icon: Briefcase, color: "text-[#ff6b6b]", href: "https://contra.com/trustlayer_labs_6c8shdzq/about" },
  { name: "GoodFirms", icon: ThumbsUp, color: "text-[#1a73e8]", href: "https://www.goodfirms.co/company/trustlayerlabs" },
  { name: "TechBehemoths", icon: Cpu, color: "text-[#6366f1]", href: "https://techbehemoths.com/company/trustlayerlabs" },
  { name: "Sortlist", icon: ListChecks, color: "text-[#f59e0b]", href: "https://www.sortlist.com/agency/trustlayerlabs" },
  { name: "Clutch", icon: Star, color: "text-[#ef4444]", href: "https://clutch.co/profile/trustlayerlabs" },
  { name: "The Manifest", icon: FileText, color: "text-[#f97316]" },
  { name: "DesignRush", icon: BadgeCheck, color: "text-[#38bdf8]", href: "https://www.designrush.com/agency/profile/trustlayer-labs" }
];

export default function Proof() {
  return (
    <section className="py-24 bg-background border-t border-border" id="trust">
      <div className="section-container">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-6">
              <span>Enterprise Attestations</span>
            </div>
            <h2 className="heading-2 mb-6 font-sans">
              Compliance Frameworks & <br />
              <span className="text-primary">Industry Security Standards</span>
            </h2>
            <p className="body-text text-textSecondary">
              We align our manual penetration testing and configuration reviews with leading global compliance frameworks to ensure you pass institutional risk reviews.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            {["SOC2 Readiness", "ISO 27001 Align", "RBI Compliance"].map((item, i) => (
              <div key={i} className="flex items-center space-x-2 text-xs font-bold text-textSecondary uppercase tracking-wider">
                <CheckCircle2 size={14} className="text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Vulnerability/Framework Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {auditFocusAreas.map((v, i) => (
            <div
              key={i}
              className="premium-card p-8 bg-surface border border-border hover:border-zinc-400 transition-all rounded-xl shadow-sm"
            >
              <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary text-xs font-sans font-semibold tracking-wider mb-6">
                <v.icon size={12} />
                <span>{v.type}</span>
              </div>
              <h3 className="text-sm font-bold text-textPrimary uppercase tracking-wider font-sans mb-4">{v.title}</h3>
              <p className="text-sm text-textSecondary leading-relaxed">
                {v.impact}
              </p>
            </div>
          ))}
        </div>

        {/* MSME & Verification Badges */}
        <div className="flex flex-col items-center text-center pt-8 border-t border-border/40">
          <p className="text-textSecondary mb-8 text-sm max-w-xl leading-relaxed">
            All audits are signed by OSCP, CEH, and eWPT certified security architects. We operate out of Bangalore and Hyderabad tech hubs.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
            <a href="https://sellwithboost.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-90 transition-opacity">
              <img src="https://sellwithboost.com/badge/listing.svg" alt="Listed on Sell With boost" style={{ height: '32px', width: 'auto' }} />
            </a>
            
            <a href="https://www.designrush.com/agency/profile/trustlayer-labs" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-surface border border-border rounded-lg px-4 h-[36px] hover:bg-zinc-100 transition-colors shadow-sm">
               <span className="text-textPrimary font-bold text-[12px] tracking-tight">Design<span className="text-primary">Rush</span></span>
               <div className="h-4 w-[1px] bg-border"></div>
               <span className="text-xs text-textSecondary font-semibold uppercase tracking-wider">Verified</span>
            </a>

            <div className="flex items-center space-x-3 bg-surface border border-border rounded-lg px-4 h-[36px] cursor-default">
              <Award size={16} className="text-primary" />
              <div className="flex flex-col justify-center text-left">
                <span className="text-xs font-bold text-textPrimary uppercase leading-none mb-0.5">MSME REGISTERED</span>
                <span className="text-[10px] text-textSecondary font-medium leading-none tracking-wide">GOVT OF INDIA</span>
              </div>
            </div>
          </div>
          
          {/* Slider list of listings */}
          <div className="mt-4 pt-6 border-t border-border/30 w-full max-w-5xl overflow-hidden">
            <p className="text-xs text-textSecondary font-semibold mb-6 uppercase tracking-wider">Audit Attestations Recognized & Listed On</p>
            
            <div 
              className="relative flex overflow-hidden w-full"
              style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
            >
              <motion.div 
                className="flex items-center gap-x-12 whitespace-nowrap py-2 min-w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ ease: "linear", duration: 35, repeat: Infinity }}
              >
                {[...platforms, ...platforms].map((platform, i) => (
                  <div key={i} className="flex items-center gap-x-12">
                    {platform.href ? (
                      <a href={platform.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-2 group cursor-pointer hover:translate-y-[-1px] transition-transform">
                        <platform.icon size={14} className="text-textSecondary group-hover:text-primary transition-colors" />
                        <span className="text-xs text-textSecondary group-hover:text-textPrimary transition-colors">
                          {platform.name}
                        </span>
                      </a>
                    ) : (
                      <div className="flex items-center gap-x-2 group cursor-default">
                        <platform.icon size={14} className="text-textSecondary group-hover:text-primary transition-colors" />
                        <span className="text-xs text-textSecondary group-hover:text-textPrimary transition-colors">
                          {platform.name}
                        </span>
                      </div>
                    )}
                    <span className="text-border text-xs">•</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
