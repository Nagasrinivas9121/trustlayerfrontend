"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle, ShieldCheck, ArrowRight, Loader2, Send, Calendar, Download } from "lucide-react";

export default function FreeAssessmentPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    scope: "web-app",
    size: "micro",
    urgency: "procurement",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
      return;
    }
    
    setLoading(true);
    try {
      // Simulate transmitting lead details
      await new Promise((res) => setTimeout(res, 1800));
      
      // Save lead details to localStorage
      const existingLeads = JSON.parse(localStorage.getItem("trustlayer_leads") || "[]");
      existingLeads.push({
        ...formData,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem("trustlayer_leads", JSON.stringify(existingLeads));

      setSuccess(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="bg-background min-h-screen pt-32 pb-24 font-sans text-textPrimary relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="section-container max-w-xl mx-auto px-4 relative z-10">
        
        {/* Back Link */}
        <Link 
          href="/" 
          className="inline-flex items-center text-xs uppercase tracking-widest text-textSecondary hover:text-textPrimary transition-colors gap-2 mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
          Back to Home
        </Link>

        {/* Heading */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-[10px] font-bold text-primary uppercase tracking-wider mb-3">
            <ShieldCheck size={12} className="text-primary" />
            <span>Complimentary Intake Audit</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-textPrimary tracking-tight">
            Free VAPT <span className="text-primary">Consultation</span>
          </h1>
          <p className="text-xs text-textSecondary mt-2 max-w-sm mx-auto leading-relaxed">
            Request an offensive security scoping review and receive an initial vulnerability snapshot for your build.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-surface border border-border/80 rounded-2xl p-6 sm:p-8 shadow-md">
          {success ? (
            <div className="text-center space-y-6 py-6 animate-fade-in">
              <div className="w-14 h-14 bg-success/15 border border-success/30 rounded-full flex items-center justify-center text-success mx-auto">
                <CheckCircle size={26} />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-textPrimary font-sans">Scoping Intake Registered!</h3>
                <p className="text-xs text-textSecondary max-w-sm mx-auto leading-relaxed">
                  Thank you! Our security architect is evaluating your details. We will email you with your custom audit snapshot scope within 4 hours.
                </p>
              </div>

              <div className="pt-4 border-t border-border/40 space-y-3">
                <p className="text-[10px] text-textSecondary uppercase tracking-widest font-bold">Recommended Next Steps:</p>
                <div className="flex flex-col gap-2.5">
                  <a 
                    href="/trustlayerlabs-sample-vapt-report.pdf" 
                    download
                    className="w-full inline-flex items-center justify-center py-3 bg-primary hover:bg-primary-hover text-white text-xs font-semibold uppercase tracking-wider rounded-lg gap-2 shadow-sm"
                  >
                    <Download size={14} /> Download Sample VAPT PDF
                  </a>
                  <Link
                    href="https://calendar.app.google/jnamj3gawxVunPJm9"
                    target="_blank"
                    className="w-full inline-flex items-center justify-center py-3 bg-[#0a0a0a] hover:bg-zinc-800 text-white text-xs font-semibold uppercase tracking-wider rounded-lg gap-2"
                  >
                    <Calendar size={14} /> Schedule Meeting on Calendar
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Step indicator */}
              <div className="flex items-center justify-between border-b border-border/40 pb-4 mb-2 text-[10px] font-mono uppercase tracking-wider text-textSecondary">
                <span>Step {step} of 3</span>
                <span>{step === 1 ? "Profile Details" : step === 2 ? "System Scoping" : "Urgency & Scope"}</span>
              </div>

              {/* Step 1 Fields */}
              {step === 1 && (
                <div className="space-y-4 animate-fade-in">
                  <div>
                    <label htmlFor="name" className="block text-[10px] font-bold text-textSecondary uppercase tracking-wider mb-2">
                      Full Name:
                    </label>
                    <input 
                      type="text" 
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      placeholder="e.g. Siddharth Sharma"
                      className="w-full bg-background border border-border/80 hover:border-zinc-400 focus:border-primary rounded-lg px-4 py-2.5 text-xs text-textPrimary placeholder:text-textSecondary/40 focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[10px] font-bold text-textSecondary uppercase tracking-wider mb-2">
                      Work Email:
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      placeholder="e.g. cto@startup.com"
                      className="w-full bg-background border border-border/80 hover:border-zinc-400 focus:border-primary rounded-lg px-4 py-2.5 text-xs text-textPrimary placeholder:text-textSecondary/40 focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-[10px] font-bold text-textSecondary uppercase tracking-wider mb-2">
                      Company Name:
                    </label>
                    <input 
                      type="text" 
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      required
                      placeholder="e.g. PayFlow"
                      className="w-full bg-background border border-border/80 hover:border-zinc-400 focus:border-primary rounded-lg px-4 py-2.5 text-xs text-textPrimary placeholder:text-textSecondary/40 focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="website" className="block text-[10px] font-bold text-textSecondary uppercase tracking-wider mb-2">
                      App / Website URL:
                    </label>
                    <input 
                      type="url" 
                      id="website"
                      value={formData.website}
                      onChange={(e) => setFormData({...formData, website: e.target.value})}
                      required
                      placeholder="e.g. https://play.google.com/store or https://yourdomain.com"
                      className="w-full bg-background border border-border/80 hover:border-zinc-400 focus:border-primary rounded-lg px-4 py-2.5 text-xs text-textPrimary placeholder:text-textSecondary/40 focus:outline-none transition-all"
                    />
                  </div>
                </div>
              )}

              {/* Step 2 Fields */}
              {step === 2 && (
                <div className="space-y-4 animate-fade-in">
                  <div>
                    <label htmlFor="scope" className="block text-[10px] font-bold text-textSecondary uppercase tracking-wider mb-2">
                      Audit Scoping Area:
                    </label>
                    <select 
                      id="scope"
                      value={formData.scope}
                      onChange={(e) => setFormData({...formData, scope: e.target.value})}
                      className="w-full bg-background border border-border/80 hover:border-zinc-400 focus:border-primary rounded-lg px-4 py-2.5 text-xs text-textPrimary focus:outline-none transition-all"
                    >
                      <option value="web-app">Web App Pentesting (React/NextJS/SaaS)</option>
                      <option value="api">API Security Review (REST/GraphQL/gRPC)</option>
                      <option value="mobile">Mobile App VAPT (iOS/Android)</option>
                      <option value="cloud">Cloud Security Audit (AWS/GCP least-privilege)</option>
                      <option value="smart-contract">Smart Contract Audit (Solidity/Web3)</option>
                      <option value="soc2">SOC 2 / ISO GRC Attestation Readiness</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="size" className="block text-[10px] font-bold text-textSecondary uppercase tracking-wider mb-2">
                      Application Scope Size:
                    </label>
                    <select 
                      id="size"
                      value={formData.size}
                      onChange={(e) => setFormData({...formData, size: e.target.value})}
                      className="w-full bg-background border border-border/80 hover:border-zinc-400 focus:border-primary rounded-lg px-4 py-2.5 text-xs text-textPrimary focus:outline-none transition-all"
                    >
                      <option value="micro">Early build (1-5 main API routes / static site)</option>
                      <option value="small">Standard build (6-15 main API routes / basic dashboard)</option>
                      <option value="medium">Growth build (16-40 API routes / complex database hooks)</option>
                      <option value="large">Enterprise scale (40+ endpoints / multi-microservices / multi-cloud)</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 3 Fields */}
              {step === 3 && (
                <div className="space-y-4 animate-fade-in">
                  <div>
                    <label htmlFor="urgency" className="block text-[10px] font-bold text-textSecondary uppercase tracking-wider mb-2">
                      Primary Review Driver:
                    </label>
                    <select 
                      id="urgency"
                      value={formData.urgency}
                      onChange={(e) => setFormData({...formData, urgency: e.target.value})}
                      className="w-full bg-background border border-border/80 hover:border-zinc-400 focus:border-primary rounded-lg px-4 py-2.5 text-xs text-textPrimary focus:outline-none transition-all"
                    >
                      <option value="procurement">Blocking an Enterprise vendor deal procurement review</option>
                      <option value="compliance">Prepping for SOC 2 Type II or ISO 27001 audit attestation</option>
                      <option value="funding">Investment / Funding due diligence check</option>
                      <option value="launch">Harden application code before production launch</option>
                      <option value="scheduled">Periodic scheduled security assessment</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[10px] font-bold text-textSecondary uppercase tracking-wider mb-2">
                      Scoping Brief (Optional):
                    </label>
                    <textarea 
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                      placeholder="Specify single tenant vs multi-tenant parameters, Swagger JSON references, or any specific vulnerability targets..."
                      className="w-full bg-background border border-border/80 hover:border-zinc-400 focus:border-primary rounded-lg p-3.5 text-xs text-textPrimary placeholder:text-textSecondary/40 focus:outline-none transition-all"
                    />
                  </div>
                </div>
              )}

              {/* Action buttons */}
              <div className="flex items-center gap-3 pt-4 border-t border-border/40">
                {step > 1 && (
                  <button 
                    type="button"
                    onClick={handleBack}
                    className="flex-1 py-3 border border-border hover:border-zinc-400 rounded-lg text-xs uppercase font-sans tracking-wider font-semibold text-textPrimary transition-colors"
                  >
                    Back
                  </button>
                )}
                <button 
                  type="submit"
                  disabled={loading}
                  className="flex-[2] inline-flex items-center justify-center py-3 bg-primary hover:bg-primary-hover text-xs uppercase font-sans font-semibold tracking-wider rounded-lg text-white shadow-sm transition-all gap-1.5 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 size={13} className="animate-spin" /> Analyzing Specs...
                    </>
                  ) : step < 3 ? (
                    <>
                      Next Step <ArrowRight size={12} />
                    </>
                  ) : (
                    <>
                      Request Free Scoping <Send size={12} />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
