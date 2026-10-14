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
  Code,
  Users,
  CreditCard,
  RefreshCw
} from "lucide-react";
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "SaaS Penetration Testing & Multi-Tenant VAPT",
  description: "Specialized SaaS penetration testing focused on multi-tenant isolation, cross-tenant BOLA, RBAC escalation, and billing bypasses. 30-day retest included.",
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/services/saas-vapt",
  },
  openGraph: {
    title: "SaaS Penetration Testing & Multi-Tenant VAPT | TrustLayerLabs",
    description: "Specialized SaaS penetration testing focused on multi-tenant isolation, cross-tenant BOLA, RBAC escalation, and billing bypasses. 30-day retest included.",
    url: "https://www.trustlayerlabs.co.in/services/saas-vapt",
    siteName: "TrustLayerLabs",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS Penetration Testing & Multi-Tenant VAPT | TrustLayerLabs",
    description: "Specialized SaaS penetration testing focused on multi-tenant isolation, cross-tenant BOLA, RBAC escalation, and billing bypasses. 30-day retest included.",
  },
};

const whoWeHelp = [
  {
    title: "B2B SaaS Engineering Teams",
    desc: "Verify that enterprise tenant isolation boundaries remain unbreachable across complex multi-tenant database schemas and microservices."
  },
  {
    title: "SaaS Startups Closing Enterprise Deals",
    desc: "Provide certified third-party pentest attestations and detailed remediation evidence to satisfy enterprise customer vendor security reviews."
  },
  {
    title: "SOC 2 Type II & ISO 27001 Seekers",
    desc: "Fulfill annual independent technical penetration testing requirements with audit-ready documentation and zero false-positive proof."
  },
  {
    title: "High-Growth Product Companies",
    desc: "Prevent privilege escalation between free, pro, and enterprise tiers, safeguarding revenue models and proprietary customer workspaces."
  }
];

const testAreas = [
  {
    code: "TENANT-ISO",
    title: "Multi-Tenant Data Isolation & Partitioning",
    desc: "Testing row-level security (RLS), tenant database schemas, and shared cache stores (Redis) to ensure Tenant A cannot read, modify, or delete Tenant B records.",
    icon: Database
  },
  {
    code: "BOLA-IDOR",
    title: "Broken Object Level Authorization (BOLA)",
    desc: "Systematically manipulating workspace UUIDs, document IDs, project tokens, and export parameters to uncover authorization bypasses automated scanners miss.",
    icon: KeyRound
  },
  {
    code: "RBAC-ABAC",
    title: "Role & Privilege Boundary Escalation",
    desc: "Testing horizontal and vertical privilege boundaries between Owners, Admins, Members, and Viewers to prevent unauthorized administrative actions.",
    icon: Layers
  },
  {
    code: "ASYNC-JOBS",
    title: "Background Worker & Queue Isolation",
    desc: "Auditing background task processors (Celery, BullMQ, Sidekiq) to ensure queued export and reporting jobs do not run under ambient un-scoped service roles.",
    icon: Server
  },
  {
    code: "BILLING-TIER",
    title: "Subscription Tier & Feature Flag Tampering",
    desc: "Manipulating client-side states, API parameters, and Stripe/payment gateway webhooks to attempt unauthorized access to restricted enterprise features.",
    icon: CreditCard
  },
  {
    code: "SSO-OAUTH",
    title: "SAML, OAuth 2.0 & Session Security",
    desc: "Auditing enterprise single sign-on (SSO), SAML assertion forging, session fixation, token expiration, and multi-factor authentication (MFA) bypasses.",
    icon: Lock
  }
];

