"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, 
  Search, 
  CheckCircle, 
  AlertTriangle, 
  Info, 
  ArrowRight, 
  Loader2, 
  Globe, 
  Zap, 
  Lock, 
  Server, 
  Database, 
  Cloud, 
  Clock, 
  FileText,
  ChevronDown,
  Check
} from "lucide-react";
import { startScan } from "@/lib/scanApi";
import { saveLead } from "@/lib/contactApi";

const steps = [
  { id: 0, title: "Scan" },
  { id: 1, title: "Analyzing" },
  { id: 2, title: "Preview" },
  { id: 3, title: "Full Report" },
];

const scanOptionsList = [
  { id: "web-app", label: "Web App", icon: <Globe className="w-5 h-5" />, description: "Frontend vulnerabilities" },
  { id: "api-endpoints", label: "API Endpoints", icon: <Zap className="w-5 h-5" />, description: "REST / GraphQL" },
  { id: "ssl-headers", label: "SSL & Headers", icon: <Lock className="w-5 h-5" />, description: "Security configurations" },
  { id: "subdomain-recon", label: "Subdomain Recon", icon: <Server className="w-5 h-5" />, description: "Hidden assets" },
  { id: "cloud-config", label: "Cloud Config", icon: <Cloud className="w-5 h-5" />, description: "AWS / GCP / Azure" },
  { id: "network-ports", label: "Network Ports", icon: <Database className="w-5 h-5" />, description: "Open port scanning" },
];

