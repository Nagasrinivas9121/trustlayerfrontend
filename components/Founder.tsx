"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ShieldCheck, Mail, Target, ArrowRight, Linkedin } from "lucide-react";
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
    <section className="py-24 bg-background border-t border-border relative" id="team">
      <div className="section-container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-6">
            <span>Practitioner-Led Security</span>
          </div>
          <h2 className="heading-2 mb-6 font-sans">
            Security Assessments <span className="text-primary">Led by Practitioners</span>
          </h2>
          <p className="body-text text-textSecondary font-sans">
            Offensive security architects, penetration testers, and GRC practitioners working directly with engineering leadership to harden applications and prepare for enterprise audits.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-16">
          {TEAM.map((member) => (
            <div 
              key={member.name} 
              itemScope
              itemType="https://schema.org/Person"
              className="premium-card p-6 bg-surface border border-border/80 rounded-2xl flex flex-col justify-between relative overflow-hidden shadow-sm hover:border-zinc-500 transition-colors"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full pointer-events-none" />
              
              <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5">
                {(member as any).certificateUrl && (
                  <button
                    onClick={() => setSelectedCert((member as any).certModalId || "c3sa")}
                    className="text-[9px] font-mono font-bold text-primary bg-primary/10 border border-primary/20 hover:bg-primary/20 px-2 py-0.5 rounded transition-colors cursor-pointer"
                    title={(member as any).certificateTitle || "View Verified Certificate"}
                  >
                    {(member as any).certificates ? "Certificates ↗" : "Certificate ↗"}
                  </button>
                )}
                {member.linkedin && (
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer author" 
                    itemProp="sameAs"
                    className="text-textSecondary hover:text-primary transition-colors p-1"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <Linkedin size={14} />
                    <span className="sr-only">{member.name} on LinkedIn</span>
                  </a>
                )}
              </div>

              <div>
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary/30 flex items-center justify-center bg-surface text-lg font-bold font-sans text-primary shadow-sm mb-6 ring-2 ring-primary/10">
                  {(member as any).image ? (
                    <Image
                      src={(member as any).image}
                      alt={member.name}
                      width={128}
                      height={128}
                      itemProp="image"
                      className="w-full h-full object-cover object-center"
                      priority
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-blue-50 text-blue-800 font-bold">
                      {member.initials}
                    </div>
                  )}
                </div>

                <h3 itemProp="name" className="text-base font-bold text-textPrimary tracking-tight font-sans">
                  {member.name}
                </h3>
                <p itemProp="jobTitle" className="text-[11px] font-sans text-primary font-bold uppercase tracking-wider mt-1 mb-4">
                  {member.role}
                </p>

                <p itemProp="description" className="text-xs text-textSecondary leading-relaxed font-sans mb-6">
                  {member.bio}
                </p>
              </div>

              {/* Credentials list */}
              <div className="border-t border-border/40 pt-4 flex flex-col gap-2">
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
                          className="px-2 py-0.5 border border-primary/30 text-primary bg-primary/5 hover:bg-primary/20 hover:border-primary/60 transition-[color,background-color,border-color,box-shadow,transform] rounded text-[9px] font-mono font-bold uppercase tracking-wider inline-flex items-center gap-1 cursor-pointer"
                        >
                          <span>{cred}</span>
                          <span className="text-[8px] opacity-70">↗</span>
                        </button>
                      );
                    }
                    return (
                      <span 
                        key={cred}
                        itemProp="hasCredential"
                        className="px-2 py-0.5 border border-blue-200/80 text-blue-800 bg-blue-50 rounded text-[9px] font-mono font-bold uppercase tracking-wider"
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

        {/* Philosophy CTA */}
        <div className="max-w-3xl mx-auto p-8 bg-surface border border-border rounded-2xl text-center space-y-4 shadow-sm">
          <h3 className="text-xs font-bold text-textPrimary uppercase tracking-wider font-mono flex items-center justify-center gap-2">
            <Target size={14} className="text-primary" /> Our Testing & Advisory Approach
          </h3>
          <p className="text-xs text-textSecondary leading-relaxed font-sans">
            We focus on row-level security parameters, database multi-tenancy verification, token state handling, and compliance alignment. Our goal is to assist engineering teams with thorough technical assessments and retest verification letters that support institutional vendor reviews.
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

      <CertificateModal 
        isOpen={!!selectedCert} 
        initialCertId={selectedCert || "c3sa"}
        onClose={() => setSelectedCert(null)} 
      />
    </section>
  );
}
