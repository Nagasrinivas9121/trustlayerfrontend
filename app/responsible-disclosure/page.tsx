import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Mail, Lock } from "lucide-react";
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
  return (
    <div className="bg-background min-h-screen pt-32 pb-24 font-sans text-textPrimary">
      <div className="section-container max-w-4xl mx-auto">
        <Link 
          href="/" 
          className="inline-flex items-center text-xs uppercase font-sans tracking-widest text-textSecondary hover:text-textPrimary transition-colors gap-2 mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
          Back to Home
        </Link>

        <div className="mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-widest mb-4">
            <span>Coordinated Disclosure</span>
          </div>
          <h1 className="heading-1 mb-6 text-textPrimary font-extrabold tracking-tight">
            Vulnerability <span className="text-primary">Responsible Disclosure</span>
          </h1>
          <p className="body-text text-base text-textSecondary leading-relaxed">
            We value the cybersecurity research community. If you discover a potential vulnerability in any TrustLayerLabs system or asset, we encourage you to report it to us immediately.
          </p>
        </div>

        <div className="space-y-8 text-xs text-textSecondary leading-relaxed">
          {/* Safe Harbor */}
          <div className="p-6 bg-surface border border-border/80 rounded-xl space-y-3 shadow-sm">
            <h2 className="text-base font-bold text-textPrimary font-sans flex items-center gap-2">
              <ShieldCheck className="text-primary" size={18} />
              Safe Harbor & Legal Protection
            </h2>
            <p>
              TrustLayerLabs considers good-faith vulnerability research conducted in accordance with this policy to be authorized. If you discover a security vulnerability and follow these guidelines, we will not initiate or pursue legal action against you, nor will we request law enforcement investigation for accidental security boundary tests.
            </p>
          </div>

          {/* Scope */}
          <div className="p-6 bg-surface border border-border/80 rounded-xl space-y-4 shadow-sm">
            <h2 className="text-base font-bold text-textPrimary font-sans">
              Program Scope & Assessment Boundaries
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-background border border-border/60 rounded-lg space-y-2">
                <h3 className="text-xs font-bold text-primary font-sans uppercase tracking-wider">
                  In-Scope Assets & Flaws
                </h3>
                <ul className="list-disc pl-4 space-y-1 text-[11px]">
                  <li>Domain: *.trustlayerlabs.co.in web applications & public APIs</li>
                  <li>Authentication & Session Management flaws (JWT manipulation, token leakage)</li>
                  <li>Broken Object Level Authorization (BOLA/IDOR)</li>
                  <li>Server-Side Request Forgery (SSRF) and Remote Code Execution (RCE)</li>
                  <li>SQL Injection, NoSQL Injection, and Command Injection</li>
                </ul>
              </div>

              <div className="p-4 bg-background border border-border/60 rounded-lg space-y-2">
                <h3 className="text-xs font-bold text-textPrimary font-sans uppercase tracking-wider">
                  Out-of-Scope Activities
                </h3>
                <ul className="list-disc pl-4 space-y-1 text-[11px]">
                  <li>Denial of Service (DoS / DDoS) attacks or resource exhaustion</li>
                  <li>Phishing, spear-phishing, or social engineering targeting our staff</li>
                  <li>Physical attacks against data centers or offices</li>
                  <li>Automated high-frequency scanning without rate limits</li>
                  <li>Third-party services (DNS, Vercel infrastructure, email providers)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Guidelines & SLAs */}
          <div className="p-6 bg-surface border border-border/80 rounded-xl space-y-4 shadow-sm">
            <h2 className="text-base font-bold text-textPrimary font-sans flex items-center gap-2">
              <Mail className="text-primary" size={18} />
              Reporting Guidelines & Response SLAs
            </h2>
            <p>
              Please submit detailed technical reports to{" "}
              <ObfuscatedEmailLink className="text-primary font-bold underline" />. To accelerate verification, adhere to the following standards:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs">
              <li>
                <strong>Detailed Reproduction Steps:</strong> Include HTTP requests/responses, payload parameters, or minimal PoC scripts.
              </li>
              <li>
                <strong>Data Minimization:</strong> Prove exploitation using non-destructive actions. Never modify, download, or exfiltrate customer data beyond confirming the vulnerability.
              </li>
              <li>
                <strong>Response Timeline:</strong> We acknowledge receipt within 24 hours and provide an initial severity triage (CVSS v3.1) within 72 hours.
              </li>
              <li>
                <strong>Coordinated Disclosure:</strong> We request a 30-day remediation window prior to public disclosure of any vulnerability details.
              </li>
            </ul>
          </div>

          {/* Recognition */}
          <div className="p-6 bg-surface border border-border/80 rounded-xl space-y-3 shadow-sm">
            <h2 className="text-base font-bold text-textPrimary font-sans">
              Researcher Recognition
            </h2>
            <p>
              While TrustLayerLabs does not currently operate a paid bug bounty program, we believe in honoring security contributors. Researchers who report qualifying, previously unknown vulnerabilities in good faith will receive public acknowledgment in our Security Hall of Fame and a formal professional recommendation on LinkedIn.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
