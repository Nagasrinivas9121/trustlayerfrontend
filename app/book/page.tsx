import React from "react";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import { Shield, Clock, FileCheck, CheckCircle2, Mail, MessageSquare } from "lucide-react";
import { BRAND } from "@/lib/constants";
import Link from "next/link";

export default function BookPage() {
  return (
    <div className="bg-background min-h-screen pt-20 sm:pt-24 pb-14 sm:pb-20">
      <div className="section-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Confidential Scoping Consultation</span>
          </div>
          <h1 className="heading-2 mb-4 font-sans text-textPrimary text-2xl sm:text-3xl lg:text-4xl">
            Schedule a 30-Minute <span className="text-primary">Security Review</span>
          </h1>
          <p className="body-text text-textSecondary font-sans text-sm sm:text-base max-w-2xl mx-auto">
            Pick a convenient slot to speak directly with an offensive security practitioner. No sales reps, no fluff — pure technical scoping.
          </p>
        </div>

        {/* Main Grid: Context on Left, Inline Calendly on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Scope & Commitments */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-surface border border-border/80 rounded-2xl p-5 sm:p-6 shadow-sm space-y-5">
              <h2 className="text-sm font-bold text-textPrimary font-sans uppercase tracking-wider flex items-center gap-2">
                <Shield className="text-primary shrink-0" size={18} />
                <span>What We Cover On The Call</span>
              </h2>

              <ul className="space-y-4 text-xs font-sans text-textSecondary">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-textPrimary block font-semibold">Attack Surface Scoping:</strong>
                    Map your web apps, mobile builds, cloud posture (AWS/GCP), and API endpoints.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-textPrimary block font-semibold">Compliance Readiness:</strong>
                    Identify gaps for SOC 2 Type II, ISO 27001, CERT-In, or customer enterprise RFPs.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-textPrimary block font-semibold">Actionable Deliverable Plan:</strong>
                    Get a clear timeline, zero false-positive guarantee, and free re-test commitment.
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-surface border border-border/80 rounded-2xl p-5 sm:p-6 shadow-sm space-y-4">
              <h3 className="text-xs font-bold text-textPrimary font-sans uppercase tracking-wider flex items-center gap-2">
                <FileCheck className="text-primary shrink-0" size={16} />
                <span>Practitioner Commitments</span>
              </h3>

              <div className="space-y-3 text-xs font-sans text-textSecondary">
                <div className="flex items-center gap-2 text-textPrimary font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span>Mutual NDA executed prior to sensitive technical disclosures</span>
                </div>
                <div className="flex items-center gap-2 text-textPrimary font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span>Direct practitioner engagement — no account managers</span>
                </div>
                <div className="flex items-center gap-2 text-textPrimary font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span>Serving SaaS, FinTech, and AI teams globally</span>
                </div>
              </div>

              <div className="pt-3 border-t border-border/60">
                <p className="text-[11px] text-textSecondary leading-relaxed">
                  Prefer written scoping?{" "}
                  <Link href="/contact" className="text-primary hover:underline font-semibold">
                    Submit scope details via form &rarr;
                  </Link>
                </p>
              </div>
            </div>

            {/* Quick Contact Links */}
            <div className="grid grid-cols-2 gap-3 text-xs font-sans">
              <a
                href={`mailto:${BRAND.contact.email}`}
                className="flex items-center justify-center gap-2 p-2.5 sm:p-3 bg-surface border border-border/80 rounded-xl hover:border-zinc-400 transition-colors text-textPrimary font-medium"
              >
                <Mail size={14} className="text-primary shrink-0" />
                <span className="truncate">Email Direct</span>
              </a>
              <a
                href={BRAND.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-2.5 sm:p-3 bg-surface border border-border/80 rounded-xl hover:border-emerald-500/40 transition-colors text-textPrimary font-medium"
              >
                <MessageSquare size={14} className="text-emerald-500 shrink-0" />
                <span className="truncate">WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Embedded Calendly Widget */}
          <div className="lg:col-span-7 w-full max-w-full overflow-hidden">
            <CalendlyEmbed minHeight="700px" className="min-h-[620px] sm:min-h-[700px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
