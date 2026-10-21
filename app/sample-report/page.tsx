"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, FileText, Download, CheckCircle, Code, Calendar } from "lucide-react";
import SecurityReportPreview from "@/components/SecurityReportPreview";
import { openCalendly } from "@/lib/calendly";

import { 
  trackSampleReportView, 
  trackSampleReportDownload, 
  trackFreeReviewCtaClick, 
  trackCalendarCtaClick,
  getUtmAttribution 
} from "@/lib/analytics";

export default function SampleReportPage() {
  const [email, setEmail] = React.useState("");
  const [downloaded, setDownloaded] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    trackSampleReportView();
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.trustlayerlabs.co.in/sample-report#webpage",
        "name": "Illustrative Sample Security Assessment Report — TrustLayerLabs",
        "url": "https://www.trustlayerlabs.co.in/sample-report",
        "description": "Interactive illustrative sample penetration testing and security assessment report preview demonstrating CVSS vulnerability scoring, proof-of-concept steps, and developer remediation guidance.",
        "publisher": {
          "@type": "Organization",
          "@id": "https://www.trustlayerlabs.co.in/#organization",
          "name": "TrustLayerLabs",
          "url": "https://www.trustlayerlabs.co.in"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.trustlayerlabs.co.in/sample-report#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trustlayerlabs.co.in" },
          { "@type": "ListItem", "position": 2, "name": "Sample Report", "item": "https://www.trustlayerlabs.co.in/sample-report" }
        ]
      }
    ]
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || loading) return;
    setLoading(true);
    try {
      trackSampleReportDownload("sample_report_page");
      const utm = getUtmAttribution();

      // Dispatch lead capture to backend leads intake
      fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name: "Sample Report Requester",
          source: "sample-report-download",
          securityConcern: "Sample VAPT Report Bundle Download",
          utm,
        }),
      }).catch((err) => {
        console.warn("[Sample Report] Server intake notice:", err);
      });

      // Save lead details to localStorage
      const existingLeads = JSON.parse(localStorage.getItem("trustlayer_leads") || "[]");
      existingLeads.push({
        email,
        scope: "sample-report",
        ...utm,
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
            <span>Illustrative Deliverable Sample • Complete 46-Page Report</span>
          </div>
          <h1 className="heading-1 mb-6 text-textPrimary font-extrabold tracking-tight">
            Illustrative Sample <span className="text-primary">Security Assessment Report</span>
          </h1>
          <p className="body-text text-base max-w-3xl text-textSecondary leading-relaxed font-sans mb-6">
            Examine the structure, CVSS scoring criteria, proof-of-concept breakdown, and developer remediation code guidance delivered in a TrustLayerLabs security assessment. Complete 46-page audit-grade PDF bundle covering API, SaaS multi-tenancy, and AI/RAG security.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/trustlayerlabs-sample-vapt-report.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary-hover text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-sm transition-colors"
            >
              <FileText size={14} /> Open 46-Page PDF in Browser
            </a>
            <a
              href="/trustlayerlabs-sample-vapt-report.pdf"
              download="trustlayerlabs-sample-vapt-report.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface border border-border hover:border-zinc-400 text-textPrimary font-bold text-xs uppercase tracking-wider rounded-full shadow-sm transition-colors"
            >
              <Download size={14} /> Direct PDF Download (1.1 MB)
            </a>
          </div>
        </div>

        {/* Embedded Interactive Preview */}
        <div className="mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-textPrimary font-sans mb-6">
            Interactive Assessment Deliverable Preview
          </h2>
          <SecurityReportPreview />
        </div>

        {/* Anatomy of an Audit-Grade VAPT Deliverable */}
        <div className="mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-textPrimary font-sans mb-3">
            Anatomy of a TrustLayerLabs Security Deliverable
          </h2>
          <p className="text-xs sm:text-sm text-textSecondary max-w-2xl mb-8 leading-relaxed">
            Our assessment documentation bridges the gap between executive compliance sign-offs and immediate developer remediation workflows.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-surface border border-border/80 rounded-2xl space-y-3 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <h3 className="text-sm font-bold text-textPrimary font-sans">
                  1. Executive Summary & Auditor Attestation Letter
                </h3>
              </div>
              <p className="text-xs text-textSecondary leading-relaxed">
                A non-technical synthesis of security posture, assessed asset inventory, residual risk ratings, and a formal Third-Party Attestation Letter suitable for SOC 2 Type II, ISO 27001, and enterprise vendor risk questionnaires.
              </p>
            </div>

            <div className="p-6 bg-surface border border-border/80 rounded-2xl space-y-3 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <h3 className="text-sm font-bold text-textPrimary font-sans">
                  2. Threat Modeling & CVSS v3.1 Severity Scoring
                </h3>
              </div>
              <p className="text-xs text-textSecondary leading-relaxed">
                Every detected vulnerability is classified under Common Vulnerability Scoring System (CVSS v3.1) metrics, detailing Attack Vector, Privileges Required, User Interaction, and Confidentiality / Integrity / Availability impact.
              </p>
            </div>

            <div className="p-6 bg-surface border border-border/80 rounded-2xl space-y-3 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <h3 className="text-sm font-bold text-textPrimary font-sans">
                  3. Step-by-Step Reproduction Proof-of-Concepts (PoCs)
                </h3>
              </div>
              <p className="text-xs text-textSecondary leading-relaxed">
                Zero ambiguous descriptions. Each finding includes reproducible curl commands, intercepted HTTP requests/responses, session token state setups, and sanitized payload screenshots to prove exploitability.
              </p>
            </div>

            <div className="p-6 bg-surface border border-border/80 rounded-2xl space-y-3 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <h3 className="text-sm font-bold text-textPrimary font-sans">
                  4. Developer Code Patches & 30-Day Retesting
                </h3>
              </div>
              <p className="text-xs text-textSecondary leading-relaxed">
                Actionable code patches (e.g. Prisma/TypeORM tenant scoping, JWT algorithm pinning, rate-limiting configs) and an included 30-day verification retest to confirm patches are properly applied before auditor submission.
              </p>
            </div>
          </div>
        </div>

        {/* Lead Capture CTA Box */}
        <div className="mt-16 p-8 bg-surface border border-border rounded-2xl max-w-3xl mx-auto text-center space-y-6 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto">
            <FileText size={24} />
          </div>
          <h2 className="text-xl font-bold text-textPrimary font-sans">
            Download 46-Page Sample PDF Report Bundle
          </h2>
          <p className="text-xs text-textSecondary leading-relaxed max-w-xl mx-auto font-sans">
            Review the full formatting and technical depth of our deliverables with your engineering or compliance team. Enter your work email below to download the official 46-page sample deliverable bundle.
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
                  href={email ? `/free-assessment?email=${encodeURIComponent(email)}` : "/free-assessment"}
                  onClick={() => trackFreeReviewCtaClick("sample_report_post_download", "Get a Free Security Scoping Review")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-surface border border-border hover:border-zinc-400 text-textPrimary font-bold text-xs uppercase tracking-wider rounded-full shadow-sm"
                >
                  Get a Free Security Scoping Review
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
                inputMode="email"
                autoComplete="email"
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

        {/* Next Step / Conversion Callout */}
        <div className="mt-12 p-8 bg-surface border border-primary/20 rounded-2xl max-w-3xl mx-auto text-center space-y-4 shadow-sm">
          <h2 className="text-lg font-bold text-textPrimary font-sans">
            Ready to find what automated scanners miss in your own stack?
          </h2>
          <p className="text-xs text-textSecondary max-w-xl mx-auto font-sans leading-relaxed">
            Get an actionable 30-minute architecture review with our senior practitioners under mutual NDA. We&apos;ll identify high-risk logic flaws and give you clear remediation paths.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/free-assessment"
              onClick={() => trackFreeReviewCtaClick("sample_report_page_footer", "Get a Free Security Scoping Review")}
              className="px-6 py-3 bg-primary hover:bg-primary-hover text-white text-xs uppercase font-sans font-bold tracking-wider rounded-xl transition-all shadow-md"
            >
              Get a Free Security Scoping Review
            </Link>
            <button
              type="button"
              onClick={() => {
                trackCalendarCtaClick("sample_report_page_footer", "Schedule 30-Min Security Review");
                openCalendly();
              }}
              className="px-6 py-3 bg-background border border-border hover:border-zinc-400 text-xs uppercase font-sans font-semibold tracking-wider rounded-xl text-textPrimary hover:text-primary transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Calendar size={13} />
              <span>Schedule 30-Min Security Review</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
