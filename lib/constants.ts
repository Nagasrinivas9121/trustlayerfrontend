export const BRAND = {
  name: "TrustLayerLabs",
  website: "https://trustlayerlabs.co.in",
  contact: {
    email: "security@trustlayerlabs.co.in",
    phone: "+91 88224 02811",
    whatsapp: "https://wa.me/918822402811",
    linkedin: "https://www.linkedin.com/company/trustlayerlabs1/",
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
      { name: "FinTech Security Testing", href: "/fintech-security", description: "Payment logic, transaction workflows, and financial API audits" },
      { name: "GRC & Enterprise Readiness", href: "/grc-readiness", description: "SOC 2, ISO 27001 readiness, security policies & questionnaires" },
      { name: "SaaS VAPT & Pentests", href: "/services/saas-vapt", description: "Multi-tenant tenant isolation and privilege scaling audits" },
      { name: "Cloud Security Audit", href: "/services/cloud-security", description: "AWS, GCP, & Azure CIS Benchmark and IAM audits" },
      { name: "AI Application Security", href: "/services/ai-security", description: "OWASP Top 10 for LLMs, prompt injection, & RAG data safety" },
      { name: "Mobile App VAPT", href: "/services/mobile-vapt", description: "iOS & Android dynamic/static security assessment" },
      { name: "Network Pentesting", href: "/services/network-pentesting", description: "External & internal network perimeter penetration testing" },
      { name: "Kubernetes Security", href: "/services/kubernetes-security", description: "Pod policies, RBAC, container image & cluster security" },
      { name: "Startup Security & GRC", href: "/services/startup-security", description: "SOC 2 Type II, ISO 27001, and enterprise vendor audit prep" },
      { name: "SOC 2 Compliance Pentest", href: "/services/soc2-pentesting", description: "Attestation & technical controls verification for SOC 2 Type II" },
      { name: "FinTech Compliance Pentest", href: "/services/fintech-vapt", description: "RBI, SEBI, NPCI guidelines, and banking compliance audits" },
      { name: "AWS Cloud Security Audit", href: "/services/aws-security", description: "AWS IAM policies, S3 exposure, and KMS credential hardening" },
      { name: "Smart Contract & Web3 Audit", href: "/services/smart-contract-audit", description: "Staking logic, reentrancy vulnerabilities, and Solidity audits" },
      { name: "ISO 27001 VAPT Audit", href: "/services/iso-27001-vapt", description: "Annex A technical controls and network perimeter security reviews" },
      { name: "HIPAA Security Audit", href: "/services/hipaa-vapt", description: "ePHI encryption, access controls, and hospital vendor audits" },
      { name: "Active Directory Audit", href: "/services/active-directory-pentesting", description: "Domain controller exploits, credential dumping, and AD hardening" },
      { name: "External Attack Surface Audit", href: "/services/external-attack-surface", description: "Perimeter threat detection, subdomain takeovers, and open ports checks" },
      { name: "PCI-DSS Compliance Pentest", href: "/services/pci-dss-pentesting", description: "Cardholder data environments (CDE) segmentation validation audits" }
    ]
  },
  { name: "FinTech Security", href: "/fintech-security" },
  { name: "GRC Readiness", href: "/grc-readiness" },
  { name: "Methodology", href: "/methodology" },
  { name: "Sample Report", href: "/sample-report" },
  { name: "Checklist", href: "/checklist" },
  { name: "Blog", href: "/blog" },
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
    outcome: "Close trust gaps for compliance auditors and fast-track your SOC 2 Type II audit certificate."
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
      "SEBI/RBI regulatory compliance report",
      "Data localization & encryption audit",
      "Vulnerability assessment attestation",
      "NPCI UPI integration safety checks"
    ],
    outcome: "Satisfy Indian banking and regulatory compliance audits to launch and process financial data."
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
    outcome: "Secure the technical control benchmarks required to pass ISO 27001 certification audits."
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
    outcome: "Meet PCI-DSS requirements to securely process credit card transactions without audit blocks."
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
    answer: "Yes, retesting is included in every assessment. Once your engineering team deploys patches to your staging environment, our security specialists re-evaluate the exact vulnerability vectors and issue an updated final report and Retest Verification Letter confirming the status of remediated findings."
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
    category: "FinTech",
    badge: "Financial Platforms & Payments",
    description: "Securing high-trust financial applications, payment flows, and regulatory compliance requirements before handling customer funds.",
    surfaces: [
      "Financial APIs & Webhooks",
      "Transaction & Payment Workflows",
      "Authentication & Multi-Factor Mechanisms",
      "BOLA / IDOR on Account Balances",
      "KYC & Onboarding Data Pipelines",
      "RBI & NPCI Technical Baseline Alignment"
    ],
    cta: "Explore FinTech Security",
    href: "/fintech-security"
  },
  {
    category: "SaaS",
    badge: "B2B & Multi-Tenant Platforms",
    description: "Hardening tenant boundaries, API authorization, and access controls to pass rigorous enterprise procurement reviews.",
    surfaces: [
      "Multi-Tenant Isolation Boundaries",
      "Role-Based Access Control (RBAC)",
      "Cross-Tenant Data Leakage Vectors",
      "REST & GraphQL Microservices",
      "OAuth 2.0 / JWT Token Validation",
      "SOC 2 & Enterprise Buyer Security Audits"
    ],
    cta: "Explore SaaS VAPT",
    href: "/services/saas-vapt"
  },
  {
    category: "AI Companies",
    badge: "AI-Enabled & GenAI Applications",
    description: "Evaluating unique attack surfaces across LLM integrations, RAG vector stores, and AI application workflows.",
    surfaces: [
      "AI / LLM Application Attack Surfaces",
      "RAG Vector Database Tenant Separation",
      "Prompt Injection & System Prompt Bypasses",
      "API Access Governance & Key Management",
      "Sensitive Training Data Safeguards",
      "Cloud Infrastructure & Model APIs"
    ],
    cta: "Explore AI Security",
    href: "/services/ai-security"
  }
];

