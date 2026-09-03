import type { Metadata } from "next";
import Link from "next/link";
import { 
  ShieldCheck, 
  ArrowRight, 
  Calendar, 
  CheckCircle2, 
  Lock, 
  FileText, 
  Layers, 
  CreditCard, 
  AlertTriangle, 
  Database, 
  KeyRound,
  FileCheck,
  Server,
  Code,
  CheckCircle,
  HelpCircle,
  Clock,
  ChevronRight,
  Info,
  ShieldAlert
} from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "FinTech VAPT and API Security Testing",
  description: "Manual FinTech VAPT services for APIs, payment workflows, and cloud infra. Actionable remediation guidance, developer PoCs, and free retesting.",
  keywords: [
    "fintech vapt services",
    "fintech penetration testing services",
    "fintech security testing",
    "fintech application security testing",
    "fintech API security testing",
    "VAPT for fintech companies",
    "payment API security testing",
    "fintech cybersecurity assessment",
    "financial application penetration testing"
  ],
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/fintech-security",
  },
  openGraph: {
    title: "FinTech VAPT and API Security Testing | TrustLayerLabs",
    description: "Manual FinTech VAPT services for APIs, payment workflows, and cloud infra. Actionable remediation guidance, developer PoCs, and free retesting.",
    url: "https://www.trustlayerlabs.co.in/fintech-security",
    siteName: "TrustLayerLabs",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FinTech VAPT and API Security Testing | TrustLayerLabs",
    description: "Manual FinTech VAPT services for APIs, payment workflows, and cloud infra. Actionable remediation guidance, developer PoCs, and free retesting.",
  },
};

const attackSurfaces = [
  {
    title: "Financial APIs & Webhooks",
    description: "Deep testing of transaction endpoints, webhook callback verification, replay resistance, and payload tampering across REST, GraphQL, and gRPC services.",
    icon: CreditCard
  },
  {
    title: "Authorization & BOLA / IDOR",
    description: "Systematically verifying that authenticated users cannot manipulate identifiers to view or modify other accounts, balances, statements, or payment methods.",
    icon: KeyRound
  },
  {
    title: "Payment & Transaction Logic",
    description: "Evaluating transaction-state manipulation, negative amount inputs, race conditions in ledger payouts, coupon stacking, and settlement workflow abuse.",
    icon: Lock
  },
  {
    title: "Authentication & Session Security",
    description: "Auditing OAuth 2.0 handshakes, JWT signature verification, biometric authorization handoffs, session fixation, and step-up authentication on fund movements.",
    icon: ShieldCheck
  },
  {
    title: "KYC & PII Data Protection",
    description: "Testing document upload mechanisms, pre-signed cloud storage token access, and server-side encryption for identity verification and customer records.",
    icon: Database
  },
  {
    title: "Role-Based Access Boundaries",
    description: "Testing horizontal and vertical privilege escalation between customer tiers, merchant accounts, support agents, and administrative dashboards.",
    icon: Layers
  },
  {
    title: "API Rate Limiting & Abuse",
    description: "Assessing brute-force defenses, OTP enumeration limits, credential stuffing exposure, and endpoint consumption on high-risk transaction APIs.",
    icon: ShieldAlert
  },
  {
    title: "Cloud Infrastructure & Secrets",
    description: "Where included in scope, examining IAM least privilege, S3/GCS bucket access, API key storage, KMS key hygiene, and perimeter exposure.",
    icon: Server
  }
];

