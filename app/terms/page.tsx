import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service, rules of engagement, and scoping agreements for TrustLayerLabs manual VAPT and GRC consulting engagements.",
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/terms",
  },
};

export default function TermsPage() {
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
            <Shield size={26} className="text-primary" /> Terms of Service
          </h1>

          <div className="space-y-6 text-xs md:text-sm text-textSecondary leading-relaxed bg-surface p-8 rounded-2xl border border-border shadow-sm">
            <p>
              Last Updated: June 3, 2026.
            </p>
            
            <h2 className="text-textPrimary text-base font-bold font-sans tracking-tight mt-6">1. Rules of Engagement & Authorization</h2>
            <p>
              By scheduling a security review or VAPT audit, you represent and warrant that you own or have explicit, documented authorization from the asset owner to perform active security scans, manual logical attacks, and authorization test vectors on target staging or production systems specified in our scoping document. Scoping boundaries agreed upon prior to testing must be strictly adhered to by both parties.
            </p>

            <h2 className="text-textPrimary text-base font-bold font-sans tracking-tight mt-6">2. Safe Harbor & Operational Safeguards</h2>
            <p>
              TrustLayerLabs conducts offensive security testing using non-destructive, practitioner-guided methodologies designed to avoid service interruptions. However, clients acknowledge that testing interactive application logic and API endpoints carries inherent operational risks on fragile systems. Testing should ideally take place in dedicated staging, sandbox, or pre-production environments whenever feasible.
            </p>

            <h2 className="text-textPrimary text-base font-bold font-sans tracking-tight mt-6">3. Mutual Confidentiality & NDA Integration</h2>
            <p>
              All proprietary technical architectures, source code excerpts, API endpoints, vulnerability proofs of concept, and business data disclosed during an engagement are treated as Strictly Confidential. Each engagement is governed by our bilateral Mutual Non-Disclosure Agreement (NDA), ensuring zero third-party disclosure, encrypted storage in transit and at rest, and permanent evidence purging post-retest.
            </p>

            <h2 className="text-textPrimary text-base font-bold font-sans tracking-tight mt-6">4. Deliverables & Intellectual Property Ownership</h2>
            <p>
              Upon receipt of final payment, the client retains full and exclusive ownership of all customized vulnerability assessment reports, remediation recommendations, and specific proof-of-concept scripts generated for their environment. TrustLayerLabs retains ownership of its underlying assessment methodologies, pre-existing research, proprietary toolchains, and generic testing frameworks.
            </p>

            <h2 className="text-textPrimary text-base font-bold font-sans tracking-tight mt-6">5. Retesting Policy & Verification Timelines</h2>
            <p>
              Retesting guarantees cover only the specific vulnerabilities highlighted in our initial VAPT report. Retesting must be requested within 30 days of initial report delivery unless extended in writing under an enterprise retainer agreement. One complimentary verification cycle is included with every standard penetration testing tier.
            </p>

            <h2 className="text-textPrimary text-base font-bold font-sans tracking-tight mt-6">6. Retest Verification Letter & Attestation</h2>
            <p>
              A Retest Verification Letter and Security Badge suitable for SOC 2 auditors, enterprise procurement teams, and cyber insurance underwriters are issued only after independent verification confirms that all critical and high-severity flaws identified during scoping have been fully remediated.
            </p>

            <h2 className="text-textPrimary text-base font-bold font-sans tracking-tight mt-6">7. Limitation of Liability & Governing Law</h2>
            <p>
              In no event shall either party be liable for any indirect, incidental, punitive, or consequential damages arising out of or related to security assessments. These terms shall be governed by and construed in accordance with the laws of India, and disputes shall be resolved through binding commercial arbitration in accordance with applicable statutory provisions.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
