export const BRAND = {
  name: "TrustLayerLabs",
  tagline: "THE VERIFIED TRUST LAYER",
  positioning: "ASSESS / VERIFY / STRENGTHEN / SCALE",
  headline: "Find the security flaws automated scanners miss.",
  subheadline: "Manual API, SaaS & AI security testing for startups preparing for enterprise customers, audits, or production launch.",
  supportingText: "We test the attack paths that require human reasoning — BOLA/IDOR, broken authorization, business-logic flaws, authentication weaknesses, multi-tenant isolation, and AI/RAG security.",
  website: "https://trustlayerlabs.co.in",
  contact: {
    email: "ceo@trustlayerlabs.co.in",
    phone: "+91 93912 20328",
    whatsapp: "https://wa.me/919391220328",
    linkedin: "https://www.linkedin.com/company/trustlayerlabs1/",
    twitter: "https://twitter.com/trustlayerlabs",
    calendly: "https://calendly.com/nagasrinivasaraoeevuri/30min",
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
    name: "Security Services",
    href: "/services",
    children: [
      { name: "API Security Testing", href: "/services/api-security", description: "BOLA/IDOR, JWT, GraphQL & multi-tenant authorization testing" },
      { name: "SaaS VAPT & Pentesting", href: "/services/saas-vapt", description: "Tenant isolation, database boundaries & RBAC escalation" },
      { name: "Web Application VAPT", href: "/services/web-app-vapt", description: "Deep manual penetration testing for modern single-page apps & APIs" },
      { name: "AI Application Security", href: "/services/ai-security", description: "OWASP Top 10 for LLMs, prompt injection & RAG data isolation" },
      { name: "Cloud Security Audit", href: "/services/cloud-security", description: "AWS & GCP IAM least-privilege, storage & CIS hardening" },
      { name: "GRC & Enterprise Readiness", href: "/grc-readiness", description: "SOC 2 & ISO 27001 technical control mapping & audit readiness" },
      { name: "View All 15+ Services →", href: "/services", description: "Complete technical security assessment catalogue" },
    ]
  },
  {
    name: "Industries",
    href: "/services/saas-vapt",
    children: [
      { name: "B2B SaaS", href: "/services/saas-vapt", description: "Multi-tenant applications, APIs, RBAC & enterprise workflows" },
      { name: "AI SaaS", href: "/services/ai-security", description: "RAG, AI agents, retrieval permissions & vector store isolation" },
      { name: "FinTech", href: "/fintech-security", description: "Payment logic, ledger APIs & regulatory security baselines" },
    ]
  },
  { name: "Methodology", href: "/methodology" },
  { name: "Sample Report", href: "/sample-report" },
  { name: "Research", href: "/blog" },
  { name: "About", href: "/about" },
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
    id: "web-development",
    slug: "web-development",
    title: "Web Development",
    description: "Secure-by-design web application development for startups — fast, modern, production-ready sites and apps with security best practices built in from day one, not bolted on after launch.",
    duration: "2-4 Weeks",
    severity: "high",
    technologies: ["React", "Next.js", "Node.js", "WordPress", "Tailwind CSS", "AWS / Vercel"],
    deliverables: [
      "Responsive, production-ready site or web app",
      "Security-hardened by default (OWASP baseline, secure headers, input validation)",
      "SEO-optimized structure and performance tuning"
    ],
    outcome: "Launch secure, high-performance web applications built to scale with OWASP security best practices integrated from day one."
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
      "Retesting verification letter"
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
  },
  {
    id: "saas-vapt",
    slug: "saas-vapt",
    title: "SaaS Penetration Testing",
    description: "Deep audit of multi-tenant SaaS platforms focusing on tenant isolation boundaries, horizontal privilege scaling, and account takeover vectors.",
    duration: "5-7 Days",
    severity: "critical",
    technologies: ["Tenant Isolation", "Burp Suite Pro", "OWASP WSTG", "Privilege Scaling", "React", "NodeJS"],
    deliverables: [
      "Tenant boundary isolation PoC",
      "API privilege escalation walkthroughs",
      "Executive summary for B2B procurement",
      "30-day retesting attestation"
    ],
    outcome: "Ensure Customer A can never access Customer B's datasets under any parameter tampering conditions."
  },
  {
    id: "soc2-pentesting",
    slug: "soc2-pentesting",
    title: "SOC 2 Compliance Pentesting",
    description: "Specialized penetration testing fulfilling Technical Security Control requirements for SOC 2 Type II attestation audits.",
    duration: "5-7 Days",
    severity: "high",
    technologies: ["SOC 2 CC6.1-CC6.3", "Vanta/Drata Integrations", "AWS/GCP Audits", "IAM Review", "Nessus"],
    deliverables: [
      "SOC 2 aligned penetration test report",
      "Technical control gaps validation",
      "Signed auditor-ready attestation letter",
      "Free retesting for identified flaws"
    ],
    outcome: "Close trust gaps for compliance auditors and fast-track your SOC 2 Type II audit attestation."
  },
  {
    id: "fintech-vapt",
    slug: "fintech-vapt",
    title: "FinTech Compliance Pentesting",
    description: "Cybersecurity audit tailored for Indian financial startups adhering to RBI, SEBI, IRDAI, and NPCI security guidelines.",
    duration: "7-10 Days",
    severity: "critical",
    technologies: ["RBI Guidelines", "SEBI Cybersecurity framework", "NPCI guidelines", "AES-256", "TLS 1.3", "HSM"],
    deliverables: [
      "RBI/SEBI security controls assessment report",
      "Data localization & encryption audit",
      "Vulnerability assessment attestation",
      "NPCI UPI integration safety checks"
    ],
    outcome: "Align technical security controls with Indian banking and regulatory compliance guidelines."
  },
  {
    id: "aws-security",
    slug: "aws-security",
    title: "AWS Cloud Security Assessment",
    description: "Deep dive audit of AWS Cloud architecture, least-privilege IAM mapping, secure credential storage, and CIS benchmark conformance.",
    duration: "5-7 Days",
    severity: "high",
    technologies: ["AWS IAM", "KMS Encryption", "CloudTrail", "AWS Config", "Trivy", "S3 Bucket Audits"],
    deliverables: [
      "AWS IAM privilege mapping matrix",
      "S3 storage bucket leakage checks",
      "CIS AWS Benchmark compliance score",
      "Cloud Security Posture (CSPM) fixes"
    ],
    outcome: "Prevent credential leakage, S3 bucket exposures, and cloud privilege escalation attacks."
  },
  {
    id: "smart-contract-audit",
    slug: "smart-contract-audit",
    title: "Smart Contract & Web3 Audit",
    description: "Offensive security review of Ethereum/EVM Solidity smart contracts targeting staking logic, reentrancy, and flash loan attacks.",
    duration: "6-8 Days",
    severity: "critical",
    technologies: ["Solidity", "Slither", "Mythril", "Hardhat", "EVM bytecode", "ERC-20/721/1155"],
    deliverables: [
      "Line-by-line Solidity code review",
      "Formal verification logic report",
      "Reentrancy & state exploitation PoC",
      "Gas optimization recommendations"
    ],
    outcome: "Protect decentralized protocols and token pools from catastrophic staking logic bypasses."
  },
  {
    id: "iso-27001-vapt",
    slug: "iso-27001-vapt",
    title: "ISO 27001 VAPT Audit",
    description: "Annex A.12 technical security vulnerability assessment validating infrastructure, networks, and perimeter configurations.",
    duration: "5-7 Days",
    severity: "high",
    technologies: ["ISO 27001 controls", "Nmap", "OpenVAS", "Qualys", "Network perimeter scans"],
    deliverables: [
      "Technical control alignment index",
      "External/Internal network VAPT report",
      "Signed penetration test attestation",
      "Remediation support commits"
    ],
    outcome: "Secure the technical control benchmarks required to support ISO 27001 certification audits."
  },
  {
    id: "hipaa-vapt",
    slug: "hipaa-vapt",
    title: "HIPAA Security & Healthcare Audit",
    description: "Vulnerability assessment for healthcare portals and ePHI databases ensuring compliant patient records isolation.",
    duration: "5-7 Days",
    severity: "critical",
    technologies: ["HIPAA security rules", "ePHI safeguards", "AWS CloudFront", "Cognito", "SSL/TLS audits"],
    deliverables: [
      "HIPAA Technical Safeguards Gap Index",
      "Storage bucket & patient file audit",
      "Executive summary for hospital vendors",
      "30-day free retesting validation"
    ],
    outcome: "Pass hospital cybersecurity reviews and onboard enterprise medical clients securely."
  },
  {
    id: "active-directory-pentesting",
    slug: "active-directory-pentesting",
    title: "Active Directory Security Audit",
    description: "Internal network security testing mimicking ransomware routes, lateral movement, Kerberoasting, and AD privilege escalations.",
    duration: "5-7 Days",
    severity: "high",
    technologies: ["Active Directory", "BloodHound", "Mimikatz", "Responder", "Impacket", "Kerberoasting"],
    deliverables: [
      "AD Trust relationship map graph",
      "Credential dumping exposure report",
      "Privilege escalation path fixes",
      "GPO hardening guidelines"
    ],
    outcome: "Prevent lateral movement, domain takeovers, and internal ransomware execution routes."
  },
  {
    id: "external-attack-surface",
    slug: "external-attack-surface",
    title: "External Attack Surface Audit",
    description: "Continuous passive and active perimeter assessment mapping all company internet-facing servers, subdomains, and exposed ports.",
    duration: "4-6 Days",
    severity: "high",
    technologies: ["Subfinder", "Amass", "Shodan", "Nuclei", "Subdomain Takeover check", "Nmap"],
    deliverables: [
      "Exposed assets registry inventory",
      "Subdomain takeover risk audit",
      "Outdated public-facing software CVE map",
      "Port scanner vulnerability report"
    ],
    outcome: "Eliminate low-hanging entry points like shadow IT servers or leaked staging endpoints."
  },
  {
    id: "pci-dss-pentesting",
    slug: "pci-dss-pentesting",
    title: "PCI-DSS Compliance Pentesting",
    description: "Required annual penetration testing validating segmentation boundaries of your Cardholder Data Environment (CDE).",
    duration: "6-8 Days",
    severity: "critical",
    technologies: ["PCI-DSS v4.0", "CDE segmentation", "Nmap", "Burp Suite", "Nessus Professional"],
    deliverables: [
      "PCI-DSS aligned penetration test report",
      "CDE network segmentation audit proof",
      "ASV vulnerability check attestation",
      "Remediation verification letter"
    ],
    outcome: "Validate technical security controls to support PCI-DSS compliance requirements."
  },
  {
    id: "source-code-review",
    slug: "source-code-review",
    title: "Source Code Security Review",
    description: "Line-by-line manual and automated security review of your application source code (SAST) to uncover hidden backdoors, hardcoded secrets, and injection points.",
    duration: "5-7 Days",
    severity: "critical",
    technologies: ["GitHub Actions", "Semgrep", "SonarQube", "Manual Code Review", "Node.js", "Python", "Go", "Java"],
    deliverables: [
      "Line-by-line code vulnerability mapping",
      "Secure coding remediation code blocks",
      "Secrets/credential scan analysis report",
      "Retesting verification of fixed commits"
    ],
    outcome: "Harden application architecture and address vulnerabilities directly within the codebase before deployment."
  },
  {
    id: "azure-security",
    slug: "azure-security",
    title: "Azure Cloud Security Audit",
    description: "Security posture assessment (CSPM) of your Microsoft Azure environment. We evaluate Entra ID (Azure AD), Virtual Network configurations, and App Service security settings.",
    duration: "5-7 Days",
    severity: "high",
    technologies: ["Microsoft Azure", "Entra ID", "Azure Key Vault", "Defender for Cloud", "ARM Templates", "Prowler"],
    deliverables: [
      "Entra ID permission & privilege mapping",
      "Storage account & database exposure logs",
      "CIS Microsoft Azure Benchmark score",
      "Azure networking configuration audit"
    ],
    outcome: "Secure Azure storage buckets, Entra ID tenants, and cloud API endpoints from credential misuse."
  },
  {
    id: "gcp-security",
    slug: "gcp-security",
    title: "GCP Cloud Security Audit",
    description: "Deep security audit of Google Cloud Platform deployments, including IAM permissions, Google Kubernetes Engine (GKE) clusters, and Cloud Storage bucket access controls.",
    duration: "5-7 Days",
    severity: "high",
    technologies: ["Google Cloud Platform", "GCP Cloud IAM", "Google Kubernetes Engine", "Cloud KMS", "Terraform", "Scout Suite"],
    deliverables: [
      "GCP IAM least-privilege policy mapping",
      "Cloud Storage public access validation checks",
      "CIS GCP Benchmark audit report",
      "GKE cluster control plane configuration check"
    ],
    outcome: "Verify and harden GCP workloads, IAM policies, and cloud networking boundaries."
  },
  {
    id: "graphql-security",
    slug: "graphql-security",
    title: "GraphQL API Security Testing",
    description: "Offensive security assessment tailored for GraphQL API endpoints. We test for query depth limit bypass, circular queries, resolver injection, and field-level auth (BOLA).",
    duration: "4-6 Days",
    severity: "critical",
    technologies: ["GraphQL Schema", "Apollo Server", "InQL", "Burp Suite", "Postman", "JWT", "Introspection"],
    deliverables: [
      "GraphQL schema injection PoCs",
      "Query recursion and depth vulnerability logs",
      "Field-level authorization bypass reports",
      "Remediation code snippets for Apollo/Graphql-go"
    ],
    outcome: "Prevent denial-of-service, user data scraping, and authorization boundary bypasses on GraphQL APIs."
  },
  {
    id: "owasp-api-security",
    slug: "owasp-api-security",
    title: "OWASP API Top 10 Security Testing",
    description: "Specialized pentest verifying your APIs against the entire OWASP API Security Top 10 list (BOLA, broken authentication, mass assignment, SSRF, etc.).",
    duration: "5-7 Days",
    severity: "critical",
    technologies: ["OWASP API Top 10", "REST APIs", "JWT", "OAuth 2.0", "Postman", "Burp Suite Pro"],
    deliverables: [
      "BOLA/IDOR exploit steps and PoCs",
      "Authentication & token abuse reports",
      "Rate-limit & resources exhaustion logs",
      "Remediation commits for Node, Python, and Go"
    ],
    outcome: "Complete compliance validation against the industry standard API security framework."
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
    slug: "saas-api-bola-finding",
    title: "Broken Object Level Authorization (BOLA) in Multi-Tenant API",
    category: "SaaS API Security",
    vulnerabilityClass: "OWASP API1:2023 — BOLA",
    problem: "A multi-tenant SaaS REST API exposes workspace profiles where authenticated users can query workspace endpoints.",
    exploit: "Manipulated numerical account identifiers in API request paths (GET /api/v1/workspaces/{workspace_id}), bypassing horizontal authorization checks to view another tenant's workspace metadata.",
    impact: "Unauthorized cross-tenant data retrieval and metadata exposure between separate client accounts.",
    fix: "Implement server-side authorization middleware validating session identity against the requested workspace ownership before querying the database.",
    technologies: ["REST API", "Node.js", "Express", "JWT", "PostgreSQL"],
    mitigationStrategy: "Enforce session-to-resource ownership checks in database query filters.",
    remediationType: "Middleware Authorization Filter",
    riskLevel: "Critical"
  },
  {
    slug: "jwt-privilege-escalation",
    title: "Privilege Escalation via Algorithm Confusion & Unverified Claims",
    category: "Authentication Security",
    vulnerabilityClass: "CWE-347 / JWT Vulnerability",
    problem: "An administration portal trusts unverified role claims stored within JSON Web Tokens (JWT) without strict cryptographic validation.",
    exploit: "Modified token header parameters (e.g., algorithm confusion or unsigned claims) and manipulated role values in session tokens to request administrative endpoints.",
    impact: "Unauthorized elevation of privileges from standard user to system administrator.",
    fix: "Enforce strict asymmetric signature validation (RS256/EdDSA), reject 'none' or mismatched algorithms, and maintain role permissions server-side.",
    technologies: ["JWT", "OAuth 2.0", "Python", "FastAPI", "React"],
    mitigationStrategy: "Validate cryptographic signatures and verify permissions server-side.",
    remediationType: "Cryptographic Key Hardening",
    riskLevel: "Critical"
  },
  {
    slug: "healthtech-compliance",
    title: "Insecure Direct Object Reference on Cloud Storage Assets",
    category: "Cloud Storage Security",
    vulnerabilityClass: "OWASP Top 10 — Broken Access Control",
    problem: "An application portal generates direct object URLs for stored patient and client files without time-limited authorization tokens.",
    exploit: "Enumerated predictable object paths on cloud storage endpoints, discovering unauthenticated access to uploaded documents.",
    impact: "Uncontrolled exposure of confidential records, violating compliance frameworks such as HIPAA and ISO 27001.",
    fix: "Migrate storage buckets to private access only and generate short-lived pre-signed URLs (e.g., AWS S3 / CloudFront signed URLs with 15-minute expiry).",
    technologies: ["React", "AWS S3", "CloudFront", "Cognito", "Python"],
    mitigationStrategy: "Implement short-lived pre-signed download tokens and block public bucket policies.",
    remediationType: "Signed URL Access Controls",
    riskLevel: "High"
  },
  {
    slug: "saas-cloud-isolation",
    title: "Cross-Tenant Leakage via Shared Connection Pooling",
    category: "Database Security",
    vulnerabilityClass: "Multi-Tenancy Isolation Flaw",
    problem: "A multi-tenant SaaS application shares database connection pools where custom ORM session variables can persist across concurrent requests.",
    exploit: "Identified shared connection contexts under high concurrency where session variables from one tenant leaked into queries of subsequent tenant sessions.",
    impact: "Potential leakage of organizational telemetry, records, and client metadata across tenant boundaries.",
    fix: "Enforce PostgreSQL Row-Level Security (RLS) policies at the database engine level and ensure connection pools clear session state on checkout.",
    technologies: ["PostgreSQL RLS", "AWS RDS", "Next.js", "Docker"],
    mitigationStrategy: "Enable database-level Row-Level Security (RLS) and strict pool context isolation.",
    remediationType: "Row-Level Security (RLS)",
    riskLevel: "Critical"
  },
  {
    slug: "ai-llm-data-leak",
    title: "Indirect Prompt Injection & Context Leakage in RAG Pipelines",
    category: "AI / LLM Application Security",
    vulnerabilityClass: "OWASP Top 10 for LLM — Prompt Injection",
    problem: "An AI-enabled SaaS tool queries a shared vector database without tenant-level metadata filters, allowing the LLM to access context across user accounts.",
    exploit: "Constructed adversarial prompts instructing the agent to summarize context documents beyond the user's authorized organizational workspace.",
    impact: "Exposure of confidential internal documentation and enterprise knowledge base records through AI output.",
    fix: "Enforce strict tenant ID metadata filtering on every vector query and implement output guardrails to prevent data leakage.",
    technologies: ["LangChain", "pgvector", "Pinecone", "OpenAI APIs", "Python", "FastAPI"],
    mitigationStrategy: "Apply deterministic metadata filtering on vector searches prior to LLM context ingestion.",
    remediationType: "Deterministic Context Filtering",
    riskLevel: "High"
  },
  {
    slug: "kubernetes-pod-breakout",
    title: "Host Namespace Escalation via Insecure Container Configurations",
    category: "Container & Kubernetes Security",
    vulnerabilityClass: "CIS Benchmark Misconfiguration",
    problem: "An e-commerce service runs containerized worker nodes with excessive volume mounting permissions.",
    exploit: "Leveraged hostPath volume mounts within a compromised pod to access the host node's root filesystem and retrieve cluster service tokens.",
    impact: "Full administrative takeover of the node and lateral movement across the Kubernetes cluster control plane.",
    fix: "Enforce Pod Security Standards to 'restricted', disable privileged execution, and mount filesystems as read-only.",
    technologies: ["Kubernetes", "Docker", "AWS EKS", "IAM Policies"],
    mitigationStrategy: "Apply restricted Pod Security Standards and eliminate hostPath mounts.",
    remediationType: "Pod Security Hardening",
    riskLevel: "High"
  }
];

