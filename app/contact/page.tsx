import React from "react";
import ContactForm from "@/components/ContactForm";
import { ShieldCheck, FileText, CheckCircle2, Clock, Lock, HelpCircle, Sparkles, Check } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="pt-20">
        <ContactForm asH1={true} />

        {/* Technical Scoping Guidelines & Preparation - CodeDale Dashed Grid */}
        <section className="py-20 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-dashed border-neutral-300">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-neutral-200 shadow-sm rounded-full text-xs font-semibold text-neutral-800 uppercase tracking-wider mb-5">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>Transparent Onboarding</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight font-sans mb-4">
              Engineering Scoping &amp; Onboarding Workflow
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 font-sans leading-relaxed">
              To ensure thorough, zero-false-positive assessments without unexpected downtime, our security engineering team follows a structured 4-step onboarding protocol.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
            <div className="p-8 bg-white border border-neutral-200/90 rounded-3xl space-y-4 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:border-neutral-400 transition-all">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-200/70 flex items-center justify-center text-primary">
                  <FileText size={20} />
                </div>
                <span className="text-xs font-mono font-bold text-primary bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-md">
                  STEP 01
                </span>
              </div>
              <h3 className="text-lg font-bold text-neutral-900 font-sans tracking-tight">
                Scope Definition &amp; API Documentation
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
                Provide target domains, Swagger / OpenAPI 3.0 specs, Postman collections, or staging URLs. Clearly indicate out-of-scope third-party services (e.g., Stripe, AWS infrastructure, identity providers) to keep testing focused on your proprietary code and business logic.
              </p>
            </div>

            <div className="p-8 bg-white border border-neutral-200/90 rounded-3xl space-y-4 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:border-neutral-400 transition-all">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-2xl bg-purple-50 border border-purple-200/70 flex items-center justify-center text-purple-600">
                  <Lock size={20} />
                </div>
                <span className="text-xs font-mono font-bold text-purple-700 bg-purple-50 border border-purple-200 px-2.5 py-1 rounded-md">
                  STEP 02
                </span>
              </div>
              <h3 className="text-lg font-bold text-neutral-900 font-sans tracking-tight">
                Test Accounts &amp; Role Matrices
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
                For in-depth Broken Object Level Authorization (BOLA) and Broken Function Level Authorization (BFLA) testing, provide at least two accounts per role (e.g., Tenant A Admin, Tenant A User, Tenant B User). This allows our team to simulate true multi-tenant privilege escalation attacks.
              </p>
            </div>

            <div className="p-8 bg-white border border-neutral-200/90 rounded-3xl space-y-4 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:border-neutral-400 transition-all">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-200/70 flex items-center justify-center text-emerald-600">
                  <ShieldCheck size={20} />
                </div>
                <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md">
                  STEP 03
                </span>
              </div>
              <h3 className="text-lg font-bold text-neutral-900 font-sans tracking-tight">
                Safe Harbor &amp; Mutual NDA Protection
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
                All assessments are performed under bilateral, non-disclosure agreements with clear authorization windows. We practice safe harbor testing, strictly prohibiting data corruption, denial-of-service, or uncoordinated modifications to production assets.
              </p>
            </div>

            <div className="p-8 bg-white border border-neutral-200/90 rounded-3xl space-y-4 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:border-neutral-400 transition-all">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-2xl bg-amber-50 border border-amber-200/70 flex items-center justify-center text-amber-700">
                  <Clock size={20} />
                </div>
                <span className="text-xs font-mono font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-md">
                  STEP 04
                </span>
              </div>
              <h3 className="text-lg font-bold text-neutral-900 font-sans tracking-tight">
                Turnaround &amp; Free Retesting Policy
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
                Initial findings are delivered within 3 to 7 business days depending on application complexity. Every assessment includes dedicated developer debrief calls, copy-paste remediation code snippets, and one complimentary retest within 30 days to certify remediation.
              </p>
            </div>
          </div>

          {/* Scoping FAQs - CodeDale Dashed Box */}
          <div className="bg-white border border-dashed border-neutral-300 rounded-3xl p-8 sm:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
            <h2 className="text-2xl font-bold text-neutral-900 tracking-tight font-sans mb-8 flex items-center gap-2.5">
              <HelpCircle className="text-primary" size={22} />
              Frequently Asked Scoping Questions
            </h2>
            <div className="space-y-6">
              <div className="border-b border-dashed border-neutral-200 pb-5">
                <h3 className="text-base font-bold text-neutral-900 font-sans mb-2">
                  How long does it take to receive a formal assessment proposal?
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
                  Once you share your API endpoint count or architecture summary, our team typically delivers a tailored scope proposal with timeline and fixed pricing within 24 to 48 hours.
                </p>
              </div>
              <div className="border-b border-dashed border-neutral-200 pb-5">
                <h3 className="text-base font-bold text-neutral-900 font-sans mb-2">
                  Do we need to test staging or production environments?
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
                  We recommend staging or pre-production environments that accurately replicate production configurations. If staging is unavailable, we can test production during agreed-upon maintenance windows using non-destructive methodologies.
                </p>
              </div>
              <div>
                <h3 className="text-base font-bold text-neutral-900 font-sans mb-2">
                  Can TrustLayerLabs provide reports suitable for SOC 2, ISO 27001, and enterprise vendors?
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
                  Yes. We provide both an in-depth Technical Remediation Report for your engineering team and an Executive Attestation Letter signed by certified security practitioners (CEH, C3SA, ISO 27001 LA) for your enterprise clients and compliance auditors.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
