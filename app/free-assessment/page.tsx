"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle, ShieldCheck, ArrowRight, Loader2, Send, Calendar, Download, AlertCircle, Shield } from "lucide-react";
import { openCalendly } from "@/lib/calendly";
import { 
  trackFreeSecurityReviewStart, 
  trackFreeSecurityReviewSubmit, 
  trackCalendarClick, 
  trackSampleReportClick 
} from "@/lib/analytics";

export default function FreeAssessmentPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    productType: "b2b-saas",
    securityRequirement: "api-authorization-bola",
    timeline: "within-2-weeks",
    message: ""
  });

  useEffect(() => {
    trackFreeSecurityReviewStart("free_assessment_page");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Simulate transmitting lead details
      await new Promise((res) => setTimeout(res, 1200));
      
      // Save lead details to localStorage
      const existingLeads = JSON.parse(localStorage.getItem("trustlayer_leads") || "[]");
      existingLeads.push({
        ...formData,
        source: "free-security-review-intake",
        timestamp: new Date().toISOString()
      });
      localStorage.setItem("trustlayer_leads", JSON.stringify(existingLeads));

      trackFreeSecurityReviewSubmit({
        product_type: formData.productType,
        security_requirement: formData.securityRequirement,
        timeline: formData.timeline
      });

      setSuccess(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-background min-h-screen pt-32 pb-24 font-sans text-textPrimary relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] max-w-[100vw] h-[700px] bg-primary/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="section-container max-w-2xl mx-auto px-4 relative z-10">
        
        {/* Back Link */}
        <Link 
          href="/" 
          className="inline-flex items-center text-xs uppercase tracking-widest text-textSecondary hover:text-textPrimary transition-colors gap-2 mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
          Back to Home
        </Link>

        {/* Heading & CRO Framing */}
        <div className="mb-10 text-center space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-[10px] font-bold text-primary uppercase tracking-wider">
            <ShieldCheck size={12} className="text-primary" />
            <span>Mutual NDA Upfront • Practitioner-Led</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-textPrimary tracking-tight font-sans">
            Free 20-Minute <span className="text-primary">Security Review</span>
          </h1>
          <p className="text-sm font-semibold text-textPrimary max-w-md mx-auto">
            For SaaS, FinTech & AI startups.
          </p>
          <p className="text-xs text-textSecondary max-w-lg mx-auto leading-relaxed font-sans">
            A high-signal, confidential 20-minute consultation with an offensive security practitioner to review your attack surface and identify potential security blockers before production launch, audits, or enterprise deals.
          </p>
        </div>

        {/* Value Proposition Highlights */}
        <div className="mb-8 p-5 bg-surface border border-border/80 rounded-2xl shadow-sm">
          <div className="text-[11px] font-mono font-bold text-textPrimary uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <Shield size={14} className="text-primary" />
            <span>What We Identify During Your 20-Minute Review:</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-textSecondary">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              <span>External Attack Surface & Open Endpoints</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              <span>API Authorization & BOLA / IDOR Risks</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              <span>Authentication & JWT Token Vulnerabilities</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              <span>Multi-Tenant Database Isolation Weaknesses</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              <span>Business-Logic & Multi-Step Workflow Flaws</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              <span>AI / RAG Data Safety & Prompt Boundaries</span>
            </div>
            <div className="flex items-center gap-2 sm:col-span-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              <span>Enterprise Vendor Security-Review & Questionnaire Blockers</span>
            </div>
          </div>
          <p className="text-[11px] text-textSecondary/80 mt-3 pt-3 border-t border-border/60">
            * This review is a qualification and scoping consultation under mutual NDA, not an automated sales pitch or paid pentest.
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
                <h3 className="text-lg font-bold text-textPrimary font-sans">Security Review Request Received!</h3>
                <p className="text-xs text-textSecondary max-w-sm mx-auto leading-relaxed">
                  Thank you, {formData.name || "founder"}! Our lead offensive security practitioner is reviewing your product architecture. We will email you within one business day with scoping availability under mutual NDA.
                </p>
              </div>

              <div className="pt-4 border-t border-border/40 space-y-3">
                <p className="text-[10px] text-textSecondary uppercase tracking-widest font-bold">Recommended Next Steps:</p>
                <div className="flex flex-col gap-2.5">
                  <button
                    type="button"
                    onClick={() => {
                      trackCalendarClick("post_submit_calendar");
                      openCalendly();
                    }}
                    className="w-full inline-flex items-center justify-center py-3 bg-primary hover:bg-primary-hover text-white text-xs font-semibold uppercase tracking-wider rounded-lg gap-2 cursor-pointer shadow-sm"
                  >
                    <Calendar size={14} /> Schedule 20-Min Review On Calendar Now
                  </button>
                  <a 
                    href="/trustlayerlabs-sample-vapt-report.pdf" 
                    download
                    onClick={() => trackSampleReportClick("post_submit_pdf")}
                    className="w-full inline-flex items-center justify-center py-3 bg-background border border-border hover:border-zinc-400 text-textPrimary text-xs font-semibold uppercase tracking-wider rounded-lg gap-2 transition-colors"
                  >
                    <Download size={14} /> Download Sample Assessment PDF
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Row 1: Name & Work Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-[10px] font-bold text-textSecondary uppercase tracking-wider mb-1.5">
                    Your Name:
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    placeholder="e.g. Siddharth Sharma"
                    className="w-full bg-background border border-border/80 hover:border-zinc-400 focus:border-primary rounded-lg px-3.5 py-2.5 text-xs text-textPrimary placeholder:text-textSecondary/40 focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[10px] font-bold text-textSecondary uppercase tracking-wider mb-1.5">
                    Work Email:
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    placeholder="e.g. alex@company.com"
                    className="w-full bg-background border border-border/80 hover:border-zinc-400 focus:border-primary rounded-lg px-3.5 py-2.5 text-xs text-textPrimary placeholder:text-textSecondary/40 focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Company & Website */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-[10px] font-bold text-textSecondary uppercase tracking-wider mb-1.5">
                    Company Name:
                  </label>
                  <input 
                    type="text" 
                    id="company"
                    name="company"
                    autoComplete="organization"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    required
                    placeholder="e.g. CloudScale"
                    className="w-full bg-background border border-border/80 hover:border-zinc-400 focus:border-primary rounded-lg px-3.5 py-2.5 text-xs text-textPrimary placeholder:text-textSecondary/40 focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="website" className="block text-[10px] font-bold text-textSecondary uppercase tracking-wider mb-1.5">
                    Website / App URL:
                  </label>
                  <input 
                    type="text" 
                    id="website"
                    name="website"
                    autoComplete="url"
                    value={formData.website}
                    onChange={(e) => setFormData({...formData, website: e.target.value})}
                    required
                    placeholder="e.g. https://cloudscale.io"
                    className="w-full bg-background border border-border/80 hover:border-zinc-400 focus:border-primary rounded-lg px-3.5 py-2.5 text-xs text-textPrimary placeholder:text-textSecondary/40 focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Row 3: Product Type & Security Requirement */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="productType" className="block text-[10px] font-bold text-textSecondary uppercase tracking-wider mb-1.5">
                    Product Type:
                  </label>
                  <select 
                    id="productType"
                    name="productType"
                    value={formData.productType}
                    onChange={(e) => setFormData({...formData, productType: e.target.value})}
                    className="w-full bg-background border border-border/80 hover:border-zinc-400 focus:border-primary rounded-lg px-3.5 py-2.5 text-xs text-textPrimary focus:outline-none transition-all"
                  >
                    <option value="b2b-saas">B2B SaaS (Multi-Tenant Platform)</option>
                    <option value="ai-startup">AI Startup / GenAI Application</option>
                    <option value="fintech-payments">FinTech / Payment Platform</option>
                    <option value="web-mobile-app">Web & Mobile Application</option>
                    <option value="enterprise-api">API-First Microservices</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="securityRequirement" className="block text-[10px] font-bold text-textSecondary uppercase tracking-wider mb-1.5">
                    Primary Security Focus:
                  </label>
                  <select 
                    id="securityRequirement"
                    name="securityRequirement"
                    value={formData.securityRequirement}
                    onChange={(e) => setFormData({...formData, securityRequirement: e.target.value})}
                    className="w-full bg-background border border-border/80 hover:border-zinc-400 focus:border-primary rounded-lg px-3.5 py-2.5 text-xs text-textPrimary focus:outline-none transition-all"
                  >
                    <option value="api-authorization-bola">API Authorization & BOLA/IDOR</option>
                    <option value="tenant-isolation">Multi-Tenant Isolation Review</option>
                    <option value="enterprise-procurement">Enterprise Customer Security Review Blocker</option>
                    <option value="soc2-iso-readiness">SOC 2 / ISO 27001 Audit Readiness</option>
                    <option value="pre-launch-vapt">Pre-Production Launch VAPT</option>
                    <option value="ai-rag-security">AI / RAG Security & Prompt Guardrails</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Approximate Timeline */}
              <div>
                <label htmlFor="timeline" className="block text-[10px] font-bold text-textSecondary uppercase tracking-wider mb-1.5">
                  Approximate Timeline:
                </label>
                <select 
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                  className="w-full bg-background border border-border/80 hover:border-zinc-400 focus:border-primary rounded-lg px-3.5 py-2.5 text-xs text-textPrimary focus:outline-none transition-all"
                >
                  <option value="immediately">Immediate (Deal blocker / Urgent review required)</option>
                  <option value="within-2-weeks">Within 2 weeks</option>
                  <option value="within-1-month">Within 1 month</option>
                  <option value="exploring">Exploring / Next quarter roadmap</option>
                </select>
              </div>

              {/* Row 5: Optional Message */}
              <div>
                <label htmlFor="message" className="block text-[10px] font-bold text-textSecondary uppercase tracking-wider mb-1.5">
                  Specific Objectives or Context (Optional):
                </label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={3}
                  placeholder="e.g. Preparing for enterprise buyer review next week, looking to test multi-tenant API boundaries under mutual NDA..."
                  className="w-full bg-background border border-border/80 hover:border-zinc-400 focus:border-primary rounded-lg p-3 text-xs text-textPrimary placeholder:text-textSecondary/40 focus:outline-none transition-all font-sans"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center py-3.5 bg-primary hover:bg-primary-hover text-xs uppercase font-sans font-bold tracking-wider rounded-lg text-white shadow-sm transition-all gap-1.5 disabled:opacity-50 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 size={14} className="animate-spin" /> Transmitting Details...
                    </>
                  ) : (
                    <>
                      Get My Free Security Review →
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-3 pt-2 text-[11px] text-textSecondary text-center">
                <span>🔒 Strict Mutual NDA</span>
                <span>•</span>
                <span>No automated spam</span>
                <span>•</span>
                <span>Lead practitioner response within 24h</span>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
