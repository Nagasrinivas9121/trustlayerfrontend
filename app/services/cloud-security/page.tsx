import React from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  ShieldCheck, 
  ArrowRight, 
  Calendar, 
  CheckCircle2, 
  Cloud, 
  Lock, 
  Database, 
  Server, 
  FileText, 
  Layers, 
  HelpCircle,
  Clock,
  ShieldAlert,
  KeyRound,
  Terminal
} from "lucide-react";
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Cloud Security Assessment & IAM Audit Services",
  description: "Comprehensive AWS, GCP, and Azure cloud security configuration audits. Eliminate IAM privilege creep, S3 bucket exposure, and compliance gaps.",
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/services/cloud-security",
  },
  openGraph: {
    title: "Cloud Security Assessment & IAM Audit Services | TrustLayerLabs",
    description: "Comprehensive AWS, GCP, and Azure cloud security configuration audits. Eliminate IAM privilege creep, S3 bucket exposure, and compliance gaps.",
    url: "https://www.trustlayerlabs.co.in/services/cloud-security",
    siteName: "TrustLayerLabs",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud Security Assessment & IAM Audit Services | TrustLayerLabs",
    description: "Comprehensive AWS, GCP, and Azure cloud security configuration audits. Eliminate IAM privilege creep, S3 bucket exposure, and compliance gaps.",
  },
};

const whoWeHelp = [
  {
    title: "AWS / GCP Native SaaS",
    desc: "Startups scaling multi-account AWS Organizations or GCP Projects needing strict least-privilege IAM and CIS benchmark compliance."
  },
  {
    title: "FinTech & Banking Infrastructure",
    desc: "Financial workloads requiring strict network isolation, KMS envelope encryption, audit trail integrity, and RBI baseline alignment."
  },
  {
    title: "Kubernetes & Container Platforms",
    desc: "Teams running Amazon EKS, Google GKE, or self-hosted Docker clusters with microservice networking."
  },
  {
    title: "Startups Prepping for SOC 2",
    desc: "Engineering organizations needing technical cloud evidence, access control validation, and asset inventories for auditors."
  }
];

const testAreas = [
  {
    code: "IAM & Identity",
    title: "IAM Least-Privilege & Credential Audit",
    desc: "Eliminating wildcard (*) permissions, reviewing over-privileged service roles, dormant access keys, and cross-account assume-role policies.",
    icon: KeyRound
  },
  {
    code: "Storage Security",
    title: "Cloud Storage & Database Exposure",
    desc: "Auditing AWS S3, GCP Cloud Storage, RDS, and Cloud SQL configurations for public read/write policies, default encryption, and snapshot backups.",
    icon: Database
  },
  {
    code: "CIS Benchmarks",
    title: "CIS Cloud Benchmark Conformance",
    desc: "Benchmarking configurations against CIS AWS Foundations, CIS Google Cloud, and CIS Microsoft Azure benchmarks.",
    icon: ShieldCheck
  },
  {
    code: "Network Hardening",
    title: "VPC Networking & Perimeter Security",
    desc: "Evaluating security groups, NACLs, public IP exposures, open database ports (3306, 5432), and API gateway TLS configurations.",
    icon: Server
  },
  {
    code: "Secrets Management",
    title: "KMS & Secrets Storage Review",
    desc: "Verifying that API keys, database credentials, and certificates are managed via AWS Secrets Manager / GCP Secret Manager rather than plaintext environment variables.",
    icon: Lock
  },
  {
    code: "Logging & Trails",
    title: "CloudTrail & Audit Logging Integrity",
    desc: "Validating multi-region CloudTrail/CloudWatch logging, S3 object-level logging, log file validation, and retention policies.",
    icon: Layers
  },
  {
    code: "Container / K8s",
    title: "EKS / GKE & Container Security",
    desc: "Reviewing Pod Security Standards, RBAC bindings, container image vulnerability scanning, and host namespace isolation.",
    icon: Terminal
  },
  {
    code: "IaC Review",
    title: "Terraform & CloudFormation SAST",
    desc: "Auditing Infrastructure as Code (IaC) repositories to catch security misconfigurations prior to staging/production deployment.",
    icon: ShieldAlert
  }
];

const deliverables = [
  {
    title: "Cloud Security Assessment Report",
    desc: "Comprehensive technical report categorized by risk severity, CIS Benchmark compliance gaps, and affected resources."
  },
  {
    title: "IAM Privilege Mapping Matrix",
    desc: "Detailed matrix highlighting excessive permissions, unused roles, and principal attack paths."
  },
  {
    title: "Remediation Guide & Terraform Fixes",
    desc: "Ready-to-apply Infrastructure-as-Code code snippets and CLI commands to resolve identified misconfigurations."
  },
  {
    title: "Executive Summary for Leadership",
    desc: "A concise overview of cloud risk posture, compliance status, and priority actions for founders and CTOs."
  },
  {
    title: "Engineering Debrief Walkthrough",
    desc: "Collaborative call with our cloud security practitioners to assist your DevOps/DevSecOps team with remediation."
  },
  {
    title: "30-Day Retest & Verification Letter",
    desc: "Re-scanning and validation of remediated cloud controls with a signed verification letter."
  }
];

