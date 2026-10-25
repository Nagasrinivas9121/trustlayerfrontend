/**
 * Centralized Pricing & Package Configurations for TrustLayerLabs
 * 
 * NOTE: All price placeholders and slot counts must be updated here.
 * NEVER invent prices or client numbers.
 */

export interface PricingPackage {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  timeline: string;
  scope: string;
  priceInr: string;
  priceUsd: string;
  description: string;
  inclusions: string[];
  ctaLabel: string;
}

export const FOUNDING_CLIENT_CONFIG = {
  slotsTotal: 3, // {{FOUNDING_SLOTS_TOTAL}}
  slotsLeft: 2,  // {{FOUNDING_SLOTS_LEFT}}
  discountPercentage: 50, // {{FOUNDING_DISCOUNT_PERCENT}}
  title: "Founding Client Program",
  note: "Listed prices are founding-client pricing and may change.",
  whatYouGet: [
    "Comprehensive manual API & SaaS multi-tenant penetration test",
    "Direct execution by senior certified practitioners (CEH, CWL C3SA, ISO 27001 LA)",
    "Every finding manually verified with reproducible cURL PoCs and code remediation",
    "Complimentary 30-day retesting of patched vulnerabilities",
    "Signed attestation letter designed to support SOC 2 / ISO 27001 evidence requests",
    "Priority scheduling"
  ],
  whatWeAsk: [
    "Permission to publish an anonymized case study upon completion",
    "A short written quote or testimonial from your founder, CTO, or engineering leader",
    "A 30-minute feedback debrief call to help us refine our reporting workflows"
  ],
  ctaText: "Get a fixed-price quote in 24h",
  ctaHref: "/free-assessment?package=founding-client",
};

export const FOUNDING_CLIENT_PROGRAM = FOUNDING_CLIENT_CONFIG;

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: "api-security-sprint",
    name: "API Security Sprint",
    badge: "Fastest Turnaround",
    popular: false,
    timeline: "5 Business Days",
    scope: "Up to 25 REST, GraphQL, or gRPC endpoints",
    priceInr: "₹9,999",
    priceUsd: "$129",
    description: "Targeted offensive manual testing focused on authorization boundaries, token security, and business logic.",
    inclusions: [
      "Deep manual probing for BOLA / IDOR and BFLA",
      "Authentication integrity & JWT signature/replay validation",
      "Exact reproducible developer cURL PoCs & code fixes",
      "Complimentary 30-day retest verification included",
      "Executive Attestation Letter for enterprise buyers"
    ],
    ctaLabel: "Get a fixed-price quote in 24h"
  },
  {
    id: "saas-multi-tenant-assessment",
    name: "SaaS Multi-Tenant Assessment",
    badge: "Most Popular for Startups",
    popular: true,
    timeline: "7–10 Business Days",
    scope: "Complete Web App + API Surface & Multi-Tenant Boundaries",
    priceInr: "₹24,999",
    priceUsd: "$299",
    description: "Comprehensive offensive audit of tenant isolation, database row-level security (RLS), RBAC, and background workers.",
    inclusions: [
      "Cross-tenant isolation & data boundary validation",
      "Database Row-Level Security (RLS) & background job testing",
      "Vertical & horizontal RBAC privilege escalation analysis",
      "Verified developer cURL PoCs & remediation guidance",
      "Complimentary 30-day retesting & formal Attestation Letter"
    ],
    ctaLabel: "Get a fixed-price quote in 24h"
  },
  {
    id: "soc2-readiness-pentest",
    name: "SOC 2 Readiness Pentest",
    badge: "Audit Unblocker",
    popular: false,
    timeline: "7–10 Business Days",
    scope: "Offensive assessment mapped directly to SOC 2 & ISO 27001",
    priceInr: "₹49,999",
    priceUsd: "$599",
    description: "Designed specifically to satisfy enterprise procurement security reviews and external auditor evidence requests.",
    inclusions: [
      "Testing mapped to SOC 2 Trust Services Criteria & ISO 27001 Annex A",
      "Auditor-ready technical report & executive summary",
      "Direct consultation with certified ISO 27001 Lead Auditor & CEH",
      "Complimentary 30-day retesting on all remediation commits",
      "Formal signed Attestation Letter accepted by compliance auditors"
    ],
    ctaLabel: "Get a fixed-price quote in 24h"
  }
];

export const OTHER_SERVICES = [
  { name: "Web Application VAPT", href: "/services/web-app-vapt", description: "Deep manual penetration testing for modern single-page apps & APIs" },
  { name: "Mobile Application VAPT", href: "/services/mobile-vapt", description: "Static & dynamic analysis for iOS & Android following OWASP MASVS" },
  { name: "AI & LLM Application Security", href: "/services/ai-security", description: "OWASP Top 10 for LLMs, prompt injection & RAG data isolation" },
  { name: "Cloud Security Audit", href: "/services/cloud-security", description: "AWS & GCP IAM least-privilege, storage buckets & CIS hardening" },
  { name: "GRC & Enterprise Readiness", href: "/grc-readiness", description: "SOC 2 & ISO 27001 technical control mapping & audit readiness" },
  { name: "FinTech Security Assessment", href: "/fintech-security", description: "Payment logic, ledger APIs & regulatory security baselines" },
];
