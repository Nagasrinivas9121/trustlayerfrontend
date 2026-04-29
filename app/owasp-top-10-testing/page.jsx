import ServiceLayout from "@/components/ServiceLayout";

export const metadata = {
  title: "OWASP Top 10 Security Testing | Web Vulnerability Assessment",
  description: "Specialized security testing for OWASP Top 10 vulnerabilities. We identify and help remediate injection, broken auth, and sensitive data exposure.",
};

export default function OwaspTesting() {
  const content = {
    title: "OWASP Top 10 Security Testing",
    description: "Rigorous manual and automated testing strictly aligned with the industry-standard OWASP Top 10 framework.",
    problem: {
      title: "Standard scanners often miss 40% of the OWASP Top 10.",
      description: "Scanners are great at finding known CVEs, but they struggle with Broken Access Control, Insecure Design, and Server-Side Request Forgery (SSRF) which are top critical risks."
    },
    solution: {
      title: "Full OWASP Methodology Audit",
      description: "Our experts perform deep manual probing across all 10 categories, ensuring that your application is resilient against the most critical web risks."
    },
    outcomes: [
      "Full coverage of the latest OWASP Top 10 risks",
      "Manual verification of every single vulnerability",
      "Actionable remediation advice for developers",
      "Compliance readiness for SOC2 and ISO 27001"
    ],
    benefits: [
      {
        title: "Standard-Driven Testing",
        description: "We use the globally recognized OWASP Application Security Verification Standard (ASVS)."
      },
      {
        title: "Deep Logic Testing",
        description: "We focus on the complex authorization and authentication flaws that scanners miss."
      },
      {
        title: "Detailed PoCs",
        description: "Every finding comes with a clear proof-of-concept and technical breakdown."
      }
    ],
    process: [
      {
        title: "Reconnaissance",
        description: "Mapping the application's attack surface and identifying sensitive endpoints."
      },
      {
        title: "Category-Wise Testing",
        description: "Systematic testing across all 10 OWASP categories from A01 to A10."
      },
      {
        title: "Exploitation",
        description: "Safe exploitation to demonstrate the real-world impact of findings."
      },
      {
        title: "Remediation Support",
        description: "Post-report consultation to help your team fix vulnerabilities correctly."
      }
    ],
    faqs: [
      {
        question: "What is the OWASP Top 10?",
        answer: "The OWASP Top 10 is a standard awareness document for developers and web application security. It represents a broad consensus about the most critical security risks to web applications."
      },
      {
        question: "How often should we test against OWASP Top 10?",
        answer: "We recommend a full audit at least annually, and incremental testing after any major code change or deployment."
      },
      {
        question: "Do you provide a compliance report?",
        answer: "Yes, our reports are structured to clearly show your compliance status against the OWASP Top 10 framework."
      }
    ]
  };

  return <ServiceLayout {...content} />;
}
