"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, AlertCircle, Info, CheckCircle2, Award, Rocket, Database, Network, Briefcase, ThumbsUp, Cpu, ListChecks, Star, FileText } from "lucide-react";

const vulnerabilities = [
  {
    type: "CRITICAL",
    title: "Insecure Object Level Authorization (BOLA)",
    impact: "Unauthorized access to full user account data via endpoint ID manipulation.",
    icon: ShieldAlert,
    color: "text-red-400",
    border: "border-red-400/20",
    bg: "bg-red-400/5"
  },
  {
    type: "HIGH",
    title: "Broken Authentication Flow",
    impact: "JWT secret leakage allowing session hijacking and administrative bypass.",
    icon: AlertCircle,
    color: "text-yellow-400",
    border: "border-yellow-400/20",
    bg: "bg-yellow-400/5"
  },
  {
    type: "COMPLIANCE",
    title: "SOC2 & ISO 27001 Gaps",
    impact: "Unsecured PII exposure and lack of audit logging in critical data pipelines.",
    icon: Info,
    color: "text-blue-400",
    border: "border-blue-400/20",
    bg: "bg-blue-400/5"
  }
];

const platforms = [
  { name: "ProductHunt", icon: Rocket, color: "text-[#da552f]" },
  { name: "Crunchbase", icon: Database, color: "text-[#1483c2]", href: "https://www.crunchbase.com/organization/trustlayerlabs" },
  { name: "F6S", icon: Network, color: "text-[#2e8c4a]" },
  { name: "Contra", icon: Briefcase, color: "text-[#ff6b6b]", href: "https://contra.com/trustlayer_labs_6c8shdzq/about" },
  { name: "GoodFirms", icon: ThumbsUp, color: "text-[#1a73e8]", href: "https://www.goodfirms.co/company/trustlayerlabs" },
  { name: "TechBehemoths", icon: Cpu, color: "text-[#6366f1]", href: "https://techbehemoths.com/company/trustlayerlabs" },
  { name: "Sortlist", icon: ListChecks, color: "text-[#f59e0b]", href: "https://www.sortlist.com/agency/trustlayerlabs" },
  { name: "Clutch", icon: Star, color: "text-[#ef4444]" },
  { name: "The Manifest", icon: FileText, color: "text-[#f97316]" }
];

export default function Proof() {
  return (
    <section className="py-24 bg-background border-t border-border/40" id="trust">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="heading-2 mb-6">Real Vulnerabilities Found <br /> in <span className="text-primary">Production Systems</span></h2>
            <p className="body-text">We go beyond surface-level scanning to identify complex logic flaws that could lead to significant business loss.</p>
          </div>
          <div className="flex flex-wrap gap-6">
            {["Real attack paths", "Manual logic testing"].map((item, i) => (
              <div key={i} className="flex items-center space-x-2 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                <CheckCircle2 size={14} className="text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {vulnerabilities.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`premium-card p-8 group hover:bg-secondary/60 transition-all`}
            >
              <div className={`inline-flex items-center space-x-2 px-2.5 py-1 rounded-md ${v.bg} ${v.border} border ${v.color} text-[10px] font-bold tracking-widest mb-6`}>
                <v.icon size={12} />
                <span>{v.type}</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-4 leading-snug">{v.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                {v.impact}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center pt-8 border-t border-border/40"
        >
          <p className="text-slate-400 mb-8 font-medium italic">These are real flaws we&apos;ve identified in scaling platforms. Don&apos;t let yours be next.</p>
          <a 
            href="https://calendar.app.google/jnamj3gawxVunPJm9" 
            target="_blank" 
            className="btn-primary mb-6"
          >
            Schedule a Free Vulnerability Consultation
          </a>
          
          <div className="flex flex-wrap justify-center items-center gap-4">
            <a href="https://sellwithboost.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-90 transition-opacity">
              <img src="https://sellwithboost.com/badge/listing.svg" alt="Listed on Sell With boost" style={{ height: '40px', width: 'auto' }} />
            </a>
            <div className="flex items-center space-x-3 bg-secondary/40 border border-border/40 rounded-lg px-4 h-[40px] hover:bg-secondary/60 transition-colors cursor-default">
              <Award size={20} className="text-primary" />
              <div className="flex flex-col justify-center text-left">
                <span className="text-[10px] font-bold text-slate-300 uppercase leading-none mb-1">MSME</span>
                <span className="text-[9px] text-slate-500 font-medium leading-none tracking-wide">REGISTERED</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-border/30 w-full max-w-5xl overflow-hidden">
            <p className="text-[11px] text-slate-500 font-semibold mb-6 uppercase tracking-widest">Also Recognized & Listed On</p>
            
            <div 
              className="relative flex overflow-hidden w-full"
              style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
            >
              <motion.div 
                className="flex items-center gap-x-12 whitespace-nowrap py-2 min-w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ ease: "linear", duration: 30, repeat: Infinity }}
              >
                {[...platforms, ...platforms].map((platform, i) => (
                  <div key={i} className="flex items-center gap-x-12">
                    {platform.href ? (
                      <a href={platform.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-2 group cursor-pointer hover:-translate-y-0.5 transition-transform">
                        <platform.icon size={16} className={`opacity-80 group-hover:opacity-100 transition-opacity ${platform.color}`} />
                        <span className="text-sm text-slate-400 font-medium group-hover:text-slate-200 transition-colors">
                          {platform.name}
                        </span>
                      </a>
                    ) : (
                      <div className="flex items-center gap-x-2 group cursor-default">
                        <platform.icon size={16} className={`opacity-60 group-hover:opacity-100 transition-opacity ${platform.color}`} />
                        <span className="text-sm text-slate-400 font-medium group-hover:text-slate-200 transition-colors">
                          {platform.name}
                        </span>
                      </div>
                    )}
                    <span className="text-slate-700 text-xs">•</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
