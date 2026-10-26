import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, AlertTriangle, CheckCircle2, Code2, Terminal, ArrowRight, Sparkles } from "lucide-react";
import { CASE_STUDIES } from "@/lib/constants";

export default function CaseStudiesPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="pt-32 pb-24 font-sans text-neutral-900">
        <div className="section-container">
          
          {/* Breadcrumb & Header - CodeDale style */}
          <div className="mb-14">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 text-xs font-semibold text-neutral-600 hover:text-neutral-900 shadow-sm transition-all mb-8 group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Overview</span>
            </Link>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-neutral-200 shadow-sm rounded-full text-xs font-semibold text-neutral-800 uppercase tracking-wider mb-5">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>Technical Security Knowledge Base</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-tight mb-5 font-sans">
              Illustrative <span className="text-primary">Security Scenarios</span>
            </h1>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl font-sans">
              Educational breakdowns of common authorization flaws, authentication bypasses, and cloud misconfigurations observed in modern tech platforms, along with developer remediation patterns.
            </p>
          </div>

          {/* Prominent Credibility Disclaimer - CodeDale Style */}
          <div className="p-5 bg-white border border-dashed border-amber-300 rounded-2xl mb-14 flex items-start gap-3.5 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0 mt-0.5">
              <AlertTriangle size={16} />
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
              <strong className="text-neutral-900 font-semibold">Educational Notice:</strong> These are illustrative research scenarios written by our team. They are not client engagements. They explain vulnerability vectors, exploit mechanisms, and remediation patterns without representing specific confidential customer data.
            </p>
          </div>

          {/* Cards List - CodeDale Rounded-3xl Card Design */}
          <div className="space-y-8">
            {CASE_STUDIES.map((item, i) => (
              <div 
                key={item.slug}
                className="p-8 sm:p-10 relative overflow-hidden bg-white border border-neutral-200/90 rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)] hover:border-neutral-400 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Main Details */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 bg-blue-50 border border-blue-200 text-[10px] font-bold uppercase font-mono tracking-wider text-primary rounded-full">
                        {item.category}
                      </span>
                      <span className="px-3 py-1 bg-red-50 border border-red-200 text-[10px] font-bold uppercase font-mono tracking-wider text-red-700 rounded-full">
                        {item.vulnerabilityClass || "Vulnerability Vector"}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 leading-snug font-sans tracking-tight">
                      {item.title}
                    </h2>

                    <div className="space-y-4 text-xs sm:text-sm font-sans">
                      <div>
                        <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wider block mb-1">
                          Scenario &amp; Architecture Context:
                        </span>
                        <p className="text-neutral-600 leading-relaxed font-sans">
                          {item.problem}
                        </p>
                      </div>

                      <div>
                        <span className="text-[10px] font-mono font-bold text-primary uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
                          <Terminal size={12} /> Vulnerability Vector &amp; Exploit Path:
                        </span>
                        <div className="font-mono bg-neutral-950 text-neutral-200 border border-neutral-800 p-4 rounded-2xl leading-relaxed text-xs overflow-x-auto shadow-inner">
                          {item.exploit}
                        </div>
                      </div>

                      <div>
                        <span className="text-[10px] font-mono font-bold text-amber-700 uppercase tracking-wider block mb-1">
                          Potential Impact &amp; Risk Exposure:
                        </span>
                        <p className="text-neutral-600 leading-relaxed font-sans">
                          {item.impact}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Remediation Details */}
                  <div className="lg:col-span-5 space-y-5 lg:border-l lg:border-dashed lg:border-neutral-200 lg:pl-8 flex flex-col justify-between h-full">
                    
                    <div className="p-6 bg-emerald-50/60 border border-emerald-200/80 rounded-2xl space-y-2 font-sans">
                      <h3 className="text-[11px] font-mono font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5">
                        <ShieldCheck size={14} className="text-emerald-700" /> Recommended Engineering Fix
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-sans">
                        {item.fix}
                      </p>
                    </div>

                    <div className="space-y-4 font-sans text-xs">
                      <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-2xl space-y-1.5">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-500 block">
                          Mitigation Pattern:
                        </span>
                        <p className="text-xs text-neutral-800 font-sans leading-relaxed">
                          {item.mitigationStrategy || "Enforce strict server-side validation and access control."}
                        </p>
                      </div>

                      <div>
                        <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wider block mb-2">
                          Associated Technologies:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {item.technologies.map((tech) => (
                            <span 
                              key={tech} 
                              className="px-2.5 py-1 bg-neutral-100 border border-neutral-200 rounded-md text-[10px] font-mono text-neutral-800"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <Link 
                        href="/free-assessment"
                        className="w-full inline-flex items-center justify-center py-3 bg-neutral-900 hover:bg-neutral-800 text-xs uppercase font-sans font-bold tracking-wider rounded-full text-white shadow-sm transition-all"
                      >
                        Request Scope Review
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
