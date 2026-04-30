"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Scoping & Recon",
    description: "We define the rules of engagement and use advanced OSINT to map your external attack surface, identifying forgotten APIs and subdomains."
  },
  {
    number: "02",
    title: "Vulnerability Discovery",
    description: "Combining premium automated vulnerability assessment tools with intense manual probing to identify potential entry points in your web apps and cloud infrastructure."
  },
  {
    number: "03",
    title: "Safe Exploitation",
    description: "Our ethical hackers safely exploit the findings to prove real-world impact (e.g., bypassing authentication) without disrupting your production systems."
  },
  {
    number: "04",
    title: "Reporting & Retest",
    description: "You receive a comprehensive remediation roadmap. Once your team applies the patches, we perform a free retest to verify the vulnerabilities are fully resolved."
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-slate-50 overflow-hidden border-t border-slate-100">
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Our VAPT Methodology: <br className="hidden md:block"/> Proven, Safe, and Deep
          </h2>
          <p className="text-lg text-slate-500 font-medium">A systematic, industry-standard approach to hardening your defenses.</p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-slate-100 hidden lg:block -z-10" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                <div className="w-16 h-16 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center mb-8 shadow-lg">
                  <span className="text-2xl font-black text-blue-600">{step.number}</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center mt-20">
          <Link href="/#scan" className="btn-primary inline-flex items-center">
            Run Free Security Scan
          </Link>
        </div>
      </div>
    </section>
  );
}
