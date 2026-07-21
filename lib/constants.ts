export const BRAND = {
  name: "TrustLayerLabs",
  website: "https://trustlayerlabs.co.in",
  contact: {
    email: "security@trustlayerlabs.co.in",
    phone: "+91 99123 50493",
    whatsapp: "https://wa.me/919912350493",
    linkedin: "https://www.linkedin.com/company/trustlayerlabs",
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
  { 
    name: "Services", 
    href: "/services",
    children: [
      { name: "Web Application VAPT", href: "/services/web-app-vapt", description: "OWASP Top 10, XSS, SQLi, and authentication audits" },
      { name: "API Security Testing", href: "/services/api-security", description: "REST, GraphQL, gRPC, BOLA/IDOR, & JWT penetration testing" },
      { name: "Mobile App VAPT", href: "/services/mobile-vapt", description: "iOS & Android dynamic/static security assessment" },
      { name: "Cloud Security Audit", href: "/services/cloud-security", description: "AWS, GCP, & Azure CIS Benchmark and IAM audits" },
      { name: "Network Pentesting", href: "/services/network-pentesting", description: "External & internal network perimeter penetration testing" },
      { name: "Kubernetes Security", href: "/services/kubernetes-security", description: "Pod policies, RBAC, container image & cluster security" },
      { name: "AI Application Security", href: "/services/ai-security", description: "OWASP Top 10 for LLMs, prompt injection, & RAG data safety" },
      { name: "Startup Security & GRC", href: "/services/startup-security", description: "SOC2 Type II, ISO 27001, and enterprise vendor audit prep" },
    ]
  },
  { name: "Methodology", href: "/methodology" },
  { name: "Sample Report", href: "/sample-report" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Checklist", href: "/checklist" },
];

export const SERVICES = [
  {
    id: "web-app-vapt",
    slug: "web-app-vapt",
    title: "Web Application VAPT",
    description: "Deep manual penetration testing for modern single-page apps (React, Next.js, Vue), server-side rendering, and web applications.",
    duration: "5-7 Days",
    severity: "critical",
    technologies: ["OWASP Top 10", "Burp Suite Pro", "SQLMap", "Nmap", "React", "Next.js"],
    deliverables: [
      "Manual logic vulnerability PoCs",
      "Exact reproduction steps & code snippets",
      "Redacted executive summary for investors/clients",
      "Free retesting within 30 days"
    ],
    outcome: "Identify and patch web application vulnerabilities like XSS, SQLi, auth bypass, and CSRF before production release."
  },
  {
    id: "api-security",
    slug: "api-security",
    title: "API Security Testing",
    description: "Manual OWASP API Top 10 vulnerability assessment for REST, GraphQL, and gRPC microservices targeting BOLA, BFLA, and auth flaws.",
    duration: "5-7 Days",
    severity: "critical",
    technologies: ["GraphQL", "REST APIs", "gRPC", "OAuth 2.0", "JWT", "Postman", "Burp Suite"],
    deliverables: [
      "Step-by-step PoC for logic bypasses & BOLA",
      "Remediation code snippets (Node, Python, Go)",
      "Redacted executive summary for stakeholders",
      "Free retesting within 30 days"
    ],
    outcome: "Prevent BOLA/IDOR, broken object authorization, rate-limiting bypass, and tenant data leaks."
  },
  {
    id: "mobile-vapt",
    slug: "mobile-vapt",
    title: "Mobile Application VAPT",
    description: "Static and dynamic penetration testing for iOS (IPA) and Android (APK) applications following OWASP MASVS standards.",
    duration: "6-8 Days",
    severity: "critical",
    technologies: ["Frida", "Objection", "MobSF", "Burp Suite", "Android APK", "iOS IPA"],
    deliverables: [
      "Dynamic SSL Pinning bypass analysis",
      "Insecure local storage & key extraction PoC",
      "Decompiled code vulnerability mapping",
      "Retesting verification certificate"
    ],
    outcome: "Protect mobile clients against reverse engineering, hardcoded secret leaks, and insecure data storage."
  },
  {
    id: "cloud-security",
    slug: "cloud-security",
    title: "Cloud Security Assessment",
    description: "Configuration and IAM architecture review across AWS, GCP, and Azure against CIS Benchmarks to eliminate privilege creep.",
    duration: "4-6 Days",
    severity: "high",
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
    id: "network-pentesting",
    slug: "network-pentesting",
    title: "Network Penetration Testing",
    description: "External perimeter and internal network security audits targeting exposed services, weak VPNs, and unpatched infrastructure.",
    duration: "4-6 Days",
    severity: "high",
    technologies: ["Nmap", "Metasploit", "Nessus", "Wireshark", "OpenVPN", "Active Directory"],
    deliverables: [
      "Perimeter service vulnerability report",
      "Port scanning & service exposure audit",
      "Patch priority & CVE remediation guide",
      "Retesting verification"
    ],
    outcome: "Eliminate external network attack vectors and secure remote access infrastructure."
  },
  {
    id: "kubernetes-security",
    slug: "kubernetes-security",
    title: "Kubernetes & Container Security",
    description: "Security assessment for K8s clusters, container images, RBAC roles, and pod security admission controls.",
    duration: "5-7 Days",
    severity: "high",
    technologies: ["Kubernetes", "Docker", "Trivy", "Kube-bench", "Kube-hunter", "Helm"],
    deliverables: [
      "K8s RBAC permission matrix audit",
      "Container image CVE scan analysis",
      "Pod Security Admission policy fixes",
      "Cluster hardening guide"
    ],
    outcome: "Prevent container breakouts, privilege escalation, and unauthorized cluster control plane access."
  },
  {
    id: "ai-security",
    slug: "ai-security",
    title: "AI & LLM Application Security",
    description: "Vulnerability assessment for AI applications, LLM integrations, RAG vector stores, and prompt injection vectors (OWASP Top 10 for LLMs).",
    duration: "5-7 Days",
    severity: "critical",
    technologies: ["LangChain", "LlamaIndex", "Pinecone", "OpenAI APIs", "Prompt Injection", "Burp Suite"],
    deliverables: [
      "Direct & Indirect Prompt Injection PoCs",
      "RAG Vector Database data leakage audit",
      "LLM System Prompt bypass analysis",
      "Remediation guide for GenAI apps"
    ],
    outcome: "Secure AI startup products against prompt injection, model inversion, and sensitive data leakage."
  },
  {
    id: "startup-security",
    slug: "startup-security",
    title: "Startup Security & GRC Readiness",
    description: "SOC2 Type II, ISO 27001, and enterprise vendor security audit preparation for fast-growing SaaS startups.",
    duration: "2-4 Weeks",
    severity: "compliance",
    technologies: ["Vanta", "Drata", "Slack", "AWS", "Jira", "GitHub"],
    deliverables: [
      "Custom security policy templates",
      "Internal controls assessment matrix",
      "Gap analysis and remediation roadmap",
      "Warm intro to trusted compliance auditors"
    ],
    outcome: "Close enterprise deals faster by presenting verified SOC2 readiness and pentest attestations."
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

