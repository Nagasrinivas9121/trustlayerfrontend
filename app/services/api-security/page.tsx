import React from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  ShieldCheck, 
  ArrowRight, 
  Calendar, 
  CheckCircle2, 
  KeyRound, 
  Lock, 
  Database, 
  Server, 
  FileText, 
  Layers, 
  FileCheck2, 
  HelpCircle,
  Clock,
  ShieldAlert,
  Code
} from "lucide-react";
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "API Security Testing & BOLA Penetration Testing Services",
  description: "Manual API penetration testing for REST, GraphQL, and gRPC microservices. Test BOLA/IDOR, BFLA, JWT flaws, and multi-tenant isolation with free retesting.",
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/services/api-security",
  },
  openGraph: {
    title: "API Security Testing & BOLA Penetration Testing | TrustLayerLabs",
    description: "Manual API penetration testing for REST, GraphQL, and gRPC microservices. Test BOLA/IDOR, BFLA, JWT flaws, and multi-tenant isolation with free retesting.",
    url: "https://www.trustlayerlabs.co.in/services/api-security",
    siteName: "TrustLayerLabs",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "API Security Testing & BOLA Penetration Testing | TrustLayerLabs",
    description: "Manual API penetration testing for REST, GraphQL, and gRPC microservices. Test BOLA/IDOR, BFLA, JWT flaws, and multi-tenant isolation with free retesting.",
  },
};

const whoWeHelp = [
  {
    title: "Multi-Tenant SaaS Platforms",
    desc: "Ensure Tenant A can never query or manipulate Tenant B data through object-level parameter manipulation (BOLA/IDOR)."
  },
  {
    title: "FinTech & Payment APIs",
    desc: "Harden financial transaction APIs, webhook callback integrity, ledger balance triggers, and banking integrations."
  },
  {
    title: "AI & LLM Data Gateways",
    desc: "Validate authentication, vector database tenant filtering, and API key governance on AI microservice endpoints."
  },
  {
    title: "Mobile Backend APIs",
    desc: "Protect mobile client endpoints against token forging, rate-limiting bypasses, and unverified data dumps."
  }
];

const testAreas = [
  {
    code: "OWASP API1:2023",
    title: "Broken Object Level Authorization (BOLA / IDOR)",
    desc: "Systematically testing every API parameter and path variable (e.g. /api/v1/workspaces/{id}) to ensure strict session-to-resource ownership checks.",
    icon: KeyRound
  },
  {
    code: "OWASP API2:2023",
    title: "Broken Authentication & Token Flaws",
    desc: "Auditing JWT signatures, algorithm confusion ('none' & HMAC/RSA mismatches), OAuth 2.0 grant types, refresh token rotation, and credential stuffing defense.",
    icon: Lock
  },
  {
    code: "OWASP API3:2023",
    title: "Broken Object Property Level Authorization",
    desc: "Testing mass assignment and unauthorized property modification to prevent users from overriding roles, billing tiers, or account statuses.",
    icon: Database
  },
  {
    code: "OWASP API4:2023",
    title: "Unrestricted Resource Consumption",
    desc: "Testing API rate limits, query payload sizes, pagination boundaries, and OTP brute-force limits to prevent Denial of Service and scraping.",
    icon: ShieldAlert
  },
  {
    code: "OWASP API5:2023",
    title: "Broken Function Level Authorization (BFLA)",
    desc: "Testing horizontal and vertical privilege boundaries to ensure standard user tokens cannot invoke administrative or partner-level API endpoints.",
    icon: Layers
  },
  {
    code: "OWASP API7:2023",
    title: "Server-Side Request Forgery (SSRF) in APIs",
    desc: "Fuzzing webhook triggers, URL import endpoints, and document parsers to prevent internal network scanning and cloud metadata (169.254.169.254) exposure.",
    icon: Server
  },
  {
    code: "GraphQL Security",
    title: "GraphQL Query Depth & Introspection",
    desc: "Testing circular query recursion, batch query attacks, schema introspection exposure, and field-level authorization resolvers.",
    icon: Code
  },
  {
    code: "Business Logic",
    title: "Multi-Step API Workflow Integrity",
    desc: "Evaluating race conditions in financial balance deductions, coupon stacking, multi-step state machine bypasses, and checkout logic manipulation.",
    icon: ShieldCheck
  }
];

