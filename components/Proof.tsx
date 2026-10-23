"use client";

import React, { useState } from "react";
import { ShieldCheck, Info, CheckCircle2, Award, Database, X, ExternalLink, FileCheck, Lock, Check } from "lucide-react";
import Image from "next/image";
import CertificateModal from "@/components/CertificateModal";

const auditFocusAreas = [
  {
    type: "COMPLIANCE & CONTROLS",
    title: "Regulatory Frameworks Mapping",
    impact: "We map your app logic, tenant segregation, and cloud access to SOC 2 Type II, ISO 27001:2022, and GDPR security requirements to clear vendor risk reviews without blockers.",
    icon: ShieldCheck,
    tag: "SOC 2 & ISO 27001",
    points: ["Control gap analysis", "Tenant isolation audit", "Audit-ready evidence packet"]
  },
  {
    type: "ACCESS SECURITY",
    title: "Tenant Boundary Validation",
    impact: "We test row-level database rules, session handling, and authorization tokens to uncover cross-tenant data leaks and privilege escalation vectors before production deployment.",
    icon: Database,
    tag: "Multi-Tenant Isolation",
    points: ["Row-Level Security (RLS)", "Cross-tenant BOLA testing", "Token state revocation"]
  },
  {
    type: "DATA INTEGRITY",
    title: "Cloud & Storage Governance",
    impact: "We review cloud storage ACLs, IAM principle-of-least-privilege configurations, and public endpoint policies to prevent sensitive customer database and artifact leaks.",
    icon: Lock,
    tag: "CIS Cloud Benchmarks",
    points: ["IAM privilege escalation", "Object storage ACL audits", "Private network segmentation"]
  }
];

