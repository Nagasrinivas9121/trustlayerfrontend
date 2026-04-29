"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ShieldAlert, CheckCircle, ShieldCheck, ArrowRight, Loader2 } from "lucide-react";
import { runScan } from "@/lib/scanApi";
import Link from "next/link";

export default function Scanner() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);
  const [emailState, setEmailState] = useState("idle"); // idle, loading, success

  const handleScan = async (e) => {
    e.preventDefault();
    if (!url) return;
    
    setLoading(true);
    setError(null);
    setResult(null);
    
    try {
      const data = await runScan(url);
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setEmailState("loading");
    // Simulate email capture for lead gen
    setTimeout(() => {
      setEmailState("success");
    }, 1500);
  };

  return (
    <section id="scanner" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-200/20 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-200/20 rounded-full blur-[80px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Scan Your Website for Vulnerabilities — <span className="text-gradient">Free</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Get an instant security score and discover critical issues before attackers do. This is a lightweight assessment to identify immediate risks.
          </p>
        </div>

        <motion.div 
          className="bg-white rounded-3xl p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {!result ? (
            <form onSubmit={handleScan} className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://example.com"
                    required
                    className="block w-full pl-11 pr-4 py-4 text-base bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all placeholder:text-slate-400 text-slate-800 font-medium shadow-sm"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-700 text-white rounded-2xl font-semibold transition-all shadow-md flex items-center justify-center min-w-[200px]"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Scanning...
                    </>
                  ) : (
                    "Start Free Scan"
                  )}
                </button>
              </div>
              {error && (
                <p className="text-red-500 text-sm font-medium pl-4">{error}</p>
              )}
              <p className="text-xs text-slate-400 text-center pt-2">
                By scanning, you agree to our Terms of Service. Only scan domains you own or have permission to test.
              </p>
            </form>
          ) : (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* Results Dashboard */}
              <div className="flex flex-col md:flex-row gap-8 items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-center md:text-left flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Scan Complete</h3>
                  <p className="text-slate-500 text-sm break-all font-medium">{url}</p>
                </div>
                
                <div className="flex items-center justify-center w-32 h-32 rounded-full bg-white shadow-sm border-[6px] border-slate-100 relative">
                  <div className={`absolute inset-0 rounded-full border-[6px] ${result.score > 80 ? 'border-green-500' : result.score > 50 ? 'border-yellow-500' : 'border-red-500'} opacity-50`} style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)' }}></div>
                  <div className="text-center">
                    <span className="text-4xl font-extrabold text-slate-900">{result.score}</span>
                    <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">Score</span>
                  </div>
                </div>
              </div>

              {/* Issues Summary */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-red-50 rounded-xl p-4 border border-red-100 text-center">
                  <ShieldAlert className="w-8 h-8 text-red-500 mx-auto mb-2" />
                  <span className="block text-2xl font-bold text-red-700">{result.issues.high}</span>
                  <span className="text-xs font-semibold text-red-600 uppercase">High Risk</span>
                </div>
                <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-100 text-center">
                  <ShieldAlert className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <span className="block text-2xl font-bold text-yellow-700">{result.issues.medium}</span>
                  <span className="text-xs font-semibold text-yellow-600 uppercase">Medium Risk</span>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 text-center">
                  <CheckCircle className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <span className="block text-2xl font-bold text-blue-700">{result.issues.low}</span>
                  <span className="text-xs font-semibold text-blue-600 uppercase">Low Risk</span>
                </div>
              </div>

              {/* Lead Capture */}
              <div className="mt-8 pt-8 border-t border-slate-100">
                {emailState === "success" ? (
                  <div className="bg-green-50 rounded-2xl p-6 text-center border border-green-100">
                    <ShieldCheck className="w-12 h-12 text-green-500 mx-auto mb-3" />
                    <h4 className="text-xl font-bold text-green-900 mb-2">Request Received</h4>
                    <p className="text-green-700 text-sm mb-6">Our security experts will analyze the results and contact you shortly.</p>
                    <Link 
                      href="https://calendar.app.google/J2JjTsqSHMDWTNu4A" 
                      target="_blank"
                      className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold transition-all"
                    >
                      Book Full Audit Now <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                ) : (
                  <div className="bg-slate-900 rounded-2xl p-6 md:p-8 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl"></div>
                    <h4 className="text-2xl font-bold text-white mb-3 relative z-10">Get the Full Vulnerability Report</h4>
                    <p className="text-slate-400 text-sm mb-6 max-w-md mx-auto relative z-10">
                      Enter your work email to receive the detailed breakdown of the vulnerabilities found and remediation steps.
                    </p>
                    <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto relative z-10">
                      <input 
                        type="email" 
                        required
                        placeholder="Work Email" 
                        className="flex-grow px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                      <button 
                        type="submit"
                        disabled={emailState === "loading"}
                        className="px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-xl transition-colors disabled:opacity-70 flex items-center justify-center whitespace-nowrap"
                      >
                        {emailState === "loading" ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : "Send Report"}
                      </button>
                    </form>
                    <div className="mt-6 pt-6 border-t border-slate-800 flex flex-col items-center">
                      <span className="text-slate-500 text-sm mb-3">Or skip the report and talk to an expert</span>
                      <Link 
                        href="https://calendar.app.google/J2JjTsqSHMDWTNu4A" 
                        target="_blank"
                        className="text-white hover:text-primary-400 font-semibold flex items-center transition-colors"
                      >
                        Book Full VAPT Audit <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="text-center mt-4">
                 <button onClick={() => {setResult(null); setUrl("");}} className="text-sm font-medium text-slate-500 hover:text-slate-800 underline">Scan another website</button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
