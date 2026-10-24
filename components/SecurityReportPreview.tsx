"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Code, CheckCircle, AlertTriangle, FileText, ChevronRight, Info, ArrowRight } from "lucide-react";

import { trackSampleReportClick, trackFreeSecurityReviewStart } from "@/lib/analytics";

export default function SecurityReportPreview() {
  const [activeTab, setActiveTab] = useState<"summary" | "vulnerabilities" | "remediation" | "tracking">("summary");
  
  const vulns = [
    {
      id: "TTL-FINDING-01",
      title: "Broken Object Level Authorization (BOLA / IDOR) on Export Endpoint",
      endpoint: "GET /api/v1/workspaces/{workspaceId}/export",
      class: "SaaS API Authorization",
      severity: "Critical",
      score: "9.8",
      attackScenario: "Authenticated member from Tenant A alters the workspaceId parameter to Tenant B's UUID in the export endpoint. The API fails to verify session tenant binding and streams Tenant B's full audit records.",
      evidence: "curl -X GET 'https://api.apexcloud.internal/api/v1/workspaces/ws_tenant_bravo_02/export' -H 'Authorization: Bearer <Tenant_A_Token>' => HTTP 200 OK with cross-tenant customer records.",
      impact: "Cross-tenant data exposure exposing confidential enterprise data, SOC 2 control failure, and contractual isolation breach.",
      rootCause: "Database query resolved workspace directly from URL parameter without enforcing req.user.tenantId === requestedWorkspace.tenantId in the ORM filter.",
      remediation: "Enforce strict tenant scoping in data access layer: WHERE id = :workspaceId AND tenant_id = :sessionTenantId.",
      retest: "Verified Patched: Re-testing confirmed endpoint strictly returns HTTP 403 Forbidden with security event alert."
    },
    {
      id: "TTL-FINDING-02",
      title: "Multi-Tenant Isolation Failure in Async Background Reports Worker",
      endpoint: "POST /api/v1/jobs/schedule-report",
      class: "SaaS Multi-Tenancy",
      severity: "Critical",
      score: "9.1",
      attackScenario: "Scheduled report jobs placed in background Redis queue without caller tenant context. The consumer worker executes under ambient service role, leaking cross-tenant records into generated CSV artifacts.",
      evidence: "Background worker generates CSV report file containing merged tenant customer records when multiple tenant export requests are queued concurrently.",
      impact: "Scheduled reports emailed or accessible across different customer accounts, violating tenant boundaries.",
      rootCause: "Worker process lacks tenant-isolated database session and executes queries without setting the session tenant ID.",
      remediation: "Bind all queued jobs to tenant context token; execute worker queries within isolated transactions setting app.current_tenant_id.",
      retest: "Verified Patched: Background jobs execute strictly under isolated tenant database contexts."
    },
    {
      id: "TTL-FINDING-03",
      title: "Cross-Tenant Data Leakage in AI / RAG Vector Search Retrieval",
      endpoint: "POST /api/v1/ai/knowledge/query",
      class: "AI / GenAI Security",
      severity: "Critical",
      score: "9.3",
      attackScenario: "Authenticated user from Tenant A submits a semantic similarity search query to the knowledge base. The vector search query omits tenant metadata filters, retrieving high-similarity document embeddings from Tenant B.",
      evidence: "POST /api/v1/ai/knowledge/query with query 'confidential compensation 2026' => HTTP 200 OK with document chunk text from Tenant B board deck.",
      impact: "Cross-tenant leakage of confidential corporate knowledge, intellectual property, and trade secrets in shared vector stores.",
      rootCause: "Pinecone index query omitted mandatory metadata filter: filter={'tenant_id': user.tenant_id}.",
      remediation: "Enforce strict tenant metadata filtering in all vector similarity queries or partition tenants into separate namespaces.",
      retest: "Verified Patched: Re-testing confirmed cross-tenant document chunks are completely excluded from retrieval results."
    },
    {
      id: "TTL-FINDING-04",
      title: "Broken Function Level Authorization (BFLA) in Workspace Role Management",
      endpoint: "PUT /api/v1/workspaces/{id}/members/{uid}/role",
      class: "RBAC & Privilege Escalation",
      severity: "High",
      score: "8.5",
      attackScenario: "Standard workspace member sends an HTTP PUT request with payload {'role': 'owner'} to elevate their own role. The endpoint lacks administrative role verification on the caller.",
      evidence: "PUT /api/v1/workspaces/ws_01/members/usr_self/role -d '{\"role\":\"owner\"}' => HTTP 200 OK with new_role: 'owner'.",
      impact: "Unauthorized vertical privilege escalation allowing low-privilege users to assume full workspace ownership.",
      rootCause: "Route handler applied basic authentication check but omitted role verification middleware (requireWorkspaceRole).",
      remediation: "Enforce RBAC middleware ensuring caller possesses Owner or Admin role before allowing role modifications.",
      retest: "Verified Patched: Role modification attempts by standard members strictly return HTTP 403 Forbidden."
    },
    {
      id: "TTL-FINDING-05",
      title: "GraphQL Circular Query Recursion & Nested Object Authorization Bypass",
      endpoint: "POST /graphql",
      class: "GraphQL Security",
      severity: "High",
      score: "7.8",
      attackScenario: "Adversary constructs a circular recursive GraphQL query (user -> workspaces -> members -> user...) 12 levels deep, causing severe CPU exhaustion and leaking nested billing details.",
      evidence: "POST /graphql with 12-level circular query => locks Node.js event loop for 8.4s and returns nested billingDetails object.",
      impact: "Application Denial of Service and unauthorized extraction of sensitive payment card metadata.",
      rootCause: "Apollo Server schema lacks query depth limiting and nested field resolvers lack authorization checks.",
      remediation: "Implement graphql-depth-limit(5) middleware and secure field resolvers using GraphQL Shield.",
      retest: "Verified Patched: Deep queries rejected with GRAPHQL_VALIDATION_FAILED; nested billing field requires Admin role."
    },
    {
      id: "TTL-FINDING-06",
      title: "Flawed JWT Verification & Replay Vulnerability in Tenant SSO Token Exchange",
      endpoint: "POST /api/v1/auth/sso/callback",
      class: "Authentication & JWT",
      severity: "Medium",
      score: "6.5",
      attackScenario: "SSO assertion tokens can be replayed within their 5-minute validity window because the backend does not record or verify the unique jti claim.",
      evidence: "Replaying intercepted SSO assertion token 60 seconds later successfully mints a second valid session token.",
      impact: "Potential session hijacking if single sign-on assertion tokens are intercepted in transit.",
      rootCause: "Missing atomic jti nonce verification in Redis cache during assertion exchange.",
      remediation: "Atomically store assertion jti in Redis with 5-minute expiration; reject repeated assertion exchanges.",
      retest: "Verified Patched: Replayed assertions strictly return HTTP 401 with 'Assertion already redeemed'."
    },
    {
      id: "TTL-FINDING-07",
      title: "Asynchronous Webhook Signature Timing Forgery & Replay Vulnerability",
      endpoint: "POST /api/v1/webhooks/billing",
      class: "API & Webhook Security",
      severity: "Medium",
      score: "5.9",
      attackScenario: "Webhook handler uses non-constant-time string comparison for HMAC signatures and lacks timestamp tolerance verification, allowing replay of historical billing events.",
      evidence: "Replaying 90-day-old payment_succeeded webhook event with original signature successfully reactivates expired subscription.",
      impact: "Falsification of subscription status, allowing unauthorized access to premium features without payment.",
      rootCause: "HMAC comparison performed with non-constant-time operator and omitted event timestamp validation.",
      remediation: "Use crypto.timingSafeEqual and enforce a strict 5-minute timestamp tolerance window.",
      retest: "Verified Patched: Webhook events older than 5 minutes rejected with HTTP 400 Bad Request."
    },
    {
      id: "TTL-FINDING-08",
      title: "Business Logic Flaw in Subscription Tier Feature Enforcement & Quota Bypass",
      endpoint: "POST /api/v1/ai/generate-report",
      class: "Business Logic",
      severity: "Low",
      score: "3.8",
      attackScenario: "AI report generation endpoint accepted client-submitted 'tier_override=enterprise' parameter in the request body, bypassing server-side monthly quota limits.",
      evidence: "POST /api/v1/ai/generate-report on exhausted Free tier account with 'tier_override':'enterprise' successfully generates report.",
      impact: "Commercial subscription quota bypass, consuming expensive AI LLM tokens without billing reconciliation.",
      rootCause: "Controller honored client-submitted tier override parameters rather than querying database subscription plan.",
      remediation: "Strip client-submitted tier parameters; validate usage strictly against database subscription plan records.",
      retest: "Verified Patched: Client-supplied tier parameters ignored; quota strictly enforced with HTTP 429."
    }
  ];

  return (
    <section className="py-20 bg-[#FAFAFA] border-t border-dashed border-neutral-200 relative" id="report-preview">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="section-container">
        
        {/* Header (Section 14: See exactly what your engineering team receives) */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-6">
            <span>Audit-Grade Deliverable Sample</span>
          </div>
          <h2 className="heading-2 mb-4 font-sans">
            See Exactly What Your <span className="text-primary">Engineering Team Receives.</span>
          </h2>
          <p className="body-text text-base text-textSecondary font-sans max-w-2xl mx-auto">
            Every TrustLayerLabs deliverable provides audit-grade clarity: affected endpoints, step-by-step attack scenarios, curl PoCs, root-cause analysis, framework-specific code fixes, and verified retesting.
          </p>
        </div>

        {/* Prominent Educational Notice */}
        <div className="max-w-5xl mx-auto p-4 bg-surface border border-border/80 rounded-2xl mb-12 flex items-start gap-3 shadow-sm">
          <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <div className="text-xs text-textSecondary leading-relaxed font-sans">
            <span className="font-bold text-textPrimary uppercase tracking-wider block mb-0.5">
              Representative example — not a client engagement.
            </span>
            This sample demonstrates how TrustLayerLabs structures findings, severity scoring (CVSS), reproducible exploit steps, code-level remediation snippets, and retest verification. The target application and findings shown are representative examples.
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Left Column: Report Controls / Summary */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-textPrimary font-mono uppercase tracking-wider">
                Assessment Report Pillars
              </h3>
              <p className="text-xs text-textSecondary leading-relaxed font-sans">
                Review the 4 sections included in every TrustLayerLabs security assessment deliverable.
              </p>
            </div>

            {/* Selector list */}
            <div className="flex flex-col space-y-2.5 font-mono text-xs uppercase tracking-wider font-semibold">
              <button
                onClick={() => {
                  trackSampleReportClick("tab_summary");
                  setActiveTab("summary");
                }}
                className={`flex items-center justify-between p-3.5 rounded-xl border transition-all text-left cursor-pointer ${
                  activeTab === "summary"
                    ? "bg-surface border-primary text-textPrimary shadow-sm"
                    : "bg-surface/40 border-border hover:border-zinc-400 text-textSecondary hover:text-textPrimary"
                }`}
              >
                <span>1. Executive Risk Summary</span>
                <ChevronRight size={14} className={activeTab === "summary" ? "text-primary" : "text-textSecondary"} />
              </button>

              <button
                onClick={() => {
                  trackSampleReportClick("tab_vulnerabilities");
                  setActiveTab("vulnerabilities");
                }}
                className={`flex items-center justify-between p-3.5 rounded-xl border transition-all text-left cursor-pointer ${
                  activeTab === "vulnerabilities"
                    ? "bg-surface border-primary text-textPrimary shadow-sm"
                    : "bg-surface/40 border-border hover:border-zinc-400 text-textSecondary hover:text-textPrimary"
                }`}
              >
                <span>2. Technical Finding + PoC</span>
                <ChevronRight size={14} className={activeTab === "vulnerabilities" ? "text-primary" : "text-textSecondary"} />
              </button>

              <button
                onClick={() => {
                  trackSampleReportClick("tab_remediation");
                  setActiveTab("remediation");
                }}
                className={`flex items-center justify-between p-3.5 rounded-xl border transition-all text-left cursor-pointer ${
                  activeTab === "remediation"
                    ? "bg-surface border-primary text-textPrimary shadow-sm"
                    : "bg-surface/40 border-border hover:border-zinc-400 text-textSecondary hover:text-textPrimary"
                }`}
              >
                <span>3. Remediation Guidance</span>
                <ChevronRight size={14} className={activeTab === "remediation" ? "text-primary" : "text-textSecondary"} />
              </button>

              <button
                onClick={() => {
                  trackSampleReportClick("tab_tracking");
                  setActiveTab("tracking");
                }}
                className={`flex items-center justify-between p-3.5 rounded-xl border transition-all text-left cursor-pointer ${
                  activeTab === "tracking"
                    ? "bg-surface border-primary text-textPrimary shadow-sm"
                    : "bg-surface/40 border-border hover:border-zinc-400 text-textSecondary hover:text-textPrimary"
                }`}
              >
                <span>4. Retest Verification</span>
                <ChevronRight size={14} className={activeTab === "tracking" ? "text-primary" : "text-textSecondary"} />
              </button>
            </div>

            {/* CTAs */}
            <div className="space-y-2 pt-2">
              <Link
                href="/free-assessment"
                onClick={() => trackFreeSecurityReviewStart("report_preview_primary")}
                className="w-full text-center flex items-center justify-center bg-primary hover:bg-primary/90 text-white text-xs uppercase tracking-wider font-sans font-bold py-3 px-4 rounded-xl shadow-md transition-all active:scale-[0.98] gap-1.5"
              >
                Get a Free Security Scoping Review
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/sample-report"
                onClick={() => trackSampleReportClick("report_preview_secondary")}
                className="w-full text-center flex items-center justify-center bg-background border border-border hover:border-zinc-400 text-textPrimary hover:text-primary text-xs uppercase tracking-wider font-sans font-semibold py-2.5 px-4 rounded-xl transition-all"
              >
                View the Sample Assessment Report
              </Link>
            </div>
          </div>

          {/* Right Column: Dynamic Preview Container */}
          <div className="lg:col-span-8 bg-surface border border-border rounded-2xl p-6 md:p-8 flex flex-col justify-between min-h-[380px] shadow-sm">
            
            <AnimatePresence mode="wait">
              {activeTab === "summary" && (
                <motion.div
                  key="summary"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between border-b border-border/60 pb-4">
                    <div>
                      <span className="text-[10px] font-mono text-blue-800 font-bold uppercase tracking-wider border border-blue-200/80 bg-blue-50 px-2 py-0.5 rounded">
                        46-Page Assessment Deliverable
                      </span>
                      <h3 className="text-sm font-bold text-textPrimary font-mono uppercase tracking-wider mt-2">
                        Ref: TTL-SAMPLE-VAPT-2026
                      </h3>
                    </div>
                    <div className="text-right font-mono text-[11px] text-textSecondary">
                      <p>Scope: API, SaaS & AI Assessment</p>
                      <p>Target: ApexCloud AI Core Platform</p>
                    </div>
                  </div>

                  <p className="text-xs text-textSecondary leading-relaxed font-sans">
                    Illustrative assessment scope: a simulated multi-tenant B2B SaaS platform featuring REST API Gateway, Apollo GraphQL, background workers, and AI/RAG vector search. Testing focuses on tenant isolation boundaries, BOLA/IDOR, RBAC escalation, asynchronous worker hygiene, and AI vector data security.
                  </p>

                  <div className="p-4 bg-background border border-border rounded-xl space-y-2 font-sans">
                    <p className="text-xs font-bold text-textPrimary font-mono uppercase tracking-wider">
                      Assessment Deliverable Structure (46 Pages):
                    </p>
                    <ul className="space-y-1.5 text-xs text-textSecondary font-sans">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span>Executive Summary & Risk Governance: High-level risk posture and strategic roadmap.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span>Architecture & Trust Boundaries: Microservices schematic, ingress vectors, and data-flow matrix.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span>8 Detailed Technical Findings: Complete 16-point audit specs with curl PoCs and code remedies.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span>Developer Remediation & Retesting: Multi-language fix snippets and verified retest matrix.</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}

              {activeTab === "vulnerabilities" && (
                <motion.div
                  key="vulnerabilities"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <div className="text-xs font-mono text-textSecondary uppercase tracking-wider border-b border-border/60 pb-3 flex justify-between items-center">
                    <span>Pillar 2: Technical Finding + PoC (Illustrative)</span>
                    <span className="text-[10px] text-primary">All 8 Core Finding Specs Included</span>
                  </div>

                  <div className="space-y-5 max-h-[360px] overflow-y-auto pr-1">
                    {vulns.map((v, idx) => (
                      <div key={idx} className="p-5 bg-background border border-border rounded-xl space-y-3 font-sans">
                        {/* 1. Finding & Severity */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/60 pb-2.5">
                          <span className="text-xs font-bold text-textPrimary font-mono">{v.id} : {v.title}</span>
                          <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold font-mono self-start sm:self-auto ${
                            v.severity === "Critical" ? "bg-red-50 border border-red-200 text-red-700" : "bg-amber-50 border border-amber-200 text-amber-800"
                          }`}>
                            {v.severity} (CVSS {v.score})
                          </span>
                        </div>

                        {/* 2. Affected Endpoint / Resource */}
                        <div className="text-xs font-mono text-textPrimary bg-surface p-2.5 rounded-lg border border-border/70">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-textSecondary block mb-0.5">Affected Endpoint / Resource:</span>
                          <code className="text-primary font-bold">{v.endpoint}</code>
                        </div>

                        {/* 3. Attack Scenario */}
                        <div className="text-xs text-textSecondary font-sans leading-relaxed">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-textSecondary font-bold block mb-0.5">Attack Scenario:</span>
                          {v.attackScenario}
                        </div>

                        {/* 4. Evidence / PoC */}
                        <div className="p-3 bg-surface border border-border rounded-lg font-mono text-[11px] text-textPrimary overflow-x-auto">
                          <div className="text-[10px] text-primary font-bold uppercase tracking-wider mb-1">PoC Reproduction Payload:</div>
                          <code>{v.evidence}</code>
                        </div>

                        {/* 5. Business Impact & 6. Root Cause */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                          <div className="p-2.5 bg-surface/50 border border-border/60 rounded-lg">
                            <span className="text-[10px] font-mono uppercase tracking-wider text-amber-900 font-bold block mb-0.5">Business Impact:</span>
                            <span className="text-textSecondary text-[11px] leading-normal">{v.impact}</span>
                          </div>
                          <div className="p-2.5 bg-surface/50 border border-border/60 rounded-lg">
                            <span className="text-[10px] font-mono uppercase tracking-wider text-textPrimary font-bold block mb-0.5">Identified Root Cause:</span>
                            <span className="text-textSecondary text-[11px] leading-normal">{v.rootCause}</span>
                          </div>
                        </div>

                        {/* 7. Remediation Guidance & 8. Retest Verification */}
                        <div className="p-3 bg-surface border border-border rounded-lg font-mono text-xs text-textPrimary space-y-2">
                          <div>
                            <div className="flex items-center gap-1.5 text-xs text-primary font-bold uppercase tracking-wider mb-1">
                              <Code size={12} /> Suggested Code Remediation:
                            </div>
                            <span className="text-[11px] text-textSecondary font-sans">{v.remediation}</span>
                          </div>
                          <div className="pt-2 border-t border-border/60 flex items-center gap-1.5 text-[10px] font-mono text-blue-900 font-bold uppercase">
                            <CheckCircle size={12} className="text-primary" />
                            <span>{v.retest}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "remediation" && (
                <motion.div
                  key="remediation"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <div className="text-xs font-mono text-textSecondary uppercase tracking-wider border-b border-border/60 pb-3">
                    Pillar 3: Developer-Ready Remediation Guidance (Illustrative)
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 bg-background border border-border rounded-xl space-y-3 font-sans">
                      <div className="text-xs font-bold text-textPrimary font-mono">
                        Node.js / Express Authorization Ownership Check
                      </div>
                      <p className="text-xs text-textSecondary leading-relaxed">
                        Rather than trusting client-provided tenant identifiers, validate caller session claims against the database resource scope.
                      </p>
                      <pre className="p-3 bg-surface border border-border rounded-lg font-mono text-[11px] text-textPrimary overflow-x-auto">
{`// Enforce tenant boundary on object resolution
async function getAccountData(req, res) {
  const { resourceId } = req.params;
  const resource = await db.find(resourceId);
  
  if (!resource || resource.tenantId !== req.user.tenantId) {
    return res.status(403).json({ error: "Access denied" });
  }
  return res.json(resource);
}`}
                      </pre>
                    </div>

                    <div className="p-4 bg-background border border-border rounded-xl space-y-2 font-sans">
                      <div className="text-xs font-bold text-textPrimary font-mono">
                        Direct Debrief with Lead Security Practitioner
                      </div>
                      <p className="text-xs text-textSecondary leading-relaxed">
                        Every assessment includes a direct code review and remediation walkthrough call with your engineering leads to ensure patches are implemented correctly without regressions.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "tracking" && (
                <motion.div
                  key="tracking"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <div className="text-xs font-mono text-textSecondary uppercase tracking-wider border-b border-border/60 pb-3">
                    Pillar 4: Retest Verification & Attestation Log (Illustrative)
                  </div>

                  <div className="space-y-2.5 max-h-[350px] overflow-y-auto pr-1">
                    {[
                      { item: "TTL-01: Enforce tenant ownership check on workspace export route", status: "Verified Patched" },
                      { item: "TTL-02: Isolate background worker DB transactions per tenant context", status: "Verified Patched" },
                      { item: "TTL-03: Implement mandatory tenant metadata filtering in Pinecone RAG search", status: "Verified Patched" },
                      { item: "TTL-04: Enforce RBAC guard on workspace member role modification route", status: "Verified Patched" },
                      { item: "TTL-05: Configure GraphQL depth limit (max 5) and secure billing resolvers", status: "Verified Patched" },
                      { item: "TTL-06: Implement atomic Redis jti nonce tracking for SSO token exchange", status: "Verified Patched" },
                      { item: "TTL-07: Enforce timingSafeEqual HMAC comparison & 5m webhook replay window", status: "Verified Patched" },
                      { item: "TTL-08: Strip client tier overrides and validate usage against database plan", status: "Verified Patched" }
                    ].map((row, idx) => (
                      <div key={idx} className="flex items-start justify-between p-3 bg-background border border-border rounded-xl font-mono text-xs">
                        <span className="text-textSecondary leading-relaxed pr-4 text-[11px]">{row.item}</span>
                        <span className="flex-shrink-0 px-2 py-0.5 bg-green-50 border border-green-200 rounded text-[9px] font-bold text-green-800 uppercase">
                          {row.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="border-t border-border/60 pt-4 mt-6 text-right font-mono text-[11px] text-textSecondary">
              <span>Standard assessment format for developer and audit reviews.</span>
            </div>
            
          </div>
          
        </div>

      </div>
    </section>
  );
}
