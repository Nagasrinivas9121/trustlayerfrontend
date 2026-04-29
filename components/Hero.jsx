"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Star } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Hero() {
  const [domain, setDomain] = useState("");
  const router = useRouter();

  const handleMiniScan = (e) => {
    e.preventDefault();
    if (domain) {
      // Typically we'd pass it to context or query params, but since ScannerFlow is right below:
      document.getElementById("scan")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative pt-44 pb-24 overflow-hidden bg-dotted">
      {/* Background Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1100px] h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-[120px]"></div>
        <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] bg-indigo-100/50 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-[1100px] mx-auto px-4 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-green-50 border border-green-100 rounded-full px-4 py-1.5 mb-10 shadow-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-bold text-green-700 tracking-tight">
              Limited security audit slots available
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 mb-8 leading-tight max-w-[800px] mx-auto"
          >
            VAPT Services<br className="hidden md:block" />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Penetration Testing Company</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-slate-600 mb-12 max-w-[600px] mx-auto leading-relaxed"
          >
            Protect your applications, APIs, and infrastructure with expert penetration testing.
          </motion.p>

          {/* Mini Scanner Entry */}
          <motion.div variants={itemVariants} className="w-full max-w-md mx-auto mb-10">
            <form onSubmit={handleMiniScan} className="relative flex items-center w-full bg-white rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-slate-100 p-1.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-shadow">
              <input
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder="yourcompany.com"
                className="w-full pl-6 pr-4 py-3 bg-transparent outline-none text-slate-700 font-medium"
              />
              <button
                type="submit"
                className="bg-slate-900 hover:bg-blue-600 text-white rounded-full px-6 py-3 font-bold flex items-center whitespace-nowrap transition-colors"
              >
                Scan Now <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </form>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16 w-full max-w-lg mx-auto"
          >
            <Link
              href="#scan"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-2xl shadow-lg shadow-blue-500/30 hover:shadow-[0_0_25px_rgba(79,70,229,0.5)] hover:-translate-y-1 transition-all flex items-center justify-center group"
            >
              Run Free Security Snapshot <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 font-bold rounded-2xl hover:bg-slate-50 hover:-translate-y-1 transition-all flex items-center justify-center"
            >
              Talk to Expert
            </Link>
          </motion.div>
          <motion.div variants={itemVariants} className="text-xs text-slate-500 font-medium mb-16">
            Disclaimer: This is an automated preview. Full VAPT requires manual testing.
          </motion.div>
          {/* Social Proof */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center space-y-3"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm relative">
                  <Image
                    src={`https://i.pravatar.cc/100?u=${i}`}
                    alt={`Customer Avatar ${i}`}
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
              <span className="text-sm font-bold text-slate-700">30+ reviews</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating Cards */}
        <div className="absolute top-[40%] left-[5%] hidden lg:block animate-float">
          <div className="soft-card p-4 flex items-center space-x-3 rotate-[-3deg] shadow-xl shadow-slate-200/50">
            <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-left">
              <div className="text-sm font-black text-slate-900">Zero Breaches</div>
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Guaranteed Path</div>
            </div>
          </div>
        </div>

        <div className="absolute top-[30%] right-[5%] hidden lg:block animate-float-delayed">
          <div className="soft-card p-4 flex items-center space-x-3 rotate-[3deg] shadow-xl shadow-slate-200/50">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-left">
              <div className="text-sm font-black text-slate-900">Compliance Ready</div>
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">SOC2, ISO 27001</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
