"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield, ShieldCheck, Target } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      <main className="pt-32 pb-24 font-sans text-textPrimary">
        <div className="section-container">
          
          {/* Breadcrumb & Header */}
          <div className="mb-16">
            <Link 
              href="/" 
              className="inline-flex items-center text-xs uppercase font-sans tracking-widest text-textSecondary hover:text-textPrimary transition-colors gap-2 mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
              Back to Home
            </Link>

            <h1 className="heading-1 mb-6 text-textPrimary font-extrabold font-sans tracking-tight">
              Who We Are: <span className="text-primary">TrustLayerLabs</span>
            </h1>
            <p className="body-text text-base max-w-3xl text-textSecondary">
              We are a team of dedicated security engineers and red-team consultants providing enterprise-grade offensive security reviews and manual logical audits for rapidly scaling tech startups.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-8">
              <div className="premium-card p-8 bg-surface border border-border/85 rounded-2xl space-y-4 shadow-sm">
                <h3 className="text-base font-bold text-textPrimary tracking-tight font-sans">
                  Our Mission Statement
                </h3>
                <p className="text-xs md:text-sm text-textSecondary leading-relaxed">
                  Startups move fast and traditional automated scanners throw hundreds of false alerts while missing complex logical vulnerabilities like authorization bypasses. Our mission is to bridge this gap. We combine human logic, advanced threat modeling, and regulatory controls mapping to deliver actionable VAPT findings in record time.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-base font-bold text-textPrimary tracking-tight font-sans">
                  Our Core Testing Philosophy
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-6 bg-surface border border-border/80 rounded-xl space-y-3 shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <Target size={18} />
                    </div>
                    <h4 className="text-xs font-bold text-textPrimary uppercase font-sans tracking-wider">Manual Logical Verification</h4>
                    <p className="text-[11px] text-textSecondary leading-relaxed">
                      We manually trace API queries, evaluate session scopes, check authorization cookies, and simulate target threat paths.
                    </p>
                  </div>

                  <div className="p-6 bg-surface border border-border/80 rounded-xl space-y-3 shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <Shield size={18} />
                    </div>
                    <h4 className="text-xs font-bold text-textPrimary uppercase font-sans tracking-wider">Remediation-First Focus</h4>
                    <p className="text-[11px] text-textSecondary leading-relaxed">
                      We do not just report vulnerabilities; we help your team fix them by writing code patches, suggesting system integrations, and verifying repairs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Team Card */}
            <div className="lg:col-span-4 space-y-6">
              <div className="premium-card p-6 bg-surface border border-border/80 rounded-2xl text-center space-y-6 relative overflow-hidden shadow-sm">
                <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full pointer-events-none" />
                
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary/30 mx-auto flex items-center justify-center bg-primary/10 text-2xl font-bold font-sans text-primary shadow-sm">
                  NS
                </div>

                <div>
                  <h4 className="text-xs font-bold text-textPrimary uppercase tracking-wider">Nagasrinivasa Rao</h4>
                  <p className="text-[10px] font-sans text-primary uppercase tracking-wider mt-0.5">Founder & Lead Pentester</p>
                </div>

                <p className="text-xs text-textSecondary leading-relaxed font-sans">
                  Offensive security professional with 8+ years auditing API architectures, financial transaction portals, and cloud integrations. CEH, OSCP, eWPT certified.
                </p>

                <div className="border-t border-border/40 pt-4 text-xs font-sans text-textPrimary flex flex-col items-center gap-1.5">
                  <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-primary" /> CEH Certified</span>
                  <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-primary" /> OSCP Certified</span>
                  <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-primary" /> eWPT Certified</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
