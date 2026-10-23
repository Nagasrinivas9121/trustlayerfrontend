"use client";

import React from "react";
import { Shield, Lock, Database, Cloud, Terminal, Cpu, Key, Layers, Globe, CheckCircle } from "lucide-react";

interface TechItem {
  name: string;
  category: string;
  icon: React.ReactNode;
}

const TECHNOLOGIES: TechItem[] = [
  { name: "OWASP API Top 10", category: "Standard", icon: <Shield size={18} /> },
  { name: "SOC 2 Type II Readiness", category: "Compliance", icon: <CheckCircle size={18} /> },
  { name: "ISO/IEC 27001:2022", category: "Framework", icon: <Lock size={18} /> },
  { name: "REST & GraphQL APIs", category: "Protocol", icon: <Layers size={18} /> },
  { name: "AWS Cloud Infrastructure", category: "Cloud", icon: <Cloud size={18} /> },
  { name: "Next.js & React Apps", category: "Frontend", icon: <Globe size={18} /> },
  { name: "FastAPI & Python Services", category: "Backend", icon: <Terminal size={18} /> },
  { name: "PostgreSQL & Row-Level Security", category: "Database", icon: <Database size={18} /> },
  { name: "OAuth 2.0 & JWT Security", category: "Identity", icon: <Key size={18} /> },
  { name: "Docker & Kubernetes", category: "DevOps", icon: <Layers size={18} /> },
  { name: "AI / LLM & RAG Vectors", category: "AI Security", icon: <Cpu size={18} /> },
  { name: "Burp Suite & Developer PoCs", category: "Tooling", icon: <Terminal size={18} /> },
];

export default function BrandTicker() {
  return (
    <div id="brand-carousel" className="w-full py-8 border-y border-black/5 bg-[#FAFAFA] relative overflow-hidden">
      {/* Left and Right Fade Gradients */}
      <div className="absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 sm:w-36 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />

      {/* Marquee Container */}
      <div className="flex overflow-hidden">
        <div className="animate-marquee flex items-center gap-6 sm:gap-8 shrink-0 pr-6 sm:pr-8">
          {TECHNOLOGIES.concat(TECHNOLOGIES).map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className="group flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white border border-black/5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md cursor-pointer shrink-0"
            >
              <div className="w-9 h-9 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-600 group-hover:text-primary group-hover:bg-blue-50 transition-colors">
                {tech.icon}
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-semibold text-neutral-800 group-hover:text-neutral-950 tracking-tight whitespace-nowrap">
                  {tech.name}
                </span>
                <span className="text-[10px] text-neutral-400 font-mono uppercase tracking-wider leading-none mt-0.5">
                  {tech.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
