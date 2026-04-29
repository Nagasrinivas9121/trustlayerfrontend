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
  const [email, setEmail] = useState("");
  const [step, setStep] = useState("idle"); // idle, scanning, result
  const [progress, setProgress] = useState(0);
  const [scanType, setScanType] = useState("web");
  const [logs, setLogs] = useState([]);

  const scanOptions = [
    { id: "web", name: "Web App", icon: Globe, description: "Frontend & Logic" },
    { id: "api", name: "API (REST/GraphQL)", icon: Terminal, description: "Endpoints" },
    { id: "ssl", name: "SSL & Headers", icon: Lock, description: "Encryption" },
    { id: "subdomain", name: "Subdomain", icon: Search, description: "Exposure" },
    { id: "cloud", name: "Cloud Config", icon: Shield, description: "Infrastructure" },
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
            setTimeout(() => setStep("result"), 800);
            return 100;
          }
          return prev + 1;
        });
      }, 60);

      const logInterval = setInterval(() => {
        const messages = [
          "Initiating security handshake...",
          "Discovering endpoints and mapping routes...",
          "Checking for OWASP Top 10 vulnerabilities...",
          "Analyzing SSL/TLS configuration...",
          "Testing for API broken access control...",
          "Scanning for subdomain takeover possibilities...",
          "Checking for misconfigured security headers...",
          "Analyzing configurations and business logic...",
          "Compiling real-time security snapshot..."
        ];
        setLogs((prev) => {
          if (prev.length < messages.length) {
            return [...prev, messages[prev.length]];
          }
          return prev;
        });
      }, 700);

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
            Safe read-only scan • No downtime • No sensitive data stored
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
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
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
                      <span className="text-xs font-black uppercase tracking-widest">{opt.name}</span>
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
                        required
                      />
                    </div>
                    <button type="submit" className="btn-primary">
                      Begin Scan
                    </button>
                  </div>
                </form>

                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                  <div className="flex items-center text-sm font-bold text-slate-500 uppercase tracking-widest">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Read-only scan
                  </div>
                  <div className="flex items-center text-sm font-bold text-slate-500 uppercase tracking-widest">
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
                      <h3 className="font-black text-slate-900">Auditing {domain}</h3>
                      <p className="text-sm font-bold text-blue-600 uppercase tracking-widest">Real-time attack simulation</p>
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
                        <span className="text-slate-500 mr-3">[{new Date().toLocaleTimeString()}]</span>
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
                <div className="flex flex-col md:flex-row items-center justify-between mb-10 pb-8 border-b border-slate-100">
                  <div>
                    <h3 className="text-3xl font-black text-slate-900 mb-2">Audit Results: {domain}</h3>
                    <p className="text-slate-500 font-medium uppercase text-xs tracking-widest">Snapshot generated in 22 seconds</p>
                  </div>
                  <div className="mt-4 md:mt-0 flex flex-col items-center md:items-end">
                    <span className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Risk Score</span>
                    <div className="text-5xl font-black text-red-600 tracking-tighter">74<span className="text-slate-300 text-2xl">/100</span></div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                   <div className="space-y-6">
                      <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Sample Findings Preview</h4>
                      <div className="space-y-3">
                         {[
                           { name: "Broken Access Control", level: "Critical", id: "VULN-082" },
                           { name: "Insecure JWT Token Signature", level: "High", id: "VULN-014" },
                           { name: "Sensitive Data Exposure in API", level: "High", id: "VULN-112" },
                           { name: "Missing HSTS Header", level: "Medium", id: "VULN-005" },
                         ].map((vuln, i) => (
                           <div key={i} className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-2xl shadow-sm">
                              <div className="flex items-center">
                                 <AlertTriangle className={`w-4 h-4 mr-3 ${vuln.level === "Critical" ? "text-red-600" : vuln.level === "High" ? "text-amber-600" : "text-blue-600"}`} />
                                 <span className="font-bold text-slate-700 text-sm">{vuln.name}</span>
                              </div>
                              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{vuln.id}</span>
                           </div>
                         ))}
                      </div>
                   </div>
                   
                   <div className="bg-slate-900 rounded-[32px] p-8 text-white flex flex-col justify-between relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-3xl rounded-full" />
                      <div className="relative z-10">
                         <h4 className="text-2xl font-black mb-4">Download Full Report</h4>
                         <p className="text-slate-400 text-sm mb-8">We found 12 potential vulnerabilities. Enter your work email to receive the complete technical audit and remediation guide.</p>
                         
                         <div className="space-y-4">
                            <input 
                               type="email" 
                               placeholder="john@company.com" 
                               className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}
                            />
                            <button className="w-full btn-primary !bg-blue-600 hover:!bg-blue-500 shadow-blue-600/20">
                               Get Full Report (PDF)
                            </button>
                         </div>
                         <p className="text-center text-[10px] text-slate-500 mt-6 font-bold uppercase tracking-widest">Full report delivered in under 2 hours</p>
                      </div>
                   </div>
                </div>

                <div className="bg-slate-50 rounded-[40px] p-8 md:p-12 border border-slate-200/60 text-center">
                   <h4 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">Need expert help to fix these issues?</h4>
                   <p className="text-slate-500 font-medium mb-10 max-w-xl mx-auto">Talk to our certified ethical hackers for a professional remediation plan and passed-audit certification.</p>
                   <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                      <a href="https://calendar.app.google/jnamj3gawxVunPJm9" target="_blank" className="btn-primary flex items-center">
                         <Calendar className="w-5 h-5 mr-2" /> Book a Security Audit Call
                      </a>
                      <Link href="/services" className="btn-secondary">View VAPT Services</Link>
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
