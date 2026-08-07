"use client";

import React from "react";
import Link from "next/link";
import { Quote, ShieldCheck, ArrowRight, FileText, CheckCircle2 } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 bg-background border-t border-border relative" id="testimonials">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="section-container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-6">
            <span>Our Team & Commitment</span>
          </div>
          <h2 className="heading-2 mb-6">
            Founder-Led <span className="text-primary">Offensive Security</span>
          </h2>
          <p className="body-text text-textSecondary mb-6">
            We work directly with engineering teams to perform thorough manual pentesting, API logic reviews, and compliance enablement.
          </p>
          <div className="inline-flex items-center gap-2 text-[10px] md:text-xs font-semibold text-primary uppercase tracking-wider bg-primary/5 border border-primary/20 rounded-lg py-2 px-4 max-w-lg mx-auto shadow-sm">
            <ShieldCheck size={14} className="text-primary" />
            <span>Transparent & Verifiable Methodology</span>
          </div>
        </div>

        {/* Founder Story Card Layout */}
        <div className="max-w-2xl mx-auto">
          <div className="premium-card p-8 md:p-10 flex flex-col justify-between relative group hover:border-zinc-400 bg-surface shadow-sm border border-border rounded-2xl">
            <div className="absolute top-4 right-6 text-primary/10 transition-colors">
              <Quote size={48} className="fill-current" />
            </div>

            <div className="relative z-10 space-y-6">
              <p className="text-base text-textPrimary leading-relaxed italic font-sans">
                &ldquo;We&apos;re a founder-led offensive security team based in Bangalore and Hyderabad, currently onboarding our first clients. Check our sample VAPT report and methodology below to see how we work.&rdquo;
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-border/60 font-sans">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-primary/10 border border-primary/20 flex-shrink-0 flex items-center justify-center font-sans font-bold text-xs text-primary">
                    TL
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-textPrimary uppercase tracking-wider font-sans">TrustLayerLabs Team</h4>
                    <p className="text-xs font-sans text-textSecondary uppercase tracking-wider mt-0.5">
                      Offensive Security Architect <span className="text-primary">• Bangalore & Hyderabad</span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 sm:pt-0">
                  <Link
                    href="/sample-report"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface border border-border hover:border-primary text-xs font-semibold text-textPrimary hover:text-primary rounded-lg transition-colors"
                  >
                    <FileText size={13} className="text-primary" />
                    <span>Sample Report</span>
                  </Link>
                  <Link
                    href="/methodology"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary text-white text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <span>Methodology</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}


