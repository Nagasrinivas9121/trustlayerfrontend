const { logoFooterBase64, logoBannerBase64, pageHeader, pageFooter, severityBadge } = require('./components');

module.exports = function getPages38to46() {
  const pages = [];

  // ==========================================
  // PAGE 38: REPRODUCTION STEPS & SAFE POC GUIDELINES
  // ==========================================
  pages.push(`
  <div class="page">
    ${pageHeader(38, "Reproduction Guidelines")}
    <div class="page-body">
      <div>
        <span class="section-badge">Part IV • Remediation & Verification</span>
        <h2 class="section-heading">Reproduction Steps & Safe Illustrative PoC Guidelines</h2>
        <p class="section-subheading">Engineering protocols for safely validating vulnerabilities locally without production stability risks.</p>
      </div>

      <div class="card-soft">
        <div class="font-bold text-slate-900" style="font-size: 8pt; margin-bottom: 2px;">The Discipline of Safe Vulnerability Reproduction</div>
        <p style="font-size: 7.4pt; color: #475569; margin: 0; line-height: 1.4;">
          Security findings are only as valuable as their reproducibility. However, running offensive exploits carelessly against shared staging environments can trigger cascading worker crashes, corrupt shared database indexes, or exhaust third-party API quotas. TrustLayerLabs establishes strict engineering guidelines for reproducing findings.
        </p>
      </div>

      <div class="grid-2">
        <div class="card">
          <div class="font-bold text-slate-900" style="font-size: 7.8pt; margin-bottom: 2px;">1. Staging Environment Isolation</div>
          <p style="font-size: 7.2pt; color: #475569; margin: 0; line-height: 1.35;">
            All reproduction testing must occur strictly in ephemeral staging environments populated with synthetic data. Never execute PoC scripts against production clusters, customer data stores, or live payment webhook listener endpoints.
          </p>
        </div>

        <div class="card">
          <div class="font-bold text-slate-900" style="font-size: 7.8pt; margin-bottom: 2px;">2. Synthetic Account Dual-Seeding</div>
          <p style="font-size: 7.2pt; color: #475569; margin: 0; line-height: 1.35;">
            To verify horizontal BOLA/IDOR and multi-tenant isolation, engineers must seed at least two distinct synthetic tenant organizations (<span class="font-mono text-blue-700">tenant_alpha_01</span> and <span class="font-mono text-blue-700">tenant_bravo_02</span>) with known mock records rather than testing across live user accounts.
          </p>
        </div>

        <div class="card">
          <div class="font-bold text-slate-900" style="font-size: 7.8pt; margin-bottom: 2px;">3. Idempotent & Non-Destructive Payloads</div>
          <p style="font-size: 7.2pt; color: #475569; margin: 0; line-height: 1.35;">
            Reproduction curl commands and Postman scripts must be idempotent. When testing destructive endpoints (e.g., project deletion or role demotion), test against dedicated disposable mock objects that can be recreated programmatically via test fixtures.
          </p>
        </div>

        <div class="card">
          <div class="font-bold text-slate-900" style="font-size: 7.8pt; margin-bottom: 2px;">4. Post-Reproduction Sanitization</div>
          <p style="font-size: 7.2pt; color: #475569; margin: 0; line-height: 1.35;">
            After validating an exploit path, flush test Redis job queues, clear test vector index namespaces, and purge test database rows to prevent residual test artifacts from polluting ongoing regression test suites.
          </p>
        </div>
      </div>

      <div class="card">
        <div class="font-bold text-slate-900" style="font-size: 8pt; margin-bottom: 3px;">Standardized Curl Test Execution Flags</div>
        <p style="font-size: 7.2pt; color: #475569; margin: 0 0 3px 0; line-height: 1.35;">
          When executing reproduction scripts from developer workstations, always include the following safety and traceability flags:
        </p>
        <div class="code-box" style="font-size: 6.3pt; padding: 4px 6px;">
curl -v -X [METHOD] "[TARGET_URL]" \\
  -H "Authorization: Bearer [JWT_TOKEN]" \\
  -H "X-TTL-Security-Assessment: active" \\
  -H "X-TTL-Reproduce-Finding: TTL-01" \\
  --max-time 10 --retry 0
        </div>
      </div>
    </div>
    ${pageFooter(38)}
  </div>
  `);

  // ==========================================
  // PAGE 39: ROOT CAUSE ANALYSIS ACROSS SDLC
  // ==========================================
  pages.push(`
  <div class="page">
    ${pageHeader(39, "Root Cause Analysis")}
    <div class="page-body">
      <div>
        <span class="section-badge">Section 27 • Systemic Analysis</span>
        <h2 class="section-heading">Root-Cause Analysis Across the Engineering Lifecycle</h2>
        <p class="section-subheading">Tracing vulnerabilities back to architectural assumptions, framework abstractions, and procedural gaps.</p>
      </div>

      <div class="card-soft">
        <div class="font-bold text-slate-900" style="font-size: 8pt; margin-bottom: 2px;">Moving Beyond Surface Symptom Patching</div>
        <p style="font-size: 7.4pt; color: #475569; margin: 0; line-height: 1.4;">
          Remediating individual findings without understanding their systemic root causes leads to vulnerability recurrence ("whack-a-mole" security). TrustLayerLabs analyzed the eight identified findings to uncover the foundational design patterns and development practices that enabled them.
        </p>
      </div>

      <div class="grid-2">
        <div class="card">
          <div class="font-bold text-slate-900" style="font-size: 7.8pt; margin-bottom: 2px;">1. Decentralized Authorization Logic</div>
          <p style="font-size: 7.2pt; color: #475569; margin: 0; line-height: 1.35;">
            The primary contributor to Findings 1, 4, and 5 was the lack of a centralized authorization enforcement layer. Rather than evaluating access policies in a unified middleware gateway, individual route controllers made ad-hoc authorization queries, creating gaps whenever a developer forgot to append tenancy filters.
          </p>
        </div>

        <div class="card">
          <div class="font-bold text-slate-900" style="font-size: 7.8pt; margin-bottom: 2px;">2. Context Loss Across Asynchronous Boundaries</div>
          <p style="font-size: 7.2pt; color: #475569; margin: 0; line-height: 1.35;">
            Finding 2 highlighted a classic asynchronous pipeline anti-pattern: queuing background tasks with minimal data and relying on the worker process to execute under ambient service privileges. Background jobs must carry cryptographically verified tenant context envelopes.
          </p>
        </div>

        <div class="card">
          <div class="font-bold text-slate-900" style="font-size: 7.8pt; margin-bottom: 2px;">3. The Vector Database Abstraction Gap</div>
          <p style="font-size: 7.2pt; color: #475569; margin: 0; line-height: 1.35;">
            Finding 3 stemmed from treating AI vector databases like traditional search indexes. Because embeddings lack relational foreign keys, developers assumed vector similarity distance inherently preserved confidentiality, overlooking the necessity of explicit metadata pre-filtering.
          </p>
        </div>

        <div class="card">
          <div class="font-bold text-slate-900" style="font-size: 7.8pt; margin-bottom: 2px;">4. Over-Reliance on Automated DAST Scanners</div>
          <p style="font-size: 7.2pt; color: #475569; margin: 0; line-height: 1.35;">
            ApexCloud previously relied on automated weekly vulnerability scans that reported zero critical issues. Scanners lack the business context to understand that User A should not view User B's export data, creating a false sense of security regarding logical authorization posture.
          </p>
        </div>
      </div>

      <div class="card-blue">
        <div class="font-bold text-blue-700" style="font-size: 7.8pt; margin-bottom: 2px;">Architectural Shift: Policy as Code</div>
        <p style="font-size: 7.2pt; color: #334155; margin: 0; line-height: 1.35;">
          The systemic solution to authorization fragmentation is adopting a centralized Policy-as-Code engine (such as Open Policy Agent or Cedar). Decoupling authorization logic from business application code ensures uniform policy evaluation across REST APIs, GraphQL, asynchronous workers, and AI services.
        </p>
      </div>
    </div>
    ${pageFooter(39)}
  </div>
  `);

  // ==========================================
  // PAGE 40: SEVERITY RATING METHODOLOGY (CVSS & DREAD)
  // ==========================================
  pages.push(`
  <div class="page">
    ${pageHeader(40, "Severity Rating Methodology")}
    <div class="page-body">
      <div>
        <span class="section-badge">Section 28 • Risk Scoring</span>
        <h2 class="section-heading">Severity-Rating Methodology & Risk Matrix</h2>
        <p class="section-subheading">Standardized CVSS v3.1 mathematical vectors, qualitative severity bands, and DREAD comparative scoring.</p>
      </div>

      <div class="card-soft">
        <div class="font-bold text-slate-900" style="font-size: 8pt; margin-bottom: 2px;">The CVSS v3.1 Scoring Framework</div>
        <p style="font-size: 7.4pt; color: #475569; margin: 0; line-height: 1.4;">
          TrustLayerLabs utilizes the Common Vulnerability Scoring System (CVSS v3.1) maintained by FIRST. CVSS provides an open, deterministic mathematical framework evaluating Base Metrics across two core sub-scores: <strong>Exploitability Metrics</strong> (Attack Vector, Attack Complexity, Privileges Required, User Interaction) and <strong>Impact Metrics</strong> (Confidentiality, Integrity, Availability).
        </p>
      </div>

      <div class="card">
        <div class="font-bold text-slate-900" style="font-size: 8pt; margin-bottom: 3px;">Qualitative Severity Bands & SLA Guidelines</div>
        <table class="data-table">
          <thead>
            <tr>
              <th style="width: 15%;">Severity</th>
              <th style="width: 15%;">CVSS Range</th>
              <th style="width: 45%;">Qualitative Definition & Impact Criteria</th>
              <th style="width: 25%;">Remediation SLA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="badge badge-critical">CRITICAL</span></td>
              <td class="font-mono font-bold text-red-700">9.0 – 10.0</td>
              <td>Direct, unauthenticated or low-privilege exploit resulting in complete cross-tenant data exfiltration or remote code execution.</td>
              <td class="font-bold text-red-700">Immediate (24–48 Hours)</td>
            </tr>
            <tr>
              <td><span class="badge badge-high">HIGH</span></td>
              <td class="font-mono font-bold text-amber-700">7.0 – 8.9</td>
              <td>Privilege escalation (BFLA), Denial of Service, or unauthorized modification of sensitive administrative settings.</td>
              <td class="font-bold text-amber-700">Current Sprint (7 Days)</td>
            </tr>
            <tr>
              <td><span class="badge badge-medium">MEDIUM</span></td>
              <td class="font-mono font-bold text-blue-700">4.0 – 6.9</td>
              <td>Vulnerabilities requiring specific pre-conditions, timing attack windows, or token interception in transit.</td>
              <td class="font-bold">Next Sprint (14–30 Days)</td>
            </tr>
            <tr>
              <td><span class="badge badge-low">LOW</span></td>
              <td class="font-mono font-bold text-slate-600">0.1 – 3.9</td>
              <td>Minor information disclosure, quota bypasses without data compromise, or hardening opportunities.</td>
              <td class="font-bold">Scheduled Backlog (60 Days)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="grid-2">
        <div class="card">
          <div class="font-bold text-slate-900" style="font-size: 7.8pt; margin-bottom: 2px;">DREAD Comparative Model Alignment</div>
          <p style="font-size: 7.2pt; color: #475569; margin: 0 0 3px 0; line-height: 1.35;">
            To provide business stakeholders with intuitive risk context, findings are also calibrated against Microsoft's DREAD model:
          </p>
          <ul style="font-size: 7pt; color: #475569; margin: 0; padding-left: 12px; line-height: 1.35;">
            <li><strong>Damage:</strong> Extent of cross-tenant exposure.</li>
            <li><strong>Reproducibility:</strong> How easily is the exploit replayed?</li>
            <li><strong>Exploitability:</strong> Technical skill required.</li>
            <li><strong>Affected Users:</strong> Proportion of customer tenants at risk.</li>
            <li><strong>Discoverability:</strong> Ease of identifying the endpoint.</li>
          </ul>
        </div>

        <div class="card-soft">
          <div class="font-bold text-slate-900" style="font-size: 7.8pt; margin-bottom: 2px;">No Arbitrary Scoring Guarantee</div>
          <p style="font-size: 7.2pt; color: #475569; margin: 0; line-height: 1.35;">
            TrustLayerLabs never assigns subjective or arbitrary severity ratings. Every score published in this report includes its complete, auditable CVSS v3.1 vector string (e.g., <span class="font-mono text-blue-700">CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:N/A:N</span>), allowing independent verification by client security teams.
          </p>
        </div>
      </div>
    </div>
    ${pageFooter(40)}
  </div>
  `);

  // ==========================================
  // PAGE 41: PRIORITIZED REMEDIATION ROADMAP
  // ==========================================
  pages.push(`
  <div class="page">
    ${pageHeader(41, "Remediation Roadmap")}
    <div class="page-body">
      <div>
        <span class="section-badge">Section 29 • Execution Plan</span>
        <h2 class="section-heading">Prioritized Remediation Roadmap</h2>
        <p class="section-subheading">A phased four-wave engineering execution plan structured by risk urgency and implementation effort.</p>
      </div>

      <div class="card-soft">
        <div class="font-bold text-slate-900" style="font-size: 8pt; margin-bottom: 2px;">Engineering Remediation Phasing Overview</div>
        <p style="font-size: 7.4pt; color: #475569; margin: 0; line-height: 1.4;">
          Remediation must be phased strategically to mitigate immediate existential risks first without disrupting planned product release schedules. The following four-phase roadmap guided ApexCloud engineering from initial disclosure through verified retesting.
        </p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 4px;">
        
        <div class="card" style="padding: 5px 8px; border-left: 3.5px solid #dc2626;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span class="font-bold text-red-700" style="font-size: 7.8pt;">Phase 1: Emergency Hotfixes (Hours 0 – 48)</span>
            <span class="badge badge-critical">IMMEDIATE</span>
          </div>
          <ul style="font-size: 7.1pt; color: #475569; margin: 2px 0 0 0; padding-left: 14px; line-height: 1.35;">
            <li><strong>TTL-01:</strong> Patch workspace export route to enforce <span class="font-mono">where: { id, tenantId: req.user.tenantId }</span>. Deploy temporary WAF regex rule blocking cross-tenant export IDs.</li>
            <li><strong>TTL-02:</strong> Restrict background reporting worker concurrency; wrap job execution in tenant-scoped DB transactions.</li>
            <li><strong>TTL-03:</strong> Inject mandatory <span class="font-mono">filter={"tenant_id": user.tenant_id}</span> into FastAPI Pinecone query function.</li>
          </ul>
        </div>

        <div class="card" style="padding: 5px 8px; border-left: 3.5px solid #ea580c;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span class="font-bold text-amber-700" style="font-size: 7.8pt;">Phase 2: Tactical Sprint Fixes (Days 3 – 10)</span>
            <span class="badge badge-high">SPRINT PRIORITY</span>
          </div>
          <ul style="font-size: 7.1pt; color: #475569; margin: 2px 0 0 0; padding-left: 14px; line-height: 1.35;">
            <li><strong>TTL-04:</strong> Implement <span class="font-mono">requireWorkspaceRole(['admin', 'owner'])</span> middleware guard on member role update endpoints.</li>
            <li><strong>TTL-05:</strong> Install <span class="font-mono">graphql-depth-limit(5)</span> and secure nested <span class="font-mono">billingDetails</span> resolver using GraphQL Shield.</li>
            <li><strong>TTL-07:</strong> Switch webhook HMAC check to <span class="font-mono">crypto.timingSafeEqual</span> with 5-minute timestamp tolerance check.</li>
          </ul>
        </div>

        <div class="card" style="padding: 5px 8px; border-left: 3.5px solid #2563eb;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span class="font-bold text-blue-700" style="font-size: 7.8pt;">Phase 3: Architectural Hardening (Days 10 – 30)</span>
            <span class="badge badge-low">MEDIUM-TERM</span>
          </div>
          <ul style="font-size: 7.1pt; color: #475569; margin: 2px 0 0 0; padding-left: 14px; line-height: 1.35;">
            <li><strong>TTL-06:</strong> Implement Redis-backed <span class="font-mono">jti</span> replay cache for SSO token exchanges with automated 5m TTL expiration.</li>
            <li><strong>TTL-08:</strong> Purge client-side <span class="font-mono">tier_override</span> parameter; enforce database plan quota checks.</li>
            <li>Activate PostgreSQL native Row-Level Security (RLS) across all multi-tenant tables as a defense-in-depth safety net.</li>
          </ul>
        </div>

        <div class="card" style="padding: 5px 8px; border-left: 3.5px solid #16a34a;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span class="font-bold text-green-700" style="font-size: 7.8pt;">Phase 4: Continuous CI/CD Gate Integration (Day 30+)</span>
            <span class="badge badge-verified">LONG-TERM</span>
          </div>
          <ul style="font-size: 7.1pt; color: #475569; margin: 2px 0 0 0; padding-left: 14px; line-height: 1.35;">
            <li>Incorporate automated BOLA regression tests into GitHub Actions pull request workflows.</li>
            <li>Implement automated vector search unit tests verifying tenant metadata filters on every AI microservice PR.</li>
            <li>Schedule formal semi-annual manual VAPT audit with TrustLayerLabs prior to major SOC 2 Type II attestation.</li>
          </ul>
        </div>

      </div>
    </div>
    ${pageFooter(41)}
  </div>
  `);

  // ==========================================
  // PAGE 42: DEVELOPER REMEDIATION CODE GUIDANCE
  // ==========================================
  pages.push(`
  <div class="page">
    ${pageHeader(42, "Developer Remediation Code")}
    <div class="page-body">
      <div>
        <span class="section-badge">Section 30 • Code Implementation</span>
        <h2 class="section-heading">Developer-Focused Remediation Code Guidance</h2>
        <p class="section-subheading">Production-grade code implementations in TypeScript, Python, and PostgreSQL RLS to prevent recurring vulnerabilities.</p>
      </div>

      <div class="grid-2">
        <div class="card" style="padding: 4px 6px;">
          <div class="code-header">1. TypeScript: Centralized Tenant Context Guard</div>
          <div class="code-box" style="font-size: 6pt;">
import { Request, Response, NextFunction } from 'express';

export function enforceTenantScope(req: Request, res: Response, next: NextFunction) {
  const sessionTenant = req.user?.tenantId;
  const targetTenant = req.params.tenantId || req.body.tenantId;

  if (targetTenant && targetTenant !== sessionTenant) {
    return res.status(403).json({
      error: "TENANT_MISMATCH",
      message: "Cross-tenant access strictly forbidden"
    });
  }
  next();
}
          </div>
        </div>

        <div class="card" style="padding: 4px 6px;">
          <div class="code-header">2. Python: Secure RAG Vector Search Wrapper</div>
          <div class="code-box" style="font-size: 6pt;">
from pinecone import Index

def secure_rag_search(index: Index, query_vec: list, tenant_id: str, k: int = 5):
    """Enforces immutable metadata filtering on vector similarity queries."""
    if not tenant_id:
        raise ValueError("Tenant ID required for isolated vector retrieval")
    
    return index.query(
        vector=query_vec,
        top_k=k,
        filter={"tenant_id": {"$eq": tenant_id}},
        include_metadata=True
    )
          </div>
        </div>
      </div>

      <div class="grid-2">
        <div class="card" style="padding: 4px 6px;">
          <div class="code-header">3. Node.js: Constant-Time Webhook Verification</div>
          <div class="code-box" style="font-size: 6pt;">
import crypto from 'crypto';

export function verifyWebhook(payload: Buffer, signature: string, secret: string): boolean {
  const computed = 'sha256=' + crypto.createHmac('sha256', secret).update(payload).digest('hex');
  const bufSig = Buffer.from(signature);
  const bufComp = Buffer.from(computed);
  
  if (bufSig.length !== bufComp.length) return false;
  return crypto.timingSafeEqual(bufSig, bufComp);
}
          </div>
        </div>

        <div class="card" style="padding: 4px 6px;">
          <div class="code-header">4. PostgreSQL: Row-Level Security (RLS) Policy</div>
          <div class="code-box" style="font-size: 6pt;">
-- Enable PostgreSQL Row-Level Security
ALTER TABLE workspaces ENABLE ROW LEVEL SECURITY;

-- Enforce strict tenant isolation policy on table
CREATE POLICY tenant_isolation_policy ON workspaces
  FOR ALL
  USING (tenant_id = current_setting('app.current_tenant_id', true)::uuid);
          </div>
        </div>
      </div>

      <div class="card-soft" style="padding: 4px 8px;">
        <span class="font-bold text-slate-900" style="font-size: 7.2pt;">Developer Implementation Principle:</span>
        <span class="text-xs text-slate-600"> Security logic should always be embedded directly into base data access layers and middleware decorators, ensuring that feature developers cannot accidentally bypass tenancy checks when writing new API routes.</span>
      </div>
    </div>
    ${pageFooter(42)}
  </div>
  `);

  // ==========================================
  // PAGE 43: RETESTING & VERIFICATION METHODOLOGY
  // ==========================================
  pages.push(`
  <div class="page">
    ${pageHeader(43, "Retesting Methodology")}
    <div class="page-body">
      <div>
        <span class="section-badge">Section 31 • Verification Lifecycle</span>
        <h2 class="section-heading">Retesting & Verification Methodology</h2>
        <p class="section-subheading">TrustLayerLabs complimentary 30-day retesting workflow: From patch deployment to final verified attestation.</p>
      </div>

      <div class="card-soft">
        <div class="font-bold text-slate-900" style="font-size: 8pt; margin-bottom: 2px;">The TrustLayerLabs Retesting Commitment</div>
        <p style="font-size: 7.4pt; color: #475569; margin: 0; line-height: 1.4;">
          A penetration testing report that stops at finding disclosure leaves engineering teams with uncertainty regarding whether patches were implemented correctly or introduced secondary regressions. TrustLayerLabs provides complimentary retesting within 30 days of deliverable issuance, partnering directly with developers to verify every deployed fix.
        </p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 4px;">
        
        <div class="card" style="padding: 5px 8px; border-left: 3.5px solid #2563eb;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span class="font-bold text-slate-900" style="font-size: 7.8pt;">Step 1: Patch Submission & Code Review Walkthrough</span>
            <span class="badge badge-low">Step 1</span>
          </div>
          <p style="font-size: 7.1pt; color: #475569; margin: 2px 0 0 0; line-height: 1.35;">
            Client engineering team notifies TrustLayerLabs of patch deployment, providing git pull request links and staging deployment tags for architectural review.
          </p>
        </div>

        <div class="card" style="padding: 5px 8px; border-left: 3.5px solid #2563eb;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span class="font-bold text-slate-900" style="font-size: 7.8pt;">Step 2: Environment Verification & Re-Seeding</span>
            <span class="badge badge-low">Step 2</span>
          </div>
          <p style="font-size: 7.1pt; color: #475569; margin: 2px 0 0 0; line-height: 1.35;">
            TrustLayerLabs validates that staging runs the updated build and seeds fresh synthetic test accounts across Tenant A and Tenant B to ensure testing validity.
          </p>
        </div>

        <div class="card" style="padding: 5px 8px; border-left: 3.5px solid #ea580c;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span class="font-bold text-slate-900" style="font-size: 7.8pt;">Step 3: Exploit Reproduction Re-Execution</span>
            <span class="badge badge-high">Step 3</span>
          </div>
          <p style="font-size: 7.1pt; color: #475569; margin: 2px 0 0 0; line-height: 1.35;">
            Practitioners re-execute the exact original curl PoC scripts and boundary payloads to verify that the vulnerability can no longer be triggered under identical preconditions.
          </p>
        </div>

        <div class="card" style="padding: 5px 8px; border-left: 3.5px solid #ea580c;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span class="font-bold text-slate-900" style="font-size: 7.8pt;">Step 4: Adjacent Boundary Regression Testing</span>
            <span class="badge badge-high">Step 4</span>
          </div>
          <p style="font-size: 7.1pt; color: #475569; margin: 2px 0 0 0; line-height: 1.35;">
            Practitioners probe adjacent endpoints and secondary workflows (e.g., related workspace routes or GraphQL fields) to confirm the patch did not introduce functional regressions or new bypass paths.
          </p>
        </div>

        <div class="card" style="padding: 5px 8px; border-left: 3.5px solid #16a34a;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span class="font-bold text-slate-900" style="font-size: 7.8pt;">Step 5: Updated Report Issuance & Executive Attestation</span>
            <span class="badge badge-verified">Step 5</span>
          </div>
          <p style="font-size: 7.1pt; color: #475569; margin: 2px 0 0 0; line-height: 1.35;">
            TrustLayerLabs updates the master findings matrix with verified status dates and issues a signed, auditor-ready VAPT Attestation Letter for customer enterprise procurement reviews.
          </p>
        </div>

      </div>

      <div class="card-green" style="padding: 5px 10px; font-size: 7.2pt;">
        <span class="font-bold text-green-700">Audit-Grade Outcome:</span> Retesting transforms an adversarial vulnerability inventory into documented proof of security hardening, fulfilling critical vendor risk assessment requirements for SOC 2 and ISO 27001 auditors.
      </div>
    </div>
    ${pageFooter(43)}
  </div>
  `);

  // ==========================================
  // PAGE 44: RETEST RESULTS MATRIX
  // ==========================================
  pages.push(`
  <div class="page">
    ${pageHeader(44, "Retest Results Matrix")}
    <div class="page-body">
      <div>
        <span class="section-badge">Section 32 • Verification Audit</span>
        <h2 class="section-heading">Illustrative Retest-Results Matrix</h2>
        <p class="section-subheading">Formal tracking register documenting the post-remediation verification status for all eight (8) findings.</p>
      </div>

      <div class="card">
        <table class="data-table">
          <thead>
            <tr>
              <th style="width: 14%;">Finding ID</th>
              <th style="width: 26%;">Vulnerability Title</th>
              <th style="width: 14%;">Initial Severity</th>
              <th style="width: 16%;">Retest Date</th>
              <th style="width: 16%;">Retest Verdict</th>
              <th style="width: 14%;">Residual Risk</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="font-mono font-bold">TTL-FINDING-01</td>
              <td class="font-bold">BOLA/IDOR on Workspace Export</td>
              <td><span class="badge badge-critical">CRITICAL (9.8)</span></td>
              <td class="font-mono">June 27, 2026</td>
              <td><span class="badge badge-verified">VERIFIED PATCHED</span></td>
              <td><span class="badge badge-low">NONE</span></td>
            </tr>
            <tr>
              <td class="font-mono font-bold">TTL-FINDING-02</td>
              <td class="font-bold">Async Worker Context Bleed</td>
              <td><span class="badge badge-critical">CRITICAL (9.1)</span></td>
              <td class="font-mono">June 27, 2026</td>
              <td><span class="badge badge-verified">VERIFIED PATCHED</span></td>
              <td><span class="badge badge-low">NONE</span></td>
            </tr>
            <tr>
              <td class="font-mono font-bold">TTL-FINDING-03</td>
              <td class="font-bold">AI/RAG Vector Store Document Leak</td>
              <td><span class="badge badge-critical">CRITICAL (9.3)</span></td>
              <td class="font-mono">June 28, 2026</td>
              <td><span class="badge badge-verified">VERIFIED PATCHED</span></td>
              <td><span class="badge badge-low">NONE</span></td>
            </tr>
            <tr>
              <td class="font-mono font-bold">TTL-FINDING-04</td>
              <td class="font-bold">BFLA in Workspace Role Management</td>
              <td><span class="badge badge-high">HIGH (8.5)</span></td>
              <td class="font-mono">June 27, 2026</td>
              <td><span class="badge badge-verified">VERIFIED PATCHED</span></td>
              <td><span class="badge badge-low">NONE</span></td>
            </tr>
            <tr>
              <td class="font-mono font-bold">TTL-FINDING-05</td>
              <td class="font-bold">GraphQL Circular Recursion & Auth</td>
              <td><span class="badge badge-high">HIGH (7.8)</span></td>
              <td class="font-mono">June 28, 2026</td>
              <td><span class="badge badge-verified">VERIFIED PATCHED</span></td>
              <td><span class="badge badge-low">NONE</span></td>
            </tr>
            <tr>
              <td class="font-mono font-bold">TTL-FINDING-06</td>
              <td class="font-bold">JWT SSO Token Exchange Replay</td>
              <td><span class="badge badge-medium">MEDIUM (6.5)</span></td>
              <td class="font-mono">June 28, 2026</td>
              <td><span class="badge badge-verified">VERIFIED PATCHED</span></td>
              <td><span class="badge badge-low">NONE</span></td>
            </tr>
            <tr>
              <td class="font-mono font-bold">TTL-FINDING-07</td>
              <td class="font-bold">Webhook Signature Timing & Replay</td>
              <td><span class="badge badge-medium">MEDIUM (5.9)</span></td>
              <td class="font-mono">June 28, 2026</td>
              <td><span class="badge badge-verified">VERIFIED PATCHED</span></td>
              <td><span class="badge badge-low">NONE</span></td>
            </tr>
            <tr>
              <td class="font-mono font-bold">TTL-FINDING-08</td>
              <td class="font-bold">Quota Bypass via Client Claims</td>
              <td><span class="badge badge-low">LOW (3.8)</span></td>
              <td class="font-mono">June 28, 2026</td>
              <td><span class="badge badge-verified">VERIFIED PATCHED</span></td>
              <td><span class="badge badge-low">NONE</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="card-green">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 2px;">
          <span class="font-bold text-green-700" style="font-size: 8pt;">Formal Retest Verification Declaration</span>
          <span class="badge badge-verified">100% REMEDIATION VERIFIED</span>
        </div>
        <p style="font-size: 7.2pt; color: #14532d; margin: 0; line-height: 1.35;">
          TrustLayerLabs offensive security practitioners independently re-tested all eight (8) identified findings on the staging environment (Build: <span class="font-mono">v2.4.0-patch4</span>) between June 26 and June 28, 2026. All patches were confirmed effective against the original PoC vectors with zero detected bypasses.
        </p>
      </div>

      <div class="card-soft" style="display: flex; justify-content: space-between; align-items: center; padding: 6px 12px;">
        <span class="text-xs font-mono text-slate-600">Verification Lead: Nagasrinivasa Rao, Lead Security Architect</span>
        <span class="text-xs font-mono text-green-700 font-bold">Attestation Hash: SHA256-RETEST-VERIFIED-2026</span>
      </div>
    </div>
    ${pageFooter(44)}
  </div>
  `);

  // ==========================================
  // PAGE 45: RESIDUAL RISK & EXECUTIVE CONCLUSION
  // ==========================================
  pages.push(`
  <div class="page">
    ${pageHeader(45, "Residual Risk & Conclusion")}
    <div class="page-body">
      <div>
        <span class="section-badge">Section 33 • Strategic Advice</span>
        <h2 class="section-heading">Residual Risk Posture & Strategic Recommendations</h2>
        <p class="section-subheading">Evaluating overall application security posture post-remediation and long-term architectural defense guidance.</p>
      </div>

      <div class="card-soft">
        <div class="font-bold text-slate-900" style="font-size: 8pt; margin-bottom: 2px;">Post-Remediation Security Posture Evaluation</div>
        <p style="font-size: 7.4pt; color: #475569; margin: 0; line-height: 1.4;">
          With the successful deployment and verification of patches addressing all eight identified findings, the overall security posture of the ApexCloud AI platform has transitioned from <strong>High Risk</strong> to <strong>Substantially Hardened / Enterprise Production-Ready</strong>. The critical attack vectors threatening tenant isolation and vector data confidentiality have been mitigated.
        </p>
      </div>

      <div class="grid-2">
        <div class="card">
          <div class="font-bold text-slate-900" style="font-size: 7.8pt; margin-bottom: 2px;">1. Adopt Centralized Policy as Code (OPA / OpenFGA)</div>
          <p style="font-size: 7.2pt; color: #475569; margin: 0; line-height: 1.35;">
            Migrate from procedural route-level permission checks to an externalized authorization engine (such as Open Policy Agent or Zanzibar-inspired OpenFGA). Centralizing authorization rules in declarative policies prevents individual feature developers from omitting tenancy checks.
          </p>
        </div>

        <div class="card">
          <div class="font-bold text-slate-900" style="font-size: 7.8pt; margin-bottom: 2px;">2. Institute Automated Multi-Tenant Integration Tests</div>
          <p style="font-size: 7.2pt; color: #475569; margin: 0; line-height: 1.35;">
            Embed automated BOLA regression tests into the CI/CD pipeline. Every newly registered API route must have an automated test asserting that Session A attempting to access Session B objects receives a strict HTTP 403 Forbidden before code can merge into main.
          </p>
        </div>

        <div class="card">
          <div class="font-bold text-slate-900" style="font-size: 7.8pt; margin-bottom: 2px;">3. Hardened Vector Multi-Tenancy Architecture</div>
          <p style="font-size: 7.2pt; color: #475569; margin: 0; line-height: 1.35;">
            Consider partitioning vector store data into dedicated tenant namespaces or isolated index collections rather than relying purely on query metadata filters. Physical or namespace-level vector isolation provides defense-in-depth against filter omission regressions.
          </p>
        </div>

        <div class="card">
          <div class="font-bold text-slate-900" style="font-size: 7.8pt; margin-bottom: 2px;">4. Continuous Secrets & Token Revocation Monitoring</div>
          <p style="font-size: 7.2pt; color: #475569; margin: 0; line-height: 1.35;">
            Implement automated secret scanning across all git repositories and establish active alerting on Redis Deny-List spikes to detect token brute-force or credential abuse attempts in real time.
          </p>
        </div>
      </div>

      <div class="card-green">
        <div class="font-bold text-green-700" style="font-size: 7.8pt; margin-bottom: 2px;">Executive Closing Sign-Off & Attestation</div>
        <p style="font-size: 7.2pt; color: #14532d; margin: 0; line-height: 1.35;">
          The collaborative engagement between TrustLayerLabs and the ApexCloud engineering team demonstrated high technical maturity, resulting in the rapid remediation and formal retest verification of all critical and high-severity findings. ApexCloud is well-positioned for SOC 2 Type II compliance reviews and enterprise vendor risk evaluations.
        </p>
      </div>
    </div>
    ${pageFooter(45)}
  </div>
  `);

  // ==========================================
  // PAGE 46: APPENDICES, CHECKLIST & CONTACT
  // ==========================================
  pages.push(`
  <div class="page">
    ${pageHeader(46, "Appendices & Advisory Contacts")}
    <div class="page-body">
      <div>
        <span class="section-badge">Section 34 • Appendices & Engagement</span>
        <h2 class="section-heading">Appendices, 32-Pt Checklist & Official Contacts</h2>
        <p class="section-subheading">Technical reference mapping, TrustLayerLabs API checklist baseline, and official practice leadership contacts.</p>
      </div>

      <div class="card">
        <div class="font-bold text-slate-900" style="font-size: 8pt; margin-bottom: 3px;">Appendix A: TrustLayerLabs 32-Point API Security Baseline Checklist (Summary)</div>
        <table class="data-table">
          <tr>
            <th style="width: 25%;">Domain</th>
            <th style="width: 50%;">Core Verification Controls</th>
            <th style="width: 25%;">Compliance Alignment</th>
          </tr>
          <tr>
            <td class="font-bold">Identity & Session</td>
            <td>Short-lived JWTs (≤15m), bcrypt/Argon2id, TOTP MFA, Redis Deny-List revocation.</td>
            <td>NIST SP 800-63B / SOC 2 CC6.1</td>
          </tr>
          <tr>
            <td class="font-bold">Object Authorization</td>
            <td>Strict tenant-scoped ORM queries, BOLA dual-session testing, No raw UUID trust.</td>
            <td>OWASP API1:2023 / DPDP Act</td>
          </tr>
          <tr>
            <td class="font-bold">Asynchronous Queues</td>
            <td>Immutable signed tenant envelopes on jobs, Isolated worker DB transactions.</td>
            <td>ISO 27001 A.12.1.2</td>
          </tr>
          <tr>
            <td class="font-bold">AI & Vector Stores</td>
            <td>Mandatory tenant metadata pre-filters, namespace partitioning, Prompt sanitization.</td>
            <td>OWASP LLM02:2025</td>
          </tr>
        </table>
      </div>

      <div class="card-soft">
        <div class="font-bold text-slate-900" style="font-size: 8pt; margin-bottom: 3px;">Appendix B: Cryptographic Document Verification</div>
        <div style="font-size: 7.1pt; color: #475569; line-height: 1.35;">
          This deliverable is cryptographically signed to prevent unauthorized modification. To verify document integrity, calculate the SHA-256 hash of this PDF file and compare against the official TrustLayerLabs registry fingerprint:
        </div>
        <div class="code-box" style="font-size: 6.2pt; margin-top: 3px;">
SHA256 Fingerprint: 8f4c2b91e70d44a1936c5b9f71c42938a9d18e7e10984a1d4bc628f39c27e8a4
Verification Command: sha256sum trustlayerlabs-sample-vapt-report.pdf
        </div>
      </div>

      <!-- Practice Leadership & Contact Box -->
      <div style="background: linear-gradient(135deg, #090d16 0%, #1e3a8a 100%); color: #ffffff; border-radius: 6px; padding: 10px 14px; border: 1px solid #3b82f6;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <img src="data:image/png;base64,${logoBannerBase64}" alt="TrustLayerLabs" style="height: 24px; width: auto; filter: brightness(1.1);" />
          <span style="font-family: 'JetBrains Mono', monospace; font-size: 7pt; color: #93c5fd; text-transform: uppercase;">Practitioner-Led Security</span>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 7.2pt; border-top: 1px solid rgba(255,255,255,0.15); padding-top: 6px;">
          <div>
            <div style="font-weight: 700; color: #ffffff;">Lead Practitioner Contact:</div>
            <div style="color: #cbd5e1;">Nagasrinivasa Rao — Founder & Lead Security Architect</div>
            <div style="color: #94a3b8; font-size: 6.8pt;">Offensive Security Specialist (IIT Guwahati)</div>
            <div style="color: #93c5fd; margin-top: 2px;">Email: ceo@trustlayerlabs.co.in • Phone: +91 93912 20328</div>
          </div>
          <div style="text-align: right;">
            <div style="font-weight: 700; color: #ffffff;">Schedule an Architecture Scoping Call:</div>
            <div style="color: #cbd5e1;">Website: https://trustlayerlabs.co.in</div>
            <div style="color: #93c5fd;">Booking: https://cal.com/nagasrinivasarao/30min</div>
            <div style="color: #94a3b8; font-size: 6.8pt; margin-top: 2px;">LinkedIn: linkedin.com/company/trustlayerlabs1/</div>
          </div>
        </div>
      </div>
    </div>
    ${pageFooter(46)}
  </div>
  `);

  return pages;
};
