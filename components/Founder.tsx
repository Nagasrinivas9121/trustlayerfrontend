"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ShieldCheck, Mail, Target, ArrowRight, Linkedin, Award, CheckCircle2, Sparkles } from "lucide-react";
import Link from "next/link";
import { TEAM } from "@/lib/constants";
import CertificateModal from "@/components/CertificateModal";

const getCertIdForCred = (cred: string, memberName: string) => {
  if (cred.includes("ISO")) return "iso27001";
  if (cred.includes("C3SA")) return memberName.includes("Teja") ? "c3sa_teja" : "c3sa";
  if (cred.includes("BTF")) return "btf_teja";
  return null;
};

export default function Founder() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <section className="py-20 sm:py-28 bg-[#FAFAFA] border-t border-dashed border-neutral-200 relative" id="team">
      <div className="section-container">
        
        {/* Header - CodeDale style */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-neutral-200 shadow-sm rounded-full text-xs font-semibold text-neutral-800 uppercase tracking-wider mb-5">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>Practitioner-Led Security</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-tight mb-5 font-sans">
            Security Assessments <br className="hidden sm:inline" />
            <span className="text-primary">Led by Offensive Practitioners</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto font-sans">
            Offensive security architects, penetration testers, and GRC practitioners working directly with engineering leadership to harden applications and prepare for enterprise audits.
          </p>
        </div>

        {/* Team Grid - CodeDale rounded-3xl card style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-16">
          {TEAM.map((member) => (
            <div 
              key={member.name} 
              itemScope
              itemType="https://schema.org/Person"
              className="group p-7 bg-white border border-neutral-200/90 rounded-3xl flex flex-col justify-between relative overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:border-neutral-400 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-blue-50/60 rounded-bl-full pointer-events-none transition-all group-hover:scale-110" />
              
              {/* Top Action Pills */}
              <div className="absolute top-5 right-5 z-20 flex items-center gap-2">
                {(member as any).certificateUrl && (
                  <button
                    onClick={() => setSelectedCert((member as any).certModalId || "c3sa")}
                    className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-primary bg-blue-50 border border-blue-200/80 hover:bg-blue-100/80 px-2.5 py-1 rounded-full transition-colors cursor-pointer"
                    title={(member as any).certificateTitle || "View Verified Certificate"}
                  >
                    <Award size={11} />
                    <span>Verify ↗</span>
                  </button>
                )}
                {member.linkedin && (
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer author" 
                    itemProp="sameAs"
                    className="w-7 h-7 rounded-full bg-neutral-100 hover:bg-blue-50 text-neutral-500 hover:text-primary transition-colors flex items-center justify-center border border-neutral-200"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <Linkedin size={13} />
                    <span className="sr-only">{member.name} on LinkedIn</span>
                  </a>
                )}
              </div>

              <div>
                {/* Avatar with status dot */}
                <div className="relative w-18 h-18 rounded-2xl overflow-hidden border-2 border-white shadow-md flex items-center justify-center bg-neutral-100 text-lg font-bold font-sans text-primary mb-6 ring-1 ring-neutral-200/80">
                  {(member as any).image ? (
                    <Image
                      src={(member as any).image}
                      alt={member.name}
                      width={128}
                      height={128}
                      itemProp="image"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-blue-50 text-primary font-bold">
                      {member.initials}
                    </div>
                  )}
                  <div className="absolute bottom-1 right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
                </div>

                <h3 itemProp="name" className="text-base font-bold text-neutral-900 tracking-tight font-sans">
                  {member.name}
                </h3>
                <p itemProp="jobTitle" className="text-[11px] font-sans text-primary font-semibold uppercase tracking-wider mt-1 mb-3">
                  {member.role}
                </p>

                <p itemProp="description" className="text-xs text-neutral-600 leading-relaxed font-sans mb-6">
                  {member.bio}
                </p>
              </div>

              {/* Credentials list */}
              <div className="border-t border-dashed border-neutral-200 pt-4 flex flex-col gap-2">
                <div className="text-[10px] uppercase font-mono tracking-wider text-neutral-500 font-semibold mb-1">
                  Verified Credentials
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {member.credentials.map((cred) => {
                    const certId = getCertIdForCred(cred, member.name);
                    if (certId) {
                      return (
                        <button
                          key={cred}
                          type="button"
                          onClick={() => setSelectedCert(certId)}
                          title={`View verified ${cred} certificate`}
                          className="px-2.5 py-1 border border-blue-200 text-primary bg-blue-50/80 hover:bg-blue-100 hover:border-blue-400 transition-all rounded-lg text-[10px] font-mono font-semibold uppercase tracking-wide inline-flex items-center gap-1 cursor-pointer"
                        >
                          <span>{cred}</span>
                          <span className="text-[9px] opacity-70">↗</span>
                        </button>
                      );
                    }
                    return (
                      <span 
                        key={cred}
                        itemProp="hasCredential"
                        className="px-2.5 py-1 border border-neutral-200 text-neutral-700 bg-neutral-50 rounded-lg text-[10px] font-mono font-semibold uppercase tracking-wide"
                      >
                        {cred}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy CTA - CodeDale Dashed Box with Accent Highlight */}
        <div className="max-w-4xl mx-auto p-8 sm:p-10 bg-white border border-dashed border-neutral-300 rounded-3xl text-center shadow-[0_8px_30px_rgba(0,0,0,0.03)] relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 rounded-full text-[11px] font-mono font-bold text-neutral-700 uppercase tracking-wider mb-4">
            <Target size={13} className="text-primary" />
            <span>Our Testing & Advisory Approach</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight mb-3">
            Direct Engineering Partnership. Zero Account Manager Friction.
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans max-w-2xl mx-auto mb-6">
            We focus on row-level security parameters, database multi-tenancy verification, token state handling, and compliance alignment. Our goal is to assist engineering teams with thorough technical assessments and retest verification letters that support institutional vendor reviews.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs uppercase font-sans font-bold tracking-wider shadow-sm hover:shadow-md transition-all group"
            >
              <span>Schedule Scoping Inquiry</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-blue-400" />
            </Link>
            <Link
              href="/methodology"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-neutral-100 hover:bg-neutral-200/80 text-neutral-800 text-xs uppercase font-sans font-bold tracking-wider transition-all"
            >
              <span>Read Testing Methodology</span>
            </Link>
          </div>
        </div>

      </div>

      <CertificateModal 
        isOpen={!!selectedCert} 
        initialCertId={selectedCert || "c3sa"}
        onClose={() => setSelectedCert(null)} 
      />
    </section>
  );
}
