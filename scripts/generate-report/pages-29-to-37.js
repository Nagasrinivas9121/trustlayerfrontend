const { pageHeader, pageFooter, severityBadge } = require('./components');

module.exports = function getPages29to37() {
  const pages = [];

  // ==========================================
  // PAGE 29: FINDINGS REGISTER & SEVERITY MATRIX
  // ==========================================
  pages.push(`
  <div class="page">
    ${pageHeader(29, "Findings Master Register")}
    <div class="page-body">
      <div>
        <span class="section-badge">Part III • Vulnerability Register</span>
        <h2 class="section-heading">Illustrative Findings Register & Master Severity Matrix</h2>
        <p class="section-subheading">Consolidated inventory of all eight (8) identified illustrative findings with CVSS v3.1 scoring and CWE/OWASP mappings.</p>
      </div>

      <div class="card">
        <table class="data-table">
          <thead>
            <tr>
              <th style="width: 14%;">Finding ID</th>
              <th style="width: 28%;">Vulnerability Title</th>
              <th style="width: 14%;">Severity</th>
              <th style="width: 10%;">CVSS</th>
              <th style="width: 18%;">OWASP / CWE</th>
              <th style="width: 16%;">Retest Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="font-mono font-bold text-red-700">TTL-FINDING-01</td>
              <td class="font-bold">BOLA/IDOR on Workspace Export Endpoint</td>
              <td><span class="badge badge-critical">CRITICAL</span></td>
              <td class="font-mono font-bold text-red-700">9.8</td>
              <td class="font-mono">API1:2023 / CWE-639</td>
              <td><span class="badge badge-verified">VERIFIED PATCHED</span></td>
            </tr>
            <tr>
              <td class="font-mono font-bold text-red-700">TTL-FINDING-02</td>
              <td class="font-bold">Async Background Worker Tenant Context Bleed</td>
              <td><span class="badge badge-critical">CRITICAL</span></td>
              <td class="font-mono font-bold text-red-700">9.1</td>
              <td class="font-mono">API1:2023 / CWE-284</td>
              <td><span class="badge badge-verified">VERIFIED PATCHED</span></td>
            </tr>
            <tr>
              <td class="font-mono font-bold text-red-700">TTL-FINDING-03</td>
              <td class="font-bold">AI/RAG Vector Store Document Leakage</td>
              <td><span class="badge badge-critical">CRITICAL</span></td>
              <td class="font-mono font-bold text-red-700">9.3</td>
              <td class="font-mono">LLM02:2025 / CWE-200</td>
              <td><span class="badge badge-verified">VERIFIED PATCHED</span></td>
            </tr>
            <tr>
              <td class="font-mono font-bold text-amber-700">TTL-FINDING-04</td>
              <td class="font-bold">BFLA in Workspace Role Management</td>
              <td><span class="badge badge-high">HIGH</span></td>
              <td class="font-mono font-bold text-amber-700">8.5</td>
              <td class="font-mono">API5:2023 / CWE-285</td>
              <td><span class="badge badge-verified">VERIFIED PATCHED</span></td>
            </tr>
            <tr>
              <td class="font-mono font-bold text-amber-700">TTL-FINDING-05</td>
              <td class="font-bold">GraphQL Circular Recursion & Nested Auth Bypass</td>
              <td><span class="badge badge-high">HIGH</span></td>
              <td class="font-mono font-bold text-amber-700">7.8</td>
              <td class="font-mono">API8:2023 / CWE-400</td>
              <td><span class="badge badge-verified">VERIFIED PATCHED</span></td>
            </tr>
            <tr>
              <td class="font-mono font-bold text-blue-700">TTL-FINDING-06</td>
              <td class="font-bold">Flawed JWT SSO Token Exchange Replay</td>
              <td><span class="badge badge-medium">MEDIUM</span></td>
              <td class="font-mono font-bold text-blue-700">6.5</td>
              <td class="font-mono">API2:2023 / CWE-287</td>
              <td><span class="badge badge-verified">VERIFIED PATCHED</span></td>
            </tr>
            <tr>
              <td class="font-mono font-bold text-blue-700">TTL-FINDING-07</td>
              <td class="font-bold">Webhook Signature Timing Forgery & Replay</td>
              <td><span class="badge badge-medium">MEDIUM</span></td>
              <td class="font-mono font-bold text-blue-700">5.9</td>
              <td class="font-mono">API8:2023 / CWE-345</td>
              <td><span class="badge badge-verified">VERIFIED PATCHED</span></td>
            </tr>
            <tr>
              <td class="font-mono font-bold text-blue-700">TTL-FINDING-08</td>
              <td class="font-bold">Business Logic Quota Bypass via Client Claims</td>
              <td><span class="badge badge-low">LOW</span></td>
              <td class="font-mono font-bold text-blue-700">3.8</td>
              <td class="font-mono">API6:2023 / CWE-840</td>
              <td><span class="badge badge-verified">VERIFIED PATCHED</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="grid-2">
        <div class="card-soft">
          <div class="font-bold text-slate-900" style="font-size: 7.8pt; margin-bottom: 2px;">Vulnerability Distribution by Severity</div>
          <p style="font-size: 7.2pt; color: #475569; margin: 0; line-height: 1.35;">
            The findings distribution reflects a concentration of high-impact flaws in access control and authorization (3 Critical, 2 High). This aligns with industry research showing that automated tools excel at detecting syntactic issues (e.g., outdated packages) while human testers discover logical authorization flaws.
          </p>
        </div>

        <div class="card-green">
          <div class="font-bold text-green-700" style="font-size: 7.8pt; margin-bottom: 2px;">Post-Retest Verification Summary</div>
          <p style="font-size: 7.2pt; color: #14532d; margin: 0; line-height: 1.35;">
            All eight vulnerabilities were verified as successfully patched during the retest window (June 26–28, 2026). Each fix underwent individual PoC regression execution to ensure both patch efficacy and zero collateral feature degradation.
          </p>
        </div>
      </div>
    </div>
    ${pageFooter(29)}
  </div>
  `);

  // ==========================================
  // PAGE 30: FINDING 01 (BOLA / IDOR)
  // ==========================================
  pages.push(`
  <div class="page">
    ${pageHeader(30, "Technical Finding TTL-01")}
    <div class="page-body">
      <!-- Finding Title Bar -->
      <div style="border-bottom: 1.5px solid #e2e8f0; padding-bottom: 2mm;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5mm;">
          <span style="font-family: 'JetBrains Mono', monospace; font-size: 8.5pt; font-weight: 800; color: #dc2626;">TTL-FINDING-01</span>
          ${severityBadge("Critical", "9.8")}
        </div>
        <h2 style="font-size: 11pt; font-weight: 800; color: #0f172a; margin: 0 0 1.5mm 0; line-height: 1.2;">
          Broken Object Level Authorization (BOLA / IDOR) in Workspace Export Endpoint
        </h2>
        <div style="display: flex; gap: 8px; font-size: 6.8pt; font-family: 'JetBrains Mono', monospace; color: #475569;">
          <span>Endpoint: <strong class="text-blue-700">GET /api/v1/workspaces/{workspaceId}/export</strong></span>
          <span>•</span>
          <span>CWE-639 / OWASP API1:2023</span>
          <span>•</span>
          <span>CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:N/A:N</span>
        </div>
      </div>

      <!-- Technical Description & Preconditions -->
      <div class="grid-2">
        <div class="card-soft">
          <div class="font-bold text-slate-900" style="font-size: 7.5pt; margin-bottom: 1.5px;">Technical Description & Flaw Mechanism</div>
          <p style="font-size: 7.1pt; color: #475569; margin: 0; line-height: 1.35;">
            The workspace export endpoint allows authenticated users to download a comprehensive archive of workspace data. The controller extracts the target <span class="font-mono text-blue-700">workspaceId</span> directly from the URL path and queries the database without verifying that the caller's authenticated session holds membership within the requested workspace.
          </p>
        </div>
        <div class="card-soft">
          <div class="font-bold text-slate-900" style="font-size: 7.5pt; margin-bottom: 1.5px;">Preconditions & Attack Feasibility</div>
          <p style="font-size: 7.1pt; color: #475569; margin: 0; line-height: 1.35;">
            Attacker requires any valid authenticated account on the platform (e.g., standard member in Tenant A). The target workspace UUID (<span class="font-mono">ws_bravo_9921</span>) can be acquired via shared document links or enumerated via audit metadata.
          </p>
        </div>
      </div>

      <!-- Safe Reproducible PoC -->
      <div class="card" style="padding: 4px 8px;">
        <div class="code-header">Safe Reproduction Curl Proof-of-Concept (Illustrative)</div>
        <div class="code-box" style="font-size: 6.2pt;">
curl -s -X GET "https://api.apexcloud.internal/api/v1/workspaces/ws_tenant_bravo_02/export" \\
  -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c3JfYWxwaGEiLCJ0ZW5hbnRfaWQiOiJ0ZW5hbnRfYWxwaGFfMDEifQ..." \\
  -H "Accept: application/json" -H "X-TTL-Security-Assessment: active"

HTTP/1.1 200 OK
Content-Type: application/json
{
  "status": "success",
  "workspace_id": "ws_tenant_bravo_02",
  "tenant_id": "tenant_bravo_02",
  "data": { "projects": [...], "confidential_documents": 84, "financial_records": [...] }
}
        </div>
      </div>

      <!-- Impacts & Root Cause -->
      <div class="grid-2">
        <div class="card-red">
          <div class="font-bold text-red-700" style="font-size: 7.5pt; margin-bottom: 1.5px;">Business & Technical Impact</div>
          <p style="font-size: 7.1pt; color: #7f1d1d; margin: 0; line-height: 1.35;">
            Complete compromise of confidentiality for victim tenant organizations. Contractual isolation breach, statutory reporting mandate under GDPR / DPDP Act, and severe commercial exposure.
          </p>
        </div>
        <div class="card-soft">
          <div class="font-bold text-slate-900" style="font-size: 7.5pt; margin-bottom: 1.5px;">Root Cause Analysis</div>
          <p style="font-size: 7.1pt; color: #475569; margin: 0; line-height: 1.35;">
            The Prisma query resolved the workspace using <span class="font-mono">prisma.workspace.findUnique({ where: { id } })</span> without enforcing <span class="font-mono">where: { id, tenantId: req.user.tenantId }</span>.
          </p>
        </div>
      </div>

      <!-- Remediation Code Guidance -->
      <div class="card-green" style="padding: 4px 8px;">
        <div class="font-bold text-green-700" style="font-size: 7.5pt; margin-bottom: 1.5px;">Recommended Developer Implementation Guidance (TypeScript)</div>
        <div class="code-box" style="font-size: 6.2pt; background: #064e3b; color: #ecfdf5; border-color: #059669;">
// Enforce strict tenant boundary matching in data access layer
const workspace = await prisma.workspace.findFirst({
  where: { id: req.params.workspaceId, tenantId: req.user.tenantId }
});
if (!workspace) throw new ForbiddenException("Access to requested workspace denied");
        </div>
      </div>

      <!-- Retest Status -->
      <div style="display: flex; justify-content: space-between; align-items: center; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 4px; padding: 4px 8px; font-size: 7pt;">
        <span class="font-bold text-green-700">Retest Verification: Verified Patched (June 27, 2026)</span>
        <span class="font-mono text-slate-600">Re-execution of PoC returned HTTP 403 Forbidden with security audit alert logged.</span>
      </div>
    </div>
    ${pageFooter(30)}
  </div>
  `);

  // ==========================================
  // PAGE 31: FINDING 02 (ASYNC WORKER BLEED)
  // ==========================================
  pages.push(`
  <div class="page">
    ${pageHeader(31, "Technical Finding TTL-02")}
    <div class="page-body">
      <!-- Finding Title Bar -->
      <div style="border-bottom: 1.5px solid #e2e8f0; padding-bottom: 2mm;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5mm;">
          <span style="font-family: 'JetBrains Mono', monospace; font-size: 8.5pt; font-weight: 800; color: #dc2626;">TTL-FINDING-02</span>
          ${severityBadge("Critical", "9.1")}
        </div>
        <h2 style="font-size: 11pt; font-weight: 800; color: #0f172a; margin: 0 0 1.5mm 0; line-height: 1.2;">
          Multi-Tenant Isolation Failure & Context Bleed in Asynchronous Background Worker
        </h2>
        <div style="display: flex; gap: 8px; font-size: 6.8pt; font-family: 'JetBrains Mono', monospace; color: #475569;">
          <span>Endpoint: <strong class="text-blue-700">POST /api/v1/jobs/schedule-report</strong></span>
          <span>•</span>
          <span>CWE-284 / OWASP API1:2023</span>
          <span>•</span>
          <span>CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:C/C:H/I:L/A:N</span>
        </div>
      </div>

      <!-- Description & Preconditions -->
      <div class="grid-2">
        <div class="card-soft">
          <div class="font-bold text-slate-900" style="font-size: 7.5pt; margin-bottom: 1.5px;">Technical Description & Flaw Mechanism</div>
          <p style="font-size: 7.1pt; color: #475569; margin: 0; line-height: 1.35;">
            Scheduled report generation tasks are pushed to a Redis BullMQ queue. The worker process consumes tasks without instantiating an isolated tenant database context, executing under an ambient service account. Under concurrent load, queries bleed across tenant boundaries.
          </p>
        </div>
        <div class="card-soft">
          <div class="font-bold text-slate-900" style="font-size: 7.5pt; margin-bottom: 1.5px;">Preconditions & Attack Feasibility</div>
          <p style="font-size: 7.1pt; color: #475569; margin: 0; line-height: 1.35;">
            Attacker schedules a report job simultaneously with peer customer tenants. The resulting CSV report file contains merged customer rows from multiple tenant organizations.
          </p>
        </div>
      </div>

      <!-- Safe Reproducible PoC -->
      <div class="card" style="padding: 4px 8px;">
        <div class="code-header">Queued Job Serialization & Leaked Artifact Evidence (Illustrative)</div>
        <div class="code-box" style="font-size: 6.2pt;">
// Job payload queued by Tenant A
{ "jobId": "job_9981", "type": "AUDIT_SUMMARY_CSV", "requestedBy": "user_alpha" }

// Resulting generated CSV artifact retrieved by Tenant A:
id,tenant_id,customer_name,invoice_total
rec_01,tenant_alpha_01,Alpha Operations Inc,$4,200.00
rec_02,tenant_bravo_02,Bravo Financial Corp,$89,450.00  <-- LEAKED CROSS-TENANT RECORD
rec_03,tenant_bravo_02,Bravo Executive Reserve,$125,000.00 <-- LEAKED CROSS-TENANT RECORD
        </div>
      </div>

      <!-- Impacts & Root Cause -->
      <div class="grid-2">
        <div class="card-red">
          <div class="font-bold text-red-700" style="font-size: 7.5pt; margin-bottom: 1.5px;">Business & Technical Impact</div>
          <p style="font-size: 7.1pt; color: #7f1d1d; margin: 0; line-height: 1.35;">
            Cross-tenant reporting artifact leakage. High risk of enterprise customers receiving competitor data in scheduled automated email exports.
          </p>
        </div>
        <div class="card-soft">
          <div class="font-bold text-slate-900" style="font-size: 7.5pt; margin-bottom: 1.5px;">Root Cause Analysis</div>
          <p style="font-size: 7.1pt; color: #475569; margin: 0; line-height: 1.35;">
            Worker thread reused a shared PostgreSQL connection pool without issuing <span class="font-mono">SET LOCAL app.current_tenant_id</span> per job, executing queries across the entire shared table.
          </p>
        </div>
      </div>

      <!-- Remediation Code Guidance -->
      <div class="card-green" style="padding: 4px 8px;">
        <div class="font-bold text-green-700" style="font-size: 7.5pt; margin-bottom: 1.5px;">Recommended Developer Implementation Guidance (Node.js / BullMQ)</div>
        <div class="code-box" style="font-size: 6.2pt; background: #064e3b; color: #ecfdf5; border-color: #059669;">
worker.process(async (job) => {
  // Bind each job strictly to an isolated tenant database transaction
  return await db.transaction(async (tx) => {
    await tx.$executeRaw\`SET LOCAL app.current_tenant_id = \${job.data.tenantId}\`;
    return await generateReport(tx, job.data);
  });
});
        </div>
      </div>

      <!-- Retest Status -->
      <div style="display: flex; justify-content: space-between; align-items: center; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 4px; padding: 4px 8px; font-size: 7pt;">
        <span class="font-bold text-green-700">Retest Verification: Verified Patched (June 27, 2026)</span>
        <span class="font-mono text-slate-600">Concurrent batch execution test confirmed zero cross-tenant row contamination in generated exports.</span>
      </div>
    </div>
    ${pageFooter(31)}
  </div>
  `);

  // ==========================================
  // PAGE 32: FINDING 03 (AI/RAG VECTOR LEAKAGE)
  // ==========================================
  pages.push(`
  <div class="page">
    ${pageHeader(32, "Technical Finding TTL-03")}
    <div class="page-body">
      <!-- Finding Title Bar -->
      <div style="border-bottom: 1.5px solid #e2e8f0; padding-bottom: 2mm;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5mm;">
          <span style="font-family: 'JetBrains Mono', monospace; font-size: 8.5pt; font-weight: 800; color: #dc2626;">TTL-FINDING-03</span>
          ${severityBadge("Critical", "9.3")}
        </div>
        <h2 style="font-size: 11pt; font-weight: 800; color: #0f172a; margin: 0 0 1.5mm 0; line-height: 1.2;">
          Cross-Tenant Data Leakage in AI / RAG Vector Search Retrieval
        </h2>
        <div style="display: flex; gap: 8px; font-size: 6.8pt; font-family: 'JetBrains Mono', monospace; color: #475569;">
          <span>Endpoint: <strong class="text-blue-700">POST /api/v1/ai/knowledge/query</strong></span>
          <span>•</span>
          <span>CWE-200 / OWASP LLM02:2025</span>
          <span>•</span>
          <span>CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:C/C:H/I:N/A:N</span>
        </div>
      </div>

      <!-- Description & Preconditions -->
      <div class="grid-2">
        <div class="card-soft">
          <div class="font-bold text-slate-900" style="font-size: 7.5pt; margin-bottom: 1.5px;">Technical Description & Flaw Mechanism</div>
          <p style="font-size: 7.1pt; color: #475569; margin: 0; line-height: 1.35;">
            The AI knowledge retrieval microservice executes semantic similarity queries against a shared Pinecone vector database index. The query vector was evaluated purely on cosine distance without passing a tenant metadata filter, returning document chunks from peer customer tenants.
          </p>
        </div>
        <div class="card-soft">
          <div class="font-bold text-slate-900" style="font-size: 7.5pt; margin-bottom: 1.5px;">Preconditions & Attack Feasibility</div>
          <p style="font-size: 7.1pt; color: #475569; margin: 0; line-height: 1.35;">
            Attacker issues an AI knowledge search query from Tenant A using common corporate keywords (e.g., "merger valuation", "salary bands", "board deck").
          </p>
        </div>
      </div>

      <!-- Safe Reproducible PoC -->
      <div class="card" style="padding: 4px 8px;">
        <div class="code-header">Semantic Search Query & Leaked Vector Embeddings (Illustrative)</div>
        <div class="code-box" style="font-size: 6.2pt;">
curl -s -X POST "https://api.apexcloud.internal/api/v1/ai/knowledge/query" \\
  -H "Authorization: Bearer <Tenant_Alpha_Token>" \\
  -H "Content-Type: application/json" \\
  -d '{"query": "confidential executive compensation 2026", "top_k": 3}'

HTTP/1.1 200 OK
{
  "matches": [
    {
      "id": "doc_chunk_8412",
      "score": 0.942,
      "metadata": { "tenant_id": "tenant_bravo_02", "source": "Bravo_Board_Compensation.pdf" },
      "text": "Executive Base Salary Schedule for FY2026: CEO base compensation set at $650,000..."
    }
  ]
}
        </div>
      </div>

      <!-- Impacts & Root Cause -->
      <div class="grid-2">
        <div class="card-red">
          <div class="font-bold text-red-700" style="font-size: 7.5pt; margin-bottom: 1.5px;">Business & Technical Impact</div>
          <p style="font-size: 7.1pt; color: #7f1d1d; margin: 0; line-height: 1.35;">
            Severe intellectual property and corporate trade secret exfiltration between competing enterprise customers utilizing the shared SaaS platform.
          </p>
        </div>
        <div class="card-soft">
          <div class="font-bold text-slate-900" style="font-size: 7.5pt; margin-bottom: 1.5px;">Root Cause Analysis</div>
          <p style="font-size: 7.1pt; color: #475569; margin: 0; line-height: 1.35;">
            The Python FastAPI service called <span class="font-mono">index.query(vector=v, top_k=5)</span>, completely omitting the <span class="font-mono">filter={"tenant_id": user.tenant_id}</span> argument.
          </p>
        </div>
      </div>

      <!-- Remediation Code Guidance -->
      <div class="card-green" style="padding: 4px 8px;">
        <div class="font-bold text-green-700" style="font-size: 7.5pt; margin-bottom: 1.5px;">Recommended Developer Implementation Guidance (Python / LangChain)</div>
        <div class="code-box" style="font-size: 6.2pt; background: #064e3b; color: #ecfdf5; border-color: #059669;">
# Enforce mandatory tenant pre-filtering in vector similarity search
results = index.query(
    vector=query_embedding,
    top_k=top_k,
    filter={"tenant_id": {"$eq": caller_tenant_id}},
    include_metadata=True
)
        </div>
      </div>

      <!-- Retest Status -->
      <div style="display: flex; justify-content: space-between; align-items: center; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 4px; padding: 4px 8px; font-size: 7pt;">
        <span class="font-bold text-green-700">Retest Verification: Verified Patched (June 28, 2026)</span>
        <span class="font-mono text-slate-600">Re-querying verified that cross-tenant chunks are completely excluded from semantic search results.</span>
      </div>
    </div>
    ${pageFooter(32)}
  </div>
  `);

  // ==========================================
  // PAGE 33: FINDING 04 (BFLA ROLE ESCALATION)
  // ==========================================
  pages.push(`
  <div class="page">
    ${pageHeader(33, "Technical Finding TTL-04")}
    <div class="page-body">
      <!-- Finding Title Bar -->
      <div style="border-bottom: 1.5px solid #e2e8f0; padding-bottom: 2mm;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5mm;">
          <span style="font-family: 'JetBrains Mono', monospace; font-size: 8.5pt; font-weight: 800; color: #ea580c;">TTL-FINDING-04</span>
          ${severityBadge("High", "8.5")}
        </div>
        <h2 style="font-size: 11pt; font-weight: 800; color: #0f172a; margin: 0 0 1.5mm 0; line-height: 1.2;">
          Broken Function Level Authorization (BFLA) in Workspace Role Management
        </h2>
        <div style="display: flex; gap: 8px; font-size: 6.8pt; font-family: 'JetBrains Mono', monospace; color: #475569;">
          <span>Endpoint: <strong class="text-blue-700">PUT /api/v1/workspaces/{id}/members/{uid}/role</strong></span>
          <span>•</span>
          <span>CWE-285 / OWASP API5:2023</span>
          <span>•</span>
          <span>CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:N</span>
        </div>
      </div>

      <!-- Description & Preconditions -->
      <div class="grid-2">
        <div class="card-soft">
          <div class="font-bold text-slate-900" style="font-size: 7.5pt; margin-bottom: 1.5px;">Technical Description & Flaw Mechanism</div>
          <p style="font-size: 7.1pt; color: #475569; margin: 0; line-height: 1.35;">
            The endpoint designed for administrators to adjust workspace member roles failed to verify that the requesting user possessed administrative privileges. Any authenticated workspace member could submit an HTTP PUT request targeting their own user ID with an elevated role.
          </p>
        </div>
        <div class="card-soft">
          <div class="font-bold text-slate-900" style="font-size: 7.5pt; margin-bottom: 1.5px;">Preconditions & Attack Feasibility</div>
          <p style="font-size: 7.1pt; color: #475569; margin: 0; line-height: 1.35;">
            Attacker requires standard Member or Guest access to the target workspace. No administrative credentials or elevated privileges required.
          </p>
        </div>
      </div>

      <!-- Safe Reproducible PoC -->
      <div class="card" style="padding: 4px 8px;">
        <div class="code-header">Safe Privilege Escalation Proof-of-Concept (Illustrative)</div>
        <div class="code-box" style="font-size: 6.2pt;">
curl -s -X PUT "https://api.apexcloud.internal/api/v1/workspaces/ws_alpha_01/members/usr_standard_member/role" \\
  -H "Authorization: Bearer <Standard_Member_Token>" \\
  -H "Content-Type: application/json" \\
  -d '{"role": "owner"}'

HTTP/1.1 200 OK
{
  "status": "success",
  "user_id": "usr_standard_member",
  "workspace_id": "ws_alpha_01",
  "new_role": "owner" <-- VERTICAL PRIVILEGE ESCALATION CONFIRMED
}
        </div>
      </div>

      <!-- Impacts & Root Cause -->
      <div class="grid-2">
        <div class="card-red">
          <div class="font-bold text-red-700" style="font-size: 7.5pt; margin-bottom: 1.5px;">Business & Technical Impact</div>
          <p style="font-size: 7.1pt; color: #7f1d1d; margin: 0; line-height: 1.35;">
            Total administrative takeover of the customer tenant workspace. The escalated user can delete projects, remove genuine admins, and access billing records.
          </p>
        </div>
        <div class="card-soft">
          <div class="font-bold text-slate-900" style="font-size: 7.5pt; margin-bottom: 1.5px;">Root Cause Analysis</div>
          <p style="font-size: 7.1pt; color: #475569; margin: 0; line-height: 1.35;">
            The Express route handler applied an authentication middleware (<span class="font-mono">requireAuth</span>) but omitted the mandatory role-check middleware (<span class="font-mono">requireAdminRole</span>).
          </p>
        </div>
      </div>

      <!-- Remediation Code Guidance -->
      <div class="card-green" style="padding: 4px 8px;">
        <div class="font-bold text-green-700" style="font-size: 7.5pt; margin-bottom: 1.5px;">Recommended Developer Implementation Guidance (Express.js)</div>
        <div class="code-box" style="font-size: 6.2pt; background: #064e3b; color: #ecfdf5; border-color: #059669;">
// Apply RBAC guard ensuring caller is an existing Owner/Admin
router.put('/workspaces/:id/members/:uid/role',
  requireAuth,
  requireWorkspaceRole(['owner', 'admin']),
  memberController.updateRole
);
        </div>
      </div>

      <!-- Retest Status -->
      <div style="display: flex; justify-content: space-between; align-items: center; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 4px; padding: 4px 8px; font-size: 7pt;">
        <span class="font-bold text-green-700">Retest Verification: Verified Patched (June 27, 2026)</span>
        <span class="font-mono text-slate-600">Re-attempting role update as standard member strictly returns HTTP 403 Forbidden.</span>
      </div>
    </div>
    ${pageFooter(33)}
  </div>
  `);

  // ==========================================
  // PAGE 34: FINDING 05 (GRAPHQL CIRCULAR RECURSION)
  // ==========================================
  pages.push(`
  <div class="page">
    ${pageHeader(34, "Technical Finding TTL-05")}
    <div class="page-body">
      <!-- Finding Title Bar -->
      <div style="border-bottom: 1.5px solid #e2e8f0; padding-bottom: 2mm;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5mm;">
          <span style="font-family: 'JetBrains Mono', monospace; font-size: 8.5pt; font-weight: 800; color: #ea580c;">TTL-FINDING-05</span>
          ${severityBadge("High", "7.8")}
        </div>
        <h2 style="font-size: 11pt; font-weight: 800; color: #0f172a; margin: 0 0 1.5mm 0; line-height: 1.2;">
          GraphQL Circular Query Recursion & Nested Object Authorization Bypass
        </h2>
        <div style="display: flex; gap: 8px; font-size: 6.8pt; font-family: 'JetBrains Mono', monospace; color: #475569;">
          <span>Endpoint: <strong class="text-blue-700">POST /graphql</strong></span>
          <span>•</span>
          <span>CWE-400 & CWE-285 / OWASP API8:2023</span>
          <span>•</span>
          <span>CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:N/A:H</span>
        </div>
      </div>

      <!-- Description & Preconditions -->
      <div class="grid-2">
        <div class="card-soft">
          <div class="font-bold text-slate-900" style="font-size: 7.5pt; margin-bottom: 1.5px;">Technical Description & Flaw Mechanism</div>
          <p style="font-size: 7.1pt; color: #475569; margin: 0; line-height: 1.35;">
            The Apollo GraphQL server schema permits unbounded recursive relationship traversal without query depth limiting or operation complexity cost enforcement. Additionally, nested field resolvers failed to inherit parent object authorization guards.
          </p>
        </div>
        <div class="card-soft">
          <div class="font-bold text-slate-900" style="font-size: 7.5pt; margin-bottom: 1.5px;">Preconditions & Attack Feasibility</div>
          <p style="font-size: 7.1pt; color: #475569; margin: 0; line-height: 1.35;">
            Attacker requires basic authenticated GraphQL query access. The recursive payload can be submitted via standard HTTP POST request.
          </p>
        </div>
      </div>

      <!-- Safe Reproducible PoC -->
      <div class="card" style="padding: 4px 8px;">
        <div class="code-header">Deep Nested Recursion & Sensitive Attribute Leak PoC (Illustrative)</div>
        <div class="code-box" style="font-size: 6.2pt;">
curl -s -X POST "https://api.apexcloud.internal/graphql" \\
  -H "Authorization: Bearer <Standard_Member_Token>" \\
  -H "Content-Type: application/json" \\
  -d '{"query": "query { me { workspaces { members { user { workspaces { members { user { billingDetails { paymentEmail } } } } } } } } }"}'

HTTP/1.1 200 OK
{
  "data": { "me": { "workspaces": [ { "members": [ ... "billingDetails": { "paymentEmail": "cfo@target-corp.com" } } ] } ] }
}
[Node.js Event Loop Latency: 8,420ms | CPU Load: 100%]
        </div>
      </div>

      <!-- Impacts & Root Cause -->
      <div class="grid-2">
        <div class="card-red">
          <div class="font-bold text-red-700" style="font-size: 7.5pt; margin-bottom: 1.5px;">Business & Technical Impact</div>
          <p style="font-size: 7.1pt; color: #7f1d1d; margin: 0; line-height: 1.35;">
            Denial of service crashing API container instances for all hosted tenant organizations, coupled with unauthenticated retrieval of sensitive tenant billing metadata.
          </p>
        </div>
        <div class="card-soft">
          <div class="font-bold text-slate-900" style="font-size: 7.5pt; margin-bottom: 1.5px;">Root Cause Analysis</div>
          <p style="font-size: 7.1pt; color: #475569; margin: 0; line-height: 1.35;">
            Missing query depth limit validation middleware in Apollo Server initialization and missing resolver-level authorization checks on the <span class="font-mono">billingDetails</span> field.
          </p>
        </div>
      </div>

      <!-- Remediation Code Guidance -->
      <div class="card-green" style="padding: 4px 8px;">
        <div class="font-bold text-green-700" style="font-size: 7.5pt; margin-bottom: 1.5px;">Recommended Developer Implementation Guidance (Apollo Server)</div>
        <div class="code-box" style="font-size: 6.2pt; background: #064e3b; color: #ecfdf5; border-color: #059669;">
import depthLimit from 'graphql-depth-limit';
const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(5)], // Reject queries deeper than 5 levels
});
        </div>
      </div>

      <!-- Retest Status -->
      <div style="display: flex; justify-content: space-between; align-items: center; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 4px; padding: 4px 8px; font-size: 7pt;">
        <span class="font-bold text-green-700">Retest Verification: Verified Patched (June 28, 2026)</span>
        <span class="font-mono text-slate-600">Recursive queries deeper than 5 levels rejected with GRAPHQL_VALIDATION_FAILED; billing field secured.</span>
      </div>
    </div>
    ${pageFooter(34)}
  </div>
  `);

  // ==========================================
  // PAGE 35: FINDING 06 (JWT SSO REPLAY)
  // ==========================================
  pages.push(`
  <div class="page">
    ${pageHeader(35, "Technical Finding TTL-06")}
    <div class="page-body">
      <!-- Finding Title Bar -->
      <div style="border-bottom: 1.5px solid #e2e8f0; padding-bottom: 2mm;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5mm;">
          <span style="font-family: 'JetBrains Mono', monospace; font-size: 8.5pt; font-weight: 800; color: #d97706;">TTL-FINDING-06</span>
          ${severityBadge("Medium", "6.5")}
        </div>
        <h2 style="font-size: 11pt; font-weight: 800; color: #0f172a; margin: 0 0 1.5mm 0; line-height: 1.2;">
          Flawed JWT Verification & Replay Vulnerability in Tenant SSO Token Exchange
        </h2>
        <div style="display: flex; gap: 8px; font-size: 6.8pt; font-family: 'JetBrains Mono', monospace; color: #475569;">
          <span>Endpoint: <strong class="text-blue-700">POST /api/v1/auth/sso/callback</strong></span>
          <span>•</span>
          <span>CWE-287 / OWASP API2:2023</span>
          <span>•</span>
          <span>CVSS:3.1/AV:N/AC:H/PR:N/UI:R/S:U/C:H/I:L/A:N</span>
        </div>
      </div>

      <!-- Description & Preconditions -->
      <div class="grid-2">
        <div class="card-soft">
          <div class="font-bold text-slate-900" style="font-size: 7.5pt; margin-bottom: 1.5px;">Technical Description & Flaw Mechanism</div>
          <p style="font-size: 7.1pt; color: #475569; margin: 0; line-height: 1.35;">
            During Single Sign-On token exchange, the backend verifies identity provider cryptographic signatures but fails to track the unique <span class="font-mono">jti</span> (JWT ID) token identifier. A signed assertion can be replayed to mint multiple fresh session tokens within its validity window.
          </p>
        </div>
        <div class="card-soft">
          <div class="font-bold text-slate-900" style="font-size: 7.5pt; margin-bottom: 1.5px;">Preconditions & Attack Feasibility</div>
          <p style="font-size: 7.1pt; color: #475569; margin: 0; line-height: 1.35;">
            Attacker must intercept an assertion token in transit (e.g., via browser history, proxy log, or referer leak) prior to its 5-minute expiration timestamp.
          </p>
        </div>
      </div>

      <!-- Safe Reproducible PoC -->
      <div class="card" style="padding: 4px 8px;">
        <div class="code-header">SSO Assertion Replay Proof-of-Concept (Illustrative)</div>
        <div class="code-box" style="font-size: 6.2pt;">
# Request 1: Legitimate SSO Exchange
curl -s -X POST "https://api.apexcloud.internal/api/v1/auth/sso/callback" \\
  -d '{"assertion": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJzc29fOTkxMiJ9..."}'
--> HTTP 200 OK (Session Token A Issued)

# Request 2: Replay of Identical Assertion 60 Seconds Later
curl -s -X POST "https://api.apexcloud.internal/api/v1/auth/sso/callback" \\
  -d '{"assertion": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJzc29fOTkxMiJ9..."}'
--> HTTP 200 OK (Session Token B Issued — REPLAY SUCCEEDED)
        </div>
      </div>

      <!-- Impacts & Root Cause -->
      <div class="grid-2">
        <div class="card-amber">
          <div class="font-bold text-amber-700" style="font-size: 7.5pt; margin-bottom: 1.5px;">Business & Technical Impact</div>
          <p style="font-size: 7.1pt; color: #78350f; margin: 0; line-height: 1.35;">
            Potential session hijacking and unauthorized account takeover if single sign-on tokens are intercepted in proxy logs or corporate network monitoring.
          </p>
        </div>
        <div class="card-soft">
          <div class="font-bold text-slate-900" style="font-size: 7.5pt; margin-bottom: 1.5px;">Root Cause Analysis</div>
          <p style="font-size: 7.1pt; color: #475569; margin: 0; line-height: 1.35;">
            The handler validated token signatures statelessly without checking or writing the assertion's unique nonce (<span class="font-mono">jti</span>) to an atomic Redis cache.
          </p>
        </div>
      </div>

      <!-- Remediation Code Guidance -->
      <div class="card-green" style="padding: 4px 8px;">
        <div class="font-bold text-green-700" style="font-size: 7.5pt; margin-bottom: 1.5px;">Recommended Developer Implementation Guidance (Redis Nonce Tracking)</div>
        <div class="code-box" style="font-size: 6.2pt; background: #064e3b; color: #ecfdf5; border-color: #059669;">
// Atomically set assertion jti with 5-minute expiration
const isNew = await redis.set(\`sso:jti:\${decoded.jti}\`, '1', 'EX', 300, 'NX');
if (!isNew) {
  throw new UnauthorizedException("SSO assertion token has already been exchanged");
}
        </div>
      </div>

      <!-- Retest Status -->
      <div style="display: flex; justify-content: space-between; align-items: center; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 4px; padding: 4px 8px; font-size: 7pt;">
        <span class="font-bold text-green-700">Retest Verification: Verified Patched (June 28, 2026)</span>
        <span class="font-mono text-slate-600">Replayed assertions now strictly return HTTP 401 with "Assertion already redeemed".</span>
      </div>
    </div>
    ${pageFooter(35)}
  </div>
  `);

  // ==========================================
  // PAGE 36: FINDING 07 (WEBHOOK SIGNATURE FORGERY)
  // ==========================================
  pages.push(`
  <div class="page">
    ${pageHeader(36, "Technical Finding TTL-07")}
    <div class="page-body">
      <!-- Finding Title Bar -->
      <div style="border-bottom: 1.5px solid #e2e8f0; padding-bottom: 2mm;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5mm;">
          <span style="font-family: 'JetBrains Mono', monospace; font-size: 8.5pt; font-weight: 800; color: #d97706;">TTL-FINDING-07</span>
          ${severityBadge("Medium", "5.9")}
        </div>
        <h2 style="font-size: 11pt; font-weight: 800; color: #0f172a; margin: 0 0 1.5mm 0; line-height: 1.2;">
          Asynchronous Webhook Signature Timing Forgery & Replay Vulnerability
        </h2>
        <div style="display: flex; gap: 8px; font-size: 6.8pt; font-family: 'JetBrains Mono', monospace; color: #475569;">
          <span>Endpoint: <strong class="text-blue-700">POST /api/v1/webhooks/billing</strong></span>
          <span>•</span>
          <span>CWE-345 / OWASP API8:2023</span>
          <span>•</span>
          <span>CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:H/A:N</span>
        </div>
      </div>

      <!-- Description & Preconditions -->
      <div class="grid-2">
        <div class="card-soft">
          <div class="font-bold text-slate-900" style="font-size: 7.5pt; margin-bottom: 1.5px;">Technical Description & Flaw Mechanism</div>
          <p style="font-size: 7.1pt; color: #475569; margin: 0; line-height: 1.35;">
            The billing webhook handler uses standard JavaScript string equality (<span class="font-mono">===</span>) to compare computed HMAC signatures against the <span class="font-mono">X-Hub-Signature-256</span> header, introducing a timing side-channel. Additionally, the handler omitted timestamp replay validation.
          </p>
        </div>
        <div class="card-soft">
          <div class="font-bold text-slate-900" style="font-size: 7.5pt; margin-bottom: 1.5px;">Preconditions & Attack Feasibility</div>
          <p style="font-size: 7.1pt; color: #475569; margin: 0; line-height: 1.35;">
            Attacker replays historical payment webhook payloads or exploits microsecond timing variances across thousands of requests to forge signature bytes.
          </p>
        </div>
      </div>

      <!-- Safe Reproducible PoC -->
      <div class="card" style="padding: 4px 8px;">
        <div class="code-header">Webhook Replay Proof-of-Concept (Illustrative)</div>
        <div class="code-box" style="font-size: 6.2pt;">
# Replaying a 90-day-old successful payment event with original signature
curl -s -X POST "https://api.apexcloud.internal/api/v1/webhooks/billing" \\
  -H "X-Hub-Signature-256: sha256=9b7c841e0a2938f4..." \\
  -H "Content-Type: application/json" \\
  -d '{"event": "invoice.payment_succeeded", "tenant_id": "tenant_alpha_01", "timestamp": 1773400000}'

HTTP/1.1 200 OK
{ "received": true, "account_status": "active_paid" } <-- REPLAY PROCESSED
        </div>
      </div>

      <!-- Impacts & Root Cause -->
      <div class="grid-2">
        <div class="card-amber">
          <div class="font-bold text-amber-700" style="font-size: 7.5pt; margin-bottom: 1.5px;">Business & Technical Impact</div>
          <p style="font-size: 7.1pt; color: #78350f; margin: 0; line-height: 1.35;">
            Falsification of subscription payment states, enabling delinquent tenant accounts to indefinitely renew premium features without payment.
          </p>
        </div>
        <div class="card-soft">
          <div class="font-bold text-slate-900" style="font-size: 7.5pt; margin-bottom: 1.5px;">Root Cause Analysis</div>
          <p style="font-size: 7.1pt; color: #475569; margin: 0; line-height: 1.35;">
            Comparison performed via non-constant-time operator (<span class="font-mono">computed === header</span>) and omission of timestamp delta checking (<span class="font-mono">Math.abs(Date.now() - t) &lt; 300000</span>).
          </p>
        </div>
      </div>

      <!-- Remediation Code Guidance -->
      <div class="card-green" style="padding: 4px 8px;">
        <div class="font-bold text-green-700" style="font-size: 7.5pt; margin-bottom: 1.5px;">Recommended Developer Implementation Guidance (Node.js Crypto)</div>
        <div class="code-box" style="font-size: 6.2pt; background: #064e3b; color: #ecfdf5; border-color: #059669;">
import crypto from 'crypto';
// Enforce 5-minute replay tolerance window
if (Math.abs(Date.now() - eventTimestamp * 1000) > 300000) throw new Error("Expired webhook");
// Enforce constant-time timing-safe comparison
const valid = crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(computed));
if (!valid) throw new Error("Invalid HMAC signature");
        </div>
      </div>

      <!-- Retest Status -->
      <div style="display: flex; justify-content: space-between; align-items: center; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 4px; padding: 4px 8px; font-size: 7pt;">
        <span class="font-bold text-green-700">Retest Verification: Verified Patched (June 28, 2026)</span>
        <span class="font-mono text-slate-600">Replayed events older than 5 minutes rejected with HTTP 400 Bad Request.</span>
      </div>
    </div>
    ${pageFooter(36)}
  </div>
  `);

  // ==========================================
  // PAGE 37: FINDING 08 (BUSINESS LOGIC QUOTA BYPASS)
  // ==========================================
  pages.push(`
  <div class="page">
    ${pageHeader(37, "Technical Finding TTL-08")}
    <div class="page-body">
      <!-- Finding Title Bar -->
      <div style="border-bottom: 1.5px solid #e2e8f0; padding-bottom: 2mm;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5mm;">
          <span style="font-family: 'JetBrains Mono', monospace; font-size: 8.5pt; font-weight: 800; color: #1d4ed8;">TTL-FINDING-08</span>
          ${severityBadge("Low", "3.8")}
        </div>
        <h2 style="font-size: 11pt; font-weight: 800; color: #0f172a; margin: 0 0 1.5mm 0; line-height: 1.2;">
          Business Logic Flaw in Subscription Tier Feature Enforcement & Quota Bypass
        </h2>
        <div style="display: flex; gap: 8px; font-size: 6.8pt; font-family: 'JetBrains Mono', monospace; color: #475569;">
          <span>Endpoint: <strong class="text-blue-700">POST /api/v1/ai/generate-report</strong></span>
          <span>•</span>
          <span>CWE-840 / OWASP API6:2023</span>
          <span>•</span>
          <span>CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:N/I:L/A:N</span>
        </div>
      </div>

      <!-- Description & Preconditions -->
      <div class="grid-2">
        <div class="card-soft">
          <div class="font-bold text-slate-900" style="font-size: 7.5pt; margin-bottom: 1.5px;">Technical Description & Flaw Mechanism</div>
          <p style="font-size: 7.1pt; color: #475569; margin: 0; line-height: 1.35;">
            The AI report synthesis endpoint checks whether the tenant has exceeded their monthly generation quota. However, the microservice accepted an optional JSON body parameter <span class="font-mono text-blue-700">tier_override</span> directly from the client request, bypassing the authoritative database quota check.
          </p>
        </div>
        <div class="card-soft">
          <div class="font-bold text-slate-900" style="font-size: 7.5pt; margin-bottom: 1.5px;">Preconditions & Attack Feasibility</div>
          <p style="font-size: 7.1pt; color: #475569; margin: 0; line-height: 1.35;">
            Attacker requires standard user credentials on a Free or Starter tier tenant account that has exhausted its monthly generation limit.
          </p>
        </div>
      </div>

      <!-- Safe Reproducible PoC -->
      <div class="card" style="padding: 4px 8px;">
        <div class="code-header">Quota Parameter Tampering Proof-of-Concept (Illustrative)</div>
        <div class="code-box" style="font-size: 6.2pt;">
# Request on exhausted Free tier with injected tier_override
curl -s -X POST "https://api.apexcloud.internal/api/v1/ai/generate-report" \\
  -H "Authorization: Bearer <Free_Tier_User_Token>" \\
  -H "Content-Type: application/json" \\
  -d '{"workspace_id": "ws_free_01", "tier_override": "enterprise", "prompt": "Synthesize summary"}'

HTTP/1.1 200 OK
{
  "status": "completed",
  "generated_report_id": "rep_9918",
  "tokens_consumed": 4200,
  "quota_bypassed": true
}
        </div>
      </div>

      <!-- Impacts & Root Cause -->
      <div class="grid-2">
        <div class="card-blue">
          <div class="font-bold text-blue-700" style="font-size: 7.5pt; margin-bottom: 1.5px;">Business & Technical Impact</div>
          <p style="font-size: 7.1pt; color: #1e40af; margin: 0; line-height: 1.35;">
            Commercial subscription bypass. Unmetered consumption of expensive upstream LLM compute tokens without corresponding customer billing.
          </p>
        </div>
        <div class="card-soft">
          <div class="font-bold text-slate-900" style="font-size: 7.5pt; margin-bottom: 1.5px;">Root Cause Analysis</div>
          <p style="font-size: 7.1pt; color: #475569; margin: 0; line-height: 1.35;">
            A legacy debugging parameter (<span class="font-mono">tier_override</span>) remained active in the controller logic, allowing client parameters to override server-side plan records.
          </p>
        </div>
      </div>

      <!-- Remediation Code Guidance -->
      <div class="card-green" style="padding: 4px 8px;">
        <div class="font-bold text-green-700" style="font-size: 7.5pt; margin-bottom: 1.5px;">Recommended Developer Implementation Guidance (TypeScript)</div>
        <div class="code-box" style="font-size: 6.2pt; background: #064e3b; color: #ecfdf5; border-color: #059669;">
// Disallow client-provided tier parameters; query authoritative plan from DB
const tenantPlan = await db.tenantSubscription.findUnique({
  where: { tenantId: req.user.tenantId }
});
if (tenantPlan.usageCount >= tenantPlan.monthlyQuota) {
  throw new QuotaExceededException("Monthly AI generation limit reached");
}
        </div>
      </div>

      <!-- Retest Status -->
      <div style="display: flex; justify-content: space-between; align-items: center; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 4px; padding: 4px 8px; font-size: 7pt;">
        <span class="font-bold text-green-700">Retest Verification: Verified Patched (June 28, 2026)</span>
        <span class="font-mono text-slate-600">Requests with tier_override ignored; quota strictly enforced with HTTP 429 Payment Required.</span>
      </div>
    </div>
    ${pageFooter(37)}
  </div>
  `);

  return pages;
};
