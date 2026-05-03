"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, AlertCircle, Info, CheckCircle2 } from "lucide-react";

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
    type: "MEDIUM",
    title: "API Rate Limit Bypass",
    impact: "Circumventing request throttles leading to potential auth brute-forcing.",
    icon: Info,
    color: "text-blue-400",
    border: "border-blue-400/20",
    bg: "bg-blue-400/5"
  }
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
}