export const TESTIMONIALS = [
  {
    quote: "We're a founder-led offensive security team based in Bangalore and Hyderabad, currently onboarding our first clients. Check our sample VAPT report and methodology below to see how we work.",
    name: "TrustLayerLabs Team",
    role: "Founder-Led Team",
    company: "Bangalore & Hyderabad",
    image: "/logo.jpeg",
    linkedin: ""
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
      "Signed VAPT Attestation Letter"
    ],
    cta: "Book a 20-Min Review",
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
      "Signed Attestation Letter & Security Badge"
    ],
    cta: "Book a 20-Min Review",
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
      "Priority SLA support responses",
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
    question: "How long does a standard security assessment or VAPT take?",
    answer: "A standard API or web application security assessment typically takes 5 to 10 business days depending on scope and endpoint count. For fast-moving startups with enterprise deal deadlines, we can prioritize high-risk attack surfaces and provide an initial findings debrief within 48 to 72 hours."
  },
  {
    question: "What specific attack surfaces does TrustLayerLabs test?",
    answer: "We perform deep manual and assisted testing across REST, GraphQL, and gRPC APIs, Single Page Applications, backend business logic, authentication mechanisms (OAuth/JWT), object-level authorization (BOLA/BFLA), tenant isolation boundaries in multi-tenant SaaS, cloud IAM configurations (AWS/GCP/Azure), and external perimeter services."
  },
  {
    question: "How do you test SaaS multi-tenant isolation and authorization logic?",
    answer: "We provision distinct tenant and role contexts in staging (e.g., Organization A User vs. Organization B Admin) and systematically attempt cross-tenant parameter substitution, horizontal privilege escalation, and direct object queries to verify that tenant boundaries cannot be breached under any payload manipulation."
  },
  {
    question: "Do you sign a Non-Disclosure Agreement (NDA) before testing?",
    answer: "Yes, absolutely. We execute a mutual NDA before receiving any architecture documentation, Swagger/Postman collections, or staging credentials. All findings, logs, reproduction steps, and vulnerability details are treated as strictly confidential and stored encrypted."
  },
  {
    question: "What deliverables and reports do our engineering teams receive?",
    answer: "You receive an executive summary for leadership, investors, and enterprise buyers, alongside a technical engineering report with exact reproduction steps, proof-of-concept payloads, root-cause analysis, and specific remediation code guidance (Node, Python, Go, Java) for each finding."
  },
  {
    question: "Is retesting included after our developers fix the vulnerabilities?",
    answer: "Yes, a 30-day retest is included on applicable assessments. Once your engineering team deploys patches to your staging environment, our security specialists re-evaluate the exact vulnerability vectors and issue an updated final report and Retest Verification Letter confirming the status of remediated findings."
  },
  {
    question: "Can TrustLayerLabs support our SOC 2 and ISO 27001 readiness?",
    answer: "Yes. In addition to technical penetration testing required for SOC 2 Type II and ISO 27001 Annex A controls, our GRC consultants assist with security policy development, risk registers, control-gap assessments, and enterprise vendor security questionnaire responses. We provide readiness advisory that prepares your team for formal external audit."
  },
  {
    question: "How do we scope an engagement and get started?",
    answer: "You can book a 20-minute scoping call with our lead security architects. We review your architecture, endpoint count, authentication complexity, and target timelines to deliver a transparent scope and fixed quote within 24 hours."
  }
];

