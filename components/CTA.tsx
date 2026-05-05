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
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-8 leading-tight">
            Get your API tested <br /> before <span className="text-primary">attackers</span> do
          </h2>
          <p className="body-text text-lg mb-12 max-w-xl mx-auto">
            Our manual security audits identify the logical vulnerabilities and compliance gaps that automated scanners miss. Secure your platform today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              href="https://calendar.app.google/jnamj3gawxVunPJm9" 
              target="_blank"
              className="btn-primary flex items-center justify-center group px-10 py-4 text-base"
              aria-label="Book your security review on Google Calendar"
            >
              <Calendar size={18} className="mr-3" />
              Book Security Review <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Subtle Background Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 blur-[120px] rounded-full -z-10" />
    </section>
  );
}
