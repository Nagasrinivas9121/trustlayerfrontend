"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, MapPin, ShieldCheck, ArrowRight, Calendar, FileText } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function VaptBangalore() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-24 text-textPrimary font-sans">
      <div className="section-container max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 space-y-6">
          <Link 
            href="/" 
            className="inline-flex items-center text-xs uppercase font-sans tracking-widest text-textSecondary hover:text-textPrimary transition-colors gap-2 mb-4 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
            Back to Home
          </Link>

          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-[10px] font-bold text-primary uppercase tracking-wider">
            <MapPin size={12} className="text-primary" />
            <span>Serving Technology Teams Across India</span>
          </div>

          <h1 className="heading-1 text-textPrimary text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            VAPT Services for <span className="text-primary">Teams in Bangalore</span>
          </h1>

          <p className="body-text text-base max-w-3xl text-textSecondary leading-relaxed font-sans">
            Manual offensive security testing, API penetration testing, and GRC readiness consulting for fast-growing SaaS, FinTech, and AI teams in Bangalore and across India.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link 
              href="/free-assessment" 
              className="px-8 py-3.5 bg-primary hover:bg-primary-hover text-white text-xs uppercase font-sans font-bold tracking-wider rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              <ShieldCheck size={15} />
              <span>Get a Free Security Review</span>
            </Link>
            <Link 
              href="/sample-report"
              className="px-8 py-3.5 bg-surface border border-border hover:border-zinc-400 text-xs uppercase font-sans font-semibold tracking-wider rounded-xl text-textPrimary hover:text-primary transition-all flex items-center gap-2"
            >
              <FileText size={15} />
              <span>View Sample Report</span>
            </Link>
          </div>
        </div>

        {/* Section details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-16">
          
          <div className="bg-surface border border-border p-8 rounded-2xl space-y-4 flex flex-col justify-between shadow-sm">
            <div>
              <h2 className="text-base font-bold text-textPrimary tracking-tight font-sans">
                Practitioner-Led Assessments
              </h2>
              <p className="text-xs text-textSecondary leading-relaxed mt-2 font-sans">
                Our offensive security engineers collaborate directly with your development team. We conduct remote-first technical scoping reviews under mutual NDA with fast developer feedback loops, providing proof-of-concept exploits and remediation advice.
              </p>
            </div>
            
            <div className="pt-4 border-t border-border/60 text-xs font-sans text-textPrimary">
              📍 Remote-First Assessments Serving Technology Teams in Bangalore & Across India
            </div>
          </div>

          <div className="bg-surface border border-border p-8 rounded-2xl space-y-4 flex flex-col justify-between shadow-sm">
            <div>
              <h2 className="text-base font-bold text-textPrimary tracking-tight font-sans text-primary">
                Why Manual VAPT?
              </h2>
              <p className="text-xs text-textSecondary leading-relaxed mt-2 font-sans">
                Bengaluru startups scale rapidly with complex microservice APIs, multi-tenant databases, and custom transaction logic. Automated scanners miss business logic flaws and BOLA vulnerabilities. We provide thorough human verification and code-level remediation guidance.
              </p>
            </div>

            <div className="pt-4 border-t border-border/60 flex flex-wrap gap-3 text-[10px] font-sans font-bold text-textPrimary">
              <span className="flex items-center gap-1.5"><ShieldCheck size={12} className="text-primary" /> 30-DAY RETEST INCLUDED</span>
              <span className="flex items-center gap-1.5"><ShieldCheck size={12} className="text-primary" /> MUTUAL NDA UPFRONT</span>
            </div>
          </div>

        </div>

        {/* Regional Tech Ecosystem Context */}
        <div className="mb-16 bg-surface border border-border/80 rounded-2xl p-8 shadow-sm">
          <h2 className="text-xl font-bold text-textPrimary tracking-tight font-sans mb-4">
            Security Compliance for Bangalore&apos;s SaaS & AI Hub
          </h2>
          <p className="text-xs text-textSecondary leading-relaxed font-sans mb-4">
            From Koramangala and Indiranagar to HSR Layout and Whitefield, Bangalore represents India&apos;s highest concentration of venture-backed SaaS startups and AI innovators. As engineering organizations prepare for global enterprise procurement, demonstrating certified application security is mandatory.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 bg-background border border-border/60 rounded-xl space-y-1.5">
              <h3 className="text-xs font-bold text-textPrimary font-sans">Enterprise Procurement</h3>
              <p className="text-[11px] text-textSecondary font-sans">
                Pass Fortune 500 vendor risk assessments with executive attestation letters signed by certified OSCP and ISO 27001 lead auditors.
              </p>
            </div>
            <div className="p-4 bg-background border border-border/60 rounded-xl space-y-1.5">
              <h3 className="text-xs font-bold text-textPrimary font-sans">RBI & CERT-In Compliance</h3>
              <p className="text-[11px] text-textSecondary font-sans">
                Meet regulatory mandates for FinTech applications, payment gateways, and banking APIs operating in the Indian financial ecosystem.
              </p>
            </div>
            <div className="p-4 bg-background border border-border/60 rounded-xl space-y-1.5">
              <h3 className="text-xs font-bold text-textPrimary font-sans">Developer-First Sprints</h3>
              <p className="text-[11px] text-textSecondary font-sans">
                Seamless integration with GitHub/GitLab PRs, fast Slack/Teams debrief calls, and free 30-day retesting to verify fixes.
              </p>
            </div>
          </div>
        </div>

        {/* Cross Links */}
        <div className="my-12">
          <h2 className="text-sm font-bold text-textPrimary uppercase tracking-wider font-sans mb-4">
            Core Assessment Capabilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/services/api-security" className="p-5 bg-surface border border-border rounded-xl hover:border-primary/50 transition-colors">
              <h3 className="text-xs font-bold text-textPrimary uppercase font-sans mb-1">API Security Testing →</h3>
              <p className="text-[11px] text-textSecondary">BOLA, BFLA & JWT penetration testing.</p>
            </Link>
            <Link href="/fintech-security" className="p-5 bg-surface border border-border rounded-xl hover:border-primary/50 transition-colors">
              <h3 className="text-xs font-bold text-textPrimary uppercase font-sans mb-1">FinTech Security →</h3>
              <p className="text-[11px] text-textSecondary">Payment logic & transaction workflow audits.</p>
            </Link>
            <Link href="/grc-readiness" className="p-5 bg-surface border border-border rounded-xl hover:border-primary/50 transition-colors">
              <h3 className="text-xs font-bold text-textPrimary uppercase font-sans mb-1">SOC 2 & ISO Readiness →</h3>
              <p className="text-[11px] text-textSecondary">Technical controls mapping & advisory.</p>
            </Link>
          </div>
        </div>

      </div>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
}
