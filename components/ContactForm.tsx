"use client";

import React, { useState } from "react";
import { Mail, MessageSquare, Linkedin, Send, CheckCircle2, Loader2, Calendar, FileText, AlertCircle, Shield, Clock } from "lucide-react";
import { BRAND } from "@/lib/constants";
import ObfuscatedEmailLink from "@/components/ObfuscatedEmailLink";

import { 
  trackContactFormStart, 
  trackContactFormSubmit, 
  trackCalendarCtaClick, 
  trackWhatsappCtaClick,
  trackWrittenScopeCtaClick,
  trackSecurityReviewFormError,
  getUtmAttribution
} from "@/lib/analytics";

export default function ContactForm({ asH1 = false }: { asH1?: boolean }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    startup: "",
    website: "",
    productType: "b2b-saas",
    scope: "api",
    timeline: "within-2-weeks",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [botField, setBotField] = useState("");
  const [hasStarted, setHasStarted] = useState(false);

  const handleStart = () => {
    if (!hasStarted) {
      setHasStarted(true);
      trackContactFormStart();
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
          source: "contact-form",
          bot_field: botField,
          utm,
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || !result.success) {
        const errorMsg =
          result.error ||
          "Unable to deliver enquiry automatically. Please reach out directly to ceo@trustlayerlabs.co.in or via WhatsApp.";
        setError(errorMsg);
        trackSecurityReviewFormError(result.code || "delivery_error", "contact_form");

        // Store backup locally marked as unsent (never display false success)
        const existingLeads = JSON.parse(localStorage.getItem("trustlayer_leads") || "[]");
        existingLeads.push({
          ...formData,
          ...utm,
          source: "contact-form",
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
        source: "contact-form",
        status: "delivered",
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem("trustlayer_leads", JSON.stringify(existingLeads));

      trackContactFormSubmit({
        product_type: formData.productType,
        scope: formData.scope,
        timeline: formData.timeline,
      });

      setSuccess(true);
      setFormData({ 
        name: "", 
        email: "", 
        startup: "", 
        website: "", 
        productType: "b2b-saas", 
        scope: "api", 
        timeline: "within-2-weeks", 
        message: "",
      });
    } catch (err: any) {
      console.error("Form submit error:", err);
      const networkError = "Network error. Please verify your connection or email ceo@trustlayerlabs.co.in directly.";
      setError(networkError);
      trackSecurityReviewFormError("network_error", "contact_form");

      const existingLeads = JSON.parse(localStorage.getItem("trustlayer_leads") || "[]");
      existingLeads.push({
        ...formData,
        source: "contact-form",
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
    <section className="py-20 sm:py-28 bg-[#FAFAFA] border-t border-dashed border-neutral-200 relative overflow-hidden" id="contact">
      <div className="section-container">
        
        {/* Header - CodeDale style */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-neutral-200 shadow-sm rounded-full text-xs font-semibold text-neutral-800 uppercase tracking-wider mb-5">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>Contact Security Team</span>
          </div>
          {asH1 ? (
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-tight mb-5 font-sans">
              Initiate Your <span className="text-primary">Security Assessment</span>
            </h1>
          ) : (
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-tight mb-5 font-sans">
              Initiate Your <span className="text-primary">Security Assessment</span>
            </h2>
          )}
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-sans max-w-2xl mx-auto">
            Request a scope review or connect directly with our offensive security practitioners. Mutual NDA executed upfront.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Left Column: Details & Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-neutral-500 font-mono uppercase tracking-wider">
                  Direct Practitioner Channels
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                  <Clock size={11} /> 24h response SLA
                </span>
              </div>
              
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
                Connect with us for scoping advice, security assessment enquiries, or to execute a mutual NDA before technical discussions.
              </p>

              <div className="space-y-3.5 font-sans">
                <a 
                  href="mailto:ceo@trustlayerlabs.co.in"
                  className="flex items-center gap-4 p-4.5 bg-white border border-neutral-200/90 rounded-2xl hover:border-blue-400 hover:shadow-md transition-all group shadow-sm"
                  aria-label="Email TrustLayerLabs directly at ceo@trustlayerlabs.co.in"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200/70 flex items-center justify-center text-primary group-hover:scale-105 transition-transform shrink-0">
                    <Mail size={19} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono font-semibold text-neutral-500 uppercase tracking-wider block">Direct Email:</span>
                    <span className="text-sm font-bold text-neutral-900 font-sans hover:text-primary transition-colors truncate block">
                      ceo@trustlayerlabs.co.in
                    </span>
                  </div>
                </a>

                <a 
                  href={BRAND.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsappCtaClick("contact_form_sidebar")}
                  className="flex items-center gap-4 p-4.5 bg-white border border-neutral-200/90 rounded-2xl hover:border-emerald-400 hover:shadow-md transition-all group shadow-sm"
                >
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200/70 flex items-center justify-center text-emerald-600 group-hover:scale-105 transition-transform shrink-0">
                    <MessageSquare size={19} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-semibold text-neutral-500 uppercase tracking-wider block">WhatsApp Direct Chat:</span>
                    <span className="text-sm font-bold text-neutral-900 font-sans">{BRAND.contact.phone}</span>
                  </div>
                </a>

                <a 
                  href={BRAND.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4.5 bg-white border border-neutral-200/90 rounded-2xl hover:border-blue-400 hover:shadow-md transition-all group shadow-sm"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200/70 flex items-center justify-center text-primary group-hover:scale-105 transition-transform shrink-0">
                    <Linkedin size={19} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-semibold text-neutral-500 uppercase tracking-wider block">Official LinkedIn:</span>
                    <span className="text-sm font-bold text-neutral-900 font-sans">Follow TrustLayerLabs</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Team Operations & Presence - CodeDale style card */}
            <div className="p-6 bg-white border border-dashed border-neutral-300 rounded-2xl space-y-2.5 text-xs font-sans shadow-sm">
              <div className="text-[11px] font-bold font-mono text-neutral-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Shield size={13} className="text-primary" /> Delivery Operations:
              </div>
              <p className="text-neutral-800 font-semibold">📍 Distributed Team: <span className="text-neutral-600 font-normal">Remote-First Security Assessments</span></p>
              <p className="text-neutral-800 font-semibold">Jurisdiction: <span className="text-neutral-600 font-normal">Govt. of India Registered MSME · UDYAM-AP-21-0044317</span></p>
            </div>
          </div>

          {/* Right Column: Calendar Booking or Scoping Form */}
          <div className="lg:col-span-7 bg-white border border-neutral-200/90 rounded-3xl p-6 sm:p-8 relative flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.04)]">

            {success ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4 py-12 font-sans">
                <div className="w-16 h-16 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center text-emerald-600 animate-fade-in shadow-sm">
                  <CheckCircle2 size={30} />
                </div>
                <p className="text-xl font-bold text-neutral-900 uppercase font-sans tracking-wide">Security Review Requested</p>
                <p className="text-xs sm:text-sm text-neutral-600 max-w-sm leading-relaxed">
                  Thank you! Our lead offensive security practitioners will review your scope details under mutual NDA and contact you via email within one business day.
                </p>
                <button 
                  onClick={() => setSuccess(false)}
                  className="px-6 py-2.5 rounded-full border border-neutral-300 hover:border-neutral-500 text-xs uppercase font-sans tracking-wider font-semibold text-neutral-800 hover:bg-neutral-50 transition-colors cursor-pointer"
                >
                  Submit Another Scope
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans">
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
                    <p className="leading-relaxed opacity-90">{error}</p>
                    <p className="text-[11px] pt-1 border-t border-red-200/60">
                      Your entered details are preserved below. You can also reach our team directly at{" "}
                      <a href="mailto:ceo@trustlayerlabs.co.in" className="underline font-bold">ceo@trustlayerlabs.co.in</a> or{" "}
                      <a href="https://wa.me/919391220328" target="_blank" rel="noopener noreferrer" className="underline font-bold">WhatsApp (+91 93912 20328)</a>.
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold font-sans text-neutral-700 uppercase tracking-wider mb-1.5">
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
                      placeholder="e.g. Siddharth"
                      className="w-full bg-neutral-50/60 border border-neutral-200 hover:border-neutral-300 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100 rounded-xl px-3.5 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none transition-all font-sans"
                    />
                  </div>
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
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      placeholder="e.g. name@startup.com"
                      className="w-full bg-neutral-50/60 border border-neutral-200 hover:border-neutral-300 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100 rounded-xl px-3.5 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none transition-all font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="startup" className="block text-xs font-semibold font-sans text-neutral-700 uppercase tracking-wider mb-1.5">
                      Company Name <span className="text-primary">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="startup"
                      name="startup"
                      autoComplete="organization"
                      value={formData.startup}
                      onFocus={handleStart}
                      onChange={(e) => setFormData({...formData, startup: e.target.value})}
                      required
                      placeholder="e.g. CareOS"
                      className="w-full bg-neutral-50/60 border border-neutral-200 hover:border-neutral-300 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100 rounded-xl px-3.5 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none transition-all font-sans"
                    />
                  </div>
                  <div>
                    <label htmlFor="website" className="block text-xs font-semibold font-sans text-neutral-700 uppercase tracking-wider mb-1.5">
                      Website / App URL <span className="text-neutral-400 font-normal lowercase">(optional)</span>
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
                      placeholder="e.g. https://careos.io (or app in staging)"
                      className="w-full bg-neutral-50/60 border border-neutral-200 hover:border-neutral-300 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100 rounded-xl px-3.5 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none transition-all font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="productType" className="block text-xs font-semibold font-sans text-neutral-700 uppercase tracking-wider mb-1.5">
                      Product Type:
                    </label>
                    <select 
                      id="productType"
                      name="productType"
                      value={formData.productType}
                      onChange={(e) => setFormData({...formData, productType: e.target.value})}
                      className="w-full bg-neutral-50/60 border border-neutral-200 hover:border-neutral-300 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100 rounded-xl px-3.5 py-2.5 text-sm text-neutral-900 focus:outline-none transition-all font-sans"
                    >
                      <option value="b2b-saas">B2B SaaS (Multi-Tenant)</option>
                      <option value="ai-startup">AI / GenAI Application</option>
                      <option value="fintech">FinTech / Payments</option>
                      <option value="web-mobile">Web / Mobile Application</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="scope" className="block text-xs font-semibold font-sans text-neutral-700 uppercase tracking-wider mb-1.5">
                      Security Focus:
                    </label>
                    <select 
                      id="scope"
                      name="scope"
                      value={formData.scope}
                      onChange={(e) => setFormData({...formData, scope: e.target.value})}
                      className="w-full bg-neutral-50/60 border border-neutral-200 hover:border-neutral-300 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100 rounded-xl px-3.5 py-2.5 text-sm text-neutral-900 focus:outline-none transition-all font-sans"
                    >
                      <option value="api-authorization">API Security & BOLA/IDOR</option>
                      <option value="tenant-isolation">Multi-Tenant Isolation</option>
                      <option value="enterprise-readiness">Enterprise Customer Review Blocker</option>
                      <option value="vapt">Full Web Application VAPT</option>
                      <option value="soc2">SOC 2 / ISO 27001 Readiness</option>
                      <option value="cloud">Cloud Infrastructure Audit</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-xs font-semibold font-sans text-neutral-700 uppercase tracking-wider mb-1.5">
                    Approximate Timeline:
                  </label>
                  <select 
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                    className="w-full bg-neutral-50/60 border border-neutral-200 hover:border-neutral-300 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100 rounded-xl px-3.5 py-2.5 text-sm text-neutral-900 focus:outline-none transition-all font-sans"
                  >
                    <option value="immediately">Immediate (Deal blocker / Urgent review)</option>
                    <option value="within-2-weeks">Within 2 weeks</option>
                    <option value="within-1-month">Within 1 month</option>
                    <option value="exploring">Exploring / Next quarter</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold font-sans text-neutral-700 uppercase tracking-wider mb-1.5">
                    Scoping Brief (Optional):
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={3}
                    placeholder="Describe your architecture (e.g. GraphQL, AWS, microservices) or enterprise buyer review context..."
                    className="w-full bg-neutral-50/60 border border-neutral-200 hover:border-neutral-300 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100 rounded-xl p-3.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none transition-all font-sans"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center py-4 bg-primary hover:bg-blue-700 text-xs uppercase font-sans font-bold tracking-wider rounded-full text-white shadow-md hover:shadow-lg transition-all gap-2 disabled:opacity-50 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 size={14} className="animate-spin" /> Transmitting Details...
                    </>
                  ) : (
                    <>
                      <span>Get a fixed-price quote in 24h</span>
                      <Send size={13} />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-3 pt-2 text-[11px] text-neutral-500 text-center font-sans">
                  <span>🔒 Mutual NDA Upfront</span>
                  <span>•</span>
                  <span>Direct Practitioner Response in 24h</span>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