export default function ScannerFlow() {
  const [currentStep, setCurrentStep] = useState(0);
  const [domain, setDomain] = useState("");
  const [selectedOptions, setSelectedOptions] = useState(["web-app"]);
  const [showAdvanced, setShowAdvanced] = useState(false);
  
  const [leadData, setLeadData] = useState({
    name: "",
    email: "",
    company: ""
  });

  const [scanResult, setScanResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [verifyMessage, setVerifyMessage] = useState("Initializing scan...");

  // Progress simulation for Step 1
  useEffect(() => {
    if (currentStep === 1) {
      const messages = [
        "Normalizing domain...",
        "Resolving DNS...",
        "Fetching headers...",
        "Checking security configurations...",
        "Running TCP port scan...",
        "Generating security score...",
      ];
      
      let msgIndex = 0;
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setCurrentStep(2); // Go to Preview
            return 100;
          }
          
          if (prev % 20 === 0 && msgIndex < messages.length) {
            setVerifyMessage(messages[msgIndex]);
            msgIndex++;
          }
          
          return prev + 2;
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [currentStep]);

  const handleOptionToggle = (id) => {
    setSelectedOptions(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleStartScan = async () => {
    if (!domain) return;
    setLoading(true);
    try {
      const result = await startScan(domain, selectedOptions);
      setScanResult(result);
      setCurrentStep(1); // Start Analyzing step
      setProgress(0);
    } catch (error) {
      alert("Failed to run scan. Please verify domain.");
    } finally {
      setLoading(false);
    }
  };

  const handleDetailsSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await saveLead({
        ...leadData,
        domain,
        scanOptions: selectedOptions,
        score: scanResult.score,
        issues: scanResult.summary
      });
      setCurrentStep(3); // Unlock
    } catch (error) {
      alert("Failed to submit details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadReport = () => {
    if (!scanResult || !domain) return;
    const reportContent = `TrustLayer Labs Security Scan Report\n\nDomain: ${domain}\nSecurity Score: ${scanResult.score}/100\nRisk Level: ${scanResult.risk}\n\nSummary:\n- High Risk: ${scanResult.summary.high}\n- Medium Risk: ${scanResult.summary.medium}\n- Low Risk: ${scanResult.summary.low}\n\nDetailed Findings:\n${scanResult.full_findings.map(f => `[${f.severity}] ${f.title}\nEvidence: ${f.evidence}\n`).join('\n')}\nNote: This is an automated security snapshot. For a full VAPT audit, contact our experts.`;
    const element = document.createElement("a");
    const file = new Blob([reportContent], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `${domain}-vapt-report.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };


  return (
    <section id="scan" className="py-24 bg-white relative">
      <div className="max-w-[1100px] mx-auto px-4">
        
        {/* Step Indicator */}
        <div className="flex items-center justify-center mb-16 space-x-4">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  currentStep >= step.id ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-400"
                }`}>
                  {currentStep > step.id ? <Check className="w-4 h-4" /> : step.id + 1}
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-wider mt-2 ${
                  currentStep >= step.id ? "text-blue-600" : "text-slate-400"
                }`}>
                  {step.title}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className={`w-12 h-px mx-2 ${currentStep > step.id ? "bg-blue-600" : "bg-slate-200"}`} />
              )}
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {currentStep === 0 && (
            <motion.div 
              key="step0"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
            >
              {/* Left Side */}
              <div>
                <h2 className="text-4xl font-black text-slate-900 mb-4">Run Free Security Snapshot</h2>
                <p className="text-slate-500 text-lg mb-10">Get instant vulnerability insights in minutes. This is an automated snapshot to preview your security posture.</p>
                
                <div className="space-y-8">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">Domain to scan</label>
                    <div className="relative">
                      <input
                        type="text"
                        value={domain}
                        onChange={(e) => setDomain(e.target.value)}
                        placeholder="yourcompany.com"
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all font-medium"
                      />
                      <Globe className="absolute right-4 top-4 text-slate-300" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-4 uppercase tracking-wider">Scan Scope</label>
                    <div className="grid grid-cols-2 gap-3">
                      {scanOptionsList.map((option) => (
                        <button
                          key={option.id}
                          onClick={() => handleOptionToggle(option.id)}
                          className={`p-4 rounded-xl border text-left transition-all ${
                            selectedOptions.includes(option.id)
                              ? "bg-blue-50 border-blue-200 ring-1 ring-blue-500/10"
                              : "bg-white border-slate-100 hover:border-slate-200"
                          }`}
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${
                            selectedOptions.includes(option.id) ? "bg-blue-600 text-white" : "bg-slate-50 text-slate-400"
                          }`}>
                            {option.icon}
                          </div>
                          <div className="font-bold text-slate-900 text-sm">{option.label}</div>
                          <div className="text-[10px] text-slate-400 font-medium">{option.description}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Summary Card */}
              <div className="lg:sticky lg:top-32">
                <div className="soft-card p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100px] -z-10 opacity-50"></div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-blue-600" />
                    Scan Summary
                  </h3>

                  <div className="space-y-6 mb-8">
                    <div className="flex justify-between items-center py-3 border-b border-slate-50">
                      <span className="text-slate-500 font-medium">Domain</span>
                      <span className="text-slate-900 font-bold">{domain || "—"}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-slate-50">
                      <span className="text-slate-500 font-medium">Scope</span>
                      <span className="text-slate-900 font-bold">{selectedOptions.length} Modules</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-slate-50">
                      <span className="text-slate-500 font-medium">Estimated Time</span>
                      <span className="text-slate-900 font-bold flex items-center">
                        <Clock className="w-4 h-4 mr-1 text-slate-400" /> ~1-2 min
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={handleStartScan}
                    disabled={!domain || loading}
                    className="w-full btn-primary flex items-center justify-center space-x-2 py-4"
                  >
                    {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : (
                      <>
                        <span>Start Scan Now</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-slate-400 mt-4">By scanning, you confirm you have authorization to test this domain.</p>
                </div>
              </div>
            </motion.div>
          )}

          {currentStep === 1 && (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-xl mx-auto text-center py-20"
            >
              <div className="relative w-48 h-48 mx-auto mb-12">
                <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-100" />
                  <circle
                    cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="8" fill="transparent"
                    strokeDasharray={552.92}
                    strokeDashoffset={552.92 * (1 - progress / 100)}
                    className="text-blue-600 transition-all duration-100 ease-out"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-5xl font-black text-slate-900">{progress}%</span>
                    <div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mt-1">Analyzing</div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-black text-slate-900 mb-4 animate-pulse">{verifyMessage}</h2>
              <p className="text-slate-500 font-medium">Connecting to {domain} securely...</p>
            </motion.div>
          )}

          {currentStep === 2 && scanResult && (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl mx-auto"
            >
              <div className="soft-card p-12 relative overflow-hidden">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8 relative z-10">
                  <div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
                      Preview Scan Result for {domain}
                    </div>
                    <h2 className="text-5xl font-black text-slate-900">Security Score</h2>
                  </div>
                  
                  <div className="relative w-32 h-32">
                    <div className={`w-full h-full rounded-full border-8 border-slate-50 flex items-center justify-center relative bg-white shadow-xl`}>
                      <div className="text-center">
                        <span className={`text-4xl font-black ${
                          scanResult.score > 80 ? "text-green-500" : scanResult.score > 50 ? "text-amber-500" : "text-red-500"
                        }`}>
                          {scanResult.score}
                        </span>
                        <div className="text-[10px] uppercase font-black text-slate-400 tracking-widest">/ 100</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 relative z-10">
                  <div className="p-6 bg-red-50 rounded-2xl text-center">
                    <AlertTriangle className="w-8 h-8 text-red-500 mx-auto mb-3" />
                    <div className="text-3xl font-black text-red-600">{scanResult.summary.high}</div>
                    <div className="text-xs font-bold text-red-500 uppercase tracking-widest">High Risk</div>
                  </div>
                  <div className="p-6 bg-amber-50 rounded-2xl text-center">
                    <AlertTriangle className="w-8 h-8 text-amber-500 mx-auto mb-3" />
                    <div className="text-3xl font-black text-amber-600">{scanResult.summary.medium}</div>
                    <div className="text-xs font-bold text-amber-500 uppercase tracking-widest">Medium Risk</div>
                  </div>
                  <div className="p-6 bg-blue-50 rounded-2xl text-center">
                    <CheckCircle className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                    <div className="text-3xl font-black text-blue-600">{scanResult.summary.low}</div>
                    <div className="text-xs font-bold text-blue-500 uppercase tracking-widest">Low Risk</div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-2xl p-8 mb-10 relative">
                  <h4 className="text-lg font-bold text-slate-900 mb-6 flex items-center justify-between">
                    <span>Preview Findings</span>
                    <span className="text-xs font-semibold text-slate-400 bg-white px-3 py-1 rounded-full shadow-sm">{scanResult.preview_findings.length} displayed</span>
                  </h4>
                  <div className="space-y-4">
                    {scanResult.preview_findings.map((finding, idx) => (
                      <div key={idx} className="flex items-start space-x-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                          finding.severity === 'High' ? 'bg-red-500' : finding.severity === 'Medium' ? 'bg-amber-500' : 'bg-blue-500'
                        }`}></div>
                        <div>
                          <div className="font-bold text-slate-900 text-sm">{finding.title}</div>
                          <p className="text-xs text-slate-500 mt-1">{finding.evidence}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Glassmorphism Lock Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white via-white/95 to-transparent flex flex-col items-center justify-end pb-8 z-20">
                    <div className="bg-white p-8 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 max-w-md w-full text-center">
                      <Lock className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Unlock Full Report</h3>
                      <p className="text-sm text-slate-500 mb-6">Enter your details to view all vulnerabilities and download the comprehensive PDF report.</p>
                      <form onSubmit={handleDetailsSubmit} className="space-y-4 text-left">
                        <input
                          type="text" required value={leadData.name} onChange={(e) => setLeadData({ ...leadData, name: e.target.value })}
                          placeholder="Full Name"
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 outline-none text-sm"
                        />
                        <input
                          type="email" required value={leadData.email} onChange={(e) => setLeadData({ ...leadData, email: e.target.value })}
                          placeholder="Work Email"
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 outline-none text-sm"
                        />
                        <input
                          type="text" required value={leadData.company} onChange={(e) => setLeadData({ ...leadData, company: e.target.value })}
                          placeholder="Company Name"
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 outline-none text-sm"
                        />
                        <button type="submit" disabled={loading} className="w-full btn-primary py-3 flex justify-center items-center">
                          {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Unlock Full Report →"}
                        </button>
                      </form>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {currentStep === 3 && scanResult && (
            <motion.div 
              key="step3"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-4xl mx-auto"
            >
              <div className="soft-card p-12 relative overflow-hidden">
                <div className="text-center mb-12">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 mb-2">Report Unlocked</h2>
                  <p className="text-slate-500">Your snapshot report for {domain} is ready to download.</p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-8 mb-10">
                  <h4 className="text-lg font-bold text-slate-900 mb-6">Full Detailed Findings</h4>
                  <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                    {scanResult.full_findings?.map((finding, idx) => (
                      <div key={idx} className="flex items-start space-x-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                          finding.severity === 'High' ? 'bg-red-500' : finding.severity === 'Medium' ? 'bg-amber-500' : 'bg-blue-500'
                        }`}></div>
                        <div>
                          <div className="font-bold text-slate-900 text-sm">{finding.title}</div>
                          <p className="text-xs text-slate-500 mt-1">{finding.evidence}</p>
                          <div className="mt-3 pt-3 border-t border-slate-50 text-xs text-slate-600">
                            <strong>Recommendation:</strong> Consult with a security expert to implement a permanent fix for this vulnerability.
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="p-4 bg-blue-50 text-blue-800 rounded-xl border border-blue-100 text-sm font-medium text-center">
                      <Lock className="w-4 h-4 inline mr-1 -mt-0.5" /> 
                      This automated snapshot reveals surface-level issues. A manual VAPT uncovers logic flaws and deep exploits.
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button onClick={handleDownloadReport} className="flex-1 btn-primary py-4 text-center justify-center">
                    Download Full PDF Report
                  </button>
                  <Link href="/contact" className="flex-1 btn-secondary py-4 text-center flex items-center justify-center">
                    Talk to Expert <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>

                <div className="mt-8 text-center border-t border-slate-100 pt-8">
                  <p className="text-xs text-slate-400 font-medium">Disclaimer: This is an automated security snapshot. For a full VAPT audit, contact our experts.</p>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </section>
  );
}
