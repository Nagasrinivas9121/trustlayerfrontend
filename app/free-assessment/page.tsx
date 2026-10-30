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
  AlertCircle,
  ArrowRight,
  Sparkles,
  Check
} from "lucide-react";
import { openCalendly } from "@/lib/calendly";
import { FOUNDING_CLIENT_CONFIG } from "@/lib/pricing-config";
import { 
  trackFreeSecurityReviewView,
  trackFreeSecurityReviewStart, 
  trackFreeSecurityReviewSubmit, 
  trackFreeSecurityReviewConfirmation,
  trackSecurityReviewFormError,
  trackFormStart,
  trackFormSubmit,
  trackFormError,
  trackWhatsappClick,
  trackCalendarCtaClick, 
  trackSampleReportCtaClick,
  getUtmAttribution
} from "@/lib/analytics";

function FreeAssessmentForm() {
  const searchParams = useSearchParams();
  const packageParam = searchParams?.get("package") || "";
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [botField, setBotField] = useState("");
  const [hasStarted, setHasStarted] = useState(false);

  const [formData, setFormData] = useState({
    company: "",
    websiteOrStack: "",
    deadline: "Immediate (Deal blocker / Urgent review required)",
    complianceGoal: "SOC 2",
    email: searchParams?.get("email") || "",
    package: packageParam,
    foundingInterest: packageParam === "founding-client",
  });

  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    trackFreeSecurityReviewView();
  }, []);

  const handleStart = () => {
    if (!hasStarted) {
      setHasStarted(true);
      trackFreeSecurityReviewStart("free_assessment_page");
      trackFormStart("free_assessment_page");
    }
  };

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.company.trim()) {
      errors.company = "Company name is required.";
    }
    if (!formData.websiteOrStack.trim()) {
      errors.websiteOrStack = "Website or tech stack is required.";
    }
    if (!formData.deadline) {
      errors.deadline = "Please select a target deadline.";
    }
    if (!formData.complianceGoal) {
      errors.complianceGoal = "Please select a compliance goal.";
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = "A valid work email is required.";
    }
    setValidationErrors(errors);
    if (Object.keys(errors).length > 0) {
      trackFormError("validation_error", "free_assessment");
    }
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    if (!validate()) return;
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
          company: formData.company,
          website_or_stack: formData.websiteOrStack,
          website: formData.websiteOrStack,
          deadline: formData.deadline,
          timeline: formData.deadline,
          compliance_goal: formData.complianceGoal,
          promptTrigger: formData.complianceGoal,
          email: formData.email,
          package: formData.package,
          founding_interest: formData.foundingInterest,
          source: "free-assessment",
          bot_field: botField,
          utm,
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || !result.success) {
        const errorMsg =
          result.error ||
          "We could not submit this form right now. Please message us on WhatsApp: https://wa.me/919391220328 or email ceo@trustlayerlabs.co.in.";
        setError(errorMsg);
        trackSecurityReviewFormError(result.code || "delivery_error", "free_assessment");
        trackFormError(result.code || "delivery_error", "free_assessment");

        const existingLeads = JSON.parse(localStorage.getItem("trustlayer_leads") || "[]");
        existingLeads.push({
          ...formData,
          ...utm,
          source: "free-assessment",
          status: "unsent",
          delivery_error: errorMsg,
          timestamp: new Date().toISOString(),
        });
        localStorage.setItem("trustlayer_leads", JSON.stringify(existingLeads));
        return;
      }

      const existingLeads = JSON.parse(localStorage.getItem("trustlayer_leads") || "[]");
      existingLeads.push({
        ...formData,
        ...utm,
        source: "free-assessment",
        status: "delivered",
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem("trustlayer_leads", JSON.stringify(existingLeads));

      trackFreeSecurityReviewSubmit({
        company: formData.company,
        compliance_goal: formData.complianceGoal,
        deadline: formData.deadline,
        package: formData.package,
      });
      trackFormSubmit({
        package: formData.package,
        source: "free_assessment",
      });

      setSuccess(true);
      trackFreeSecurityReviewConfirmation();
    } catch (err: any) {
      console.error("Quote request submit error:", err);
      const networkError = "We could not submit this form right now. Please message us on WhatsApp: https://wa.me/919391220328 or email ceo@trustlayerlabs.co.in.";
      setError(networkError);
      trackSecurityReviewFormError("network_error", "free_assessment");
      trackFormError("network_error", "free_assessment");

      const existingLeads = JSON.parse(localStorage.getItem("trustlayer_leads") || "[]");
      existingLeads.push({
        ...formData,
        source: "free-assessment",
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
    <div className="bg-white border border-neutral-200/90 rounded-3xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
      {success ? (
        <div className="text-center space-y-6 py-6 animate-fade-in font-sans">
          <div className="w-16 h-16 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center text-emerald-600 mx-auto shadow-sm">
            <CheckCircle size={30} />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-neutral-900 font-sans tracking-tight">Fixed-Price Quote Request Received</h3>
            <p className="text-xs sm:text-sm text-neutral-600 max-w-sm mx-auto leading-relaxed">
              We will send a fixed-price quote within 24 hours.
            </p>
          </div>

          <div className="pt-6 border-t border-dashed border-neutral-200 space-y-3 text-left">
            <p className="text-xs text-neutral-700 leading-relaxed font-sans">
              Need to talk sooner? You can optionally book a 30-minute scoping call here:{" "}
              <a 
                href="https://cal.com/nagasrinivasarao/30min" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary underline font-medium hover:text-blue-700 break-all"
              >
                https://cal.com/nagasrinivasarao/30min
              </a>
            </p>
            <p className="text-xs text-neutral-700 leading-relaxed font-sans pt-1">
              Prefer WhatsApp? Reach our lead practitioners directly:{" "}
              <a 
                href="https://wa.me/919391220328" 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={() => trackWhatsappClick("free_assessment_success")}
                className="text-emerald-700 underline font-medium hover:text-emerald-800"
              >
                https://wa.me/919391220328
              </a>
            </p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5 font-sans" noValidate>
          {/* Package hidden field */}
          <input type="hidden" name="package" value={formData.package} />

          {/* Anti-spam honeypot */}
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
            <div className="p-4 bg-red-50 border border-red-200 rounded-2xl text-red-800 text-xs space-y-1 animate-fade-in font-sans">
              <div className="flex items-center gap-2 font-bold">
                <AlertCircle size={15} className="shrink-0" />
                <span>Delivery Issue</span>
              </div>
              <p className="leading-relaxed opacity-90">
                We could not submit this form right now. Please message us on WhatsApp:{" "}
                <a 
                  href="https://wa.me/919391220328" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={() => trackWhatsappClick("free_assessment_fallback_error")}
                  className="underline font-bold"
                >
                  https://wa.me/919391220328
                </a>{" "}
                or email{" "}
                <a href="mailto:ceo@trustlayerlabs.co.in" className="underline font-bold">
                  ceo@trustlayerlabs.co.in
                </a>.
              </p>
            </div>
          )}

          {formData.package && (
            <div className="p-3 bg-blue-50/80 border border-blue-200 rounded-xl text-xs font-semibold text-primary flex items-center justify-between">
              <span>Selected Scope: <strong>{formData.package === "founding-client" ? "Founding client (all packages)" : formData.package.replace(/-/g, " ").toUpperCase()}</strong></span>
              <span className="text-[10px] font-mono text-blue-600 font-normal">Fixed-Price Proposal</span>
            </div>
          )}
          
          {/* Field 1: Company */}
          <div>
            <label htmlFor="company" className="block text-xs font-semibold font-sans text-neutral-700 uppercase tracking-wider mb-1.5">
              Company Name <span className="text-primary">*</span>
            </label>
            <input 
              type="text" 
              id="company"
              name="company"
              autoComplete="organization"
              value={formData.company}
              onFocus={handleStart}
              onChange={(e) => {
                setFormData({...formData, company: e.target.value});
                if (validationErrors.company) setValidationErrors({...validationErrors, company: ""});
              }}
              placeholder="e.g. Acme Corp"
              className={`w-full bg-neutral-50/60 border rounded-xl px-3.5 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none transition-all font-sans ${
                validationErrors.company ? "border-rose-400 focus:border-rose-600 focus:ring-rose-100" : "border-neutral-200 hover:border-neutral-300 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
              }`}
            />
            {validationErrors.company && (
              <p className="text-rose-600 text-[11px] mt-1">{validationErrors.company}</p>
            )}
          </div>

          {/* Field 2: Website / Stack */}
          <div>
            <label htmlFor="websiteOrStack" className="block text-xs font-semibold font-sans text-neutral-700 uppercase tracking-wider mb-1.5">
              Website / Tech Stack <span className="text-primary">*</span>
            </label>
            <input 
              type="text" 
              id="websiteOrStack"
              name="websiteOrStack"
              value={formData.websiteOrStack}
              onFocus={handleStart}
              onChange={(e) => {
                setFormData({...formData, websiteOrStack: e.target.value});
                if (validationErrors.websiteOrStack) setValidationErrors({...validationErrors, websiteOrStack: ""});
              }}
              placeholder="e.g. https://acme.com, Node.js + PostgreSQL + AWS"
              className={`w-full bg-neutral-50/60 border rounded-xl px-3.5 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none transition-all font-sans ${
                validationErrors.websiteOrStack ? "border-rose-400 focus:border-rose-600 focus:ring-rose-100" : "border-neutral-200 hover:border-neutral-300 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
              }`}
            />
            {validationErrors.websiteOrStack && (
              <p className="text-rose-600 text-[11px] mt-1">{validationErrors.websiteOrStack}</p>
            )}
          </div>

          {/* Field 3: Deadline */}
          <div>
            <label htmlFor="deadline" className="block text-xs font-semibold font-sans text-neutral-700 uppercase tracking-wider mb-1.5">
              Deadline <span className="text-primary">*</span>
            </label>
            <select 
              id="deadline"
              name="deadline"
              value={formData.deadline}
              onChange={(e) => {
                setFormData({...formData, deadline: e.target.value});
                if (validationErrors.deadline) setValidationErrors({...validationErrors, deadline: ""});
              }}
              className="w-full bg-neutral-50/60 border border-neutral-200 hover:border-neutral-300 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100 rounded-xl px-3.5 py-2.5 text-sm text-neutral-900 focus:outline-none transition-all font-sans"
            >
              <option value="Immediate (Deal blocker / Urgent review required)">Immediate (Deal blocker / Urgent review required)</option>
              <option value="Within 1-2 weeks">Within 1-2 weeks</option>
              <option value="Within 1 month">Within 1 month</option>
              <option value="Flexible">Flexible</option>
            </select>
            {validationErrors.deadline && (
              <p className="text-rose-600 text-[11px] mt-1">{validationErrors.deadline}</p>
            )}
          </div>

          {/* Field 4: Compliance Goal */}
          <div>
            <label htmlFor="complianceGoal" className="block text-xs font-semibold font-sans text-neutral-700 uppercase tracking-wider mb-1.5">
              Compliance Goal <span className="text-primary">*</span>
            </label>
            <select 
              id="complianceGoal"
              name="complianceGoal"
              value={formData.complianceGoal}
              onChange={(e) => {
                setFormData({...formData, complianceGoal: e.target.value});
                if (validationErrors.complianceGoal) setValidationErrors({...validationErrors, complianceGoal: ""});
              }}
              className="w-full bg-neutral-50/60 border border-neutral-200 hover:border-neutral-300 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100 rounded-xl px-3.5 py-2.5 text-sm text-neutral-900 focus:outline-none transition-all font-sans"
            >
              <option value="SOC 2">SOC 2</option>
              <option value="ISO 27001">ISO 27001</option>
              <option value="Customer security questionnaire">Customer security questionnaire</option>
              <option value="Other">Other</option>
            </select>
            {validationErrors.complianceGoal && (
              <p className="text-rose-600 text-[11px] mt-1">{validationErrors.complianceGoal}</p>
            )}
          </div>

          {/* Field 5: Work Email */}
          <div>
            <label htmlFor="email" className="block text-xs font-semibold font-sans text-neutral-700 uppercase tracking-wider mb-1.5">
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
              onChange={(e) => {
                setFormData({...formData, email: e.target.value});
                if (validationErrors.email) setValidationErrors({...validationErrors, email: ""});
              }}
              placeholder="e.g. alex@company.com"
              className={`w-full bg-neutral-50/60 border rounded-xl px-3.5 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none transition-all font-sans ${
                validationErrors.email ? "border-rose-400 focus:border-rose-600 focus:ring-rose-100" : "border-neutral-200 hover:border-neutral-300 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
              }`}
            />
            {validationErrors.email && (
              <p className="text-rose-600 text-[11px] mt-1">{validationErrors.email}</p>
            )}
          </div>

          {/* Optional Founding Client Interest Checkbox */}
          <div className="flex items-center gap-2.5 pt-1">
            <input
              type="checkbox"
              id="foundingInterest"
              name="foundingInterest"
              checked={formData.foundingInterest}
              onChange={(e) => setFormData({ ...formData, foundingInterest: e.target.checked })}
              className="w-4 h-4 rounded border-neutral-300 text-primary focus:ring-primary/20 cursor-pointer"
            />
            <label htmlFor="foundingInterest" className="text-xs text-neutral-700 font-sans cursor-pointer select-none">
              I am interested in founding client pricing
            </label>
          </div>

          {/* Submit CTA */}
          <div className="pt-2">
            <button 
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center py-4 bg-primary hover:bg-blue-700 text-xs uppercase font-sans font-bold tracking-wider rounded-full text-white shadow-md hover:shadow-lg transition-all gap-2 disabled:opacity-50 cursor-pointer"
            >
              {loading ? (
                <>
                  <Loader2 size={14} className="animate-spin" /> Preparing Quote Request...
                </>
              ) : (
                <>
                  <span>Get a fixed-price quote in 24h</span>
                  <ArrowRight size={14} />
                </>
              )}
            </button>
          </div>

          <div className="flex items-center justify-center gap-3 pt-2 text-[11px] text-neutral-500 text-center font-sans">
            <span>🔒 Strict Mutual NDA</span>
            <span>•</span>
            <span>Zero automated spam</span>
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
    <div className="bg-background min-h-screen pt-32 pb-24 font-sans text-neutral-900 relative overflow-hidden">
      <div className="section-container max-w-2xl mx-auto px-4 relative z-10">
        
        {/* Back Link */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 text-xs font-semibold text-neutral-600 hover:text-neutral-900 shadow-sm transition-all mb-8 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Overview</span>
        </Link>

        {/* Heading & CRO Framing */}
        <div className="mb-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-neutral-200 shadow-sm rounded-full text-xs font-semibold text-neutral-800 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>Fixed-Price Proposal • Mutual NDA Upfront</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight font-sans leading-tight">
            Get a Fixed-Price Quote <span className="text-primary">in 24h</span>
          </h1>
          
          <p className="text-sm sm:text-base text-neutral-600 max-w-md mx-auto font-sans leading-relaxed">
            For B2B SaaS, API, and multi-tenant platforms whose enterprise deals are waiting on an offensive pentest report.
          </p>

          {/* Scoping Review & Founding Client Program Banner - CodeDale Dashed Box */}
          <div className="p-6 bg-white border border-dashed border-neutral-300 rounded-3xl max-w-xl mx-auto text-left shadow-[0_4px_20px_rgba(0,0,0,0.02)] space-y-4">
            <div>
              <span className="text-xs font-mono font-bold text-primary uppercase tracking-wider block mb-1">
                Standard Scoping Review
              </span>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
                A confidential 30-minute security review under mutual NDA. We understand your architecture, threat model, and assessment objectives to recommend an appropriate fixed-scope engagement.
              </p>
            </div>
            <div className="pt-3 border-t border-dashed border-neutral-200">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider">
                  Founding Client Program: {FOUNDING_CLIENT_CONFIG.slotsLeft} of {FOUNDING_CLIENT_CONFIG.slotsTotal} slots open
                </span>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                Founding clients pay about 30% off the list price in exchange for permission to publish an anonymized case study or short testimonial, plus priority scheduling. Select a package below to get your fixed-price quote.
              </p>
            </div>
          </div>
        </div>

        {/* The 4-Step Breakdown of What to Expect */}
        <div className="mb-8 p-6 bg-white border border-neutral-200/90 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] space-y-4">
          <div className="text-xs font-mono font-bold text-neutral-900 uppercase tracking-wider flex items-center gap-2">
            <Clock size={14} className="text-primary" />
            <h2>What Happens In Your 30-Minute Review:</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="p-4 bg-neutral-50/70 border border-neutral-200 rounded-2xl space-y-1">
              <h3 className="text-xs font-mono font-bold text-primary uppercase block">01 • Mutual NDA</h3>
              <p className="text-neutral-600 text-xs leading-relaxed font-sans">
                We execute a standard mutual NDA upfront so your product architecture remains strictly confidential.
              </p>
            </div>

            <div className="p-4 bg-neutral-50/70 border border-neutral-200 rounded-2xl space-y-1">
              <h3 className="text-xs font-mono font-bold text-primary uppercase block">02 • Architecture Scoping</h3>
              <p className="text-neutral-600 text-xs leading-relaxed font-sans">
                We review your authorization model (JWT/OAuth), multi-tenant isolation, API endpoints, and data flows.
              </p>
            </div>

            <div className="p-4 bg-neutral-50/70 border border-neutral-200 rounded-2xl space-y-1">
              <h3 className="text-xs font-mono font-bold text-primary uppercase block">03 • Risk Prioritization</h3>
              <p className="text-neutral-600 text-xs leading-relaxed font-sans">
                Pinpoint high-impact vulnerabilities automated scanners miss (BOLA, tenant leaks, workflow logic).
              </p>
            </div>

            <div className="p-4 bg-neutral-50/70 border border-neutral-200 rounded-2xl space-y-1">
              <h3 className="text-xs font-mono font-bold text-primary uppercase block">04 • Transparent Scope</h3>
              <p className="text-neutral-600 text-xs leading-relaxed font-sans">
                If there is a fit, we recommend the smallest appropriate paid assessment with a fixed scope within 24 hours.
              </p>
            </div>
          </div>

          <div className="pt-3 border-t border-dashed border-neutral-200 flex items-center justify-between text-xs text-neutral-500 font-sans">
            <span className="flex items-center gap-1.5"><Lock size={12} className="text-primary" /> Practitioner-Led Scoping • Zero Sales Pressure</span>
            <span className="font-semibold text-neutral-800 font-mono text-[11px]">30-Min Scoping Call</span>
          </div>
        </div>

        {/* Interactive Form Wrapped in Suspense */}
        <Suspense fallback={
          <div className="bg-white border border-neutral-200/90 rounded-3xl p-6 sm:p-8 shadow-sm flex items-center justify-center py-24">
            <Loader2 className="w-8 h-8 text-primary animate-spin" />
          </div>
        }>
          <FreeAssessmentForm />
        </Suspense>

        {/* Scoping Review Standards & FAQ */}
        <div className="mt-16 space-y-8">
          <div className="bg-white border border-neutral-200/90 rounded-3xl p-8 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
            <h2 className="text-xl font-bold text-neutral-900 tracking-tight font-sans mb-3">
              Why Engineering Teams Trust Our Security Reviews
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans mb-6">
              Unlike automated scanning tools that generate noisy, irrelevant alerts, our assessments are conducted by our certified offensive security practitioners. We focus on business logic flaws, authorization boundaries, and exploitable vulnerabilities.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 bg-neutral-50/70 border border-neutral-200 rounded-2xl space-y-1.5">
                <h3 className="text-xs font-bold text-neutral-900 font-sans">Every Finding Manually Verified</h3>
                <p className="text-xs text-neutral-600 font-sans leading-relaxed">
                  Every vulnerability reported includes a verified reproduction script and non-destructive proof-of-concept.
                </p>
              </div>
              <div className="p-5 bg-neutral-50/70 border border-neutral-200 rounded-2xl space-y-1.5">
                <h3 className="text-xs font-bold text-neutral-900 font-sans">Free 30-Day Retesting</h3>
                <p className="text-xs text-neutral-600 font-sans leading-relaxed">
                  Every assessment includes one complimentary re-audit cycle to certify developer fixes before compliance submission.
                </p>
              </div>
              <div className="p-5 bg-neutral-50/70 border border-neutral-200 rounded-2xl space-y-1.5">
                <h3 className="text-xs font-bold text-neutral-900 font-sans">Actionable Code Patches</h3>
                <p className="text-xs text-neutral-600 font-sans leading-relaxed">
                  We don&apos;t just identify vulnerabilities; we provide copy-paste code patches and architecture mitigation advice.
                </p>
              </div>
            </div>
          </div>

          {/* Scoping Review FAQ */}
          <div className="bg-white border border-neutral-200/90 rounded-3xl p-8 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
            <h2 className="text-xl font-bold text-neutral-900 tracking-tight font-sans mb-6">
              Frequently Asked Scoping Questions
            </h2>
            <div className="space-y-4 text-xs sm:text-sm font-sans">
              <div className="border-b border-dashed border-neutral-200 pb-4">
                <h3 className="text-base font-bold text-neutral-900 mb-1.5">
                  Who will I speak with during the 30-minute review?
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  You will speak directly with a certified offensive security engineer (CEH, C3SA, ISO 27001 LA), not a commissioned sales representative. We speak developer-to-developer.
                </p>
              </div>
              <div>
                <h3 className="text-base font-bold text-neutral-900 mb-1.5">
                  What preparation is required before the call?
                </h3>
                <p className="text-neutral-600 leading-relaxed">
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
