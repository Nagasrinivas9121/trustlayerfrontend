"use client";

import { motion } from "framer-motion";
import { Award, ShieldAlert, Code2, Clock } from "lucide-react";

export default function TrustSection() {
  const trustItems = [
    { icon: <Award className="w-6 h-6 text-primary-600" />, title: "MSME Registered", desc: "Govt. of India Recognized" },
    { icon: <ShieldAlert className="w-6 h-6 text-primary-600" />, title: "OWASP Top 10", desc: "Strict Compliance" },
    { icon: <Code2 className="w-6 h-6 text-primary-600" />, title: "Manual Testing", desc: "Beyond automated scans" },
    { icon: <Clock className="w-6 h-6 text-primary-600" />, title: "Fast Turnaround", desc: "Rapid execution & reporting" }
  ];

  return (
    <section className="py-12 border-y border-slate-200 bg-white" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8">Trusted Standards & Methodology</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all"
            >
              <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100 shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm md:text-base">{item.title}</h4>
                <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
