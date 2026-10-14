"use client";

import React from "react";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import { Shield, Clock, FileCheck, CheckCircle2, Mail, MessageSquare } from "lucide-react";
import { BRAND } from "@/lib/constants";
import Link from "next/link";
import ObfuscatedEmailLink from "@/components/ObfuscatedEmailLink";
import { trackWhatsappCtaClick } from "@/lib/analytics";

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
              <h2 className="text-xs font-bold text-textPrimary font-sans uppercase tracking-wider flex items-center gap-2">
                <FileCheck className="text-primary shrink-0" size={16} />
                <span>Practitioner Commitments</span>
              </h2>

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
              <ObfuscatedEmailLink
                className="flex items-center justify-center gap-2 p-2.5 sm:p-3 bg-surface border border-border/80 rounded-xl hover:border-zinc-400 transition-colors text-textPrimary font-medium"
                ariaLabel="Email TrustLayerLabs directly"
              >
                <Mail size={14} className="text-primary shrink-0" />
                <span className="truncate">Email Direct</span>
              </ObfuscatedEmailLink>
              <a
                href={BRAND.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsappCtaClick("book_page_sidebar")}
                className="flex items-center justify-center gap-2 p-2.5 sm:p-3 bg-surface border border-border/80 rounded-xl hover:border-emerald-500/40 transition-colors text-textPrimary font-medium"
              >
                <MessageSquare size={14} className="text-emerald-500 shrink-0" />
                <span className="truncate">WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Embedded Calendly Widget */}
          <div className="lg:col-span-7 w-full max-w-full overflow-hidden">
            <CalendlyEmbed minHeight="700px" className="min-h-[620px] sm:min-h-[700px]" immediate={true} />
          </div>
        </div>

        {/* Scoping Preparation Guide */}
        <div className="mt-16 sm:mt-20 pt-12 border-t border-border/70">
          <div className="max-w-3xl mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-textPrimary font-sans mb-3">
              How to Prepare for Your 30-Minute Scoping Consultation
            </h2>
            <p className="text-xs sm:text-sm text-textSecondary leading-relaxed">
              To maximize the value of your call, having the following high-level scoping details readily available helps us provide an immediate fixed-price proposal and testing timeline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-surface border border-border/80 rounded-xl p-5 space-y-2 shadow-sm">
              <h3 className="text-sm font-bold text-textPrimary font-sans">1. Target Asset Scope</h3>
              <p className="text-xs text-textSecondary leading-relaxed">
                Total web application URLs, API endpoints, mobile builds (iOS/Android), external IP ranges, or cloud subscriptions in scope.
              </p>
            </div>
            <div className="bg-surface border border-border/80 rounded-xl p-5 space-y-2 shadow-sm">
              <h3 className="text-sm font-bold text-textPrimary font-sans">2. Tech Stack & Architecture</h3>
              <p className="text-xs text-textSecondary leading-relaxed">
                Hosting environments (AWS, GCP, Azure, bare metal), primary frameworks (React, Next.js, Node, Django), and authentication mechanisms (OAuth, JWT).
              </p>
            </div>
            <div className="bg-surface border border-border/80 rounded-xl p-5 space-y-2 shadow-sm">
              <h3 className="text-sm font-bold text-textPrimary font-sans">3. Compliance Mandates</h3>
              <p className="text-xs text-textSecondary leading-relaxed">
                Target compliance requirements driving your assessment, such as SOC 2 Type II, ISO 27001, CERT-In, HIPAA, or enterprise customer vendor reviews.
              </p>
            </div>
            <div className="bg-surface border border-border/80 rounded-xl p-5 space-y-2 shadow-sm">
              <h3 className="text-sm font-bold text-textPrimary font-sans">4. Testing Constraints</h3>
              <p className="text-xs text-textSecondary leading-relaxed">
                Preferred staging vs. production testing environments, off-peak maintenance windows, rate-limiting policies, and credential provisioning workflows.
              </p>
            </div>
          </div>

          {/* Consultation Scoping FAQs */}
          <div className="bg-surface border border-border/80 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-lg sm:text-xl font-bold text-textPrimary font-sans mb-6">
              Frequently Asked Scoping Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-textSecondary">
              <div className="space-y-2">
                <h3 className="text-xs sm:text-sm font-bold text-textPrimary font-sans">
                  Do you execute a Mutual Non-Disclosure Agreement (NDA)?
                </h3>
                <p className="leading-relaxed">
                  Yes. We routinely execute mutual NDAs prior to any detailed technical discussion to ensure your proprietary source code, application architectures, and security configurations remain fully confidential.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xs sm:text-sm font-bold text-textPrimary font-sans">
                  Who will lead the scoping conversation?
                </h3>
                <p className="leading-relaxed">
                  You will speak directly with an offensive security engineer or lead pentester, not a sales representative. We focus strictly on technical scoping parameters and architecture diagrams.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xs sm:text-sm font-bold text-textPrimary font-sans">
                  What deliverables follow the initial call?
                </h3>
                <p className="leading-relaxed">
                  Within 24 business hours of the call, we provide a formalized Statement of Work (SOW) with defined testing milestones, a zero-false-positive guarantee, and a fixed transparent price quote.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xs sm:text-sm font-bold text-textPrimary font-sans">
                  Can you conduct penetration testing on live production environments?
                </h3>
                <p className="leading-relaxed">
                  Yes. Our certified practitioners utilize calibrated payloads and non-destructive testing methods to prevent business disruption, data alteration, or service degradation during production testing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
