import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Mail, Lock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Responsible Disclosure Policy | TrustLayerLabs Security",
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

        <div className="space-y-6 text-xs text-textSecondary leading-relaxed">
          <div className="p-6 bg-surface border border-border rounded-xl space-y-3">
            <h3 className="text-sm font-bold text-textPrimary font-sans">Reporting Guidelines</h3>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Email technical details to <strong className="text-textPrimary">security@trustlayerlabs.co.in</strong>.</li>
              <li>Include step-by-step reproduction instructions or a minimal PoC script.</li>
              <li>Allow our engineering team 48 hours to acknowledge your report before public disclosure.</li>
              <li>Avoid privacy violations, data destruction, and service interruption during your research.</li>
            </ul>
          </div>

          <div className="p-6 bg-surface border border-border rounded-xl space-y-3">
            <h3 className="text-sm font-bold text-textPrimary font-sans">Our Commitment</h3>
            <p>
              We commit to reviewing reports within 24 hours, patching verified critical flaws promptly, and publicly acknowledging researchers who adhere to safe disclosure guidelines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