const paymentVectors = [
  {
    title: "Transaction-State Manipulation",
    desc: "Testing if client-side parameters, gateway callbacks, or intercepted payloads can alter transaction amounts, currency codes, or completion statuses."
  },
  {
    title: "Race Conditions in Ledgers",
    desc: "Simulating concurrent withdrawal, transfer, or redemption requests to detect double-spending or ledger synchronization flaws."
  },
  {
    title: "Webhook Signature & Replay Attacks",
    desc: "Verifying HMAC signature verification, timestamp validation, and replay prevention on payment gateway and bank notification webhooks."
  },
  {
    title: "Authorization on Payment Methods",
    desc: "Testing if stored cards, bank mandates, or UPI handles can be accessed, modified, or initiated across unauthorized customer sessions."
  },
  {
    title: "Business-Rule & Discount Bypasses",
    desc: "Assessing promo code abuse, fee calculations, tiered fee overrides, and cashback redemption workflows against logical exploitation."
  },
  {
    title: "Refund & Chargeback Logic",
    desc: "Evaluating whether refund triggers, partial cancellations, or reversal endpoints can be manipulated to release unauthorized credits."
  }
];

const apiSecurityPoints = [
  {
    code: "BOLA / IDOR",
    title: "Broken Object Level Authorization",
    desc: "Verifying whether API routes enforce strict resource-level ownership validation on account IDs, wallets, statements, and transaction records."
  },
  {
    code: "BFLA",
    title: "Broken Function Level Authorization",
    desc: "Testing if regular customer or merchant tokens can invoke administrative API functions, bulk export endpoints, or privileged config routes."
  },
  {
    code: "JWT / OAuth",
    title: "Token Validation & Session State",
    desc: "Auditing token signing algorithms, 'none' algorithm bypasses, weak HMAC secrets, claim injection, and revocation mechanisms."
  },
  {
    code: "Mass Assignment",
    title: "Object Property Level Manipulation",
    desc: "Testing if unexpected JSON properties in API requests can alter account balance flags, verification statuses, or user roles."
  },
  {
    code: "Excessive Exposure",
    title: "Sensitive Financial Data Filtering",
    desc: "Ensuring backend APIs do not transmit complete user profiles, account numbers, or internal metadata to client apps relying on frontend filtering."
  },
  {
    code: "Rate Limiting",
    title: "API Abuse & Concurrency Controls",
    desc: "Testing brute-force controls on OTP generation, card validation attempts, payment retries, and high-volume data scraping."
  }
];

const kycSecurityPoints = [
  {
    title: "Identity-Verification State Manipulation",
    desc: "Testing whether intermediate onboarding steps (e.g., pending document review) can be bypassed to access full transaction features."
  },
  {
    title: "Document Upload & Storage Security",
    desc: "Auditing file upload handlers for arbitrary file execution, metadata stripping, and pre-signed storage URL expiration limits."
  },
  {
    title: "PII Access Control & Tenant Boundaries",
    desc: "Verifying that identity documents (Aadhaar, PAN, passports, bank statements) cannot be retrieved across different user or organization IDs."
  },
  {
    title: "Account Creation & OTP Flaws",
    desc: "Assessing mobile/email verification endpoints for OTP brute-forcing, response manipulation, or parameter tampering."
  }
];

const methodologySteps = [
  { step: "01", title: "Scope & Architecture Review", desc: "Define target API endpoints, payment workflows, staging credentials, user roles, and mutual NDA execution." },
  { step: "02", title: "Threat Modeling", desc: "Map critical financial data paths, trust boundaries, third-party webhook integrations, and high-impact transaction vectors." },
  { step: "03", title: "Manual Application & API Testing", desc: "Human-led offensive testing targeting business logic, BOLA/IDOR, session handling, parameter tampering, and payment flows." },
  { step: "04", title: "Finding Validation", desc: "Manually verify exploitability to reduce false positives, providing reproduction scripts and CVSS v3.1 risk scores." },
  { step: "05", title: "Developer-Ready Reporting", desc: "Deliver comprehensive technical report with executive summary, reproducible PoC payloads, root cause, and code remediation commits." },
  { step: "06", title: "Remediation Guidance", desc: "Engineering debrief call to walk developers through findings, review proposed patches, and clarify fix requirements." },
  { step: "07", title: "Retesting", desc: "Re-evaluate patched endpoints and logic fixes deployed to your staging environment to confirm effective remediation." },
  { step: "08", title: "Retest Verification Letter", desc: "Issue updated final report and formal Retest Verification Letter documenting remediated findings for partners and investors." }
];

