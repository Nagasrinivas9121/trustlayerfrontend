import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "TrustLayerLabs privacy policy and data protection commitments for security testing client engagements and vulnerability assessment data.",
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="pt-32 pb-24 font-sans text-textPrimary">
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
            
            <h2 className="text-textPrimary text-base font-bold font-sans tracking-tight mt-6">1. Scope of Agreement & Engagement Data</h2>
            <p>
              TrustLayerLabs is committed to protecting the confidentiality, integrity, and privacy of client environments, architectural configurations, source code excerpts, and customer assets. We execute legally binding bilateral Non-Disclosure Agreements (NDAs) prior to accessing any API schemas, test environments, or staging credentials.
            </p>

            <h2 className="text-textPrimary text-base font-bold font-sans tracking-tight mt-6">2. Information We Collect & Process</h2>
            <p>
              We collect only the minimum information necessary to scope, execute, and deliver security reviews. This includes contact details (name, corporate email, phone), target domain and endpoint specifications, technical documentation (OpenAPI/Swagger specs), and ephemeral test traffic generated during active testing. We never collect or retain customer production passwords or unmasked payment data.
            </p>

            <h2 className="text-textPrimary text-base font-bold font-sans tracking-tight mt-6">3. Technical Data Security & Encryption</h2>
            <p>
              All engagement deliverables, vulnerability proof-of-concept recordings, intercept logs, and threat models are encrypted in transit (TLS 1.3) and at rest using AES-256 encrypted vaults. Access to engagement data is restricted solely to assigned lead offensive practitioners with enforced hardware MFA and strict role-based access control.
            </p>

            <h2 className="text-textPrimary text-base font-bold font-sans tracking-tight mt-6">4. Retention & NIST-Compliant Data Purging</h2>
            <p>
              Following the conclusion of an assessment and completion of the 30-day retesting window, all temporary staging credentials, authentication tokens, and raw traffic logs are permanently wiped according to NIST SP 800-88 guidelines. Final encrypted PDF reports are archived for 90 days to support external auditor inquiries before automated destruction.
            </p>

            <h2 className="text-textPrimary text-base font-bold font-sans tracking-tight mt-6">5. Data Subject Rights (DPDP Act 2023 & GDPR)</h2>
            <p>
              In compliance with India&apos;s Digital Personal Data Protection (DPDP) Act 2023 and the General Data Protection Regulation (GDPR), clients have the right to request access to, correction of, or immediate erasure of any personal or corporate information held by TrustLayerLabs. To exercise these rights, contact our Data Protection Officer at privacy@trustlayerlabs.co.in.
            </p>

            <h2 className="text-textPrimary text-base font-bold font-sans tracking-tight mt-6">6. Third-Party Sharing & Marketing Restrictions</h2>
            <p>
              We never sell, rent, or trade client information to third parties. Vulnerability findings, company identities, and infrastructure details are never cited in public marketing, case studies, or blogs without explicit prior written authorization.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