export const PROBLEMS_WE_SOLVE = [
  {
    title: "Broken API Authorization (BOLA / IDOR)",
    description: "Flaws where manipulating object identifiers in API parameters lets authenticated users query or alter another user's private data.",
    severity: "Critical",
    impact: "Cross-account data exposure and compliance breaches"
  },
  {
    title: "Authentication & Token Weaknesses",
    description: "Improper JWT validation, session fixation, unverified algorithm headers, or flawed OAuth handshake workflows.",
    severity: "Critical",
    impact: "Account takeover and unauthorized administrative access"
  },
  {
    title: "Business-Logic & Workflow Flaws",
    description: "Exploiting multi-step workflows, race conditions, coupon abuse, or parameter manipulation that scanners cannot understand.",
    severity: "High",
    impact: "Financial loss, transaction bypass, and service disruption"
  },
  {
    title: "Cross-Tenant Access in SaaS",
    description: "Database context leaks and missing tenant ownership checks in ORM queries allowing Tenant A to access Tenant B's data.",
    severity: "Critical",
    impact: "Severe customer trust erosion and contract violations"
  },
  {
    title: "Cloud IAM & Infrastructure Exposure",
    description: "Over-permissive cloud roles, unauthenticated S3/GCS buckets, and container breakout vectors across AWS, GCP, and Azure.",
    severity: "High",
    impact: "Infrastructure takeover and lateral network movement"
  },
  {
    title: "Enterprise Review & Compliance Gaps",
    description: "Failing enterprise vendor security questionnaires, missing technical controls for SOC 2 or ISO 27001, or stalled sales deals.",
    severity: "Compliance",
    impact: "Delayed enterprise revenue and prolonged sales cycles"
  }
];

