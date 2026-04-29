import ServiceLayout from "@/components/ServiceLayout";

export const metadata = {
  title: "VAPT Services in India | Comprehensive Security Testing",
  description: "Protect your enterprise with premium VAPT services in India. We identify, exploit, and remediate critical security vulnerabilities before hackers do.",
};

export default function VaptServices() {
  const content = {
    title: "VAPT Services in India",
    description: "Enterprise-grade Vulnerability Assessment and Penetration Testing to secure your digital assets and achieve compliance.",
    problem: {
      title: "Automated scanners miss 60% of critical logic flaws.",
      description: "Relying solely on automated vulnerability scanners leaves your organization exposed to business logic attacks, zero-day vulnerabilities, and complex exploit chains that only a human hacker can identify."
    },
    solution: {
      title: "Manual Penetration Testing by Experts",
      description: "We combine industry-leading automated tooling with deep manual exploitation performed by certified ethical hackers (OSCP, CEH) to provide a true picture of your security posture."
    },
    outcomes: [
      "Identify deeply hidden logic flaws",
      "Achieve CERT-In, SOC2, and ISO 27001 compliance",
      "Prevent data breaches and financial loss",
      "Detailed, developer-friendly remediation steps"
    ],
    benefits: [
      {
        title: "Compliance Ready",
        description: "Our reports map directly to regulatory requirements, making your audits seamless."
      },
      {
        title: "Zero False Positives",
        description: "Every finding is manually verified and accompanied by clear proof-of-concept evidence."
      },
      {
        title: "Retesting Included",
        description: "We verify your patches to ensure vulnerabilities are completely resolved."
      }
    ],
    process: [
      {
        title: "Scoping & Reconnaissance",
        description: "We define the rules of engagement and use advanced OSINT to map your attack surface."
      },
      {
        title: "Automated & Manual Scanning",
        description: "Using premium tools to establish a baseline, followed by intense manual probing."
      },
      {
        title: "Exploitation",
        description: "Safe, controlled exploitation of identified vulnerabilities to determine real-world impact."
      },
      {
        title: "Reporting & Remediation",
        description: "Delivery of a comprehensive, CVSS-scored report with exact remediation steps."
      }
    ],
    faqs: [
      {
        question: "How long does a VAPT engagement take?",
        answer: "A typical engagement takes 1-3 weeks depending on the size and complexity of the application or infrastructure in scope."
      },
      {
        question: "Do you provide a certificate after the test?",
        answer: "Yes, upon successful remediation of all high and medium vulnerabilities, we issue a Secure Certificate valid for compliance audits."
      },
      {
        question: "Is manual testing really necessary?",
        answer: "Absolutely. While automated tools are great for known CVEs, they cannot understand business logic, privilege escalation paths, or chained exploits."
      }
    ]
  };

  return <ServiceLayout {...content} />;
}