const deliverables = [
  {
    title: "Detailed Technical Penetration Test Report",
    desc: "Complete vulnerability breakdown with CVSS v3.1 scoring, affected endpoints, root cause analysis, and risk levels."
  },
  {
    title: "Developer-Ready PoCs & Reproduction Steps",
    desc: "Raw HTTP request/response logs, step-by-step reproduction scripts, and curl commands for every validated issue."
  },
  {
    title: "Code-Level Remediation Guidance",
    desc: "Practical fix examples and secure code snippets tailored for Node.js, Python, Go, Java, and API gateway configurations."
  },
  {
    title: "Executive Summary for Stakeholders",
    desc: "A concise risk summary for CTOs, founders, enterprise procurement teams, and compliance auditors."
  },
  {
    title: "Engineering Debrief Call",
    desc: "Direct collaborative walkthrough with our lead offensive practitioner to answer developer questions and guide patches."
  },
  {
    title: "30-Day Retest & Verification Letter",
    desc: "Re-evaluation of fixed endpoints and issuance of a formal Retest Verification Letter confirming remediation."
  }
];

const faqs = [
  {
    q: "How does manual API penetration testing differ from automated API scanners?",
    a: "Automated scanners search for syntax flaws, missing headers, and known CVE signatures, but they are blind to application business logic, multi-step transaction flows, and broken object authorization (BOLA/IDOR). Our practitioners provision distinct user contexts in staging and manually manipulate request parameters, authorization tokens, and state transitions to find real exploit paths."
  },
  {
    q: "What prerequisites are required to scope an API security assessment?",
    a: "We typically require API documentation (Postman collection, OpenAPI/Swagger JSON, or endpoint list), staging environment access, test accounts representing different user roles (e.g., Tenant A User vs. Tenant B Admin), and mutual NDA execution."
  },
  {
    q: "How long does an API security assessment take?",
    a: "A standard API penetration test takes 5 to 7 business days depending on endpoint count, authentication complexity, and custom business logic. For urgent customer security reviews, preliminary critical findings can be shared within 48 to 72 hours."
  },
  {
    q: "Is retesting included after our engineering team patches the findings?",
    a: "Yes. Retesting is included with every TrustLayerLabs engagement. Once your developers deploy fixes to your staging environment, our practitioners re-test the identified vectors and issue an updated final report and Retest Verification Letter."
  }
];

