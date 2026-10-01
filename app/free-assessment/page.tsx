"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { 
  ArrowLeft, 
  CheckCircle, 
  ShieldCheck, 
  Loader2, 
  Calendar, 
  Download, 
  Shield,
  Clock,
  Lock,
  UserCheck,
  FileText
} from "lucide-react";
import { openCalendly } from "@/lib/calendly";
import { 
  trackFreeSecurityReviewView,
  trackFreeSecurityReviewStart, 
  trackFreeSecurityReviewSubmit, 
  trackFreeSecurityReviewConfirmation,
  trackCalendarCtaClick, 
  trackSampleReportCtaClick,
  getUtmAttribution
} from "@/lib/analytics";

function FreeAssessmentContent() {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    promptTrigger: "Enterprise customer security review",
    securityConcern: "Authorization / BOLA",
    timeline: "within-2-weeks",
    message: ""
  });

  // Pre-fill email from query parameter if present
  useEffect(() => {
    trackFreeSecurityReviewView();
    const emailParam = searchParams.get("email");
    if (emailParam) {
      setFormData((prev) => ({ ...prev, email: emailParam }));
    }
  }, [searchParams]);

  const handleStart = () => {
    if (!hasStarted) {
      setHasStarted(true);
      trackFreeSecurityReviewStart("free_assessment_page");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Simulate form transmission with practitioner review queue
      await new Promise((res) => setTimeout(res, 1200));

      const utm = getUtmAttribution();
      
      // Save lead details to localStorage
      const existingLeads = JSON.parse(localStorage.getItem("trustlayer_leads") || "[]");
      existingLeads.push({
        ...formData,
        ...utm,
        source: "free-security-review-intake",
        timestamp: new Date().toISOString()
      });
      localStorage.setItem("trustlayer_leads", JSON.stringify(existingLeads));

      trackFreeSecurityReviewSubmit({
        prompt_trigger: formData.promptTrigger,
        security_concern: formData.securityConcern,
        timeline: formData.timeline
      });

      setSuccess(true);
      trackFreeSecurityReviewConfirmation();
    } catch (err) {
      console.error("Free assessment submit error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
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
      <div className="mb-10 text-center space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-[10px] font-bold text-primary uppercase tracking-wider">
          <ShieldCheck size={12} className="text-primary" />
          <span>20-Minute Confidential Conversation • Mutual NDA Upfront</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl font-extrabold text-textPrimary tracking-tight font-sans">
          Get a Free <span className="text-primary">Security Review</span>
        </h1>
        
        <p className="text-sm font-semibold text-textPrimary max-w-md mx-auto font-sans">
          For B2B SaaS, API and AI product teams preparing for enterprise deals, audits, or launch.
        </p>

        {/* Section 15 Explicit Commercial Framing Banner */}
        <div className="p-4 bg-surface border border-border/80 rounded-2xl max-w-xl mx-auto text-left shadow-sm">
          <p className="text-xs text-textSecondary leading-relaxed font-sans">
            <strong className="text-textPrimary font-semibold block mb-1">
              Important scoping notice:
            </strong>
            This is a confidential 20-minute security review—not a free penetration test. We&apos;ll understand your product, architecture, current testing, security objective and likely assessment scope. If there is a fit, we&apos;ll recommend an appropriate paid assessment.
          </p>
        </div>
      </div>

      {/* The 4-Step Breakdown of What to Expect */}
      <div className="mb-8 p-5 bg-surface border border-border/80 rounded-2xl shadow-sm space-y-4">
        <div className="text-[11px] font-mono font-bold text-textPrimary uppercase tracking-wider flex items-center gap-1.5">
          <Clock size={14} className="text-primary" />
          <span>What Happens In Your 20-Minute Review:</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3 bg-background border border-border/60 rounded-xl space-y-1">
            <span className="text-[10px] font-mono font-bold text-primary uppercase block">01 • Mutual NDA</span>
            <p className="text-textSecondary leading-relaxed">
              We execute a standard mutual NDA upfront so your product architecture remains strictly confidential.
            </p>
          </div>

          <div className="p-3 bg-background border border-border/60 rounded-xl space-y-1">
            <span className="text-[10px] font-mono font-bold text-primary uppercase block">02 • Architecture Scoping</span>
            <p className="text-textSecondary leading-relaxed">
              We review your authorization model (JWT/OAuth), multi-tenant isolation, API endpoints, and data flows.
            </p>
          </div>

          <div className="p-3 bg-background border border-border/60 rounded-xl space-y-1">
            <span className="text-[10px] font-mono font-bold text-primary uppercase block">03 • Risk Prioritization</span>
            <p className="text-textSecondary leading-relaxed">
              Pinpoint high-impact vulnerabilities automated scanners miss (BOLA, tenant leaks, workflow logic).
            </p>
          </div>

          <div className="p-3 bg-background border border-border/60 rounded-xl space-y-1">
            <span className="text-[10px] font-mono font-bold text-primary uppercase block">04 • Transparent Scope</span>
            <p className="text-textSecondary leading-relaxed">
              If there is a fit, we recommend the smallest appropriate paid assessment with a fixed scope within 24 hours.
            </p>
          </div>
        </div>

        <div className="pt-2 border-t border-border/60 flex items-center justify-between text-[11px] text-textSecondary">
          <span className="flex items-center gap-1"><Lock size={12} className="text-primary" /> Practitioner-Led Scoping • Zero Sales Pressure</span>
          <span className="font-semibold text-textPrimary">20-Min Scoping Call</span>
        </div>
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
                Thank you, {formData.name || "founder"}! A lead offensive security practitioner is reviewing your product architecture details under mutual NDA. We will email you within one business day with scoping availability.
              </p>
            </div>

            <div className="pt-4 border-t border-border/40 space-y-3">
              <p className="text-[10px] text-textSecondary uppercase tracking-widest font-bold">Recommended Next Steps:</p>
              <div className="flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    trackCalendarCtaClick("post_submit_calendar", "Schedule 20-Min Review Now");
                    openCalendly();
                  }}
                  className="w-full inline-flex items-center justify-center py-3 bg-primary hover:bg-primary-hover text-white text-xs font-semibold uppercase tracking-wider rounded-lg gap-2 cursor-pointer shadow-sm"
                >
                  <Calendar size={14} /> Schedule 20-Min Review On Calendar Now
                </button>
                <a 
                  href="/trustlayerlabs-sample-vapt-report.pdf" 
                  download
                  onClick={() => trackSampleReportCtaClick("post_submit_pdf", "Download Sample Assessment PDF")}
                  className="w-full inline-flex items-center justify-center py-3 bg-background border border-border hover:border-zinc-400 text-textPrimary text-xs font-semibold uppercase tracking-wider rounded-lg gap-2 transition-colors"
                >
                  <Download size={14} /> Download Sample Assessment PDF
                </a>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 font-sans">
            
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
                  onFocus={handleStart}
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
                  onFocus={handleStart}
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
                  onFocus={handleStart}
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
                  onFocus={handleStart}
                  onChange={(e) => setFormData({...formData, website: e.target.value})}
                  required
                  placeholder="e.g. https://cloudscale.io"
                  className="w-full bg-background border border-border/80 hover:border-zinc-400 focus:border-primary rounded-lg px-3.5 py-2.5 text-xs text-textPrimary placeholder:text-textSecondary/40 focus:outline-none transition-all"
                />
              </div>
            </div>

            {/* Row 3: Trigger & Primary Security Concern (Section 16) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="promptTrigger" className="block text-[10px] font-bold text-textSecondary uppercase tracking-wider mb-1.5">
                  What Prompted You To Look For Security Testing?
                </label>
                <select 
                  id="promptTrigger"
                  name="promptTrigger"
                  value={formData.promptTrigger}
                  onChange={(e) => setFormData({...formData, promptTrigger: e.target.value})}
                  className="w-full bg-background border border-border/80 hover:border-zinc-400 focus:border-primary rounded-lg px-3.5 py-2.5 text-xs text-textPrimary focus:outline-none transition-all"
                >
                  <option value="Enterprise customer security review">Enterprise customer security review</option>
                  <option value="Production launch">Production launch</option>
                  <option value="Architecture change">Architecture change</option>
                  <option value="Previous security finding">Previous security finding</option>
                  <option value="Customer requirement">Customer requirement</option>
                  <option value="SOC 2 / ISO 27001 readiness">SOC 2 / ISO 27001 readiness</option>
                  <option value="General security assessment">General security assessment</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="securityConcern" className="block text-[10px] font-bold text-textSecondary uppercase tracking-wider mb-1.5">
                  Primary Security Concern:
                </label>
                <select 
                  id="securityConcern"
                  name="securityConcern"
                  value={formData.securityConcern}
                  onChange={(e) => setFormData({...formData, securityConcern: e.target.value})}
                  className="w-full bg-background border border-border/80 hover:border-zinc-400 focus:border-primary rounded-lg px-3.5 py-2.5 text-xs text-textPrimary focus:outline-none transition-all"
                >
                  <option value="Authorization / BOLA">Authorization / BOLA</option>
                  <option value="API security">API security</option>
                  <option value="Tenant isolation">Tenant isolation</option>
                  <option value="Authentication">Authentication</option>
                  <option value="Business logic">Business logic</option>
                  <option value="AI/RAG security">AI/RAG security</option>
                  <option value="Cloud security">Cloud security</option>
                  <option value="Compliance readiness">Compliance readiness</option>
                  <option value="Not sure">Not sure</option>
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
                Architecture Brief or Target Scope (Optional):
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
                    Get a Free Security Review →
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2 text-[11px] text-textSecondary text-center">
              <span>🔒 Strict Mutual NDA</span>
              <span>•</span>
              <span>No automated spam</span>
              <span>•</span>
              <span>Practitioner response within 24h</span>
            </div>

          </form>
        )}
      </div>

    </div>
  );
}

export default function FreeAssessmentPage() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-24 font-sans text-textPrimary relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] max-w-[100vw] h-[700px] bg-primary/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <Suspense fallback={
        <div className="flex items-center justify-center py-32">
          <Loader2 className="w-8 h-8 text-primary animate-spin" />
        </div>
      }>
        <FreeAssessmentContent />
      </Suspense>
    </div>
  );
}
