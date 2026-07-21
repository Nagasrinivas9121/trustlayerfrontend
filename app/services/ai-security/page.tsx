import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI & LLM Application Security Testing Services",
  description: "Vulnerability assessment for AI applications, LLM agents, RAG vector databases, and prompt injection vectors (OWASP Top 10 for LLMs).",
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/services/ai-security",
  },
};

export default function AiSecurityPage() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-24 font-sans text-textPrimary">
      <div className="section-container max-w-5xl mx-auto">
        <Link href="/services" className="inline-flex items-center text-xs uppercase tracking-widest text-textSecondary hover:text-textPrimary transition-colors gap-2 mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" /> Back to All Services
        </Link>
        <div className="mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-widest mb-4">
            <span>GenAI Security Engineering</span>
          </div>
          <h1 className="heading-1 mb-6 text-textPrimary font-extrabold tracking-tight">
            AI & LLM Application <span className="text-primary">Security Audits</span>
          </h1>
          <p className="body-text text-base max-w-3xl text-textSecondary leading-relaxed">
            Specialized penetration testing for AI startups building GenAI applications, LLM agents, and RAG vector store integrations against the OWASP Top 10 for LLMs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="p-6 bg-surface border border-border/80 rounded-xl space-y-3">
            <h3 className="text-sm font-bold text-textPrimary font-sans">Prompt Injection & Jailbreak Testing</h3>
            <p className="text-xs text-textSecondary leading-relaxed">
              Evaluating direct and indirect prompt injection vectors to prevent LLM agent hijack, system prompt leaks, and unauthorized command execution.
            </p>
          </div>
          <div className="p-6 bg-surface border border-border/80 rounded-xl space-y-3">
            <h3 className="text-sm font-bold text-textPrimary font-sans">RAG Vector Data Leakage Audit</h3>
            <p className="text-xs text-textSecondary leading-relaxed">
              Verifying tenant-level query filtering in Pinecone, Qdrant, and PGVector databases so LLMs never reveal cross-tenant context.
            </p>
          </div>
        </div>
        <div className="p-8 bg-surface border border-primary/30 rounded-2xl text-center space-y-4">
          <h3 className="text-xl font-bold text-textPrimary">Book AI Application Security Audit</h3>
          <p className="text-xs text-textSecondary max-w-xl mx-auto">
            Secure your AI product before launch with an offensive LLM penetration test.
          </p>
          <div className="pt-2">
            <Link href="https://calendar.app.google/jnamj3gawxVunPJm9" target="_blank" className="inline-flex items-center gap-2 px-8 py-3 bg-[#0a0a0a] text-white font-bold text-xs uppercase tracking-wider rounded-full hover:bg-zinc-800 transition-colors">
              Book AI Security Audit <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
