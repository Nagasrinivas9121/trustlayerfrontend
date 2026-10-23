import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service, rules of engagement, and scoping agreements for TrustLayerLabs manual VAPT and GRC consulting engagements.",
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/terms",
  },
};

export default function TermsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.trustlayerlabs.co.in/terms#webpage",
        "url": "https://www.trustlayerlabs.co.in/terms",
        "name": "Terms of Service | TrustLayerLabs",
        "description": "Terms of service, rules of engagement, and scoping agreements for TrustLayerLabs manual VAPT and GRC consulting engagements.",
        "isPartOf": { "@id": "https://www.trustlayerlabs.co.in/#website" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.trustlayerlabs.co.in/terms#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trustlayerlabs.co.in" },
          { "@type": "ListItem", "position": 2, "name": "Terms of Service", "item": "https://www.trustlayerlabs.co.in/terms" }
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
            <Shield size={14} className="text-neutral-900" />
            <span>Rules of Engagement & Legal Framework</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950">
            Terms of Service
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 mt-2">
            Last Updated: June 3, 2026 • MSME Reg. UDYAM-AP-21-0044317
          </p>
        </div>

        {/* Content Card */}
        <div className="space-y-8 text-sm text-neutral-600 leading-relaxed bg-white p-8 sm:p-12 rounded-3xl border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
          <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/70 text-xs text-neutral-700">
            <strong>Summary:</strong> TrustLayerLabs operates strictly on authenticated, owner-authorized environments under bilateral NDAs. All testing utilizes non-destructive manual methodologies adhering to OWASP, NIST SP 800-115, and PTES standards.
          </div>
          
          <div className="space-y-3">
            <h2 className="text-base font-bold text-neutral-950 tracking-tight">1. Rules of Engagement & Authorization</h2>
            <p>
              By scheduling a security review or VAPT audit, you represent and warrant that you own or have explicit, documented authorization from the asset owner to perform active security scans, manual logical attacks, and authorization test vectors on target staging or production systems specified in our scoping document. Scoping boundaries agreed upon prior to testing must be strictly adhered to by both parties.
            </p>
          </div>

          <div className="border-t border-dashed border-neutral-200 pt-6 space-y-3">
            <h2 className="text-base font-bold text-neutral-950 tracking-tight">2. Safe Harbor & Operational Safeguards</h2>
            <p>
              TrustLayerLabs conducts offensive security testing using non-destructive, practitioner-guided methodologies designed to avoid service interruptions. However, clients acknowledge that testing interactive application logic and API endpoints carries inherent operational risks on fragile systems. Testing should ideally take place in dedicated staging, sandbox, or pre-production environments whenever feasible.
            </p>
          </div>

          <div className="border-t border-dashed border-neutral-200 pt-6 space-y-3">
            <h2 className="text-base font-bold text-neutral-950 tracking-tight">3. Mutual Confidentiality & NDA Integration</h2>
            <p>
              All proprietary technical architectures, source code excerpts, API endpoints, vulnerability proofs of concept, and business data disclosed during an engagement are treated as Strictly Confidential. Each engagement is governed by our bilateral Mutual Non-Disclosure Agreement (NDA), ensuring zero third-party disclosure, encrypted storage in transit and at rest, and permanent evidence purging post-retest.
            </p>
          </div>

          <div className="border-t border-dashed border-neutral-200 pt-6 space-y-3">
            <h2 className="text-base font-bold text-neutral-950 tracking-tight">4. Deliverables & Intellectual Property Ownership</h2>
            <p>
              Upon receipt of final payment, the client retains full and exclusive ownership of all customized vulnerability assessment reports, remediation recommendations, and specific proof-of-concept scripts generated for their environment. TrustLayerLabs retains ownership of its underlying assessment methodologies, pre-existing research, proprietary toolchains, and generic testing frameworks.
            </p>
          </div>

          <div className="border-t border-dashed border-neutral-200 pt-6 space-y-3">
            <h2 className="text-base font-bold text-neutral-950 tracking-tight">5. Retesting Policy & Verification Timelines</h2>
            <p>
              Retesting guarantees cover only the specific vulnerabilities highlighted in our initial VAPT report. Retesting must be requested within 30 days of initial report delivery unless extended in writing under an enterprise retainer agreement. One complimentary verification cycle is included with every standard penetration testing tier.
            </p>
          </div>

          <div className="border-t border-dashed border-neutral-200 pt-6 space-y-3">
            <h2 className="text-base font-bold text-neutral-950 tracking-tight">6. Retest Verification Letter & Attestation</h2>
            <p>
              A Retest Verification Letter and Security Badge suitable for SOC 2 auditors, enterprise procurement teams, and cyber insurance underwriters are issued only after independent verification confirms that all critical and high-severity flaws identified during scoping have been fully remediated.
            </p>
          </div>

          <div className="border-t border-dashed border-neutral-200 pt-6 space-y-3">
            <h2 className="text-base font-bold text-neutral-950 tracking-tight">7. Limitation of Liability & Governing Law</h2>
            <p>
              In no event shall either party be liable for any indirect, incidental, punitive, or consequential damages arising out of or related to security assessments. These terms shall be governed by and construed in accordance with the laws of India, and disputes shall be resolved through binding commercial arbitration in accordance with applicable statutory provisions.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
