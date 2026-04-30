"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, ArrowRight, CheckCircle2, Zap } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative pt-32 pb-20 overflow-hidden bg-slate-50">
      {/* Optimized Dot Grid Background - Using CSS instead of absolute div if possible, but keeping it simple */}
      <div className="absolute inset-0 opacity-[0.3] pointer-events-none bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px]" />
      
      {/* Simplified Gradient Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/40 blur-[100px] rounded-full -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-100/30 blur-[100px] rounded-full -ml-32 -mb-32" />

      <div className="max-w-[1100px] mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Trust Badge - LCP Element Candidate, keep it simple */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white border border-slate-200 rounded-full shadow-sm mb-8 animate-fade-in">
            <Shield className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-black text-slate-600 uppercase tracking-widest">Enterprise-Grade VAPT</span>
          </div>

          {/* Headline - Primary LCP Element */}
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight leading-[1.1] max-w-[900px] animate-slide-up">
            Enterprise-Grade VAPT Services <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              in India
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-[900px] font-medium leading-relaxed animate-slide-up [animation-delay:200ms]">
            Go beyond automated scanners. We are a premier <strong className="text-slate-700">penetration testing company in India</strong> specializing in deep, manual security testing. From <strong className="text-slate-700">web application security</strong> to complex <strong className="text-slate-700">API security testing</strong>, our ethical hackers identify critical flaws before attackers do.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8 animate-slide-up [animation-delay:400ms]">
            <Link href="#scan" className="px-10 py-5 bg-slate-900 text-white font-black rounded-2xl hover:bg-slate-800 hover:-translate-y-1 transition-all shadow-xl shadow-slate-900/20 flex items-center group">
              Run Free Security Scan <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="https://calendar.app.google/jnamj3gawxVunPJm9" target="_blank" className="px-10 py-5 bg-white text-slate-900 border border-slate-200 font-black rounded-2xl hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
              Book a Security Audit Call
            </Link>
          </div>
          
          {/* Safety Line */}
          <div className="flex items-center space-x-2 text-slate-400 font-bold text-sm mb-16 uppercase tracking-widest animate-fade-in [animation-delay:600ms]">
            <span>🔒 Safe read-only scan</span>
            <span className="opacity-30">•</span>
            <span>No downtime</span>
            <span className="opacity-30">•</span>
            <span>No sensitive data stored</span>
          </div>
          
          {/* Real Proof Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl animate-slide-up [animation-delay:800ms]">
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
          </div>

          {/* Trust Badges - Keeping only one set at the bottom */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-5xl">
            <div className="flex flex-col items-center p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center">
              <span className="text-xl font-black text-slate-900 tracking-tighter mb-2">SOC2 Ready</span>
              <p className="text-sm text-slate-500">Validated penetration testing reports that map directly to SOC2 compliance requirements.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center">
              <span className="text-xl font-black text-slate-900 tracking-tighter mb-2">ISO 27001</span>
              <p className="text-sm text-slate-500">Adherence to international security management standards for maximum data protection.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center">
              <span className="text-xl font-black text-slate-900 tracking-tighter mb-2">OWASP Top 10</span>
              <p className="text-sm text-slate-500">Comprehensive coverage against the most critical web and API security risks in 2026.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
