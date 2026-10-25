import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield, CheckCircle2, XCircle, ArrowRight, FileCode, Check } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Manual Security Testing Matters for APIs & SaaS",
  description: "Why automated vulnerability scanners miss BOLA, broken access control, and tenant isolation flaws. Explore the 8 critical logic attack surfaces.",
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/why-manual-testing",
  },
  openGraph: {
    title: "Why Manual Security Testing Matters | TrustLayerLabs",
    description: "Why automated vulnerability scanners miss BOLA, broken access control, and tenant isolation flaws. Explore the 8 critical logic attack surfaces.",
    url: "https://www.trustlayerlabs.co.in/why-manual-testing",
    siteName: "TrustLayerLabs",
    locale: "en_IN",
    type: "website",
  },
};

const ATTACK_SURFACES = [
  {
    id: "bola",
    title: "1. Broken Object Level Authorization (BOLA / IDOR)",
    description: "Attackers manipulate resource IDs (e.g., /invoices/9843) to access customer data belonging to other tenants. Scanners cannot detect this because the server returns a valid 200 OK status code without syntax errors.",
    vector: "OWASP API 1:2023 · Authorization Boundary",
    manualDetection: "Practitioners create distinct multi-tenant test personas, systematically cross-requesting private UUIDs to verify strict session-level ownership filters."
  },
  {
    id: "tenant-rls",
    title: "2. Tenant Row-Level Security (RLS) Escapes",
    description: "Database queries that omit tenant scoping filters or async background jobs operating under ambient service accounts, streaming cross-tenant records into export files.",
    vector: "Database Isolation · Multi-Tenancy",
    manualDetection: "Direct auditing of ORM queries, raw SQL statements, background worker queues, and shared Redis caches for isolation boundaries."
  },
  {
    id: "rbac-bfla",
    title: "3. Broken Function Level Authorization (BFLA)",
    description: "Low-privilege workspace members altering API payloads or parameters to access administrative endpoints (e.g. promoting their own user role to Owner).",
    vector: "OWASP API 5:2023 · Privilege Escalation",
    manualDetection: "Testing matrix mapping every user role against administrative actions to verify server-side middleware enforcement."
  },
  {
    id: "jwt-forgery",
    title: "4. Flawed JWT Verification & Replay",
    description: "Token validators accepting 'alg: none', failing to enforce asymmetric RS256 signing keys, or permitting token replay due to missing atomic jti nonce checks.",
    vector: "OWASP API 2:2023 · Authentication Integrity",
    manualDetection: "Manual payload manipulation, algorithm confusion testing, key rotation auditing, and expiration window fuzzing."
  },
  {
    id: "payment-logic",
    title: "5. Business Logic & Payment Race Conditions",
    description: "State workflow flaws such as concurrent checkout requests applying single-use credits multiple times, subscription tier parameter tampering, or negative balances.",
    vector: "Business Logic Flaws · Financial Integrity",
    manualDetection: "Multi-threaded race condition fuzzing and systematic workflow state perturbation using specialized offensive proxies."
  },
  {
    id: "rag-leakage",
    title: "6. AI & RAG Vector Search Context Leakage",
    description: "Semantic similarity searches querying vector databases without strict metadata filtering, exposing confidential board decks or private customer data from adjacent tenants.",
    vector: "OWASP LLM 08:2025 · Vector Data Isolation",
    manualDetection: "Targeted adversarial prompt probing and semantic similarity fuzzing across isolated tenant embeddings."
  },
  {
    id: "webhook-timing",
    title: "7. Webhook Timing & Replay Vulnerabilities",
    description: "Webhook consumers using non-constant-time string comparison for HMAC signatures or accepting events outside timestamp tolerance windows, allowing replay attacks.",
    vector: "API Integrity · Event Driven Security",
    manualDetection: "Cryptographic signature timing verification and historical event replay injection against production endpoints."
  },
  {
    id: "cloud-iam",
    title: "8. Cloud IAM Least-Privilege & Bucket Exposure",
    description: "Over-privileged IAM roles attached to microservice containers allowing lateral movement across cloud infrastructure and public read/write exposure on S3/GCS buckets.",
    vector: "CIS Cloud Benchmarks · Infrastructure Hardening",
    manualDetection: "Direct review of IAM role assumption policies, bucket access control lists (ACLs), and metadata endpoint protections."
  }
];

