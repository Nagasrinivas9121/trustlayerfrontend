export interface HomepageFaqItem {
  q: string;
  a: string;
}

export const HOMEPAGE_FAQS: HomepageFaqItem[] = [
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
    a: "Automated scanners search for syntax-level CVE signatures and outdated libraries, but they are fundamentally blind to multi-step business logic, BOLA/IDOR object enumeration across tenants, database row-level security (RLS) leaks, and role escalation (BFLA). Our assessments are conducted by our certified practitioners, who test against your actual architecture."
  },
  {
    q: "What is your confidentiality and NDA process before sharing technical details?",
    a: "We execute a bilateral mutual Non-Disclosure Agreement (NDA) upfront before reviewing your architecture diagrams, OpenAPI/Swagger specifications, Postman collections, or staging credentials. Your technical disclosures and findings remain strictly confidential and are never shared or outsourced."
  },
  {
    q: "What certifications and qualifications do your security architects hold?",
    a: "Every assessment is led directly by our founding practitioners holding Certified Ethical Hacker (CEH), CyberWarfare Labs Certified Cyber Security Analyst (CWL C3SA), and ISO/IEC 27001:2022 Lead Auditor credentials. We are an officially registered Govt. of India MSME enterprise (UDYAM-AP-21-0044317)."
  },
  {
    q: "Who have you worked with so far?",
    a: "We are a new firm, which is why we run a Founding Client Program. We cannot share client names, and every engagement is covered by a mutual NDA. What you can verify today is our team: certifications and LinkedIn profiles are linked on this page, and the sample report shows exactly how we document findings."
  },
  {
    q: "What do you need from us to start?",
    a: "A list of in-scope endpoints or an OpenAPI/Postman collection, the user roles to test, a staging environment, and your compliance goal. A mutual NDA is signed before any of this is shared."
  },
  {
    q: "Do you test production or staging?",
    a: "By default we test in an isolated staging environment. Anything beyond that is agreed in writing in the Rules of Engagement before testing begins."
  },
  {
    q: "What if you do not find any critical issues?",
    a: "You still receive the full report with coverage and methodology. We report what we find and do not inflate severity."
  },
  {
    q: "What counts as a retest?",
    a: "After you deploy fixes, we re-run the original proof-of-concept requests against the patched build for the findings in the report. This is included for 30 days at no extra cost."
  },
  {
    q: "Are your prices final?",
    a: "The package prices on this page are starting prices. After a short scoping review we send a fixed-price quote within 24 hours. India prices are in INR and exclude GST; international clients are quoted in USD."
  }
];
