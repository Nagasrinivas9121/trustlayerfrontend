"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-[1100px] mx-auto px-4 relative z-10">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 overflow-hidden relative shadow-2xl">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/30 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/30 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3"></div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/20"
            >
              <ShieldCheck className="w-8 h-8 text-blue-400" />
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
            >
              Found vulnerabilities? <br /> Let’s fix them.
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 text-xl leading-relaxed mb-10"
            >
              Don&apos;t wait for a data breach to expose your vulnerabilities. Get a comprehensive snapshot of your security posture today.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link 
                href="/contact" 
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold text-lg transition-all shadow-[0_10px_30px_rgba(37,99,235,0.4)] flex items-center justify-center group"
              >
                Talk to Expert <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="https://calendar.app.google/J2JjTsqSHMDWTNu4A" 
                target="_blank"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-2xl font-bold text-lg transition-all backdrop-blur-md flex items-center justify-center"
              >
                Book Free Consultation
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
