import React from "react";
import Link from "next/link";
import { Linkedin, Github, Mail, Shield } from "lucide-react";
import { BRAND } from "@/lib/constants";

const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "API Security", href: "#services" },
      { name: "Web App Testing", href: "#services" },
      { name: "SaaS Audit", href: "#services" },
      { name: "AI Security", href: "#services" },
      { name: "GRC Compliance", href: "#services" },
    ]
  },
  {
    title: "Company",
    links: [
      { name: "Case Studies", href: "#cases" },
      { name: "Blog", href: "/blog" },
      { name: "Trust", href: "#trust" },
    ]
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ]
  }
];

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-20 bg-background border-t border-border/40">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center space-x-3 mb-8 group">
              <div className="relative w-10 h-10 overflow-hidden rounded-md border border-border/50 group-hover:border-primary/50 transition-colors">
                <Image 
                  src="/logo.jpeg" 
                  alt="TrustLayerLabs Logo" 
                  fill 
                  className="object-cover"
                />
              </div>
              <span className="text-lg font-semibold text-white tracking-tight uppercase">{BRAND.name}</span>
            </Link>
            <p className="body-text max-w-sm mb-10">
              Expert-led offensive security for scaling SaaS and AI platforms. Protect your innovation with deep manual analysis.
            </p>
            <div className="flex items-center space-x-6">
              <Link href={BRAND.contact.linkedin} target="_blank" className="text-slate-500 hover:text-white transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="text-slate-500 hover:text-white transition-colors">
                <Github size={20} />
              </Link>
              <Link href={`mailto:${BRAND.contact.email}`} className="text-slate-500 hover:text-white transition-colors">
                <Mail size={20} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="text-[11px] font-bold text-white uppercase tracking-widest mb-8">{section.title}</h4>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-sm font-medium text-slate-500 hover:text-primary transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-12 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} TRUSTLAYERLABS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center space-x-2 text-[10px] font-bold text-slate-600 uppercase tracking-widest">
            <Shield size={12} className="text-primary/60" />
            <span>Secured via offensive research</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
