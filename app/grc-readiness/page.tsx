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
  Layers,
  ChevronRight,
  Sparkles,
  Check
} from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "SOC 2 and ISO 27001 Readiness",
  description: "SOC 2 Type II readiness, ISO 27001 gap analysis, custom security policies, and technical penetration testing for growing tech teams.",
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

const grcFaqs = [
  {
    q: "What is the difference between SOC 2 readiness and formal SOC 2 attestation?",
    a: "SOC 2 readiness is the preparatory consulting phase where we assess control gaps, map your cloud infrastructure and development workflows to AICPA Trust Services Criteria (CC6.1–CC6.8), draft customized security policies, and conduct required technical penetration tests. Formal SOC 2 attestation is the official examination conducted and signed by an independent, AICPA-accredited CPA firm. TrustLayerLabs prepares your team for that audit; we do not issue formal CPA audit reports."
  },
  {
    q: "What is the difference between ISO 27001 readiness and certification?",
    a: "ISO 27001 readiness involves conducting an initial gap assessment against ISO/IEC 27001 Annex A controls, developing an Information Security Management System (ISMS) roadmap, establishing risk registers, and executing technical vulnerability testing. Official ISO 27001 certification is awarded exclusively by an accredited third-party certification body (CB) following Stage 1 and Stage 2 certification audits."
  },
  {
    q: "How long does it typically take a startup to become SOC 2 Type II ready?",
    a: "Initial control mapping and technical gap remediation typically takes 2 to 4 weeks. Following remediation, the mandatory observation period (auditing period) for SOC 2 Type II runs between 3 to 6 months to evaluate operating effectiveness before the external auditor delivers the final report."
  },
  {
    q: "Do you provide the required manual penetration testing for SOC 2 and ISO 27001?",
    a: "Yes. Both SOC 2 Trust Services Criteria (CC4.1, CC7.1) and ISO/IEC 27001 (Control A.8.8) require periodic technical vulnerability assessments and penetration testing. TrustLayerLabs delivers manual VAPT reports and signed retest verification letters specifically formatted for compliance auditor review."
  },
  {
    q: "Can TrustLayerLabs assist with completing enterprise vendor security questionnaires?",
    a: "Yes. We support technical founders and engineering leadership in responding to complex 100+ question SIG, CAIQ, and custom enterprise vendor security questionnaires, ensuring answers accurately reflect your implemented technical controls."
  }
];

