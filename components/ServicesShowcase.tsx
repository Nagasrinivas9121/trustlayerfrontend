"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Shield, Layers, Globe, Cpu, Cloud, Smartphone, CheckCircle, DollarSign, Code } from "lucide-react";

interface ServiceItem {
  id: string;
  name: string;
  category: string;
  href: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
}

const SERVICES: ServiceItem[] = [
  {
    id: "api-security",
    name: "API Security Testing",
    category: "REST & GraphQL",
    href: "/services/api-security",
    description: "OWASP API Top 10 testing targeting BOLA, broken function authorization, and JWT token flaws.",
    icon: <Layers size={22} className="text-primary" />,
    tags: ["BOLA", "GraphQL", "JWT"],
  },
  {
    id: "saas-vapt",
    name: "SaaS Penetration Testing",
    category: "Multi-Tenant Isolation",
    href: "/services/saas-vapt",
    description: "Multi-tenant database boundary, row-level security (RLS), and horizontal privilege scaling testing.",
    icon: <Shield size={22} className="text-blue-600" />,
    tags: ["Tenancy", "RBAC", "RLS"],
  },
  {
    id: "web-app-vapt",
    name: "Web Application VAPT",
    category: "Single Page Apps",
    href: "/services/web-app-vapt",
    description: "Deep manual penetration testing for modern React, Next.js, and server-side web applications.",
    icon: <Globe size={22} className="text-indigo-600" />,
    tags: ["Next.js", "CSRF", "XSS"],
  },
  {
    id: "ai-security",
    name: "AI & LLM Application Security",
    category: "RAG & Agent Vectors",
    href: "/services/ai-security",
    description: "Vulnerability assessment for LLM pipelines, prompt injection, and vector database isolation.",
    icon: <Cpu size={22} className="text-purple-600" />,
    tags: ["LLM", "Prompt Injection", "RAG"],
  },
  {
    id: "cloud-security",
    name: "Cloud Security Assessment",
    category: "AWS & GCP Hardening",
    href: "/services/cloud-security",
    description: "Configuration and IAM architecture review against CIS benchmarks to eliminate privilege creep.",
    icon: <Cloud size={22} className="text-sky-600" />,
    tags: ["AWS", "IAM", "CIS"],
  },
  {
    id: "mobile-vapt",
    name: "Mobile Application VAPT",
    category: "iOS & Android",
    href: "/services/mobile-vapt",
    description: "Static and dynamic penetration testing for iOS and Android apps following OWASP MASVS.",
    icon: <Smartphone size={22} className="text-emerald-600" />,
    tags: ["APK", "IPA", "MASVS"],
  },
  {
    id: "grc-readiness",
    name: "GRC & SOC 2 Readiness",
    category: "Enterprise Audits",
    href: "/grc-readiness",
    description: "Technical control mapping and security readiness testing for SOC 2 Type II and ISO 27001.",
    icon: <CheckCircle size={22} className="text-teal-600" />,
    tags: ["SOC 2", "ISO 27001", "Vendor Audits"],
  },
  {
    id: "fintech-security",
    name: "FinTech & Payment Auditing",
    category: "Financial Workflows",
    href: "/fintech-security",
    description: "Payment state transitions, ledger race conditions, and webhook replay protection audits.",
    icon: <DollarSign size={22} className="text-amber-600" />,
    tags: ["Webhooks", "Race Conditions", "Ledgers"],
  },
  {
    id: "web-development",
    name: "Secure Web Development",
    category: "Hardened Engineering",
    href: "/services/web-development",
    description: "Production-ready, high-performance web applications built with OWASP security integrated from day one.",
    icon: <Code size={22} className="text-rose-600" />,
    tags: ["React", "Hardened", "Fullstack"],
  },
];

export default function ServicesShowcase() {
  return (
    <div id="services" className="w-full bg-[#FAFAFA] px-4 sm:px-6 py-20 border-t border-dashed border-neutral-200">
      <section className="max-w-[1140px] mx-auto dashed-x-custom w-full flex flex-col items-center justify-center px-4">
        
        {/* Section Header */}
        <div className="w-full max-w-xl mx-auto flex flex-col items-center justify-center text-center py-8 sm:py-12 gap-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/80 shadow-sm text-xs font-semibold text-neutral-800 mb-2">
            <Layers size={14} className="text-primary" />
            <span>Core Assessment Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 mb-3">
            Solutions Tailored for Your Growth
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-md">
            Full-service manual offensive security offerings — crafted to deliver verifiable protection and enterprise credibility:
          </p>
        </div>

        {/* Desktop 3x3 Grid with CodeDale Signature Overlapping Badge Hover (hidden on mobile) */}
        <div className="hidden md:grid grid-cols-3 w-full gap-y-12 gap-x-8 items-center justify-center py-12 px-6 dashed-y-custom">
          {SERVICES.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="relative flex flex-col gap-4 items-center justify-center w-full p-4 group cursor-pointer"
            >
              {/* Overlapping Floating Mini Cards (CodeDale Style) */}
              <div className="flex items-center justify-center relative h-16 w-32">
                {/* Left Mini Card */}
                <div className="group/card size-full -rotate-12 translate-x-3 z-10 transition-transform duration-300 group-hover:-translate-y-2 group-hover:-rotate-6">
                  <div className="w-16 h-12 bg-white rounded-xl border border-black/10 filter-shadow flex items-center justify-center shadow-sm">
                    {item.icon}
                  </div>
                </div>

                {/* Right Mini Card */}
                <div className="group/card size-full rotate-12 -translate-x-3 transition-transform duration-300 group-hover:-translate-y-2 group-hover:rotate-6">
                  <div className="w-16 h-12 bg-neutral-950 text-white rounded-xl border border-black/10 filter-shadow flex items-center justify-center shadow-sm">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary">
                      TL
                    </span>
                  </div>
                </div>
              </div>

              {/* Service Title */}
              <div className="text-center group-hover:-translate-y-1 transition-transform duration-300">
                <span className="inline-block text-[16px] font-bold tracking-tight text-neutral-900 leading-snug">
                  {item.name}
                </span>
                <p className="text-xs text-neutral-500 font-medium mt-1">
                  {item.category}
                </p>
              </div>

              {/* Hover Badge Pill */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5 text-xs font-semibold text-primary">
                <span>View Scope &amp; Methodology</span>
                <ArrowRight size={13} />
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile Pills Showcase (CodeDale Responsive Style) */}
        <div className="w-full flex md:hidden items-center flex-wrap justify-center gap-2.5 py-8 px-2 dashed-y-custom">
          {SERVICES.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="py-2.5 px-4 bg-white border border-black/5 text-[13px] font-semibold text-neutral-800 rounded-full shadow-xs active:scale-95 transition-transform flex items-center gap-1.5"
            >
              <span>{item.name}</span>
              <ArrowRight size={12} className="text-primary" />
            </Link>
          ))}
        </div>

      </section>
    </div>
  );
}
