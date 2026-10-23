import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "TrustLayerLabs privacy policy and data protection commitments for security testing client engagements and vulnerability assessment data.",
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/privacy",
  },
};

export default function PrivacyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.trustlayerlabs.co.in/privacy#webpage",
        "url": "https://www.trustlayerlabs.co.in/privacy",
        "name": "Privacy Policy | TrustLayerLabs",
        "description": "TrustLayerLabs privacy policy and data protection commitments for security testing client engagements and vulnerability assessment data.",
        "isPartOf": { "@id": "https://www.trustlayerlabs.co.in/#website" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.trustlayerlabs.co.in/privacy#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trustlayerlabs.co.in" },
          { "@type": "ListItem", "position": 2, "name": "Privacy Policy", "item": "https://www.trustlayerlabs.co.in/privacy" }
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

        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/80 shadow-sm text-xs font-semibold text-neutral-800 mb-4">
            <Lock size={14} className="text-neutral-900" />
            <span>DPDP Act 2023 & GDPR Compliance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 mt-2">
            Last Updated: June 3, 2026 • MSME Reg. UDYAM-AP-21-0044317
          </p>
        </div>

        {/* Content Card */}
        <div className="space-y-8 text-sm text-neutral-600 leading-relaxed bg-white p-8 sm:p-12 rounded-3xl border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
          <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/70 text-xs text-neutral-700">
            <strong>Core Principle:</strong> Zero data monetizing, zero unauthorized retention, zero third-party disclosure. All test evidence is encrypted at rest with AES-256 and purged according to NIST SP 800-88 standards.
          </div>
          
          <div className="space-y-3">
            <h2 className="text-base font-bold text-neutral-950 tracking-tight">1. Scope of Agreement & Engagement Data</h2>
            <p>
              TrustLayerLabs is committed to protecting the confidentiality, integrity, and privacy of client environments, architectural configurations, source code excerpts, and customer assets. We execute legally binding bilateral Non-Disclosure Agreements (NDAs) prior to accessing any API schemas, test environments, or staging credentials.
            </p>
          </div>

          <div className="border-t border-dashed border-neutral-200 pt-6 space-y-3">
            <h2 className="text-base font-bold text-neutral-950 tracking-tight">2. Information We Collect & Process</h2>
            <p>
              We collect only the minimum information necessary to scope, execute, and deliver security reviews. This includes contact details (name, corporate email, phone), target domain and endpoint specifications, technical documentation (OpenAPI/Swagger specs), and ephemeral test traffic generated during active testing. We never collect or retain customer production passwords or unmasked payment data.
            </p>
          </div>

          <div className="border-t border-dashed border-neutral-200 pt-6 space-y-3">
            <h2 className="text-base font-bold text-neutral-950 tracking-tight">3. Technical Data Security & Encryption</h2>
            <p>
              All engagement deliverables, vulnerability proof-of-concept recordings, intercept logs, and threat models are encrypted in transit (TLS 1.3) and at rest using AES-256 encrypted vaults. Access to engagement data is restricted solely to assigned lead offensive practitioners with enforced hardware MFA and strict role-based access control.
            </p>
          </div>

          <div className="border-t border-dashed border-neutral-200 pt-6 space-y-3">
            <h2 className="text-base font-bold text-neutral-950 tracking-tight">4. Retention & NIST-Compliant Data Purging</h2>
            <p>
              Following the conclusion of an assessment and completion of the 30-day retesting window, all temporary staging credentials, authentication tokens, and raw traffic logs are permanently wiped according to NIST SP 800-88 guidelines. Final encrypted PDF reports are archived for 90 days to support external auditor inquiries before automated destruction.
            </p>
          </div>

          <div className="border-t border-dashed border-neutral-200 pt-6 space-y-3">
            <h2 className="text-base font-bold text-neutral-950 tracking-tight">5. Data Subject Rights (DPDP Act 2023 & GDPR)</h2>
            <p>
              In compliance with India&apos;s Digital Personal Data Protection (DPDP) Act 2023 and the General Data Protection Regulation (GDPR), clients have the right to request access to, correction of, or immediate erasure of any personal or corporate information held by TrustLayerLabs. To exercise these rights, contact our Data Protection Officer at privacy@trustlayerlabs.co.in.
            </p>
          </div>

          <div className="border-t border-dashed border-neutral-200 pt-6 space-y-3">
            <h2 className="text-base font-bold text-neutral-950 tracking-tight">6. Third-Party Sharing & Marketing Restrictions</h2>
            <p>
              We never sell, rent, or trade client information to third parties. Vulnerability findings, company identities, and infrastructure details are never cited in public marketing, case studies, or blogs without explicit prior written authorization.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
