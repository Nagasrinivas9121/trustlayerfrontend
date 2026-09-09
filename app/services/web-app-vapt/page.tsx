import React from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  ShieldCheck, 
  ArrowRight, 
  Calendar, 
  CheckCircle2, 
  Globe, 
  Lock, 
  Database, 
  Server, 
  FileText, 
  Layers, 
  HelpCircle,
  Clock,
  ShieldAlert,
  Code
} from "lucide-react";
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Web Application VAPT & Penetration Testing Services",
  description: "Manual Web Application VAPT for React, Next.js, and SaaS apps. Discover OWASP Top 10, broken access control, and business logic flaws with free retesting.",
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/services/web-app-vapt",
  },
  openGraph: {
    title: "Web Application VAPT & Penetration Testing Services | TrustLayerLabs",
    description: "Manual Web Application VAPT for React, Next.js, and SaaS apps. Discover OWASP Top 10, broken access control, and business logic flaws with free retesting.",
    url: "https://www.trustlayerlabs.co.in/services/web-app-vapt",
    siteName: "TrustLayerLabs",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Application VAPT & Penetration Testing Services | TrustLayerLabs",
    description: "Manual Web Application VAPT for React, Next.js, and SaaS apps. Discover OWASP Top 10, broken access control, and business logic flaws with free retesting.",
  },
};

const whoWeHelp = [
  {
    title: "Modern SaaS Platforms",
    desc: "Test multi-tenant isolation, role-based access control (RBAC), and customer data protection in single-page and SSR apps."
  },
  {
    title: "FinTech & Banking Portals",
    desc: "Harden customer onboarding dashboards, fund transfer interfaces, session lifecycles, and transaction state machines."
  },
  {
    title: "Healthcare & Patient Portals",
    desc: "Verify access controls around electronic protected health information (ePHI) and medical record vaults."
  },
  {
    title: "E-Commerce & High-Volume Apps",
    desc: "Prevent checkout parameter tampering, coupon and cart race conditions, and account takeover vectors."
  }
];

const testAreas = [
  {
    code: "OWASP A01:2021",
    title: "Broken Access Control & Authorization",
    desc: "Testing horizontal and vertical privilege escalation, insecure direct object references (IDOR), and unauthorized admin route access.",
    icon: Lock
  },
  {
    code: "OWASP A02:2021",
    title: "Cryptographic Failures & Sensitive Data",
    desc: "Auditing data in transit (TLS/HTTPS), sensitive data exposure in browser storage, cookies (HttpOnly, Secure, SameSite), and weak hashing.",
    icon: Database
  },
  {
    code: "OWASP A03:2021",
    title: "Injection Flaws (SQLi, NoSQLi, XSS)",
    desc: "Testing for SQL injection, command execution, Stored/Reflected/DOM Cross-Site Scripting (XSS), and template injection.",
    icon: Code
  },
  {
    code: "OWASP A07:2021",
    title: "Identification & Authentication Failures",
    desc: "Auditing session fixation, multi-factor authentication (MFA) bypasses, brute-force protections, and password reset flows.",
    icon: ShieldCheck
  },
  {
    code: "OWASP A05:2021",
    title: "Security Misconfiguration & CORS",
    desc: "Evaluating Cross-Origin Resource Sharing (CORS) wildcard policies, security headers (CSP, HSTS, X-Frame-Options), and default credentials.",
    icon: Server
  },
  {
    code: "OWASP A10:2021",
    title: "Server-Side Request Forgery (SSRF)",
    desc: "Testing image loaders, webhooks, and PDF generation modules against internal cloud metadata and intranet service exploitation.",
    icon: ShieldAlert
  },
  {
    code: "State Integrity",
    title: "Client-Side State & Logic Manipulation",
    desc: "Testing whether client-side state manipulation in React/Vue/Next.js applications can alter checkout prices, discounts, or user permissions.",
    icon: Globe
  },
  {
    code: "Business Logic",
    title: "Multi-Step Workflow Integrity",
    desc: "Fuzzing multi-step wizard workflows, transaction confirmations, and state machines for logic bypasses.",
    icon: Layers
  }
];

const deliverables = [
  {
    title: "Comprehensive VAPT Technical Report",
    desc: "Detailed technical breakdown with CVSS v3.1 scoring, vulnerability classifications, and risk ratings."
  },
  {
    title: "Step-by-Step Reproduction Proofs",
    desc: "Developer-ready PoC payloads, curl commands, and request-response traces for instant validation."
  },
  {
    title: "Code Remediation Guidance",
    desc: "Actionable code examples and architectural recommendations for Next.js, Node.js, Python, Java, and Go."
  },
  {
    title: "Executive Summary for Stakeholders",
    desc: "Clear executive summary designed for leadership, investors, enterprise buyers, and compliance reviews."
  },
  {
    title: "Developer Debrief Session",
    desc: "Direct consultation with our offensive security practitioner to walk your engineering team through remediation."
  },
  {
    title: "30-Day Retest & Verification Letter",
    desc: "Verification of remediated findings and issuance of a formal Retest Verification Letter."
  }
];

