import React from "react";
import Link from "next/link";
import { ArrowLeft, MapPin, ShieldCheck, ArrowRight, Calendar, FileText, CheckCircle2, HelpCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function VaptBangalore() {
  const bangaloreFaqs = [
    {
      q: "How fast can we receive a VAPT report for our SOC 2 audit or US enterprise deal?",
      a: "For fast-moving SaaS startups in Bengaluru, we offer accelerated scoping intake under mutual NDA. Standard web & API assessments wrap up in 5 to 7 business days, with immediate preliminary notifications for any Critical findings so your developers can patch while we finalize the report."
    },
    {
      q: "Do you test staging or production environments for Bangalore engineering teams?",
      a: "We primarily test isolated staging or pre-production environments populated with realistic anonymized mock data. For complex microservices or serverless architectures hosted in AWS ap-south-1 (Mumbai), we coordinate safe non-destructive testing windows."
    },
    {
      q: "Will your Attestation Letter satisfy Tier-1 US enterprise vendor risk assessments?",
      a: "Yes. Our executive attestation letters are signed by certified practitioners (OSCP, C3SA, ISO 27001 Lead Auditor) and detail assessment scope, testing dates, methodology (OWASP Top 10, ASVS), and clean retest verification."
    }
  ];

  return (
    <div className="bg-background min-h-screen pt-32 pb-24 text-textPrimary font-sans">
      <div className="section-container max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 space-y-6">
          <Link 
            href="/" 
            className="inline-flex items-center text-xs uppercase font-sans tracking-widest text-textSecondary hover:text-textPrimary transition-colors gap-2 mb-4 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
            Back to Home
          </Link>

          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-[10px] font-bold text-primary uppercase tracking-wider">
            <MapPin size={12} className="text-primary" />
            <span>Serving Bengaluru Technology Ecosystem & Global SaaS</span>
          </div>

          <h1 className="heading-1 text-textPrimary text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            VAPT & API Security Testing for <span className="text-primary">Bangalore Tech Startups</span>
          </h1>

          <p className="body-text text-base max-w-3xl text-textSecondary leading-relaxed font-sans">
            Practitioner-led manual penetration testing, SaaS tenant boundary verification, and SOC 2 / ISO 27001 audit attestation for venture-backed engineering teams across Koramangala, Indiranagar, HSR Layout, and Whitefield.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link 
              href="/free-assessment" 
              className="px-8 py-3.5 bg-primary hover:bg-primary-hover text-white text-xs uppercase font-sans font-bold tracking-wider rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              <ShieldCheck size={15} />
              <span>Get a Free Scoping Review</span>
            </Link>
            <Link 
              href="/sample-report"
              className="px-8 py-3.5 bg-surface border border-border hover:border-zinc-400 text-xs uppercase font-sans font-semibold tracking-wider rounded-xl text-textPrimary hover:text-primary transition-all flex items-center gap-2"
            >
              <FileText size={15} />
              <span>View Sanitized Sample Report</span>
            </Link>
          </div>
        </div>

        {/* Section details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-16">
          
          <div className="bg-surface border border-border p-8 rounded-2xl space-y-4 flex flex-col justify-between shadow-sm">
            <div>
              <h2 className="text-base font-bold text-textPrimary tracking-tight font-sans">
                Practitioner-Led Application Testing
              </h2>
              <p className="text-xs text-textSecondary leading-relaxed mt-2 font-sans">
                Bengaluru product teams build complex microservices, GraphQL APIs, and multi-tenant architectures. Our offensive security engineers work directly with your engineering leads under mutual NDA, executing manual authorization audits that automated vulnerability scanners consistently miss.
              </p>
            </div>
            
            <div className="pt-4 border-t border-border/60 text-xs font-sans text-textPrimary">
              📍 Remote-First Audits Serving Bangalore, Silicon Valley Expansions & Across India
            </div>
          </div>

          <div className="bg-surface border border-border p-8 rounded-2xl space-y-4 flex flex-col justify-between shadow-sm">
            <div>
              <h2 className="text-base font-bold text-textPrimary tracking-tight font-sans text-primary">
                Why Bangalore SaaS Leaders Choose Us
              </h2>
              <p className="text-xs text-textSecondary leading-relaxed mt-2 font-sans">
                Early-stage and growth-stage SaaS startups cannot afford 30-day corporate delays or 50-page scanner noise. We deliver reproduction steps with raw curl commands, code patches for Python/Node/Go, and complimentary 30-day retesting to verify fixes.
              </p>
            </div>

            <div className="pt-4 border-t border-border/60 flex flex-wrap gap-3 text-[10px] font-sans font-bold text-textPrimary">
              <span className="flex items-center gap-1.5"><ShieldCheck size={12} className="text-primary" /> 30-DAY RETEST INCLUDED</span>
              <span className="flex items-center gap-1.5"><ShieldCheck size={12} className="text-primary" /> MUTUAL NDA UPFRONT</span>
              <span className="flex items-center gap-1.5"><ShieldCheck size={12} className="text-primary" /> ZERO OFFSHORE SUBCONTRACTING</span>
            </div>
          </div>

        </div>

        {/* Regional Tech Ecosystem Context */}
        <div className="mb-16 bg-surface border border-border/80 rounded-2xl p-8 shadow-sm">
          <h2 className="text-xl font-bold text-textPrimary tracking-tight font-sans mb-4">
            Security Compliance for Bangalore&apos;s SaaS & AI Hub
          </h2>
          <p className="text-xs text-textSecondary leading-relaxed font-sans mb-4">
            Bangalore represents India&apos;s highest concentration of venture-backed SaaS startups and AI innovators. As engineering organizations prepare for global enterprise procurement, demonstrating certified application security is mandatory.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 bg-background border border-border/60 rounded-xl space-y-1.5">
              <h3 className="text-xs font-bold text-textPrimary font-sans">Enterprise Procurement</h3>
              <p className="text-[11px] text-textSecondary font-sans">
                Pass Fortune 500 vendor risk assessments with executive attestation letters signed by certified OSCP, C3SA, and ISO 27001 lead auditors.
              </p>
            </div>
            <div className="p-4 bg-background border border-border/60 rounded-xl space-y-1.5">
              <h3 className="text-xs font-bold text-textPrimary font-sans">RBI & CERT-In Compliance</h3>
              <p className="text-[11px] text-textSecondary font-sans">
                Meet regulatory mandates for FinTech applications, payment gateways, and banking APIs operating in the Indian financial ecosystem.
              </p>
            </div>
            <div className="p-4 bg-background border border-border/60 rounded-xl space-y-1.5">
              <h3 className="text-xs font-bold text-textPrimary font-sans">Developer-First Sprints</h3>
              <p className="text-[11px] text-textSecondary font-sans">
                Seamless integration with GitHub/GitLab PRs, fast Slack/Teams debrief calls, and free 30-day retesting to verify fixes.
              </p>
            </div>
          </div>
        </div>

        {/* Bangalore FAQ */}
        <div className="mb-16 bg-surface border border-border/80 rounded-2xl p-8 shadow-sm">
          <h2 className="text-xl font-bold text-textPrimary tracking-tight font-sans mb-6">
            Frequently Asked Questions by Bangalore Engineering Teams
          </h2>
          <div className="space-y-6">
            {bangaloreFaqs.map((faq) => (
              <div key={faq.q} className="border-b border-border/50 pb-5 last:border-b-0 last:pb-0">
                <h3 className="text-sm font-bold text-textPrimary font-sans mb-2 flex items-start gap-2">
                  <HelpCircle size={15} className="text-primary flex-shrink-0 mt-0.5" />
                  {faq.q}
                </h3>
                <p className="text-xs text-textSecondary leading-relaxed font-sans pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Cross Links */}
        <div className="my-12">
          <h2 className="text-sm font-bold text-textPrimary uppercase tracking-wider font-sans mb-4">
            Core Assessment Capabilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/services/saas-vapt" className="p-5 bg-surface border border-border rounded-xl hover:border-primary/50 transition-colors">
              <h3 className="text-xs font-bold text-textPrimary uppercase font-sans mb-1">SaaS VAPT →</h3>
              <p className="text-[11px] text-textSecondary">Multi-tenant isolation & privilege escalation.</p>
            </Link>
            <Link href="/services/api-security" className="p-5 bg-surface border border-border rounded-xl hover:border-primary/50 transition-colors">
              <h3 className="text-xs font-bold text-textPrimary uppercase font-sans mb-1">API Security Testing →</h3>
              <p className="text-[11px] text-textSecondary">BOLA, BFLA & JWT penetration testing.</p>
            </Link>
            <Link href="/grc-readiness" className="p-5 bg-surface border border-border rounded-xl hover:border-primary/50 transition-colors">
              <h3 className="text-xs font-bold text-textPrimary uppercase font-sans mb-1">SOC 2 & ISO Readiness →</h3>
              <p className="text-[11px] text-textSecondary">Technical controls mapping & advisory.</p>
            </Link>
          </div>
        </div>

      </div>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
}