const faqs = [
  {
    q: "How do you access our cloud environment to perform the audit?",
    a: "We use read-only IAM cross-account roles or temporary audit credentials with least-privilege security audit policies (e.g., SecurityAudit on AWS or Viewer on GCP). We never require write or administrative access to your live infrastructure, ensuring zero disruption to production workloads."
  },
  {
    q: "How long does a cloud security assessment take?",
    a: "A standard cloud architecture and IAM assessment takes 4 to 6 business days depending on account count and architectural breadth."
  },
  {
    q: "Can this assessment satisfy SOC 2 or ISO 27001 technical cloud control requirements?",
    a: "Yes. Our cloud assessment deliverables map directly to SOC 2 CC6.1–CC6.8 controls and ISO 27001 Annex A.9–A.13 technical requirements, providing audit-ready evidence for external compliance reviewers."
  },
  {
    q: "Is retesting included after our DevOps engineers apply the fixes?",
    a: "Yes. Retesting within 30 days is included to verify that all highlighted IAM, storage, and networking misconfigurations have been completely resolved."
  }
];

export default function CloudSecurityPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.trustlayerlabs.co.in/services/cloud-security#service",
        "name": "Cloud Security Assessment Services",
        "serviceType": "Cloud Security Auditing",
        "provider": {
          "@type": "Organization",
          "@id": "https://www.trustlayerlabs.co.in/#organization",
          "name": "TrustLayerLabs",
          "url": "https://www.trustlayerlabs.co.in"
        },
        "description": "Comprehensive AWS, GCP, and Azure cloud security configuration audits. Eliminate IAM privilege creep, S3 bucket exposure, and compliance gaps.",
        "areaServed": ["India", "Global"],
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.trustlayerlabs.co.in/services/cloud-security#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trustlayerlabs.co.in" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.trustlayerlabs.co.in/services" },
          { "@type": "ListItem", "position": 3, "name": "Cloud Security", "item": "https://www.trustlayerlabs.co.in/services/cloud-security" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.trustlayerlabs.co.in/services/cloud-security#faq",
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
          <span className="text-xs uppercase font-mono text-primary font-bold">Cloud Security</span>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider">
            <Cloud size={13} className="text-primary" />
            <span>AWS / GCP / Azure Posture & IAM Hardening</span>
          </div>

          <h1 className="heading-1 font-sans text-textPrimary tracking-tight">
            Cloud Security Assessment & <span className="text-primary">IAM Audit Services</span>
          </h1>

          <p className="text-base sm:text-lg text-textSecondary leading-relaxed font-sans max-w-3xl">
            Configuration, identity, and access architecture reviews across AWS, GCP, and Azure aligned with CIS Benchmarks. We eliminate IAM privilege creep, unauthenticated storage buckets, and infrastructure exposure.
          </p>

          {/* Quick Value Prop Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-3.5 bg-surface border border-border/80 rounded-xl">
              <span className="text-[10px] font-mono uppercase tracking-wider text-primary font-bold block mb-1">WHO WE HELP</span>
              <p className="text-xs text-textSecondary leading-normal">Cloud-native SaaS, FinTech, and enterprise development teams.</p>
            </div>
            <div className="p-3.5 bg-surface border border-border/80 rounded-xl">
              <span className="text-[10px] font-mono uppercase tracking-wider text-primary font-bold block mb-1">WHAT WE TEST</span>
              <p className="text-xs text-textSecondary leading-normal">IAM least privilege, storage bucket exposure, CIS Benchmarks & K8s RBAC.</p>
            </div>
            <div className="p-3.5 bg-surface border border-border/80 rounded-xl">
              <span className="text-[10px] font-mono uppercase tracking-wider text-primary font-bold block mb-1">DELIVERABLES</span>
              <p className="text-xs text-textSecondary leading-normal">IAM permission matrix, IaC remediation snippets & 30-day verified retest.</p>
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
              <span>Target Environments</span>
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
              What We Test in <span className="text-primary">Cloud Infrastructure</span>
            </h2>
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
              Looking to audit Kubernetes clusters, pod policies, and container images? Explore our <Link href="/services/kubernetes-security" className="text-primary font-bold hover:underline">Kubernetes & Container Security</Link> assessments.
            </p>
            <Link href="/services/kubernetes-security" className="text-xs font-bold font-mono text-primary flex items-center gap-1 uppercase tracking-wider flex-shrink-0">
              K8s Security →
            </Link>
          </div>

          <div className="p-4 bg-surface border border-border/80 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-textSecondary font-sans">
              Preparing technical control evidence for SOC 2 Type II or ISO 27001? Explore our <Link href="/grc-readiness" className="text-primary font-bold hover:underline">GRC & Enterprise Readiness</Link> consulting.
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
              Cloud Security Assessment <span className="text-primary">FAQs</span>
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
              Ready to Scope Your Cloud Security Audit?
            </h3>
            <p className="text-xs sm:text-sm text-textSecondary font-sans leading-relaxed">
              Book a 20-minute scoping call with our lead security architects under mutual NDA. We will review your cloud footprint and provide a transparent, fixed proposal.
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
