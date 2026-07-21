"use client";
import React from "react";
import { Award, ShieldCheck, Mail, Target, ArrowRight, Linkedin } from "lucide-react";
import Link from "next/link";
import { TEAM } from "@/lib/constants";


export default function Founder() {
  return (
    <section className="py-24 bg-background border-t border-border relative" id="team">
      <div className="section-container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-6">
            <span>Leadership & Engineering</span>
          </div>
          <h2 className="heading-2 mb-6">
            Meet the <span className="text-primary">Security Team</span>
          </h2>
          <p className="body-text text-textSecondary font-sans">
            OSCP-certified pentesters, GRC auditors, and operations leads working to make SaaS and FinTech startups enterprise-ready.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-16">
          {TEAM.map((member) => (
            <div 
              key={member.name} 
              className="premium-card p-6 bg-surface border border-border/80 rounded-2xl flex flex-col justify-between relative overflow-hidden shadow-sm hover:border-zinc-500 transition-colors"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full pointer-events-none" />
              
              <div className="absolute top-4 right-4 z-20">
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-textSecondary hover:text-primary transition-colors"
                >
                  <Linkedin size={14} />
                </a>
              </div>

              <div>
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/30 flex items-center justify-center bg-primary/10 text-lg font-bold font-sans text-primary shadow-sm mb-6">
                  {member.initials}
                </div>

                <h3 className="text-base font-bold text-textPrimary tracking-tight font-sans">
                  {member.name}
                </h3>
                <p className="text-[11px] font-sans text-primary uppercase tracking-wider mt-1 mb-4">
                  {member.role}
                </p>

                <p className="text-xs text-textSecondary leading-relaxed font-sans mb-6">
                  {member.bio}
                </p>
              </div>

              {/* Credentials list */}
              <div className="border-t border-border/40 pt-4 flex flex-wrap gap-1.5">
                {member.credentials.map((cred) => (
                  <span 
                    key={cred}
                    className="px-2 py-0.5 border border-primary/20 text-primary bg-primary/5 rounded text-[9px] font-mono font-bold uppercase tracking-wider"
                  >
                    {cred}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy CTA */}
        <div className="max-w-3xl mx-auto p-8 bg-surface border border-border rounded-2xl text-center space-y-4 shadow-sm">
          <h4 className="text-sm font-bold text-textPrimary uppercase tracking-wider font-mono flex items-center justify-center gap-2">
            <Target size={14} className="text-primary" /> Our Testing & Advisory Promise
          </h4>
          <p className="text-xs text-textSecondary leading-relaxed">
            We focus on row-level security parameters, database multi-tenancy verification, token state handling, and compliance alignment. Our goal is to make startups enterprise-ready with attestation badges that stand up to institutional vendor audits.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center text-xs uppercase font-mono font-bold text-textPrimary hover:text-primary tracking-widest gap-2 group"
            >
              Schedule Scoping Inquiry
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-primary" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
