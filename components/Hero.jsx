"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, ArrowRight, CheckCircle2, Zap, AlertCircle } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative pt-40 pb-20 overflow-hidden">
      {/* Trust Badges */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex flex-wrap justify-center gap-4 mb-10"
      >
        {["SOC2 Ready", "ISO 27001 Aligned", "OWASP Top 10 Coverage"].map((badge, i) => (
          <div key={i} className="flex items-center space-x-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500 shadow-sm">
             <Shield className="w-3 h-3 text-blue-600" />
             <span>{badge}</span>
          </div>
        ))}
      </motion.div>
      {/* Subtle Dot Grid Background */}
      <div className="absolute inset-0 bg-dot-grid opacity-[0.4] pointer-events-none" />
      
      {/* Gradient Accents */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />
      <div className="absolute top-1/2 -left-24 w-72 h-72 bg-purple-500/10 blur-[100px] rounded-full" />

      <div className="max-w-[1100px] mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-md border border-slate-200 rounded-full shadow-sm mb-8"
          >
            <Shield className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-black text-slate-600 uppercase tracking-widest">Enterprise-Grade VAPT</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight leading-[1.1] max-w-[900px]"
          >
            Fix Critical Security Vulnerabilities <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Before Hackers Exploit Them
            </span>
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-500 mb-12 max-w-[800px] font-medium leading-relaxed"
          >
            Manual penetration testing + real attack simulation. <br className="hidden md:block" />
            We uncover vulnerabilities automated tools miss — before they become breaches.
          </motion.p>
          
          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8"
          >
            <Link href="#scan" className="px-10 py-5 bg-slate-900 text-white font-black rounded-2xl hover:bg-slate-800 hover:-translate-y-1 transition-all shadow-xl shadow-slate-900/20 flex items-center group">
              Run Free Security Scan <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="https://calendar.app.google/jnamj3gawxVunPJm9" target="_blank" className="px-10 py-5 bg-white text-slate-900 border border-slate-200 font-black rounded-2xl hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
              Book a Security Audit Call
            </Link>
          </motion.div>
          
          {/* Safety Line */}
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.4 }}
             className="flex items-center space-x-2 text-slate-400 font-bold text-sm mb-16 uppercase tracking-widest"
          >
            <span>🔒 Safe read-only scan</span>
            <span className="opacity-30">•</span>
            <span>No downtime</span>
            <span className="opacity-30">•</span>
            <span>No sensitive data stored</span>
          </motion.div>
          
          {/* Real Proof Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl"
          >
            {[
              { label: "100+ vulnerabilities identified across client systems", icon: Zap, color: "text-amber-500" },
              { label: "0 breaches after remediation", icon: CheckCircle2, color: "text-green-500" },
              { label: "Reports delivered in 24–48 hours", icon: ArrowRight, color: "text-blue-500" },
            ].map((stat, i) => (
              <div key={i} className="flex items-center space-x-4 p-6 bg-white border border-slate-100 rounded-3xl shadow-sm text-left">
                <div className={`w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center flex-shrink-0`}>
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <span className="text-sm font-bold text-slate-600 leading-tight">
                  <span className="text-blue-600 mr-1">✔</span> {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-20 flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all"
          >
            <div className="flex flex-col items-center">
              <span className="text-lg font-black text-slate-900 tracking-tighter">SOC2 Ready</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg font-black text-slate-900 tracking-tighter">ISO 27001 Aligned</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg font-black text-slate-900 tracking-tighter">OWASP Top 10</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
