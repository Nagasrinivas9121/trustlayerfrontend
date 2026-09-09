"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, MapPin, ShieldCheck, ArrowRight, Calendar, FileText } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function VaptHyderabad() {
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
            <span>Serving Technology Teams Across India</span>
          </div>

          <h1 className="heading-1 text-textPrimary text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            VAPT Services for <span className="text-primary">Teams in Hyderabad</span>
          </h1>

          <p className="body-text text-base max-w-3xl text-textSecondary leading-relaxed font-sans">
            Manual offensive security testing, mobile VAPT, API penetration testing, and compliance readiness assessments for technology startups and enterprise engineering teams in Hyderabad and across India.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link 
              href="https://calendar.app.google/jnamj3gawxVunPJm9" 
              target="_blank"
              className="px-8 py-3.5 bg-primary hover:bg-primary-hover text-white text-xs uppercase font-sans font-bold tracking-wider rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              <Calendar size={15} />
              <span>Book a 20-Min Security Review</span>
            </Link>
            <Link 
              href="/sample-report"
              className="px-8 py-3.5 bg-surface border border-border hover:border-zinc-400 text-xs uppercase font-sans font-semibold tracking-wider rounded-xl text-textPrimary hover:text-primary transition-all flex items-center gap-2"
            >
              <FileText size={15} />
              <span>View Sample Report</span>
            </Link>
          </div>
        </div>

        {/* Section details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-16">
          
          <div className="bg-surface border border-border p-8 rounded-2xl space-y-4 flex flex-col justify-between shadow-sm">
            <div>
              <h3 className="text-base font-bold text-textPrimary tracking-tight font-sans">
                Practitioner-Led Assessments
              </h3>
              <p className="text-xs text-textSecondary leading-relaxed mt-2 font-sans">
                Our offensive security team supports engineering organizations in Hyderabad. We offer rapid scoping intake, mutual NDA turnaround, and collaborative developer debrief sessions.
              </p>
            </div>
            
            <div className="pt-4 border-t border-border/60 text-xs font-sans text-textPrimary">
              📍 Serving Technology Teams in Hyderabad & Across India
            </div>
          </div>

          <div className="bg-surface border border-border p-8 rounded-2xl space-y-4 flex flex-col justify-between shadow-sm">
            <div>
              <h3 className="text-base font-bold text-textPrimary tracking-tight font-sans text-primary">
                Why TrustLayerLabs?
              </h3>
              <p className="text-xs text-textSecondary leading-relaxed mt-2 font-sans">
                Modern enterprise portals and APIs demand thorough human verification. Automated tools miss authorization flaws and business logic bugs. Our practitioners manually test every critical vector.
              </p>
            </div>

            <div className="pt-4 border-t border-border/60 flex flex-wrap gap-3 text-[10px] font-sans font-bold text-textPrimary">
              <span className="flex items-center gap-1.5"><ShieldCheck size={12} className="text-primary" /> 30-DAY RETEST INCLUDED</span>
              <span className="flex items-center gap-1.5"><ShieldCheck size={12} className="text-primary" /> DEVELOPER-READY POCS</span>
            </div>
          </div>

        </div>

        {/* Cross Links */}
        <div className="my-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/services/api-security" className="p-5 bg-surface border border-border rounded-xl hover:border-primary/50 transition-colors">
            <h4 className="text-xs font-bold text-textPrimary uppercase font-sans mb-1">API Security Testing →</h4>
            <p className="text-[11px] text-textSecondary">BOLA, BFLA & JWT penetration testing.</p>
          </Link>
          <Link href="/services/mobile-vapt" className="p-5 bg-surface border border-border rounded-xl hover:border-primary/50 transition-colors">
            <h4 className="text-xs font-bold text-textPrimary uppercase font-sans mb-1">Mobile App VAPT →</h4>
            <p className="text-[11px] text-textSecondary">iOS & Android client and API assessments.</p>
          </Link>
          <Link href="/grc-readiness" className="p-5 bg-surface border border-border rounded-xl hover:border-primary/50 transition-colors">
            <h4 className="text-xs font-bold text-textPrimary uppercase font-sans mb-1">SOC 2 & ISO Readiness →</h4>
            <p className="text-[11px] text-textSecondary">Technical controls mapping & advisory.</p>
          </Link>
        </div>

      </div>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
}
