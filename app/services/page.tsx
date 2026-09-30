"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Lock, 
  Shield, 
  FileText, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Landmark,
  Cloud,
  Scale
} from "lucide-react";
import { SERVICES, CORE_PILLARS } from "@/lib/constants";
import { 
  trackFreeReviewCtaClick, 
  trackSampleReportCtaClick, 
  trackServiceView 
} from "@/lib/analytics";

const categories = [
  { id: "all", label: "All Scopes" },
  { id: "app-api", label: "API & Web Security" },
  { id: "specialized", label: "SaaS, AI & FinTech" },
  { id: "cloud", label: "Cloud & Infrastructure" },
  { id: "compliance", label: "GRC & Enterprise Readiness" },
];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredServices = SERVICES.filter((service) => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "app-api") {
      return ["web-app-vapt", "api-security", "mobile-vapt", "graphql-security", "owasp-api-security"].includes(service.slug);
    }
    if (selectedCategory === "specialized") {
      return ["saas-vapt", "ai-security", "fintech-vapt", "smart-contract-audit"].includes(service.slug);
    }
    if (selectedCategory === "cloud") {
      return ["cloud-security", "kubernetes-security", "network-pentesting", "aws-security", "gcp-security", "azure-security"].includes(service.slug);
    }
    if (selectedCategory === "compliance") {
      return ["startup-security", "soc2-pentesting", "iso-27001-vapt", "pci-dss-pentesting", "hipaa-vapt"].includes(service.slug);
    }
    return true;
  });

  return (
    <div className="bg-background min-h-screen">
      <main className="pt-32 pb-24 font-sans text-textPrimary">
        <div className="section-container">
          
          {/* Top Breadcrumb & Header */}
          <div className="mb-14">
            <Link 
              href="/" 
              className="inline-flex items-center text-xs uppercase font-sans tracking-widest text-textSecondary hover:text-textPrimary transition-colors gap-2 mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
              Back to Home
            </Link>

            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-6">
              <Layers size={13} className="text-primary" />
              <span>Assessment Catalogue</span>
            </div>

            <h1 className="heading-1 mb-6 text-textPrimary font-extrabold tracking-tight">
              Security Testing & <span className="text-primary">Readiness Scopes</span>
            </h1>
            <p className="body-text text-base max-w-3xl text-textSecondary leading-relaxed">
              Practitioner-led manual penetration testing and compliance readiness scopes designed specifically for B2B SaaS, AI, and FinTech applications. We test the attack paths automated tools miss.
            </p>
          </div>

          {/* 1. PRIMARY OFFER ARCHITECTURE (Core ICP Engagement Options) */}
          <div className="mb-20">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-border/80">
              <div>
                <h2 className="text-lg font-bold text-textPrimary uppercase tracking-wider font-sans">
                  Core Engagement Scopes
                </h2>
                <p className="text-xs text-textSecondary font-sans mt-0.5">
                  Structured assessment packages prioritized for high-growth startups
                </p>
              </div>
              <span className="hidden sm:inline-block text-[11px] font-mono text-primary font-semibold uppercase">
                4 Defined Options
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CORE_PILLARS.map((pillar) => (
                <div 
                  key={pillar.id}
                  className="p-7 md:p-8 bg-surface border border-border rounded-2xl flex flex-col justify-between hover:border-zinc-400 transition-all shadow-sm group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full pointer-events-none group-hover:bg-primary/10 transition-colors" />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-primary uppercase tracking-wider">
                        {pillar.badge}
                      </span>
                      <span className="px-2.5 py-0.5 text-[9px] font-sans font-bold uppercase tracking-wider bg-background border border-border text-textSecondary rounded-md">
                        Practitioner-Led
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-textPrimary tracking-tight font-sans mb-1 group-hover:text-primary transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-xs font-semibold text-textSecondary uppercase tracking-wider font-sans mb-3">
                      {pillar.tagline}
                    </p>

                    <p className="text-xs text-textSecondary leading-relaxed font-sans mb-6">
                      {pillar.description}
                    </p>

                    <div className="border-t border-border/60 pt-4 mb-6">
                      <div className="text-[10px] font-bold text-textPrimary uppercase tracking-wider font-sans mb-2.5">
                        Key Deliverables:
                      </div>
                      <ul className="space-y-2">
                        {pillar.deliverables.map((item, i) => (
                          <li key={i} className="text-xs text-textSecondary flex items-start gap-2">
                            <CheckCircle2 size={13} className="text-primary mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/60 flex items-center gap-3">
                    <Link
                      href="/free-assessment"
                      onClick={() => trackFreeReviewCtaClick(`services_core_${pillar.id}`, "Get a Free Security Review")}
                      className="flex-1 text-center py-2.5 px-4 bg-primary hover:bg-primary-hover text-white text-xs uppercase font-sans font-bold tracking-wider rounded-lg shadow-sm transition-all"
                    >
                      Get a Free Security Review
                    </Link>
                    <Link
                      href={pillar.href}
                      className="text-center py-2.5 px-4 bg-background border border-border hover:border-zinc-400 text-xs uppercase font-sans font-semibold tracking-wider rounded-lg text-textPrimary hover:text-primary transition-all"
                    >
                      Scope Details →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. CATEGORY FILTER TABS */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-bold text-textPrimary uppercase tracking-wider font-sans">
                  Detailed Service Catalogue
                </h2>
                <p className="text-xs text-textSecondary font-sans mt-0.5">
                  Filter by architecture component and target assessment focus
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider font-sans rounded-xl border transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? "bg-primary text-white border-primary shadow-sm"
                      : "bg-surface border-border hover:border-zinc-400 text-textSecondary hover:text-textPrimary"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* 3. DETAILED SERVICES CARDS LIST */}
          <div className="space-y-8 mb-20">
            {filteredServices.map((service) => {
              const severityColor = 
                service.severity === "critical" ? "text-critical border-critical/20 bg-critical/5" :
                service.severity === "high" ? "text-warning border-warning/20 bg-warning/5" :
                "text-primary border-primary/20 bg-primary/5";

              return (
                <div 
                  key={service.id} 
                  id={service.id}
                  className="premium-card p-6 md:p-8 relative overflow-hidden bg-surface border border-border rounded-2xl shadow-sm hover:border-zinc-400 transition-all"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left Column: Scope Info */}
                    <div className="lg:col-span-8 space-y-5">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="px-2.5 py-1 text-[9px] font-sans font-bold uppercase tracking-wider bg-primary/10 border border-primary/25 text-primary rounded-md flex items-center gap-1.5">
                          <Clock className="w-3 h-3" /> {service.duration}
                        </span>
                        <span className={`px-2.5 py-1 text-[9px] font-sans font-bold uppercase border rounded-md tracking-wider ${severityColor}`}>
                          Focus: {service.severity}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-textPrimary font-sans tracking-tight mb-2">
                          {service.title}
                        </h3>
                        <p className="text-xs md:text-sm text-textSecondary leading-relaxed font-sans">
                          {service.description}
                        </p>
                      </div>

                      <div className="p-4 bg-background border border-border/70 rounded-xl space-y-1.5 font-sans text-xs">
                        <div className="text-[10px] uppercase tracking-wider text-primary font-bold">Methodology Outcome:</div>
                        <p className="text-textPrimary leading-relaxed">{service.outcome}</p>
                      </div>
                    </div>

                    {/* Right Column: Tech & Deliverables */}
                    <div className="lg:col-span-4 space-y-5 lg:border-l lg:border-border/60 lg:pl-8">
                      <div>
                        <h4 className="text-[10px] font-bold text-textSecondary uppercase font-sans tracking-wider mb-2.5">
                          Tools & Ecosystem:
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {service.technologies.slice(0, 5).map((tech, idx) => (
                            <span 
                              key={idx} 
                              className="px-2 py-0.5 bg-background border border-border/80 rounded text-[10px] font-mono text-textPrimary"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="border-t border-border/60 pt-3">
                        <h4 className="text-[10px] font-bold text-textSecondary uppercase font-sans tracking-wider mb-2">
                          Deliverables:
                        </h4>
                        <ul className="space-y-1.5 text-xs text-textSecondary font-sans">
                          {service.deliverables.slice(0, 3).map((item, idx) => (
                            <li key={idx} className="flex items-start gap-1.5 leading-relaxed">
                              <span className="text-primary font-bold mt-0.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2 flex flex-col gap-2">
                        <Link 
                          href="/free-assessment"
                          onClick={() => trackFreeReviewCtaClick(`service_card_${service.slug}`, "Get a Free Security Review")}
                          className="w-full inline-flex items-center justify-center py-2 bg-primary hover:bg-primary-hover text-xs uppercase font-sans font-bold tracking-wider rounded-lg text-white shadow-sm transition-all"
                        >
                          Get a Free Security Review
                        </Link>
                        <Link 
                          href={`/services/${service.slug}`}
                          onClick={() => trackServiceView(service.slug, service.title)}
                          className="w-full inline-flex items-center justify-center py-2 bg-background border border-border hover:border-zinc-400 text-xs uppercase font-sans font-semibold tracking-wider rounded-lg text-textPrimary hover:text-primary transition-all"
                        >
                          Explore Details →
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* 4. BOTTOM ACTION & SAMPLE REPORT CALLOUT */}
          <div className="p-8 md:p-12 bg-surface border border-border rounded-3xl text-center space-y-6 max-w-4xl mx-auto shadow-sm">
            <h3 className="heading-2 font-sans">
              Not Sure Which Scope Fits Your Architecture?
            </h3>
            <p className="text-xs sm:text-sm text-textSecondary max-w-xl mx-auto font-sans leading-relaxed">
              Schedule a 20-minute scoping review under mutual NDA. We'll examine your architecture, user roles, and compliance requirements to provide a tailored assessment scope.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/free-assessment"
                onClick={() => trackFreeReviewCtaClick("services_bottom_cta", "Get a Free Security Review")}
                className="w-full sm:w-auto px-8 py-3.5 bg-primary hover:bg-primary-hover text-white text-xs uppercase font-sans font-bold tracking-wider rounded-full shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Get a Free Security Review</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/sample-report"
                onClick={() => trackSampleReportCtaClick("services_bottom_cta", "View Sample Report")}
                className="w-full sm:w-auto px-8 py-3.5 bg-background border border-border hover:border-zinc-400 text-xs uppercase font-sans font-semibold tracking-wider rounded-full text-textPrimary hover:text-primary transition-all flex items-center justify-center gap-2"
              >
                <span>View Sample Report</span>
                <FileText size={14} />
              </Link>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