const deliverables = [
  {
    title: "Penetration Testing Report",
    desc: "Complete technical findings breakdown with CVSS v3.1 scoring, affected endpoints, and vulnerability classifications."
  },
  {
    title: "Executive Security Summary",
    desc: "A concise, business-oriented risk summary tailored for leadership, bank sponsors, board members, and institutional investors."
  },
  {
    title: "Reproducible PoC Scripts & Evidence",
    desc: "Step-by-step reproduction steps, curl requests, and raw HTTP payloads demonstrating exact vulnerability conditions."
  },
  {
    title: "Remediation Guidance & Code Patches",
    desc: "Practical code fixes and architectural recommendations for Node.js, Python, Go, Java, and cloud configurations."
  },
  {
    title: "Retest Results & Updated Report",
    desc: "Re-evaluation of patched vulnerabilities to confirm resolution before final release."
  },
  {
    title: "Retest Verification Letter",
    desc: "Formal confirmation letter detailing the assessment scope, retested status, and remediation completion."
  }
];

const faqs = [
  {
    q: "What is FinTech VAPT?",
    a: "FinTech VAPT (Vulnerability Assessment and Penetration Testing) is a specialized security testing methodology for financial applications, APIs, payment gateways, and cloud infrastructure. It combines automated vulnerability scanning with deep manual offensive testing to identify exploitable vulnerabilities in business logic, authorization boundaries (BOLA/IDOR), authentication mechanisms, and transaction pipelines."
  },
  {
    q: "What does a FinTech penetration test cover?",
    a: "A FinTech penetration test typically evaluates REST/GraphQL APIs, web applications, mobile apps, payment workflows, webhook integrations, authentication (OAuth/JWT), authorization controls, KYC document pipelines, and cloud infrastructure. The exact scope is customized during scoping based on your architecture, endpoint count, and risk profile."
  },
  {
    q: "Do you test FinTech APIs and payment workflows?",
    a: "Yes. Our primary focus is manual logic testing across financial APIs and payment workflows. We evaluate transaction-state tampering, race conditions in fund transfers, webhook signature validation, privilege escalation, and business-rule bypasses."
  },
  {
    q: "Do you test BOLA and IDOR vulnerabilities?",
    a: "Yes. Broken Object Level Authorization (BOLA/IDOR) is the most critical vulnerability in modern FinTech APIs. We systematically test whether authenticated users, merchants, or third-party integrations can manipulate resource identifiers to view or modify other users' balances, statements, KYC documents, or transactions."
  },
  {
    q: "Can you test authentication and JWT/OAuth implementations?",
    a: "Yes. We evaluate JWT token signing algorithms, claim validation, secret exposure, token expiration, refresh token workflows, OAuth 2.0 grant types, redirect URI validation, and step-up authentication mechanisms on high-risk transaction routes."
  },
  {
    q: "Is retesting included in the assessment?",
    a: "Yes, retesting is included in every TrustLayerLabs security assessment. Once your engineering team deploys patches to your staging environment, our security specialists re-evaluate the fixed vectors and issue an updated final report and Retest Verification Letter."
  },
  {
    q: "How long does a FinTech VAPT assessment take?",
    a: "A standard FinTech API or application security assessment typically takes 5 to 10 business days, depending on scope, endpoint count, and architectural complexity. For fast-moving teams with urgent deal deadlines, we can provide preliminary findings within 48 to 72 hours."
  },
  {
    q: "Can penetration testing support SOC 2 or ISO 27001 readiness?",
    a: "Yes. Third-party penetration testing is a mandatory technical control requirement for SOC 2 Type II (CC6.8) and ISO 27001 Annex A. Our assessment reports and retest verification letters provide the technical evidence required by external auditors."
  },
  {
    q: "How is the scope of a FinTech security assessment determined?",
    a: "Scope is established during a brief scoping review where we analyze your application architecture, endpoint count (via Swagger/Postman), user roles (e.g., Customer, Merchant, Admin), third-party integrations, and target compliance deadlines. We then provide a transparent, fixed-scope proposal."
  }
];

