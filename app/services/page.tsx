"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Clock, ShieldCheck } from "lucide-react";
import { SERVICES } from "@/lib/constants";

export default function ServicesPage() {
  return (
    <div className="bg-background min-h-screen">
      <main className="pt-32 pb-24 font-sans">
        <div className="section-container">
          
          {/* Top Breadcrumb & Header */}
          <div className="mb-16">
            <Link 
              href="/" 
              className="inline-flex items-center text-xs uppercase font-sans tracking-widest text-textSecondary hover:text-textPrimary transition-colors gap-2 mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
              Back to Home
            </Link>

            <h1 className="heading-1 mb-6 text-textPrimary">
              VAPT & API <span className="text-primary">Security Scopes</span>
            </h1>
            <p className="body-text text-base max-w-3xl">
              A comprehensive technical overview of our defensive capabilities, tools, and testing timelines designed for SaaS startups and fintech companies.
            </p>
          </div>

          {/* Detailed Cards List */}
          <div className="space-y-12">
            {SERVICES.map((service, i) => {
              const Icon = ShieldCheck;
              const severityColor = 
                service.severity === "critical" ? "text-critical border-critical/20 bg-critical/5" :
                service.severity === "high" ? "text-warning border-warning/20 bg-warning/5" :
                "text-primary border-primary/20 bg-primary/5";

              return (
                <div 
                  key={service.id} 
                  id={service.id}
                  className="premium-card p-8 md:p-12 relative overflow-hidden bg-surface border border-border rounded-2xl shadow-sm"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left Column: Scope Info */}
                    <div className="lg:col-span-8 space-y-6">
                      <div className="flex flex-wrap items-center gap-4">
                        <span className="px-2.5 py-1 text-[9px] font-sans font-bold uppercase tracking-wider bg-primary/10 border border-primary/25 text-primary rounded-md flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" /> {service.duration}
                        </span>
                        <span className={`px-2.5 py-1 text-[9px] font-sans font-bold uppercase border rounded-md tracking-wider ${severityColor}`}>
                          Risk Focus: {service.severity}
                        </span>
                      </div>

                      <h2 className="text-xl md:text-2xl font-bold text-textPrimary font-sans tracking-tight">
                        {service.title}
                      </h2>

                      <p className="text-xs md:text-sm text-textSecondary leading-relaxed font-sans">
                        {service.description}
                      </p>

                      <div className="p-5 bg-zinc-50 border border-border rounded-xl space-y-3 font-sans text-xs">
                        <div className="text-[10px] uppercase tracking-wider text-primary font-bold">Methodology Outcome:</div>
                        <p className="text-textPrimary">{service.outcome}</p>
                      </div>
                    </div>

                    {/* Right Column: Tech & Deliverables */}
                    <div className="lg:col-span-4 space-y-6 lg:border-l lg:border-border/40 lg:pl-8">
                      <div>
                        <h4 className="text-[10px] font-bold text-textSecondary uppercase font-sans tracking-wider mb-3">
                          Tools & Ecosystem:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, idx) => (
                            <span 
                              key={idx} 
                              className="px-2.5 py-1 bg-zinc-100 border border-border rounded-md text-[10px] font-mono text-textPrimary"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="border-t border-border/40 pt-4">
                        <h4 className="text-[10px] font-bold text-textSecondary uppercase font-sans tracking-wider mb-3">
                          Audit Deliverables:
                        </h4>
                        <ul className="space-y-2 text-xs text-textPrimary font-sans">
                          {service.deliverables.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 leading-relaxed">
                              <span className="text-primary font-bold mt-0.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2">
                        <Link 
                          href="/contact"
                          className="w-full inline-flex items-center justify-center py-3 bg-primary hover:bg-primary-hover text-xs uppercase font-sans font-semibold tracking-wider rounded-lg text-white shadow-sm transition-all"
                        >
                          Request Scoping Document
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </main>
    </div>
  );
}
