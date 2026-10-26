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
  foundingPriceInr: string;
  foundingPriceUsd: string;
  description: string;
  inclusions: string[];
  ctaLabel: string;
}

export const FOUNDING_CLIENT_CONFIG = {
  // Update only when a founding client has actually signed.
  slotsTotal: 3, // {{FOUNDING_SLOTS_TOTAL}}
  slotsLeft: 3,  // {{FOUNDING_SLOTS_LEFT}}
  discountPercentage: 40, // ~40% off list
  title: "Founding Client Program",
  footnote: "Starting prices. Your final fixed price is confirmed within 24 hours after scoping. India prices exclude GST. Founding prices apply to the first 3 clients and may change afterwards.",
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
    timeline: "5 business days",
    scope: "Up to 15 Endpoints",
    priceInr: "₹14,999 + GST",
    priceUsd: "$179",
    foundingPriceInr: "₹8,999",
    foundingPriceUsd: "$108",
    description: "Targeted manual testing focused on authorization boundaries, token security, and business logic.",
    inclusions: [
      "manual testing for BOLA/IDOR and BFLA",
      "authentication integrity and JWT signature/replay validation",
      "reproducible cURL PoCs with code fixes",
      "complimentary 30-day retest verification",
      "executive attestation letter for enterprise buyers"
    ],
    ctaLabel: "Get a fixed-price quote in 24h"
  },
  {
    id: "saas-multi-tenant-assessment",
    name: "SaaS Multi-Tenant Assessment",
    badge: "Best fit for multi-tenant SaaS",
    popular: false,
    timeline: "7-10 business days",
    scope: "30 endpoints · 3 roles",
    priceInr: "₹34,999 + GST",
    priceUsd: "$419",
    foundingPriceInr: "₹20,999",
    foundingPriceUsd: "$251",
    description: "Offensive audit of tenant isolation, database row-level security (RLS), RBAC, and background workers.",
    inclusions: [
      "cross-tenant isolation and data-boundary validation",
      "RLS and background-job testing",
      "vertical and horizontal RBAC privilege escalation analysis",
      "verified cURL PoCs and remediation guidance",
      "complimentary 30-day retest and attestation letter"
    ],
    ctaLabel: "Get a fixed-price quote in 24h"
  },
  {
    id: "soc2-readiness-pentest",
    name: "SOC 2 Readiness Pentest",
    badge: "For customer security reviews",
    popular: false,
    timeline: "7-10 business days",
    scope: "Full Web & Public API",
    priceInr: "₹59,999 + GST",
    priceUsd: "$719",
    foundingPriceInr: "₹35,999",
    foundingPriceUsd: "$431",
    description: "Offensive assessment designed to support enterprise procurement security reviews and auditor evidence requests.",
    inclusions: [
      "testing mapped to SOC 2 Trust Services Criteria and ISO 27001 Annex A",
      "technical report and executive summary formatted for auditor evidence requests",
      "consultation with an ISO 27001 Lead Auditor and CEH-certified tester",
      "complimentary 30-day retest on remediation commits",
      "signed attestation letter"
    ],
    ctaLabel: "Get a fixed-price quote in 24h"
  }
];

export const OTHER_SERVICES = [
  { name: "Web Application VAPT", href: "/services/web-app-vapt", description: "Deep manual penetration testing for modern single-page apps & APIs" },
  { name: "Mobile Application VAPT", href: "/services/mobile-vapt", description: "Static & dynamic analysis for iOS & Android following OWASP MASVS" },
  { name: "Cloud Security Audit", href: "/services/cloud-security", description: "AWS & GCP IAM least-privilege, storage buckets & CIS hardening" },
  { name: "FinTech Security Assessment", href: "/fintech-security", description: "Payment logic, ledger APIs & regulatory security baselines" },
  { name: "AI & LLM Application Security", href: "/services/ai-security", description: "OWASP Top 10 for LLMs, prompt injection & RAG data isolation" },
  { name: "GRC & Enterprise Readiness", href: "/grc-readiness", description: "SOC 2 & ISO 27001 technical control mapping & audit readiness" },
  { name: "Secure Web Development", href: "/services/web-development", description: "Production-ready, hardened web applications built with OWASP security integrated from day one" },
];
