"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield, ShieldCheck, Target, Linkedin } from "lucide-react";
import TransparencyVerdict from "@/components/TransparencyVerdict";
import { TEAM } from "@/lib/constants";

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
            <div className="lg:col-span-12 space-y-8">
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
          </div>

          {/* Team Section */}
          <div className="space-y-8 mb-16">
            <h3 className="text-xl font-bold text-textPrimary tracking-tight font-sans">
              Our Leadership & Advisory Team
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {TEAM.map((member) => (
                <div key={member.name} className="premium-card p-6 bg-surface border border-border/80 rounded-2xl flex flex-col justify-between relative overflow-hidden shadow-sm">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full pointer-events-none" />
                  <div>
                    <div className="flex items-center justify-between gap-1.5 mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/30 flex items-center justify-center bg-primary/10 text-sm font-bold font-sans text-primary shadow-sm">
                        {member.initials}
                      </div>
                      {member.linkedin && (
                        <a 
                          href={member.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center gap-1 text-[8px] text-primary hover:text-accent font-semibold tracking-wider transition-colors bg-primary/10 hover:bg-primary/20 border border-primary/20 px-1.5 py-0.5 rounded-md flex-shrink-0"
                          title="Verify Profile on LinkedIn"
                        >
                          <Linkedin size={8} className="fill-current" />
                          Verify
                        </a>
                      )}
                    </div>
                    <h4 className="text-sm font-bold text-textPrimary tracking-tight font-sans">{member.name}</h4>
                    <p className="text-[10px] font-sans text-primary uppercase tracking-wider mt-0.5 mb-3">{member.role}</p>
                    <p className="text-xs text-textSecondary leading-relaxed font-sans mb-4">{member.bio}</p>
                  </div>
                  <div className="border-t border-border/40 pt-3 flex flex-wrap gap-1">
                    {member.credentials.map((cred) => (
                      <span key={cred} className="px-1.5 py-0.5 border border-primary/20 text-primary bg-primary/5 rounded text-[8px] font-mono font-bold uppercase tracking-wider">
                        {cred}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Research & Publications Section */}
          <div className="space-y-8 mb-16">
            <div className="flex items-center gap-3">
              <div className="h-[1px] flex-1 bg-border/60"></div>
              <h3 className="text-xl font-bold text-textPrimary tracking-tight font-sans text-center px-4 uppercase tracking-wider">
                Technical Research & Publications
              </h3>
              <div className="h-[1px] flex-1 bg-border/60"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="premium-card p-6 bg-surface border border-border/80 rounded-2xl space-y-4 shadow-sm text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full pointer-events-none" />
                <h4 className="text-sm font-bold text-textPrimary font-sans uppercase tracking-wider">API & Application Research</h4>
                <p className="text-xs text-textSecondary leading-relaxed">
                  We document common API authorization gaps, broken object-level access patterns, and developer remediation best practices.
                </p>
                <div className="space-y-3 pt-2 text-xs">
                  <a href="/blog/auditing-bola-idor-graphql-rest-apis" className="block text-primary hover:text-accent font-semibold transition-colors">
                    → Auditing BOLA/IDOR in REST & GraphQL
                  </a>
                  <a href="/blog/jwt-security-best-practices-attack-vectors" className="block text-primary hover:text-accent font-semibold transition-colors">
                    → JWT Security Best Practices & Exploits
                  </a>
                </div>
              </div>

              <div className="premium-card p-6 bg-surface border border-border/80 rounded-2xl space-y-4 shadow-sm text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full pointer-events-none" />
                <h4 className="text-sm font-bold text-textPrimary font-sans uppercase tracking-wider">AI & Infrastructure Security</h4>
                <p className="text-xs text-textSecondary leading-relaxed">
                  Technical guides on defending Generative AI applications, RAG pipelines, and containerized cloud architectures.
                </p>
                <div className="space-y-3 pt-2 text-xs">
                  <a href="/blog/securing-llm-rag-prompt-injection-data-leakage" className="block text-primary hover:text-accent font-semibold transition-colors">
                    → Securing LLM & RAG Systems Whitepaper
                  </a>
                  <a href="/blog/kubernetes-hardening-container-security-guide" className="block text-primary hover:text-accent font-semibold transition-colors">
                    → Kubernetes Hardening Production Guide
                  </a>
                </div>
              </div>

              <div className="premium-card p-6 bg-surface border border-border/80 rounded-2xl space-y-4 shadow-sm text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-success/5 rounded-bl-full pointer-events-none" />
                <h4 className="text-sm font-bold text-textPrimary font-sans uppercase tracking-wider">Developer Security Playbooks</h4>
                <p className="text-xs text-textSecondary leading-relaxed">
                  Actionable security checklists and engineering playbooks to help startup development teams build secure-by-default software.
                </p>
                <div className="space-y-3 pt-2 text-xs">
                  <a href="/checklist" className="block text-primary hover:text-accent font-semibold transition-colors">
                    → Interactive SaaS & API Security Checklist
                  </a>
                  <a href="/sample-report" className="block text-primary hover:text-accent font-semibold transition-colors">
                    → Illustrative Sample Security Report
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Official Business Registration Card */}
          <div className="mb-16 bg-surface border border-border/80 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-primary/10 border border-primary/20 rounded-md text-[10px] font-mono font-bold text-primary uppercase tracking-wider">
                Govt. of India MSME Registration
              </div>
              <h3 className="text-base font-bold text-textPrimary font-sans">
                Official Enterprise Registration: TRUSTLAYER LABS
              </h3>
              <p className="text-xs text-textSecondary leading-relaxed max-w-2xl font-sans">
                Registered under the Ministry of Micro, Small and Medium Enterprises (MSME), Government of India. 
                <span className="font-mono text-textPrimary ml-1 font-semibold">Udyam No: UDYAM-AP-21-0044317</span> • Classification: Micro Enterprise (Services — IT & Computer Security).
              </p>
            </div>
            <a 
              href="/trustlayerlabs-udyam-registration-certificate.jpg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 rounded-xl text-xs font-bold uppercase tracking-wider font-sans transition-all flex-shrink-0"
            >
              <span>View Udyam Certificate</span>
              <span>↗</span>
            </a>
          </div>

          {/* Transparency Report & External Verdict */}
          <TransparencyVerdict />

        </div>
      </main>
    </div>
  );
}
