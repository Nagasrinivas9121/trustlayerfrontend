"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Mail, Shield, ShieldCheck } from "lucide-react";
import { BRAND } from "@/lib/constants";
import ObfuscatedEmailLink from "@/components/ObfuscatedEmailLink";

const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "API Security Testing", href: "/services/api-security" },
      { name: "FinTech Security Testing", href: "/fintech-security" },
      { name: "GRC & Enterprise Readiness", href: "/grc-readiness" },
      { name: "Web Application VAPT", href: "/services/web-app-vapt" },
      { name: "SaaS VAPT & Pentesting", href: "/services/saas-vapt" },
      { name: "Cloud Security Audit", href: "/services/cloud-security" },
      { name: "AI Application Security", href: "/services/ai-security" },
    ]
  },
  {
    title: "Resources & Trust",
    links: [
      { name: "Testing Methodology", href: "/methodology" },
      { name: "Redacted Sample VAPT Report", href: "/sample-report" },
      { name: "Startup Security Checklist", href: "/checklist" },
      { name: "API Security Checklist", href: "/api-security-checklist" },
      { name: "Free JWT Decoder Tool", href: "/tools/jwt-decoder" },
      { name: "Security Scenarios", href: "/case-studies" },
      { name: "Partner Program", href: "/partnerships" },
      { name: "Verified on Sortlist", href: "https://www.sortlist.com/agency/trustlayerlabs" },
      { name: "DesignRush Agency Profile", href: "https://www.designrush.com/agency/profile/trustlayer-labs" },
      { name: "VAPT Services — Bangalore", href: "/vapt-bangalore" },
      { name: "VAPT Services — Hyderabad", href: "/vapt-hyderabad" },
    ]
  },
  {
    title: "Legal & Policies",
    links: [
      { name: "NDA & Confidentiality Policy", href: "/nda-process" },
      { name: "Responsible Disclosure Policy", href: "/responsible-disclosure" },
      { name: "Security & Editorial Policy", href: "/responsible-disclosure" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Contact & Scoping", href: "/contact" }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="py-20 bg-background border-t border-border relative">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-16">
          
          {/* Logo & Description */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block group" aria-label="TrustLayerLabs Home">
              <div className="rounded-xl overflow-hidden border border-border/80 bg-[#0d0f14] shadow-md transition-all duration-300 group-hover:scale-105 group-hover:border-primary/50 inline-flex items-center">
                <Image 
                  src="/trustlayerlabs-vapt-footer-logo.png" 
                  alt="TrustLayerLabs - The Verified Trust Layer" 
                  width={180} 
                  height={48} 
                  loading="lazy"
                  unoptimized
                  className="h-10 sm:h-12 w-auto object-contain" 
                />
                <span className="sr-only">TrustLayerLabs — Home</span>
              </div>
            </Link>
            
            <p className="text-xs text-textSecondary leading-relaxed max-w-sm font-sans">
              Premium expert-led manual logic reviews, API scoping, and GRC readiness consulting for fast-growing SaaS, fintech, and AI platforms.
            </p>

            <address className="not-italic text-[11px] text-textSecondary space-y-1 font-sans border-t border-border/40 pt-3">
              <p className="font-semibold text-textPrimary uppercase tracking-wider text-[10px]">Physical Labs & Operations</p>
              <p>📍 Bengaluru: Indiranagar Tech Corridor, Bengaluru, Karnataka 560038, India</p>
              <p>📍 Hyderabad: HITEC City, Hyderabad, Telangana 500081, India</p>
            </address>

            <div className="flex items-center space-x-5 pt-1">
              <Link href={BRAND.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-textPrimary transition-colors" aria-label="LinkedIn Profile">
                <Linkedin size={18} />
                <span className="sr-only">TrustLayerLabs LinkedIn Profile</span>
              </Link>
              <ObfuscatedEmailLink className="text-textSecondary hover:text-textPrimary transition-colors" ariaLabel="Email support">
                <Mail size={18} />
                <span className="sr-only">Email TrustLayerLabs Support</span>
              </ObfuscatedEmailLink>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            {footerLinks.map((section) => (
              <div key={section.title} className="space-y-6">
                <h4 className="text-[11px] font-semibold text-textPrimary uppercase tracking-wider font-sans">
                  {section.title}
                </h4>
                <ul className="space-y-3.5 font-sans text-xs">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href} 
                        {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="text-textSecondary hover:text-primary transition-colors font-sans text-xs font-medium"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* YMYL & Authorization Disclaimer */}
        <div className="pt-6 pb-6 text-[11px] text-textSecondary/80 font-sans border-t border-border/40 space-y-2">
          <p>
            <span className="font-semibold text-textPrimary">Ethical Assessment & Authorization Disclaimer:</span> TrustLayerLabs provides authorized cyber security assessment, penetration testing, and vulnerability research services strictly under executed mutual non-disclosure agreements (NDA) and formal Authorization-to-Test / Rules of Engagement (RoE) protocols with explicit system owner consent. We do not provide unauthorized access or intrusive testing without client authorization.
          </p>
          <div className="flex flex-wrap items-center justify-between text-[10px] text-textSecondary pt-1 gap-2">
            <span>Verified Credentials: ISO/IEC 27001:2022 Lead Auditor · CEH / OSCP Aligned · Govt. of India Registered MSME (UDYAM-AP-21-0044317) · <a href="https://www.sortlist.com/agency/trustlayerlabs" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors underline underline-offset-2">Verified on Sortlist (5.0 ★)</a></span>
            <span>Content technically reviewed &amp; updated: <time dateTime="2026-10-04">October 4, 2026</time> by Lead Security Architect</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/60 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap items-center gap-4 text-[10px] font-semibold text-textSecondary uppercase tracking-wider font-sans">
            <span>&copy; {new Date().getFullYear()} TRUSTLAYERLABS. ALL RIGHTS RESERVED.</span>
            <span>•</span>
            <button
              type="button"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new Event("open-cookie-settings"));
                }
              }}
              className="hover:text-primary transition-colors underline underline-offset-2 cursor-pointer"
            >
              Cookie Preferences
            </button>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-[10px] font-semibold text-textSecondary uppercase tracking-wider font-sans">
            <span className="flex items-center gap-1.5"><ShieldCheck size={12} className="text-primary" /> RETEST VERIFICATION AVAILABLE</span>
            <span className="flex items-center gap-1.5"><ShieldCheck size={12} className="text-primary" /> ISO 27001 READINESS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
