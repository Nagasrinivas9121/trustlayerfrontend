"use client";

import React, { useState, useEffect } from "react";
import { X, ShieldCheck, CheckCircle2, Loader2, ArrowRight, Clock, MessageSquare, ExternalLink } from "lucide-react";
import { trackQuoteFormStart, trackQuoteFormSubmit, trackWhatsappClick } from "@/lib/analytics";

interface QuoteModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  initialPackage?: string;
}

export function openQuoteModal(initialPackage?: string) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-quote-modal", { detail: { package: initialPackage } }));
  }
}

export default function QuoteModal({ isOpen: controlledIsOpen, onClose: controlledOnClose, initialPackage }: QuoteModalProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(initialPackage || "");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasStarted, setHasStarted] = useState(false);

  const [formData, setFormData] = useState({
    company: "",
    website_or_stack: "",
    deadline: "within-5-days",
    compliance_goal: "Enterprise customer security review",
    email: "",
    bot_field: "",
  });

  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalOpen;
  const handleClose = () => {
    if (controlledOnClose) {
      controlledOnClose();
    } else {
      setInternalOpen(false);
    }
  };

  useEffect(() => {
    const handleOpenEvent = (e: any) => {
      if (e.detail?.package) {
        setSelectedPackage(e.detail.package);
      }
      setInternalOpen(true);
    };

    const handleHash = () => {
      if (window.location.hash === "#quote") {
        setInternalOpen(true);
      }
    };

    window.addEventListener("open-quote-modal", handleOpenEvent);
    window.addEventListener("hashchange", handleHash);
    if (window.location.hash === "#quote") {
      setInternalOpen(true);
    }

    return () => {
      window.removeEventListener("open-quote-modal", handleOpenEvent);
      window.removeEventListener("hashchange", handleHash);
    };
  }, []);

  const handleStartInteraction = () => {
    if (!hasStarted) {
      setHasStarted(true);
      trackQuoteFormStart(selectedPackage || "general_quote");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: selectedPackage ? `quote-modal-${selectedPackage}` : "quote-modal",
          company: formData.company,
          website_or_stack: formData.website_or_stack,
          deadline: formData.deadline,
          compliance_goal: formData.compliance_goal,
          email: formData.email,
          bot_field: formData.bot_field,
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || !result.success) {
        const errorMsg = result.error || "Unable to submit your quote request. Please email us directly at ceo@trustlayerlabs.co.in or message on WhatsApp.";
        setError(errorMsg);
        return;
      }

      setSubmitted(true);
      trackQuoteFormSubmit({
        package: selectedPackage,
        deadline: formData.deadline,
        compliance_goal: formData.compliance_goal,
      });
    } catch (err: any) {
      setError("Network error while submitting. Please reach out via WhatsApp (+91 93912 20328) or email ceo@trustlayerlabs.co.in.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
    >
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl border border-neutral-200 shadow-2xl p-6 sm:p-8 my-8 text-neutral-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-600 hover:text-black transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
          aria-label="Close quote modal"
        >
          <X size={18} />
        </button>

        {submitted ? (
          /* Post-submission Success State: Confirmation + Plain Cal.com Link */
          <div className="py-4 space-y-6 text-center">
            <div className="w-14 h-14 bg-emerald-50 border border-emerald-200 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto">
              <CheckCircle2 size={32} />
            </div>

            <div className="space-y-2">
              <h2 id="quote-modal-title" className="text-2xl font-bold tracking-tight text-neutral-950 font-sans">
                Quote Request Received
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed max-w-md mx-auto">
                We will review your scope under bilateral mutual NDA and send your fixed-price quote to <strong className="text-neutral-950">{formData.email}</strong> within 24 hours.
              </p>
            </div>

            {/* Direct contact options */}
            <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-2xl text-left space-y-2">
              <span className="text-xs font-bold text-neutral-900 uppercase tracking-wider block">
                Need to discuss urgent scoping right away?
              </span>
              <p className="text-xs text-neutral-600 leading-relaxed">
                If your enterprise security review has an immediate hard deadline, reach our lead practitioner directly on WhatsApp:
              </p>
              <div className="pt-1">
                <a
                  href="https://wa.me/919391220328"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 underline focus:outline-none focus:ring-1 focus:ring-emerald-600"
                >
                  <span>Chat on WhatsApp (+91 93912 20328)</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Plain WhatsApp link */}
            <div className="pt-2 flex items-center justify-center gap-4 text-xs text-neutral-600">
              <span>Or chat with our team directly:</span>
              <a
                href="https://wa.me/919391220328"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsappClick("quote_modal_success")}
                className="inline-flex items-center gap-1 font-semibold text-emerald-700 hover:text-emerald-800"
              >
                <MessageSquare size={13} />
                <span>WhatsApp (+91 93912 20328)</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleClose}
                className="w-full py-3 bg-neutral-900 hover:bg-black text-white text-xs font-semibold rounded-xl transition-all"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Short Form State */
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[11px] font-semibold text-primary mb-3">
                <Clock size={12} />
                <span>24-Hour Fixed Price Guarantee</span>
              </div>
              <h2 id="quote-modal-title" className="text-2xl font-bold tracking-tight text-neutral-950 font-sans">
                Get a Fixed-Price Quote in 24h
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 mt-1 leading-relaxed">
                Manual API and multi-tenant SaaS penetration testing tailored to pass your enterprise vendor security reviews.
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-800 font-medium">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
              {/* Anti-bot honeypot field */}
              <div className="hidden" aria-hidden="true">
                <input
                  type="text"
                  name="bot_field"
                  tabIndex={-1}
                  value={formData.bot_field}
                  onChange={(e) => setFormData({ ...formData, bot_field: e.target.value })}
                  autoComplete="off"
                />
              </div>

              {/* 1. Company Name */}
              <div>
                <label htmlFor="quote-company" className="block text-[11px] font-bold text-neutral-800 uppercase tracking-wider mb-1.5">
                  Company Name <span className="text-rose-500">*</span>
                </label>
                <input
                  id="quote-company"
                  type="text"
                  required
                  placeholder="e.g. Acme Systems"
                  value={formData.company}
                  onFocus={handleStartInteraction}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 placeholder-neutral-400 focus:bg-white focus:border-neutral-900 focus:outline-none transition-all"
                />
              </div>

              {/* 2. Website or Tech Stack */}
              <div>
                <label htmlFor="quote-stack" className="block text-[11px] font-bold text-neutral-800 uppercase tracking-wider mb-1.5">
                  Website or Tech Stack <span className="text-rose-500">*</span>
                </label>
                <input
                  id="quote-stack"
                  type="text"
                  required
                  placeholder="e.g. app.acme.com (Next.js / Node / PostgreSQL)"
                  value={formData.website_or_stack}
                  onFocus={handleStartInteraction}
                  onChange={(e) => setFormData({ ...formData, website_or_stack: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 placeholder-neutral-400 focus:bg-white focus:border-neutral-900 focus:outline-none transition-all"
                />
              </div>

              {/* 3. Deadline / Target Date */}
              <div>
                <label htmlFor="quote-deadline" className="block text-[11px] font-bold text-neutral-800 uppercase tracking-wider mb-1.5">
                  Target Deadline <span className="text-rose-500">*</span>
                </label>
                <select
                  id="quote-deadline"
                  required
                  value={formData.deadline}
                  onFocus={handleStartInteraction}
                  onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 focus:bg-white focus:border-neutral-900 focus:outline-none transition-all"
                >
                  <option value="within-5-days">Urgent (Within 5 Business Days)</option>
                  <option value="within-2-weeks">Within 2 Weeks</option>
                  <option value="end-of-month">This Month</option>
                  <option value="planning">Scoping for Upcoming Audit</option>
                </select>
              </div>

              {/* 4. Compliance or Security Goal */}
              <div>
                <label htmlFor="quote-goal" className="block text-[11px] font-bold text-neutral-800 uppercase tracking-wider mb-1.5">
                  Compliance / Security Goal <span className="text-rose-500">*</span>
                </label>
                <select
                  id="quote-goal"
                  required
                  value={formData.compliance_goal}
                  onFocus={handleStartInteraction}
                  onChange={(e) => setFormData({ ...formData, compliance_goal: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 focus:bg-white focus:border-neutral-900 focus:outline-none transition-all"
                >
                  <option value="Enterprise customer security review">Enterprise Buyer / Vendor Risk Review</option>
                  <option value="SOC 2 Type II or ISO 27001 readiness">SOC 2 / ISO 27001 Readiness Pentest</option>
                  <option value="API BOLA and tenant authorization">API BOLA / Authorization Verification</option>
                  <option value="Pre-production launch review">Pre-Production Release VAPT</option>
                  <option value="Founding Client Slot Application">Founding Client Program Slot (Discounted)</option>
                </select>
              </div>

              {/* 5. Work Email */}
              <div>
                <label htmlFor="quote-email" className="block text-[11px] font-bold text-neutral-800 uppercase tracking-wider mb-1.5">
                  Work Email <span className="text-rose-500">*</span>
                </label>
                <input
                  id="quote-email"
                  type="email"
                  required
                  placeholder="founder@yourcompany.com"
                  value={formData.email}
                  onFocus={handleStartInteraction}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 placeholder-neutral-400 focus:bg-white focus:border-neutral-900 focus:outline-none transition-all"
                />
              </div>

              {/* Primary Action Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white font-semibold text-xs tracking-tight shadow-md transition-all cursor-pointer disabled:opacity-50 min-h-[46px]"
                >
                  {loading ? (
                    <>
                      <Loader2 size={15} className="animate-spin" />
                      <span>Generating Quote Request...</span>
                    </>
                  ) : (
                    <>
                      <span>Get a fixed-price quote in 24h</span>
                      <ArrowRight size={14} />
                    </>
                  )}
                </button>
              </div>

              {/* Secondary WhatsApp Link + Legal Note */}
              <div className="pt-3 border-t border-dashed border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-neutral-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck size={13} className="text-emerald-600 shrink-0" />
                  Bilateral mutual NDA executed upfront
                </span>
                <a
                  href="https://wa.me/919391220328"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsappClick("quote_modal_footer")}
                  className="font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
                >
                  <MessageSquare size={12} />
                  <span>wa.me/919391220328</span>
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
