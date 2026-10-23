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
  Sparkles,
  ChevronRight,
  Check
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
  { id: "compliance", label: "GRC & Compliance Readiness" },
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
      <div className="pt-32 pb-24 font-sans text-neutral-900">
        <div className="section-container">
          
          {/* Top Breadcrumb & Header - CodeDale style */}
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
              <span>Assessment Catalogue</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-tight mb-5 font-sans">
              Offensive Security Testing &amp; <br className="hidden sm:inline" />
              <span className="text-primary">Compliance Readiness Scopes</span>
            </h1>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl font-sans">
              Practitioner-led manual penetration testing and compliance readiness scopes designed specifically for B2B SaaS, AI, and FinTech applications. We test the business logic attack paths automated scanners miss.
            </p>
          </div>

          {/* 1. PRIMARY OFFER ARCHITECTURE (Core ICP Engagement Options) */}
          <div className="mb-20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-dashed border-neutral-300 gap-2">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight font-sans">
                  Core Engagement Scopes
                </h2>
                <p className="text-xs sm:text-sm text-neutral-600 font-sans mt-1">
                  Structured assessment packages prioritized for high-growth SaaS and enterprise review deadlines
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-primary font-semibold uppercase bg-blue-50 border border-blue-200 px-3 py-1 rounded-full w-fit">
                <Sparkles size={12} /> 4 Core Options
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {CORE_PILLARS.map((pillar) => (
                <div 
                  key={pillar.id}
                  className="p-8 bg-white border border-neutral-200/90 rounded-3xl flex flex-col justify-between hover:border-neutral-400 hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)] transition-all shadow-[0_4px_24px_rgba(0,0,0,0.02)] group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-primary uppercase tracking-wider bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-md">
                        {pillar.badge}
                      </span>
                      <span className="px-3 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-wider bg-neutral-100 text-neutral-600 rounded-full border border-neutral-200">
                        Practitioner-Led
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-neutral-900 tracking-tight font-sans mb-1 group-hover:text-primary transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider font-sans mb-3">
                      {pillar.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans mb-6">
                      {pillar.description}
                    </p>

                    <div className="border-t border-dashed border-neutral-200 pt-4 mb-6">
                      <div className="text-[11px] font-mono font-bold text-neutral-700 uppercase tracking-wider mb-3">
                        Key Deliverables Included:
                      </div>
                      <ul className="space-y-2">
                        {pillar.deliverables.map((item, i) => (
                          <li key={i} className="text-xs text-neutral-700 flex items-start gap-2 font-sans">
                            <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200 mt-0.5">
                              <Check size={10} strokeWidth={3} />
                            </div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-dashed border-neutral-200 flex flex-col sm:flex-row items-center gap-3">
                    <Link
                      href="/free-assessment"
                      onClick={() => trackFreeReviewCtaClick(`services_core_${pillar.id}`, "Get a Free Security Scoping Review")}
                      className="w-full sm:flex-1 text-center py-3 px-5 bg-neutral-900 hover:bg-neutral-800 text-white text-xs uppercase font-sans font-bold tracking-wider rounded-full shadow-sm hover:shadow transition-all"
                    >
                      Schedule Scoping Review
                    </Link>
                    <Link
                      href={pillar.href}
                      className="w-full sm:w-auto text-center py-3 px-5 bg-neutral-100 hover:bg-neutral-200/80 border border-neutral-200 text-xs uppercase font-sans font-semibold tracking-wider rounded-full text-neutral-800 transition-all flex items-center justify-center gap-1 group"
                    >
                      <span>Scope Details</span>
                      <ChevronRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. CATEGORY FILTER TABS - CodeDale Pill Group */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-neutral-900 tracking-tight font-sans">
                  Detailed Service Catalogue
                </h2>
                <p className="text-xs sm:text-sm text-neutral-600 font-sans mt-0.5">
                  Filter by architecture component and target assessment focus
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 p-1.5 bg-neutral-100 rounded-2xl sm:rounded-full border border-neutral-200 w-fit">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider font-sans rounded-xl sm:rounded-full transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? "bg-neutral-900 text-white shadow-sm"
                      : "text-neutral-600 hover:text-neutral-900 hover:bg-white/60"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* 3. DETAILED SERVICES CARDS LIST */}
          <div className="space-y-6 mb-20">
            {filteredServices.map((service) => {
              const severityColor = 
                service.severity === "critical" ? "text-red-700 border-red-200 bg-red-50" :
                service.severity === "high" ? "text-amber-800 border-amber-200 bg-amber-50" :
                "text-blue-700 border-blue-200 bg-blue-50";

              return (
                <div 
                  key={service.id} 
                  id={service.id}
                  className="p-6 md:p-8 relative overflow-hidden bg-white border border-neutral-200/90 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:border-neutral-400 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left Column: Scope Info */}
                    <div className="lg:col-span-8 space-y-4">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider bg-blue-50 border border-blue-200/80 text-primary rounded-full flex items-center gap-1.5">
                          <Clock className="w-3 h-3" /> {service.duration}
                        </span>
                        <span className={`px-3 py-1 text-[10px] font-mono font-bold uppercase border rounded-full tracking-wider ${severityColor}`}>
                          Focus: {service.severity}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-neutral-900 font-sans tracking-tight mb-2">
                          {service.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
                          {service.description}
                        </p>
                      </div>

                      <div className="p-4 bg-neutral-50 border border-neutral-200/80 rounded-2xl space-y-1 font-sans text-xs">
                        <div className="text-[10px] uppercase font-mono tracking-wider text-primary font-bold">Methodology Outcome:</div>
                        <p className="text-neutral-800 leading-relaxed">{service.outcome}</p>
                      </div>
                    </div>

                    {/* Right Column: Tech & Deliverables */}
                    <div className="lg:col-span-4 space-y-4 lg:border-l lg:border-dashed lg:border-neutral-200 lg:pl-8">
                      <div>
                        <h4 className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wider mb-2">
                          Target Tech Stack:
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {service.technologies.slice(0, 5).map((tech, idx) => (
                            <span 
                              key={idx} 
                              className="px-2.5 py-1 bg-neutral-100 border border-neutral-200 rounded-md text-[10px] font-mono text-neutral-800"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="border-t border-dashed border-neutral-200 pt-3">
                        <h4 className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wider mb-2">
                          Deliverables:
                        </h4>
                        <ul className="space-y-1.5 text-xs text-neutral-600 font-sans">
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
                          onClick={() => trackFreeReviewCtaClick(`service_card_${service.slug}`, "Get a Free Security Scoping Review")}
                          className="w-full inline-flex items-center justify-center py-2.5 bg-neutral-900 hover:bg-neutral-800 text-xs uppercase font-sans font-bold tracking-wider rounded-full text-white shadow-sm transition-all"
                        >
                          Request Scope Review
                        </Link>
                        <Link 
                          href={`/services/${service.slug}`}
                          onClick={() => trackServiceView(service.slug, service.title)}
                          className="w-full inline-flex items-center justify-center py-2.5 bg-neutral-100 hover:bg-neutral-200/80 border border-neutral-200 text-xs uppercase font-sans font-semibold tracking-wider rounded-full text-neutral-800 transition-all"
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

          {/* 4. BOTTOM ACTION & SAMPLE REPORT CALLOUT - CodeDale Dashed Box */}
          <div className="p-8 sm:p-12 bg-white border border-dashed border-neutral-300 rounded-3xl text-center space-y-6 max-w-4xl mx-auto shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-neutral-100 rounded-full text-xs font-mono font-bold text-neutral-700 uppercase tracking-wider">
              <ShieldCheck size={13} className="text-primary" /> Architecture Consultation
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 font-sans">
              Not Sure Which Scope Fits Your Architecture?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 max-w-xl mx-auto font-sans leading-relaxed">
              Schedule a 30-minute scoping review under mutual NDA. We&apos;ll examine your architecture, user roles, and compliance requirements to provide a tailored assessment scope.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/free-assessment"
                onClick={() => trackFreeReviewCtaClick("services_bottom_cta", "Get a Free Security Scoping Review")}
                className="w-full sm:w-auto px-8 py-3.5 bg-primary hover:bg-blue-700 text-white text-xs uppercase font-sans font-bold tracking-wider rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span>Get a Free Security Scoping Review</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/sample-report"
                onClick={() => trackSampleReportCtaClick("services_bottom_cta", "View the Sample Assessment Report")}
                className="w-full sm:w-auto px-8 py-3.5 bg-neutral-100 hover:bg-neutral-200/80 border border-neutral-200 text-xs uppercase font-sans font-semibold tracking-wider rounded-full text-neutral-800 transition-all flex items-center justify-center gap-2"
              >
                <span>View Sample Assessment Report</span>
                <FileText size={14} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
