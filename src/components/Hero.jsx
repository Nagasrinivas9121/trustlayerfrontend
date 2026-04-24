import { motion } from 'framer-motion';
import { Shield, CheckCircle, Lock } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white">
      
      {/* Background */}
      <div className="absolute inset-0 bg-dotted-pattern opacity-50"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-100 rounded-full blur-3xl opacity-50 -z-10"></div>

      {/* Floating Cards */}
      <div className="hidden lg:block absolute left-[10%] top-[30%] animate-float glass-card p-4 rounded-2xl shadow-xl border border-slate-100 z-10 w-64 bg-white/90 backdrop-blur">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
            <CheckCircle size={16} />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-800">Zero Critical Bugs</p>
            <p className="text-[10px] text-slate-500">Post-assessment</p>
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute right-[10%] top-[50%] animate-float-delayed glass-card p-4 rounded-2xl shadow-xl border border-slate-100 z-10 w-64 bg-white/90 backdrop-blur">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
            <Lock size={16} />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-800">MSME Registered</p>
            <p className="text-[10px] text-slate-500">Certified Partner</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-20 text-center max-w-4xl">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold mb-8"
        >
          <Shield size={16} />
          <span>VAPT & Penetration Testing Experts</span>
        </motion.div>

        {/* 🔥 Headline (IMPROVED) */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-6"
        >
          Find critical security vulnerabilities
          <br />
          <span className="gradient-text">
            before attackers exploit them
          </span>
        </motion.h1>

        {/* 🔥 Subtext (IMPROVED) */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Get a free 15-minute security audit for your SaaS. We identify API flaws, authentication risks, and hidden vulnerabilities before they impact your users or revenue.
        </motion.p>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-3"
        >
          <a 
            href="https://calendar.app.google/RyeMVZDQRiCvGpsT9"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-8 py-4 shadow-lg hover:scale-105 transition-transform"
          >
            Get Free Security Audit (15 mins)
          </a>

          {/* 🔥 Micro trust + urgency */}
          <p className="text-sm text-slate-500 font-medium">
            ⚡ Limited slots this week • No commitment
          </p>
        </motion.div>

        {/* 🔥 Extra trust */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-sm text-slate-500 font-medium"
        >
          Trusted by early-stage startups & growing SaaS teams
        </motion.div>

      </div>
    </div>
  );
}