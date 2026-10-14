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
  FileText,
  AlertCircle
} from "lucide-react";
import { openCalendly } from "@/lib/calendly";
import { 
  trackFreeSecurityReviewView,
  trackFreeSecurityReviewStart, 
  trackFreeSecurityReviewSubmit, 
  trackFreeSecurityReviewConfirmation,
  trackSecurityReviewFormError,
  trackCalendarCtaClick, 
  trackSampleReportCtaClick,
  getUtmAttribution
} from "@/lib/analytics";

function FreeAssessmentForm() {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [botField, setBotField] = useState("");
  const [hasStarted, setHasStarted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: searchParams?.get("email") || "",
    company: "",
    website: "",
    promptTrigger: "Enterprise customer security review",
    securityConcern: "Authorization / BOLA",
    timeline: "within-2-weeks",
    message: ""
  });

  useEffect(() => {
    trackFreeSecurityReviewView();
  }, []);

  const handleStart = () => {
    if (!hasStarted) {
      setHasStarted(true);
      trackFreeSecurityReviewStart("free_assessment_page");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setError(null);
    try {
      const utm = getUtmAttribution();

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          source: "free-security-review-intake",
          bot_field: botField,
          utm,
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || !result.success) {
        const errorMsg =
          result.error ||
          "Unable to deliver enquiry automatically. Please contact our team directly at ceo@trustlayerlabs.co.in or via WhatsApp.";
        setError(errorMsg);
        trackSecurityReviewFormError(result.code || "delivery_error", "free_security_review_intake");

        // Store backup locally marked as unsent (never display false success)
        const existingLeads = JSON.parse(localStorage.getItem("trustlayer_leads") || "[]");
        existingLeads.push({
          ...formData,
          ...utm,
          source: "free-security-review-intake",
          status: "unsent",
          delivery_error: errorMsg,
          timestamp: new Date().toISOString(),
        });
        localStorage.setItem("trustlayer_leads", JSON.stringify(existingLeads));
        return;
      }

      // Confirmed server delivery
      const existingLeads = JSON.parse(localStorage.getItem("trustlayer_leads") || "[]");
      existingLeads.push({
        ...formData,
        ...utm,
        source: "free-security-review-intake",
        status: "delivered",
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem("trustlayer_leads", JSON.stringify(existingLeads));

      trackFreeSecurityReviewSubmit({
        prompt_trigger: formData.promptTrigger,
        security_concern: formData.securityConcern,
        timeline: formData.timeline,
      });

      setSuccess(true);
      trackFreeSecurityReviewConfirmation();
    } catch (err: any) {
      console.error("Free assessment submit error:", err);
      const networkError = "Network error. Please verify your connection or email ceo@trustlayerlabs.co.in directly.";
      setError(networkError);
      trackSecurityReviewFormError("network_error", "free_security_review_intake");

      const existingLeads = JSON.parse(localStorage.getItem("trustlayer_leads") || "[]");
      existingLeads.push({
        ...formData,
        source: "free-security-review-intake",
        status: "unsent",
        delivery_error: networkError,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem("trustlayer_leads", JSON.stringify(existingLeads));
    } finally {
      setLoading(false);
    }
  };

  return (
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
                    trackCalendarCtaClick("post_submit_calendar", "Schedule 30-Min Review Now");
                    openCalendly();
                  }}
                  className="w-full inline-flex items-center justify-center py-3 bg-primary hover:bg-primary-hover text-white text-xs font-semibold uppercase tracking-wider rounded-lg gap-2 cursor-pointer shadow-sm"
                >
                  <Calendar size={14} /> Schedule 30-Min Review On Calendar Now
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
            {/* Anti-spam honeypot (hidden from real users) */}
            <input
              type="text"
              name="bot_field"
              value={botField}
              onChange={(e) => setBotField(e.target.value)}
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            {/* Delivery Error Feedback */}
            {error && (
              <div className="p-3.5 bg-critical/10 border border-critical/30 rounded-xl text-critical text-xs space-y-1 animate-fade-in font-sans">
                <div className="flex items-center gap-2 font-bold">
                  <AlertCircle size={15} className="shrink-0" />
                  <span>Delivery Issue</span>
                </div>
                <p className="leading-relaxed opacity-90">{error}</p>
                <p className="text-[11px] pt-1 border-t border-critical/20">
                  Your entered details are preserved above. You can also reach our team directly at{" "}
                  <a href="mailto:ceo@trustlayerlabs.co.in" className="underline font-bold">ceo@trustlayerlabs.co.in</a> or{" "}
                  <a href="https://wa.me/919391220328" target="_blank" rel="noopener noreferrer" className="underline font-bold">WhatsApp (+91 93912 20328)</a>.
                </p>
              </div>
            )}
            
            {/* Row 1: Name & Work Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-[10px] font-bold text-textSecondary uppercase tracking-wider mb-1.5">
                  Your Name <span className="text-primary">*</span>
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
                  Work Email <span className="text-primary">*</span>
                </label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  inputMode="email"
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
                  Company Name <span className="text-primary">*</span>
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
                  Website / App URL <span className="text-textSecondary/60 font-normal lowercase">(optional)</span>
                </label>
                <input 
                  type="text" 
                  id="website"
                  name="website"
                  inputMode="url"
                  autoComplete="url"
                  value={formData.website}
                  onFocus={handleStart}
                  onChange={(e) => setFormData({...formData, website: e.target.value})}
                  placeholder="e.g. https://cloudscale.io (or app in staging)"
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
                  <option value="Applying for 3-Slot Free API Security Pilot">Applying for 3-Slot Free API Security Pilot</option>
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
  );
}

export default function FreeAssessmentPage() {
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
        <div className="mb-10 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-[10px] font-bold text-primary uppercase tracking-wider">
            <ShieldCheck size={12} className="text-primary" />
            <span>30-Minute Confidential Conversation • Mutual NDA Upfront</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-extrabold text-textPrimary tracking-tight font-sans">
            Get a Free <span className="text-primary">Security Review</span>
          </h1>
          
          <p className="text-sm font-semibold text-textPrimary max-w-md mx-auto font-sans">
            For B2B SaaS, API and AI product teams preparing for enterprise deals, audits, or launch.
          </p>

          {/* Scoping Review & Pilot Information Banner */}
          <div className="p-4 sm:p-5 bg-surface border border-border/80 rounded-2xl max-w-xl mx-auto text-left shadow-sm space-y-3">
            <div>
              <span className="text-[10px] font-mono font-bold text-primary uppercase tracking-wider block mb-0.5">
                Standard Scoping Review
              </span>
              <p className="text-xs text-textSecondary leading-relaxed font-sans">
                A confidential 30-minute security review under mutual NDA. We understand your architecture, threat model, and assessment objectives to recommend an appropriate fixed-scope engagement.
              </p>
            </div>
            <div className="pt-2.5 border-t border-border/60">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                  Limited-Scope Pilot Assessment (3 Startup Slots)
                </span>
              </div>
              <p className="text-xs text-textSecondary leading-relaxed font-sans">
                For qualifying early-stage B2B SaaS and AI product startups, we are conducting 3 free, limited-scope API security pilots (2–3 critical endpoints tested for BOLA/IDOR and auth bypass under mutual written authorization). Select the pilot trigger below to apply.
              </p>
            </div>
          </div>
        </div>

        {/* The 4-Step Breakdown of What to Expect */}
        <div className="mb-8 p-5 bg-surface border border-border/80 rounded-2xl shadow-sm space-y-4">
          <div className="text-[11px] font-mono font-bold text-textPrimary uppercase tracking-wider flex items-center gap-1.5">
            <Clock size={14} className="text-primary" />
            <h2 className="text-[11px] font-mono font-bold text-textPrimary uppercase tracking-wider inline">
              What Happens In Your 30-Minute Review:
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-background border border-border/60 rounded-xl space-y-1">
              <h3 className="text-[10px] font-mono font-bold text-primary uppercase block">01 • Mutual NDA</h3>
              <p className="text-textSecondary leading-relaxed">
                We execute a standard mutual NDA upfront so your product architecture remains strictly confidential.
              </p>
            </div>

            <div className="p-3 bg-background border border-border/60 rounded-xl space-y-1">
              <h3 className="text-[10px] font-mono font-bold text-primary uppercase block">02 • Architecture Scoping</h3>
              <p className="text-textSecondary leading-relaxed">
                We review your authorization model (JWT/OAuth), multi-tenant isolation, API endpoints, and data flows.
              </p>
            </div>

            <div className="p-3 bg-background border border-border/60 rounded-xl space-y-1">
              <h3 className="text-[10px] font-mono font-bold text-primary uppercase block">03 • Risk Prioritization</h3>
              <p className="text-textSecondary leading-relaxed">
                Pinpoint high-impact vulnerabilities automated scanners miss (BOLA, tenant leaks, workflow logic).
              </p>
            </div>

            <div className="p-3 bg-background border border-border/60 rounded-xl space-y-1">
              <h3 className="text-[10px] font-mono font-bold text-primary uppercase block">04 • Transparent Scope</h3>
              <p className="text-textSecondary leading-relaxed">
                If there is a fit, we recommend the smallest appropriate paid assessment with a fixed scope within 24 hours.
              </p>
            </div>
          </div>

          <div className="pt-2 border-t border-border/60 flex items-center justify-between text-[11px] text-textSecondary">
            <span className="flex items-center gap-1"><Lock size={12} className="text-primary" /> Practitioner-Led Scoping • Zero Sales Pressure</span>
            <span className="font-semibold text-textPrimary">30-Min Scoping Call</span>
          </div>
        </div>

        {/* Interactive Form Wrapped in Suspense */}
        <Suspense fallback={
          <div className="bg-surface border border-border/80 rounded-2xl p-6 sm:p-8 shadow-md flex items-center justify-center py-24">
            <Loader2 className="w-8 h-8 text-primary animate-spin" />
          </div>
        }>
          <FreeAssessmentForm />
        </Suspense>

        {/* Scoping Review Standards & FAQ */}
        <div className="mt-16 space-y-8">
          <div className="bg-surface border border-border/80 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-textPrimary tracking-tight font-sans mb-4">
              Why Engineering Teams Trust Our Security Reviews
            </h2>
            <p className="text-xs text-textSecondary leading-relaxed font-sans mb-6">
              Unlike automated scanning tools that generate noisy, irrelevant alerts, our assessments are conducted entirely by senior offensive security practitioners with extensive software engineering backgrounds. We focus on business logic flaws, authorization boundaries, and exploitable vulnerabilities.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-background border border-border/60 rounded-xl space-y-1.5">
                <h3 className="text-xs font-bold text-textPrimary font-sans">Zero False Positives</h3>
                <p className="text-[11px] text-textSecondary font-sans leading-relaxed">
                  Every vulnerability reported includes a verified reproduction script and non-destructive proof-of-concept.
                </p>
              </div>
              <div className="p-4 bg-background border border-border/60 rounded-xl space-y-1.5">
                <h3 className="text-xs font-bold text-textPrimary font-sans">Free 30-Day Retesting</h3>
                <p className="text-[11px] text-textSecondary font-sans leading-relaxed">
                  Every assessment includes one complimentary re-audit cycle to certify developer fixes before compliance submission.
                </p>
              </div>
              <div className="p-4 bg-background border border-border/60 rounded-xl space-y-1.5">
                <h3 className="text-xs font-bold text-textPrimary font-sans">Actionable Code Patches</h3>
                <p className="text-[11px] text-textSecondary font-sans leading-relaxed">
                  We don&apos;t just identify vulnerabilities; we provide copy-paste code patches and architecture mitigation advice.
                </p>
              </div>
            </div>
          </div>

          {/* Scoping Review FAQ */}
          <div className="bg-surface border border-border/80 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-textPrimary tracking-tight font-sans mb-6">
              Frequently Asked Scoping Questions
            </h2>
            <div className="space-y-4 text-xs font-sans">
              <div>
                <h3 className="text-sm font-bold text-textPrimary mb-1">
                  Who will I speak with during the 30-minute review?
                </h3>
                <p className="text-textSecondary leading-relaxed">
                  You will speak directly with a certified offensive security engineer (OSCP, ISO 27001 LA), not a commissioned sales representative. We speak developer-to-developer.
                </p>
              </div>
              <div className="border-t border-border/60 pt-4">
                <h3 className="text-sm font-bold text-textPrimary mb-1">
                  What preparation is required before the call?
                </h3>
                <p className="text-textSecondary leading-relaxed">
                  No preparation is mandatory. Having an approximate endpoint count, target tech stack, or compliance timeline (e.g., SOC 2 audit deadline) helps us provide instant scoping guidance.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
