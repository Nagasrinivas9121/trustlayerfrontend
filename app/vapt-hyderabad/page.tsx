"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, MapPin, ShieldCheck, ArrowRight } from "lucide-react";

export default function VaptHyderabad() {
  return (
    <div className="bg-background min-h-screen">
      <main className="pt-32 pb-24 text-textPrimary font-sans">
        <div className="section-container max-w-4xl">
          
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
              <span>Hyderabad Security Hub</span>
            </div>

            <h1 className="heading-1 text-textPrimary text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Elite API Security & <span className="text-primary">VAPT Audits in Hyderabad</span>
            </h1>

            <p className="body-text text-base max-w-3xl text-textSecondary">
              Partnering with enterprise startups in HITEC City, Gachibowli, and Madhapur to secure endpoints, verify HIPAA/GDPR data vaults, and pass buyer reviews.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                href="https://calendar.app.google/jnamj3gawxVunPJm9" 
                target="_blank"
                className="bg-primary hover:bg-primary-hover text-white text-xs uppercase font-sans tracking-wider font-semibold py-3.5 px-8 rounded-full flex items-center gap-1.5 shadow-md transition-all active:scale-[0.98]"
              >
                Book Scoping Session <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-16">
            
            <div className="bg-surface border border-border p-8 rounded-2xl space-y-4 flex flex-col justify-between shadow-sm">
              <div>
                <h3 className="text-base font-bold text-textPrimary tracking-tight font-sans">
                  HITEC City Presence
                </h3>
                <p className="text-xs text-textSecondary leading-relaxed mt-2 font-sans">
                  Our Hyderabad team supports security scopes in HITEC City and Gachibowli. We offer fast intake, signed NDAs within 2 hours, and expert manual validation meetings.
                </p>
              </div>
              
              <div className="pt-4 border-t border-border/60 text-xs font-sans text-textPrimary">
                📍 Hub: HITEC City, Hyderabad, TG 500081
              </div>
            </div>

            <div className="bg-surface border border-border p-8 rounded-2xl space-y-4 flex flex-col justify-between shadow-sm">
              <div>
                <h3 className="text-base font-bold text-textPrimary tracking-tight font-sans text-primary">
                  Why TrustLayerLabs?
                </h3>
                <p className="text-xs text-textSecondary leading-relaxed mt-2 font-sans">
                  Hyderabad&apos;s tech space is growing fast. Automated tools miss authorization flaws. Our OSCP and CEH certified red team engineers manually audit all endpoints.
                </p>
              </div>

              <div className="pt-4 border-t border-border/60 flex flex-wrap gap-3 text-[9px] font-sans font-bold text-textPrimary">
                <span className="flex items-center gap-1.5"><ShieldCheck size={12} className="text-primary" /> GDPR COMPLIANT</span>
                <span className="flex items-center gap-1.5"><ShieldCheck size={12} className="text-primary" /> SOC2 CERT READY</span>
              </div>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}
