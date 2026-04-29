"use client";

import { Search, ShieldAlert, FileCode2, FileCheck2, Settings } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Reconnaissance & OSINT",
    description: "Deep mapping of your attack surface using advanced intelligence gathering.",
    icon: <Search className="w-6 h-6 text-blue-600" />
  },
  {
    id: 2,
    title: "Automated Scanning",
    description: "Rapid baseline checks to identify low-hanging vulnerabilities and misconfigurations.",
    icon: <Settings className="w-6 h-6 text-indigo-600" />
  },
  {
    id: 3,
    title: "Manual Exploitation",
    description: "Expert ethical hackers exploit business logic flaws aligned with OWASP Top 10.",
    icon: <ShieldAlert className="w-6 h-6 text-amber-600" />
  },
  {
    id: 4,
    title: "Actionable Reporting",
    description: "Clear CVSS-scored findings with verifiable evidence and developer remediation steps.",
    icon: <FileCode2 className="w-6 h-6 text-red-600" />
  },
  {
    id: 5,
    title: "Retesting & Certification",
    description: "Post-patch verification to ensure zero residual risk, concluding with a secure certificate.",
    icon: <FileCheck2 className="w-6 h-6 text-green-600" />
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4">
            How We Work
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
            How We Perform <span className="text-gradient">Real VAPT</span>
          </h2>
          <p className="text-lg text-slate-500">
            A structured, transparent approach to securing your digital assets from end to end.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-indigo-200 to-blue-200 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col items-center justify-center mb-6 relative group-hover:-translate-y-2 transition-transform duration-300">
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-600 text-white font-black text-sm flex items-center justify-center shadow-lg shadow-blue-500/30">
                    {step.id}
                  </div>
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
