import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Lock, FileText, CheckCircle, Calendar, ArrowRight, FileCheck } from "lucide-react";
import type { Metadata } from "next";
import ObfuscatedEmailLink from "@/components/ObfuscatedEmailLink";

export const metadata: Metadata = {
  title: "NDA & Confidentiality Policy",
  description: "Learn how TrustLayerLabs protects customer confidentiality with mutual NDAs, encrypted report storage, and zero-retention security protocols.",
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/nda-process",
  },
};

export default function NdaProcessPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen pt-32 pb-24 font-sans text-neutral-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Pill */}
        <Link 
          href="/" 
          className="inline-flex items-center text-xs font-semibold text-neutral-500 hover:text-neutral-900 transition-colors gap-2 mb-8 group px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 shadow-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>

        {/* Hero Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/80 shadow-sm text-xs font-semibold text-neutral-800 mb-5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Strict Client Privacy Guarantee</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 mb-5">
            Bilateral Mutual NDA & <br className="hidden sm:inline" />
            <span className="text-neutral-900">Confidentiality Protocol</span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl">
            Cybersecurity requires absolute trust. At TrustLayerLabs, we execute mutual Non-Disclosure Agreements (NDAs) before inspecting a single line of code or analyzing target environments.
          </p>
        </div>

        {/* 4 Core Pillars */}
        <div className="space-y-5 mb-14">
          <div className="flex items-center justify-between pb-2 border-b border-dashed border-neutral-200">
            <h2 className="text-lg font-bold text-neutral-950">
              Our 4-Stage Confidentiality Protocol
            </h2>
            <span className="text-xs font-mono text-neutral-400">NIST SP 800-88 & AES-256</span>
          </div>

          <div className="p-7 bg-white border border-neutral-200/80 rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.02)] space-y-3 hover:border-neutral-300 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-900">
                <Lock size={18} />
              </div>
              <h3 className="text-base font-bold text-neutral-950">
                1. Bilateral Mutual NDA Prior to Any Scoping
              </h3>
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed pl-12">
              Before inspecting a single line of code, reviewing API schemas, or receiving staging credentials, we execute a legally binding mutual Non-Disclosure Agreement. We gladly sign your standard corporate NDA or provide our enterprise-vetted bilateral template within hours.
            </p>
          </div>

          <div className="p-7 bg-white border border-neutral-200/80 rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.02)] space-y-3 hover:border-neutral-300 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-900">
                <ShieldCheck size={18} />
              </div>
              <h3 className="text-base font-bold text-neutral-950">
                2. End-to-End Encrypted Storage & Access Restrictions
              </h3>
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed pl-12">
              All vulnerability notes, raw API capture logs, Burp project files, and remediation recommendations are stored in hardware-encrypted (AES-256) vaults with multi-factor authentication. Zero third-party contractors are used; only certified, background-checked lead practitioners (CEH, C3SA, ISO 27001 LA) access your engagement data.
            </p>
          </div>

          <div className="p-7 bg-white border border-neutral-200/80 rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.02)] space-y-3 hover:border-neutral-300 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-900">
                <FileText size={18} />
              </div>
              <h3 className="text-base font-bold text-neutral-950">
                3. Data Sanitization & Zero Sensitive Data Exfiltration
              </h3>
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed pl-12">
              During manual logical audits (e.g., BOLA or IDOR verification), our practitioners prove exploitable access with minimal data capture. We strictly mask and redact any personally identifiable information (PII), payment data, or proprietary business records in all proof-of-concept deliverables.
            </p>
          </div>

          <div className="p-7 bg-white border border-neutral-200/80 rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.02)] space-y-3 hover:border-neutral-300 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-900">
                <CheckCircle size={18} />
              </div>
              <h3 className="text-base font-bold text-neutral-950">
                4. Complete Post-Audit Evidence Purge & Retention Policy
              </h3>
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed pl-12">
              Following report delivery and completion of your complimentary 30-day retesting window, all temporary staging credentials, authorization tokens, and raw traffic logs are permanently wiped according to NIST SP 800-88 sanitization standards.
            </p>
          </div>
        </div>

        {/* NDA & Security Assessment FAQ */}
        <div className="bg-white border border-neutral-200/80 rounded-3xl p-8 sm:p-10 mb-14 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-7 h-7 rounded-lg bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-800">
              <FileCheck size={15} />
            </div>
            <h2 className="text-xl font-bold text-neutral-950">
              Confidentiality & Compliance FAQ
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="p-5 rounded-2xl bg-[#FAFAFA] border border-neutral-200/70">
              <h3 className="text-sm font-bold text-neutral-950 mb-2">
                Can our legal team supply custom NDA terms?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Absolutely. Most tech startups and enterprise customers prefer using their internal legal counsel&apos;s NDA templates. We review and return signed copies rapidly so project timelines are never delayed.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#FAFAFA] border border-neutral-200/70">
              <h3 className="text-sm font-bold text-neutral-950 mb-2">
                How are the final penetration test reports delivered securely?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Reports are never sent as unsecured email attachments. We deliver final deliverables via password-protected, encrypted download channels with expiration links, or through your team&apos;s preferred internal secure document portals.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#FAFAFA] border border-neutral-200/70">
              <h3 className="text-sm font-bold text-neutral-950 mb-2">
                Are findings ever publicized or used in marketing?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Never without explicit written consent. Our case studies are fully anonymized architectural reviews with altered data flows. Your company name, vulnerabilities, and technical infrastructure remain strictly confidential.
              </p>
            </div>
          </div>
        </div>

        {/* Conversion CTA Block */}
        <div className="p-8 sm:p-12 bg-white border border-dashed border-neutral-300 rounded-3xl text-center space-y-6 shadow-sm">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-semibold text-neutral-800">
            <ShieldCheck size={14} className="text-neutral-900" />
            <span>Confidential Scoping & Written Authorization</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight">
            Ready to Scope Your Assessment Under NDA?
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 max-w-xl mx-auto leading-relaxed">
            Schedule a 30-minute confidential scoping conversation with our lead security architects. We will sign your NDA or provide our standard mutual NDA before reviewing any architecture documentation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/free-assessment"
              className="w-full sm:w-auto px-7 py-3.5 bg-neutral-900 hover:bg-black text-white font-semibold text-xs rounded-full shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Get Free Scoping Review</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/sample-report"
              className="w-full sm:w-auto px-7 py-3.5 bg-white border border-neutral-200 hover:border-neutral-400 text-neutral-800 font-semibold text-xs rounded-full shadow-sm transition-all"
            >
              View Sample Report
            </Link>
          </div>
          <p className="text-xs text-neutral-500 pt-1">
            Need an NDA executed prior to your scoping call? Email us directly at{" "}
            <ObfuscatedEmailLink className="text-neutral-900 font-semibold underline underline-offset-2" />.
          </p>
        </div>
      </div>
    </div>
  );
}