export default function ApiSecurityPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.trustlayerlabs.co.in/services/api-security#service",
        "name": "API Security Testing & BOLA Penetration Testing",
        "serviceType": "API Penetration Testing",
        "provider": {
          "@type": "Organization",
          "@id": "https://www.trustlayerlabs.co.in/#organization",
          "name": "TrustLayerLabs",
          "url": "https://www.trustlayerlabs.co.in"
        },
        "description": "Manual vulnerability assessment for REST, GraphQL, and gRPC microservices targeting BOLA/IDOR, BFLA, broken authentication, and business logic flaws.",
        "areaServed": ["India", "Global"],
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.trustlayerlabs.co.in/services/api-security#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trustlayerlabs.co.in" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.trustlayerlabs.co.in/services" },
          { "@type": "ListItem", "position": 3, "name": "API Security", "item": "https://www.trustlayerlabs.co.in/services/api-security" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.trustlayerlabs.co.in/services/api-security#faq",
        "mainEntity": faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ],
  };

  return (
    <div className="bg-background min-h-screen pt-32 pb-24 font-sans text-textPrimary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="section-container max-w-6xl mx-auto">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 mb-6">
          <Link href="/" className="text-xs uppercase font-mono text-textSecondary hover:text-textPrimary transition-colors">Home</Link>
          <span className="text-xs text-textSecondary">/</span>
          <Link href="/services" className="text-xs uppercase font-mono text-textSecondary hover:text-textPrimary transition-colors">Services</Link>
          <span className="text-xs text-textSecondary">/</span>
          <span className="text-xs uppercase font-mono text-primary font-bold">API Security</span>
        </div>

        {/* Hero Section — Above The Fold */}
        <div className="max-w-4xl space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider">
            <KeyRound size={13} className="text-primary" />
            <span>OWASP API Top 10 Penetration Testing</span>
          </div>

          <h1 className="heading-1 font-sans text-textPrimary tracking-tight">
            API Security Testing & <span className="text-primary">BOLA Penetration Testing</span>
          </h1>

          <p className="text-base sm:text-lg text-textSecondary leading-relaxed font-sans max-w-3xl">
            Manual offensive security testing for REST, GraphQL, and gRPC APIs. We uncover Broken Object Level Authorization (BOLA/IDOR), authentication bypasses, tenant isolation failures, and business logic flaws that automated scanners overlook.
          </p>

          {/* Quick Value Prop Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-3.5 bg-surface border border-border/80 rounded-xl">
              <span className="text-[10px] font-mono uppercase tracking-wider text-primary font-bold block mb-1">WHO WE HELP</span>
              <p className="text-xs text-textSecondary leading-normal">SaaS, FinTech, and AI engineering teams with high-value API endpoints.</p>
            </div>
            <div className="p-3.5 bg-surface border border-border/80 rounded-xl">
              <span className="text-[10px] font-mono uppercase tracking-wider text-primary font-bold block mb-1">WHAT WE TEST</span>
              <p className="text-xs text-textSecondary leading-normal">Manual authorization, BOLA/BFLA, JWT validation, and multi-tenant isolation.</p>
            </div>
            <div className="p-3.5 bg-surface border border-border/80 rounded-xl">
              <span className="text-[10px] font-mono uppercase tracking-wider text-primary font-bold block mb-1">DELIVERABLES</span>
              <p className="text-xs text-textSecondary leading-normal">Reproducible PoCs, remediation code snippets, executive summary & 30-day retest.</p>
            </div>
          </div>

          {/* Primary & Supporting CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link 
              href="https://calendar.app.google/jnamj3gawxVunPJm9"
              target="_blank"
              className="px-8 py-3.5 bg-primary hover:bg-primary-hover text-white text-xs uppercase font-sans font-bold tracking-wider rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              <Calendar size={15} />
              <span>Book a 20-Min Security Review</span>
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

        {/* Who We Help Section */}
        <div className="py-16 border-t border-border" id="who-we-help">
          <div className="mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-4">
              <span>Target Teams</span>
            </div>
            <h2 className="heading-2 font-sans mb-3 text-textPrimary">
              Who We <span className="text-primary">Help</span>
            </h2>
            <p className="body-text text-textSecondary font-sans max-w-3xl">
              We partner with engineering leaders who need deep verification of their API access controls and multi-tenant security boundaries before going to market or closing enterprise deals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whoWeHelp.map((item, idx) => (
              <div key={idx} className="p-6 bg-surface border border-border rounded-2xl space-y-2.5 shadow-sm">
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

        {/* What We Test: API Attack Surfaces */}
        <div className="py-16 border-t border-border" id="test-areas">
          <div className="mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-4">
              <span>Testing Scope</span>
            </div>
            <h2 className="heading-2 font-sans mb-3 text-textPrimary">
              What We Test in <span className="text-primary">Your APIs</span>
            </h2>
            <p className="body-text text-textSecondary font-sans max-w-3xl">
              Our testing evaluates the complete OWASP API Security Top 10 with human-led exploitation of logic boundaries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testAreas.map((area, idx) => (
              <div key={idx} className="p-6 bg-surface border border-border rounded-2xl flex flex-col justify-between hover:border-zinc-400 transition-all duration-300 shadow-sm">
                <div>
                  <span className="text-[9px] font-mono font-bold text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded uppercase block mb-3 w-fit">
                    {area.code}
                  </span>
                  <h3 className="text-sm font-bold text-textPrimary tracking-tight font-sans mb-2">
                    {area.title}
                  </h3>
                  <p className="text-xs text-textSecondary leading-relaxed font-sans">
                    {area.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables Section */}
        <div className="py-16 border-t border-border" id="deliverables">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-4">
              <span>Audit Deliverables</span>
            </div>
            <h2 className="heading-2 font-sans mb-3 text-textPrimary">
              What You Receive from <span className="text-primary">TrustLayerLabs</span>
            </h2>
            <p className="body-text text-textSecondary font-sans">
              Actionable engineering documentation designed for rapid remediation and verification for stakeholders.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item, idx) => (
              <div key={idx} className="p-6 bg-surface border border-border rounded-2xl space-y-2.5 shadow-sm">
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

        {/* Cross-Service Contextual Linking */}
        <div className="my-12 space-y-4">
          <div className="p-4 bg-surface border border-border/80 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-textSecondary font-sans">
              Securing financial APIs, payment gateways, or banking integrations? Explore our dedicated <Link href="/fintech-security" className="text-primary font-bold hover:underline">FinTech API Security Testing</Link> services.
            </p>
            <Link href="/fintech-security" className="text-xs font-bold font-mono text-primary flex items-center gap-1 uppercase tracking-wider flex-shrink-0">
              FinTech VAPT →
            </Link>
          </div>

          <div className="p-4 bg-surface border border-border/80 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-textSecondary font-sans">
              Auditing APIs serving iOS or Android applications? Explore our <Link href="/services/mobile-vapt" className="text-primary font-bold hover:underline">Mobile Application VAPT</Link> services.
            </p>
            <Link href="/services/mobile-vapt" className="text-xs font-bold font-mono text-primary flex items-center gap-1 uppercase tracking-wider flex-shrink-0">
              Mobile VAPT →
            </Link>
          </div>
        </div>

        {/* FAQs */}
        <div className="py-16 border-t border-border" id="faqs">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-4">
              <span>FAQ</span>
            </div>
            <h2 className="heading-2 font-sans mb-3 text-textPrimary">
              API Security Testing <span className="text-primary">FAQs</span>
            </h2>
          </div>

          <div className="space-y-4 max-w-4xl">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-6 bg-surface border border-border rounded-2xl space-y-2 shadow-sm">
                <h3 className="text-sm font-bold text-textPrimary font-sans flex items-start gap-2">
                  <span className="text-primary font-mono">Q:</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs text-textSecondary leading-relaxed font-sans pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Banner */}
        <div className="my-16 p-8 bg-surface border border-primary/30 rounded-3xl text-center space-y-6 shadow-sm">
          <div className="max-w-2xl mx-auto space-y-3">
            <h3 className="text-xl sm:text-2xl font-bold text-textPrimary font-sans">
              Ready to Scope Your API Security Assessment?
            </h3>
            <p className="text-xs sm:text-sm text-textSecondary font-sans leading-relaxed">
              Schedule a 20-minute scoping review with our lead security architects under mutual NDA. We will evaluate your endpoint surface and provide a transparent, fixed proposal.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link 
              href="https://calendar.app.google/jnamj3gawxVunPJm9"
              target="_blank"
              className="px-8 py-3.5 bg-primary hover:bg-primary-hover text-white text-xs uppercase font-sans font-bold tracking-wider rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              <Calendar size={15} />
              <span>Book a 20-Min Security Review</span>
            </Link>
            <Link 
              href="/free-assessment"
              className="px-8 py-3.5 bg-background border border-border hover:border-zinc-400 text-xs uppercase font-sans font-semibold tracking-wider rounded-xl text-textPrimary hover:text-primary transition-all flex items-center gap-2"
            >
              <span>Request a Security Assessment</span>
            </Link>
          </div>
        </div>

      </div>

      {/* Embedded Contact Form */}
      <ContactForm />
    </div>
  );
}
