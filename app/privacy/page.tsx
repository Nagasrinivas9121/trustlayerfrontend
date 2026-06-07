import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export default function PrivacyPage() {
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
            <Shield size={26} className="text-primary" /> Privacy Policy
          </h1>

          <div className="space-y-6 text-xs md:text-sm text-textSecondary leading-relaxed bg-surface p-8 rounded-2xl border border-border shadow-sm">
            <p>
              Last Updated: June 3, 2026.
            </p>
            
            <h2 className="text-textPrimary text-base font-bold font-sans tracking-tight mt-6">1. Scope of Agreement</h2>
            <p>
              TrustLayerLabs is committed to protecting the confidentiality, integrity, and privacy of startup client environments, configurations, source code, and assets. We sign mutual Non-Disclosure Agreements (NDAs) prior to accessing any database keys or environment nodes.
            </p>

            <h2 className="text-textPrimary text-base font-bold font-sans tracking-tight mt-6">2. Data Security & Storage</h2>
            <p>
              All technical report files, scan artifacts, threat models, and vulnerability reproduction details are stored in end-to-end encrypted storage vaults. We enforce strong multi-factor authentication (MFA) and least-privilege security permissions across our analysis workflows.
            </p>

            <h2 className="text-textPrimary text-base font-bold font-sans tracking-tight mt-6">3. Retention Policies</h2>
            <p>
              Following the conclusion of a VAPT assessment and final attestation certificate issue, all client environment credentials, configurations, and connection channels are purged from our analysis machines. Technical logs are archived for 30 days to facilitate re-scans and then deleted securely.
            </p>

            <h2 className="text-textPrimary text-base font-bold font-sans tracking-tight mt-6">4. GDPR and Regulatory Compliance</h2>
            <p>
              If your startup operates globally or is subject to Indian DPDP act, GDPR, or HIPAA rules, we guarantee that all data handling matches compliance criteria. No client source code or details will be exposed, shared, or referenced in our public portfolio without written permissions.
            </p>
          </div>

        </div>
      </main>
    </div>
  );
}
