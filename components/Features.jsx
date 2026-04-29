"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Fingerprint, FileSearch, Timer } from "lucide-react";

const features = [
  {
    title: "Manual testing (not just automated)",
    description: "We find business logic flaws and complex exploits that automated scanners consistently miss.",
    icon: ShieldAlert,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Real hacker mindset",
    description: "Our experts simulate real-world attacks using the same tools and techniques as actual threat actors.",
    icon: Fingerprint,
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "Business-focused reports",
    description: "Clear, actionable remediation guides that prioritize risk based on your specific business impact.",
    icon: FileSearch,
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    title: "Fast turnaround (24–72 hrs)",
    description: "Security shouldn&apos;t slow you down. Get your initial audit results in days, not weeks.",
    icon: Timer,
    color: "bg-emerald-50 text-emerald-600"
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Why Choose Us
          </h2>
          <p className="text-lg text-slate-500 font-medium max-w-[600px] mx-auto">
            We provide deep security insights that keep your business safe from sophisticated attacks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-blue-200 transition-colors group shadow-sm"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${f.color}`}>
                <f.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-4 leading-tight">
                {f.title}
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
