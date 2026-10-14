import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Lock, FileText, CheckCircle, Calendar, ArrowRight } from "lucide-react";
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
    <div className="bg-background min-h-screen pt-32 pb-24 font-sans text-textPrimary">
      <div className="section-container max-w-4xl mx-auto">
        <Link 
          href="/" 
          className="inline-flex items-center text-xs uppercase font-sans tracking-widest text-textSecondary hover:text-textPrimary transition-colors gap-2 mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
          Back to Home
        </Link>

        <div className="mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-widest mb-4">
            <span>Client Privacy Guarantee</span>
          </div>
          <h1 className="heading-1 mb-6 text-textPrimary font-extrabold tracking-tight">
            NDA & <span className="text-primary">Confidentiality Guarantee</span>
          </h1>
          <p className="body-text text-base text-textSecondary leading-relaxed">
            Cybersecurity requires absolute trust. At TrustLayerLabs, we execute mutual Non-Disclosure Agreements (NDAs) before inspecting a single line of code or analyzing target environments.
          </p>
        </div>

        <div className="space-y-8 mb-12">
          <div className="text-left mb-6">
            <h2 className="text-xl font-bold text-textPrimary tracking-tight font-sans">
              Our Confidentiality & Data Protection Protocol
            </h2>
            <p className="text-xs text-textSecondary font-sans mt-1">
              Every penetration test and security engagement strictly follows our defense-in-depth confidentiality standards:
            </p>
          </div>

          <div className="p-6 bg-surface border border-border/80 rounded-xl space-y-3 shadow-sm">
            <h3 className="text-base font-bold text-textPrimary flex items-center gap-2">
              <Lock className="text-primary" size={18} />
              1. Bilateral Mutual NDA Prior to Any Scoping
            </h3>
            <p className="text-xs text-textSecondary leading-relaxed">
              Before inspecting a single line of code, reviewing API schemas, or receiving staging credentials, we execute a legally binding mutual Non-Disclosure Agreement. We gladly sign your standard corporate NDA or provide our enterprise-vetted bilateral template within hours.
            </p>
          </div>

          <div className="p-6 bg-surface border border-border/80 rounded-xl space-y-3 shadow-sm">
            <h3 className="text-base font-bold text-textPrimary flex items-center gap-2">
              <ShieldCheck className="text-primary" size={18} />
              2. End-to-End Encrypted Storage & Access Restrictions
            </h3>
            <p className="text-xs text-textSecondary leading-relaxed">
              All vulnerability notes, raw API capture logs, burp project files, and remediation recommendations are stored in hardware-encrypted (AES-256) vaults with multi-factor authentication. Zero third-party contractors are used; only certified, background-checked lead practitioners access your engagement data.
            </p>
          </div>

          <div className="p-6 bg-surface border border-border/80 rounded-xl space-y-3 shadow-sm">
            <h3 className="text-base font-bold text-textPrimary flex items-center gap-2">
              <FileText className="text-primary" size={18} />
              3. Data Sanitization & Zero Sensitive Data Exfiltration
            </h3>
            <p className="text-xs text-textSecondary leading-relaxed">
              During manual logical audits (e.g., BOLA or IDOR verification), our practitioners prove exploitable access with minimal data capture. We strictly mask and redact any personally identifiable information (PII), payment data, or proprietary business records in all proof-of-concept deliverables.
            </p>
          </div>

          <div className="p-6 bg-surface border border-border/80 rounded-xl space-y-3 shadow-sm">
            <h3 className="text-base font-bold text-textPrimary flex items-center gap-2">
              <CheckCircle className="text-primary" size={18} />
              4. Complete Post-Audit Evidence Purge & Retention Policy
            </h3>
            <p className="text-xs text-textSecondary leading-relaxed">
              Following report delivery and completion of your complimentary 30-day retesting window, all temporary staging credentials, authorization tokens, and raw traffic logs are permanently wiped according to NIST SP 800-88 sanitization standards.
            </p>
          </div>
        </div>

        {/* NDA & Security Assessment FAQ */}
        <div className="bg-surface border border-border/80 rounded-2xl p-8 mb-14 shadow-sm">
          <h2 className="text-xl font-bold text-textPrimary tracking-tight font-sans mb-6">
            Confidentiality & Compliance FAQ
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-bold text-textPrimary font-sans mb-1">
                Can our legal team supply custom NDA terms?
              </h3>
              <p className="text-xs text-textSecondary leading-relaxed font-sans">
                Absolutely. Most tech startups and enterprise customers prefer using their internal legal counsel&apos;s NDA templates. We review and return signed copies rapidly so project timelines are never delayed.
              </p>
            </div>
            <div className="border-t border-border/60 pt-4">
              <h3 className="text-sm font-bold text-textPrimary font-sans mb-1">
                How are the final penetration test reports delivered securely?
              </h3>
              <p className="text-xs text-textSecondary leading-relaxed font-sans">
                Reports are never sent as unsecured email attachments. We deliver final deliverables via password-protected, encrypted download channels with expiration links, or through your team&apos;s preferred internal secure document portals.
              </p>
            </div>
            <div className="border-t border-border/60 pt-4">
              <h3 className="text-sm font-bold text-textPrimary font-sans mb-1">
                Are findings ever publicized or used in marketing?
              </h3>
              <p className="text-xs text-textSecondary leading-relaxed font-sans">
                Never without explicit written consent. Our case studies are fully anonymized architectural reviews with altered data flows. Your company name, vulnerabilities, and technical infrastructure remain strictly confidential.
              </p>
            </div>
          </div>
        </div>

        {/* Conversion CTA Block */}
        <div className="p-8 bg-surface border border-border/80 rounded-2xl text-center space-y-5 shadow-sm relative overflow-hidden">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[10px] font-bold text-primary uppercase tracking-wider">
            <ShieldCheck size={12} className="text-primary" />
            <span>Confidential Scoping & Written Authorization</span>
          </div>
          <h2 className="text-xl font-bold text-textPrimary font-sans">
            Ready to Scope Your Assessment Under NDA?
          </h2>
          <p className="text-xs text-textSecondary max-w-xl mx-auto leading-relaxed font-sans">
            Schedule a 30-minute confidential scoping conversation with our lead security architects. We will sign your NDA or provide our standard mutual NDA before reviewing any architecture documentation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1">
            <Link
              href="/free-assessment"
              className="px-6 py-2.5 bg-primary hover:bg-primary/90 text-white font-bold text-xs uppercase tracking-wider font-sans rounded-full shadow-sm transition-all flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Get a Free Security Review</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/sample-report"
              className="px-6 py-2.5 bg-surface border border-border hover:border-zinc-400 text-textPrimary font-semibold text-xs uppercase tracking-wider font-sans rounded-full shadow-sm transition-all"
            >
              View Sample Report
            </Link>
          </div>
          <p className="text-[11px] text-textSecondary font-sans pt-2">
            Need an NDA executed prior to your scoping call? Email us directly at{" "}
            <ObfuscatedEmailLink className="text-primary font-semibold underline" />.
          </p>
        </div>
      </div>
    </div>
  );
}
