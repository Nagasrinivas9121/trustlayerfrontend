"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, FileText, Download, CheckCircle, Code, Calendar, ArrowRight, Sparkles, Check } from "lucide-react";
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
    <div className="bg-background min-h-screen pt-32 pb-24 font-sans text-neutral-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="section-container max-w-5xl mx-auto">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 text-xs font-semibold text-neutral-600 hover:text-neutral-900 shadow-sm transition-all mb-8 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Overview</span>
        </Link>

        {/* Header - CodeDale style */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-neutral-200 shadow-sm rounded-full text-xs font-semibold text-neutral-800 uppercase tracking-wider mb-5">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>Illustrative Deliverable Sample • 46-Page Bundle</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-tight mb-5 font-sans">
            Illustrative Sample <br className="hidden sm:inline" />
            <span className="text-primary">Security Assessment Report</span>
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-sans max-w-3xl mb-8">
            Examine the structure, CVSS scoring criteria, proof-of-concept breakdown, and developer remediation code guidance delivered in a TrustLayerLabs security assessment. Complete 46-page audit-grade PDF bundle covering API, SaaS multi-tenancy, and AI/RAG security.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/trustlayerlabs-sample-vapt-report.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-md transition-all group"
            >
              <FileText size={14} className="text-blue-400" />
              <span>Open 46-Page PDF in Browser</span>
            </a>
            <a
              href="/trustlayerlabs-sample-vapt-report.pdf"
              download="trustlayerlabs-sample-vapt-report.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-100 hover:bg-neutral-200/80 border border-neutral-200 text-neutral-800 font-bold text-xs uppercase tracking-wider rounded-full transition-all"
            >
              <Download size={14} />
              <span>Direct PDF Download (1.1 MB)</span>
            </a>
          </div>
        </div>

        {/* Embedded Interactive Preview */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-dashed border-neutral-300">
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 font-sans tracking-tight">
              Interactive Assessment Deliverable Preview
            </h2>
            <span className="text-xs font-mono text-neutral-500 hidden sm:inline">
              Tabs 1–4: Executive to Technical Detail
            </span>
          </div>
          <SecurityReportPreview />
        </div>

        {/* Anatomy of an Audit-Grade VAPT Deliverable - CodeDale 2x2 Grid */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 block mb-2">
              Deliverable Specifications
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 font-sans tracking-tight mb-3">
              Anatomy of a TrustLayerLabs Security Deliverable
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
              Our assessment documentation bridges the gap between executive compliance sign-offs and immediate developer remediation workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="p-8 bg-white border border-neutral-200/90 rounded-3xl space-y-3 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:border-neutral-400 transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold text-primary bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-md">
                  SECTION 01
                </span>
                <span className="text-[10px] font-mono text-neutral-500 uppercase">Executive Level</span>
              </div>
              <h3 className="text-base font-bold text-neutral-900 font-sans tracking-tight">
                Executive Summary &amp; Auditor Attestation Letter
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
                A non-technical synthesis of security posture, assessed asset inventory, residual risk ratings, and a formal Third-Party Attestation Letter suitable for SOC 2 Type II, ISO 27001, and enterprise vendor risk questionnaires.
              </p>
            </div>

            <div className="p-8 bg-white border border-neutral-200/90 rounded-3xl space-y-3 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:border-neutral-400 transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold text-purple-700 bg-purple-50 border border-purple-200 px-2.5 py-1 rounded-md">
                  SECTION 02
                </span>
                <span className="text-[10px] font-mono text-neutral-500 uppercase">Standardized Severity</span>
              </div>
              <h3 className="text-base font-bold text-neutral-900 font-sans tracking-tight">
                Threat Modeling &amp; CVSS v3.1 Severity Scoring
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
                Every detected vulnerability is classified under Common Vulnerability Scoring System (CVSS v3.1) metrics, detailing Attack Vector, Privileges Required, User Interaction, and Confidentiality / Integrity / Availability impact.
              </p>
            </div>

            <div className="p-8 bg-white border border-neutral-200/90 rounded-3xl space-y-3 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:border-neutral-400 transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md">
                  SECTION 03
                </span>
                <span className="text-[10px] font-mono text-neutral-500 uppercase">Reproducible Proof</span>
              </div>
              <h3 className="text-base font-bold text-neutral-900 font-sans tracking-tight">
                Step-by-Step Reproduction Proof-of-Concepts (PoCs)
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
                Zero ambiguous descriptions. Each finding includes reproducible curl commands, intercepted HTTP requests/responses, session token state setups, and sanitized payload screenshots to prove exploitability without guesswork.
              </p>
            </div>

            <div className="p-8 bg-white border border-neutral-200/90 rounded-3xl space-y-3 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:border-neutral-400 transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-md">
                  SECTION 04
                </span>
                <span className="text-[10px] font-mono text-neutral-500 uppercase">Engineering Fixes</span>
              </div>
              <h3 className="text-base font-bold text-neutral-900 font-sans tracking-tight">
                Developer Code Patches &amp; 30-Day Retesting
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
                Actionable code patches (e.g. Prisma/TypeORM tenant scoping, JWT algorithm pinning, rate-limiting configs) and an included 30-day verification retest to confirm patches are properly applied before auditor submission.
              </p>
            </div>
          </div>
        </div>

        {/* Lead Capture CTA Box - CodeDale Dashed Box */}
        <div className="p-8 sm:p-12 bg-white border border-dashed border-neutral-300 rounded-3xl max-w-3xl mx-auto text-center space-y-6 shadow-[0_8px_30px_rgba(0,0,0,0.03)] mb-16">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-primary mx-auto shadow-sm">
            <FileText size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 font-sans tracking-tight mb-2">
              Download 46-Page Sample PDF Report Bundle
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-xl mx-auto font-sans">
              Review the full formatting and technical depth of our deliverables with your engineering or compliance team. Enter your work email below to download the official 46-page sample deliverable bundle.
            </p>
          </div>

          {downloaded ? (
            <div className="space-y-4 max-w-md mx-auto py-2 animate-fade-in">
              <p className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full py-2 px-4 inline-flex items-center gap-1.5 font-sans">
                <CheckCircle size={15} /> Report PDF download initialized!
              </p>
              <p className="text-xs text-neutral-600 leading-relaxed">
                If the file download did not start automatically, please click below to retrieve the PDF file.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="/trustlayerlabs-sample-vapt-report.pdf"
                  download
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-md transition-all"
                >
                  <Download size={14} /> Download PDF File
                </a>
                <Link
                  href={email ? `/free-assessment?email=${encodeURIComponent(email)}` : "/free-assessment"}
                  onClick={() => trackFreeReviewCtaClick("sample_report_post_download", "Get a Free Security Scoping Review")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-neutral-100 hover:bg-neutral-200/80 border border-neutral-200 text-neutral-800 font-bold text-xs uppercase tracking-wider rounded-full"
                >
                  Schedule Scope Review
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
                className="w-full sm:w-2/3 px-4 py-3 bg-neutral-50/70 border border-neutral-200 hover:border-neutral-300 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100 rounded-full text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none font-sans transition-all"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider rounded-full transition-all flex items-center justify-center gap-2 disabled:opacity-50 font-sans shadow-sm cursor-pointer"
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

        {/* Next Step / Conversion Callout - CodeDale style */}
        <div className="p-8 sm:p-10 bg-white border border-neutral-200/90 rounded-3xl max-w-3xl mx-auto text-center space-y-4 shadow-sm">
          <h2 className="text-xl font-bold text-neutral-900 font-sans tracking-tight">
            Ready to find what automated scanners miss in your own stack?
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 max-w-xl mx-auto font-sans leading-relaxed">
            Get an actionable 30-minute architecture review with our senior practitioners under mutual NDA. We&apos;ll identify high-risk logic flaws and give you clear remediation paths.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/free-assessment"
              onClick={() => trackFreeReviewCtaClick("sample_report_page_footer", "Get a Free Security Scoping Review")}
              className="px-6 py-3 bg-primary hover:bg-blue-700 text-white text-xs uppercase font-sans font-bold tracking-wider rounded-full transition-all shadow-md"
            >
              Schedule Scoping Review
            </Link>
            <button
              type="button"
              onClick={() => {
                trackCalendarCtaClick("sample_report_page_footer", "Schedule 30-Min Security Review");
                openCalendly();
              }}
              className="px-6 py-3 bg-neutral-100 hover:bg-neutral-200/80 border border-neutral-200 text-xs uppercase font-sans font-semibold tracking-wider rounded-full text-neutral-800 transition-all flex items-center gap-1.5 cursor-pointer"
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
