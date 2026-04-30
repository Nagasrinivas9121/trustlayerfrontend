import ServiceLayout from "@/components/ServiceLayout";

export const metadata = {
  title: "VAPT Services in India | Vulnerability Assessment & Penetration Testing",
  description: "Secure your enterprise with premium VAPT services in India. Our certified experts identify, exploit, and help remediate critical security risks in 24-48 hours.",
  keywords: "vapt services india, vulnerability assessment, penetration testing india, cybersecurity services, web application security, api testing",
};

export default function VaptServicesIndia() {
  const content = {
    title: "VAPT Services in India",
    subtitle: "Vulnerability Assessment & Penetration Testing",
    description: "Enterprise-grade VAPT services to secure your digital assets, achieve compliance, and build radical trust with your customers.",
    problem: {
      title: "Automated scanners miss 60% of critical logic flaws.",
      description: "In 2026, hackers don't just use known bugs; they exploit your unique business logic. We find the gaps that software misses."
    },
    solution: {
      title: "Human-Led Manual Penetration Testing",
      description: "We combine industry-leading automated tools with deep manual exploitation by certified ethical hackers to provide a true picture of your risk."
    },
    outcomes: [
      "Identify deeply hidden business logic flaws",
      "Achieve SOC2, ISO 27001, and CERT-In compliance",
      "Prevent catastrophic data breaches and financial loss",
      "Detailed, developer-friendly remediation roadmaps"
    ],
    benefits: [
      {
        title: "Manual + Automated",
        description: "We use premium tools for breadth and expert hackers for depth, ensuring 100% coverage."
      },
      {
        title: "24-48 Hr Turnaround",
        description: "Get your first critical vulnerability reports within 48 hours of starting the engagement."
      },
      {
        title: "Zero False Positives",
        description: "Every finding is manually verified and accompanied by a clear proof-of-concept (PoC)."
      }
    ],
    process: [
      {
        title: "Reconnaissance",
        description: "We map your attack surface using advanced OSINT to see what an attacker sees."
      },
      {
        title: "Discovery",
        description: "Using a mix of automated scanners and manual probing to find potential entry points."
      },
      {
        title: "Safe Exploitation",
        description: "We safely verify findings to demonstrate real-world impact without disrupting services."
      },
      {
        title: "Remediation Support",
        description: "Comprehensive reporting with exact steps for your developers to fix every issue."
      }
    ],
    faqs: [
      {
        question: "How long does a VAPT engagement take?",
        answer: "A typical engagement takes 1-2 weeks, but we deliver initial findings within 24–48 hours."
      },
      {
        question: "Will the testing crash our production systems?",
        answer: "No. We conduct 'Safe Exploitation' and can test in staging environments or during low-traffic windows."
      },
      {
        question: "Is manual testing really necessary?",
        answer: "Absolutely. Automated tools cannot understand business logic, privilege escalation paths, or chained exploits."
      }
    ],
    cta: {
      primary: "Run Free Security Scan",
      secondary: "Book Consultation"
    }
  };

  return <ServiceLayout {...content} />;
}
