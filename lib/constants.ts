export const BRAND = {
  name: "TrustLayerLabs",
  website: "https://trustlayerlabs.co.in",
  contact: {
    email: "security@trustlayerlabs.co.in",
    linkedin: "https://linkedin.com/in/nagasrinivasarao9",
  },
  colors: {
    bg: "#0B0F14",
    card: "#111827",
    primary: "#22c55e",
    textPrimary: "#E5E7EB",
    textSecondary: "#94A3B8",
    border: "#1F2937",
  }
};

export const NAV_LINKS = [
  { name: "Services", href: "#services" },
  { name: "Case Studies", href: "#cases" },
  { name: "Blog", href: "/blog" },
  { name: "Trust", href: "#trust" },
];

export const SERVICES = [
  {
    title: "API Security Testing",
    description: "Deep manual testing of REST, GraphQL, and gRPC endpoints to uncover logical vulnerabilities.",
    outcome: "Eliminate BOLA, IDOR, and broken authentication flows.",
    whatWeTest: ["Endpoint discovery", "Logic bypass", "Data exposure"]
  },
  {
    title: "Web App Penetration Testing",
    description: "Comprehensive audits of your web platform following OWASP and NIST standards.",
    outcome: "Full platform hardening against advanced persistent threats.",
    whatWeTest: ["XSS/SQLi", "Session management", "Privilege escalation"]
  },
  {
    title: "SaaS Security Audit",
    description: "Specialized audits for cloud-native SaaS products, focusing on multi-tenancy isolation.",
    outcome: "Verify tenant isolation and secure default configurations.",
    whatWeTest: ["Tenant leakage", "Cloud misconfigs", "Authz logic"]
  },
  {
    title: "AI Security Testing",
    description: "Securing the LLM layer and data pipelines of your AI-driven startup.",
    outcome: "Prevent prompt injection and training data leakage.",
    whatWeTest: ["Prompt injection", "Output sanitization", "Model rate limiting"]
  },
  {
    title: "GRC & Compliance",
    description: "Gap analysis and readiness for SOC2, ISO/IEC 27001:2022, and GDPR to build institutional trust.",
    outcome: "Streamline audits and satisfy enterprise procurement requirements.",
    whatWeTest: ["Gap analysis", "Policy review", "Audit readiness"]
  }
];

export const CASE_STUDIES = [
  {
    title: "Prevented Data Exposure in FinTech API",
    problem: "A major FinTech platform had undocumented endpoints exposed to the public internet.",
    exploit: "BOLA (Broken Object Level Authorization) allowed access to transaction records via user ID manipulation.",
    impact: "Potential leakage of 50k+ user financial records and regulatory fines.",
    fix: "Implemented resource-level authorization checks and endpoint masking."
  }
];
