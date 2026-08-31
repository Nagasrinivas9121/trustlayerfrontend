import type { Metadata } from "next";
import Link from "next/link";
import { 
  ShieldCheck, 
  ArrowRight, 
  Calendar, 
  CheckCircle2, 
  FileText, 
  Building2, 
  ClipboardList, 
  FileCheck2, 
  Scale, 
  HelpCircle,
  Lock,
  Layers
} from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "GRC & Enterprise Security Readiness | SOC 2 & ISO 27001 | TrustLayerLabs",
  description: "Get security-review ready before your enterprise customers ask. SOC 2 Type II readiness, ISO 27001 gap analysis, custom security policies, and technical penetration testing.",
  keywords: [
    "SOC 2 readiness consulting",
    "ISO 27001 gap analysis India",
    "enterprise security review readiness",
    "vendor security questionnaire help",
    "startup GRC consulting",
    "SOC 2 penetration testing",
    "security policy templates SaaS"
  ],
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/grc-readiness",
  },
};

const capabilities = [
  {
    title: "SOC 2 Type II Readiness",
    description: "Mapping your cloud architectures, identity controls, and development workflows to Trust Services Criteria (CC6.1–CC6.8).",
    icon: ShieldCheck
  },
  {
    title: "ISO 27001 Gap Assessments",
    description: "Evaluating your current information security management against ISO/IEC 27001 Annex A controls to create a clear remediation roadmap.",
    icon: Scale
  },
  {
    title: "Custom Security Policy Creation",
    description: "Drafting practical, engineer-friendly policies (Access Control, Incident Response, Change Management, Data Encryption) tailored to your stack.",
    icon: FileText
  },
  {
    title: "Enterprise Security Questionnaires",
    description: "Assisting startup leadership in accurately and confidently completing complex 100+ question vendor security assessments from enterprise buyers.",
    icon: ClipboardList
  },
  {
    title: "Risk Assessment & Risk Registers",
    description: "Establishing structured risk identification, asset scoring, and mitigation tracking required for institutional governance.",
    icon: Layers
  },
  {
    title: "Technical Pentest Audit Evidence",
    description: "Conducting manual penetration testing and generating technical evidence reports fulfilling compliance audit requirements.",
    icon: FileCheck2
  }
];

const grcSteps = [
  {
    step: "01",
    title: "Requirements Scoping",
    desc: "We analyze your upcoming enterprise deal requirements, investor expectations, or target compliance framework (SOC 2 / ISO 27001)."
  },
  {
    step: "02",
    title: "Control Gap Assessment",
    desc: "A thorough review of your technical infrastructure, access management, CI/CD pipelines, and existing operational policies."
  },
  {
    step: "03",
    title: "Remediation Roadmap",
    desc: "A prioritized, step-by-step action plan to close technical and organizational control deficiencies with minimal engineering overhead."
  },
  {
    step: "04",
    title: "Policy & Control Hardening",
    desc: "Implementing customized security policies, configuring least-privilege cloud IAM, and structuring risk registers."
  },
  {
    step: "05",
    title: "Penetration Testing & Evidence",
    desc: "Executing required manual penetration tests and compiling audit-ready evidence packages for third-party reviewers."
  },
  {
    step: "06",
    title: "Auditor & Vendor Support",
    desc: "Direct support during customer security reviews and coordination with your chosen accredited certification body."
  }
];