export const WHO_WE_HELP = [
  {
    category: "B2B SaaS",
    badge: "Primary Focus • Multi-Tenant Platforms",
    description: "Multi-tenant applications, REST & GraphQL APIs, RBAC privilege models, and complex enterprise authorization workflows.",
    surfaces: [
      "Multi-tenant isolation and database row-level scoping.",
      "Broken object level authorization (BOLA / IDOR).",
      "Role-based access control (RBAC) escalation and role changes.",
      "REST and GraphQL microservice APIs and object graphs.",
      "OAuth 2.0 / JWT token hygiene and session revocation.",
      "Enterprise customer security reviews and audit readiness."
    ],
    cta: "Explore SaaS Security",
    href: "/services/saas-vapt"
  },
  {
    category: "AI SaaS",
    badge: "RAG & AI Agent Architectures",
    description: "RAG vector retrieval permissions, AI agent tool authorization, metadata filtering, and sensitive enterprise data protection.",
    surfaces: [
      "RAG vector database tenant separation and metadata filtering.",
      "Retrieval authorization and cross-document boundary testing.",
      "Direct retrieval APIs and stale document leakage prevention.",
      "Tool authorization and excessive agency in autonomous agents.",
      "Prompt injection and context boundary escapes.",
      "Citation, source, and system prompt leakage prevention."
    ],
    cta: "Explore AI Security",
    href: "/services/ai-security"
  },
  {
    category: "FinTech",
    badge: "Financial Platforms & Payments",
    description: "API-driven financial applications, ledger authorization, transaction workflows, and compliance-driven security requirements.",
    surfaces: [
      "Financial APIs and webhook signature verification.",
      "Transaction and payment state transition workflows.",
      "BOLA / IDOR on account balances, invoices, and ledgers.",
      "Multi-step approval and withdrawal verification logic.",
      "KYC and onboarding data protection controls.",
      "SOC 2, ISO 27001, RBI, and NPCI baseline alignment."
    ],
    cta: "Explore FinTech Security",
    href: "/fintech-security"
  }
];

