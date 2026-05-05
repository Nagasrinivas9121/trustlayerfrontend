"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Globe2, Layers, Cpu, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "API Security Testing",
    what: "Deep manual review of REST, GraphQL, and gRPC endpoints.",
    why: "APIs are the #1 attack vector for data breaches in SaaS.",
    outcome: "Eliminate BOLA, IDOR, and broken auth flows.",
    icon: Code2
  },
  {
    title: "Web App Testing",
    what: "Full-spectrum penetration testing following OWASP standards.",
    why: "Frontend vulnerabilities often lead to full system compromise.",
    outcome: "Verify XSS, SQLi, and logic bypass prevention.",
    icon: Globe2
  },
  {
    title: "SaaS Security Audit",
    what: "Multi-tenant isolation and cloud configuration review.",
    why: "Incorrect permissions can expose all customer data at once.",
    outcome: "Harden tenant boundaries and IAM policies.",
    icon: Layers
  },
  {
    title: "AI Security Testing",
    what: "Prompt injection and LLM data leakage assessment.",
    why: "AI models introduce new, untested logical attack surfaces.",
    outcome: "Secure the model layer against adversarial input.",
    icon: Cpu
  },
  {
    title: "GRC & Compliance",
    what: "Gap analysis and readiness for SOC2, ISO/IEC 27001:2022, and GDPR.",
    why: "Compliance is a mandatory requirement for enterprise SaaS adoption.",
    outcome: "Streamline audits and build institutional trust.",
    icon: ShieldCheck
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-secondary/20" id="services">
      <div className="section-container">
        <div className="max-w-2xl mb-20">
          <h2 className="heading-2 mb-6">Offensive Security <span className="text-primary">Expertise</span></h2>
          <p className="body-text">We thinking like attackers to identify critical flaws before they can be exploited by real-world adversaries.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="premium-card p-10 flex flex-col group"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-8 border border-border group-hover:border-primary/30 transition-colors">
                <s.icon size={22} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-6">{s.title}</h3>
              
              <div className="space-y-6 flex-grow">
                <div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">What we do</div>
                  <p className="text-sm text-slate-300 leading-relaxed">{s.what}</p>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Why it matters</div>
                  <p className="text-sm text-slate-400 leading-relaxed font-medium">{s.why}</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border/40">
                <div className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">Outcome</div>
                <p className="text-xs font-bold text-slate-200">{s.outcome}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
