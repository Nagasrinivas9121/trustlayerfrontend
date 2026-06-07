"use client";

import React from "react";
import { SERVICES } from "@/lib/constants";
import { Clock, CheckSquare } from "lucide-react";
import Link from "next/link";

export default function Services() {
  return (
    <section className="py-24 bg-background relative" id="services">
      {/* Background Radial Glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="section-container">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-6">
            <span>Compliance & Security Auditing</span>
          </div>
          <h2 className="heading-2 mb-6">
            Enterprise Security Readiness for <span className="text-primary">SaaS & FinTech</span>
          </h2>
          <p className="body-text text-textSecondary">
            We perform comprehensive manual logic reviews, architecture validation, and GRC scoping to help startups secure their platforms and pass enterprise buyer reviews.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            // Severity Color
            const severityColor = 
              service.severity === "critical" ? "text-critical bg-critical/10 border-critical/20" :
              service.severity === "high" ? "text-warning bg-warning/10 border-warning/20" :
              "text-primary bg-primary/10 border-primary/20";

            return (
              <div 
                key={service.id} 
                className="premium-card p-8 flex flex-col justify-between group relative overflow-hidden bg-surface shadow-sm border border-border"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full pointer-events-none -z-10 group-hover:bg-primary/10 transition-colors" />
                
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-sans font-semibold uppercase tracking-wider text-textSecondary flex items-center gap-1.5">
                      <Clock size={13} className="text-primary" /> {service.duration}
                    </span>
                    <span className={`px-2 py-0.5 text-[10px] font-sans font-bold uppercase border rounded tracking-wider ${severityColor}`}>
                      {service.severity}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-textPrimary mb-3 tracking-tight font-sans group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-textSecondary leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Covered Technologies */}
                  <div className="mb-6">
                    <div className="text-xs font-bold text-textSecondary uppercase font-sans tracking-wider mb-2">Scope & Tech:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {service.technologies.slice(0, 4).map((tech, i) => (
                        <span key={i} className="px-2 py-0.5 bg-background border border-border/80 rounded text-xs font-mono text-textPrimary">
                          {tech}
                        </span>
                      ))}
                      {service.technologies.length > 4 && (
                        <span className="px-2 py-0.5 bg-background border border-border/80 rounded text-xs font-mono text-textSecondary">
                          +{service.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Key Deliverables */}
                  <div className="border-t border-border pt-4 mb-6">
                    <div className="text-xs font-bold text-textSecondary uppercase font-sans tracking-wider mb-2.5">Key Deliverables:</div>
                    <ul className="space-y-1.5">
                      {service.deliverables.slice(0, 3).map((item, index) => (
                        <li key={index} className="text-xs text-textPrimary flex items-start gap-2">
                          <CheckSquare size={13} className="text-primary mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-2">
                  <Link 
                    href="https://calendar.app.google/jnamj3gawxVunPJm9"
                    target="_blank"
                    className="w-full inline-flex items-center justify-center py-2.5 bg-surface border border-border hover:border-zinc-700 text-sm uppercase font-sans font-semibold tracking-wider rounded-lg hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
                  >
                    Request Proposal
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
