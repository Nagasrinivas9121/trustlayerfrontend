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
    <div className="bg-[#FAFAFA] min-h-screen pt-32 pb-24 text-neutral-900 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Link 
          href="/" 
          className="inline-flex items-center text-xs font-semibold text-neutral-500 hover:text-neutral-900 transition-colors gap-2 mb-8 group px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 shadow-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="mb-14 space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/80 shadow-sm text-xs font-semibold text-neutral-800">
            <MapPin size={13} className="text-neutral-900" />
            <span>Serving Hyderabad Enterprise Corridors & T-Hub Startups</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950">
            VAPT & Mobile Security for <br />
            <span className="text-neutral-900">Hyderabad Tech Teams</span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-3xl">
            Manual penetration testing, HealthTech EHR audits, mobile application VAPT, and ISO 27001 / SOC 2 readiness for enterprise engineering organizations across HITEC City, Gachibowli, and the Financial District.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link 
              href="/free-assessment" 
              className="px-7 py-3.5 bg-neutral-900 hover:bg-black text-white text-xs font-semibold rounded-full transition-all shadow-md flex items-center gap-2 group"
            >
              <ShieldCheck size={15} />
              <span>Get Free Scoping Review</span>
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link 
              href="/sample-report"
              className="px-7 py-3.5 bg-white border border-neutral-200 hover:border-neutral-400 text-xs font-semibold rounded-full text-neutral-800 transition-all flex items-center gap-2 shadow-sm"
            >
              <FileText size={15} />
              <span>View Sample Report</span>
            </Link>
          </div>
        </div>

        {/* 2 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-14">
          <div className="bg-white border border-neutral-200/80 p-8 rounded-3xl space-y-4 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
            <div>
              <h2 className="text-lg font-bold text-neutral-950 tracking-tight">
                Dedicated Offensive Engineering
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed mt-2">
                Our offensive security team supports technology innovators and healthcare platforms in Hyderabad. We provide rapid scoping intake under bilateral NDA, evaluating complex business logic, API gateways, and cloud IAM configurations.
              </p>
            </div>
            
            <div className="pt-4 border-t border-dashed border-neutral-200 text-xs text-neutral-500 font-medium">
              📍 Remote-First Audits Serving Hyderabad, T-Hub Startups & Pan-India
            </div>
          </div>

          <div className="bg-white border border-neutral-200/80 p-8 rounded-3xl space-y-4 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
            <div>
              <h2 className="text-lg font-bold text-neutral-950 tracking-tight">
                Why Hyderabad Enterprises Choose Us
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed mt-2">
                Modern enterprise portals and mobile client apps demand meticulous human scrutiny. Automated scanners miss privilege escalation and deep authorization bypasses. We deliver reproducible test scripts, raw request/response captures, and code fixes.
              </p>
            </div>

            <div className="pt-4 border-t border-dashed border-neutral-200 flex flex-wrap gap-2 text-[11px] font-semibold text-neutral-700">
              <span className="px-3 py-1 bg-neutral-100 rounded-full border border-neutral-200">30-Day Retest Included</span>
              <span className="px-3 py-1 bg-neutral-100 rounded-full border border-neutral-200">Mutual NDA Upfront</span>
              <span className="px-3 py-1 bg-neutral-100 rounded-full border border-neutral-200">Zero Offshore Subcontracting</span>
            </div>
          </div>
        </div>

        {/* Regional Tech Ecosystem Context */}
        <div className="mb-14 bg-white border border-neutral-200/80 rounded-3xl p-8 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
          <div className="max-w-2xl mb-6">
            <h2 className="text-xl font-bold text-neutral-950 tracking-tight mb-2">
              Security Verification for Hyderabad&apos;s Enterprise & HealthTech Hub
            </h2>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Across HITEC City, Gachibowli, and the Financial District, Hyderabad&apos;s technology ecosystem is expanding rapidly in HealthTech, life sciences software, and enterprise SaaS. Protecting sensitive patient records and confidential financial transactions requires stringent, verified defense mechanisms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-5 bg-neutral-50 border border-neutral-200/70 rounded-2xl space-y-2">
              <h3 className="text-xs font-bold text-neutral-950 uppercase tracking-wider">HealthTech & HIPAA</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Comprehensive audits of electronic health records (EHR) APIs, patient data portals, and HIPAA/DPDP Act 2023 compliance controls.
              </p>
            </div>
            <div className="p-5 bg-neutral-50 border border-neutral-200/70 rounded-2xl space-y-2">
              <h3 className="text-xs font-bold text-neutral-950 uppercase tracking-wider">Mobile App Testing</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Deep static and dynamic analysis (SAST/DAST) of iOS and Android client binaries, root/jailbreak detection, and secure local storage.
              </p>
            </div>
            <div className="p-5 bg-neutral-50 border border-neutral-200/70 rounded-2xl space-y-2">
              <h3 className="text-xs font-bold text-neutral-950 uppercase tracking-wider">Enterprise Attestation</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Formal security assessment reports and third-party auditor attestation letters accepted by global healthcare and enterprise buyers.
              </p>
            </div>
          </div>
        </div>

        {/* Hyderabad FAQ */}
        <div className="mb-14 bg-white border border-neutral-200/80 rounded-3xl p-8 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
          <h2 className="text-xl font-bold text-neutral-950 tracking-tight mb-6">
            Frequently Asked Questions by Hyderabad Technology Leaders
          </h2>
          <div className="space-y-4">
            {hyderabadFaqs.map((faq) => (
              <div key={faq.q} className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200/70 space-y-2">
                <h3 className="text-sm font-bold text-neutral-950 flex items-start gap-2">
                  <HelpCircle size={15} className="text-neutral-900 shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Cross Links */}
        <div className="my-14 border-t border-dashed border-neutral-200 pt-10">
          <h2 className="text-sm font-bold text-neutral-950 uppercase tracking-wider mb-5">
            Core Assessment Capabilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/services/mobile-vapt" className="p-6 bg-white border border-neutral-200/80 rounded-3xl hover:border-neutral-300 transition-all shadow-[0_4px_24px_rgba(0,0,0,0.02)] group">
              <h3 className="text-sm font-bold text-neutral-950 mb-1 flex items-center justify-between">
                <span>Mobile App VAPT</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-neutral-500">iOS & Android client and API security assessments.</p>
            </Link>
            <Link href="/services/api-security" className="p-6 bg-white border border-neutral-200/80 rounded-3xl hover:border-neutral-300 transition-all shadow-[0_4px_24px_rgba(0,0,0,0.02)] group">
              <h3 className="text-sm font-bold text-neutral-950 mb-1 flex items-center justify-between">
                <span>API Security Testing</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-neutral-500">BOLA, BFLA & JWT penetration testing.</p>
            </Link>
            <Link href="/grc-readiness" className="p-6 bg-white border border-neutral-200/80 rounded-3xl hover:border-neutral-300 transition-all shadow-[0_4px_24px_rgba(0,0,0,0.02)] group">
              <h3 className="text-sm font-bold text-neutral-950 mb-1 flex items-center justify-between">
                <span>SOC 2 & ISO Readiness</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-neutral-500">Technical controls mapping & advisory.</p>
            </Link>
          </div>
        </div>

      </div>

      {/* Contact Form */}
      <div className="mt-8">
        <ContactForm />
      </div>
    </div>
  );
}
