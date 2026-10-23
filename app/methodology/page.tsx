import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield, CheckCircle, Target, FileText, Code, Lock, ArrowRight, Sparkles, Check, ChevronRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VAPT Testing Methodology & Standards",
  description: "Learn TrustLayerLabs' manual vulnerability assessment & penetration testing methodology combining OWASP Top 10, NIST SP 800-115, and PTES standards.",
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/methodology",
  },
};

export default function MethodologyPage() {
  const faqs = [
    {
      q: "How do you guarantee that manual testing will not cause application downtime or data corruption?",
      a: "Our certified practitioners operate under strict safe harbor rules. We utilize non-destructive payloads, test against staging or isolated sandbox accounts whenever possible, avoid denial-of-service tests, and coordinate rate-limiting parameters with your DevOps team before initiating testing."
    },
    {
      q: "What is the difference between automated vulnerability scanning and manual penetration testing?",
      a: "Automated scanners search for known software version CVEs and static syntax signatures. They cannot authenticate across complex business workflows, test multi-tenant authorization boundaries, verify payment transactions, or chain multi-step logic vulnerabilities. Our manual testing uncovers the logic flaws and BOLA bypasses that scanners miss."
    },
    {
      q: "Do you provide code remediation support following the assessment?",
      a: "Yes. Every finding in our technical report includes copy-paste code patches and architecture guidance. Furthermore, we conduct a dedicated developer debrief call to walk your team through each vulnerability and provide one free retest within 30 days to certify that your patches are effective."
    },
    {
      q: "What credentials and access are required before testing begins?",
      a: "For grey-box testing, we typically require two testing accounts per role (e.g. Tenant A Admin, Tenant A User, Tenant B User), API documentation (Swagger/OpenAPI or Postman), and staging environment URLs under an executed mutual Non-Disclosure Agreement (NDA)."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.trustlayerlabs.co.in/methodology#webpage",
        "name": "Testing Methodology — TrustLayerLabs",
        "url": "https://www.trustlayerlabs.co.in/methodology",
        "description": "Manual VAPT and API security testing methodology adhering to OWASP, NIST SP 800-115, and PTES standards.",
        "publisher": {
          "@type": "Organization",
          "@id": "https://www.trustlayerlabs.co.in/#organization",
          "name": "TrustLayerLabs",
          "url": "https://www.trustlayerlabs.co.in"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.trustlayerlabs.co.in/methodology#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trustlayerlabs.co.in" },
          { "@type": "ListItem", "position": 2, "name": "Testing Methodology", "item": "https://www.trustlayerlabs.co.in/methodology" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.trustlayerlabs.co.in/methodology#faq",
        "mainEntity": faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
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
            <span>Security Engineering Process</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-tight mb-5 font-sans">
            Our Offensive <span className="text-primary">Testing Methodology</span>
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl font-sans">
            TrustLayerLabs combines industry-standard frameworks — OWASP Top 10, NIST SP 800-115, and PTES — with expert manual logic penetration testing to discover vulnerabilities automated scanners miss.
          </p>
        </div>

        {/* Methodology Standards Cards - CodeDale 3-Card Grid */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-dashed border-neutral-300">
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight font-sans">
              Global Standards We Adhere To
            </h2>
            <span className="text-xs font-mono text-neutral-500 hidden sm:inline">
              OWASP · NIST · PTES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-8 bg-white border border-neutral-200/90 rounded-3xl space-y-3 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:border-neutral-400 transition-all">
              <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-200/70 flex items-center justify-center text-primary font-mono font-bold text-xs">
                OWASP
              </div>
              <h3 className="text-base font-bold text-neutral-900 font-sans tracking-tight">OWASP API &amp; Web Top 10</h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
                Systematic auditing for Broken Object Level Authorization (BOLA/IDOR), Broken Function Level Authorization (BFLA), JWT manipulation, mass assignment, server-side request forgery (SSRF), and rate-limiting bypasses.
              </p>
            </div>

            <div className="p-8 bg-white border border-neutral-200/90 rounded-3xl space-y-3 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:border-neutral-400 transition-all">
              <div className="w-11 h-11 rounded-2xl bg-purple-50 border border-purple-200/70 flex items-center justify-center text-purple-600 font-mono font-bold text-xs">
                NIST
              </div>
              <h3 className="text-base font-bold text-neutral-900 font-sans tracking-tight">NIST SP 800-115</h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
                Federal and enterprise-grade technical testing methodology covering target identification, target vulnerability analysis, exploitation verification, and post-exploitation risk scoring.
              </p>
            </div>

            <div className="p-8 bg-white border border-neutral-200/90 rounded-3xl space-y-3 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:border-neutral-400 transition-all">
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-200/70 flex items-center justify-center text-emerald-600 font-mono font-bold text-xs">
                PTES
              </div>
              <h3 className="text-base font-bold text-neutral-900 font-sans tracking-tight">PTES Framework</h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
                The Penetration Testing Execution Standard structuring pre-engagement interactions, intelligence gathering, threat modeling, vulnerability analysis, and remediation-oriented reporting.
              </p>
            </div>
          </div>
        </div>

        {/* 5 Phase Breakdown - CodeDale Timeline Cards */}
        <div className="space-y-8 mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 block mb-2">
              Step-By-Step Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight font-sans mb-3">
              The 5 Phases of a TrustLayer VAPT Audit
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
              Collaborative, transparent, and designed to protect production uptime while uncovering deep logic flaws.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                step: "Phase 1",
                title: "Scoping & Mutual NDA Execution",
                desc: "We define precise target parameters, execute a bilateral mutual NDA, verify staging environment credentials, and agree on testing windows to guarantee zero production disruption or data corruption."
              },
              {
                step: "Phase 2",
                title: "Passive & Active Intelligence Reconnaissance",
                desc: "Mapping subdomains, undiscovered staging endpoints, shadow APIs, CORS misconfigurations, authentication flows, public cloud storage buckets, and third-party software dependencies."
              },
              {
                step: "Phase 3",
                title: "Deep Manual Logic & Authorization Penetration",
                desc: "Our offensive security engineers manually intercept and manipulate API traffic in Burp Suite Professional. We simulate cross-tenant privilege escalation, inspect JWT cryptographic algorithms, evaluate payment transaction workflows, and test race conditions."
              },
              {
                step: "Phase 4",
                title: "CVSS v3.1 Severity Scoring & Remediation Reporting",
                desc: "Compiling zero-fluff, developer-centric technical reports with step-by-step reproduction curl scripts, proof-of-concept exploit recordings, CVSS v3.1 scoring, and ready-to-merge remediation code patches."
              },
              {
                step: "Phase 5",
                title: "Free Retesting & Remediation Verification Letter",
                desc: "After your engineering team deploys remediation patches, we re-evaluate every flagged vulnerability and issue a certified Executive Attestation Letter suitable for SOC 2 auditors, enterprise procurement, and cyber insurance underwriters."
              }
            ].map((phase, idx) => (
              <div key={idx} className="p-7 bg-white border border-neutral-200/90 rounded-3xl space-y-2 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:border-neutral-400 transition-all">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-mono font-bold text-primary uppercase tracking-wider bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-md">
                    {phase.step}
                  </span>
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-200">
                    <Check size={11} strokeWidth={3} />
                  </div>
                </div>
                <h3 className="text-base font-bold text-neutral-900 font-sans tracking-tight">{phase.title}</h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Specialized Assessments */}
        <div className="mb-20 bg-white border border-dashed border-neutral-300 rounded-3xl p-8 sm:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.03)] space-y-6">
          <div>
            <h2 className="text-xl font-bold text-neutral-900 font-sans tracking-tight mb-2">
              Specialized Scopes Following This Methodology
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
              We adapt our 5-phase testing methodology to the specific architectural requirements of modern tech stacks:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link 
              href="/services/api-security" 
              className="p-5 bg-neutral-50/70 border border-neutral-200 rounded-2xl hover:border-blue-400 hover:bg-white transition-all block space-y-1.5"
            >
              <h3 className="text-xs font-bold text-neutral-900 font-sans">API Security Testing</h3>
              <p className="text-xs text-neutral-600 font-sans">BOLA, BFLA, and OWASP API Top 10 penetration testing.</p>
            </Link>
            <Link 
              href="/services/saas-vapt" 
              className="p-5 bg-neutral-50/70 border border-neutral-200 rounded-2xl hover:border-blue-400 hover:bg-white transition-all block space-y-1.5"
            >
              <h3 className="text-xs font-bold text-neutral-900 font-sans">SaaS Penetration Testing</h3>
              <p className="text-xs text-neutral-600 font-sans">Multi-tenant isolation and privilege escalation reviews.</p>
            </Link>
            <Link 
              href="/fintech-security" 
              className="p-5 bg-neutral-50/70 border border-neutral-200 rounded-2xl hover:border-blue-400 hover:bg-white transition-all block space-y-1.5"
            >
              <h3 className="text-xs font-bold text-neutral-900 font-sans">FinTech VAPT</h3>
              <p className="text-xs text-neutral-600 font-sans">Payment workflow tampering and banking API security.</p>
            </Link>
            <Link 
              href="/services/ai-security" 
              className="p-5 bg-neutral-50/70 border border-neutral-200 rounded-2xl hover:border-blue-400 hover:bg-white transition-all block space-y-1.5"
            >
              <h3 className="text-xs font-bold text-neutral-900 font-sans">AI &amp; LLM Security</h3>
              <p className="text-xs text-neutral-600 font-sans">Prompt injection, RAG vector isolation, and model safety.</p>
            </Link>
          </div>
        </div>

        {/* Methodology FAQs */}
        <div className="mb-20 bg-white border border-neutral-200/90 rounded-3xl p-8 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 font-sans tracking-tight mb-8">
            Frequently Asked Testing Methodology Questions
          </h2>
          <div className="space-y-6 text-xs sm:text-sm text-neutral-600">
            {faqs.map((faq, idx) => (
              <div key={idx} className={idx > 0 ? "border-t border-dashed border-neutral-200 pt-5" : ""}>
                <h3 className="text-base font-bold text-neutral-900 font-sans mb-2">{faq.q}</h3>
                <p className="leading-relaxed font-sans">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner - CodeDale style */}
        <div className="p-8 sm:p-12 bg-white border border-dashed border-neutral-300 rounded-3xl text-center space-y-6 shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 font-sans tracking-tight">Ready to Audit Your SaaS or API?</h2>
          <p className="text-xs sm:text-sm text-neutral-600 max-w-xl mx-auto font-sans leading-relaxed">
            Schedule a confidential 30-minute security review with our lead security architects under mutual NDA or view our sample report to see our methodology in action.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/free-assessment"
              className="px-8 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold uppercase font-sans tracking-wider rounded-full shadow-md transition-all flex items-center gap-2 group"
            >
              <span>Schedule Scoping Review</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-blue-400" />
            </Link>
            <Link
              href="/sample-report"
              className="px-8 py-3.5 bg-neutral-100 hover:bg-neutral-200/80 border border-neutral-200 text-neutral-800 text-xs font-bold uppercase font-sans tracking-wider rounded-full transition-all flex items-center gap-2"
            >
              <FileText size={15} />
              <span>View Sample Assessment Report</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
