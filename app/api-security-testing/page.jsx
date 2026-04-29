import ServiceLayout from "@/components/ServiceLayout";

export const metadata = {
  title: "API Security Testing Services India | REST & GraphQL VAPT",
  description: "Secure your APIs against unauthorized access, data leaks, and broken authorization. Expert testing for REST, GraphQL, and SOAP endpoints.",
};

export default function ApiSecurity() {
  const content = {
    title: "API Security Testing",
    description: "Specialized VAPT for REST, GraphQL, and microservices to ensure your data exchange is secure and authorization is robust.",
    problem: {
      title: "APIs are the hidden backdoors to your data.",
      description: "While your UI might be secure, your APIs often expose internal logic, lack proper rate limiting, or fail to validate object-level authorization (BOLA)."
    },
    solution: {
      title: "Full-Stack API Penetration Testing",
      description: "We dive deep into your API endpoints, testing for the OWASP API Top 10, including broken object level authorization, mass assignment, and improper assets management."
    },
    outcomes: [
      "Eliminate Broken Object Level Authorization (BOLA)",
      "Secure GraphQL query depth and complexity",
      "Validate API rate limiting and DoS protection",
      "Secure third-party API integrations"
    ],
    benefits: [
      {
        title: "Microservices Experts",
        description: "We understand complex microservice architectures and how to test inter-service communication."
      },
      {
        title: "GraphQL Specialization",
        description: "Deep expertise in GraphQL-specific vulnerabilities like circular queries and introspection leaks."
      },
      {
        title: "Postman-Driven Testing",
        description: "We use your existing API documentation to ensure 100% endpoint coverage."
      }
    ],
    process: [
      {
        title: "Discovery & Endpoint Mapping",
        description: "Importing API documentation (Swagger/Postman) and identifying hidden endpoints."
      },
      {
        title: "Authentication Bypass Testing",
        description: "Testing token validation, JWT security, and API key management."
      },
      {
        title: "Logic & Authorization Probing",
        description: "Intense manual testing of object-level permissions and business logic."
      },
      {
        title: "Final Audit & Report",
        description: "Full report with remediation priority based on business impact."
      }
    ],
    faqs: [
      {
        question: "Do you need documentation to test our API?",
        answer: "While we can perform black-box testing, providing Swagger/OpenAPI or Postman collections ensures we cover every single endpoint and edge case."
      },
      {
        question: "Can you test GraphQL APIs?",
        answer: "Yes, we have specialized tools and methodologies for testing GraphQL schema security, query complexity, and introspection."
      },
      {
        question: "How do you test for BOLA (IDOR)?",
        answer: "We use multiple accounts with different permission levels to manually verify that one user cannot access or modify another user's data by manipulating IDs."
      }
    ]
  };

  return <ServiceLayout {...content} />;
}
