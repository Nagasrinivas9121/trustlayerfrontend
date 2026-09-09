"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="heading-1 mb-6 font-sans">
            Know Where Your <br className="hidden md:inline" />
            <span className="text-primary">Security Stands.</span>
          </h2>
          <p className="body-text text-base md:text-lg mb-10 max-w-2xl mx-auto font-sans">
            Find the weaknesses before your customers, auditors, or attackers do. Schedule a confidential 20-minute scoping review under mutual NDA.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://calendar.app.google/jnamj3gawxVunPJm9"
              target="_blank"
              className="btn-primary flex items-center justify-center px-8 py-3.5 text-sm uppercase tracking-wider font-sans font-bold shadow-md w-full sm:w-auto gap-2"
            >
              <Calendar size={16} />
              Book a 20-Min Security Review
            </Link>
            <Link 
              href="/free-assessment" 
              className="btn-secondary flex items-center justify-center group px-8 py-3.5 text-sm uppercase tracking-wider font-sans font-semibold w-full sm:w-auto"
            >
              Request a Security Assessment
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Subtle Background Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 blur-[120px] rounded-full -z-10" />
    </section>
  );
}