export const SECURITY_BOUNDARIES = [
  {
    layer: "Identity",
    question: "Who is making the request?",
    focus: "Authentication integrity, JWT/OAuth signature validation, session binding, and stale session invalidation.",
    example: "Testing whether token claims match the true caller and cannot be forged, replayed, or manipulated."
  },
  {
    layer: "Tenant",
    question: "Which organization should they belong to?",
    focus: "Multi-tenant database boundaries, row-level security, ORM scoping, and async worker isolation.",
    example: "Ensuring an authenticated user from Tenant A cannot access, query, or mutate resources in Tenant B."
  },
  {
    layer: "Role",
    question: "What should this identity be allowed to do?",
    focus: "RBAC & ABAC enforcement, horizontal/vertical privilege escalation, and role transition updates.",
    example: "Testing whether demoted administrators or modified roles immediately lose access to elevated endpoints."
  },
  {
    layer: "Object",
    question: "Does this resource belong to them?",
    focus: "Broken Object Level Authorization (BOLA/IDOR) across direct, nested, and relational API routes.",
    example: "Probing whether manipulating resource IDs (/org/reports/8902 → 8903) exposes another customer's data."
  },
  {
    layer: "Action",
    question: "Is this specific action authorized?",
    focus: "Broken Function Level Authorization (BFLA), administrative operations, and hidden internal API routes.",
    example: "Validating whether standard members can execute administrative exports, billing edits, or role upgrades."
  },
  {
    layer: "State",
    question: "Does the current workflow state permit the action?",
    focus: "Business logic constraints, workflow manipulation, state transitions, replay, and race conditions.",
    example: "Verifying whether payment confirmation, trial upgrades, or approvals can be triggered out of sequence."
  }
];

