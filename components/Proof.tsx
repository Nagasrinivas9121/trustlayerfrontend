"use client";

import React from "react";
import { ShieldCheck, Info, CheckCircle2, Award, Database } from "lucide-react";

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

export default function Proof() {
  return (
    <section className="py-24 bg-background border-t border-border" id="trust">
      <div className="section-container">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-6">
              <span>Compliance Alignment</span>
            </div>
            <h2 className="heading-2 mb-6 font-sans">
              Compliance Frameworks & <br />
              <span className="text-primary">Industry Security Standards</span>
            </h2>
            <p className="body-text text-textSecondary">
              We align our manual penetration testing and configuration reviews with leading global compliance frameworks to support your institutional risk reviews.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            {["SOC 2 Readiness", "ISO 27001 Align", "RBI Guidelines"].map((item, i) => (
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

        {/* Practitioner Core Competencies */}
        <div className="flex flex-col items-center mb-12">
          <p className="text-xs text-textSecondary font-semibold mb-6 uppercase tracking-wider font-sans">Practitioner Specializations & Capabilities</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl font-sans">
            {[
              { name: "Web App VAPT", full: "Manual Application Security", authority: "OWASP Top 10" },
              { name: "API Security", full: "BOLA & Authorization Logic", authority: "OWASP API Top 10" },
              { name: "Cloud Security", full: "IAM & Infrastructure Hardening", authority: "CIS Benchmarks" },
              { name: "GRC Readiness", full: "ISO 27001 & SOC 2 Alignment", authority: "Compliance Mapping" }
            ].map((spec) => (
              <div key={spec.name} className="flex items-center gap-3.5 p-4 bg-surface border border-border/80 rounded-xl text-left shadow-sm hover:border-primary/40 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold font-mono text-xs flex-shrink-0">
                  {spec.name.split(" ")[0]}
                </div>
                <div>
                  <span className="text-xs font-bold text-textPrimary block">{spec.name}</span>
                  <span className="text-[10px] text-textSecondary block leading-normal">{spec.full}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Business Registration & Verification Badges */}
        <div className="flex flex-col items-center text-center pt-8 border-t border-border/40">
          <p className="text-textSecondary mb-8 text-xs max-w-xl leading-relaxed font-sans">
            TrustLayerLabs is an offensive security consultancy providing manual VAPT, API security reviews, and GRC readiness advisory for tech teams across India.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <a href="https://sellwithboost.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-90 transition-opacity" title="Skill With Boost Ecosystem Listing">
              <img src="https://sellwithboost.com/badge/listing.svg" alt="Listed on Skill With Boost" style={{ height: '32px', width: 'auto' }} />
            </a>

            <a 
              href="/trustlayerlabs-udyam-registration-certificate.jpg" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="View Official Govt. of India Udyam Registration Certificate (UDYAM-AP-21-0044317)"
              className="flex items-center space-x-3 bg-surface border border-border hover:border-primary/50 transition-all rounded-lg px-4 h-[36px] group shadow-sm"
            >
              <Award size={16} className="text-primary group-hover:scale-110 transition-transform" />
              <div className="flex flex-col justify-center text-left">
                <span className="text-xs font-bold text-textPrimary uppercase leading-none mb-0.5 flex items-center gap-1.5">
                  MSME / UDYAM REGISTERED <span className="text-[9px] font-mono text-primary lowercase tracking-normal font-normal">↗ view certificate</span>
                </span>
                <span className="text-[10px] text-textSecondary font-medium leading-none tracking-wide">
                  UDYAM-AP-21-0044317 • GOVT OF INDIA
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
