export const BRAND = {
  name: "TrustLayerLabs",
  website: "https://trustlayerlabs.co.in",
  contact: {
    email: "security@trustlayerlabs.co.in",
    phone: "+91 88224 02811",
    whatsapp: "https://wa.me/918822402811",
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
      { name: "SaaS VAPT & Pentests", href: "/services/saas-vapt", description: "Multi-tenant tenant isolation and privilege scaling audits" },
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
    slug: "fintech-api-security",
    title: "Prevented BOLA Data Leakage & Secured FinTech Core Banking API",
    category: "FinTech",
    problem: "A Neo-Banking Startup was launching their API platform, but security scanning failed to check complex multi-step authorization logic.",
    exploit: "Identified access boundary vulnerability where row-level queries on transfer endpoints failed to check context tenant ownership.",
    impact: "Potential leakage of financial records of over 120,000 users, leading to RBI compliance violations and brand loss.",
    fix: "Implemented resource-level authorization validation filters, cryptographically signed entity IDs, and rate limits.",
    technologies: ["Node.js", "Redis", "JWT", "AWS WAF", "Postgres"],
    metrics: "120k records secured, blocking potential $1.2M fraud volume",
    results: "100% compliance with RBI Annex G rules, reduced audit prep cycle by 45%",
    vulnerabilitiesIdentified: "1 Critical (BOLA), 3 High (Auth Bypass, Rate Limit)",
    remediationTime: "48 Hours",
    securityImprovement: "99/100 (A+ Grade)",
    retestStatus: "100% Patched & Verified"
  },
  {
    slug: "healthtech-compliance",
    title: "Secured HealthTech Patient Portals for Fast-Track HIPAA Compliance",
    category: "HealthTech",
    problem: "A fast-growing HealthTech platform failed an enterprise hospital's onboarding assessment due to insufficient HIPAA controls and exposed patient file URLs.",
    exploit: "Diagnosed exposed storage buckets lacking pre-signed authorization tokens, permitting resource queries on sensitive records.",
    impact: "Exposed sensitive patient records, threatening massive HIPAA penalties and blocking a $450k annual recurring revenue enterprise deal.",
    fix: "Migrated files to private buckets with short-lived AWS CloudFront signed cookies and integrated OAuth2 controls.",
    technologies: ["React", "AWS S3", "CloudFront", "Cognito", "Python"],
    metrics: "Passed HIPAA & SOC2 controls audit in 14 days with zero deficiencies",
    results: "Successfully closed a $450k ARR contract within 3 weeks of retest",
    vulnerabilitiesIdentified: "2 Critical (Insecure Buckets, Lack of Auditing), 1 High (Broken Auth)",
    remediationTime: "72 Hours",
    securityImprovement: "95/100 (A Grade)",
    retestStatus: "100% Patched & Verified"
  },
  {
    slug: "saas-cloud-isolation",
    title: "Hardened SaaS Multi-Tenant Connection Pooling on AWS Cloud",
    category: "SaaS Startup",
    problem: "A B2B SaaS tool had complex database queries where tenant filters could be bypassed using SQL structures, resulting in potential cross-tenant leakage.",
    exploit: "Identified connection pool context overlap inside custom ORM configurations, permitting session telemetry leak across tenancy boundaries.",
    impact: "Uncontrolled access to company telemetry, dashboards, and client files, which would ruin customer trust.",
    fix: "Redefined connection pool configuration to apply row-level security (RLS) on PostgreSQL, separating database contexts.",
    technologies: ["PostgreSQL RLS", "AWS RDS", "Next.js", "Docker", "Kubernetes"],
    metrics: "Verified 100% database boundary isolation under 15,000 concurrent threads",
    results: "Reduced client security questionnaire review time from 3 weeks to 24 hours",
    vulnerabilitiesIdentified: "1 Critical (Cross-Tenant Leakage), 2 High (Privilege Escalation)",
    remediationTime: "24 Hours",
    securityImprovement: "97/100 (A+ Grade)",
    retestStatus: "100% Patched & Verified"
  },
  {
    slug: "ai-llm-data-leak",
    title: "Blocked Prompt Injection & RAG Data Leakage in AI-Agent Core",
    category: "AI Startup",
    problem: "An AI-powered SaaS startup built on LangChain and pgvector had complex agent queries that did not validate user tenant boundaries inside RAG vector search context pools.",
    exploit: "Exploited prompt injection vector to force the LLM context query to leak confidential databases and document uploads from separate tenants.",
    impact: "Exposed private corporate strategy files of enterprise accounts, risking contract breach and trust loss.",
    fix: "Configured metadata filtering in vector searches to restrict database query scopes strictly by the tenant ID context.",
    technologies: ["LangChain", "pgvector", "Pinecone", "OpenAI APIs", "Python", "FastAPI"],
    metrics: "100% secure vector context query isolation across all user tenant spaces",
    results: "Cleared enterprise AI safety audit, unlocking a $120k pilot deployment",
    vulnerabilitiesIdentified: "2 Critical (Indirect Prompt Injection, Context Leakage), 2 High",
    remediationTime: "36 Hours",
    securityImprovement: "98/100 (A+ Grade)",
    retestStatus: "100% Patched & Verified"
  },
  {
    slug: "kubernetes-pod-breakout",
    title: "Mitigated Kubernetes Host Namespace Pod Breakouts in E-Commerce Cluster",
    category: "Cloud Security",
    problem: "An e-commerce gateway ran merchant integrations in isolated Docker containers, but the Kubernetes configuration allowed host namespace access.",
    exploit: "Bypassed cluster boundaries through hostPath mounting exploit to gain root privileges on the control plane node.",
    impact: "Potential complete takeover of payment processing containers and cloud service credentials.",
    fix: "Enforced Pod Security Standards to 'restricted', disabled privileged pods, and configured read-only root filesystems.",
    technologies: ["Kubernetes", "Docker", "AWS EKS", "Kube-bench", "IAM Policies"],
    metrics: "Secured 85 production microservices nodes, patching hostPath vulnerabilities",
    results: "Passed annual PCI-DSS v4.0 Level 1 technical segmentation requirements",
    vulnerabilitiesIdentified: "1 Critical (Host Namespace Breakout), 4 High (Docker/K8s Privileges)",
    remediationTime: "5 Days",
    securityImprovement: "96/100 (A+ Grade)",
    retestStatus: "100% Patched & Verified"
  },
  {
    slug: "web3-defi-reentrancy",
    title: "Audited DeFi Staking Smart Contracts, Securing $4.2M Liquidity Pools",
    category: "Web3/DeFi",
    problem: "A decentralized liquidity staking protocol was prepping for launch, but custom payout calculation triggers were vulnerable to state reentrancy.",
    exploit: "Identified logic path where contract payout transactions executed external calls before updating the internal ledger balance state.",
    impact: "Potential drainage of the entire $4.2M staking token pool on mainnet deploy.",
    fix: "Restructured Solidity methods to apply Checks-Effects-Interactions pattern and integrated OpenZeppelin ReentrancyGuard.",
    technologies: ["Solidity", "Slither", "EVM bytecode", "Hardhat", "ERC-20"],
    metrics: "$4.2M total value locked (TVL) protected against EVM reentrancy calls",
    results: "Delivered formal math-verification report with 100% patch attestation",
    vulnerabilitiesIdentified: "1 Critical (State Reentrancy Payout Bypass), 2 Medium",
    remediationTime: "12 Hours",
    securityImprovement: "100/100 (A+ Grade)",
    retestStatus: "100% Patched & Verified"
  },
  {
    slug: "mobile-banking-key-leak",
    title: "Remediated Decryption Key Extraction Vulnerability in Android/iOS Wallet",
    category: "Mobile VAPT",
    problem: "A mobile banking wallet app stored local user cache databases encrypted, but the decryption key seed was compiled inside the binary files.",
    exploit: "Decompiled the Android APK and iOS IPA files using Jadx and Hopper, extracted the cryptographic key, and decrypted local files.",
    impact: "Loss of transaction telemetry and local authorization cookies on compromised client devices.",
    fix: "Migrated local storage encryption to Android KeyStore and iOS Keychain services using hardware-backed key seeds.",
    technologies: ["Frida", "Jadx", "Hopper", "Android KeyStore", "iOS Keychain", "React Native"],
    metrics: "200k+ mobile wallets hardened using Hardware-backed KeyStore/Keychain",
    results: "Achieved Indian FinTech regulatory standards compliance, avoiding warning fines",
    vulnerabilitiesIdentified: "1 Critical (Hardcoded Decryption Key), 3 High (SSL Pinning Bypass, Cache Leak)",
    remediationTime: "4 Days",
    securityImprovement: "94/100 (A Grade)",
    retestStatus: "100% Patched & Verified"
  }
];

