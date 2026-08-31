"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, FileText, Download, CheckCircle, Code } from "lucide-react";
import SecurityReportPreview from "@/components/SecurityReportPreview";

export default function SampleReportPage() {
  const [email, setEmail] = React.useState("");
  const [downloaded, setDownloaded] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Sample VAPT Report — TrustLayerLabs",
    "url": "https://www.trustlayerlabs.co.in/sample-report",
    "description": "Interactive redacted VAPT audit report preview and lead magnet.",
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1200));
      
      // Save lead details to localStorage
      const existingLeads = JSON.parse(localStorage.getItem("trustlayer_leads") || "[]");
      existingLeads.push({
        email,
        scope: "sample-report",
        timestamp: new Date().toISOString()
      });
      localStorage.setItem("trustlayer_leads", JSON.stringify(existingLeads));

      // Trigger automatic PDF download
      const link = document.createElement("a");
      link.href = "/trustlayerlabs-sample-vapt-report.pdf";
      link.download = "trustlayerlabs-sample-vapt-report.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setDownloaded(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
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
            <span>Illustrative Deliverable Sample</span>
          </div>
          <h1 className="heading-1 mb-6 text-textPrimary font-extrabold tracking-tight">
            Illustrative Sample <span className="text-primary">Security Assessment Report</span>
          </h1>
          <p className="body-text text-base max-w-3xl text-textSecondary leading-relaxed font-sans">
            Examine the structure, CVSS scoring criteria, proof-of-concept breakdown, and developer remediation code guidance delivered in a TrustLayerLabs security assessment.
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
            Download Sample PDF Report Bundle
          </h3>
          <p className="text-xs text-textSecondary leading-relaxed max-w-xl mx-auto font-sans">
            Need to review the format and technical depth of our deliverables with your engineering or compliance team? Enter your email to download the illustrative sample PDF report.
          </p>

          {downloaded ? (
            <div className="space-y-4 max-w-md mx-auto py-2 animate-fade-in">
              <p className="text-xs text-success font-bold font-sans flex items-center justify-center gap-1.5">
                <CheckCircle size={16} className="text-success" /> Report PDF download initialized!
              </p>
              <p className="text-xs text-textSecondary leading-relaxed">
                If the file download did not start automatically, please click the button below to retrieve the PDF file.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="/trustlayerlabs-sample-vapt-report.pdf"
                  download
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary-hover text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-sm transition-colors"
                >
                  <Download size={14} /> Download PDF File
                </a>
                <Link
                  href="/free-assessment"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-surface border border-border hover:border-zinc-400 text-textPrimary font-bold text-xs uppercase tracking-wider rounded-full shadow-sm"
                >
                  Request Scoping Intake
                </Link>
              </div>
            </div>
          ) : (
            <form 
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter work email..."
                className="w-full sm:w-2/3 px-4 py-3 bg-black/40 border border-border rounded-full text-xs text-textPrimary placeholder:text-textSecondary focus:outline-none focus:border-primary font-sans"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-6 py-3 bg-primary hover:bg-primary-hover text-white font-bold text-xs uppercase tracking-wider rounded-full transition-colors flex items-center justify-center gap-2 disabled:opacity-50 font-sans"
              >
                {loading ? (
                  <>
                    <span className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin inline-block"></span> Verifying...
                  </>
                ) : (
                  <>
                    <Download size={14} /> Download PDF
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
