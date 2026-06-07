"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, ShieldAlert, ShieldCheck, Activity, Terminal as TerminalIcon, Cpu, Layers } from "lucide-react";

interface ThreatAlert {
  id: string;
  source: string;
  type: string;
  severity: "critical" | "high" | "warning" | "success";
  time: string;
  message: string;
}

export default function ThreatDashboard() {
  const [activeTab, setActiveTab] = useState<"system" | "alerts" | "network">("system");
  const [pulse, setPulse] = useState(true);
  const [alerts, setAlerts] = useState<ThreatAlert[]>([
    {
      id: "1",
      source: "API Gateway",
      type: "BOLA Attempt",
      severity: "critical",
      time: "19:42:10",
      message: "Unchecked resource parameter manipulation on /v1/accounts/transfers"
    },
    {
      id: "2",
      source: "AWS S3 Bucket",
      type: "Public Policy Misconfig",
      severity: "high",
      time: "19:41:05",
      message: "Access policies updated to public-read for client archive folder"
    },
    {
      id: "3",
      source: "IAM Service",
      type: "Privilege Escalation",
      severity: "warning",
      time: "19:38:52",
      message: "Developer account attempted to assume Root Administrator roles"
    },
    {
      id: "4",
      source: "GraphQL Endpoint",
      type: "Query Injection",
      severity: "success",
      time: "19:35:12",
      message: "Rate limits applied and recursive query blocked successfully"
    }
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulse((prev) => !prev);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full rounded-2xl border border-border/80 bg-[#141720]/80 backdrop-blur-md overflow-hidden shadow-2xl relative">
      {/* Dashboard Glows */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Title Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 py-4 border-b border-border/60 bg-[#0D0F14]/60 gap-4">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
          </div>
          <div>
            <h3 className="text-sm font-bold text-white tracking-wide uppercase">TrustLayer Threat Portal</h3>
            <p className="text-[11px] text-textSecondary uppercase font-mono tracking-widest mt-0.5">Console: Active Scopes</p>
          </div>
        </div>

        <div className="flex space-x-1.5 p-1 bg-background/80 rounded-lg border border-border/60 self-stretch sm:self-auto justify-between">
          {(["system", "alerts", "network"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-md transition-all duration-200 ${
                activeTab === tab 
                  ? "bg-primary text-white shadow-md shadow-primary/30" 
                  : "text-textSecondary hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-6 min-h-[380px] grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Side: Diagnostics or Visual Grid */}
        <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
          <AnimatePresence mode="wait">
            {activeTab === "system" && (
              <motion.div
                key="system"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Metrics Stats Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-[#0D0F14]/40 border border-border/40 p-4 rounded-xl flex items-center space-x-3.5">
                    <div className="p-2.5 bg-primary/10 rounded-lg text-primary border border-primary/20">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-mono tracking-widest text-textSecondary">Audit Scopes</div>
                      <div className="text-xl font-bold text-white mt-1">16 Active</div>
                    </div>
                  </div>
                  
                  <div className="bg-[#0D0F14]/40 border border-border/40 p-4 rounded-xl flex items-center space-x-3.5">
                    <div className="p-2.5 bg-critical/10 rounded-lg text-critical border border-critical/20">
                      <ShieldAlert className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-mono tracking-widest text-textSecondary">Critical Flaws</div>
                      <div className="text-xl font-bold text-white mt-1">0 Exposed</div>
                    </div>
                  </div>

                  <div className="bg-[#0D0F14]/40 border border-border/40 p-4 rounded-xl flex items-center space-x-3.5">
                    <div className="p-2.5 bg-success/10 rounded-lg text-success border border-success/20">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-mono tracking-widest text-textSecondary">Attestations</div>
                      <div className="text-xl font-bold text-white mt-1">Verified</div>
                    </div>
                  </div>
                </div>

                {/* Simulated Chart Container */}
                <div className="p-5 bg-[#0D0F14]/30 border border-border/40 rounded-xl relative overflow-hidden">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-textSecondary flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5 text-accent animate-pulse" /> Live Integrity Scan Rate
                    </span>
                    <span className="text-[10px] font-mono text-primary font-bold">148.4 RPS</span>
                  </div>

                  {/* SVG Chart */}
                  <div className="h-32 w-full flex items-end">
                    <svg className="w-full h-full text-primary" viewBox="0 0 100 30" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#3B5BDB" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#3B5BDB" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,25 Q15,5 30,18 T60,8 T90,20 L100,10 L100,30 L0,30 Z"
                        fill="url(#chartGlow)"
                      />
                      <path
                        d="M0,25 Q15,5 30,18 T60,8 T90,20 L100,10"
                        fill="none"
                        stroke="#3B5BDB"
                        strokeWidth="1.5"
                        className="animate-pulse"
                      />
                    </svg>
                  </div>

                  {/* Dynamic Grid Overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(20,23,32,0)_95%,#1f2937_95%)] bg-[size:100%_12px] opacity-10 pointer-events-none" />
                </div>
              </motion.div>
            )}

            {activeTab === "alerts" && (
              <motion.div
                key="alerts"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-3.5 max-h-[300px] overflow-y-auto pr-1"
              >
                {alerts.map((alert) => (
                  <div 
                    key={alert.id} 
                    className={`p-4 border bg-background/50 rounded-xl flex items-start space-x-3.5 transition-all ${
                      alert.severity === "critical" ? "border-critical/30 hover:border-critical/60" :
                      alert.severity === "high" ? "border-warning/30 hover:border-warning/60" :
                      alert.severity === "warning" ? "border-accent/30 hover:border-accent/60" :
                      "border-success/30 hover:border-success/60"
                    }`}
                  >
                    <div className={`p-2 rounded-lg text-white mt-0.5 ${
                      alert.severity === "critical" ? "bg-critical/20 text-critical" :
                      alert.severity === "high" ? "bg-warning/20 text-warning" :
                      alert.severity === "warning" ? "bg-accent/20 text-accent" :
                      "bg-success/20 text-success"
                    }`}>
                      <ShieldAlert className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white uppercase font-mono tracking-wider">{alert.type}</span>
                        <span className="text-[10px] font-mono text-textSecondary">{alert.time}</span>
                      </div>
                      <p className="text-[12px] text-textSecondary mt-1 leading-relaxed">{alert.message}</p>
                      <div className="flex items-center gap-4 mt-2.5 text-[9px] font-mono uppercase tracking-widest text-textSecondary">
                        <span>Source: <span className="text-white">{alert.source}</span></span>
                        <span className="flex items-center gap-1">
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            alert.severity === "critical" ? "bg-critical" :
                            alert.severity === "high" ? "bg-warning" :
                            alert.severity === "warning" ? "bg-accent" :
                            "bg-success"
                          }`} />
                          {alert.severity}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "network" && (
              <motion.div
                key="network"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {/* Node scanning network schema */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-background/40 border border-border/40 rounded-xl flex items-center space-x-3">
                    <Cpu className="w-5 h-5 text-accent animate-pulse" />
                    <div>
                      <h4 className="text-[11px] font-bold text-white uppercase tracking-wider font-mono">Edge Gateways</h4>
                      <p className="text-xs text-textSecondary font-mono mt-0.5">8 Active endpoints</p>
                    </div>
                  </div>
                  <div className="p-4 bg-background/40 border border-border/40 rounded-xl flex items-center space-x-3">
                    <Layers className="w-5 h-5 text-primary" />
                    <div>
                      <h4 className="text-[11px] font-bold text-white uppercase tracking-wider font-mono">Isolated DB Tenants</h4>
                      <p className="text-xs text-textSecondary font-mono mt-0.5">AWS Row-Level Signed</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#0D0F14]/50 border border-border/40 rounded-xl font-mono text-[11px] text-textSecondary space-y-1">
                  <div className="flex justify-between border-b border-border/20 pb-2">
                    <span className="text-white font-bold">ROUTE PATH</span>
                    <span className="text-white font-bold">SSL VERDICT</span>
                    <span className="text-white font-bold">INTEGRITY</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span>/api/v1/auth/mfa</span>
                    <span className="text-success">TLS 1.3 PASS</span>
                    <span className="text-white">100%</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span>/api/v1/billing/checkout</span>
                    <span className="text-success">TLS 1.3 PASS</span>
                    <span className="text-white">100%</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span>/api/v1/users/admin_panel</span>
                    <span className="text-warning">EXPOSED</span>
                    <span className="text-critical font-bold">Bypassed (401)</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom Security Assurance Badges */}
          <div className="border-t border-border/40 pt-4 flex flex-wrap gap-x-6 gap-y-2 text-[10px] font-bold font-mono uppercase tracking-widest text-textSecondary">
            <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-primary" /> ISO 27001 COMPLIANT</span>
            <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-primary" /> SOC2 CERT READY</span>
            <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-primary" /> OWASP COMPLIANT</span>
          </div>
        </div>

        {/* Right Side: Threat Score Visual Card */}
        <div className="lg:col-span-4 bg-background/50 border border-border/50 rounded-xl p-5 flex flex-col justify-between items-center text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/[0.02] radial-glow -z-10" />
          
          <span className="text-[10px] font-bold font-mono text-textSecondary uppercase tracking-widest">
            Overall Security Health
          </span>

          <div className="relative my-6 w-36 h-36 flex items-center justify-center">
            {/* Outer Circular Loader */}
            <svg className="absolute w-full h-full transform -rotate-90">
              <circle
                cx="72"
                cy="72"
                r="64"
                stroke="rgba(31,41,55,0.4)"
                strokeWidth="6"
                fill="transparent"
              />
              <circle
                cx="72"
                cy="72"
                r="64"
                stroke="#3B5BDB"
                strokeWidth="6"
                fill="transparent"
                strokeDasharray="402"
                strokeDashoffset="40" // 90% score
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-black text-white">90%</span>
              <span className="text-[9px] font-mono text-success uppercase tracking-widest mt-1 font-bold">SECURE (VAPT)</span>
            </div>
          </div>

          <div className="w-full space-y-2.5">
            <div className="flex justify-between items-center text-[10px] font-mono">
              <span className="text-textSecondary">SYSTEM INTEGRITY:</span>
              <span className="text-white font-bold">STABLE</span>
            </div>
            <div className="flex justify-between items-center text-[10px] font-mono">
              <span className="text-textSecondary">ATTACK SURFACE:</span>
              <span className="text-success font-bold">MINIMAL</span>
            </div>
            <div className="flex justify-between items-center text-[10px] font-mono">
              <span className="text-textSecondary">GRC READINESS:</span>
              <span className="text-accent font-bold">94%</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
