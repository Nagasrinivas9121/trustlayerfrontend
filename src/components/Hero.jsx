import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, Lock } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white">
      {/* Dotted Background */}
      <div className="absolute inset-0 bg-dotted-pattern opacity-50"></div>
      
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-100 rounded-full blur-3xl opacity-50 -z-10"></div>

      {/* Floating Cards (Background) */}
      <div className="hidden lg:block absolute left-[10%] top-[30%] animate-float glass-card p-4 rounded-2xl shadow-xl border border-slate-100 z-10 w-64 bg-white/90 backdrop-blur">
        <div className="flex items-center gap-3 mb-2">
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
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
            <Lock size={16} />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-800">MSME Registered</p>
            <p className="text-[10px] text-slate-500">Certified Partner</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold mb-8"
        >
          <Shield size={16} />
          <span>VAPT & Penetration Testing Experts</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-6"
        >
          Comprehensive Cyber<br/>
          <span className="gradient-text">Security Services</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          We help SaaS, AI & FinTech startups identify and fix security vulnerabilities before launch using VAPT & OWASP-based testing.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/contact" className="btn-primary w-full sm:w-auto text-lg px-8 py-4">
            Book Security Consultation
          </Link>
          <Link to="/services" className="btn-secondary w-full sm:w-auto text-lg px-8 py-4 bg-white">
            View Services
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-sm text-slate-500 font-medium"
        >
          Trusted cybersecurity partner for startups & enterprises.
        </motion.div>
      </div>
    </div>
  );
}
