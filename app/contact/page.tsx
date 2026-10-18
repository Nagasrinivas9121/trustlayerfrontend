import React from "react";
import ContactForm from "@/components/ContactForm";
import { ShieldCheck, FileText, CheckCircle2, Clock, Lock, HelpCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="pt-20">
        <ContactForm asH1={true} />

        {/* Technical Scoping Guidelines & Preparation */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-border/60">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl font-bold text-textPrimary tracking-tight font-sans mb-3">
              Engineering Scoping & Onboarding Process
            </h2>
            <p className="text-sm text-textSecondary font-sans leading-relaxed">
              To ensure thorough, zero-false-positive assessments without unexpected downtime, our security engineering team follows a structured onboarding workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="p-6 bg-surface border border-border/80 rounded-xl space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <FileText size={20} />
              </div>
              <h3 className="text-base font-bold text-textPrimary font-sans">
                1. Scope Definition & API Documentation
              </h3>
              <p className="text-xs text-textSecondary leading-relaxed font-sans">
                Provide target domains, Swagger / OpenAPI 3.0 specs, Postman collections, or staging URLs. Clearly indicate out-of-scope third-party services (e.g., Stripe, AWS infrastructure, identity providers) to keep testing focused on your proprietary code and business logic.
              </p>
            </div>

            <div className="p-6 bg-surface border border-border/80 rounded-xl space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Lock size={20} />
              </div>
              <h3 className="text-base font-bold text-textPrimary font-sans">
                2. Test Accounts & Role Matrices
              </h3>
              <p className="text-xs text-textSecondary leading-relaxed font-sans">
                For in-depth Broken Object Level Authorization (BOLA) and Broken Function Level Authorization (BFLA) testing, provide at least two accounts per role (e.g., Tenant A Admin, Tenant A User, Tenant B User). This allows our team to simulate true multi-tenant privilege escalation attacks.
              </p>
            </div>

            <div className="p-6 bg-surface border border-border/80 rounded-xl space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-base font-bold text-textPrimary font-sans">
                3. Safe Harbor & Mutual NDA Protection
              </h3>
              <p className="text-xs text-textSecondary leading-relaxed font-sans">
                All assessments are performed under bilateral, non-disclosure agreements with clear authorization windows. We practice safe harbor testing, strictly prohibiting data corruption, denial-of-service, or uncoordinated modifications to production assets.
              </p>
            </div>

            <div className="p-6 bg-surface border border-border/80 rounded-xl space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Clock size={20} />
              </div>
              <h3 className="text-base font-bold text-textPrimary font-sans">
                4. Turnaround & Free Retesting Policy
              </h3>
              <p className="text-xs text-textSecondary leading-relaxed font-sans">
                Initial findings are delivered within 3 to 7 business days depending on application complexity. Every assessment includes dedicated developer debrief calls, copy-paste remediation code snippets, and one complimentary retest within 30 days to certify remediation.
              </p>
            </div>
          </div>

          {/* Scoping FAQs */}
          <div className="bg-surface border border-border/80 rounded-2xl p-8 shadow-sm">
            <h2 className="text-xl font-bold text-textPrimary tracking-tight font-sans mb-6 flex items-center gap-2">
              <HelpCircle className="text-primary" size={20} />
              Frequently Asked Scoping Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-textPrimary font-sans mb-1">
                  How long does it take to receive a formal assessment proposal?
                </h3>
                <p className="text-xs text-textSecondary leading-relaxed font-sans">
                  Once you share your API endpoint count or architecture summary, our team typically delivers a tailored scope proposal with timeline and fixed pricing within 24 to 48 hours.
                </p>
              </div>
              <div className="border-t border-border/60 pt-4">
                <h3 className="text-sm font-bold text-textPrimary font-sans mb-1">
                  Do we need to test staging or production environments?
                </h3>
                <p className="text-xs text-textSecondary leading-relaxed font-sans">
                  We recommend staging or pre-production environments that accurately replicate production configurations. If staging is unavailable, we can test production during agreed-upon maintenance windows using non-destructive methodologies.
                </p>
              </div>
              <div className="border-t border-border/60 pt-4">
                <h3 className="text-sm font-bold text-textPrimary font-sans mb-1">
                  Can TrustLayerLabs provide reports suitable for SOC 2, ISO 27001, and enterprise vendors?
                </h3>
                <p className="text-xs text-textSecondary leading-relaxed font-sans">
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