export const PROBLEMS_WE_SOLVE = [
  {
    title: "Broken Object Level Authorization (BOLA / IDOR)",
    question: "Can User A access User B's data?",
    description: "Attackers change IDs in API calls to view other users' records. This bypasses access controls and leaks private customer files.",
    severity: "Critical",
    impact: "Cross-tenant data exposure and regulatory non-compliance"
  },
  {
    title: "Multi-Tenant Isolation Failures",
    question: "Can one tenant access another tenant?",
    description: "Shared databases and caches can leak data between accounts. We verify that each tenant's records stay strictly separated.",
    severity: "Critical",
    impact: "Customer data leaks and loss of enterprise buyer trust"
  },
  {
    title: "Alternate API Route Authorization Bypasses",
    question: "Can authorization be bypassed through a different API path?",
    description: "Teams often secure REST APIs but forget GraphQL or export endpoints. Attackers target these unprotected side doors.",
    severity: "Critical",
    impact: "Direct access to backend databases and internal admin tools"
  },
  {
    title: "Business Logic & Workflow Manipulation",
    question: "Can a workflow be manipulated?",
    description: "Scanners miss multi-step logic flaws. Attackers skip payment steps, replay coupons, or bypass approval workflows.",
    severity: "High",
    impact: "Direct financial loss and corrupted account state"
  },
  {
    title: "Role Transitions & Stale Permissions",
    question: "Can a user retain access after role changes or deletion?",
    description: "Demoted or removed users may keep old tokens. We test if revoked sessions still allow access to private company tools.",
    severity: "High",
    impact: "Unauthorized access by former staff and privilege leaks"
  },
  {
    title: "Background Jobs & Async Worker Isolation",
    question: "Can background jobs lose tenant context?",
    description: "Background workers can drop tenant context. This causes export tasks or webhooks to deliver data to the wrong customer.",
    severity: "High",
    impact: "Data sent to wrong client webhooks and notification channels"
  },
  {
    title: "AI / RAG Retrieval Authorization Failures",
    question: "Can an AI/RAG system retrieve protected information?",
    description: "AI tools often query vector stores without user permissions. This allows team members to read restricted executive documents.",
    severity: "High",
    impact: "Internal data leaks and unauthorized AI actions"
  },
  {
    title: "Enterprise Review & Compliance Blockers",
    question: "Can security gaps stall enterprise customer deals?",
    description: "Enterprise deals stall when buyers question your security. We provide the proof you need to pass vendor audits fast.",
    severity: "High",
    impact: "Delayed enterprise sales and blocked procurement reviews"
  }
];

