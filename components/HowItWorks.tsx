"use client";

import React from "react";
import { motion } from "framer-motion";
import { ClipboardList, Search, FileText, CheckCircle } from "lucide-react";

const steps = [
  {
    title: "Security Intake",
    desc: "Defining scoping, rules of engagement, and attack surface mapping.",
    icon: ClipboardList
  },
  {
    title: "Manual Testing",
    desc: "Offensive exploitation of business logic and complex API attack chains.",
    icon: Search
  },
  {
    title: "Detailed Report",
    desc: "Vulnerability breakdown with reproduction steps and remediation code.",
    icon: FileText
  },
  {
    title: "Fix Validation",
    desc: "Final re-testing of all identified vulnerabilities to ensure platform hardening.",
    icon: CheckCircle
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-background border-t border-border/40" id="process">
      <div className="section-container">
        <h2 className="heading-2 mb-20 text-center">Our <span className="text-primary">Methodology</span></h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-10 left-20 right-20 h-[1px] bg-border/40 -z-10" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 bg-secondary rounded-2xl border border-border flex items-center justify-center mb-8 shadow-sm group-hover:border-primary/40 transition-colors">
                <step.icon size={28} className="text-primary" />
              </div>
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Step 0{i + 1}</div>
              <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed max-w-[200px] font-medium">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