const faqs = [
  {
    q: "How do you test multi-tenant SaaS isolation without risking live customer data?",
    a: "We conduct assessments using dedicated testing tenants in staging environments, or isolated tenant sandboxes in production. Our practitioners use dual-account matrix testing (Tenant A Admin/User vs. Tenant B Admin/User) to prove cross-tenant access without touching or exposing real customer records."
  },
  {
    q: "What credentials and access are required for a SaaS penetration test?",
    a: "For thorough grey-box testing, we require two testing organizations or tenants with two roles in each (e.g. one Admin and one standard User per tenant). We also request API specifications (OpenAPI/Swagger) and staging access under a mutual Non-Disclosure Agreement (NDA)."
  },
  {
    q: "Does your SaaS penetration test satisfy SOC 2 Type II and ISO 27001 requirements?",
    a: "Yes. Our assessments fulfill the technical penetration testing mandates of SOC 2 Trust Services Criteria (CC6.1, CC6.6, CC6.8) and ISO/IEC 27001 Control A.12.6. We provide an Executive Attestation Letter signed by certified security practitioners (OSCP, CISSP) for your compliance auditors."
  },
  {
    q: "What is the typical turnaround time for a SaaS pentest?",
    a: "Standard SaaS engagements require 5 to 7 business days of active testing. We conduct an initial debrief of critical findings within 48 to 72 hours, deliver the complete technical report upon completion, and include 30 days of free retesting following your patch deployment."
  },
  {
    q: "What is considered out of scope during a SaaS penetration test?",
    a: "Testing strictly targets your proprietary web application code, API logic, and cloud configurations. Physical data centers, underlying infrastructure of third-party cloud providers (AWS, GCP, Azure), and external third-party subprocessors (e.g. Stripe backend servers) are out of scope."
  }
];