export const CORE_PILLARS = [
  {
    id: "free-security-review",
    title: "Free Security Review",
    tier: "Entry • 20-Minute Confidential Conversation",
    tagline: "Scoping, Threat Model & Architecture Review",
    description: "A focused 20-minute scoping review under mutual NDA. We examine your architecture, API surface, auth model, and security objectives to recommend the exact testing scope needed.",
    deliverables: [
      "Mutual NDA executed upfront.",
      "API and tenant architecture boundary review.",
      "Prioritized vulnerability checklist for your stack.",
      "Transparent fixed-scope proposal within 24 hours."
    ],
    badge: "Entry Scoping • Zero Cost",
    href: "/free-assessment",
    ctaText: "Get Free Review",
    primaryAction: "review"
  },
  {
    id: "api-security-assessment",
    title: "API / SaaS Security Assessment",
    tier: "First Paid Engagement • Primary Focus",
    tagline: "Deep BOLA, Tenant Isolation & Business Logic",
    description: "Exhaustive manual offensive testing focused on authorization, BOLA/IDOR, RBAC, tenant isolation, authentication, business logic, and API workflows.",
    deliverables: [
      "In-depth BOLA/IDOR and object authorization testing.",
      "Multi-tenant database boundary and query isolation review.",
      "Developer-ready PoC reproduction scripts and code fixes.",
      "30-day verified retest included on applicable findings."
    ],
    badge: "First Paid Assessment",
    href: "/services/api-security",
    ctaText: "Discuss Scope",
    primaryAction: "scope"
  },
  {
    id: "full-vapt",
    title: "Full App + API + Cloud Assessment",
    tier: "Larger Engagement • Production & Audit Ready",
    tagline: "End-to-End Application, API & Cloud Pentest",
    description: "Comprehensive manual security testing across your frontend single-page app, microservice APIs, and supporting cloud infrastructure (AWS/GCP) for enterprise deals and audits.",
    deliverables: [
      "Full OWASP Top 10 and API Top 10 manual testing.",
      "Business logic and multi-step workflow abuse testing.",
      "Auditor-ready executive summary and technical report.",
      "30-day verified retest and verification letter."
    ],
    badge: "Enterprise & Audit",
    href: "/services/web-app-vapt",
    ctaText: "Request Assessment",
    primaryAction: "request"
  },
  {
    id: "enterprise-security-readiness",
    title: "Enterprise Readiness & Advisory",
    tier: "Expansion • SOC 2 / ISO 27001 Support",
    tagline: "Technical Control Mapping & Procurement Unblocking",
    description: "Technical security assessments, control mapping, and remediation guidance to unblock enterprise customer reviews and prepare for external compliance audits.",
    deliverables: [
      "SOC 2 Type II and ISO 27001 technical control mapping.",
      "Enterprise vendor security questionnaire guidance.",
      "Verified remediation letter for buyer procurement.",
      "Technical evidence and policy advisory support."
    ],
    badge: "Compliance Readiness",
    href: "/grc-readiness",
    ctaText: "Discuss Scope",
    primaryAction: "scope"
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Manual Testing Beyond Automated Scanners",
    description: "Automated tools find syntax and known signatures, but miss business logic, authorization boundaries, BOLA, and multi-step workflow bypasses. Our assessments are human-led and context-driven.",
    iconName: "UserCheck"
  },
  {
    title: "Built for Modern FinTech, SaaS & AI",
    description: "We understand modern tech stacks: multi-tenant databases, microservice APIs, OAuth/JWT flows, vector embeddings, and cloud-native architectures.",
    iconName: "Layers"
  },
  {
    title: "Developer-Friendly Findings & Remediation",
    description: "Clear, developer-focused reports designed for efficient remediation. Every finding includes exact reproduction steps, affected code paths, risk context, and practical remediation code snippets.",
    iconName: "Code"
  },
  {
    title: "Remediation Guidance + Retesting Included",
    description: "Identifying vulnerabilities is only the first step. We conduct debrief calls with your engineers, verify applied code fixes, and issue a verified retest confirmation letter.",
    iconName: "RefreshCw"
  },
  {
    title: "Integrated Technical Security + GRC Readiness",
    description: "Close the loop between technical pentesting and compliance readiness (SOC 2, ISO 27001, enterprise questionnaires) with unified security and governance expertise.",
    iconName: "ShieldCheck"
  },
  {
    title: "Collaborative & Transparent Assessments",
    description: "We work alongside your engineering workflow with clear communication, non-disruptive testing in staging, mutual NDAs, and founder-level accountability.",
    iconName: "Users"
  }
];

