"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Mail, Shield, ShieldCheck, ArrowUpRight } from "lucide-react";
import { BRAND } from "@/lib/constants";
import ObfuscatedEmailLink from "@/components/ObfuscatedEmailLink";

const footerLinks = [
  {
    title: "Offensive Security",
    links: [
      { name: "API Security Testing", href: "/services/api-security" },
      { name: "FinTech Security Testing", href: "/fintech-security" },
      { name: "Web Application VAPT", href: "/services/web-app-vapt" },
      { name: "SaaS VAPT & Pentesting", href: "/services/saas-vapt" },
      { name: "Cloud Infrastructure Audit", href: "/services/cloud-security" },
      { name: "AI Application Security", href: "/services/ai-security" },
      { name: "GRC & Enterprise Readiness", href: "/grc-readiness" },
    ]
  },
  {
    title: "Resources & Trust",
    links: [
      { name: "Manual Pentesting vs Scanners", href: "/manual-vs-automated-pentest" },
      { name: "Testing Methodology", href: "/methodology" },
      { name: "Redacted Sample VAPT Report", href: "/sample-report" },
      { name: "Startup Security Checklist", href: "/checklist" },
      { name: "API Security Checklist", href: "/api-security-checklist" },
      { name: "Free JWT Decoder Tool", href: "/tools/jwt-decoder" },
      { name: "Security Research Scenarios", href: "/case-studies" },
      { name: "Partner Program", href: "/partnerships" },
      { name: "VAPT Services — Bangalore", href: "/vapt-bangalore" },
      { name: "VAPT Services — Hyderabad", href: "/vapt-hyderabad" },
    ]
  },
  {
    title: "Legal & Governance",
    links: [
      { name: "Mutual NDA & Confidentiality", href: "/nda-process" },
      { name: "Responsible Disclosure Policy", href: "/responsible-disclosure" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Contact & Scoping Portal", href: "/contact" }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="py-20 bg-[#FAFAFA] border-t border-dashed border-neutral-200 relative">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 sm:gap-16 mb-16">
          
          {/* Logo & Description */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block group" aria-label="TrustLayerLabs Home">
              <div className="rounded-2xl overflow-hidden border border-neutral-200 bg-[#0d0f14] shadow-sm transition-all duration-300 group-hover:scale-102 group-hover:border-blue-500 inline-flex items-center px-2 py-1">
                <Image 
                  src="/trustlayerlabs-vapt-footer-logo.png" 
                  alt="TrustLayerLabs - The Verified Trust Layer" 
                  width={180} 
                  height={48} 
                  loading="lazy"
                  unoptimized
                  className="h-10 sm:h-11 w-auto object-contain" 
                />
                <span className="sr-only">TrustLayerLabs — Home</span>
              </div>
            </Link>
            
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-sm font-sans">
              Practitioner-led manual penetration testing, API logic audits, and GRC readiness consulting for fast-growing SaaS, FinTech, and AI platforms globally.
            </p>

            <address className="not-italic text-xs text-neutral-600 space-y-1.5 font-sans border-t border-dashed border-neutral-200 pt-4">
              <p className="font-semibold text-neutral-900 uppercase tracking-wider text-[11px] font-mono flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" /> Remote-First Operations
              </p>
              <p>🌐 Serving B2B SaaS Founders Across India & Globally</p>
              <p className="text-[11px] font-mono text-neutral-500">Govt. of India Registered MSME · UDYAM-AP-21-0044317</p>
            </address>

            <div className="flex items-center space-x-3 pt-1">
              <Link 
                href={BRAND.contact.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-white border border-neutral-200 hover:border-blue-400 text-neutral-600 hover:text-blue-600 transition-colors flex items-center justify-center shadow-sm" 
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={16} />
                <span className="sr-only">TrustLayerLabs LinkedIn Profile</span>
              </Link>
              <ObfuscatedEmailLink 
                className="w-9 h-9 rounded-full bg-white border border-neutral-200 hover:border-blue-400 text-neutral-600 hover:text-blue-600 transition-colors flex items-center justify-center shadow-sm" 
                ariaLabel="Email support"
              >
                <Mail size={16} />
                <span className="sr-only">Email TrustLayerLabs Support</span>
              </ObfuscatedEmailLink>
            </div>

            {/* StartupBase Launch Badge */}
            <div className="pt-2">
              <a 
                href="https://startupbase.io/products/trustlayerlabs?utm_source=startupbase&utm_medium=badge&utm_campaign=launch-badge-light" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block transition-transform hover:scale-105"
                title="TrustLayerLabs launched on StartupBase"
              >
                <img 
                  src="https://statics.startupbase.io/site/badges/launched-on-sb.svg" 
                  alt="Launched on StartupBase" 
                  height="44" 
                  style={{ height: "44px", width: "auto" }} 
                  className="rounded-full shadow-sm border border-neutral-200"
                />
              </a>
            </div>
          </div>

          {/* Links Grid - CodeDale 3-column navigation */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
            {footerLinks.map((section) => (
              <div key={section.title} className="space-y-4">
                <p className="text-xs font-mono font-bold text-neutral-900 uppercase tracking-wider">
                  {section.title}
                </p>
                <ul className="space-y-2.5 font-sans text-xs">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href} 
                        {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="text-neutral-600 hover:text-blue-600 transition-colors font-sans text-xs font-medium inline-flex items-center gap-1 group"
                      >
                        <span>{link.name}</span>
                        {link.href.startsWith("http") && (
                          <ArrowUpRight size={11} className="text-neutral-400 group-hover:text-blue-600 transition-colors" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Ethical Assessment & Authorization Disclaimer Card */}
        <div className="p-6 bg-white border border-dashed border-neutral-300 rounded-2xl text-[11px] text-neutral-600 font-sans space-y-2 mb-10 shadow-sm">
          <p>
            <span className="font-semibold text-neutral-900">Ethical Assessment & Authorization Disclaimer:</span> TrustLayerLabs provides authorized cyber security assessment, penetration testing, and vulnerability research services strictly under executed mutual non-disclosure agreements (NDA) and formal Authorization-to-Test / Rules of Engagement (RoE) protocols with explicit system owner consent. We do not provide unauthorized access or intrusive testing without client authorization.
          </p>
          <div className="flex flex-wrap items-center justify-between text-[10px] font-mono text-neutral-500 pt-1 gap-2 border-t border-neutral-200">
            <span>Verified Status: Govt. of India Registered MSME (UDYAM-AP-21-0044317) · OWASP-Aligned Manual Security Testing</span>
            <span>Reviewed &amp; updated: <time dateTime="2026-10-04">October 2026</time> by Lead Security Architect</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-dashed border-neutral-300 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
            <span>&copy; {new Date().getFullYear()} TRUSTLAYERLABS. ALL RIGHTS RESERVED.</span>
            <span>•</span>
            <button
              type="button"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new Event("open-cookie-settings"));
                }
              }}
              className="hover:text-blue-600 transition-colors underline underline-offset-2 cursor-pointer"
            >
              Cookie Preferences
            </button>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-[11px] font-mono font-semibold text-neutral-600 uppercase tracking-wider">
            <span className="inline-flex items-center gap-1.5"><ShieldCheck size={13} className="text-emerald-600" /> RETEST VERIFICATION AVAILABLE</span>
            <span className="inline-flex items-center gap-1.5"><ShieldCheck size={13} className="text-blue-600" /> ISO 27001 &amp; SOC 2 READINESS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
