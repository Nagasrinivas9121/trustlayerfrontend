import React from "react";
import Link from "next/link";
import { ArrowLeft, MapPin, ShieldCheck, ArrowRight, Calendar, FileText, CheckCircle2, HelpCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function VaptHyderabad() {
  const hyderabadFaqs = [
    {
      q: "Do your assessments comply with CERT-In and RBI cybersecurity directives for Hyderabad fintechs?",
      a: "Yes. Our testing methodology strictly adheres to CERT-In security guidelines and the RBI Cyber Security Framework for banks, NBFCs, and payment aggregators, providing formal attestation and comprehensive risk mitigation roadmaps."
    },
    {
      q: "Can you audit Electronic Health Record (EHR) systems and HIPAA controls for HealthTech platforms?",
      a: "Yes. For Hyderabad's thriving HealthTech corridor, we test ePHI data flows, role-based access permissions, API token lifetimes, and database encryption at rest to fulfill both HIPAA security rules and DPDP Act 2023 mandates."
    },
    {
      q: "What is your onboarding timeline under mutual NDA?",
      a: "We execute our mutual bilateral NDA or sign your standard corporate agreement within hours. Technical scoping calls are conducted directly with our lead architects, initiating testing within 48 to 72 hours of receiving staging credentials."
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
            <span>Serving Hyderabad Enterprise Corridors & T-Hub Startups</span>
          </div>

          <h1 className="heading-1 text-textPrimary text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            VAPT & Mobile Security for <span className="text-primary">Hyderabad Tech Teams</span>
          </h1>

          <p className="body-text text-base max-w-3xl text-textSecondary leading-relaxed font-sans">
            Manual penetration testing, HealthTech EHR audits, mobile application VAPT, and ISO 27001 / SOC 2 readiness for enterprise engineering organizations across HITEC City, Gachibowli, and the Financial District.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link 
              href="/free-assessment" 
              className="px-8 py-3.5 bg-primary hover:bg-primary-hover text-white text-xs uppercase font-sans font-bold tracking-wider rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              <ShieldCheck size={15} />
              <span>Get a Free Security Scoping Review</span>
            </Link>
            <Link 
              href="/sample-report"
              className="px-8 py-3.5 bg-surface border border-border hover:border-zinc-400 text-xs uppercase font-sans font-semibold tracking-wider rounded-xl text-textPrimary hover:text-primary transition-all flex items-center gap-2"
            >
              <FileText size={15} />
              <span>View the Sample Assessment Report</span>
            </Link>
          </div>
        </div>

        {/* Section details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-16">
          
          <div className="bg-surface border border-border p-8 rounded-2xl space-y-4 flex flex-col justify-between shadow-sm">
            <div>
              <h2 className="text-base font-bold text-textPrimary tracking-tight font-sans">
                Dedicated Offensive Engineering
              </h2>
              <p className="text-xs text-textSecondary leading-relaxed mt-2 font-sans">
                Our offensive security team supports technology innovators and healthcare platforms in Hyderabad. We provide rapid scoping intake under bilateral NDA, evaluating complex business logic, API gateways, and cloud IAM configurations.
              </p>
            </div>
            
            <div className="pt-4 border-t border-border/60 text-xs font-sans text-textPrimary">
              📍 Remote-First Audits Serving Hyderabad, T-Hub Startups & Pan-India
            </div>
          </div>

          <div className="bg-surface border border-border p-8 rounded-2xl space-y-4 flex flex-col justify-between shadow-sm">
            <div>
              <h2 className="text-base font-bold text-textPrimary tracking-tight font-sans text-primary">
                Why Hyderabad Enterprises Choose Us
              </h2>
              <p className="text-xs text-textSecondary leading-relaxed mt-2 font-sans">
                Modern enterprise portals and mobile client apps demand meticulous human scrutiny. Automated scanners miss privilege escalation and deep authorization bypasses. We deliver reproducible test scripts, raw request/response captures, and code fixes.
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
            Security Verification for Hyderabad&apos;s Enterprise & HealthTech Hub
          </h2>
          <p className="text-xs text-textSecondary leading-relaxed font-sans mb-4">
            Across HITEC City, Gachibowli, and the Financial District, Hyderabad&apos;s technology ecosystem is expanding rapidly in HealthTech, life sciences software, and enterprise SaaS. Protecting sensitive patient records and confidential financial transactions requires stringent, verified defense mechanisms.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 bg-background border border-border/60 rounded-xl space-y-1.5">
              <h3 className="text-xs font-bold text-textPrimary font-sans">HealthTech & HIPAA</h3>
              <p className="text-[11px] text-textSecondary font-sans">
                Comprehensive audits of electronic health records (EHR) APIs, patient data portals, and HIPAA/DPDP Act 2023 compliance controls.
              </p>
            </div>
            <div className="p-4 bg-background border border-border/60 rounded-xl space-y-1.5">
              <h3 className="text-xs font-bold text-textPrimary font-sans">Mobile App Testing</h3>
              <p className="text-[11px] text-textSecondary font-sans">
                Deep static and dynamic analysis (SAST/DAST) of iOS and Android client binaries, root/jailbreak detection, and secure local storage.
              </p>
            </div>
            <div className="p-4 bg-background border border-border/60 rounded-xl space-y-1.5">
              <h3 className="text-xs font-bold text-textPrimary font-sans">Enterprise Attestation</h3>
              <p className="text-[11px] text-textSecondary font-sans">
                Formal security assessment reports and third-party auditor attestation letters accepted by global healthcare and enterprise buyers.
              </p>
            </div>
          </div>
        </div>

        {/* Hyderabad FAQ */}
        <div className="mb-16 bg-surface border border-border/80 rounded-2xl p-8 shadow-sm">
          <h2 className="text-xl font-bold text-textPrimary tracking-tight font-sans mb-6">
            Frequently Asked Questions by Hyderabad Technology Leaders
          </h2>
          <div className="space-y-6">
            {hyderabadFaqs.map((faq) => (
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
            <Link href="/services/mobile-vapt" className="p-5 bg-surface border border-border rounded-xl hover:border-primary/50 transition-colors">
              <h3 className="text-xs font-bold text-textPrimary uppercase font-sans mb-1">Mobile App VAPT →</h3>
              <p className="text-[11px] text-textSecondary">iOS & Android client and API security assessments.</p>
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