export const ASSESSMENT_PROCESS_STEPS = [
  {
    phase: "01",
    title: "Scope & Objectives",
    description: "Define testing boundaries, endpoints, user roles, compliance requirements, and mutual NDA execution."
  },
  {
    phase: "02",
    title: "Understand Architecture",
    description: "Analyze application architecture, API documentation, trust boundaries, data flows, and tenancy models."
  },
  {
    phase: "03",
    title: "Threat Modeling",
    description: "Identify high-risk assets, critical transaction paths, privilege escalation vectors, and potential abuse cases."
  },
  {
    phase: "04",
    title: "Manual Security Testing",
    description: "Perform deep manual testing targeting business logic, authorization (BOLA), authentication, and injection flaws."
  },
  {
    phase: "05",
    title: "Validate Findings",
    description: "Verify exploitability, eliminate false positives, and calculate CVSS risk scores tailored to business impact."
  },
  {
    phase: "06",
    title: "Developer-Ready Report",
    description: "Deliver actionable report with executive summary, step-by-step reproduction steps, and remediation code blocks."
  },
  {
    phase: "07",
    title: "Remediation Walkthrough",
    description: "Collaborative debrief with your engineering team to answer questions and assist with fix implementation."
  },
  {
    phase: "08",
    title: "Retest & Verification Letter",
    description: "Re-evaluate fixed vectors and issue an updated final report and Retest Verification Letter."
  }
];