export default function GrcReadinessPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "GRC & Enterprise Security Readiness",
    "provider": {
      "@type": "Organization",
      "name": "TrustLayerLabs",
      "url": "https://www.trustlayerlabs.co.in"
    },
    "description": "SOC 2 Type II, ISO 27001 readiness advisory, security policy development, and technical controls mapping.",
    "serviceType": "Cybersecurity Governance, Risk & Compliance Advisory"
  };

  return (
    <div className="bg-background min-h-screen pt-32 pb-24 font-sans text-textPrimary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="section-container max-w-6xl mx-auto">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6">
          <Link href="/" className="text-xs uppercase font-mono text-textSecondary hover:text-textPrimary">Home</Link>
          <span className="text-xs text-textSecondary">/</span>
          <span className="text-xs uppercase font-mono text-primary font-bold">GRC Readiness</span>
        </div>

        {/* Hero */}
        <div className="max-w-4xl space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider">
            <Building2 size={13} className="text-primary" />
            <span>Governance, Risk & Enterprise Readiness</span>
          </div>

          <h1 className="heading-1 font-sans text-textPrimary">
            Get Security-Review Ready <br />
            <span className="text-primary">Before Your Enterprise Customer Asks</span>
          </h1>

          <p className="text-base sm:text-lg text-textSecondary leading-relaxed font-sans max-w-3xl">
            Pass vendor security reviews and fast-track SOC 2 / ISO 27001 readiness. We combine technical penetration testing with practical compliance advisory to make high-growth SaaS and FinTech startups enterprise-ready.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link 
              href="https://calendar.app.google/jnamj3gawxVunPJm9"
              target="_blank"
              className="px-8 py-3.5 bg-primary hover:bg-primary-hover text-white text-xs uppercase font-sans font-bold tracking-wider rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              <Calendar size={15} />
              <span>Schedule GRC Consultation</span>
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

        {/* Advisory Disclaimer Notice Box */}
        <div className="mb-16 p-5 bg-surface border border-border/80 rounded-2xl flex items-start gap-4 shadow-sm">
          <HelpCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <div className="text-xs text-textSecondary font-sans leading-relaxed">
            <strong className="text-textPrimary font-semibold block mb-1">Clear Distinction: Advisory & Technical Testing vs. Certification Body</strong>
            TrustLayerLabs provides technical assessments, control mapping, vulnerability remediation, and readiness advisory. We do not issue formal CPA audit reports or ISO accreditation certificates; we prepare your engineering and operational teams to support accredited third-party audits and enterprise vendor reviews.
          </div>
        </div>

        {/* FinTech GRC Cross-Link Banner */}
        <div className="mb-12 p-4 bg-surface border border-border/80 rounded-xl flex items-center justify-between gap-4 shadow-sm">
          <p className="text-xs text-textSecondary font-sans">
            Operating a payment platform or banking integration? Combine GRC readiness with our specialized <Link href="/fintech-security" className="text-primary font-bold hover:underline">FinTech security assessments</Link> and technical VAPT.
          </p>
          <Link href="/fintech-security" className="text-xs font-bold font-mono text-primary flex items-center gap-1 uppercase tracking-wider flex-shrink-0">
            View FinTech VAPT →
          </Link>
        </div>

        {/* Capabilities Grid */}
        <div className="py-12 border-t border-border">
          <div className="mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-4">
              <span>Core GRC Services</span>
            </div>
            <h2 className="heading-2 font-sans mb-3">
              Comprehensive <span className="text-primary">Readiness Capabilities</span>
            </h2>
            <p className="body-text text-textSecondary font-sans">
              Everything your team needs to establish credible security governance and satisfy enterprise procurement stakeholders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, idx) => (
              <div 
                key={idx}
                className="premium-card p-8 bg-surface border border-border rounded-2xl flex flex-col justify-between hover:border-zinc-400 transition-all duration-300 shadow-sm"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6">
                    <cap.icon size={20} />
                  </div>
                  <h3 className="text-base font-bold text-textPrimary tracking-tight font-sans mb-2.5">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-textSecondary leading-relaxed font-sans">
                    {cap.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Readiness Process Timeline */}
        <div className="py-16 border-t border-border">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-4">
              <span>Execution Process</span>
            </div>
            <h2 className="heading-2 font-sans mb-3">
              The 6-Step <span className="text-primary">Readiness Roadmap</span>
            </h2>
            <p className="body-text text-textSecondary font-sans">
              A structured, sprint-based approach to get your policies, technical controls, and audit evidence in place quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {grcSteps.map((step, i) => (
              <div key={i} className="p-6 bg-surface border border-border rounded-2xl space-y-3 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-primary px-2 py-0.5 bg-primary/10 rounded">
                    Step {step.step}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-textPrimary font-sans">{step.title}</h3>
                <p className="text-xs text-textSecondary leading-relaxed font-sans">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Embedded Contact Form */}
      <ContactForm />
    </div>
  );
}