export const TESTIMONIALS = [
  {
    quote: "TrustLayerLabs was a game-changer. They identified a critical auth bypass in our billing API within 12 hours. Their report was incredibly clear, and they even retested our fixes overnight. Absolute lifesavers.",
    name: "Siddharth Sharma",
    role: "Co-Founder & CTO",
    company: "PayFlow India",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
    linkedin: "https://www.linkedin.com/in/siddharth-payflow"
  },
  {
    quote: "Enterprise procurement used to take months for us. Thanks to TrustLayerLabs' SOC2 readiness program and manual penetration testing attestation, we cleared our largest enterprise audit in just 3 days.",
    name: "Ananya Roy",
    role: "VP of Engineering",
    company: "CareOS",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
    linkedin: "https://www.linkedin.com/in/ananya-careos"
  },
  {
    quote: "Outstanding experience. Unlike automated tools that throw hundreds of false positives, TrustLayerLabs focused on logical issues. They found an IDOR that could have cost us our Series A.",
    name: "Rohan Deshmukh",
    role: "CEO & Founder",
    company: "LogixLabs",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200",
    linkedin: "https://www.linkedin.com/in/rohan-logixlabs"
  },
  {
    quote: "Securing our transaction corridors required deep logical understanding. TrustLayerLabs discovered a severe rate limiting and parameter injection flaw on our API gateway within 24 hours. Exceptionally precise manual pentesting.",
    name: "Karan Malhotra",
    role: "Head of Infrastructure & Security",
    company: "ZetaPay",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200&h=200",
    linkedin: "https://www.linkedin.com/in/karan-zeta-sec"
  },
  {
    quote: "Their team doesn't just run tools. They manually trace how tenants interact. They found a multi-tenancy context leakage vulnerability in our vector store query logic that automated scanners completely missed. Incredible attention to detail.",
    name: "Sneha Iyer",
    role: "Director of Product Security",
    company: "DocuVault",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
    linkedin: "https://www.linkedin.com/in/sneha-docuvault"
  },
  {
    quote: "As a fintech brand, compliance guidelines are non-negotiable. TrustLayerLabs delivered a professional RBI-compliant VAPT report and verified our security patches in a follow-up retest. Onboarding enterprise banking clients became a breeze.",
    name: "Vikram Aditya",
    role: "CTO",
    company: "NeoCred",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
    linkedin: "https://www.linkedin.com/in/vikram-neocred-cto"
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

export const TEAM = [
  {
    name: "Nagasrinivasa Rao",
    role: "Founder & Lead Security Architect",
    bio: "Offensive security professional with 2+ years auditing enterprise APIs, SaaS, and financial transaction portals. CEH, eWPT, VAPT, and Network Pentesting certified.",
    initials: "NR",
    credentials: ["CEH", "eWPT", "VAPT", "Network Pentesting"],
    linkedin: "https://www.linkedin.com/in/nagasrinivasa-rao-a9b08493"
  },
  {
    name: "Bakkina Pavan Kumar",
    role: "CTO",
    bio: "Lead technology officer with 2+ years of experience specializing in secure application architectures, cloud systems hardening, and network vulnerability assessment.",
    initials: "BP",
    credentials: ["CEH", "VAPT", "Network Pentesting"],
    linkedin: "https://www.linkedin.com/in/bakkina-pavan-kumar"
  },
  {
    name: "Ramineni Teja",
    role: "Co-Founder & CMO",
    bio: "GRC consultant leading compliance roadmaps, ISO 27001 gaps audits, and automated SOC2 readiness configurations for client platforms.",
    initials: "RT",
    credentials: ["ISO 27001 LA", "SOC2 Auditor"],
    linkedin: "https://www.linkedin.com/in/ramineniteja"
  },
  {
    name: "Nayansi Anand",
    role: "Security Engineer & Lead VAPT Consultant",
    bio: "Pentester specializing in manual application penetration testing, OWASP Top 10 web vulnerabilities, and security research.",
    initials: "NA",
    credentials: ["CEH", "VAPT Specialist"],
    linkedin: "https://www.linkedin.com/in/nayansi-anand"
  },
  {
    name: "Muskan Jha",
    role: "HR & Operations Lead",
    bio: "Manages organizational recruitment, onboarding workflows, and corporate administrative client relationships.",
    initials: "MJ",
    credentials: ["HR Lead"],
    linkedin: "https://www.linkedin.com/in/muskan-jha"
  }
];