export const CORE_PILLARS = [
  {
    id: "api-web-security",
    title: "API & Web Application Security",
    tagline: "Deep Manual Testing for Modern Architectures",
    description: "Comprehensive vulnerability assessment and penetration testing targeting OWASP Top 10, API security flaws, BOLA/IDOR, and authentication logic across modern React, Next.js, and API microservices.",
    deliverables: [
      "Manual API logic & authorization testing",
      "Step-by-step reproduction PoCs & code fixes",
      "Executive summary for leadership & buyers",
      "30-day retesting and signed attestation"
    ],
    badge: "Core Technical Pillar",
    href: "/services/api-security",
    ctaText: "Explore API & Web Testing"
  },
  {
    id: "fintech-security-testing",
    title: "FinTech Security Testing",
    tagline: "Purpose-Built for Financial Workflows & APIs",
    description: "Offensive security testing tailored for financial platforms, payment integrations, KYC pipelines, and regulatory frameworks (RBI, NPCI, SEBI) to safeguard monetary transactions and sensitive customer data.",
    deliverables: [
      "Financial API & payment logic verification",
      "Transaction tampering & race condition tests",
      "Regulatory baseline security mapping",
      "Remediation support & retesting letter"
    ],
    badge: "Specialized Industry Pillar",
    href: "/fintech-security",
    ctaText: "Explore FinTech Security"
  },
  {
    id: "cloud-infrastructure-security",
    title: "Cloud & Infrastructure Security",
    tagline: "CIS Benchmarks & Least-Privilege IAM",
    description: "Rigorous configuration and IAM audits across AWS, GCP, Azure, Kubernetes clusters, and external network perimeters to eliminate privilege creep, data exposure, and container breakouts.",
    deliverables: [
      "Cloud IAM least-privilege matrix review",
      "Storage bucket & database exposure checks",
      "Kubernetes RBAC & pod security audit",
      "External perimeter attack surface audit"
    ],
    badge: "Infrastructure Pillar",
    href: "/services/cloud-security",
    ctaText: "Explore Cloud Security"
  },
  {
    id: "grc-enterprise-readiness",
    title: "Governance, Risk & Compliance (GRC)",
    tagline: "SOC 2, ISO 27001 & Enterprise Security Reviews",
    description: "Strategic readiness advisory and technical control alignment to help fast-growing SaaS and FinTech startups pass enterprise customer security assessments and prepare for accredited compliance audits.",
    deliverables: [
      "SOC 2 Type II & ISO 27001 control gap analysis",
      "Custom security policy templates & risk registers",
      "Vendor security questionnaire assistance",
      "Technical pentest evidence documentation"
    ],
    badge: "Enterprise Readiness Pillar",
    href: "/grc-readiness",
    ctaText: "Explore GRC Readiness"
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
    bio: "Offensive security practitioner specializing in manual API penetration testing, authorization logic, and cloud security architectures. CEH, eWPT, and VAPT certified.",
    initials: "NR",
    credentials: ["CEH", "eWPT", "VAPT Specialist", "Network Pentesting"],
    linkedin: "https://www.linkedin.com/in/nagasrinivasa-rao-a9b08493"
  },
  {
    name: "Bakkina Pavan Kumar",
    role: "CTO & Cloud Security Lead",
    bio: "Systems architect and security engineer leading cloud infrastructure audits, Kubernetes hardening, and network vulnerability assessments.",
    initials: "BP",
    credentials: ["CEH", "VAPT Specialist", "Cloud Security"],
    linkedin: "https://www.linkedin.com/in/bakkina-pavan-kumar"
  },
  {
    name: "Ramineni Teja",
    role: "Co-Founder & GRC Lead",
    bio: "Compliance and risk management practitioner assisting high-growth startups with ISO 27001 gap analysis, SOC 2 readiness roadmaps, and security governance.",
    initials: "RT",
    credentials: ["ISO 27001", "SOC 2 Readiness", "GRC Practitioner"],
    linkedin: "https://www.linkedin.com/in/ramineniteja"
  },
  {
    name: "Nayansi Anand",
    role: "Security Engineer & VAPT Consultant",
    bio: "Application security engineer focused on manual web application testing, OWASP Top 10 vulnerabilities, and developer remediation support.",
    initials: "NA",
    credentials: ["CEH", "VAPT Specialist"],
    linkedin: "https://www.linkedin.com/in/nayansi-anand"
  },
  {
    name: "Muskan Jha",
    role: "Operations & Engagement Lead",
    bio: "Coordinates scoping, mutual NDAs, scheduling, and client onboarding workflows for seamless assessment delivery.",
    initials: "MJ",
    credentials: ["Operations Lead"],
    linkedin: "https://www.linkedin.com/in/muskan-jha"
  }
];



