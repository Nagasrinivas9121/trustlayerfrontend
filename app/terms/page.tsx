import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="bg-background min-h-screen">
      <main className="pt-32 pb-24 font-sans text-textPrimary">
        <div className="section-container max-w-4xl">
          
          <Link 
            href="/" 
            className="inline-flex items-center text-xs uppercase font-sans tracking-widest text-textSecondary hover:text-textPrimary transition-colors gap-2 mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
            Back to Home
          </Link>

          <h1 className="heading-2 mb-8 text-textPrimary font-extrabold font-sans tracking-tight flex items-center gap-3">
            <Shield size={26} className="text-primary" /> Terms of Service
          </h1>

          <div className="space-y-6 text-xs md:text-sm text-textSecondary leading-relaxed bg-surface p-8 rounded-2xl border border-border shadow-sm">
            <p>
              Last Updated: June 3, 2026.
            </p>
            
            <h2 className="text-textPrimary text-base font-bold font-sans tracking-tight mt-6">1. Rules of Engagement</h2>
            <p>
              By scheduling a VAPT audit, you authorize TrustLayerLabs to perform active security scans, logical attacks, and authorization test vectors on target staging or production assets specified in our scoping document. Scoping boundaries must be clearly set and adhered to.
            </p>

            <h2 className="text-textPrimary text-base font-bold font-sans tracking-tight mt-6">2. Liability Limits</h2>
            <p>
              While we perform manual logic auditing with care, offensive testing carries minor operational risks of service interruptions on fragile environments. TrustLayerLabs is not liable for system down-times or diagnostic data leaks occurring inside environments not designated as testing sandbox.
            </p>

            <h2 className="text-textPrimary text-base font-bold font-sans tracking-tight mt-6">3. Retesting Scopes</h2>
            <p>
              Retesting guarantees cover only the specific vulnerabilities discovered and highlighted in our initial VAPT report. Retesting must be requested within 30 to 60 days of report delivery depending on the selected pricing tier.
            </p>

            <h2 className="text-textPrimary text-base font-bold font-sans tracking-tight mt-6">4. Attestation Certificate</h2>
            <p>
              An Attestation Certificate and Security Badge are issued only after validation retesting confirms that all critical and high severity flaws identified during scoping have been patched successfully.
            </p>
          </div>

        </div>
      </main>
    </div>
  );
}
