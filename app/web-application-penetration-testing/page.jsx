import ServiceLayout from "@/components/ServiceLayout";

export const metadata = {
  title: "Web Application Security Testing Services in India | TrustLayer Labs",
  description: "Secure your web apps against OWASP Top 10 vulnerabilities. Our manual penetration testing uncovers SQLi, XSS, and complex logic flaws.",
};

export default function WebAppSecurity() {
  const content = {
    title: "Web Application Security Testing",
    description: "Deep manual penetration testing for modern web applications to uncover logic flaws, injection attacks, and critical vulnerabilities.",
    problem: {
      title: "Web apps are the #1 target for attackers.",
      description: "Modern Single Page Applications (SPAs) and complex web portals have massive attack surfaces. A single misconfiguration or flawed authentication mechanism can lead to a complete database compromise."
    },
    solution: {
      title: "OWASP-Aligned Penetration Testing",
      description: "We perform rigorous, gray-box and black-box testing against your web applications, focusing heavily on business logic flaws, authorization bypasses, and complex injection attacks."
    },
    outcomes: [
      "Protection against OWASP Top 10",
      "Secure authentication & session management",
      "Defense against client-side attacks (XSS, CSRF)",
      "Secure API integration within the frontend"
    ],
    benefits: [
      {
        title: "Thorough Authentication Testing",
        description: "We test OAuth, JWTs, and SSO implementations for bypasses and token leaks."
      },
      {
        title: "Business Logic Focus",
        description: "We find the flaws scanners miss, like price manipulation or multi-tenant data leaks."
      },
      {
        title: "Developer Support",
        description: "We provide code-level remediation advice to help your team fix issues faster."
      }
    ],
    process: [
      {
        title: "Application Mapping",
        description: "Spidering and mapping all application endpoints, roles, and input vectors."
      },
      {
        title: "Vulnerability Discovery",
        description: "Testing for injection, broken auth, XSS, and insecure direct object references (IDOR)."
      },
      {
        title: "Privilege Escalation",
        description: "Attempting to elevate privileges horizontally (other users) and vertically (admin access)."
      },
      {
        title: "Reporting",
        description: "Detailed findings with reproducible steps and strategic mitigation advice."
      }
    ],
    faqs: [
      {
        question: "What do you need to start testing?",
        answer: "We typically require staging environment credentials with various user roles (e.g., standard user, admin) to perform comprehensive gray-box testing."
      },
      {
        question: "Do you test Single Page Applications (React, Next.js)?",
        answer: "Yes, our team specializes in modern tech stacks, including React, Next.js, Angular, and Vue, focusing heavily on client-side routing and state management vulnerabilities."
      },
      {
        question: "Can testing disrupt our live application?",
        answer: "We strongly recommend testing in a dedicated staging environment that mirrors production. If testing in production is required, we use strict, non-destructive payloads."
      }
    ]
  };

  return <ServiceLayout {...content} />;
}
