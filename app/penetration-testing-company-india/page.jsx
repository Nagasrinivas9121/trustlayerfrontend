import ServiceLayout from "@/components/ServiceLayout";

export const metadata = {
  title: "Penetration Testing Company in India | Trusted VAPT Experts",
  description: "TrustLayer Labs is a leading penetration testing company in India. We provide premium VAPT services for web, mobile, and cloud environments.",
};

export default function PenetrationTestingIndia() {
  const content = {
    title: "Penetration Testing Company in India",
    description: "The trusted cybersecurity partner for Indian enterprises and startups. We deliver world-class VAPT services to secure your digital future.",
    problem: {
      title: "India is a primary target for global cyber threats.",
      description: "As businesses in India digitize, they become targets for complex ransomware and data theft. Finding a security partner who understands the local landscape is critical."
    },
    solution: {
      title: "Premium VAPT Services with a Global Standard",
      description: "Based in India, we bring global penetration testing standards (OWASP, SANS, NIST) to local businesses, helping them scale securely and comply with CERT-In guidelines."
    },
    outcomes: [
      "Industry-leading penetration testing reports",
      "Full compliance with Indian regulatory bodies",
      "Expert-led manual exploitation",
      "Ongoing security partnership and consulting"
    ],
    benefits: [
      {
        title: "Local Market Expertise",
        description: "We understand the specific regulatory and compliance needs of businesses operating in India."
      },
      {
        title: "Global Security Standards",
        description: "Our methodology is aligned with international best practices like OWASP and NIST."
      },
      {
        title: "Cost-Effective Excellence",
        description: "High-end penetration testing services delivered at a competitive local price point."
      }
    ],
    process: [
      {
        title: "Custom Scoping",
        description: "Tailoring the security audit to your specific business and technical requirements."
      },
      {
        title: "Intense Security Probing",
        description: "Deep manual and automated testing to uncover all possible entry points."
      },
      {
        title: "Controlled Exploitation",
        description: "Ethical hacking to demonstrate the real-world impact of vulnerabilities."
      },
      {
        title: "Executive Reporting",
        description: "High-level summary for stakeholders and technical details for developers."
      }
    ],
    faqs: [
      {
        question: "Why choose TrustLayer Labs over other Indian security firms?",
        answer: "We focus on deep manual exploitation, not just automated scanning. Our reports are actionable, developer-friendly, and include dedicated retesting support."
      },
      {
        question: "Do you help with CERT-In compliance audits?",
        answer: "Yes, our VAPT reports are designed to meet the requirements for CERT-In auditing and Indian banking security standards (RBI guidelines)."
      },
      {
        question: "Where is TrustLayer Labs located?",
        answer: "We are an India-based cybersecurity firm serving clients across all major hubs including Bangalore, Mumbai, Delhi, and Hyderabad."
      }
    ]
  };

  return <ServiceLayout {...content} />;
}