export default function WhyManualTestingPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen pt-32 pb-24 font-sans text-neutral-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Pill */}
        <Link 
          href="/" 
          className="inline-flex items-center text-xs font-semibold text-neutral-500 hover:text-neutral-900 transition-colors gap-2 mb-8 group px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 shadow-xs"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 shadow-xs text-xs font-semibold text-neutral-800 mb-4">
            <Shield size={14} className="text-primary" />
            <span>Offensive Engineering Architecture</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 mb-4 font-sans">
            The 8 Critical Logic Attack Surfaces <br className="hidden sm:inline" />
            <span className="text-primary">That Automated Scanners Miss</span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl font-sans">
            Automated vulnerability scanners search for outdated syntax patterns and known CVE signatures. But in modern multi-tenant SaaS and microservices, the most catastrophic vulnerabilities exist entirely in authorization and business logic.
          </p>
        </div>

        {/* Why Scanners Fail Explanation Box */}
        <div className="p-6 sm:p-8 bg-white border border-neutral-200 rounded-3xl shadow-xs mb-14 space-y-4">
          <h2 className="text-xl font-bold text-neutral-950 tracking-tight font-sans">
            Why Automated Scanners Cannot Understand Authorization Logic
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
            When an attacker exploits a Broken Object Level Authorization (BOLA) vulnerability to view another tenant&apos;s financial invoices, the server returns an <strong className="text-neutral-900 font-mono">HTTP 200 OK</strong> response with well-formed JSON.
          </p>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
            To an automated scanner, an HTTP 200 response with clean JSON appears completely healthy. The scanner has no knowledge of user ownership, tenancy boundaries, or organizational segregation. Only a human practitioner who models your authentication state can verify that User A was never permitted to inspect User B&apos;s records.
          </p>
        </div>

        {/* The 8 Attack Surfaces Detailed Grid */}
        <div className="space-y-6 mb-16">
          <div className="flex items-center justify-between pb-3 border-b border-dashed border-neutral-200">
            <h2 className="text-lg font-bold text-neutral-950 font-sans">
              8 Attack Surfaces Examined During Manual Assessments
            </h2>
            <span className="text-xs font-mono text-neutral-500">OWASP &amp; PTES Aligned</span>
          </div>

          {ATTACK_SURFACES.map((surface) => (
            <div
              key={surface.id}
              className="p-6 bg-white rounded-3xl border border-neutral-200 shadow-xs space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="text-base font-bold text-neutral-950 font-sans">
                  {surface.title}
                </h3>
                <span className="text-[10px] font-mono font-bold text-primary bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-md w-fit">
                  {surface.vector}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
                {surface.description}
              </p>

              <div className="p-3 bg-neutral-50 rounded-2xl border border-neutral-200/80 text-xs text-neutral-700 font-sans flex items-start gap-2">
                <Check size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-neutral-900">How TrustLayerLabs Verifies: </strong>
                  {surface.manualDetection}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Box */}
        <div className="p-8 sm:p-10 bg-neutral-950 text-white rounded-3xl border border-neutral-800 text-center space-y-5">
          <h2 className="text-2xl font-bold font-sans">
            Ready to audit your application against these logic flaws?
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-lg mx-auto leading-relaxed font-sans">
            Get a fixed-price quote under mutual NDA within 24 hours. Our senior practitioners begin testing within days.
          </p>
          <div className="pt-2">
            <Link
              href="/#pricing"
              className="inline-flex items-center gap-2 py-3.5 px-8 rounded-full bg-white text-neutral-950 hover:bg-neutral-100 font-semibold text-xs tracking-tight transition-colors shadow-md"
            >
              <span>Explore Fixed-Scope Pentest Packages</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
