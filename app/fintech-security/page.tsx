import type { Metadata } from "next";
import Link from "next/link";
import { 
  ShieldCheck, 
  ArrowRight, 
  Calendar, 
  CheckCircle2, 
  Lock, 
  FileText, 
  Layers, 
  CreditCard, 
  AlertTriangle, 
  Database, 
  KeyRound,
  FileCheck
} from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "FinTech Security Testing & VAPT | TrustLayerLabs",
  description: "Specialized offensive security testing and manual API penetration testing for modern FinTech platforms, payment gateways, and banking integrations.",
  keywords: [
    "FinTech VAPT India",
    "financial API security testing",
    "payment gateway penetration testing",
    "BOLA security testing fintech",
    "RBI cybersecurity guidelines audit",
    "NPCI UPI security testing",
    "fintech application security"
  ],
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/fintech-security",
  },
};

const attackSurfaces = [
  {
    title: "Financial APIs & Webhooks",
    description: "Deep testing of transaction endpoints, webhook validation, replay attack vulnerabilities, and payload tampering across REST/GraphQL services.",
    icon: CreditCard
  },
  {
    title: "Authorization & BOLA / IDOR",
    description: "Systematically testing whether authenticated accounts can manipulate IDs to view another user's balance, statements, or payment methods.",
    icon: KeyRound
  },
  {
    title: "Transaction & Payment Business Logic",
    description: "Verifying race conditions in ledger payouts, negative value transactions, coupon/discount stacking, and state manipulation flaws.",
    icon: Lock
  },
  {
    title: "KYC & PII Data Protection",
    description: "Auditing document upload pipelines, pre-signed S3/GCS bucket access, and server-side encryption for Aadhaar/PAN/KYC documents.",
    icon: Database
  },
  {
    title: "Authentication & Session Workflows",
    description: "Evaluating OAuth2 handshakes, JWT signing verification, biometric token validation, and step-up authentication on fund transfers.",
    icon: ShieldCheck
  },
  {
    title: "Regulatory Baseline Alignment",
    description: "Aligning technical vulnerability checks with RBI cyber security framework, NPCI UPI application baselines, and SEBI directives.",
    icon: FileCheck
  }
];

const deliverables = [
  {
    title: "Executive Summary for Bank Partners & Investors",
    desc: "A concise, non-technical risk overview suitable for bank sponsor audits, institutional investors, and compliance stakeholders."
  },
  {
    title: "Detailed Engineering Report with PoC Scripts",
    desc: "Complete step-by-step reproduction steps, raw HTTP requests/responses, and CVSS v3.1 severity rankings."
  },
  {
    title: "Actionable Remediation Code Commits",
    desc: "Exact code patches and architectural recommendations for Node.js, Python, Go, and Java microservices."
  },
  {
    title: "Retesting & Remediation Verification",
    desc: "Re-evaluation of fixed vulnerabilities and issuance of an updated final report and Retest Verification Letter."
  }
];

export default function FinTechSecurityPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "FinTech Security Testing & VAPT",
    "provider": {
      "@type": "Organization",
      "name": "TrustLayerLabs",
      "url": "https://www.trustlayerlabs.co.in"
    },
    "description": "Manual offensive security testing for FinTech APIs, payment systems, and financial transaction workflows.",
    "serviceType": "FinTech Application Security Testing"
  };

  return (
    <div className="bg-background min-h-screen pt-32 pb-24 font-sans text-textPrimary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="section-container max-w-6xl mx-auto">
        
        {/* Breadcrumb / Top Pill */}
        <div className="flex items-center gap-2 mb-6">
          <Link href="/" className="text-xs uppercase font-mono text-textSecondary hover:text-textPrimary">Home</Link>
          <span className="text-xs text-textSecondary">/</span>
          <span className="text-xs uppercase font-mono text-primary font-bold">FinTech Security</span>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider">
            <CreditCard size={13} className="text-primary" />
            <span>Specialized Financial Infrastructure Testing</span>
          </div>

          <h1 className="heading-1 font-sans text-textPrimary">
            Security Testing Built for <br />
            <span className="text-primary">Modern FinTech Platforms</span>
          </h1>

          <p className="text-base sm:text-lg text-textSecondary leading-relaxed font-sans max-w-3xl">
            Manual penetration testing and logic analysis designed for financial APIs, payment gateways, and banking integrations. We identify critical authorization and transaction risks before they impact customer funds or compliance audits.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link 
              href="https://calendar.app.google/jnamj3gawxVunPJm9"
              target="_blank"
              className="px-8 py-3.5 bg-primary hover:bg-primary-hover text-white text-xs uppercase font-sans font-bold tracking-wider rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              <Calendar size={15} />
              <span>Book a FinTech Security Review</span>
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

        {/* Attack Surfaces Grid */}
        <div className="py-16 border-t border-border">
          <div className="mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-4">
              <span>Threat Vectors</span>
            </div>
            <h2 className="heading-2 font-sans mb-3">
              FinTech Attack Surfaces <span className="text-primary">We Evaluate</span>
            </h2>
            <p className="body-text text-textSecondary font-sans">
              Financial applications present unique business logic and authorization risks that automated tools fail to comprehend.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attackSurfaces.map((surface, idx) => (
              <div 
                key={idx}
                className="premium-card p-8 bg-surface border border-border rounded-2xl flex flex-col justify-between hover:border-zinc-400 transition-all duration-300 shadow-sm"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6">
                    <surface.icon size={20} />
                  </div>
                  <h3 className="text-base font-bold text-textPrimary tracking-tight font-sans mb-2.5">
                    {surface.title}
                  </h3>
                  <p className="text-xs text-textSecondary leading-relaxed font-sans">
                    {surface.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables Section */}
        <div className="py-16 border-t border-border">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-4">
              <span>What You Receive</span>
            </div>
            <h2 className="heading-2 font-sans mb-3">
              Engineering-Ready <span className="text-primary">FinTech Deliverables</span>
            </h2>
            <p className="body-text text-textSecondary font-sans">
              Our reports provide the technical clarity required by your development team and the remediation verification documentation needed by partner institutions and investors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {deliverables.map((item, i) => (
              <div key={i} className="p-6 bg-surface border border-border rounded-2xl space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                  <h3 className="text-sm font-bold text-textPrimary font-sans">{item.title}</h3>
                </div>
                <p className="text-xs text-textSecondary leading-relaxed font-sans pl-6">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FinTech Checklist Lead Magnet Banner */}
        <div className="my-12 p-8 md:p-12 bg-surface border border-primary/30 rounded-3xl relative overflow-hidden shadow-sm">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-bold uppercase tracking-wider">
              <span>Free Technical Asset</span>
            </div>
            <h3 className="heading-2 font-sans text-textPrimary">
              Download the 2026 FinTech API Security Checklist
            </h3>
            <p className="text-xs sm:text-sm text-textSecondary font-sans leading-relaxed">
              A comprehensive 32-point checklist covering BOLA, JWT verification, webhook authentication, rate limiting, and transaction tamper protection.
            </p>
            <div className="pt-2">
              <Link 
                href="/api-security-checklist"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-hover text-white text-xs font-sans font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm"
              >
                <span>Get the FinTech API Security Checklist</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* Embedded Contact Form */}
      <ContactForm />
    </div>
  );
}
