"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight } from "lucide-react";
import Terminal from "./Terminal";

export default function Hero() {
  return (
    <section className="relative pt-44 pb-20 bg-grid overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-3 py-1 bg-secondary/60 border border-border/50 rounded-full text-[11px] font-semibold text-primary uppercase tracking-wider mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span>Only 3 audit slots left this week</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-1 mb-6"
            >
              API Security & GRC for <br />
              <span className="text-primary">SaaS & AI Startups</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="body-text text-lg max-w-[580px] mb-10"
            >
              Prevent breaches and accelerate enterprise deals. Expert manual API testing and GRC readiness (SOC2, ISO 27001) — <span className="text-white font-medium italic underline decoration-primary/30 underline-offset-4">delivered in 48 hours.</span>
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 w-full sm:w-auto"
            >
              <Link 
                href="https://calendar.app.google/jnamj3gawxVunPJm9" 
                target="_blank" 
                className="btn-primary w-full sm:w-auto text-center flex items-center justify-center group"
                aria-label="Get a free security snapshot"
              >
                Get Free Security Snapshot <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="#services" 
                className="btn-secondary w-full sm:w-auto text-center"
                aria-label="Explore our security services"
              >
                Explore Services
              </Link>
            </motion.div>

            {/* Trust Signals Row */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-wrap gap-x-8 gap-y-4 border-t border-border/40 pt-10 w-full"
            >
              {[
                "100+ vulnerabilities identified",
                "SOC2 & ISO 27001 Readiness",
                "Manual logic testing",
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-2.5 text-[12px] font-medium text-slate-500 uppercase tracking-widest">
                  <ShieldCheck size={14} className="text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10"
            >
              <Terminal />
            </motion.div>
            {/* Background Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 blur-[100px] rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