export const TEAM = [
  {
    name: "Nagasrinivasa Rao",
    role: "Founder & Lead Security Architect",
    bio: "Offensive security architect specializing in manual API penetration testing. Focuses on authorization logic, BOLA flaws, and web application assessments.",
    initials: "NR",
    credentials: ["Web App Security", "VAPT Specialist", "API Security from IIT Guwahati"],
    education: "IIT Guwahati",
    linkedin: "https://www.linkedin.com/in/nagasrinivasarao9/"
  },
  {
    name: "Ramineni Teja",
    role: "Co-Founder & GRC Lead",
    bio: "Compliance and risk management lead for high-growth startups. Guides teams through ISO 27001 gap analysis, SOC 2 readiness, and security governance.",
    initials: "RT",
    credentials: ["ISO 27001 Readiness", "SOC 2 Readiness", "GRC Practitioner", "VIT Bhopal"],
    education: "VIT Bhopal",
    linkedin: "https://www.linkedin.com/in/ramineniteja"
  },
  {
    name: "Nayansi Anand",
    role: "Security Engineer & VAPT Consultant",
    bio: "Application security engineer specializing in manual web testing. Focuses on OWASP Top 10 vulnerabilities and practical developer fix guidance.",
    initials: "NA",
    credentials: ["Web App Security", "VAPT Specialist", "VIT Bhopal"],
    education: "VIT Bhopal",
    linkedin: "https://www.linkedin.com/in/nayansi-anand-35a99a31b/"
  },
  {
    name: "Muskan Jha",
    role: "Operations & Engagement Lead",
    bio: "Operations lead coordinating scoping reviews and onboarding. Manages mutual NDAs and assessment schedules for fast, seamless delivery.",
    initials: "MJ",
    credentials: ["Operations Lead", "VIT Bhopal"],
    education: "VIT Bhopal",
    linkedin: "https://www.linkedin.com/in/muskan-jha-795828350/"
  }
];



