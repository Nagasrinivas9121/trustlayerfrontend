"use client";

import React, { useState } from "react";
import { Mail, MessageSquare, Linkedin, Send, CheckCircle2, Loader2, Calendar, FileText, AlertCircle } from "lucide-react";
import { BRAND } from "@/lib/constants";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import ObfuscatedEmailLink from "@/components/ObfuscatedEmailLink";

import { 
  trackContactFormStart, 
  trackContactFormSubmit, 
  trackCalendarCtaClick, 
  trackWhatsappCtaClick,
  trackWrittenScopeCtaClick,
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
  const [mode, setMode] = useState<"calendar" | "form">("calendar");
  const [hasStarted, setHasStarted] = useState(false);

  const handleStart = () => {
    if (!hasStarted) {
      setHasStarted(true);
      trackContactFormStart();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
    <section className="py-24 bg-background border-t border-border relative overflow-hidden" id="contact">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] max-w-[100vw] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="section-container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-6">
            <span>Contact Security Team</span>
          </div>
          {asH1 ? (
            <h1 className="heading-2 mb-6 font-sans">
              Initiate Your <span className="text-primary">Security Assessment</span>
            </h1>
          ) : (
            <h2 className="heading-2 mb-6 font-sans">
              Initiate Your <span className="text-primary">Security Assessment</span>
            </h2>
          )}
          <p className="body-text text-textSecondary font-sans">
            Request a scope review or connect directly with our security practitioners.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Left Column: Details & Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-xs font-bold text-textPrimary font-sans uppercase tracking-wider">
                Direct Channels
              </h3>
              
              <p className="text-xs text-textSecondary leading-relaxed font-sans">
                Connect with us for scoping advice, security assessment enquiries, or to execute a mutual NDA. We aim to respond within one business day.
              </p>

              <div className="space-y-4 font-sans">
                <ObfuscatedEmailLink 
                  className="flex items-center gap-4 p-4 bg-surface border border-border/80 rounded-xl hover:border-zinc-400 transition-colors group shadow-sm"
                  ariaLabel="Email TrustLayerLabs directly"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:text-primary transition-colors">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-sans text-textSecondary uppercase tracking-wider block">Direct Email:</span>
                    <span className="text-sm font-bold text-textPrimary font-sans hover:underline">
                      ceo [at] trustlayerlabs.co.in
                    </span>
                  </div>
                </ObfuscatedEmailLink>

                <a 
                  href={BRAND.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsappCtaClick("contact_form_sidebar")}
                  className="flex items-center gap-4 p-4 bg-surface border border-border/80 rounded-xl hover:border-success/40 transition-colors group shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center text-success group-hover:text-success transition-colors">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-sans text-textSecondary uppercase tracking-wider block">WhatsApp Direct Chat:</span>
                    <span className="text-sm font-bold text-textPrimary font-sans">{BRAND.contact.phone}</span>
                  </div>
                </a>

                <a 
                  href={BRAND.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-surface border border-border/80 rounded-xl hover:border-primary/40 transition-colors group shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:text-primary transition-colors">
                    <Linkedin size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-sans text-textSecondary uppercase tracking-wider block">LinkedIn Page:</span>
                    <span className="text-sm font-bold text-textPrimary font-sans">Follow TrustLayerLabs</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Team Operations & Presence */}
            <div className="p-5 bg-surface border border-border/80 rounded-xl space-y-2 text-xs font-sans shadow-sm">
              <div className="text-xs font-bold font-sans text-textSecondary uppercase tracking-wider mb-2">Team Operations:</div>
              <p className="text-textPrimary font-semibold">📍 Distributed Team: <span className="text-textSecondary font-normal">Bangalore & Hyderabad</span></p>
              <p className="text-textPrimary font-semibold">Scope of Delivery: <span className="text-textSecondary font-normal">Serving SaaS, FinTech & AI teams globally — remote-first engagements</span></p>
            </div>
          </div>

          {/* Right Column: Calendar Booking or Scoping Form */}
          <div className="lg:col-span-7 bg-surface border border-border/80 rounded-2xl p-4 sm:p-6 lg:p-8 relative flex flex-col justify-between shadow-sm">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full pointer-events-none -z-10" />

            {/* Mode Switcher (Section 22: Primary: Book Free Security Review, Secondary: Send Written Scope) */}
            <div className="flex items-center gap-1.5 sm:gap-2 p-1 sm:p-1.5 bg-background border border-border/80 rounded-xl mb-6 font-sans">
              <button
                type="button"
                onClick={() => {
                  trackCalendarCtaClick("contact_form_mode_calendar", "Book Free Security Review");
                  setMode("calendar");
                }}
                className={`flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-2 sm:py-2.5 px-2 sm:px-3 rounded-lg text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  mode === "calendar"
                    ? "bg-primary text-white shadow-sm"
                    : "text-textSecondary hover:text-textPrimary"
                }`}
              >
                <Calendar size={13} className="shrink-0" />
                <span className="truncate">Book Free Security Review</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  trackWrittenScopeCtaClick("contact_form_mode_form");
                  setMode("form");
                }}
                className={`flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-2 sm:py-2.5 px-2 sm:px-3 rounded-lg text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  mode === "form"
                    ? "bg-primary text-white shadow-sm"
                    : "text-textSecondary hover:text-textPrimary"
                }`}
              >
                <FileText size={13} className="shrink-0" />
                <span className="truncate">Send Written Scope</span>
              </button>
            </div>

            {mode === "calendar" ? (
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-sans px-1 gap-1">
                  <span className="text-textSecondary font-medium">Select a slot with an offensive security practitioner:</span>
                  <span className="text-emerald-800 font-bold flex items-center gap-1.5 shrink-0">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" /> Live Availability
                  </span>
                </div>
                <CalendlyEmbed minHeight="660px" className="min-h-[580px] sm:min-h-[660px]" />
              </div>
            ) : success ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4 py-12 font-sans">
                <div className="w-14 h-14 bg-success/15 border border-success/30 rounded-full flex items-center justify-center text-success animate-fade-in">
                  <CheckCircle2 size={26} />
                </div>
                <h4 className="text-lg font-bold text-textPrimary uppercase font-sans tracking-wide">Security Review Requested</h4>
                <p className="text-xs text-textSecondary max-w-sm leading-relaxed">
                  Thank you! Our lead offensive security practitioners will review your scope details under mutual NDA and contact you via email within one business day.
                </p>
                <button 
                  onClick={() => setSuccess(false)}
                  className="px-4 py-2 border border-border hover:border-zinc-400 rounded-lg text-xs uppercase font-sans tracking-wider font-semibold text-textPrimary hover:bg-zinc-50 transition-colors cursor-pointer"
                >
                  Submit Another Scope
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans">
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
                      Your entered details are preserved below. You can also reach our team directly at{" "}
                      <a href="mailto:ceo@trustlayerlabs.co.in" className="underline font-bold">ceo@trustlayerlabs.co.in</a> or{" "}
                      <a href="https://wa.me/919391220328" target="_blank" rel="noopener noreferrer" className="underline font-bold">WhatsApp (+91 93912 20328)</a>.
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold font-sans text-textSecondary uppercase tracking-wider mb-1.5">
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
                      placeholder="e.g. Siddharth"
                      className="w-full bg-background border border-border/80 hover:border-zinc-400 focus:border-primary rounded-lg px-3 py-2 text-sm text-textPrimary placeholder-textSecondary/40 focus:outline-none transition-all font-sans"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold font-sans text-textSecondary uppercase tracking-wider mb-1.5">
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
                      placeholder="e.g. name@startup.com"
                      className="w-full bg-background border border-border/80 hover:border-zinc-400 focus:border-primary rounded-lg px-3 py-2 text-sm text-textPrimary placeholder-textSecondary/40 focus:outline-none transition-all font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="startup" className="block text-xs font-bold font-sans text-textSecondary uppercase tracking-wider mb-1.5">
                      Company Name:
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
                      className="w-full bg-background border border-border/80 hover:border-zinc-400 focus:border-primary rounded-lg px-3 py-2 text-sm text-textPrimary placeholder-textSecondary/40 focus:outline-none transition-all font-sans"
                    />
                  </div>
                  <div>
                    <label htmlFor="website" className="block text-xs font-bold font-sans text-textSecondary uppercase tracking-wider mb-1.5">
                      Website / App URL:
                    </label>
                    <input 
                      type="text" 
                      id="website"
                      name="website"
                      value={formData.website}
                      onFocus={handleStart}
                      onChange={(e) => setFormData({...formData, website: e.target.value})}
                      required
                      placeholder="e.g. https://careos.io"
                      className="w-full bg-background border border-border/80 hover:border-zinc-400 focus:border-primary rounded-lg px-3 py-2 text-sm text-textPrimary placeholder-textSecondary/40 focus:outline-none transition-all font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="productType" className="block text-xs font-bold font-sans text-textSecondary uppercase tracking-wider mb-1.5">
                      Product Type:
                    </label>
                    <select 
                      id="productType"
                      name="productType"
                      value={formData.productType}
                      onChange={(e) => setFormData({...formData, productType: e.target.value})}
                      className="w-full bg-background border border-border/80 hover:border-zinc-400 focus:border-primary rounded-lg px-3 py-2 text-sm text-textPrimary focus:outline-none transition-all font-sans"
                    >
                      <option value="b2b-saas">B2B SaaS (Multi-Tenant)</option>
                      <option value="ai-startup">AI / GenAI Application</option>
                      <option value="fintech">FinTech / Payments</option>
                      <option value="web-mobile">Web / Mobile Application</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="scope" className="block text-xs font-bold font-sans text-textSecondary uppercase tracking-wider mb-1.5">
                      Security Focus:
                    </label>
                    <select 
                      id="scope"
                      name="scope"
                      value={formData.scope}
                      onChange={(e) => setFormData({...formData, scope: e.target.value})}
                      className="w-full bg-background border border-border/80 hover:border-zinc-400 focus:border-primary rounded-lg px-3 py-2 text-sm text-textPrimary focus:outline-none transition-all font-sans"
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
                  <label htmlFor="timeline" className="block text-xs font-bold font-sans text-textSecondary uppercase tracking-wider mb-1.5">
                    Approximate Timeline:
                  </label>
                  <select 
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                    className="w-full bg-background border border-border/80 hover:border-zinc-400 focus:border-primary rounded-lg px-3 py-2 text-sm text-textPrimary focus:outline-none transition-all font-sans"
                  >
                    <option value="immediately">Immediate (Deal blocker / Urgent review)</option>
                    <option value="within-2-weeks">Within 2 weeks</option>
                    <option value="within-1-month">Within 1 month</option>
                    <option value="exploring">Exploring / Next quarter</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold font-sans text-textSecondary uppercase tracking-wider mb-1.5">
                    Scoping Brief (Optional):
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={3}
                    placeholder="Describe your architecture (e.g. GraphQL, AWS, microservices) or enterprise buyer review context..."
                    className="w-full bg-background border border-border/80 hover:border-zinc-400 focus:border-primary rounded-lg p-3 text-sm text-textPrimary placeholder-textSecondary/40 focus:outline-none transition-all font-sans"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center py-3.5 bg-primary hover:bg-primary-hover text-xs uppercase font-sans font-bold tracking-wider rounded-lg text-white shadow-sm transition-all gap-1.5 disabled:opacity-50 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 size={13} className="animate-spin" /> Transmitting Details...
                    </>
                  ) : (
                    <>
                      Request Free Security Review <Send size={12} />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-3 pt-2 text-[10px] text-textSecondary text-center">
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
