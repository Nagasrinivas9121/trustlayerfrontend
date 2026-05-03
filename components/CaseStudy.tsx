"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";

const study = {
  client: "Series B FinTech Startup",
  title: "Preventing Unauthorized Account Takeovers in production",
  problem: "Undocumented administrative endpoints were exposed to the public internet without proper authorization checks.",
  exploit: "BOLA vulnerability allowed an attacker to enumerate user account IDs and extract session tokens via the `/api/v2/admin/debug` endpoint.",
  impact: "Potential exposure of 42,000+ user financial records and severe regulatory non-compliance risk.",
  fix: "Implemented resource-level authorization validation and removed debug endpoints from the production build."
};

export default function CaseStudy() {
  return (
    <section className="py-24 bg-secondary/10 border-y border-border/40" id="cases">
      <div className="section-container">
        <div className="max-w-2xl mb-16">
          <h2 className="heading-2 mb-6">Technical <span className="text-primary">Case Study</span></h2>
          <p className="body-text text-lg">A detailed breakdown of how we identified and neutralized a critical vulnerability in a scaling FinTech ecosystem.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="premium-card p-10 md:p-16 border-border/60"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center space-x-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-10">
                <Terminal size={12} className="text-primary" />
                <span>Client: {study.client}</span>
              </div>
              <h3 className="text-3xl font-semibold text-white mb-12 leading-tight tracking-tight">
                {study.title}
              </h3>

              <div className="space-y-10">
                {[
                  { label: "The Problem", text: study.problem },
                  { label: "The Exploit", text: study.exploit, isMono: true },
                  { label: "The Impact", text: study.impact },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col space-y-3">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{item.label}</span>
                    <p className={`text-base text-slate-300 leading-relaxed ${item.isMono ? "font-mono text-sm bg-secondary/50 p-4 rounded-lg border border-border/40 text-slate-400" : "font-medium"}`}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-end">
              <div className="p-8 bg-primary/5 rounded-2xl border border-primary/20 mb-10">
                <div className="text-[10px] font-bold text-primary uppercase tracking-widest mb-4">The Final Resolution</div>
                <p className="text-base font-bold text-slate-200 leading-relaxed mb-6">
                  {study.fix}
                </p>
                <div className="flex items-center space-x-2 text-[11px] font-black text-primary uppercase tracking-widest">
                   <span>Platform Status: Hardened</span>
                </div>
              </div>

              <Link href="https://calendar.app.google/jnamj3gawxVunPJm9" target="_blank" className="btn-secondary flex items-center justify-center group w-full">
                View Full Audit Details <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
