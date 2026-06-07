export const BRAND = {
  name: "TrustLayerLabs",
  website: "https://trustlayerlabs.co.in",
  contact: {
    email: "security@trustlayerlabs.co.in",
    phone: "+91 80 4991 2288",
    whatsapp: "https://wa.me/919121000000",
    linkedin: "https://linkedin.com/company/trustlayerlabs",
    twitter: "https://twitter.com/trustlayerlabs",
  },
  colors: {
    bg: "#0D0F14",
    surface: "#141720",
    primary: "#3B5BDB",
    accent: "#7B9FFF",
    critical: "#E24B4A",
    success: "#1D9E75",
    warning: "#EF9F27",
    textPrimary: "#C8D0E0",
    textSecondary: "#8A8F9E",
    border: "#1F2937",
  }
};

export const NAV_LINKS = [
  { name: "Services", href: "/services" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Security Checklist", href: "/checklist" },
  { name: "Contact", href: "/contact" },
];

export const SERVICES = [
  {
    id: "api-security",
    title: "API Security Testing",
    description: "Deep manual penetration testing targeting your REST, GraphQL, and gRPC endpoints to uncover logical, authentication, and authorization flaws.",
    duration: "5-7 Days",
    severity: "critical", // Critical = red
    technologies: ["GraphQL", "REST APIs", "gRPC", "OAuth 2.0", "JWT", "Postman", "Burp Suite"],
    deliverables: [
      "Step-by-step PoC for logic bypasses",
      "Remediation code snippets (Node, Python, Go)",
      "Redacted executive summary for stakeholders",
      "Free retesting within 30 days"
    ],
    outcome: "Prevent BOLA/IDOR, broken object authorization, rate-limiting bypass, and data leakage."
  },
  {
    id: "vapt",
    title: "Vulnerability Assessment & Pen Testing (VAPT)",
    description: "Full-scale black box and gray box penetration testing of your web applications, network interfaces, and external infrastructure assets.",
    duration: "7-10 Days",
    severity: "critical",
    technologies: ["OWASP Top 10", "Nmap", "Metasploit", "Burp Suite Pro", "Nessus"],
    deliverables: [
      "Comprehensive VAPT audit report",
      "Developer walkthrough meeting",
      "Attestation of pentest certificate",
      "Vulnerability tracking spreadsheet"
    ],
    outcome: "Identify and patch OWASP Top 10 vulnerabilities like SQLi, XSS, and broken access controls."
  },
  {
    id: "cloud-security",
    title: "Cloud Security Audit",
    description: "Configuration and IAM architecture review across AWS, GCP, and Azure to eliminate privilege creep, data exposure, and insecure container configurations.",
    duration: "4-6 Days",
    severity: "high", // High = amber
    technologies: ["AWS IAM", "GCP Cloud IAM", "Kubernetes", "Docker", "Terraform", "CloudTrail"],
    deliverables: [
      "Infrastructure-as-code security checks",
      "IAM privilege mapping matrix",
      "S3 bucket & DB exposure validation",
      "Compliance gaps walkthrough"
    ],
    outcome: "Hardened AWS/GCP architecture conforming to CIS benchmarks and least-privilege principles."
  },
  {
    id: "soc2-readiness",
    title: "SOC2 & ISO27001 Readiness",
    description: "Establish robust information security policies, configure compliance evidence pipelines, and pass enterprise security audits with speed.",
    duration: "2-4 Weeks",
    severity: "compliance", // Compliance = blue
    technologies: ["Vanta", "Drata", "Slack", "AWS", "Jira", "GitHub"],
    deliverables: [
      "Custom security policy templates",
      "Internal controls assessment matrix",
      "Gap analysis and remediation roadmap",
      "Warm intro to trusted compliance auditors"
    ],
    outcome: "Close larger enterprise deals by showing a robust, audited security posture."
  },
  {
    id: "secure-code-review",
    title: "Secure Code Review",
    description: "Comprehensive static and dynamic analysis of your application codebase to detect implementation flaws and supply-chain vulnerabilities.",
    duration: "5-8 Days",
    severity: "high",
    technologies: ["GitHub", "GitLab", "SonarQube", "Snyk", "Semgrep", "JavaScript/TS", "Python", "Go"],
    deliverables: [
      "Line-by-line vulnerable code references",
      "Remediation commits / Pull Requests",
      "Dependency vulnerability report",
      "SAST/DAST pipeline integration"
    ],
    outcome: "Remediate SQL injection, logic flaws, and supply chain threats before pushing to production."
  },
  {
    id: "compliance-assessment",
    title: "Compliance Assessment",
    description: "Align your business security architecture with RBI guidelines, GDPR, HIPAA, and DPDP rules for Indian startups operating globally.",
    duration: "6-8 Days",
    severity: "compliance",
    technologies: ["GDPR", "DPDP Act", "RBI Cybersecurity Framework", "HIPAA", "ISO 27001"],
    deliverables: [
      "Data protection impact assessment (DPIA)",
      "Regulatory compliance gap report",
      "Data inventory & flow diagrams",
      "Legal counsel review templates"
    ],
    outcome: "Full legal compliance for data processing, avoiding steep regulatory fines."
  }
];

export const PROCESS_STEPS = [
  {
    day: "Day 1",
    title: "Kickoff & Reconnaissance",
    description: "Initial scoping, secure asset discovery, credential sharing, and automated active reconnaissance scanning."
  },
  {
    day: "Day 2-3",
    title: "Deep Security Testing",
    description: "Manual threat modeling, access boundary verification, session flow validation, and parameter integrity checks."
  },
  {
    day: "Day 4",
    title: "Report Draft & Severity Ranking",
    description: "Compiling findings into an actionable report with CVSS scoring, exact steps to reproduce, and fix code blocks."
  },
  {
    day: "Day 5",
    title: "Debrief & Remediation Retesting",
    description: "A collaborative walkthrough with your engineering team, remediation support, and verification of applied patches."
  }
];

export const CASE_STUDIES = [
  {
    slug: "fintech-api-security",
    title: "Prevented BOLA Data Exposure in FinTech API",
    category: "FinTech",
    problem: "A Neo-Banking Startup was launching their API platform, but security scanning failed to check complex multi-step authorization logic.",
    exploit: "Identified access boundary vulnerability where row-level queries on transfer endpoints failed to check context tenant ownership.",
    impact: "Potential leakage of financial records of over 120,000 users, leading to RBI compliance violations and brand loss.",
    fix: "Implemented resource-level authorization validation filters, cryptographically signed entity IDs, and rate limits.",
    technologies: ["Node.js", "Redis", "JWT", "AWS WAF", "Postgres"],
    metrics: "120k records secured. Zero data leaks. Completed RBI security audit approval.",
    results: "98% reduction in unauthorized API calls, achieved ISO 27001 readiness."
  },
  {
    slug: "healthtech-compliance",
    title: "Secured HealthTech Patient Portals for Enterprise Integration",
    category: "HealthTech",
    problem: "A fast-growing HealthTech platform failed an enterprise hospital's onboarding assessment due to insufficient HIPAA controls and exposed patient file URLs.",
    exploit: "Diagnosed exposed storage buckets lacking pre-signed authorization tokens, permitting resource queries on sensitive records.",
    impact: "Exposed sensitive patient records, threatening massive HIPAA penalties and blocking a $450k annual recurring revenue enterprise deal.",
    fix: "Migrated files to private buckets with short-lived AWS CloudFront signed cookies and integrated OAuth2 controls.",
    technologies: ["React", "AWS S3", "CloudFront", "Cognito", "Python"],
    metrics: "SaaS HIPAA compliant in 14 days. Closed the $450k hospital contract.",
    results: "Passed hospital vendor risk evaluation with 100/100 compliance rating."
  },
  {
    slug: "saas-cloud-isolation",
    title: "Audited SaaS Multi-Tenant Architecture on AWS",
    category: "SaaS Startup",
    problem: "A B2B SaaS tool had complex database queries where tenant filters could be bypassed using SQL structures, resulting in potential cross-tenant leakage.",
    exploit: "Identified connection pool context overlap inside custom ORM configurations, permitting session telemetry leak across tenancy boundaries.",
    impact: "Uncontrolled access to company telemetry, dashboards, and client files, which would ruin customer trust.",
    fix: "Redefined connection pool configuration to apply row-level security (RLS) on PostgreSQL, separating database contexts.",
    technologies: ["PostgreSQL RLS", "AWS RDS", "Next.js", "Docker", "Kubernetes"],
    metrics: "100% tenant isolation verified. Checked with 15,000 concurrent simulated threads.",
    results: "Security attestation report delivered to enterprise buyers, reducing sales cycles by 40%."
  }
];

export const TESTIMONIALS = [
  {
    quote: "TrustLayerLabs was a game-changer. They identified a critical auth bypass in our billing API within 12 hours. Their report was incredibly clear, and they even retested our fixes overnight. Absolute lifesavers.",
    name: "Siddharth Sharma",
    role: "Co-Founder & CTO",
    company: "PayFlow India",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    quote: "Enterprise procurement used to take months for us. Thanks to TrustLayerLabs' SOC2 readiness program and manual penetration testing attestation, we cleared our largest enterprise audit in just 3 days.",
    name: "Ananya Roy",
    role: "VP of Engineering",
    company: "CareOS",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    quote: "Outstanding experience. Unlike automated tools that throw hundreds of false positives, TrustLayerLabs focused on logical issues. They found an IDOR that could have cost us our Series A.",
    name: "Rohan Deshmukh",
    role: "CEO & Founder",
    company: "LogixLabs",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200"
  }
];

export const PRICING_TIERS = [
  {
    name: "Starter Pentest",
    price: "₹5,000",
    period: "per audit",
    description: "Ideal for early-stage startups needing a quick, reliable VAPT report to clear a sales deal or funding requirement.",
    features: [
      "1 Web App / API Scoping",
      "Manual logic vulnerability testing",
      "Vulnerability assessment (OWASP Top 10)",
      "Detailed PDF audit report",
      "1 Free re-test within 30 days",
      "Email support",
      "Attestation of Pen Test Certificate"
    ],
    cta: "Book Free Review",
    popular: false
  },
  {
    name: "Growth Security",
    price: "₹49,000",
    period: "per audit",
    description: "Comprehensive VAPT, API testing, and cloud configuration audit for multi-tenant SaaS products and fintech apps.",
    features: [
      "Web App + Complete API Scoping",
      "Deep manual logic testing & JWT audits",
      "AWS / GCP cloud configuration check",
      "PDF Report + Developer debrief call",
      "Remediation commits support",
      "2 Free re-tests within 60 days",
      "Slack security channel with our pentesters",
      "Attestation Certificate & Trust Badge"
    ],
    cta: "Secure My Growth",
    popular: true
  },
  {
    name: "Enterprise Shield",
    price: "Custom Pricing",
    period: "annual retainer",
    description: "Continuous security audits, SOC2/ISO readiness framework, and priority security testing for enterprise startups.",
    features: [
      "Continuous pen testing (Quarterly audits)",
      "SOC2 / ISO 27001 readiness & controls mapping",
      "Secure code review & CI/CD pipeline SAST",
      "Unlimited manual VAPT scoping",
      "1-hour SLA support responses",
      "Dedicated virtual CISO (vCISO) hours",
      "NDA guaranteed compliance assistance",
      "Retainer dashboard & active threat alerts"
    ],
    cta: "Schedule Consultation",
    popular: false
  }
];

export const FAQS = [
  {
    question: "Do you sign a Non-Disclosure Agreement (NDA) before scanning?",
    answer: "Absolutely. We never touch a line of code or scan any environment without a mutual NDA. All discovered data, report documents, and environment structures are encrypted and kept strictly confidential. We can sign your NDA or supply our startup-focused security NDA."
  },
  {
    question: "How long does a standard VAPT audit take?",
    answer: "A standard API security or application audit takes between 5 to 10 business days. If you have an urgent enterprise deal close deadline, let us know during kickoff—we can expedite critical scoping to provide an initial vulnerability snapshot within 48 hours."
  },
  {
    question: "What access requirements do you need to conduct the audit?",
    answer: "For web applications and APIs, we generally need access to a staging/sandbox environment with at least two user roles (to test privilege escalation) and Swagger/Postman API collection documents. For cloud audits, we require read-only access to your cloud dashboard logs and configurations."
  },
  {
    question: "Do you offer retesting once we patch the vulnerabilities?",
    answer: "Yes, retesting is included in all packages. We believe finding a bug is only half the battle. Once your developers implement fixes, we retest the exact vectors and update your final VAPT audit report and Attestation Certificate to show 'Patched' status."
  },
  {
    question: "Does your certificate help with SOC2 or ISO audits?",
    answer: "Yes! Auditors and enterprise procurement officers require proof of a third-party manual penetration test. Our Attestation Certificate and redacted executive summary report satisfy these requirements for SOC2 Type II, ISO 27001, GDPR, and RBI guidelines."
  },
  {
    question: "What is your refund policy if no vulnerabilities are found?",
    answer: "We guarantee that our manual testing will uncover logic flaws or configuration vulnerabilities. If we run a full VAPT audit and find zero issues of any severity, and your code is proved to be 100% hardened, we offer a 50% discount on your next scoping round."
  }
];

