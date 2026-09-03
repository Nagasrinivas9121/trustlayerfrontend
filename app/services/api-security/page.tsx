import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "API Security Testing & BOLA Pentesting",
  description: "Manual API penetration testing targeting OWASP API Top 10 vulnerabilities: BOLA, IDOR, JWT flaws, BFLA, and GraphQL rate-limiting bypasses.",
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/services/api-security",
  },
};

export default function ApiSecurityPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "API Security Testing",
        "provider": { "@id": "https://www.trustlayerlabs.co.in/#organization" },
        "serviceType": "API Penetration Testing",
        "description": "Manual vulnerability assessment for REST, GraphQL, and gRPC microservices.",
        "areaServed": ["India", "Global"],
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trustlayerlabs.co.in" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.trustlayerlabs.co.in/services" },
          { "@type": "ListItem", "position": 3, "name": "API Security", "item": "https://www.trustlayerlabs.co.in/services/api-security" },
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
            <span>API Security Audit</span>
          </div>
          <h1 className="heading-1 mb-6 text-textPrimary font-extrabold tracking-tight">
            API Security <span className="text-primary">Testing & VAPT</span>
          </h1>
          <p className="body-text text-base max-w-3xl text-textSecondary leading-relaxed">
            Deep manual vulnerability assessment for REST, GraphQL, and gRPC endpoints. We focus heavily on BOLA/IDOR, broken authorization, JWT secret leaks, and rate-limiting flaws.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="p-6 bg-surface border border-border/80 rounded-xl space-y-3">
            <h3 className="text-sm font-bold text-textPrimary font-sans">BOLA & IDOR Detection</h3>
            <p className="text-xs text-textSecondary leading-relaxed">
              Verifying row-level tenant boundaries on every endpoint so User A can never query or manipulate User B data.
            </p>
          </div>

          <div className="p-6 bg-surface border border-border/80 rounded-xl space-y-3">
            <h3 className="text-sm font-bold text-textPrimary font-sans">GraphQL & JWT Security</h3>
            <p className="text-xs text-textSecondary leading-relaxed">
              Auditing GraphQL query depth, introspection, and JWT token signatures to prevent forgery and unauthorized data dumps.
            </p>
          </div>
        </div>

        <div className="space-y-4 mb-12">
          <div className="p-4 bg-surface border border-border/80 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-textSecondary font-sans">
              Securing APIs powering iOS or Android apps? Explore our <Link href="/services/mobile-vapt" className="text-primary font-bold hover:underline">Mobile Application VAPT</Link> services covering client apps, local storage, and mobile backend endpoints.
            </p>
            <Link href="/services/mobile-vapt" className="text-xs font-bold font-mono text-primary flex items-center gap-1 uppercase tracking-wider flex-shrink-0">
              Mobile VAPT →
            </Link>
          </div>

          <div className="p-4 bg-surface border border-border/80 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-textSecondary font-sans">
              Building a payment gateway, banking interface, or financial application? Explore our specialized <Link href="/fintech-security" className="text-primary font-bold hover:underline">FinTech API Security Testing</Link> services.
            </p>
            <Link href="/fintech-security" className="text-xs font-bold font-mono text-primary flex items-center gap-1 uppercase tracking-wider flex-shrink-0">
              Learn More →
            </Link>
          </div>
        </div>

        <div className="p-8 bg-surface border border-primary/30 rounded-2xl text-center space-y-4 shadow-sm">
          <h3 className="text-xl font-bold text-textPrimary font-sans">Book API Security Review</h3>
          <p className="text-xs text-textSecondary max-w-xl mx-auto font-sans leading-relaxed">
            Get an interim vulnerability snapshot in 48 hours. Includes comprehensive remediation guidance and a verified Retest Verification Letter.
          </p>
          <div className="pt-2">
            <Link
              href="https://calendar.app.google/jnamj3gawxVunPJm9"
              target="_blank"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-primary-hover text-white font-bold text-xs uppercase tracking-wider rounded-full transition-colors shadow-sm"
            >
              Book 20-Min Review <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