export default function SaasVaptPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.trustlayerlabs.co.in/services/saas-vapt#service",
        "name": "SaaS Penetration Testing & Multi-Tenant VAPT",
        "serviceType": "SaaS Penetration Testing",
        "provider": {
          "@type": "Organization",
          "@id": "https://www.trustlayerlabs.co.in/#organization",
          "name": "TrustLayerLabs",
          "url": "https://www.trustlayerlabs.co.in",
          "telephone": "+91-9391220328",
          "email": "ceo@trustlayerlabs.co.in"
        },
        "description": "Specialized SaaS penetration testing focused on multi-tenant isolation, cross-tenant BOLA, RBAC escalation, and billing bypasses. 30-day retest included.",
        "areaServed": ["India", "Global"],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "SaaS Security Assessment Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Multi-Tenant Isolation Testing" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SaaS BOLA & IDOR Penetration Testing" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SaaS RBAC Privilege Escalation Review" } }
          ]
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.trustlayerlabs.co.in/services/saas-vapt#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trustlayerlabs.co.in" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.trustlayerlabs.co.in/services" },
          { "@type": "ListItem", "position": 3, "name": "SaaS Penetration Testing", "item": "https://www.trustlayerlabs.co.in/services/saas-vapt" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.trustlayerlabs.co.in/services/saas-vapt#faq",
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
    <div className="bg-background min-h-screen pt-32 pb-24 font-sans text-textPrimary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="section-container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 mb-6">
          <Link href="/" className="text-xs uppercase font-mono text-textSecondary hover:text-textPrimary transition-colors">Home</Link>
          <span className="text-xs text-textSecondary">/</span>
          <Link href="/services" className="text-xs uppercase font-mono text-textSecondary hover:text-textPrimary transition-colors">Services</Link>
          <span className="text-xs text-textSecondary">/</span>
          <span className="text-xs uppercase font-mono text-primary font-bold">SaaS Penetration Testing</span>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider">
            <ShieldCheck size={13} className="text-primary" />
            <span>Offensive Multi-Tenant Security Assessment</span>
          </div>

          <h1 className="heading-1 font-sans text-textPrimary tracking-tight">
            SaaS Penetration Testing & <span className="text-primary">Tenant Isolation VAPT</span>
          </h1>

          <p className="text-base sm:text-lg text-textSecondary leading-relaxed font-sans max-w-3xl">
            Automated vulnerability scanners cannot understand tenant boundaries or complex workflow logic. We conduct deep manual security testing across multi-tenant data partitioning, Broken Object Level Authorization (BOLA), RBAC privilege escalation, and background job queues to guarantee Customer A can never access Customer B&apos;s data.
          </p>

          {/* Quick Value Prop Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-3.5 bg-surface border border-border/80 rounded-xl">
              <span className="text-[10px] font-mono uppercase tracking-wider text-primary font-bold block mb-1">AUDIT TIMELINE</span>
              <p className="text-xs text-textSecondary leading-normal">🕒 5–7 business days with critical findings debrief within 48–72h.</p>
            </div>
            <div className="p-3.5 bg-surface border border-border/80 rounded-xl">
              <span className="text-[10px] font-mono uppercase tracking-wider text-primary font-bold block mb-1">RETEST GUARANTEE</span>
              <p className="text-xs text-textSecondary leading-normal">Free 30-day retesting included with verified third-party attestation letter.</p>
            </div>
            <div className="p-3.5 bg-surface border border-border/80 rounded-xl">
              <span className="text-[10px] font-mono uppercase tracking-wider text-primary font-bold block mb-1">MUTUAL NDA</span>
              <p className="text-xs text-textSecondary leading-normal">Bilateral NDA executed upfront prior to architecture or credential exchange.</p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link 
              href="/free-assessment"
              className="px-8 py-3.5 bg-primary hover:bg-primary-hover text-white text-xs uppercase font-sans font-bold tracking-wider rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              <span>Get a Free Security Review →</span>
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
        <div className="mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-textPrimary font-sans mb-3">
            Who Needs SaaS Penetration Testing
          </h2>
          <p className="text-xs sm:text-sm text-textSecondary max-w-2xl mb-8 leading-relaxed">
            Our multi-tenant testing methodology is purpose-built for engineering leaders and security stakeholders responsible for safeguarding customer datasets.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whoWeHelp.map((item, idx) => (
              <div key={idx} className="p-6 bg-surface border border-border/80 rounded-2xl space-y-2 shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <h3 className="text-sm font-bold text-textPrimary font-sans">{item.title}</h3>
                </div>
                <p className="text-xs text-textSecondary leading-relaxed pl-3.5">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Assessment Scope & Vulnerability Focus */}
        <div className="mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-textPrimary font-sans mb-3">
            SaaS Assessment Scope & Testing Focus Areas
          </h2>
          <p className="text-xs sm:text-sm text-textSecondary max-w-2xl mb-8 leading-relaxed">
            We systematically probe the architectural fault lines where multi-tenant SaaS applications commonly leak data or fail authorization checks.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testAreas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <div key={idx} className="p-6 bg-surface border border-border/80 rounded-2xl space-y-3 shadow-sm hover:border-zinc-400 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-primary px-2 py-0.5 bg-primary/10 rounded">
                      {area.code}
                    </span>
                    <Icon size={18} className="text-primary" />
                  </div>
                  <h3 className="text-sm font-bold text-textPrimary font-sans">{area.title}</h3>
                  <p className="text-xs text-textSecondary leading-relaxed">{area.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Deliverables Section */}
        <div className="mb-16 bg-surface border border-border rounded-2xl p-8 shadow-sm space-y-6">
          <h2 className="text-xl font-bold text-textPrimary font-sans">
            Executive & Engineering Deliverables
          </h2>
          <p className="text-xs text-textSecondary leading-relaxed max-w-3xl">
            You receive zero-fluff, actionable technical documentation designed for both developer patch implementation and enterprise customer security reviews.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="flex items-start gap-3">
              <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
              <div>
                <strong className="text-textPrimary block font-semibold">Technical Remediation Report:</strong>
                Complete CVSS v3.1 scoring, step-by-step curl reproduction commands, and copy-paste code patches.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
              <div>
                <strong className="text-textPrimary block font-semibold">Auditor-Ready Attestation Letter:</strong>
                Official signed third-party attestation letter certifying testing scope and verified remediation status for enterprise buyers.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
              <div>
                <strong className="text-textPrimary block font-semibold">Interactive Developer Debrief:</strong>
                30-to-60 minute video call with lead offensive engineers to walk through vulnerability findings and remediation guidance.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
              <div>
                <strong className="text-textPrimary block font-semibold">Complimentary 30-Day Retesting:</strong>
                Full verification retest within 30 days of patch deployment to certify that identified vulnerabilities are completely resolved.
              </div>
            </div>
          </div>
        </div>

        {/* Engagement Boundaries & Limitations */}
        <div className="mb-16 bg-surface border border-border/80 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-textPrimary font-sans">
            Assessment Scope Boundaries & Safe Harbor Limitations
          </h2>
          <p className="text-xs text-textSecondary leading-relaxed">
            To preserve stability and data integrity, testing strictly follows agreed rules of engagement:
          </p>
          <ul className="space-y-2 text-xs text-textSecondary list-disc pl-5">
            <li><strong>In Scope:</strong> All proprietary web application frontends, REST/GraphQL APIs, tenant authorization logic, authentication flows, and background worker queues.</li>
            <li><strong>Out of Scope:</strong> Denial of Service (DoS/DDoS) attacks, social engineering of employees, physical cloud data centers, and third-party SaaS services (e.g., Stripe, SendGrid, AWS underlying infrastructure).</li>
            <li><strong>Safe Harbor:</strong> Testing is conducted strictly under authorized safe harbor terms, preventing data corruption, irreversible account modification, or service degradation.</li>
          </ul>
        </div>

        {/* Related Authoritative Research & Guides */}
        <div className="mb-16 bg-surface border border-border/80 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-textPrimary font-sans">
            Related Technical Research & Security Guides
          </h2>
          <p className="text-xs text-textSecondary leading-relaxed">
            Explore our offensive security research on multi-tenant architecture and authorization vulnerability remediation:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/blog/what-is-vapt-in-cybersecurity-guide" 
              className="p-4 bg-background border border-border rounded-xl hover:border-primary/50 transition-colors block space-y-1"
            >
              <span className="text-[10px] font-mono font-bold text-primary uppercase">Authoritative Guide</span>
              <h3 className="text-xs font-bold text-textPrimary">Complete Guide to Modern VAPT</h3>
              <p className="text-[11px] text-textSecondary">Understanding VA vs PT and catching business logic flaws.</p>
            </Link>
            <Link 
              href="/services/api-security" 
              className="p-4 bg-background border border-border rounded-xl hover:border-primary/50 transition-colors block space-y-1"
            >
              <span className="text-[10px] font-mono font-bold text-primary uppercase">Core Service</span>
              <h3 className="text-xs font-bold text-textPrimary">API Security & BOLA Testing</h3>
              <p className="text-[11px] text-textSecondary">Deep manual penetration testing for REST and GraphQL endpoints.</p>
            </Link>
            <Link 
              href="/methodology" 
              className="p-4 bg-background border border-border rounded-xl hover:border-primary/50 transition-colors block space-y-1"
            >
              <span className="text-[10px] font-mono font-bold text-primary uppercase">Testing Standards</span>
              <h3 className="text-xs font-bold text-textPrimary">Our 5-Stage VAPT Methodology</h3>
              <p className="text-[11px] text-textSecondary">Adhering to OWASP Top 10, NIST SP 800-115, and PTES standards.</p>
            </Link>
          </div>
        </div>

        {/* Technical FAQs Section */}
        <div className="mb-16 bg-surface border border-border/80 rounded-2xl p-6 sm:p-8 shadow-sm">
          <h2 className="text-lg sm:text-xl font-bold text-textPrimary font-sans mb-6">
            Frequently Asked SaaS Penetration Testing Questions
          </h2>
          <div className="space-y-6 text-xs text-textSecondary">
            {faqs.map((faq, idx) => (
              <div key={idx} className={idx > 0 ? "border-t border-border/60 pt-4" : ""}>
                <h3 className="text-sm font-bold text-textPrimary font-sans mb-1.5">{faq.q}</h3>
                <p className="leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Booking CTA Banner */}
        <div className="my-16 p-8 bg-surface border border-primary/30 rounded-3xl text-center space-y-6 shadow-sm">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-textPrimary font-sans">
              Book a 30-Minute SaaS Penetration Testing Scoping Call
            </h2>
            <p className="text-xs sm:text-sm text-textSecondary max-w-xl mx-auto font-sans leading-relaxed">
              Schedule a confidential technical consultation with our lead security architects under mutual NDA. We review your tenant model, endpoint counts, and compliance timeline to deliver an immediate fixed-price proposal.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/free-assessment"
              className="px-8 py-3.5 bg-primary hover:bg-primary-hover text-white text-xs uppercase font-sans font-bold tracking-wider rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              <span>Get a Free Security Review →</span>
            </Link>
            <Link
              href="/sample-report"
              className="px-8 py-3.5 bg-background border border-border hover:border-zinc-400 text-xs uppercase font-sans font-semibold tracking-wider rounded-xl text-textPrimary hover:text-primary transition-all flex items-center gap-2"
            >
              <FileText size={15} />
              <span>View Sample Report</span>
            </Link>
          </div>
        </div>

      </div>

      {/* Embedded Contact Form */}
      <ContactForm />
    </div>
  );
}
