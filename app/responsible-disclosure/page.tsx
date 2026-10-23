import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Mail, Lock, CheckCircle2, XCircle, Award } from "lucide-react";
import type { Metadata } from "next";
import ObfuscatedEmailLink from "@/components/ObfuscatedEmailLink";

export const metadata: Metadata = {
  title: "Responsible Disclosure Policy",
  description: "TrustLayerLabs Vulnerability Disclosure Policy. How security researchers can report potential vulnerabilities safely and responsibly.",
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/responsible-disclosure",
  },
};

export default function ResponsibleDisclosurePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.trustlayerlabs.co.in/responsible-disclosure#webpage",
        "url": "https://www.trustlayerlabs.co.in/responsible-disclosure",
        "name": "Responsible Disclosure Policy | TrustLayerLabs",
        "description": "TrustLayerLabs Vulnerability Disclosure Policy. How security researchers can report potential vulnerabilities safely and responsibly.",
        "isPartOf": { "@id": "https://www.trustlayerlabs.co.in/#website" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.trustlayerlabs.co.in/responsible-disclosure#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trustlayerlabs.co.in" },
          { "@type": "ListItem", "position": 2, "name": "Responsible Disclosure", "item": "https://www.trustlayerlabs.co.in/responsible-disclosure" }
        ]
      }
    ]
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen pt-32 pb-24 font-sans text-neutral-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Pill */}
        <Link 
          href="/" 
          className="inline-flex items-center text-xs font-semibold text-neutral-500 hover:text-neutral-900 transition-colors gap-2 mb-8 group px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 shadow-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>

        {/* Hero Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/80 shadow-sm text-xs font-semibold text-neutral-800 mb-4">
            <ShieldCheck size={14} className="text-neutral-900" />
            <span>Coordinated Vulnerability Disclosure</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 mb-4">
            Vulnerability <span className="text-neutral-900">Responsible Disclosure</span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl">
            We value the cybersecurity research community. If you discover a potential vulnerability in any TrustLayerLabs system or asset, we encourage you to report it to us immediately.
          </p>
        </div>

        <div className="space-y-6 text-sm text-neutral-600 leading-relaxed">
          {/* Safe Harbor */}
          <div className="p-8 bg-white border border-neutral-200/80 rounded-3xl space-y-3 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-900">
                <ShieldCheck size={18} />
              </div>
              <h2 className="text-base font-bold text-neutral-950">
                Safe Harbor & Legal Protection
              </h2>
            </div>
            <p className="pl-12 text-sm text-neutral-600">
              TrustLayerLabs considers good-faith vulnerability research conducted in accordance with this policy to be authorized. If you discover a security vulnerability and follow these guidelines, we will not initiate or pursue legal action against you, nor will we request law enforcement investigation for accidental security boundary tests.
            </p>
          </div>

          {/* Scope Grid */}
          <div className="p-8 bg-white border border-neutral-200/80 rounded-3xl space-y-6 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
            <div>
              <h2 className="text-base font-bold text-neutral-950">
                Program Scope & Assessment Boundaries
              </h2>
              <p className="text-xs text-neutral-500 mt-1">
                Only vulnerabilities within the declared scope qualify for coordinated disclosure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 bg-neutral-50 border border-neutral-200/70 rounded-2xl space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-emerald-600" />
                  <h3 className="text-xs font-bold text-neutral-950 uppercase tracking-wider">
                    In-Scope Assets & Flaws
                  </h3>
                </div>
                <ul className="space-y-2 text-xs text-neutral-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                    <span>Domain: *.trustlayerlabs.co.in web applications & public APIs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                    <span>Authentication & Session Management flaws (JWT manipulation, token leakage)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                    <span>Broken Object Level Authorization (BOLA/IDOR)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                    <span>Server-Side Request Forgery (SSRF) and Remote Code Execution (RCE)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                    <span>SQL Injection, NoSQL Injection, and Command Injection</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 bg-neutral-50 border border-neutral-200/70 rounded-2xl space-y-3">
                <div className="flex items-center gap-2">
                  <XCircle size={15} className="text-rose-500" />
                  <h3 className="text-xs font-bold text-neutral-950 uppercase tracking-wider">
                    Out-of-Scope Activities
                  </h3>
                </div>
                <ul className="space-y-2 text-xs text-neutral-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                    <span>Denial of Service (DoS / DDoS) attacks or resource exhaustion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                    <span>Phishing, spear-phishing, or social engineering targeting our staff</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                    <span>Physical attacks against data centers or offices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                    <span>Automated high-frequency scanning without rate limits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                    <span>Third-party services (DNS, Vercel infrastructure, email providers)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Guidelines & SLAs */}
          <div className="p-8 bg-white border border-neutral-200/80 rounded-3xl space-y-4 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-900">
                <Mail size={18} />
              </div>
              <h2 className="text-base font-bold text-neutral-950">
                Reporting Guidelines & Response SLAs
              </h2>
            </div>
            <p className="pl-12 text-sm text-neutral-600">
              Please submit detailed technical reports to{" "}
              <ObfuscatedEmailLink className="text-neutral-900 font-bold underline underline-offset-2" />. To accelerate verification, adhere to the following standards:
            </p>
            <div className="pl-12 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/70 text-xs">
                <strong className="text-neutral-950 block mb-1">Detailed Reproduction:</strong>
                Include HTTP requests/responses, payload parameters, or minimal PoC scripts.
              </div>
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/70 text-xs">
                <strong className="text-neutral-950 block mb-1">Data Minimization:</strong>
                Prove exploitation non-destructively. Never exfiltrate data beyond verifying the flaw.
              </div>
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/70 text-xs">
                <strong className="text-neutral-950 block mb-1">24-Hour Acknowledgement:</strong>
                We acknowledge receipt within 24 hours and triage severity (CVSS v3.1) within 72 hours.
              </div>
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/70 text-xs">
                <strong className="text-neutral-950 block mb-1">30-Day Window:</strong>
                We request a 30-day remediation window prior to public disclosure of vulnerability details.
              </div>
            </div>
          </div>

          {/* Recognition */}
          <div className="p-8 bg-white border border-dashed border-neutral-300 rounded-3xl space-y-3 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-900">
                <Award size={18} />
              </div>
              <h2 className="text-base font-bold text-neutral-950">
                Researcher Recognition
              </h2>
            </div>
            <p className="pl-12 text-sm text-neutral-600">
              While TrustLayerLabs does not currently operate a paid bug bounty program, we believe in honoring security contributors. Researchers who report qualifying, previously unknown vulnerabilities in good faith will receive public acknowledgment in our Security Hall of Fame and a formal professional recommendation on LinkedIn.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
