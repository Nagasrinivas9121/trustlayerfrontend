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

        <div className="space-y-8">
          <div className="p-6 bg-surface border border-border/80 rounded-xl space-y-4 shadow-sm">
            <h3 className="text-base font-bold text-textPrimary flex items-center gap-2">
              <Lock className="text-primary" size={18} />
              1. Pre-Audit Mutual NDA Execution
            </h3>
            <p className="text-xs text-textSecondary leading-relaxed">
              We sign your standard company NDA or provide our startup-friendly mutual NDA template. No scanning, recon, or access credential sharing occurs prior to mutual execution.
            </p>
          </div>

          <div className="p-6 bg-surface border border-border/80 rounded-xl space-y-4 shadow-sm">
            <h3 className="text-base font-bold text-textPrimary flex items-center gap-2">
              <ShieldCheck className="text-primary" size={18} />
              2. Encrypted Data Handling & Storage
            </h3>
            <p className="text-xs text-textSecondary leading-relaxed">
              All vulnerability notes, API logs, and test data are stored in AES-256 encrypted vaults. Access is strictly limited to assigned security specialists and practitioners.
            </p>
          </div>

          <div className="p-6 bg-surface border border-border/80 rounded-xl space-y-4 shadow-sm">
            <h3 className="text-base font-bold text-textPrimary flex items-center gap-2">
              <FileText className="text-primary" size={18} />
              3. Secure Evidence Purging Post-Audit
            </h3>
            <p className="text-xs text-textSecondary leading-relaxed">
              Once the 30-day free retesting window expires and the final Retest Verification Letter is issued, all temporary staging credentials and raw exploit payloads are permanently purged.
            </p>
          </div>
        </div>

        {/* Conversion CTA Block */}
        <div className="mt-14 p-8 bg-surface border border-border/80 rounded-2xl text-center space-y-5 shadow-sm relative overflow-hidden">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[10px] font-bold text-primary uppercase tracking-wider">
            <ShieldCheck size={12} className="text-primary" />
            <span>Confidential Scoping & Written Authorization</span>
          </div>
          <h3 className="text-xl font-bold text-textPrimary font-sans">
            Ready to Scope Your Assessment Under NDA?
          </h3>
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
