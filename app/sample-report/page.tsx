"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, FileText, Download, CheckCircle, Code } from "lucide-react";
import SecurityReportPreview from "@/components/SecurityReportPreview";

export default function SampleReportPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Sample VAPT Report — TrustLayerLabs",
    "url": "https://www.trustlayerlabs.co.in/sample-report",
    "description": "Interactive redacted VAPT audit report preview and lead magnet.",
  };

  return (
    <div className="bg-background min-h-screen pt-32 pb-24 font-sans text-textPrimary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="section-container max-w-5xl mx-auto">
        <Link 
          href="/" 
          className="inline-flex items-center text-xs uppercase font-sans tracking-widest text-textSecondary hover:text-textPrimary transition-colors gap-2 mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
          Back to Home
        </Link>

        <div className="mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-widest mb-4">
            <span>Engineering-First Reporting</span>
          </div>
          <h1 className="heading-1 mb-6 text-textPrimary font-extrabold tracking-tight">
            Redacted Sample <span className="text-primary">VAPT Report</span>
          </h1>
          <p className="body-text text-base max-w-3xl text-textSecondary leading-relaxed">
            Examine the structure, CVSS scoring, PoC exploit scripts, and developer remediation commits delivered in a live TrustLayerLabs security audit.
          </p>
        </div>

        {/* Embedded Interactive Preview */}
        <SecurityReportPreview />

        {/* Lead Capture CTA Box */}
        <div className="mt-16 p-8 bg-surface border border-border rounded-2xl max-w-3xl mx-auto text-center space-y-6 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto">
            <FileText size={24} />
          </div>
          <h3 className="text-xl font-bold text-textPrimary font-sans">
            Request Full PDF Sample Report & Attestation Template
          </h3>
          <p className="text-xs text-textSecondary leading-relaxed max-w-xl mx-auto">
            Need to show a sample report structure to your engineering team or compliance auditor? Enter your email to download the redacted PDF report bundle.
          </p>
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! The sample report bundle has been sent to your email.");
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              placeholder="Enter work email..."
              className="w-full sm:w-2/3 px-4 py-3 bg-black/40 border border-border rounded-full text-xs text-textPrimary placeholder:text-textSecondary focus:outline-none focus:border-primary"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-primary hover:bg-primary/90 text-white font-bold text-xs uppercase tracking-wider rounded-full transition-colors flex items-center justify-center gap-2"
            >
              <Download size={14} /> Download PDF
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