export default function FinTechSecurityPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.trustlayerlabs.co.in/fintech-security#service",
        "name": "FinTech VAPT Services",
        "serviceType": "FinTech Penetration Testing & API Security Testing",
        "provider": {
          "@type": "Organization",
          "@id": "https://www.trustlayerlabs.co.in/#organization",
          "name": "TrustLayerLabs",
          "url": "https://www.trustlayerlabs.co.in",
          "telephone": "+91-8822402811",
          "email": "ceo@trustlayerlabs.co.in"
        },
        "description": "Manual FinTech VAPT services for APIs, web applications, payment workflows and cloud infrastructure with actionable remediation guidance and retesting.",
        "areaServed": ["India", "Global"],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "FinTech Security Assessment Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "FinTech API Security Testing" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Payment Workflow Penetration Testing" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Financial Application Security Audit" } }
          ]
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.trustlayerlabs.co.in/fintech-security#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trustlayerlabs.co.in" },
          { "@type": "ListItem", "position": 2, "name": "FinTech Security", "item": "https://www.trustlayerlabs.co.in/fintech-security" }
        ]
      }
    ]
  };

  return (
    <div className="bg-background min-h-screen pt-32 pb-24 font-sans text-textPrimary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="section-container max-w-6xl mx-auto">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6">
          <Link href="/" className="text-xs uppercase font-mono text-textSecondary hover:text-textPrimary transition-colors">Home</Link>
          <span className="text-xs text-textSecondary">/</span>
          <span className="text-xs uppercase font-mono text-primary font-bold">FinTech Security</span>
        </div>

        {/* Hero Section — Above-The-Fold */}
        <div className="max-w-4xl space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider">
            <CreditCard size={13} className="text-primary" />
            <span>Offensive FinTech Security Testing</span>
          </div>

          {/* Primary H1 */}
          <h1 className="heading-1 font-sans text-textPrimary tracking-tight">
            FinTech VAPT & <span className="text-primary">Penetration Testing Services</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-textSecondary leading-relaxed font-sans max-w-3xl">
            TrustLayerLabs performs manual application and API security assessments for FinTech platforms, focusing on authorization, authentication, transaction workflows, payment integrations, sensitive financial data, and cloud infrastructure.
          </p>

          {/* Value Props Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-3.5 bg-surface border border-border/80 rounded-xl">
              <span className="text-[10px] font-mono uppercase tracking-wider text-primary font-bold block mb-1">WHAT</span>
              <p className="text-xs text-textSecondary leading-normal">Manual FinTech VAPT & application penetration testing.</p>
            </div>
            <div className="p-3.5 bg-surface border border-border/80 rounded-xl">
              <span className="text-[10px] font-mono uppercase tracking-wider text-primary font-bold block mb-1">WHO</span>
              <p className="text-xs text-textSecondary leading-normal">FinTech platforms, payment products & financial technology teams.</p>
            </div>
            <div className="p-3.5 bg-surface border border-border/80 rounded-xl">
              <span className="text-[10px] font-mono uppercase tracking-wider text-primary font-bold block mb-1">WHY</span>
              <p className="text-xs text-textSecondary leading-normal">Identify exploitable weaknesses before customer, compliance, or production risks arise.</p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link 
              href="https://calendar.app.google/jnamj3gawxVunPJm9"
              target="_blank"
              className="px-8 py-3.5 bg-primary hover:bg-primary-hover text-white text-xs uppercase font-sans font-bold tracking-wider rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              <Calendar size={15} />
              <span>Book a 20-Min Security Review</span>
            </Link>

            <Link 
              href="/sample-report"
              className="px-8 py-3.5 bg-surface border border-border hover:border-zinc-400 text-xs uppercase font-sans font-semibold tracking-wider rounded-xl text-textPrimary hover:text-primary transition-all flex items-center gap-2"
            >
              <FileText size={15} />
              <span>View Sample Report</span>
            </Link>
          </div>
        </div>

        {/* FinTech Attack Surfaces Section */}
        <div className="py-16 border-t border-border" id="attack-surfaces">
          <div className="mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-4">
              <span>Attack Surface Coverage</span>
            </div>
            <h2 className="heading-2 font-sans mb-3 text-textPrimary">
              What We Test in <span className="text-primary">FinTech Applications</span>
            </h2>
            <p className="body-text text-textSecondary font-sans max-w-3xl">
              Financial applications present unique business logic, authorization, and multi-tenancy vectors that automated scanners miss. Scope is customized based on your architecture and testing objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {attackSurfaces.map((surface, idx) => (
              <div 
                key={idx}
                className="premium-card p-6 bg-surface border border-border rounded-2xl flex flex-col justify-between hover:border-zinc-400 transition-all duration-300 shadow-sm"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-5">
                    <surface.icon size={18} />
                  </div>
                  <h3 className="text-sm font-bold text-textPrimary tracking-tight font-sans mb-2">
                    {surface.title}
                  </h3>
                  <p className="text-xs text-textSecondary leading-relaxed font-sans">
                    {surface.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-surface border border-border/60 rounded-xl text-xs text-textSecondary font-sans flex items-center gap-2.5">
            <Info size={16} className="text-primary flex-shrink-0" />
            <span>Note: Final test coverage and vector depth are tailored during technical scoping based on your endpoint inventory and architectural design.</span>
          </div>
        </div>

        {/* Payment & Transaction Workflow Security Testing Section */}
        <div className="py-16 border-t border-border" id="payment-security">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-4">
              <span>Transaction Logic</span>
            </div>
            <h2 className="heading-2 font-sans mb-3 text-textPrimary">
              Payment & Transaction <span className="text-primary">Workflow Security Testing</span>
            </h2>
            <p className="body-text text-textSecondary font-sans">
              Financial transactions rely on complex multi-step workflows across clients, servers, payment gateways, and banking switches. Our manual testing evaluates logical consistency and authorization boundaries at each state transition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paymentVectors.map((item, idx) => (
              <div key={idx} className="p-6 bg-surface border border-border rounded-2xl space-y-2.5 shadow-sm">
                <div className="flex items-center gap-2">
                  <Lock size={15} className="text-primary flex-shrink-0" />
                  <h3 className="text-sm font-bold text-textPrimary font-sans">{item.title}</h3>
                </div>
                <p className="text-xs text-textSecondary leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-background border border-border/60 rounded-xl text-xs text-textSecondary font-sans leading-relaxed">
            <strong className="text-textPrimary font-semibold">Assessment Scope Clarification:</strong> Our testing evaluates application logic, authorization rules, and workflow robustness to identify exploitable flaws. It provides technical risk reduction and does not represent a financial guarantee against external fraud.
          </div>
        </div>

        {/* FinTech API Security Testing Section */}
        <div className="py-16 border-t border-border" id="api-security">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-4">
                <span>API Attack Vectors</span>
              </div>
              <h2 className="heading-2 font-sans mb-3 text-textPrimary">
                FinTech <span className="text-primary">API Security Testing</span>
              </h2>
              <p className="body-text text-textSecondary font-sans">
                APIs are the primary data conduit for financial technology. We assess REST, GraphQL, and microservice interfaces against critical authorization and logic vulnerabilities.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/services/api-security"
                className="inline-flex items-center gap-1.5 text-xs uppercase font-sans font-bold tracking-wider text-primary hover:underline"
              >
                <span>Explore Dedicated API Security Testing →</span>
              </Link>
              <Link 
                href="/services/mobile-vapt"
                className="inline-flex items-center gap-1.5 text-xs uppercase font-sans font-bold tracking-wider text-primary hover:underline"
              >
                <span>Explore Mobile Application VAPT →</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {apiSecurityPoints.map((item, idx) => (
              <div key={idx} className="p-6 bg-surface border border-border rounded-2xl space-y-3 shadow-sm">
                <span className="text-[10px] font-mono font-bold text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded uppercase">
                  {item.code}
                </span>
                <h3 className="text-sm font-bold text-textPrimary font-sans">{item.title}</h3>
                <p className="text-xs text-textSecondary leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* KYC & Customer Onboarding Security Section */}
        <div className="py-16 border-t border-border" id="kyc-security">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-4">
              <span>Onboarding Integrity</span>
            </div>
            <h2 className="heading-2 font-sans mb-3 text-textPrimary">
              KYC & Customer <span className="text-primary">Onboarding Security</span>
            </h2>
            <p className="body-text text-textSecondary font-sans">
              Customer onboarding and identity verification pipelines handle sensitive PII and determine account access levels. We evaluate account-creation flows for state manipulation and access-control weaknesses.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {kycSecurityPoints.map((item, idx) => (
              <div key={idx} className="p-6 bg-surface border border-border rounded-2xl space-y-2.5 shadow-sm">
                <div className="flex items-center gap-2">
                  <Database size={15} className="text-primary flex-shrink-0" />
                  <h3 className="text-sm font-bold text-textPrimary font-sans">{item.title}</h3>
                </div>
                <p className="text-xs text-textSecondary leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Cloud & Infrastructure Security Section */}
        <div className="py-16 border-t border-border" id="cloud-infrastructure">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-4">
                <span>Infrastructure Scope</span>
              </div>
              <h2 className="heading-2 font-sans mb-3 text-textPrimary">
                Cloud & Infrastructure <span className="text-primary">Security for FinTech</span>
              </h2>
              <p className="body-text text-textSecondary font-sans">
                Where cloud infrastructure is included in scope, we evaluate configuration posture, identity policies, and storage access controls to prevent accidental exposure of financial assets.
              </p>
            </div>
            <div>
              <Link 
                href="/services/cloud-security"
                className="inline-flex items-center gap-1.5 text-xs uppercase font-sans font-bold tracking-wider text-primary hover:underline"
              >
                <span>Explore Cloud Security Audits →</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "IAM & Least-Privilege Policies", desc: "Auditing role assignments, developer access keys, and cross-account assumption permissions." },
              { title: "Storage & Bucket Permissions", desc: "Verifying S3/GCS bucket access, public exposure flags, and server-side encryption with KMS." },
              { title: "Secrets & Key Management", desc: "Reviewing storage and rotation of database credentials, third-party API tokens, and private keys." },
              { title: "Network & Perimeter Hardening", desc: "Evaluating VPC peering, security group rules, public ingress points, and API gateway TLS configurations." },
              { title: "Audit Logging & Trail Integrity", desc: "Ensuring CloudTrail/CloudWatch logs and application security events are recorded for forensic review." },
              { title: "Container & Kubernetes Security", desc: "Reviewing container image vulnerabilities, pod security standards, and cluster RBAC where containerized." }
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-surface border border-border rounded-2xl space-y-2 shadow-sm">
                <div className="flex items-center gap-2">
                  <Server size={15} className="text-primary flex-shrink-0" />
                  <h3 className="text-sm font-bold text-textPrimary font-sans">{item.title}</h3>
                </div>
                <p className="text-xs text-textSecondary leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Regulatory Baseline Alignment Section */}
        <div className="py-16 border-t border-border" id="regulatory-alignment">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-4">
              <span>Framework Mapping</span>
            </div>
            <h2 className="heading-2 font-sans mb-3 text-textPrimary">
              Technical Security Alignment for <span className="text-primary">Regulatory & Partner Reviews</span>
            </h2>
            <p className="body-text text-textSecondary font-sans">
              We map our technical penetration testing and configuration reviews against industry standards and institutional guidelines to generate clear technical evidence for compliance reviews.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                framework: "RBI Cybersecurity Baseline",
                desc: "Technical vulnerability assessment and controls mapping aligned with Reserve Bank of India Information Security Guidelines for regulated entities and payment intermediaries."
              },
              {
                framework: "NPCI Technical Considerations",
                desc: "API endpoint security, cryptographic validation, and transaction workflow verification aligned with NPCI UPI application security best practices."
              },
              {
                framework: "SOC 2 & ISO 27001 Readiness",
                desc: "Technical penetration test evidence fulfilling SOC 2 Type II (CC6.8) and ISO 27001 Annex A technical control requirements for enterprise buyers."
              }
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-surface border border-border rounded-2xl space-y-3 shadow-sm">
                <span className="text-[10px] font-mono font-bold text-primary uppercase tracking-wider bg-primary/10 border border-primary/20 px-2 py-0.5 rounded">
                  Technical Alignment
                </span>
                <h3 className="text-base font-bold text-textPrimary font-sans">{item.framework}</h3>
                <p className="text-xs text-textSecondary leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 bg-surface border border-border rounded-2xl flex items-start gap-3.5 shadow-sm">
            <HelpCircle size={18} className="text-primary flex-shrink-0 mt-0.5" />
            <div className="text-xs text-textSecondary font-sans leading-relaxed">
              <strong className="text-textPrimary font-semibold block mb-0.5">Advisory & Scope Distinction:</strong>
              TrustLayerLabs provides technical security assessments, vulnerability remediation guidance, and readiness documentation. We do not issue formal statutory regulatory certifications (e.g., formal RBI/NPCI certification); we deliver the technical penetration testing evidence required for partner bank reviews and accredited audits.
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <Link 
              href="/grc-readiness"
              className="inline-flex items-center gap-1.5 text-xs uppercase font-sans font-bold tracking-wider text-primary hover:underline"
            >
              <span>Explore GRC & Compliance Readiness Support →</span>
            </Link>
          </div>
        </div>

        {/* Assessment Methodology Section */}
        <div className="py-16 border-t border-border" id="methodology">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-4">
                <span>Testing Workflow</span>
              </div>
              <h2 className="heading-2 font-sans mb-3 text-textPrimary">
                Our FinTech <span className="text-primary">VAPT Methodology</span>
              </h2>
              <p className="body-text text-textSecondary font-sans">
                An 8-phase collaborative testing lifecycle designed for developer efficiency, non-disruptive testing, and validated remediation.
              </p>
            </div>
            <div>
              <Link 
                href="/methodology"
                className="inline-flex items-center gap-1.5 text-xs uppercase font-sans font-bold tracking-wider text-primary hover:underline"
              >
                <span>Read Complete Penetration Testing Methodology →</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologySteps.map((step, idx) => (
              <div key={idx} className="p-6 bg-surface border border-border rounded-2xl space-y-2.5 shadow-sm">
                <span className="text-xs font-mono font-bold text-primary uppercase tracking-wider bg-primary/10 px-2 py-0.5 rounded">
                  Phase {step.step}
                </span>
                <h3 className="text-sm font-bold text-textPrimary font-sans">{step.title}</h3>
                <p className="text-xs text-textSecondary leading-relaxed font-sans">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables Section */}
        <div className="py-16 border-t border-border" id="deliverables">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-4">
              <span>Deliverables</span>
            </div>
            <h2 className="heading-2 font-sans mb-3 text-textPrimary">
              Engineering-Ready <span className="text-primary">FinTech Deliverables</span>
            </h2>
            <p className="body-text text-textSecondary font-sans">
              Clear, developer-focused documentation designed for rapid remediation, partner due diligence, and compliance audit verification.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item, i) => (
              <div key={i} className="p-6 bg-surface border border-border rounded-2xl space-y-2.5 shadow-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                  <h3 className="text-sm font-bold text-textPrimary font-sans">{item.title}</h3>
                </div>
                <p className="text-xs text-textSecondary leading-relaxed font-sans pl-6">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sample Report Internal CTA Banner */}
        <div className="my-12 p-8 md:p-12 bg-surface border border-border rounded-3xl relative overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-bold uppercase tracking-wider">
                <span>Report Preview</span>
              </div>
              <h3 className="heading-2 font-sans text-textPrimary">
                Examine an Illustrative FinTech VAPT Report
              </h3>
              <p className="text-xs sm:text-sm text-textSecondary font-sans leading-relaxed">
                Review the exact format of our findings, CVSS scoring criteria, reproduction steps, and remediation code snippets before booking an engagement.
              </p>
              <div className="p-3 bg-background border border-border/60 rounded-xl text-[11px] text-textSecondary font-sans leading-normal">
                <span className="font-bold text-textPrimary uppercase tracking-wider block mb-0.5">
                  ILLUSTRATIVE SAMPLE — NOT A CLIENT ENGAGEMENT
                </span>
                This sample demonstrates our report structure and technical depth. It does not represent a real customer engagement.
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <Link 
                href="/sample-report"
                className="px-6 py-3.5 bg-primary hover:bg-primary-hover text-white text-xs font-sans font-bold uppercase tracking-wider rounded-xl transition-all shadow-md text-center flex items-center justify-center gap-2"
              >
                <FileText size={15} />
                <span>View Illustrative Sample Report</span>
              </Link>
              <Link 
                href="/api-security-checklist"
                className="px-6 py-3.5 bg-background border border-border hover:border-zinc-400 text-xs font-sans font-semibold tracking-wider rounded-xl text-textPrimary hover:text-primary transition-all text-center"
              >
                <span>32-Point API Checklist →</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Commercial FAQ Section */}
        <div className="py-16 border-t border-border" id="faq">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-4">
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="heading-2 font-sans mb-3 text-textPrimary">
              FinTech Security & <span className="text-primary">VAPT FAQs</span>
            </h2>
            <p className="body-text text-textSecondary font-sans">
              Common questions about our financial penetration testing scope, methodologies, timelines, and deliverables.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-6 bg-surface border border-border rounded-2xl space-y-2 shadow-sm">
                <h3 className="text-sm font-bold text-textPrimary font-sans flex items-start gap-2">
                  <span className="text-primary font-mono">Q:</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs text-textSecondary leading-relaxed font-sans pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mid-Page Booking CTA Strip */}
        <div className="my-16 p-8 bg-surface border border-primary/30 rounded-3xl text-center space-y-6 shadow-sm">
          <div className="max-w-2xl mx-auto space-y-3">
            <h3 className="text-xl sm:text-2xl font-bold text-textPrimary font-sans">
              Ready to Scope Your FinTech Security Assessment?
            </h3>
            <p className="text-xs sm:text-sm text-textSecondary font-sans leading-relaxed">
              Schedule a 20-minute scoping call with our lead security architects under mutual NDA. We will evaluate your architecture and provide a fixed quote within 24 hours.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link 
              href="https://calendar.app.google/jnamj3gawxVunPJm9"
              target="_blank"
              className="px-8 py-3.5 bg-primary hover:bg-primary-hover text-white text-xs uppercase font-sans font-bold tracking-wider rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              <Calendar size={15} />
              <span>Book a 20-Min Security Review</span>
            </Link>
            <Link 
              href="/contact"
              className="px-8 py-3.5 bg-background border border-border hover:border-zinc-400 text-xs uppercase font-sans font-semibold tracking-wider rounded-xl text-textPrimary hover:text-primary transition-all flex items-center gap-2"
            >
              <span>Submit Scoping Request Form</span>
            </Link>
          </div>
        </div>

      </div>

      {/* Embedded Contact Form */}
      <ContactForm />
    </div>
  );
}