export default function GrcReadinessPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.trustlayerlabs.co.in/grc-readiness#service",
        "name": "GRC & Enterprise Security Readiness",
        "provider": { "@id": "https://www.trustlayerlabs.co.in/#organization" },
        "description": "SOC 2 Type II, ISO 27001 readiness advisory, security policy development, and technical controls mapping.",
        "serviceType": "Cybersecurity Governance, Risk & Compliance Advisory",
        "areaServed": ["India", "Global"]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.trustlayerlabs.co.in/grc-readiness#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trustlayerlabs.co.in" },
          { "@type": "ListItem", "position": 2, "name": "GRC Readiness", "item": "https://www.trustlayerlabs.co.in/grc-readiness" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.trustlayerlabs.co.in/grc-readiness#faq",
        "mainEntity": grcFaqs.map(faq => ({
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

      <div className="section-container max-w-6xl mx-auto">
        
        {/* Breadcrumb - CodeDale style */}
        <div className="flex items-center gap-2 mb-8">
          <Link href="/" className="px-3 py-1 rounded-full bg-white border border-neutral-200 text-xs font-semibold text-neutral-600 hover:text-neutral-900 shadow-sm transition-colors">
            Home
          </Link>
          <span className="text-neutral-400 text-xs">/</span>
          <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-primary">
            GRC Readiness
          </span>
        </div>

        {/* Hero */}
        <div className="max-w-4xl space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-neutral-200 shadow-sm rounded-full text-xs font-semibold text-neutral-800 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>Governance, Risk &amp; Enterprise Readiness</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-tight font-sans">
            Get Security-Review Ready <br className="hidden sm:inline" />
            <span className="text-primary">Before Your Enterprise Customer Asks</span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-sans max-w-3xl">
            Pass vendor security reviews and fast-track SOC 2 / ISO 27001 readiness. We combine technical penetration testing with practical compliance advisory to make high-growth SaaS and FinTech startups enterprise-ready.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link 
              href="https://cal.com/nagasrinivasarao/30min"
              target="_blank"
              className="px-8 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white text-xs uppercase font-sans font-bold tracking-wider rounded-full shadow-md transition-all flex items-center gap-2 group"
            >
              <Calendar size={15} className="text-blue-400" />
              <span>Schedule GRC Consultation</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-blue-400" />
            </Link>

            <Link 
              href="/sample-report"
              className="px-8 py-3.5 bg-neutral-100 hover:bg-neutral-200/80 border border-neutral-200 text-xs uppercase font-sans font-semibold tracking-wider rounded-full text-neutral-800 transition-all flex items-center gap-2"
            >
              <FileText size={15} />
              <span>View Sample Assessment Report</span>
            </Link>
          </div>
        </div>

        {/* Advisory Disclaimer Notice Box - CodeDale Dashed Box */}
        <div className="mb-14 p-6 sm:p-7 bg-white border border-dashed border-neutral-300 rounded-3xl flex items-start gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
          <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-primary shrink-0 mt-0.5">
            <HelpCircle size={16} />
          </div>
          <div className="text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed">
            <strong className="text-neutral-900 font-semibold block mb-1">Clear Distinction: Advisory &amp; Technical Testing vs. Certification Body</strong>
            TrustLayerLabs provides technical assessments, control mapping, vulnerability remediation, and readiness advisory. We do not issue formal CPA audit reports or ISO accreditation certificates; we prepare your engineering and operational teams to support accredited third-party audits and enterprise vendor reviews.
          </div>
        </div>

        {/* FinTech GRC Cross-Link Banner */}
        <div className="mb-16 p-6 bg-white border border-neutral-200/90 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <p className="text-xs sm:text-sm text-neutral-600 font-sans">
            Operating a payment platform or banking integration? Combine GRC readiness with our specialized <Link href="/fintech-security" className="text-primary font-bold hover:underline">FinTech security assessments</Link> and technical VAPT.
          </p>
          <Link href="/fintech-security" className="px-5 py-2.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-xs font-bold font-mono text-primary flex items-center gap-1.5 uppercase tracking-wider shrink-0 transition-colors">
            <span>View FinTech VAPT</span>
            <ChevronRight size={13} />
          </Link>
        </div>

        {/* Capabilities Grid */}
        <div className="py-12 border-t border-dashed border-neutral-300">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 rounded-full text-xs font-mono font-bold text-neutral-700 uppercase tracking-wider mb-4">
              <Building2 size={13} className="text-primary" /> Core GRC Services
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 font-sans mb-3">
              Comprehensive <span className="text-primary">Readiness Capabilities</span>
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed">
              Everything your team needs to establish credible security governance and satisfy enterprise procurement stakeholders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, idx) => (
              <div 
                key={idx}
                className="p-8 bg-white border border-neutral-200/90 rounded-3xl flex flex-col justify-between hover:border-neutral-400 hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-200/70 flex items-center justify-center text-primary mb-6">
                    <cap.icon size={20} />
                  </div>
                  <h3 className="text-base font-bold text-neutral-900 tracking-tight font-sans mb-2.5">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                    {cap.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Readiness Process Timeline */}
        <div className="py-16 border-t border-dashed border-neutral-300">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 rounded-full text-xs font-mono font-bold text-neutral-700 uppercase tracking-wider mb-4">
              <ClipboardList size={13} className="text-primary" /> Execution Process
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 font-sans mb-3">
              The 6-Step <span className="text-primary">Readiness Roadmap</span>
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed">
              A structured, sprint-based approach to get your policies, technical controls, and audit evidence in place quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {grcSteps.map((step, i) => (
              <div key={i} className="p-7 bg-white border border-neutral-200/90 rounded-3xl space-y-3 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:border-neutral-400 transition-all">
                <span className="text-xs font-mono font-bold text-primary uppercase tracking-wider bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-md">
                  Step {step.step}
                </span>
                <h3 className="text-base font-bold text-neutral-900 font-sans">{step.title}</h3>
                <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical GRC FAQ Section */}
        <div className="py-16 border-t border-dashed border-neutral-300">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 rounded-full text-xs font-mono font-bold text-neutral-700 uppercase tracking-wider mb-4">
              <Scale size={13} className="text-primary" /> Compliance Knowledge Base
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 font-sans mb-3">
              Frequently Asked <span className="text-primary">GRC &amp; Readiness Questions</span>
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed">
              Key questions engineering and leadership teams ask when preparing for enterprise security reviews and audits.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl">
            {grcFaqs.map((faq, i) => (
              <div key={i} className="p-7 bg-white border border-neutral-200/90 rounded-3xl space-y-2 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                <h3 className="text-base font-bold text-neutral-900 font-sans">{faq.q}</h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">{faq.a}</p>
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
