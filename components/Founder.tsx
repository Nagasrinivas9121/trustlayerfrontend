"use client";

import React from "react";
import { Award, ShieldCheck, Mail, Target, ArrowRight } from "lucide-react";
import Link from "next/link";

const certifications = [
  { name: "OSCP", authority: "Offensive Security Certified Professional", color: "border-primary/20 text-primary bg-primary/5" },
  { name: "CEH", authority: "Certified Ethical Hacker", color: "border-primary/20 text-primary bg-primary/5" },
  { name: "eWPT", authority: "eLearnSecurity Web Penetration Tester", color: "border-primary/20 text-primary bg-primary/5" }
];

export default function Founder() {
  return (
    <section className="py-24 bg-background border-t border-border relative" id="founder">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Image Placeholder & Credentials */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative aspect-square w-full max-w-[400px] mx-auto bg-surface border border-border rounded-2xl overflow-hidden flex items-center justify-center group shadow-md">
              {/* Monogram or professional vector outline placeholder */}
              <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 to-white flex flex-col items-center justify-center p-8 text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden border border-border bg-black flex items-center justify-center mb-6 shadow-sm">
                  <img src="/logo.jpeg" alt="TrustLayerLabs Logo" className="w-full h-full object-cover scale-[1.3]" />
                </div>
                <h3 className="text-sm font-bold text-textPrimary uppercase tracking-wider font-mono">Nagasrinivasa Rao</h3>
                <p className="text-[10px] font-mono text-primary uppercase tracking-widest mt-1">Founder & Lead Security Architect</p>
                <p className="text-xs text-textSecondary mt-4 leading-relaxed font-sans max-w-[280px]">
                  Offensive security professional with 8+ years auditing enterprise APIs, cloud architectures, and financial systems.
                </p>
              </div>
            </div>

            {/* Certifications list */}
            <div className="space-y-4 max-w-[400px] mx-auto lg:mx-0">
              <span className="text-[9px] font-mono uppercase tracking-wider text-textSecondary block">
                Professional Accreditations
              </span>
              <div className="flex flex-wrap gap-2.5">
                {certifications.map((cert) => (
                  <div 
                    key={cert.name}
                    className={`px-3 py-1.5 border rounded-lg text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 ${cert.color}`}
                    title={cert.authority}
                  >
                    <Award className="w-3.5 h-3.5" />
                    {cert.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Mission & Philosophy */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-[10px] font-bold text-primary uppercase tracking-wider">
                <span>Founder&apos;s Perspective</span>
              </div>
              <h2 className="heading-2">
                Why We Build <span className="text-primary">TrustLayerLabs</span>
              </h2>
            </div>

            <div className="space-y-6 text-sm text-textSecondary leading-relaxed font-sans">
              <p>
                As tech platforms scale, automated scanners are often deployed to satisfy basic compliance. However, automated systems only check for signatures—they cannot comprehend business logic boundaries. 
              </p>
              <p>
                We founded TrustLayerLabs because startups deserve a dedicated partner who manually reviews application logic, maps threat paths, and helps developers write correct code.
              </p>
            </div>

            {/* Core Philosophy Card */}
            <div className="premium-card p-6 bg-surface border border-border rounded-xl space-y-4 shadow-sm">
              <h4 className="text-xs font-bold text-textPrimary uppercase tracking-wider font-mono flex items-center gap-2">
                <Target size={14} className="text-primary" /> Our Testing Philosophy
              </h4>
              <p className="text-xs text-textSecondary leading-relaxed">
                We focus on row-level security parameters, database multi-tenancy verification, token state handling, and endpoint validation. Our goal is to make startups enterprise-ready with attestation badges that stand up to institutional vendor audits.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center text-xs uppercase font-mono font-bold text-textPrimary hover:text-primary tracking-widest gap-2 group"
              >
                Schedule scoping inquiry
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-primary" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
