import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield, CheckCircle, Code, ArrowRight, Lock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Application VAPT | Manual Web Pentesting Services",
  description: "Manual Vulnerability Assessment & Penetration Testing (VAPT) for web apps. OWASP Top 10, XSS, SQLi, authentication bypasses, and 48-hour report delivery.",
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/services/web-app-vapt",
  },
};

export default function WebAppVaptPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Web Application VAPT",
        "provider": { "@id": "https://www.trustlayerlabs.co.in/#organization" },
        "serviceType": "Penetration Testing",
        "description": "Manual vulnerability assessment and penetration testing for web applications targeting OWASP Top 10 flaws.",
        "areaServed": ["India", "Global"],
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trustlayerlabs.co.in" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.trustlayerlabs.co.in/services" },
          { "@type": "ListItem", "position": 3, "name": "Web App VAPT", "item": "https://www.trustlayerlabs.co.in/services/web-app-vapt" },
        ],
      },
    ],
  };

  return (
    <div className="bg-background min-h-screen pt-32 pb-24 font-sans text-textPrimary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="section-container max-w-5xl mx-auto">
        <Link 
          href="/services" 
          className="inline-flex items-center text-xs uppercase tracking-widest text-textSecondary hover:text-textPrimary transition-colors gap-2 mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
          Back to All Services
        </Link>

        <div className="mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-widest mb-4">
            <span>Web Security Engineering</span>
          </div>
          <h1 className="heading-1 mb-6 text-textPrimary font-extrabold tracking-tight">
            Web Application <span className="text-primary">VAPT Services</span>
          </h1>
          <p className="body-text text-base max-w-3xl text-textSecondary leading-relaxed">
            100% manual penetration testing for modern React, Next.js, Vue, and SSR applications. We uncover complex logic flaws, session hijacking vulnerabilities, and OWASP Top 10 threats.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="p-6 bg-surface border border-border/80 rounded-xl space-y-3 shadow-sm">
            <h3 className="text-sm font-bold text-textPrimary font-sans">OWASP Web Top 10 Coverage</h3>
            <p className="text-xs text-textSecondary leading-relaxed">
              Exhaustive testing for SQL Injection (SQLi), Cross-Site Scripting (XSS), CSRF, Insecure Deserialization, and Server-Side Request Forgery (SSRF).
            </p>
          </div>

          <div className="p-6 bg-surface border border-border/80 rounded-xl space-y-3 shadow-sm">
            <h3 className="text-sm font-bold text-textPrimary font-sans">Manual Business Logic Testing</h3>
            <p className="text-xs text-textSecondary leading-relaxed">
              Automated tools miss multi-step privilege escalation and state machine bypasses. Our OSCP pentesters manually analyze session state boundaries.
            </p>
          </div>
        </div>

        {/* Action CTA */}
        <div className="p-8 bg-surface border border-primary/30 rounded-2xl text-center space-y-4">
          <h3 className="text-xl font-bold text-textPrimary">Book Web Application VAPT</h3>
          <p className="text-xs text-textSecondary max-w-xl mx-auto">
            Turnaround within 5-7 business days. Initial executive summary delivered in 48 hours with 100% free 30-day retesting included.
          </p>
          <div className="pt-2">
            <Link
              href="https://calendar.app.google/jnamj3gawxVunPJm9"
              target="_blank"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#0a0a0a] text-white font-bold text-xs uppercase tracking-wider rounded-full hover:bg-zinc-800 transition-colors"
            >
              Book Web Audit <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
