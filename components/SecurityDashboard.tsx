"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, ShieldCheck, ShieldAlert, Activity, CheckCircle, Database, Server, ServerCrash, Cpu, ArrowUpRight } from "lucide-react";

interface NodeStatus {
  name: string;
  type: string;
  status: "secure" | "checking" | "warn";
  details: string;
}

export default function SecurityDashboard() {
  const [activeTab, setActiveTab] = useState<"compliance" | "metrics" | "nodes">("compliance");

  const nodes: NodeStatus[] = [
    { name: "Auth Service /api/v1/auth", type: "API Route", status: "secure", details: "MFA Enforced, TLS 1.3" },
    { name: "Payments /api/v1/billing", type: "API Route", status: "secure", details: "Row-Level RLS Active" },
    { name: "S3 Medical Storage Vault", type: "Asset", status: "secure", details: "Short-Lived Signed URLs" },
    { name: "AWS IAM Policy Mapper", type: "Infrastructure", status: "secure", details: "Least Privilege Verified" }
  ];

  return (
    <div className="w-full rounded-xl border border-border bg-[#121212]/80 backdrop-blur-md overflow-hidden shadow-2xl relative">
      
      {/* Title / Header Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 py-4 border-b border-border bg-black/40 gap-4">
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              TrustLayer Attestation Console
            </h3>
            <p className="text-xs text-textSecondary uppercase tracking-widest font-mono mt-0.5">
              Active Scopes: Production Environment
            </p>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex space-x-1 p-1 bg-black/40 rounded-lg border border-border self-stretch sm:self-auto justify-between">
          {(["compliance", "metrics", "nodes"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-md transition-all duration-200 ${
                activeTab === tab 
                  ? "bg-primary text-white" 
                  : "text-textSecondary hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 min-h-[340px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          {activeTab === "compliance" && (
            <motion.div
              key="compliance"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              {/* Compliance standards grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-black/30 border border-border p-4 rounded-lg flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                      <ShieldCheck size={16} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase font-mono">SOC2 Type II</h4>
                      <p className="text-xs text-textSecondary font-mono mt-0.5">Controls Framework</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-success font-mono">94% Ready</span>
                </div>

                <div className="bg-black/30 border border-border p-4 rounded-lg flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                      <ShieldCheck size={16} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase font-mono">ISO 27001</h4>
                      <p className="text-xs text-textSecondary font-mono mt-0.5">ISMS Verification</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-success font-mono">88% Ready</span>
                </div>

                <div className="bg-black/30 border border-border p-4 rounded-lg flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                      <ShieldCheck size={16} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase font-mono">GDPR / DPDP</h4>
                      <p className="text-xs text-textSecondary font-mono mt-0.5">PII Protection Vault</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-success font-mono">100% Pass</span>
                </div>

                <div className="bg-black/30 border border-border p-4 rounded-lg flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                      <ShieldCheck size={16} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase font-mono">HIPAA Rules</h4>
                      <p className="text-xs text-textSecondary font-mono mt-0.5">Patient File Controls</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-success font-mono">Compliant</span>
                </div>
              </div>

              {/* Progress Slider */}
              <div className="p-4 bg-black/20 border border-border/60 rounded-lg">
                <div className="flex justify-between items-center mb-2 text-xs font-mono uppercase tracking-wider text-textSecondary">
                  <span>Aggregate Security Health Score</span>
                  <span className="text-primary font-bold">96.8% Secure</span>
                </div>
                <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: "96.8%" }} />
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "metrics" && (
            <motion.div
              key="metrics"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              {/* Metrics STATS Row */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-black/30 border border-border p-3.5 rounded-lg text-center">
                  <span className="text-xs uppercase font-mono text-textSecondary tracking-wider block">Audited APIS</span>
                  <span className="text-xl font-bold text-white mt-1 block font-mono">112</span>
                </div>
                <div className="bg-black/30 border border-border p-3.5 rounded-lg text-center">
                  <span className="text-xs uppercase font-mono text-textSecondary tracking-wider block">Critical Flaws</span>
                  <span className="text-xl font-bold text-white mt-1 block font-mono">0</span>
                </div>
                <div className="bg-black/30 border border-border p-3.5 rounded-lg text-center">
                  <span className="text-xs uppercase font-mono text-textSecondary tracking-wider block">Fix SLA Rate</span>
                  <span className="text-xl font-bold text-success mt-1 block font-mono">100%</span>
                </div>
              </div>

              {/* Simulated SVG Graph */}
              <div className="p-4 bg-black/20 border border-border rounded-lg relative overflow-hidden">
                <div className="flex justify-between items-center mb-3 text-xs font-mono uppercase text-textSecondary">
                  <span className="flex items-center gap-1"><Activity size={12} className="text-primary" /> Attenuation integrity rate</span>
                  <span className="text-white">Active Scopes: 16 Assets</span>
                </div>
                
                <div className="h-24 w-full flex items-end">
                  <svg className="w-full h-full text-primary" viewBox="0 0 100 30" preserveAspectRatio="none">
                    <path
                      d="M0,28 L10,25 L20,20 L30,26 L40,15 L50,18 L60,10 L70,14 L80,8 L90,5 L100,5 L100,30 L0,30 Z"
                      fill="rgba(37, 99, 235, 0.05)"
                    />
                    <path
                      d="M0,28 L10,25 L20,20 L30,26 L40,15 L50,18 L60,10 L70,14 L80,8 L90,5 L100,5"
                      fill="none"
                      stroke="#2563EB"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "nodes" && (
            <motion.div
              key="nodes"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              <div className="text-xs font-mono text-textSecondary uppercase tracking-wider mb-2">
                Monitored Infrastructure Enclaves
              </div>

              {nodes.map((node, i) => (
                <div 
                  key={i}
                  className="p-3 bg-black/30 border border-border/80 rounded-lg flex items-center justify-between text-xs font-mono"
                >
                  <div className="flex items-center space-x-3">
                    <Server size={14} className="text-textSecondary" />
                    <div>
                      <span className="text-white font-semibold block">{node.name}</span>
                      <span className="text-xs text-textSecondary block mt-0.5">{node.details}</span>
                    </div>
                  </div>
                  
                  <span className="px-2 py-0.5 bg-success/10 border border-success/30 rounded text-xs uppercase font-bold text-success">
                    Attestation Checked
                  </span>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer Attestation Certificate */}
        <div className="border-t border-border pt-4 mt-6 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-textSecondary">
          <span className="flex items-center gap-1.5">
            <CheckCircle size={12} className="text-primary" /> Security Attestation Logged
          </span>
          <span className="flex items-center gap-1">
            2026 Build Verified <ArrowUpRight size={10} />
          </span>
        </div>
      </div>

    </div>
  );
}
