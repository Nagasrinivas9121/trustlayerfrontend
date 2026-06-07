import React from "react";
import Link from "next/link";
import { Linkedin, Mail, Shield, ShieldCheck } from "lucide-react";
import { BRAND } from "@/lib/constants";

const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "API Security Testing", href: "/services#api-security" },
      { name: "VAPT Audit Services", href: "/services#vapt" },
      { name: "Cloud Configuration Audit", href: "/services#cloud-security" },
      { name: "SOC2 & ISO 27001 readiness", href: "/services#soc2-readiness" },
      { name: "Secure Code Review", href: "/services#secure-code-review" },
    ]
  },
  {
    title: "Resources & GRC",
    links: [
      { name: "Case Studies Portfolio", href: "/case-studies" },
      { name: "Security Checklist", href: "/checklist" },
      { name: "LinkedIn Post Templates", href: "/linkedin" },
      { name: "VAPT Bangalore Hub", href: "/vapt-bangalore" },
      { name: "VAPT Hyderabad Hub", href: "/vapt-hyderabad" },
    ]
  },
  {
    title: "Legal & Attestation",
    links: [
      { name: "Privacy Policy Document", href: "/privacy" },
      { name: "Terms of Service Agreement", href: "/terms" },
      { name: "Intake Consultation", href: "/contact" }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="py-20 bg-background border-t border-border relative">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Logo & Description */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center space-x-2.5 group">
              <div className="w-8 h-8 flex items-center justify-center rounded-full overflow-hidden border border-border bg-black shadow-sm transition-all group-hover:scale-105">
                <img src="/logo.jpeg" alt="TrustLayerLabs Logo" className="w-full h-full object-cover scale-[1.3]" />
              </div>
              <span className="text-sm font-bold text-textPrimary tracking-wider uppercase">
                Trust<span className="text-primary">Layer</span><span className="text-[10px] text-textSecondary font-light lowercase font-sans">.labs</span>
              </span>
            </Link>
            
            <p className="text-xs text-textSecondary leading-relaxed max-w-sm font-sans">
              Premium expert-led manual logic reviews, API scoping, and GRC readiness consulting for fast-growing SaaS, fintech, and AI platforms.
            </p>

            <div className="flex items-center space-x-5 pt-2">
              <Link href={BRAND.contact.linkedin} target="_blank" className="text-textSecondary hover:text-textPrimary transition-colors" aria-label="LinkedIn Profile">
                <Linkedin size={18} />
              </Link>
              <Link href={`mailto:${BRAND.contact.email}`} className="text-textSecondary hover:text-textPrimary transition-colors" aria-label="Email support">
                <Mail size={18} />
              </Link>
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

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-border/60 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-semibold text-textSecondary uppercase tracking-wider font-sans">
            &copy; {new Date().getFullYear()} TRUSTLAYERLABS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-[10px] font-semibold text-textSecondary uppercase tracking-wider font-sans">
            <span className="flex items-center gap-1.5"><ShieldCheck size={12} className="text-primary" /> PENTEST ATTESTATION ISSUED</span>
            <span className="flex items-center gap-1.5"><ShieldCheck size={12} className="text-primary" /> ISO 27001 READY</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
