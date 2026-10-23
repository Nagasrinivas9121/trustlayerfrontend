"use client";

import React from "react";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import { Shield, Clock, FileCheck, CheckCircle2, Mail, MessageSquare, ArrowLeft } from "lucide-react";
import { BRAND } from "@/lib/constants";
import Link from "next/link";
import ObfuscatedEmailLink from "@/components/ObfuscatedEmailLink";
import { trackWhatsappCtaClick } from "@/lib/analytics";

export default function BookPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen pt-32 pb-24 text-neutral-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Link 
          href="/" 
          className="inline-flex items-center text-xs font-semibold text-neutral-500 hover:text-neutral-900 transition-colors gap-2 mb-8 group px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 shadow-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/80 shadow-sm text-xs font-semibold text-neutral-800 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Confidential Scoping Consultation</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 mb-4">
            Schedule a 30-Minute <span className="text-neutral-900">Security Review</span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Pick a convenient slot to speak directly with an offensive security practitioner. No sales reps, no fluff — pure technical scoping.
          </p>
        </div>

        {/* Main Grid: Context on Left, Inline Calendly on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column: Scope & Commitments */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-neutral-200/80 rounded-3xl p-7 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] space-y-5">
              <h2 className="text-sm font-bold text-neutral-950 uppercase tracking-wider flex items-center gap-2">
                <Shield className="text-neutral-900 shrink-0" size={18} />
                <span>What We Cover On The Call</span>
              </h2>

              <ul className="space-y-4 text-xs sm:text-sm text-neutral-600">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                    <CheckCircle2 size={13} />
                  </div>
                  <div>
                    <strong className="text-neutral-950 block font-semibold">Attack Surface Scoping:</strong>
                    Map your web apps, mobile builds, cloud posture (AWS/GCP), and API endpoints.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                    <CheckCircle2 size={13} />
                  </div>
                  <div>
                    <strong className="text-neutral-950 block font-semibold">Compliance Readiness:</strong>
                    Identify gaps for SOC 2 Type II, ISO 27001, CERT-In, or customer enterprise RFPs.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                    <CheckCircle2 size={13} />
                  </div>
                  <div>
                    <strong className="text-neutral-950 block font-semibold">Actionable Deliverable Plan:</strong>
                    Get a clear timeline, zero false-positive guarantee, and free re-test commitment.
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-neutral-200/80 rounded-3xl p-7 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] space-y-4">
              <h2 className="text-xs font-bold text-neutral-950 uppercase tracking-wider flex items-center gap-2">
                <FileCheck className="text-neutral-900 shrink-0" size={16} />
                <span>Practitioner Commitments</span>
              </h2>

              <div className="space-y-3 text-xs sm:text-sm text-neutral-600">
                <div className="flex items-center gap-2.5 text-neutral-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 shrink-0" />
                  <span>Mutual NDA executed prior to sensitive technical disclosures</span>
                </div>
                <div className="flex items-center gap-2.5 text-neutral-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 shrink-0" />
                  <span>Direct practitioner engagement — no account managers</span>
                </div>
                <div className="flex items-center gap-2.5 text-neutral-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 shrink-0" />
                  <span>Serving SaaS, FinTech, and AI teams globally</span>
                </div>
              </div>

              <div className="pt-4 border-t border-dashed border-neutral-200">
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Prefer written scoping?{" "}
                  <Link href="/contact" className="text-neutral-950 hover:underline font-semibold">
                    Submit scope details via form &rarr;
                  </Link>
                </p>
              </div>
            </div>

            {/* Quick Contact Links */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <ObfuscatedEmailLink
                className="flex items-center justify-center gap-2 p-3 bg-white border border-neutral-200 hover:border-neutral-400 rounded-full transition-colors text-neutral-800 font-semibold shadow-sm"
                ariaLabel="Email TrustLayerLabs directly"
              >
                <Mail size={14} className="text-neutral-600 shrink-0" />
                <span className="truncate">Email Direct</span>
              </ObfuscatedEmailLink>
              <a
                href={BRAND.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsappCtaClick("book_page_sidebar")}
                className="flex items-center justify-center gap-2 p-3 bg-white border border-neutral-200 hover:border-emerald-500 rounded-full transition-colors text-neutral-800 font-semibold shadow-sm"
              >
                <MessageSquare size={14} className="text-emerald-500 shrink-0" />
                <span className="truncate">WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Embedded Calendly Widget */}
          <div className="lg:col-span-7 w-full bg-white border border-neutral-200/80 rounded-3xl p-4 sm:p-6 shadow-[0_4px_24px_rgba(0,0,0,0.02)] overflow-hidden">
            <CalendlyEmbed minHeight="700px" className="min-h-[620px] sm:min-h-[700px]" immediate={true} />
          </div>
        </div>

        {/* Scoping Preparation Guide */}
        <div className="pt-14 border-t border-dashed border-neutral-200">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 mb-3 tracking-tight">
              How to Prepare for Your 30-Minute Scoping Consultation
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              To maximize the value of your call, having the following high-level scoping details readily available helps us provide an immediate fixed-price proposal and testing timeline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            <div className="bg-white border border-neutral-200/80 rounded-3xl p-6 space-y-2 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
              <span className="text-xs font-mono text-neutral-400">01</span>
              <h3 className="text-sm font-bold text-neutral-950">Target Asset Scope</h3>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Total web application URLs, API endpoints, mobile builds (iOS/Android), external IP ranges, or cloud subscriptions in scope.
              </p>
            </div>
            <div className="bg-white border border-neutral-200/80 rounded-3xl p-6 space-y-2 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
              <span className="text-xs font-mono text-neutral-400">02</span>
              <h3 className="text-sm font-bold text-neutral-950">Tech Stack & Cloud</h3>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Hosting environments (AWS, GCP, Azure, bare metal), primary frameworks (React, Next.js, Node, Django), and authentication mechanisms (OAuth, JWT).
              </p>
            </div>
            <div className="bg-white border border-neutral-200/80 rounded-3xl p-6 space-y-2 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
              <span className="text-xs font-mono text-neutral-400">03</span>
              <h3 className="text-sm font-bold text-neutral-950">Compliance Mandates</h3>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Target compliance requirements driving your assessment, such as SOC 2 Type II, ISO 27001, CERT-In, HIPAA, or enterprise customer vendor reviews.
              </p>
            </div>
            <div className="bg-white border border-neutral-200/80 rounded-3xl p-6 space-y-2 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
              <span className="text-xs font-mono text-neutral-400">04</span>
              <h3 className="text-sm font-bold text-neutral-950">Testing Constraints</h3>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Preferred staging vs. production testing environments, off-peak maintenance windows, rate-limiting policies, and credential provisioning workflows.
              </p>
            </div>
          </div>

          {/* Consultation Scoping FAQs */}
          <div className="bg-white border border-neutral-200/80 rounded-3xl p-8 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
            <h2 className="text-xl font-bold text-neutral-950 mb-6">
              Frequently Asked Scoping Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-neutral-600">
              <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200/70 space-y-2">
                <h3 className="text-sm font-bold text-neutral-950">
                  Do you execute a Mutual Non-Disclosure Agreement (NDA)?
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-neutral-600">
                  Yes. We routinely execute mutual NDAs prior to any detailed technical discussion to ensure your proprietary source code, application architectures, and security configurations remain fully confidential.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200/70 space-y-2">
                <h3 className="text-sm font-bold text-neutral-950">
                  Who will lead the scoping conversation?
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-neutral-600">
                  You will speak directly with an offensive security engineer or lead pentester, not a sales representative. We focus strictly on technical scoping parameters and architecture diagrams.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200/70 space-y-2">
                <h3 className="text-sm font-bold text-neutral-950">
                  What deliverables follow the initial call?
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-neutral-600">
                  Within 24 business hours of the call, we provide a formalized Statement of Work (SOW) with defined testing milestones, a zero-false-positive guarantee, and a fixed transparent price quote.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200/70 space-y-2">
                <h3 className="text-sm font-bold text-neutral-950">
                  Can you conduct penetration testing on live production environments?
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-neutral-600">
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
