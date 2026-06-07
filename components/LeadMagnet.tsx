"use client";

import React, { useState } from "react";
import { FileDown, CheckCircle, Shield, ArrowRight, Loader2 } from "lucide-react";
import axios from "axios";

export default function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    try {
      // Simulate/trigger lead API capture
      await new Promise((res) => setTimeout(res, 1200));
      setSuccess(true);
      setMessage("Download links have been sent to your email address!");
      setEmail("");
    } catch (err) {
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-background border-t border-border relative" id="resources">
      {/* Glow highlight */}
      <div className="absolute top-0 right-10 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="section-container">
        <div className="premium-card bg-surface p-8 md:p-14 border-border/80 max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-br from-primary/10 to-accent/5 rounded-full blur-[60px] pointer-events-none -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-black border border-border rounded-full text-[9px] font-bold text-primary uppercase tracking-wider">
                <Shield size={12} className="text-primary" />
                <span>Free Security Assets</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white uppercase font-mono tracking-wider leading-tight">
                Download Our <span className="text-primary">Security Playbooks</span>
              </h3>

              <p className="text-xs text-textSecondary leading-relaxed font-sans">
                Get immediate access to our internal 2026 API Security Checklist (OWASP aligned) and a complete redacted VAPT audit report to see how we trace business logic bypasses.
              </p>

              <div className="space-y-3.5 text-xs font-sans">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-success/15 border border-success/30 flex items-center justify-center text-success flex-shrink-0">
                    ✓
                  </div>
                  <span className="text-textPrimary font-mono text-[10px] uppercase tracking-wider">API Security Checklist PDF (32 Control points)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-success/15 border border-success/30 flex items-center justify-center text-success flex-shrink-0">
                    ✓
                  </div>
                  <span className="text-textPrimary font-mono text-[10px] uppercase tracking-wider">Sample Redacted Audit Report (Full walk-through layout)</span>
                </div>
              </div>
            </div>

            {/* Right Capture Form Column */}
            <div className="lg:col-span-5 bg-black/30 border border-border/80 p-6 rounded-xl space-y-5">
              <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider text-center border-b border-border/40 pb-3">
                Unlock Instantly
              </h4>

              {success ? (
                <div className="text-center py-6 space-y-4">
                  <div className="w-12 h-12 bg-success/10 border border-success/30 rounded-full flex items-center justify-center text-success mx-auto">
                    <FileDown size={22} />
                  </div>
                  <p className="text-xs text-textPrimary leading-relaxed font-mono">
                    {message}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleDownload} className="space-y-4 font-sans">
                  <div>
                    <label htmlFor="lead-email" className="block text-[9px] font-bold font-mono text-textSecondary uppercase tracking-wider mb-2">
                      Work Email Address:
                    </label>
                    <input 
                      type="email" 
                      id="lead-email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="founder@yourstartup.com"
                      className="w-full bg-[#0A0A0A] border border-border/60 hover:border-zinc-700 focus:border-primary rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-textSecondary/40 focus:outline-none transition-all font-mono"
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center py-3 bg-primary hover:bg-blue-700 text-[10px] uppercase font-mono font-bold tracking-wider rounded-lg text-white shadow-sm transition-all gap-1.5 disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={13} className="animate-spin" /> Verifying...
                      </>
                    ) : (
                      <>
                        Get Scopes & Checklists <ArrowRight size={13} />
                      </>
                    )}
                  </button>

                  <p className="text-[9px] text-textSecondary leading-normal text-center font-mono uppercase">
                    We respect your privacy. No spam. Unsubscribe at any time.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