export default function Proof() {
  const [showCertificate, setShowCertificate] = useState(false);

  return (
    <section className="py-24 sm:py-32 bg-background border-t border-dashed border-neutral-300/80" id="trust">
      <div className="section-container">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-neutral-200 shadow-sm rounded-full text-xs font-semibold text-neutral-800 uppercase tracking-wider mb-5">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>Compliance Alignment</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-tight mb-5 font-sans">
              Compliance Frameworks & <br className="hidden sm:inline" />
              <span className="text-primary">Industry Security Standards</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-sans">
              We align our manual penetration testing and configuration reviews with leading global compliance frameworks to support your institutional risk reviews.
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {["SOC 2 Readiness", "ISO 27001 Align", "RBI Guidelines", "HIPAA Safeguards"].map((item, i) => (
              <div 
                key={i} 
                className="flex items-center gap-2 px-3.5 py-2 bg-white border border-neutral-200 rounded-full text-xs font-semibold text-neutral-700 shadow-sm font-sans"
              >
                <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Vulnerability/Framework Cards Grid - CodeDale 3-Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {auditFocusAreas.map((v, i) => (
            <div
              key={i}
              className="p-8 bg-white border border-neutral-200/90 rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:border-neutral-400 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-primary text-[11px] font-mono font-bold tracking-wider">
                    <v.icon size={13} />
                    <span>{v.type}</span>
                  </div>
                  <span className="text-[11px] font-mono text-neutral-500 font-semibold bg-neutral-100 px-2.5 py-0.5 rounded-md">
                    {v.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-neutral-900 tracking-tight font-sans mb-3 group-hover:text-primary transition-colors">
                  {v.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans mb-6">
                  {v.impact}
                </p>
              </div>

              {/* Technical Points Checklist */}
              <div className="border-t border-dashed border-neutral-200 pt-4 space-y-2">
                {v.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2 text-xs text-neutral-700 font-sans">
                    <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200">
                      <Check size={10} strokeWidth={3} />
                    </div>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Practitioner Core Competencies - CodeDale Dashed Container */}
        <div className="p-8 sm:p-10 bg-white border border-dashed border-neutral-300 rounded-3xl mb-16 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs text-neutral-500 font-mono font-bold uppercase tracking-wider block mb-2">
              Practitioner Specializations
            </span>
            <h4 className="text-xl font-bold text-neutral-900 font-sans">
              Tested Against Recognized Offensive Standards
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "Web App VAPT", full: "Manual Application Security", authority: "OWASP Top 10", code: "AS-01" },
              { name: "API Security", full: "BOLA & Authorization Logic", authority: "OWASP API Top 10", code: "AP-02" },
              { name: "Cloud Security", full: "IAM & Infrastructure Hardening", authority: "CIS Benchmarks", code: "CS-03" },
              { name: "GRC Readiness", full: "ISO 27001 & SOC 2 Alignment", authority: "Compliance Mapping", code: "GR-04" }
            ].map((spec) => (
              <div 
                key={spec.name} 
                className="p-5 bg-neutral-50/70 border border-neutral-200 hover:border-neutral-400 rounded-2xl transition-all hover:bg-white hover:shadow-sm"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-bold text-primary bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-md">
                    {spec.code}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-500">
                    {spec.authority}
                  </span>
                </div>
                <h5 className="text-sm font-bold text-neutral-900 font-sans mb-1">{spec.name}</h5>
                <p className="text-xs text-neutral-600 leading-normal font-sans">{spec.full}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Business Registration & Verification Badges */}
        <div className="flex flex-col items-center text-center pt-8 border-t border-dashed border-neutral-300">
          <p className="text-neutral-600 mb-8 text-xs sm:text-sm max-w-2xl leading-relaxed font-sans">
            TrustLayerLabs is an offensive security consultancy providing manual VAPT, API security reviews, and GRC readiness advisory for SaaS, FinTech, and AI teams globally.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
            <button 
              onClick={() => setShowCertificate(true)}
              type="button"
              title="Click to view Official Govt. of India Udyam Registration Certificate"
              className="flex items-center gap-3 bg-white border border-neutral-200/90 hover:border-blue-400 hover:shadow-md transition-all rounded-full px-5 py-2.5 group text-left cursor-pointer shadow-sm"
            >
              <Award size={16} className="text-primary group-hover:scale-110 transition-transform shrink-0" />
              <div className="flex flex-col justify-center">
                <span className="text-xs font-bold text-neutral-900 uppercase leading-none mb-1 flex items-center gap-1.5">
                  MSME / UDYAM REGISTERED <span className="text-[10px] font-mono text-primary font-normal">🔍 preview</span>
                </span>
                <span className="text-[10px] font-mono text-neutral-500 leading-none">
                  UDYAM-AP-21-0044317 · GOVT OF INDIA
                </span>
              </div>
            </button>

            <a 
              href="/nda-process" 
              title="View Mutual NDA & Confidentiality Process"
              className="flex items-center gap-3 bg-white border border-neutral-200/90 hover:border-blue-400 hover:shadow-md transition-all rounded-full px-5 py-2.5 group text-left shadow-sm"
            >
              <ShieldCheck size={16} className="text-primary group-hover:scale-110 transition-transform shrink-0" />
              <div className="flex flex-col justify-center">
                <span className="text-xs font-bold text-neutral-900 uppercase leading-none mb-1">
                  MUTUAL NDA PROCESS
                </span>
                <span className="text-[10px] font-mono text-neutral-500 leading-none">
                  EXECUTED PRIOR TO TESTING
                </span>
              </div>
            </a>

            <a 
              href="/methodology" 
              title="Explore Manual Security Testing Methodology"
              className="flex items-center gap-3 bg-white border border-neutral-200/90 hover:border-blue-400 hover:shadow-md transition-all rounded-full px-5 py-2.5 group text-left shadow-sm"
            >
              <FileCheck size={16} className="text-primary group-hover:scale-110 transition-transform shrink-0" />
              <div className="flex flex-col justify-center">
                <span className="text-xs font-bold text-neutral-900 uppercase leading-none mb-1">
                  OWASP ALIGNED
                </span>
                <span className="text-[10px] font-mono text-neutral-500 leading-none">
                  MANUAL LOGIC METHODOLOGY
                </span>
              </div>
            </a>

            <a 
              href="/sample-report" 
              title="Inspect Redacted Sample VAPT Deliverable"
              className="flex items-center gap-3 bg-white border border-neutral-200/90 hover:border-blue-400 hover:shadow-md transition-all rounded-full px-5 py-2.5 group text-left shadow-sm"
            >
              <Award size={16} className="text-primary group-hover:scale-110 transition-transform shrink-0" />
              <div className="flex flex-col justify-center">
                <span className="text-xs font-bold text-neutral-900 uppercase leading-none mb-1">
                  SAMPLE DELIVERABLES
                </span>
                <span className="text-[10px] font-mono text-neutral-500 leading-none">
                  VIEW SAMPLE VAPT REPORT
                </span>
              </div>
            </a>

            <a 
              href="https://startupbase.io/products/trustlayerlabs?utm_source=startupbase&utm_medium=badge&utm_campaign=launch-badge-light" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center transition-transform hover:scale-105 h-[42px]"
              title="TrustLayerLabs launched on StartupBase"
            >
              <img 
                src="https://statics.startupbase.io/site/badges/launched-on-sb.svg" 
                alt="Launched on StartupBase" 
                height="42" 
                style={{ height: "42px", width: "auto" }}
                className="rounded-full shadow-sm border border-neutral-200"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Certificate Modal Showcase */}
      <CertificateModal 
        isOpen={showCertificate} 
        initialCertId="msme"
        onClose={() => setShowCertificate(false)} 
      />
    </section>
  );
}