const faqs = [
  {
    q: "What is the typical duration of a Web Application VAPT?",
    a: "A standard web application security assessment takes 5 to 7 business days. For complex enterprise applications or tight procurement deadlines, we provide an initial executive debrief within 48 to 72 hours."
  },
  {
    q: "Do you test single-page applications (React, Next.js, Vue)?",
    a: "Yes. We specialize in modern single-page applications (SPA) and server-side rendered (SSR) architectures, evaluating client-side state handling, hidden API routes, token storage, and backend authorization boundaries."
  },
  {
    q: "Can this report be shared with enterprise customers and SOC 2 / ISO auditors?",
    a: "Yes. Our deliverables include an Executive Summary and signed Retest Verification Letter specifically designed for enterprise vendor security questionnaires, SOC 2 Type II readiness, and ISO 27001 reviews."
  },
  {
    q: "Is retesting included once our team patches the findings?",
    a: "Yes. Every assessment includes free retesting within 30 days to confirm that your deployed fixes completely resolve the identified vulnerabilities."
  }
];

export default function WebAppVaptPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.trustlayerlabs.co.in/services/web-app-vapt#service",
        "name": "Web Application VAPT Services",
        "serviceType": "Web Application Penetration Testing",
        "provider": {
          "@type": "Organization",
          "@id": "https://www.trustlayerlabs.co.in/#organization",
          "name": "TrustLayerLabs",
          "url": "https://www.trustlayerlabs.co.in"
        },
        "description": "Manual Web Application VAPT for modern React, Next.js, and SaaS platforms targeting OWASP Top 10 and business logic vulnerabilities.",
        "areaServed": ["India", "Global"],
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.trustlayerlabs.co.in/services/web-app-vapt#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trustlayerlabs.co.in" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.trustlayerlabs.co.in/services" },
          { "@type": "ListItem", "position": 3, "name": "Web App VAPT", "item": "https://www.trustlayerlabs.co.in/services/web-app-vapt" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.trustlayerlabs.co.in/services/web-app-vapt#faq",
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
          <span className="text-xs uppercase font-mono text-primary font-bold">Web App VAPT</span>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider">
            <Globe size={13} className="text-primary" />
            <span>Web Application Security Engineering</span>
          </div>

          <h1 className="heading-1 font-sans text-textPrimary tracking-tight">
            Web Application VAPT & <span className="text-primary">Penetration Testing Services</span>
          </h1>

          <p className="text-base sm:text-lg text-textSecondary leading-relaxed font-sans max-w-3xl">
            Manual penetration testing for modern single-page apps (React, Next.js, Vue) and server-side applications. We identify authorization bypasses, XSS, SQLi, CSRF, session hijacking, and business logic flaws.
          </p>

          {/* Quick Value Prop Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-3.5 bg-surface border border-border/80 rounded-xl">
              <span className="text-[10px] font-mono uppercase tracking-wider text-primary font-bold block mb-1">WHO WE HELP</span>
              <p className="text-xs text-textSecondary leading-normal">SaaS, FinTech, and B2B web applications preparing for scale or audit.</p>
            </div>
            <div className="p-3.5 bg-surface border border-border/80 rounded-xl">
              <span className="text-[10px] font-mono uppercase tracking-wider text-primary font-bold block mb-1">WHAT WE TEST</span>
              <p className="text-xs text-textSecondary leading-normal">OWASP Top 10, session management, client-side security & access boundaries.</p>
            </div>
            <div className="p-3.5 bg-surface border border-border/80 rounded-xl">
              <span className="text-[10px] font-mono uppercase tracking-wider text-primary font-bold block mb-1">DELIVERABLES</span>
              <p className="text-xs text-textSecondary leading-normal">Technical report, reproducible PoCs, executive summary & 30-day verified retest.</p>
            </div>
          </div>

          {/* Action CTAs */}
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
              <span>Target Applications</span>
            </div>
            <h2 className="heading-2 font-sans mb-3 text-textPrimary">
              Who We <span className="text-primary">Help</span>
            </h2>
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

        {/* What We Test */}
        <div className="py-16 border-t border-border" id="test-areas">
          <div className="mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-4">
              <span>Testing Vectors</span>
            </div>
            <h2 className="heading-2 font-sans mb-3 text-textPrimary">
              What We Test in <span className="text-primary">Web Applications</span>
            </h2>
            <p className="body-text text-textSecondary font-sans max-w-3xl">
              Our web assessment targets both client-side and server-side components, combining automated reconnaissance with manual logic exploitation.
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
              <span>Deliverables</span>
            </div>
            <h2 className="heading-2 font-sans mb-3 text-textPrimary">
              What You Receive from <span className="text-primary">TrustLayerLabs</span>
            </h2>
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
              Need deep authorization testing for microservices and backend endpoints? Explore our <Link href="/services/api-security" className="text-primary font-bold hover:underline">API Security Testing</Link> services.
            </p>
            <Link href="/services/api-security" className="text-xs font-bold font-mono text-primary flex items-center gap-1 uppercase tracking-wider flex-shrink-0">
              API Security →
            </Link>
          </div>

          <div className="p-4 bg-surface border border-border/80 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-textSecondary font-sans">
              Preparing for SOC 2 Type II or ISO 27001 audit attestation? Explore our <Link href="/grc-readiness" className="text-primary font-bold hover:underline">GRC & Enterprise Readiness</Link> consulting.
            </p>
            <Link href="/grc-readiness" className="text-xs font-bold font-mono text-primary flex items-center gap-1 uppercase tracking-wider flex-shrink-0">
              GRC Readiness →
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
              Web Application VAPT <span className="text-primary">FAQs</span>
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
              Ready to Scope Your Web Application VAPT?
            </h3>
            <p className="text-xs sm:text-sm text-textSecondary font-sans leading-relaxed">
              Book a confidential 20-minute scoping review under mutual NDA. We will evaluate your application architecture and provide a fixed quote within 24 hours.
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
