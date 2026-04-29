"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, CheckCircle, Lock, BarChart3, Star } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  const badges = [
    { name: "SOC2 Ready", icon: Shield },
    { name: "ISO 27001 Aligned", icon: Lock },
    { name: "OWASP Top 10 Coverage", icon: CheckCircle },
  ];

  return (
    <section className="relative pt-44 pb-32 overflow-hidden bg-grid">
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none" />
      
      <div className="max-w-[1100px] mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          {/* Trust Badges */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-10">
            {badges.map((badge) => (
              <div key={badge.name} className="badge-trust">
                <badge.icon className="w-3 h-3 mr-2 text-blue-600" />
                <span>{badge.name}</span>
              </div>
            ))}
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-[80px] font-black tracking-tight text-slate-900 mb-8 leading-[0.95] max-w-[900px]"
          >
            Fix Critical Security <br />
            <span className="text-gradient">Vulnerabilities</span> Before <br />
            Hackers Find Them
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-slate-500 mb-12 max-w-[700px] leading-relaxed font-medium"
          >
            Manual penetration testing + real attack simulation. <br className="hidden md:block" />
            Trusted by startups & growing companies to secure their future.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-20 w-full"
          >
            <Link href="#scan" className="btn-primary flex items-center group">
              Run Free Security Scan <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact" className="btn-secondary">
              Talk to a Security Expert
            </Link>
          </motion.div>

          {/* Proof Metrics */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 py-12 border-y border-slate-100 w-full"
          >
            <div className="flex flex-col items-center">
              <span className="text-4xl font-black text-slate-900 mb-2">100+</span>
              <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Vulnerabilities Discovered</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-black text-slate-900 mb-2">0</span>
              <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Breaches After Remediation</span>
            </div>
          </motion.div>

          {/* Social Proof */}
          <motion.div variants={itemVariants} className="mt-16 flex flex-col items-center space-y-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-100 overflow-hidden shadow-sm relative">
                  <Image
                    src={`https://i.pravatar.cc/100?u=trust${i}`}
                    alt="Customer"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sm font-bold text-slate-700">Trusted by 100+ Security Teams</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-[20%] left-[-5%] w-72 h-72 bg-blue-400/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-[10%] right-[-5%] w-96 h-96 bg-purple-400/10 rounded-full blur-[120px] animate-pulse" />
    </section>
  );
}
