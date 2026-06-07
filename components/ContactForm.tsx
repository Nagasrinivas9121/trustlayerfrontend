"use client";

import React, { useState } from "react";
import { Mail, MessageSquare, Linkedin, Send, CheckCircle2, Loader2 } from "lucide-react";
import { BRAND } from "@/lib/constants";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    startup: "",
    scope: "api",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Simulate form post
      await new Promise((res) => setTimeout(res, 1500));
      setSuccess(true);
      setFormData({ name: "", email: "", startup: "", scope: "api", message: "" });
    } catch (err) {
      // error handling
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-background border-t border-border relative" id="contact">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="section-container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-6">
            <span>Contact Security Team</span>
          </div>
          <h2 className="heading-2 mb-6 font-sans">
            Initiate Your <span className="text-primary">Security Assessment</span>
          </h2>
          <p className="body-text text-textSecondary font-sans">
            Request a scope review or book an intake call directly with our lead pentesting team.
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
                Connect with us for immediate assistance, scoping advice, or to sign mutual NDAs. We generally reply to all emails within 4 business hours.
              </p>

              <div className="space-y-4 font-sans">
                <a 
                  href={`mailto:${BRAND.contact.email}`}
                  className="flex items-center gap-4 p-4 bg-surface border border-border/80 rounded-xl hover:border-zinc-400 transition-colors group shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:text-primary transition-colors">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-sans text-textSecondary uppercase tracking-wider block">Security operations email:</span>
                    <span className="text-sm font-bold text-textPrimary font-sans">{BRAND.contact.email}</span>
                  </div>
                </a>

                <a 
                  href={BRAND.contact.whatsapp}
                  target="_blank"
                  className="flex items-center gap-4 p-4 bg-surface border border-border/80 rounded-xl hover:border-success/40 transition-colors group shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center text-success group-hover:text-success transition-colors">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-sans text-textSecondary uppercase tracking-wider block">WhatsApp Instant Messenger:</span>
                    <span className="text-sm font-bold text-textPrimary font-sans">Chat Online 24/7</span>
                  </div>
                </a>

                <a 
                  href={BRAND.contact.linkedin}
                  target="_blank"
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

            {/* Tech Hub Locations */}
            <div className="p-5 bg-surface border border-border/80 rounded-xl space-y-2 text-xs font-sans shadow-sm">
              <div className="text-xs font-bold font-sans text-textSecondary uppercase tracking-wider mb-2">Tech Operations:</div>
              <p className="text-textPrimary font-semibold">📍 Bangalore Hub: <span className="text-textSecondary font-normal">HSR Layout, Bengaluru, KA 560102</span></p>
              <p className="text-textPrimary font-semibold">📍 Hyderabad Hub: <span className="text-textSecondary font-normal">HITEC City, Hyderabad, TG 500081</span></p>
            </div>
          </div>

          {/* Right Column: Scoping Form */}
          <div className="lg:col-span-7 bg-surface border border-border/80 rounded-2xl p-8 relative flex flex-col justify-between shadow-sm">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full pointer-events-none -z-10" />

            {success ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4 py-12 font-sans">
                <div className="w-14 h-14 bg-success/15 border border-success/30 rounded-full flex items-center justify-center text-success animate-fade-in">
                  <CheckCircle2 size={26} />
                </div>
                <h4 className="text-lg font-bold text-textPrimary uppercase font-sans tracking-wide">Scoping Request Logged</h4>
                <p className="text-xs text-textSecondary max-w-sm leading-relaxed">
                  Thank you! Our security architect will review your scope details and contact you via email shortly to schedule a kickoff meeting.
                </p>
                <button 
                  onClick={() => setSuccess(false)}
                  className="px-4 py-2 border border-border hover:border-zinc-400 rounded-lg text-xs uppercase font-sans tracking-wider font-semibold text-textPrimary hover:bg-zinc-50 transition-colors"
                >
                  Submit Another Scope
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold font-sans text-textSecondary uppercase tracking-wider mb-1.5">
                      Your Name:
                    </label>
                    <input 
                      type="text" 
                      id="name"
                      value={formData.name}
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
                      value={formData.email}
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
                      Startup Name:
                    </label>
                    <input 
                      type="text" 
                      id="startup"
                      value={formData.startup}
                      onChange={(e) => setFormData({...formData, startup: e.target.value})}
                      required
                      placeholder="e.g. CareOS"
                      className="w-full bg-background border border-border/80 hover:border-zinc-400 focus:border-primary rounded-lg px-3 py-2 text-sm text-textPrimary placeholder-textSecondary/40 focus:outline-none transition-all font-sans"
                    />
                  </div>
                  <div>
                    <label htmlFor="scope" className="block text-xs font-bold font-sans text-textSecondary uppercase tracking-wider mb-1.5">
                      Scope Priority:
                    </label>
                    <select 
                      id="scope"
                      value={formData.scope}
                      onChange={(e) => setFormData({...formData, scope: e.target.value})}
                      className="w-full bg-background border border-border/80 hover:border-zinc-400 focus:border-primary rounded-lg px-3 py-2 text-sm text-textPrimary focus:outline-none transition-all font-sans"
                    >
                      <option value="api">API Pen Testing</option>
                      <option value="vapt">Application VAPT</option>
                      <option value="cloud">Cloud Security Audit</option>
                      <option value="soc2">SOC2 / ISO Readiness</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold font-sans text-textSecondary uppercase tracking-wider mb-1.5">
                    Scoping Brief or Message:
                  </label>
                  <textarea 
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    rows={4}
                    placeholder="Describe your architecture (e.g. GraphQL, AWS configuration, number of API endpoints) or urgency deadline details..."
                    className="w-full bg-background border border-border/80 hover:border-zinc-400 focus:border-primary rounded-lg p-3 text-sm text-textPrimary placeholder-textSecondary/40 focus:outline-none transition-all font-sans"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center py-3 bg-primary hover:bg-primary-hover text-sm uppercase font-sans font-semibold tracking-wider rounded-lg text-white shadow-sm transition-all gap-1.5 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 size={13} className="animate-spin" /> Transmitting Scopes...
                    </>
                  ) : (
                    <>
                      Transmit Secure Scopes <Send size={12} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
