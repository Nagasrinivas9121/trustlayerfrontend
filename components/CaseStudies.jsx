"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { TrendingDown, TrendingUp, CheckCircle2 } from "lucide-react";

const cases = [
  {
    company: "Fintech Platform",
    outcome: "The Challenge: A fast-growing payment gateway needed rigorous API security testing before a major SOC2 audit. They suspected authorization flaws.",
    before: 88,
    after: 14,
    benefit: "The Finding: Discovered a BOLA flaw allowing cross-user transaction access. Outcome: Patched in 12 hours. Zero data leaked. SOC2 achieved."
  },
  {
    company: "HealthTech SaaS",
    outcome: "The Challenge: A B2B healthcare platform relied on complex role-based access control to protect sensitive Patient Health Information (PHI).",
    before: 76,
    after: 9,
    benefit: "The Finding: Manual testing revealed a hidden logic flaw escalating standard users to Admin. Outcome: Remediated instantly, securing 50k+ patients."
  },
  {
    company: "E-commerce Enterprise",
    outcome: "The Challenge: High-volume platform preparing for the peak holiday season, facing constant automated bot attacks and credential stuffing.",
    before: 62,
    after: 5,
    benefit: "The Finding: Found chained XSS and SQL Injection risks. Outcome: 200+ endpoints secured. 0 breaches during peak season."
  }
];

export default function CaseStudies() {
  return (
    <section id="cases" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-full h-full bg-grid opacity-10 pointer-events-none" />
      
      <div className="max-w-[1100px] mx-auto px-4 relative z-10">
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
            Proven Results
          </h2>
          <p className="text-xl text-slate-400 font-medium max-w-[600px]">
            Real impact measured through risk reduction and successful compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 border border-slate-700 p-8 rounded-[40px] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="px-4 py-1.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-xs font-black uppercase tracking-widest">
                    Case Study: {c.company}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-6 leading-tight">
                  {c.outcome}
                </h3>
                
                <div className="grid grid-cols-2 gap-8 mb-10">
                  <div className="space-y-2">
                    <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">Initial Risk</div>
                    <div className="flex items-center text-red-400">
                      <TrendingUp className="w-5 h-5 mr-2" />
                      <span className="text-3xl font-black">{c.before}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">After VAPT</div>
                    <div className="flex items-center text-green-400">
                      <TrendingDown className="w-5 h-5 mr-2" />
                      <span className="text-3xl font-black">{c.after}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center p-4 bg-slate-900/50 rounded-2xl border border-slate-700/50">
                <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-300">{c.benefit}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-20">
          <Link href="https://calendar.app.google/jnamj3gawxVunPJm9" target="_blank" className="btn-primary inline-flex items-center">
            Book a Security Audit Call
          </Link>
        </div>
      </div>
    </section>
  );
}
