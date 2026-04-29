"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, 
  Search, 
  Globe, 
  Lock, 
  Terminal, 
  AlertTriangle, 
  CheckCircle, 
  ArrowRight,
  Loader2,
  ChevronRight,
  Download,
  Calendar,
  Zap
} from "lucide-react";

export default function ScannerFlow() {
  const [domain, setDomain] = useState("");
  const [step, setStep] = useState("idle"); // idle, scanning, result
  const [progress, setProgress] = useState(0);
  const [scanType, setScanType] = useState("web");
  const [logs, setLogs] = useState([]);

  const scanOptions = [
    { id: "web", name: "Web App", icon: Globe, description: "Frontend & Logic" },
    { id: "api", name: "API", icon: Terminal, description: "REST/GraphQL" },
    { id: "ssl", name: "SSL & Headers", icon: Lock, description: "Encryption" },
    { id: "cloud", name: "Cloud Config", icon: Shield, description: "AWS/GCP/Azure" },
  ];

  const startScan = (e) => {
    e.preventDefault();
    if (!domain) return;
    setStep("scanning");
    setProgress(0);
    setLogs([]);
  };

  useEffect(() => {
    if (step === "scanning") {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setStep("result"), 500);
            return 100;
          }
          return prev + 1;
        });
      }, 50);

      const logInterval = setInterval(() => {
        const messages = [
          "Checking DNS records...",
          "Identifying server signatures...",
          "Scanning for open ports...",
          "Analyzing SSL/TLS configuration...",
          "Testing for OWASP Top 10 vulnerabilities...",
          "Checking for SQL Injection patterns...",
          "Verifying Cross-Site Scripting (XSS)...",
          "Analyzing security headers...",
          "Evaluating authentication flows...",
          "Compiling security snapshot..."
        ];
        setLogs((prev) => {
          if (prev.length < messages.length) {
            return [...prev, messages[prev.length]];
          }
          return prev;
        });
      }, 500);

      return () => {
        clearInterval(interval);
        clearInterval(logInterval);
      };
    }
  }, [step]);

  return (
    <section id="scan" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Run a Free Security Snapshot
          </h2>
          <p className="text-lg text-slate-500 max-w-[600px] mx-auto font-medium">
            Safe read-only scan. No downtime. Detailed report delivered in under 2 hours.
          </p>
        </div>

        <div className="glass-card rounded-[32px] p-2 md:p-12 max-w-4xl mx-auto overflow-hidden">
          <AnimatePresence mode="wait">
            {step === "idle" && (
              <motion.div
                key="idle"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                className="space-y-12 p-6 md:p-0"
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {scanOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setScanType(opt.id)}
                      className={`flex flex-col items-center p-6 rounded-2xl border-2 transition-all ${
                        scanType === opt.id 
                        ? "border-blue-600 bg-blue-50 text-blue-600 shadow-lg shadow-blue-500/10" 
                        : "border-slate-100 bg-white text-slate-400 hover:border-slate-200"
                      }`}
                    >
                      <opt.icon className={`w-8 h-8 mb-4 ${scanType === opt.id ? "text-blue-600" : "text-slate-400"}`} />
                      <span className="text-sm font-bold">{opt.name}</span>
                    </button>
                  ))}
                </div>

                <form onSubmit={startScan} className="relative group">
                  <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 bg-slate-100 p-2 rounded-3xl group-focus-within:bg-blue-50 transition-colors">
                    <div className="flex-1 flex items-center pl-6">
                      <Search className="w-5 h-5 text-slate-400 mr-4" />
                      <input 
                        type="text" 
                        placeholder="Enter your domain (e.g. company.com)"
                        className="w-full bg-transparent border-none outline-none py-4 text-slate-900 font-semibold placeholder:text-slate-400"
                        value={domain}
                        onChange={(e) => setDomain(e.target.value)}
                      />
                    </div>
                    <button type="submit" className="btn-primary">
                      Begin Scan
                    </button>
                  </div>
                </form>

                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                  <div className="flex items-center text-sm font-bold text-slate-500">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Safe read-only scan
                  </div>
                  <div className="flex items-center text-sm font-bold text-slate-500">
                    <Zap className="w-4 h-4 text-amber-500 mr-2" />
                    No downtime
                  </div>
                </div>
              </motion.div>
            )}

            {step === "scanning" && (
              <motion.div
                key="scanning"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-8 p-6 md:p-0"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center animate-pulse">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-black text-slate-900">Scanning {domain}</h3>
                      <p className="text-sm font-bold text-blue-600 uppercase tracking-widest">Live Security Audit</p>
                    </div>
                  </div>
                  <span className="text-2xl font-black text-slate-900">{progress}%</span>
                </div>

                <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-blue-600"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ type: "spring", bounce: 0, duration: 0.5 }}
                  />
                </div>

                <div className="bg-slate-900 rounded-2xl p-6 font-mono text-sm overflow-hidden h-[200px]">
                  <div className="flex flex-col-reverse space-y-reverse space-y-2">
                    {[...logs].reverse().map((log, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center text-blue-400"
                      >
                        <ChevronRight className="w-4 h-4 mr-2 text-blue-600" />
                        <span className="text-slate-300 mr-3">[{new Date().toLocaleTimeString()}]</span>
                        {log}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {step === "result" && (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8 p-6 md:p-0"
              >
                <div className="text-center mb-10">
                  <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-xs font-black uppercase tracking-widest mb-4">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Security Alert Found</span>
                  </div>
                  <h3 className="text-3xl font-black text-slate-900">Snapshot Complete</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    <span className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2 block">Risk Score</span>
                    <span className="text-4xl font-black text-red-600">68/100</span>
                  </div>
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    <span className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2 block">Vulnerabilities</span>
                    <span className="text-4xl font-black text-slate-900">12</span>
                  </div>
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    <span className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2 block">Threat Level</span>
                    <span className="text-4xl font-black text-amber-600">HIGH</span>
                  </div>
                </div>

                <div className="bg-blue-600 rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
                  <div>
                    <h4 className="text-xl font-bold mb-2">Get the Full Vulnerability Report</h4>
                    <p className="text-blue-100 font-medium opacity-90">Deep manual scan findings + remediation guide.</p>
                  </div>
                  <div className="flex space-x-4">
                    <button className="px-6 py-3 bg-white text-blue-600 font-bold rounded-xl flex items-center hover:bg-blue-50 transition-colors">
                      <Download className="w-4 h-4 mr-2" /> Download
                    </button>
                    <button className="px-6 py-3 bg-slate-900 text-white font-bold rounded-xl flex items-center hover:bg-slate-800 transition-colors">
                      <Calendar className="w-4 h-4 mr-2" /> Book Fix Call
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
