"use client";

import React from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { FAQS } from "@/lib/constants";

export default function FaqStatic() {
  // Use high-impact questions tailored for enterprise vendor review unblocking
  const questions = [
    {
      q: "How fast can you deliver a final pentest report for our enterprise deal?",
      a: "The API Security Sprint takes 5 business days. The SaaS Multi-Tenant Assessment and SOC 2 Readiness Pentest take 7-10 business days. If your enterprise customer has an urgent deadline, critical findings and cURL PoCs are debriefed within 48 hours so your engineers can start patching."
    },
    {
      q: "Does your pentest report satisfy enterprise procurement and SOC 2 / ISO 27001 auditors?",
      a: "It is designed to support them. Our testing methodology aligns directly with the OWASP Top 10, OWASP API Security Top 10, and PTES standards, with controls mapped to SOC 2 Security/Confidentiality criteria and ISO/IEC 27001:2022 Annex A. Deliverables include an Executive Summary for enterprise procurement officers and a signed formal Attestation Letter designed to support external audit evidence requests."
    },
    {
      q: "How does the complimentary 30-day retesting and signed attestation letter work?",
      a: "Every engagement includes complimentary 30-day retesting on all identified findings. Once your engineering team deploys remediation fixes to your staging environment, our practitioners manually re-execute the original exploit scripts. Upon confirming fixes are clean, we issue a revised report and an official signed Attestation of Retest Verification."
    },
    {
      q: "Why manual testing instead of running an automated vulnerability scanner?",
      a: "Automated scanners search for syntax-level CVE signatures and outdated libraries, but they are fundamentally blind to multi-step business logic, BOLA/IDOR object enumeration across tenants, database row-level security (RLS) leaks, and role escalation (BFLA). Our assessments are conducted 100% by certified human practitioners who understand your architecture."
    },
    {
      q: "What is your confidentiality and NDA process before sharing technical details?",
      a: "We execute a bilateral mutual Non-Disclosure Agreement (NDA) upfront before reviewing your architecture diagrams, OpenAPI/Swagger specifications, Postman collections, or staging credentials. Your technical disclosures and findings remain strictly confidential and are never shared or outsourced."
    },
    {
      q: "What certifications and qualifications do your security architects hold?",
      a: "Every assessment is led directly by our founding practitioners holding Certified Ethical Hacker (CEH), CyberWarfare Labs Certified Cyber Security Analyst (CWL C3SA), and ISO/IEC 27001:2022 Lead Auditor credentials. We are an officially registered Govt. of India MSME enterprise (UDYAM-AP-21-0044317)."
    }
  ];

  return (
    <section id="faq" className="w-full bg-[#FAFAFA] px-4 sm:px-6 py-20 border-t border-dashed border-neutral-200">
      <div className="max-w-[840px] mx-auto w-full flex flex-col items-center">
        
        {/* Section Header */}
        <div className="w-full max-w-xl mx-auto flex flex-col items-center justify-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 shadow-xs text-xs font-semibold text-neutral-800 mb-3">
            <HelpCircle size={14} className="text-primary" />
            <span>Clear Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 mb-3 font-sans">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-sans">
            Clear, practitioner-level answers about testing boundaries, mutual NDAs, and audit-ready deliverables:
          </p>
        </div>

        {/* Plain Semantic <details> FAQ Container (Zero JS Animation) */}
        <div className="w-full space-y-3.5">
          {questions.map((faq, idx) => (
            <details
              key={idx}
              className="group p-5 bg-white rounded-2xl border border-neutral-200 shadow-xs [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none text-left font-sans font-bold text-neutral-900 text-sm sm:text-base select-none gap-4">
                <span>{faq.q}</span>
                <span className="w-7 h-7 rounded-full bg-neutral-100 group-hover:bg-neutral-200 flex items-center justify-center text-neutral-600 shrink-0 transition-transform group-open:rotate-180">
                  <ChevronDown size={15} />
                </span>
              </summary>
              <div className="pt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans border-t border-dashed border-neutral-100 mt-3">
                <p>{faq.a}</p>
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}
