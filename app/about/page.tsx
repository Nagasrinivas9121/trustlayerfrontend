"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Shield, ShieldCheck, Target, Linkedin, Award, ArrowUpRight, Check, Sparkles } from "lucide-react";
import TransparencyVerdict from "@/components/TransparencyVerdict";
import { TEAM } from "@/lib/constants";
import CertificateModal from "@/components/CertificateModal";

const getCertIdForCred = (cred: string, memberName: string) => {
  if (cred.includes("ISO")) return "iso27001";
  if (cred.includes("C3SA")) return memberName.includes("Teja") ? "c3sa_teja" : "c3sa";
  if (cred.includes("BTF")) return "btf_teja";
  return null;
};

export default function AboutPage() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <div className="bg-background min-h-screen">
      <div className="pt-32 pb-24 font-sans text-neutral-900">
        <div className="section-container">
          
          {/* Breadcrumb & Header - CodeDale style */}
          <div className="mb-16">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 text-xs font-semibold text-neutral-600 hover:text-neutral-900 shadow-sm transition-all mb-8 group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Overview</span>
            </Link>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-neutral-200 shadow-sm rounded-full text-xs font-semibold text-neutral-800 uppercase tracking-wider mb-5">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>Practitioner-Led Cybersecurity</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-tight mb-5 font-sans">
              Who We Are: <span className="text-primary">TrustLayerLabs</span>
            </h1>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl font-sans">
              We are offensive security engineers, penetration testers, and compliance advisors providing deep manual security testing and audit readiness for high-growth tech platforms globally.
            </p>
          </div>

          {/* Mission & Philosophy Grid - CodeDale 2-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
            <div className="lg:col-span-6 p-8 sm:p-10 bg-white border border-neutral-200/90 rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 rounded-full text-xs font-mono font-bold text-neutral-700 uppercase tracking-wider mb-4">
                  <Target size={13} className="text-primary" /> Core Mission
                </div>
                <h2 className="text-2xl font-bold text-neutral-900 tracking-tight font-sans mb-4">
                  Eliminating Logic Vulnerabilities That Automated Scanners Miss
                </h2>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans mb-4">
                  Startups move fast and traditional automated scanners throw hundreds of false alerts while missing complex logical vulnerabilities like authorization bypasses (BOLA/IDOR), broken business flows, and tenant boundary leaks.
                </p>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
                  Our mission is to bridge this gap. We combine human logic, active adversary emulation, and regulatory controls mapping to deliver actionable findings with copy-paste code patches in record time.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 gap-4">
              <div className="p-6 sm:p-7 bg-white border border-neutral-200/90 rounded-3xl shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200/70 flex items-center justify-center text-primary shrink-0">
                    <Target size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block">Philosophy 01</span>
                    <h3 className="text-base font-bold text-neutral-900 font-sans">Manual Logic Verification</h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
                  We manually trace API queries, evaluate session scopes, check authorization cookies, and simulate realistic multi-tenant attack paths that tools overlook.
                </p>
              </div>

              <div className="p-6 sm:p-7 bg-white border border-neutral-200/90 rounded-3xl shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/70 flex items-center justify-center text-emerald-600 shrink-0">
                    <Shield size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block">Philosophy 02</span>
                    <h3 className="text-base font-bold text-neutral-900 font-sans">Remediation-First Advisory</h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
                  We don&apos;t just export raw vulnerability lists. We provide concrete code fixes, framework-specific guidance, and complimentary retesting letters for your enterprise buyers.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section - CodeDale 4-Card Grid */}
          <div className="space-y-8 mb-20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-dashed border-neutral-300 pb-4 gap-2">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight font-sans">
                  Practitioner Leadership &amp; Credentials
                </h2>
                <p className="text-xs sm:text-sm text-neutral-600 font-sans mt-1">
                  Direct engagement with certified offensive security specialists
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-primary font-semibold uppercase bg-blue-50 border border-blue-200 px-3 py-1 rounded-full w-fit">
                <Sparkles size={12} /> Certified Engineers
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {TEAM.map((member) => (
                <div 
                  key={member.name} 
                  className="p-7 bg-white border border-neutral-200/90 rounded-3xl flex flex-col justify-between relative overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:border-neutral-400 transition-all duration-300 group"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/50 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />
                  
                  <div>
                    {/* Top Action Pills */}
                    <div className="flex items-center justify-between gap-1.5 mb-5">
                      <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-white shadow-md flex items-center justify-center bg-neutral-100 text-sm font-bold font-sans text-primary shrink-0 ring-1 ring-neutral-200">
                        {(member as any).image ? (
                          <Image
                            src={(member as any).image}
                            alt={member.name}
                            width={112}
                            height={112}
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          member.initials
                        )}
                        <div className="absolute bottom-1 right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
                      </div>
                      
                      <div className="flex items-center gap-1.5">
                        {(member as any).certificateUrl && (
                          <button
                            onClick={() => setSelectedCert((member as any).certModalId || "c3sa")}
                            className="inline-flex items-center gap-1 text-[10px] text-primary font-mono font-bold bg-blue-50 hover:bg-blue-100 border border-blue-200 px-2.5 py-1 rounded-full transition-colors cursor-pointer"
                            title={(member as any).certificateTitle || "Verify Certificate"}
                          >
                            <Award size={11} />
                            <span>Verify ↗</span>
                          </button>
                        )}
                        {member.linkedin && (
                          <a 
                            href={member.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="w-7 h-7 rounded-full bg-neutral-100 hover:bg-blue-50 text-neutral-500 hover:text-primary transition-colors flex items-center justify-center border border-neutral-200"
                            title="Verify Profile on LinkedIn"
                          >
                            <Linkedin size={13} />
                          </a>
                        )}
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-neutral-900 tracking-tight font-sans">{member.name}</h3>
                    <p className="text-[11px] font-sans text-primary font-semibold uppercase tracking-wider mt-0.5 mb-3">{member.role}</p>
                    <p className="text-xs text-neutral-600 leading-relaxed font-sans mb-4">{member.bio}</p>
                  </div>

                  <div className="border-t border-dashed border-neutral-200 pt-3 flex flex-col gap-1.5">
                    <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider font-semibold mb-0.5">Credentials</div>
                    <div className="flex flex-wrap gap-1">
                      {member.credentials.map((cred) => {
                        const certId = getCertIdForCred(cred, member.name);
                        if (certId) {
                          return (
                            <button
                              key={cred}
                              type="button"
                              onClick={() => setSelectedCert(certId)}
                              title={`Verify ${cred}`}
                              className="px-2 py-0.5 border border-blue-200 text-primary bg-blue-50 hover:bg-blue-100 transition-colors rounded-md text-[9px] font-mono font-semibold uppercase tracking-wider cursor-pointer"
                            >
                              {cred} ↗
                            </button>
                          );
                        }
                        return (
                          <span key={cred} className="px-2 py-0.5 border border-neutral-200 text-neutral-700 bg-neutral-50 rounded-md text-[9px] font-mono font-semibold uppercase tracking-wider">
                            {cred}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Research & Publications - CodeDale 3-Card Grid */}
          <div className="space-y-8 mb-20">
            <div className="flex items-center gap-4">
              <div className="h-[1px] flex-1 bg-neutral-300 border-t border-dashed border-neutral-300"></div>
              <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight font-sans text-center px-4 uppercase tracking-wider">
                Technical Research &amp; Publications
              </h2>
              <div className="h-[1px] flex-1 bg-neutral-300 border-t border-dashed border-neutral-300"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="p-7 bg-white border border-neutral-200/90 rounded-3xl space-y-4 shadow-sm text-left relative overflow-hidden group hover:border-neutral-400 transition-all">
                <span className="text-[10px] font-mono font-bold text-primary bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-md uppercase tracking-wider">
                  APIs &amp; Logic
                </span>
                <h3 className="text-base font-bold text-neutral-900 font-sans tracking-tight">API &amp; Application Research</h3>
                <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                  We document common API authorization gaps, broken object-level access patterns, and developer remediation best practices.
                </p>
                <div className="space-y-2.5 pt-2 text-xs border-t border-dashed border-neutral-200">
                  <Link href="/blog/auditing-bola-idor-graphql-rest-apis" className="block text-neutral-800 hover:text-primary font-medium transition-colors flex items-center justify-between">
                    <span>Auditing BOLA/IDOR in REST &amp; GraphQL</span>
                    <ArrowUpRight size={13} className="text-neutral-400" />
                  </Link>
                  <Link href="/blog/jwt-security-best-practices-attack-vectors" className="block text-neutral-800 hover:text-primary font-medium transition-colors flex items-center justify-between">
                    <span>JWT Security Best Practices &amp; Exploits</span>
                    <ArrowUpRight size={13} className="text-neutral-400" />
                  </Link>
                </div>
              </div>

              <div className="p-7 bg-white border border-neutral-200/90 rounded-3xl space-y-4 shadow-sm text-left relative overflow-hidden group hover:border-neutral-400 transition-all">
                <span className="text-[10px] font-mono font-bold text-primary bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-md uppercase tracking-wider">
                  AI &amp; Cloud
                </span>
                <h3 className="text-base font-bold text-neutral-900 font-sans tracking-tight">AI &amp; Infrastructure Security</h3>
                <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                  Technical guides on defending Generative AI applications, RAG pipelines, and containerized cloud architectures.
                </p>
                <div className="space-y-2.5 pt-2 text-xs border-t border-dashed border-neutral-200">
                  <Link href="/blog/securing-llm-rag-prompt-injection-data-leakage" className="block text-neutral-800 hover:text-primary font-medium transition-colors flex items-center justify-between">
                    <span>Securing LLM &amp; RAG Systems Whitepaper</span>
                    <ArrowUpRight size={13} className="text-neutral-400" />
                  </Link>
                  <Link href="/blog/kubernetes-hardening-container-security-guide" className="block text-neutral-800 hover:text-primary font-medium transition-colors flex items-center justify-between">
                    <span>Kubernetes Hardening Production Guide</span>
                    <ArrowUpRight size={13} className="text-neutral-400" />
                  </Link>
                </div>
              </div>

              <div className="p-7 bg-white border border-neutral-200/90 rounded-3xl space-y-4 shadow-sm text-left relative overflow-hidden group hover:border-neutral-400 transition-all">
                <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md uppercase tracking-wider">
                  Checklists
                </span>
                <h3 className="text-base font-bold text-neutral-900 font-sans tracking-tight">Developer Security Playbooks</h3>
                <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                  Actionable security checklists and engineering playbooks to help startup development teams build secure-by-default software.
                </p>
                <div className="space-y-2.5 pt-2 text-xs border-t border-dashed border-neutral-200">
                  <Link href="/checklist" className="block text-neutral-800 hover:text-primary font-medium transition-colors flex items-center justify-between">
                    <span>Interactive SaaS &amp; API Security Checklist</span>
                    <ArrowUpRight size={13} className="text-neutral-400" />
                  </Link>
                  <Link href="/sample-report" className="block text-neutral-800 hover:text-primary font-medium transition-colors flex items-center justify-between">
                    <span>Illustrative Sample Security Report</span>
                    <ArrowUpRight size={13} className="text-neutral-400" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Official Business Registration - CodeDale Dashed Container */}
          <div className="mb-20 bg-white border border-dashed border-neutral-300 rounded-3xl p-8 sm:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Details */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-xs font-mono font-bold text-primary uppercase tracking-wider">
                  <Award size={13} /> Govt. of India MSME Registration
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 font-sans tracking-tight">
                  Official Enterprise Registration: TRUSTLAYER LABS
                </h2>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
                  TrustLayerLabs is officially registered as a Micro Enterprise with the Ministry of Micro, Small and Medium Enterprises (MSME), Government of India.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs">
                  <div className="p-3.5 bg-neutral-50 border border-neutral-200 rounded-xl">
                    <span className="text-[10px] text-neutral-500 block uppercase">Udyam Registration No</span>
                    <span className="text-primary font-bold text-sm">UDYAM-AP-21-0044317</span>
                  </div>
                  <div className="p-3.5 bg-neutral-50 border border-neutral-200 rounded-xl">
                    <span className="text-[10px] text-neutral-500 block uppercase">Enterprise Classification</span>
                    <span className="text-neutral-900 font-bold">Micro (Services)</span>
                  </div>
                  <div className="p-3.5 bg-neutral-50 border border-neutral-200 rounded-xl">
                    <span className="text-[10px] text-neutral-500 block uppercase">National Industry Classification</span>
                    <span className="text-neutral-900 font-bold">NIC 6209 (IT &amp; Computer Services)</span>
                  </div>
                  <div className="p-3.5 bg-neutral-50 border border-neutral-200 rounded-xl">
                    <span className="text-[10px] text-neutral-500 block uppercase">Registration Authority</span>
                    <span className="text-neutral-900 font-bold">Ministry of MSME, Govt. of India</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a 
                    href="/trustlayerlabs-udyam-registration-certificate.jpg" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-white rounded-full text-xs font-bold uppercase tracking-wider font-sans shadow-sm transition-all"
                  >
                    <span>Open Full Certificate Document</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Certificate Image Frame */}
              <div className="lg:col-span-5 flex justify-center">
                <a 
                  href="/trustlayerlabs-udyam-registration-certificate.jpg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative block w-full max-w-sm rounded-2xl overflow-hidden border-2 border-neutral-200 hover:border-blue-400 transition-all shadow-md bg-white"
                  title="Click to view full certificate"
                >
                  <Image
                    src="/trustlayerlabs-udyam-registration-certificate.jpg"
                    alt="Official Udyam Registration Certificate - TRUSTLAYER LABS (UDYAM-AP-21-0044317)"
                    width={400}
                    height={560}
                    className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/30 transition-colors flex items-center justify-center pointer-events-none">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 bg-neutral-900 text-white rounded-full text-xs font-sans font-bold shadow-lg">
                      🔍 Click to Enlarge
                    </span>
                  </div>
                </a>
              </div>

            </div>
          </div>

          {/* Transparency Report & External Verdict */}
          <TransparencyVerdict />

        </div>
      </div>

      <CertificateModal 
        isOpen={!!selectedCert} 
        initialCertId={selectedCert || "c3sa"}
        onClose={() => setSelectedCert(null)} 
      />
    </div>
  );
}
