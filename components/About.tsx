"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Target, Lock, Award, CheckCircle } from "lucide-react";
import Image from "next/image";

const certifications = [
  { name: "OSCP", authority: "Offensive Security Certified Professional", color: "border-critical/30 text-critical bg-critical/5" },
  { name: "CEH", authority: "Certified Ethical Hacker", color: "border-primary/30 text-accent bg-primary/5" },
  { name: "eWPT", authority: "eLearnSecurity Web Penetration Tester", color: "border-success/30 text-success bg-success/5" },
  { name: "Security+", authority: "CompTIA Security+", color: "border-warning/30 text-warning bg-warning/5" }
];

const highlights = [
  {
    icon: Target,
    title: "100% Manual Logical Pentesting",
    desc: "We focus on IDORs, authentication bypasses, privilege escalation, and multi-tenant boundary breaches that automated scanners miss."
  },
  {
    icon: Lock,
    title: "Tailored SaaS & API Scopes",
    desc: "Securing GraphQL resolver limitations, gRPC rate-limiting logic, and Docker/K8s cloud orchestration settings from day one."
  },
  {
    icon: Shield,
    title: "SOC2 & ISO 27001 Enablement",
    desc: "Our reports map directly to compliance controls. Get clean VAPT attestation letters and speed up enterprise sales cycles."
  }
];

export default function About() {
  return (
    <section className="py-24 bg-[#141720]/45 border-t border-border/60 relative" id="about">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Founder & Mission */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border/80 rounded-full text-[10px] font-bold text-accent uppercase tracking-widest mb-8">
              <span>Why TrustLayerLabs</span>
            </div>

            <h2 className="heading-2 mb-6">
              Securing the next generation of <span className="text-accent">Indian SaaS & FinTech</span>
            </h2>

            <p className="body-text text-base mb-8">
              TrustLayerLabs is an elite boutique cybersecurity firm founded by seasoned security researchers. We partner with fast-growing Indian startups to protect API pathways, secure multi-tenant architectures, and achieve institutional trust.
            </p>

            {/* Founder Profile Card */}
            <div className="w-full bg-[#0D0F14]/80 border border-border/60 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6 mb-8">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-primary/30 flex-shrink-0 bg-surface">
                {/* Fallback avatar visual */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-mono font-bold text-xl">
                  NS
                </div>
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">Nagasrinivasa Rao</h4>
                <p className="text-[10px] font-mono text-accent uppercase tracking-widest">Founder & Lead Security Architect</p>
                <p className="text-xs text-textSecondary mt-2 leading-relaxed">
                  Offensive security specialist with 8+ years auditing SaaS applications, core payment gateways, and container systems. Ex-enterprise red team lead.
                </p>
              </div>
            </div>

            {/* Certifications badges grid */}
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-textSecondary mb-4">
                Elite Certifications & Standards:
              </p>
              <div className="flex flex-wrap gap-2.5">
                {certifications.map((cert) => (
                  <div 
                    key={cert.name} 
                    className={`px-3 py-1.5 border rounded-lg text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 ${cert.color}`}
                    title={cert.authority}
                  >
                    <Award className="w-3.5 h-3.5" />
                    {cert.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Key Pillars */}
          <div className="lg:col-span-6 flex flex-col gap-6 w-full">
            {highlights.map((item, i) => (
              <div 
                key={i} 
                className="flex gap-5 p-6 bg-surface/40 border border-border/40 rounded-xl hover:border-accent/40 hover:shadow-[0_0_20px_rgba(59,91,219,0.05)] transition-all duration-300"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 bg-background border border-border/80 rounded-xl flex items-center justify-center shadow-md">
                    <item.icon size={20} className="text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2 font-mono">{item.title}</h3>
                  <p className="text-xs text-textSecondary leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

