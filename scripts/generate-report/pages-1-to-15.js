const { logoBannerBase64, logoIconBase64, pageHeader, pageFooter, severityBadge } = require('./components');

module.exports = function getPages1to15() {
  const pages = [];

  // ==========================================
  // PAGE 1: COVER PAGE
  // ==========================================
  pages.push(`
  <div class="page cover-page" style="padding: 0; background: #ffffff;">
    <div style="background: linear-gradient(135deg, #090d16 0%, #0f172a 60%, #1e3a8a 100%); color: #ffffff; padding: 18mm 18mm 16mm 18mm; border-bottom: 3px solid #2563eb; position: relative;">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12mm;">
        <img src="data:image/png;base64,${logoBannerBase64}" alt="TrustLayerLabs" style="height: 38px; width: auto; object-fit: contain; filter: brightness(1.05);" />
        <div style="text-align: right;">
          <div style="display: inline-block; background: rgba(239, 68, 68, 0.15); border: 1px solid #ef4444; color: #fca5a5; font-family: 'JetBrains Mono', monospace; font-size: 7pt; font-weight: 700; padding: 2px 8px; border-radius: 3px; text-transform: uppercase; letter-spacing: 0.6px;">
            TLP:AMBER / SAMPLE DELIVERABLE
          </div>
          <div style="color: #94a3b8; font-family: 'JetBrains Mono', monospace; font-size: 7.5pt; margin-top: 4px;">Ref: TTL-SAMPLE-VAPT-2026</div>
        </div>
      </div>

      <div style="display: inline-block; background: rgba(37, 99, 235, 0.25); border: 1px solid #60a5fa; color: #bfdbfe; font-family: 'JetBrains Mono', monospace; font-size: 7.5pt; font-weight: 700; padding: 3px 10px; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 5mm;">
        OFFENSIVE SECURITY ASSESSMENT REPORT
      </div>

      <h1 style="font-size: 23pt; font-weight: 800; line-height: 1.15; margin: 0 0 4mm 0; color: #ffffff; letter-spacing: -0.5px;">
        API, SaaS & AI Application<br>Security Assessment
      </h1>

      <p style="font-size: 9.5pt; color: #cbd5e1; max-width: 580px; margin: 0 0 6mm 0; line-height: 1.45;">
        A comprehensive, practitioner-led manual penetration testing evaluation targeting multi-tenant isolation, broken object authorization (BOLA/IDOR), token lifecycles, and AI/RAG retrieval boundaries.
      </p>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 6px; padding: 8px 12px; font-size: 7.2pt;">
        <div>
          <div style="color: #94a3b8; text-transform: uppercase; font-family: 'JetBrains Mono', monospace; font-size: 6.2pt;">Target System (Simulated)</div>
          <div style="font-weight: 700; color: #ffffff; margin-top: 1px;">ApexCloud AI Core Engine v2.4</div>
        </div>
        <div>
          <div style="color: #94a3b8; text-transform: uppercase; font-family: 'JetBrains Mono', monospace; font-size: 6.2pt;">Assessment Type</div>
          <div style="font-weight: 700; color: #ffffff; margin-top: 1px;">Gray-Box VAPT & Logic Audit</div>
        </div>
        <div>
          <div style="color: #94a3b8; text-transform: uppercase; font-family: 'JetBrains Mono', monospace; font-size: 6.2pt;">Baseline Date</div>
          <div style="font-weight: 700; color: #ffffff; margin-top: 1px;">June 2026 (Simulated Baseline)</div>
        </div>
      </div>
    </div>

    <div style="padding: 12mm 18mm 14mm 18mm; flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
      
      <!-- Prominent Mandatory Disclaimer Banner -->
      <div style="background: #fef2f2; border: 1.5px solid #f87171; border-radius: 6px; padding: 10px 14px; position: relative;">
        <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px;">
          <span style="display: inline-block; width: 8px; height: 8px; background: #dc2626; border-radius: 50%;"></span>
          <span style="font-family: 'JetBrains Mono', monospace; font-size: 8pt; font-weight: 800; color: #991b1b; text-transform: uppercase; letter-spacing: 0.5px;">
            MANDATORY NOTICE — ILLUSTRATIVE SAMPLE REPORT
          </span>
        </div>
        <p style="font-size: 7.8pt; color: #7f1d1d; line-height: 1.45; margin: 0; font-weight: 500;">
          <strong>ILLUSTRATIVE SAMPLE REPORT —</strong> This document uses a hypothetical application and simulated assessment scenarios. It is provided solely to demonstrate report structure, technical analysis, and remediation guidance. It does not represent a completed client engagement or verified findings from a real production system.
        </p>
      </div>

      <!-- Core Highlights Grid -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 4mm 0;">
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 10px 12px;">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 7pt; font-weight: 700; color: #1e40af; text-transform: uppercase; margin-bottom: 4px;">
            Deliverable Objective
          </div>
          <p style="font-size: 7.6pt; color: #475569; margin: 0; line-height: 1.4;">
            Demonstrates TrustLayerLabs methodology for deep manual vulnerability discovery, reproducible curl PoCs, root-cause code analysis, and verified remediation retesting.
          </p>
        </div>
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 10px 12px;">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 7pt; font-weight: 700; color: #1e40af; text-transform: uppercase; margin-bottom: 4px;">
            Offensive Scope Focus
          </div>
          <p style="font-size: 7.6pt; color: #475569; margin: 0; line-height: 1.4;">
            Focuses on high-severity logical attack surfaces: BOLA/IDOR, tenant boundary bypass, asynchronous queue bleed, GraphQL circular recursion, and vector store data leaks.
          </p>
        </div>
      </div>

      <!-- Assessment Team & Legal Sign-off -->
      <div style="border-top: 1px solid #e2e8f0; padding-top: 8px; display: flex; justify-content: space-between; align-items: flex-end; font-size: 7.2pt;">
        <div>
          <div style="font-weight: 700; color: #0f172a;">Lead Assessment Practitioner:</div>
          <div style="color: #334155;">Nagasrinivasa Rao — Founder & Lead Security Architect</div>
          <div style="color: #64748b; font-size: 6.8pt; margin-top: 1px;">Offensive Security Specialist • IIT Guwahati</div>
        </div>
        <div style="text-align: right;">
          <div style="font-weight: 700; color: #0f172a;">TrustLayerLabs Advisory</div>
          <div style="color: #334155;">www.trustlayerlabs.co.in • ceo@trustlayerlabs.co.in</div>
          <div style="color: #64748b; font-size: 6.8pt; margin-top: 1px;">Document Verifier Fingerprint: SHA256-TTL-SAMPLE-46P</div>
        </div>
      </div>

    </div>
  </div>
  `);

  // ==========================================
  // PAGE 2: SAMPLE REPORT DISCLAIMER & LEGAL SCOPE NOTICE
  // ==========================================
  pages.push(`
  <div class="page">
    ${pageHeader(2, "Disclaimer & Legal Boundary")}
    <div class="page-body">
      <div>
        <span class="section-badge">Section 01 • Legal & Ethical Notice</span>
        <h2 class="section-heading">Sample Report Disclaimer & Legal Boundary Notice</h2>
        <p class="section-subheading">Formal clarification regarding synthetic data, hypothetical test scenarios, and ethical boundaries.</p>
      </div>

      <div class="card-red" style="padding: 10px 14px;">
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 7.5pt; font-weight: 800; color: #991b1b; text-transform: uppercase; margin-bottom: 4px;">
          Prominent Transparency Declaration
        </div>
        <p style="font-size: 7.8pt; color: #7f1d1d; margin: 0; line-height: 1.45;">
          <strong>ILLUSTRATIVE SAMPLE REPORT —</strong> This document uses a hypothetical application and simulated assessment scenarios. It is provided solely to demonstrate report structure, technical analysis, and remediation guidance. It does not represent a completed client engagement or verified findings from a real production system.
        </p>
      </div>

      <div class="grid-2">
        <div class="card-soft">
          <div class="font-bold text-slate-900" style="font-size: 8pt; margin-bottom: 3px;">1. Purpose of This Deliverable</div>
          <p style="font-size: 7.4pt; color: #475569; margin: 0; line-height: 1.4;">
            This document serves as an illustrative demonstration of TrustLayerLabs' reporting quality, technical rigor, and developer remediation standards. It is provided to prospective clients, engineering executives, and compliance stakeholders to evaluate our deliverable format prior to initiating formal engagement scoping.
          </p>
        </div>
        <div class="card-soft">
          <div class="font-bold text-slate-900" style="font-size: 8pt; margin-bottom: 3px;">2. Synthetic Targets & Fictional Data</div>
          <p style="font-size: 7.4pt; color: #475569; margin: 0; line-height: 1.4;">
            All organizational names, infrastructure hostnames (<span class="font-mono text-blue-700">api.apexcloud.internal</span>), user accounts, tenant identifiers, and tokens depicted in this report are entirely fictional and synthesized for didactic clarity. No production infrastructure was harmed or probed without authorization.
          </p>
        </div>
      </div>

      <div class="card-soft">
        <div class="font-bold text-slate-900" style="font-size: 8pt; margin-bottom: 3px;">3. Non-Attestation & Non-Warranty Statement</div>
        <p style="font-size: 7.4pt; color: #475569; margin: 0 0 4px 0; line-height: 1.4;">
          This sample report does not constitute a formal audit certification, an endorsement of third-party software, or a statutory compliance attestation (such as ISO/IEC 27001 or SOC 2 Type II formal opinion). Security assessments reflect a point-in-time technical review under specified scope constraints and cannot guarantee complete immunity against emerging attack vectors.
        </p>
        <p style="font-size: 7.4pt; color: #475569; margin: 0; line-height: 1.4;">
          TrustLayerLabs disclaims all implied warranties regarding fitness for a particular compliance framework. Real engagement deliverables are executed exclusively under executed Master Services Agreements (MSAs) and mutual Non-Disclosure Agreements (NDAs).
        </p>
      </div>

      <div class="grid-2">
        <div class="card-blue">
          <div class="font-bold text-blue-700" style="font-size: 8pt; margin-bottom: 3px;">4. Ethical Research Standards</div>
          <p style="font-size: 7.4pt; color: #334155; margin: 0; line-height: 1.4;">
            All security testing conducted by TrustLayerLabs strictly adheres to ISO/IEC 29147 (Vulnerability Disclosure) and the OWASP Testing Framework. Testing activities are confined strictly to mutually agreed staging environments.
          </p>
        </div>
        <div class="card-blue">
          <div class="font-bold text-blue-700" style="font-size: 8pt; margin-bottom: 3px;">5. Intellectual Property & Distribution</div>
          <p style="font-size: 7.4pt; color: #334155; margin: 0; line-height: 1.4;">
            This illustrative document is copyrighted by TrustLayerLabs. It is distributed under TLP:AMBER guidelines for direct recipient evaluation and must not be repurposed as commercial security audit collateral without written consent.
          </p>
        </div>
      </div>

      <div class="card-soft" style="display: flex; justify-content: space-between; align-items: center; padding: 6px 12px;">
        <span class="text-xs font-mono text-slate-500">Legal Compliance Registry: Udyam-TS-02-0238127</span>
        <span class="text-xs font-mono text-slate-700 font-bold">TrustLayerLabs Advisory Group • Hyderabad, India</span>
      </div>
    </div>
    ${pageFooter(2)}
  </div>
  `);

  // ==========================================
  // PAGE 3: DOCUMENT CONTROL & VERSION HISTORY
  // ==========================================
  pages.push(`
  <div class="page">
    ${pageHeader(3, "Document Control & Metadata")}
    <div class="page-body">
      <div>
        <span class="section-badge">Section 02 • Governance</span>
        <h2 class="section-heading">Document Control & Version History</h2>
        <p class="section-subheading">Formal tracking of report authorship, revisions, verification checksums, and delivery distribution.</p>
      </div>

      <div class="card">
        <div class="font-bold text-slate-900" style="font-size: 8pt; margin-bottom: 4px;">Document Metadata Control Table</div>
        <table class="data-table">
          <tr>
            <th style="width: 28%;">Attribute</th>
            <th style="width: 72%;">Specification</th>
          </tr>
          <tr>
            <td class="font-bold font-mono">Document Identifier</td>
            <td class="font-mono text-blue-700">TTL-SAMPLE-VAPT-2026-APEX</td>
          </tr>
          <tr>
            <td class="font-bold">Document Title</td>
            <td>API, SaaS & AI Application Security Assessment — Illustrative Sample</td>
          </tr>
          <tr>
            <td class="font-bold">Assessment Classification</td>
            <td><span class="badge badge-medium">TLP:AMBER / CONFIDENTIAL SAMPLE</span></td>
          </tr>
          <tr>
            <td class="font-bold">Target Organization</td>
            <td>ApexCloud Technologies Inc. (Fictional Sample Target)</td>
          </tr>
          <tr>
            <td class="font-bold">Primary Target Application</td>
            <td>ApexCloud Core Workflow Engine v2.4 (REST, GraphQL, RAG Workers)</td>
          </tr>
          <tr>
            <td class="font-bold">Testing Methodology</td>
            <td>TrustLayerLabs Manual Application & API VAPT Framework (OWASP Top 10 Aligned)</td>
          </tr>
          <tr>
            <td class="font-bold">Release Baseline Date</td>
            <td>June 12, 2026 (Simulated Baseline)</td>
          </tr>
          <tr>
            <td class="font-bold">Retest Attestation Date</td>
            <td>June 28, 2026 (Post-Remediation Verification Baseline)</td>
          </tr>
          <tr>
            <td class="font-bold font-mono">Cryptographic SHA-256</td>
            <td class="font-mono text-xs text-slate-600">8f4c2b91e70d44a1936c5b9f71c42938a9d18e7e10984a1d4bc628f39c27e8a4</td>
          </tr>
        </table>
      </div>

      <div class="card">
        <div class="font-bold text-slate-900" style="font-size: 8pt; margin-bottom: 4px;">Version & Revision History</div>
        <table class="data-table">
          <thead>
            <tr>
              <th style="width: 12%;">Version</th>
              <th style="width: 18%;">Release Date</th>
              <th style="width: 25%;">Author / Reviewer</th>
              <th style="width: 45%;">Summary of Changes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="font-mono font-bold">v0.9</td>
              <td class="font-mono">June 08, 2026</td>
              <td>Nayansi Anand (VAPT)</td>
              <td>Initial draft findings register and proof-of-concept capture.</td>
            </tr>
            <tr>
              <td class="font-mono font-bold">v1.0</td>
              <td class="font-mono">June 12, 2026</td>
              <td>Nagasrinivasa Rao (Lead)</td>
              <td>Final assessment deliverable with root-cause analysis & code fixes.</td>
            </tr>
            <tr>
              <td class="font-mono font-bold text-blue-700">v1.1</td>
              <td class="font-mono">June 28, 2026</td>
              <td>Nagasrinivasa Rao (Lead)</td>
              <td>Post-retest verification report; updated matrix reflecting 8 verified patches.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="card">
        <div class="font-bold text-slate-900" style="font-size: 8pt; margin-bottom: 4px;">Assessment Contributors & Practice Leadership</div>
        <div class="grid-2">
          <div class="card-soft" style="padding: 6px 8px;">
            <div class="font-bold text-slate-900">Nagasrinivasa Rao</div>
            <div class="text-xs font-mono text-blue-700 font-bold">Founder & Lead Security Architect</div>
            <div class="text-xs text-slate-600" style="margin-top: 2px;">
              Technical lead for offensive testing, manual logic bypasses, BOLA discovery, and developer remediation architecture. (IIT Guwahati)
            </div>
          </div>
          <div class="card-soft" style="padding: 6px 8px;">
            <div class="font-bold text-slate-900">Ramineni Teja</div>
            <div class="text-xs font-mono text-blue-700 font-bold">Co-Founder & GRC Lead</div>
            <div class="text-xs text-slate-600" style="margin-top: 2px;">
              Governance, SOC 2 / ISO 27001 control mapping, CWL C3SA & BTF certified, vendor risk assessment, and technical audit preparation. (VIT Bhopal)
            </div>
          </div>
          <div class="card-soft" style="padding: 6px 8px;">
            <div class="font-bold text-slate-900">Nayansi Anand</div>
            <div class="text-xs font-mono text-blue-700 font-bold">Security Engineer & VAPT Consultant</div>
            <div class="text-xs text-slate-600" style="margin-top: 2px;">
              Web application and API testing specialist focusing on injection flaws, JWT lifecycle verification, and GraphQL schema exploitation.
            </div>
          </div>
          <div class="card-soft" style="padding: 6px 8px;">
            <div class="font-bold text-slate-900">Dodda Jagadeesh</div>
            <div class="text-xs font-mono text-blue-700 font-bold">Operations & Engagement Lead</div>
            <div class="text-xs text-slate-600" style="margin-top: 2px;">
              Scoping verification, assessment coordination, mutual NDA execution, and delivery logistics management.
            </div>
          </div>
        </div>
      </div>
    </div>
    ${pageFooter(3)}
  </div>
  `);

  // ==========================================
  // PAGE 4: TABLE OF CONTENTS & REPORT DIRECTORY
  // ==========================================
  pages.push(`
  <div class="page">
    ${pageHeader(4, "Table of Contents")}
    <div class="page-body">
      <div>
        <span class="section-badge">Navigation • Document Index</span>
        <h2 class="section-heading">Table of Contents & Structure Directory</h2>
        <p class="section-subheading">Complete 46-page index covering executive, architectural, deep technical finding, and remediation sections.</p>
      </div>

      <div class="grid-2" style="gap: 10px;">
        
        <div style="display: flex; flex-direction: column; gap: 4px;">
          <div class="card-soft" style="padding: 4px 8px;">
            <div class="font-bold text-blue-700" style="font-size: 7.5pt; text-transform: uppercase;">Part I: Governance & Scoping</div>
            <table style="width: 100%; font-size: 7pt; border-collapse: collapse; margin-top: 2px;">
              <tr><td style="padding: 1.5px 0;">01. Cover & Executive Identification</td><td style="text-align: right; font-weight: 700;">Page 1</td></tr>
              <tr><td style="padding: 1.5px 0;">02. Sample Report Disclaimer & Legal Notice</td><td style="text-align: right; font-weight: 700;">Page 2</td></tr>
              <tr><td style="padding: 1.5px 0;">03. Document Control & Practice Leadership</td><td style="text-align: right; font-weight: 700;">Page 3</td></tr>
              <tr><td style="padding: 1.5px 0;">04. Table of Contents & Structure Directory</td><td style="text-align: right; font-weight: 700;">Page 4</td></tr>
              <tr><td style="padding: 1.5px 0;">05. Report Purpose & Stakeholder Guide</td><td style="text-align: right; font-weight: 700;">Page 5</td></tr>
              <tr><td style="padding: 1.5px 0;">06. Target Application & Business Context</td><td style="text-align: right; font-weight: 700;">Page 6</td></tr>
              <tr><td style="padding: 1.5px 0;">07. Executive Summary & Security Posture</td><td style="text-align: right; font-weight: 700;">Page 7</td></tr>
              <tr><td style="padding: 1.5px 0;">08. Business & Technical Risk Overview</td><td style="text-align: right; font-weight: 700;">Page 8</td></tr>
              <tr><td style="padding: 1.5px 0;">09. Assessment Objectives & Testing Hypotheses</td><td style="text-align: right; font-weight: 700;">Page 9</td></tr>
              <tr><td style="padding: 1.5px 0;">10. In-Scope Asset Inventory & Criticality</td><td style="text-align: right; font-weight: 700;">Page 10</td></tr>
              <tr><td style="padding: 1.5px 0;">11. Out-of-Scope Assets & Environmental Bounds</td><td style="text-align: right; font-weight: 700;">Page 11</td></tr>
              <tr><td style="padding: 1.5px 0;">12. Rules of Engagement & Authorization Terms</td><td style="text-align: right; font-weight: 700;">Page 12</td></tr>
              <tr><td style="padding: 1.5px 0;">13. Assessment Constraints & Limitations</td><td style="text-align: right; font-weight: 700;">Page 13</td></tr>
            </table>
          </div>

          <div class="card-soft" style="padding: 4px 8px;">
            <div class="font-bold text-blue-700" style="font-size: 7.5pt; text-transform: uppercase;">Part II: Architecture & Threat Surfaces</div>
            <table style="width: 100%; font-size: 7pt; border-collapse: collapse; margin-top: 2px;">
              <tr><td style="padding: 1.5px 0;">14. Testing Methodology & Assessment Lifecycle</td><td style="text-align: right; font-weight: 700;">Page 14</td></tr>
              <tr><td style="padding: 1.5px 0;">15. Application Architecture Topology & Schema</td><td style="text-align: right; font-weight: 700;">Page 15</td></tr>
              <tr><td style="padding: 1.5px 0;">16. Trust Boundaries & Data-Flow Analysis</td><td style="text-align: right; font-weight: 700;">Page 16</td></tr>
              <tr><td style="padding: 1.5px 0;">17. Authentication & Identity Management Review</td><td style="text-align: right; font-weight: 700;">Page 17</td></tr>
              <tr><td style="padding: 1.5px 0;">18. Authorization & RBAC Hierarchy Assessment</td><td style="text-align: right; font-weight: 700;">Page 18</td></tr>
              <tr><td style="padding: 1.5px 0;">19. BOLA / IDOR Testing Scenario Deep-Dive</td><td style="text-align: right; font-weight: 700;">Page 19</td></tr>
              <tr><td style="padding: 1.5px 0;">20. Multi-Tenant Isolation Testing Framework</td><td style="text-align: right; font-weight: 700;">Page 20</td></tr>
              <tr><td style="padding: 1.5px 0;">21. API Endpoint & Object-Access Matrix (25 Endpoints)</td><td style="text-align: right; font-weight: 700;">Page 21</td></tr>
              <tr><td style="padding: 1.5px 0;">22. Business-Logic & Workflow Flaw Testing</td><td style="text-align: right; font-weight: 700;">Page 22</td></tr>
              <tr><td style="padding: 1.5px 0;">23. Session, JWT & Token Lifecycle Security</td><td style="text-align: right; font-weight: 700;">Page 23</td></tr>
              <tr><td style="padding: 1.5px 0;">24. Input Validation & Injection Vectors (SSRF/SQLi)</td><td style="text-align: right; font-weight: 700;">Page 24</td></tr>
              <tr><td style="padding: 1.5px 0;">25. Rate-Limiting & Resource Consumption Checks</td><td style="text-align: right; font-weight: 700;">Page 25</td></tr>
              <tr><td style="padding: 1.5px 0;">26. GraphQL & Nested Resolver Authorization</td><td style="text-align: right; font-weight: 700;">Page 26</td></tr>
              <tr><td style="padding: 1.5px 0;">27. Asynchronous Queue & Background Worker Security</td><td style="text-align: right; font-weight: 700;">Page 27</td></tr>
              <tr><td style="padding: 1.5px 0;">28. AI / RAG Retrieval Authorization & Semantic Search</td><td style="text-align: right; font-weight: 700;">Page 28</td></tr>
            </table>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 4px;">
          <div class="card-soft" style="padding: 4px 8px;">
            <div class="font-bold text-red-700" style="font-size: 7.5pt; text-transform: uppercase;">Part III: Detailed Findings & PoC Register</div>
            <table style="width: 100%; font-size: 7pt; border-collapse: collapse; margin-top: 2px;">
              <tr><td style="padding: 1.5px 0;">29. Illustrative Findings Register & Master Severity Matrix</td><td style="text-align: right; font-weight: 700;">Page 29</td></tr>
              <tr><td style="padding: 1.5px 0;"><strong>30. TTL-01: BOLA/IDOR on Workspace Export (CVSS 9.8)</strong></td><td style="text-align: right; font-weight: 700; color: #b91c1c;">Page 30</td></tr>
              <tr><td style="padding: 1.5px 0;"><strong>31. TTL-02: Tenant Isolation Bleed in Async Worker (CVSS 9.1)</strong></td><td style="text-align: right; font-weight: 700; color: #b91c1c;">Page 31</td></tr>
              <tr><td style="padding: 1.5px 0;"><strong>32. TTL-03: AI/RAG Vector Document Leakage (CVSS 9.3)</strong></td><td style="text-align: right; font-weight: 700; color: #b91c1c;">Page 32</td></tr>
              <tr><td style="padding: 1.5px 0;"><strong>33. TTL-04: BFLA in Member Role Management (CVSS 8.5)</strong></td><td style="text-align: right; font-weight: 700; color: #c2410c;">Page 33</td></tr>
              <tr><td style="padding: 1.5px 0;"><strong>34. TTL-05: GraphQL Circular Query & Nested Auth Bypass (CVSS 7.8)</strong></td><td style="text-align: right; font-weight: 700; color: #c2410c;">Page 34</td></tr>
              <tr><td style="padding: 1.5px 0;"><strong>35. TTL-06: JWT SSO Token Exchange Replay (CVSS 6.5)</strong></td><td style="text-align: right; font-weight: 700; color: #b45309;">Page 35</td></tr>
              <tr><td style="padding: 1.5px 0;"><strong>36. TTL-07: Webhook Signature Forgery & Replay (CVSS 5.9)</strong></td><td style="text-align: right; font-weight: 700; color: #b45309;">Page 36</td></tr>
              <tr><td style="padding: 1.5px 0;"><strong>37. TTL-08: Quota Enforcement & Tier Gate Bypass (CVSS 3.8)</strong></td><td style="text-align: right; font-weight: 700; color: #1d4ed8;">Page 37</td></tr>
            </table>
          </div>

          <div class="card-soft" style="padding: 4px 8px;">
            <div class="font-bold text-green-700" style="font-size: 7.5pt; text-transform: uppercase;">Part IV: Remediation & Verification</div>
            <table style="width: 100%; font-size: 7pt; border-collapse: collapse; margin-top: 2px;">
              <tr><td style="padding: 1.5px 0;">38. Reproduction Steps & Safe PoC Testing Guidelines</td><td style="text-align: right; font-weight: 700;">Page 38</td></tr>
              <tr><td style="padding: 1.5px 0;">39. Root-Cause Analysis Across SDLC Architecture</td><td style="text-align: right; font-weight: 700;">Page 39</td></tr>
              <tr><td style="padding: 1.5px 0;">40. Severity Rating Methodology (CVSS v3.1 & DREAD)</td><td style="text-align: right; font-weight: 700;">Page 40</td></tr>
              <tr><td style="padding: 1.5px 0;">41. Prioritized Remediation Roadmap (4 Phased Waves)</td><td style="text-align: right; font-weight: 700;">Page 41</td></tr>
              <tr><td style="padding: 1.5px 0;">42. Developer Remediation Code Snippets (Node, Py, Go, SQL)</td><td style="text-align: right; font-weight: 700;">Page 42</td></tr>
              <tr><td style="padding: 1.5px 0;">43. Retesting & Verification Lifecycle Methodology</td><td style="text-align: right; font-weight: 700;">Page 43</td></tr>
              <tr><td style="padding: 1.5px 0;">44. Illustrative Retest-Results Matrix (8 Verified Patches)</td><td style="text-align: right; font-weight: 700;">Page 44</td></tr>
              <tr><td style="padding: 1.5px 0;">45. Residual Risk Posture & Strategic Architecture Advice</td><td style="text-align: right; font-weight: 700;">Page 45</td></tr>
              <tr><td style="padding: 1.5px 0;">46. Appendices, 32-Pt Checklist & Official Advisory Contacts</td><td style="text-align: right; font-weight: 700;">Page 46</td></tr>
            </table>
          </div>
        </div>

      </div>

      <div class="card-blue" style="padding: 5px 10px; font-size: 7.2pt;">
        <span class="font-bold text-blue-700">Quick Navigation Note:</span> Every finding follows a standard 16-point audit specification: Identifier, CVSS Rationale, Endpoint, CWE/OWASP Mapping, Description, Preconditions, Reproduction Steps, Expected vs Observed Behavior, Safe HTTP Evidence, Impacts, Root Cause, Fix Code, Retest Procedure, and Retest Status.
      </div>
    </div>
    ${pageFooter(4)}
  </div>
  `);

  // ==========================================
  // PAGE 5: REPORT PURPOSE & INTENDED AUDIENCE
  // ==========================================
  pages.push(`
  <div class="page">
    ${pageHeader(5, "Purpose & Intended Audience")}
    <div class="page-body">
      <div>
        <span class="section-badge">Section 03 • Orientation</span>
        <h2 class="section-heading">Report Purpose & Intended Audience</h2>
        <p class="section-subheading">Guidelines for executive, engineering, and compliance readers on consuming this assessment deliverable.</p>
      </div>

      <div class="card-soft">
        <div class="font-bold text-slate-900" style="font-size: 8pt; margin-bottom: 2px;">Primary Objectives of a TrustLayerLabs Assessment</div>
        <p style="font-size: 7.4pt; color: #475569; margin: 0; line-height: 1.4;">
          A professional security assessment must bridge the divide between strategic risk governance and actionable software engineering. Automated Dynamic Application Security Testing (DAST) scanners routinely miss business logic flaws, complex role escalations, multi-step tenant boundary violations, and AI retrieval bypasses. This report articulates human-reasoned vulnerabilities with proof-of-concept evidence and production-ready code remedies.
        </p>
      </div>

      <div class="grid-2">
        <div class="card">
          <div style="display: flex; align-items: center; gap: 5px; margin-bottom: 3px;">
            <span class="badge badge-low">Leadership</span>
            <span class="font-bold text-slate-900" style="font-size: 7.8pt;">Founders, CEOs & Board of Directors</span>
          </div>
          <p style="font-size: 7.2pt; color: #475569; margin: 0 0 3px 0; line-height: 1.35;">
            <strong>Key Focus:</strong> Understand overall business risk, customer data exposure liability, compliance hurdles (SOC 2, ISO 27001, Indian DPDP Act), and enterprise deal blockers.
          </p>
          <div class="text-xs text-slate-600">
            <strong>Recommended Reading:</strong> Page 7 (Executive Summary), Page 8 (Risk Overview), Page 41 (Roadmap), Page 45 (Residual Risk & Board Strategy).
          </div>
        </div>

        <div class="card">
          <div style="display: flex; align-items: center; gap: 5px; margin-bottom: 3px;">
            <span class="badge badge-low">Engineering</span>
            <span class="font-bold text-slate-900" style="font-size: 7.8pt;">CTOs, VPs of Eng & Lead Architects</span>
          </div>
          <p style="font-size: 7.2pt; color: #475569; margin: 0 0 3px 0; line-height: 1.35;">
            <strong>Key Focus:</strong> Evaluate systemic architecture weaknesses, tenant boundary enforcement models, asynchronous queue hygiene, and authorization middleware gaps.
          </p>
          <div class="text-xs text-slate-600">
            <strong>Recommended Reading:</strong> Page 15 (Topology), Page 16 (Trust Boundaries), Page 20 (Tenancy), Page 39 (Root Cause), Page 42 (Code Patterns).
          </div>
        </div>

        <div class="card">
          <div style="display: flex; align-items: center; gap: 5px; margin-bottom: 3px;">
            <span class="badge badge-low">Developers</span>
            <span class="font-bold text-slate-900" style="font-size: 7.8pt;">Backend, Full-Stack & AI Engineers</span>
          </div>
          <p style="font-size: 7.2pt; color: #475569; margin: 0 0 3px 0; line-height: 1.35;">
            <strong>Key Focus:</strong> Reproduce vulnerabilities locally using curl PoCs, understand the exact ORM query flaw, apply code patches, and verify using unit tests.
          </p>
          <div class="text-xs text-slate-600">
            <strong>Recommended Reading:</strong> Pages 30–37 (Technical Findings 1–8), Page 38 (Safe PoCs), Page 42 (Code Fixes), Page 43 (Retest Protocol).
          </div>
        </div>

        <div class="card">
          <div style="display: flex; align-items: center; gap: 5px; margin-bottom: 3px;">
            <span class="badge badge-low">Compliance</span>
            <span class="font-bold text-slate-900" style="font-size: 7.8pt;">GRC Leads & SOC 2 / ISO Auditors</span>
          </div>
          <p style="font-size: 7.2pt; color: #475569; margin: 0 0 3px 0; line-height: 1.35;">
            <strong>Key Focus:</strong> Verify that independent penetration testing was conducted, scope was rigorously defined, critical findings were remediated, and retesting verified patches.
          </p>
          <div class="text-xs text-slate-600">
            <strong>Recommended Reading:</strong> Page 10 (Scope), Page 12 (ROE), Page 29 (Master Register), Page 44 (Retest Matrix), Page 46 (Attestation).
          </div>
        </div>
      </div>

      <div class="card-amber">
        <div class="font-bold text-amber-700" style="font-size: 7.8pt; margin-bottom: 2px;">Vulnerability Action Priority Framework</div>
        <p style="font-size: 7.2pt; color: #78350f; margin: 0; line-height: 1.35;">
          Findings designated as <strong>CRITICAL</strong> require immediate mitigation within 24 to 48 hours to prevent severe data exposure. <strong>HIGH</strong> findings should be scheduled within the active development sprint (7 days). <strong>MEDIUM</strong> and <strong>LOW</strong> findings must be incorporated into the next scheduled engineering cycle (14–30 days).
        </p>
      </div>
    </div>
    ${pageFooter(5)}
  </div>
  `);

  // ==========================================
  // PAGE 6: ILLUSTRATIVE APPLICATION & BUSINESS CONTEXT
  // ==========================================
  pages.push(`
  <div class="page">
    ${pageHeader(6, "Target Application Context")}
    <div class="page-body">
      <div>
        <span class="section-badge">Section 04 • System Profile</span>
        <h2 class="section-heading">Target Application & Fictional Business Context</h2>
        <p class="section-subheading">Operational profile, multi-tenant hierarchy, data flows, and tech stack of the simulated target platform.</p>
      </div>

      <div class="grid-2">
        <div class="card-soft">
          <div class="font-bold text-slate-900" style="font-size: 8pt; margin-bottom: 3px;">Hypothetical Target: ApexCloud Technologies Inc.</div>
          <p style="font-size: 7.3pt; color: #475569; margin: 0 0 4px 0; line-height: 1.4;">
            ApexCloud AI is a fictional B2B SaaS platform providing AI-powered workspace collaboration, enterprise knowledge base ingestion, and automated report synthesis. It serves hundreds of distinct enterprise corporate customers ("tenants") who share a multi-tenant cloud infrastructure.
          </p>
          <p style="font-size: 7.3pt; color: #475569; margin: 0; line-height: 1.4;">
            The platform processes sensitive corporate documentation, financial balance sheets, and proprietary internal knowledge. Strict tenant isolation is the primary contractual security requirement.
          </p>
        </div>

        <div class="card-soft">
          <div class="font-bold text-slate-900" style="font-size: 8pt; margin-bottom: 3px;">Multi-Tenant Hierarchy & Access Model</div>
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 6.8pt; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 4px; padding: 6px 8px; color: #1e3a8a;">
            Enterprise Organization [Tenant ID]<br>
            &nbsp;└── Workspaces [Workspace ID]<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── Projects & Folders<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── Ingested Knowledge Base (Embeddings)<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── User Roles (Owner, Admin, Member, Guest)
          </div>
          <p style="font-size: 7.2pt; color: #64748b; margin: 4px 0 0 0; line-height: 1.35;">
            Cross-tenant boundaries must be strictly enforced at every application layer, from REST APIs to asynchronous job workers and semantic search vector indices.
          </p>
        </div>
      </div>

      <div class="card">
        <div class="font-bold text-slate-900" style="font-size: 8pt; margin-bottom: 4px;">Target Technology Stack & Architecture Components</div>
        <table class="data-table">
          <tr>
            <th style="width: 25%;">Layer / Component</th>
            <th style="width: 35%;">Technology / Framework</th>
            <th style="width: 40%;">Primary Security Functionality</th>
          </tr>
          <tr>
            <td class="font-bold">Public Edge / WAF</td>
            <td>Cloudflare Enterprise WAF & DDoS Shield</td>
            <td>TLS 1.3 termination, rate-throttling, IP reputation.</td>
          </tr>
          <tr>
            <td class="font-bold">API Gateway Service</td>
            <td>Node.js 20 LTS / Express / TypeScript</td>
            <td>JWT validation, CORS policy, public route routing.</td>
          </tr>
          <tr>
            <td class="font-bold">GraphQL Service</td>
            <td>Apollo Server v4 / Node.js</td>
            <td>Complex data aggregation, workspace queries.</td>
          </tr>
          <tr>
            <td class="font-bold">AI / RAG Microservice</td>
            <td>Python 3.11 / FastAPI / LangChain</td>
            <td>Embedding generation, semantic search, prompt orchestration.</td>
          </tr>
          <tr>
            <td class="font-bold">Asynchronous Workers</td>
            <td>Redis 7 / BullMQ Cluster (Node.js & Python)</td>
            <td>Document parsing, bulk data exports, webhook dispatch.</td>
          </tr>
          <tr>
            <td class="font-bold">Primary Database</td>
            <td>PostgreSQL 16 on AWS RDS (Aurora)</td>
            <td>Tenant-partitioned data storage with Row-Level Security.</td>
          </tr>
          <tr>
            <td class="font-bold">Vector Database</td>
            <td>Pinecone Serverless / ChromaDB Index</td>
            <td>High-dimensional embeddings of customer knowledge docs.</td>
          </tr>
        </table>
      </div>

      <div class="card-blue">
        <div class="font-bold text-blue-700" style="font-size: 7.8pt; margin-bottom: 2px;">Assumed Threat Landscape for B2B AI SaaS</div>
        <p style="font-size: 7.2pt; color: #334155; margin: 0; line-height: 1.35;">
          The primary threat actor modeled in this assessment is an authenticated, malicious user from "Tenant A" attempting to access, exfiltrate, or manipulate data belonging to "Tenant B" without administrative credentials. Secondary threats include unauthenticated API abusers and low-privilege workspace members escalating to organizational ownership.
        </p>
      </div>
    </div>
    ${pageFooter(6)}
  </div>
  `);

  // ==========================================
  // PAGE 7: EXECUTIVE SUMMARY & RISK POSTURE
  // ==========================================
  pages.push(`
  <div class="page">
    ${pageHeader(7, "Executive Summary")}
    <div class="page-body">
      <div>
        <span class="section-badge">Section 05 • High-Level Synthesis</span>
        <h2 class="section-heading">Executive Summary & Security Posture</h2>
        <p class="section-subheading">Strategic overview of assessment findings, residual risk posture, and verified remediation outcomes.</p>
      </div>

      <div class="card-soft">
        <div class="font-bold text-slate-900" style="font-size: 8pt; margin-bottom: 3px;">Executive Assessment Overview</div>
        <p style="font-size: 7.4pt; color: #475569; margin: 0 0 4px 0; line-height: 1.4;">
          TrustLayerLabs conducted an intensive, practitioner-led vulnerability assessment and penetration testing (VAPT) evaluation of the ApexCloud AI SaaS platform between June 05 and June 12, 2026. The assessment focused rigorously on logical flaws, multi-tenant database isolation, API authorization boundaries, and AI vector store access controls.
        </p>
        <p style="font-size: 7.4pt; color: #475569; margin: 0; line-height: 1.4;">
          During the baseline assessment, TrustLayerLabs identified <strong>eight (8) distinct security findings</strong>, including <strong>three (3) Critical-severity</strong> and <strong>two (2) High-severity</strong> vulnerabilities. Significantly, commercial automated scanners executed in parallel failed to detect seven of the eight flaws because they required contextual tenant state, multi-step asynchronous queuing, or vector search embedding parameters.
        </p>
      </div>

      <!-- Severity Metrics Grid -->
      <div class="grid-4">
        <div style="background: #fef2f2; border: 1.5px solid #fecaca; border-radius: 6px; padding: 8px 10px; text-align: center;">
          <div style="font-size: 16pt; font-weight: 800; color: #dc2626; font-family: 'JetBrains Mono', monospace; line-height: 1;">3</div>
          <div style="font-size: 6.8pt; font-weight: 700; color: #991b1b; text-transform: uppercase; margin-top: 2px;">Critical Severity</div>
          <div style="font-size: 6.2pt; color: #b91c1c;">CVSS 9.0 – 10.0</div>
        </div>
        <div style="background: #fff7ed; border: 1.5px solid #fed7aa; border-radius: 6px; padding: 8px 10px; text-align: center;">
          <div style="font-size: 16pt; font-weight: 800; color: #ea580c; font-family: 'JetBrains Mono', monospace; line-height: 1;">2</div>
          <div style="font-size: 6.8pt; font-weight: 700; color: #c2410c; text-transform: uppercase; margin-top: 2px;">High Severity</div>
          <div style="font-size: 6.2pt; color: #c2410c;">CVSS 7.0 – 8.9</div>
        </div>
        <div style="background: #fffbeb; border: 1.5px solid #fde68a; border-radius: 6px; padding: 8px 10px; text-align: center;">
          <div style="font-size: 16pt; font-weight: 800; color: #d97706; font-family: 'JetBrains Mono', monospace; line-height: 1;">2</div>
          <div style="font-size: 6.8pt; font-weight: 700; color: #b45309; text-transform: uppercase; margin-top: 2px;">Medium Severity</div>
          <div style="font-size: 6.2pt; color: #b45309;">CVSS 4.0 – 6.9</div>
        </div>
        <div style="background: #eff6ff; border: 1.5px solid #bfdbfe; border-radius: 6px; padding: 8px 10px; text-align: center;">
          <div style="font-size: 16pt; font-weight: 800; color: #2563eb; font-family: 'JetBrains Mono', monospace; line-height: 1;">1</div>
          <div style="font-size: 6.8pt; font-weight: 700; color: #1d4ed8; text-transform: uppercase; margin-top: 2px;">Low Severity</div>
          <div style="font-size: 6.2pt; color: #1d4ed8;">CVSS 0.1 – 3.9</div>
        </div>
      </div>

      <!-- Core Finding Summaries -->
      <div class="card">
        <div class="font-bold text-slate-900" style="font-size: 8pt; margin-bottom: 3px;">Key Technical Highlights & Business Risks</div>
        <ul style="font-size: 7.3pt; color: #334155; margin: 0; padding-left: 14px; line-height: 1.45;">
          <li><strong>Cross-Tenant Data Exposure (BOLA/IDOR):</strong> Authenticated members could export any tenant's complete workspace records by swapping UUID parameters in <span class="font-mono text-blue-700">/api/v1/workspaces/{id}/export</span>.</li>
          <li><strong>Async Worker Context Bleed:</strong> Report generation workers lacked isolated tenant DB sessions, merging sensitive customer records into shared artifacts under concurrent queue load.</li>
          <li><strong>AI/RAG Vector Leakage:</strong> Semantic search vector retrieval omitted tenant metadata filters, allowing Tenant A to query and read confidential embeddings belonging to Tenant B.</li>
          <li><strong>Privilege Escalation (BFLA):</strong> Low-privilege workspace members could elevate their own roles to Workspace Owner via unvalidated role parameters.</li>
        </ul>
      </div>

      <!-- Post-Retest Resolution Banner -->
      <div class="card-green">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 2px;">
          <span class="font-bold text-green-700" style="font-size: 8pt;">Post-Retest Verification Status: 100% Remediated</span>
          <span class="badge badge-verified">VERIFIED PATCHED</span>
        </div>
        <p style="font-size: 7.2pt; color: #14532d; margin: 0; line-height: 1.35;">
          Following collaborative technical debriefs, the engineering team deployed architectural fixes. During the formal retesting phase conducted June 26–28, 2026, TrustLayerLabs verified that all eight (8) vulnerabilities were successfully patched with zero detected regressions.
        </p>
      </div>
    </div>
    ${pageFooter(7)}
  </div>
  `);

  // ==========================================
  // PAGE 8: BUSINESS & TECHNICAL RISK OVERVIEW
  // ==========================================
  pages.push(`
  <div class="page">
    ${pageHeader(8, "Business & Technical Risk")}
    <div class="page-body">
      <div>
        <span class="section-badge">Section 06 • Risk Analysis</span>
        <h2 class="section-heading">Business & Technical Risk Overview</h2>
        <p class="section-subheading">Comprehensive breakdown of exposure across regulatory, operational, intellectual property, and financial vectors.</p>
      </div>

      <div class="grid-2">
        <div class="card-red">
          <div class="font-bold text-red-700" style="font-size: 8pt; margin-bottom: 2px;">1. Tenant Confidentiality & Regulatory Exposure</div>
          <p style="font-size: 7.2pt; color: #7f1d1d; margin: 0 0 3px 0; line-height: 1.35;">
            <strong>Primary Flaw:</strong> TTL-FINDING-01 (BOLA) & TTL-FINDING-02 (Worker Context Bleed).
          </p>
          <p style="font-size: 7.2pt; color: #475569; margin: 0; line-height: 1.35;">
            Cross-tenant data exposure represents an existential risk for B2B SaaS. Unauthorized access to peer customer data breaches enterprise contractual commitments, violates SOC 2 Common Criteria CC6.1, and triggers severe statutory penalties under the Indian DPDP Act 2023 (penalties up to ₹250 Crore) and EU GDPR Article 32.
          </p>
        </div>

        <div class="card-amber">
          <div class="font-bold text-amber-700" style="font-size: 8pt; margin-bottom: 2px;">2. AI / RAG Intellectual Property Leakage</div>
          <p style="font-size: 7.2pt; color: #78350f; margin: 0 0 3px 0; line-height: 1.35;">
            <strong>Primary Flaw:</strong> TTL-FINDING-03 (Vector Search Filter Omission).
          </p>
          <p style="font-size: 7.2pt; color: #475569; margin: 0; line-height: 1.35;">
            Enterprises integrate proprietary trade secrets, confidential codebase architectures, and internal strategy decks into RAG vector databases. An unfiltered similarity search allows competing enterprise tenants to extract proprietary intelligence via carefully constructed semantic queries.
          </p>
        </div>

        <div class="card-soft">
          <div class="font-bold text-slate-900" style="font-size: 8pt; margin-bottom: 2px;">3. Service Availability & Resource Exhaustion</div>
          <p style="font-size: 7.2pt; color: #1e3a8a; margin: 0 0 3px 0; line-height: 1.35;">
            <strong>Primary Flaw:</strong> TTL-FINDING-05 (GraphQL Circular Recursion DoS).
          </p>
          <p style="font-size: 7.2pt; color: #475569; margin: 0; line-height: 1.35;">
            Unbounded nested queries allow an attacker to send high-complexity GraphQL requests that exhaust database connection pools, saturate CPU compute nodes, and trigger platform-wide cascading outages affecting all hosted tenant organizations simultaneously.
          </p>
        </div>

        <div class="card-soft">
          <div class="font-bold text-slate-900" style="font-size: 8pt; margin-bottom: 2px;">4. Financial Logic & Commercial Bypass</div>
          <p style="font-size: 7.2pt; color: #1e3a8a; margin: 0 0 3px 0; line-height: 1.35;">
            <strong>Primary Flaw:</strong> TTL-FINDING-07 (Webhook Forgery) & TTL-FINDING-08 (Tier Quota).
          </p>
          <p style="font-size: 7.2pt; color: #475569; margin: 0; line-height: 1.35;">
            Falsification of billing events and tampering with client-side feature flags enables users to unlock premium tier features (e.g., unlimited AI token generation) without billing reconciliation, directly cannibalizing corporate SaaS subscription revenues.
          </p>
        </div>
      </div>

      <div class="card">
        <div class="font-bold text-slate-900" style="font-size: 8pt; margin-bottom: 3px;">Threat Actor Profiles & Likelihood Spectrum</div>
        <table class="data-table">
          <thead>
            <tr>
              <th style="width: 20%;">Actor Profile</th>
              <th style="width: 25%;">Access Level</th>
              <th style="width: 30%;">Primary Attack Vector</th>
              <th style="width: 25%;">Pre-Remediation Risk</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="font-bold">Malicious Tenant Insider</td>
              <td>Valid Account in Tenant A</td>
              <td>BOLA parameter tampering, RAG semantic scraping, BFLA role upgrade.</td>
              <td><span class="badge badge-critical">CRITICAL / IMMINENT</span></td>
            </tr>
            <tr>
              <td class="font-bold">External API Prober</td>
              <td>Unauthenticated / Public</td>
              <td>GraphQL circular query DoS, webhook timing signature brute-force.</td>
              <td><span class="badge badge-high">HIGH / LIKELY</span></td>
            </tr>
            <tr>
              <td class="font-bold">Low-Privilege Workspace User</td>
              <td>Guest / Member in Org</td>
              <td>BFLA privilege escalation to Org Owner, sensitive export retrieval.</td>
              <td><span class="badge badge-high">HIGH / LIKELY</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    ${pageFooter(8)}
  </div>
  `);

  // ==========================================
  // PAGE 9: ASSESSMENT OBJECTIVES & TESTING HYPOTHESES
  // ==========================================
  pages.push(`
  <div class="page">
    ${pageHeader(9, "Assessment Objectives")}
    <div class="page-body">
      <div>
        <span class="section-badge">Section 07 • Engagement Goals</span>
        <h2 class="section-heading">Assessment Objectives & Testing Hypotheses</h2>
        <p class="section-subheading">Core security objectives, empirical hypotheses, and verification criteria established for the assessment.</p>
      </div>

      <div class="card-soft">
        <div class="font-bold text-slate-900" style="font-size: 8pt; margin-bottom: 3px;">The Hypothesis-Driven Testing Methodology</div>
        <p style="font-size: 7.4pt; color: #475569; margin: 0; line-height: 1.4;">
          Unlike automated vulnerability scanners that passively check for known CVE signatures, TrustLayerLabs employs a hypothesis-driven testing methodology. We formulate adversarial hypotheses based on architectural weak points and empirically test whether an attacker can violate security invariants.
        </p>
      </div>

      <div class="card">
        <div class="font-bold text-slate-900" style="font-size: 8pt; margin-bottom: 4px;">Primary Security Objectives & Empirical Findings</div>
        <table class="data-table">
          <thead>
            <tr>
              <th style="width: 22%;">Security Pillar</th>
              <th style="width: 38%;">Adversarial Hypothesis Tested</th>
              <th style="width: 25%;">Empirical Outcome</th>
              <th style="width: 15%;">Verdict</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="font-bold">Multi-Tenant Isolation</td>
              <td>Can Tenant A access Tenant B records by tampering with URL parameters or ORM filters?</td>
              <td>Confirmed via Workspace Export endpoint (<span class="font-mono">TTL-FINDING-01</span>).</td>
              <td><span class="badge badge-critical">BYPASSED</span></td>
            </tr>
            <tr>
              <td class="font-bold">Asynchronous Workers</td>
              <td>Does background job execution preserve caller tenant context across message queue boundaries?</td>
              <td>Worker thread reuses shared DB pool, merging tenant records (<span class="font-mono">TTL-02</span>).</td>
              <td><span class="badge badge-critical">BYPASSED</span></td>
            </tr>
            <tr>
              <td class="font-bold">AI / RAG Security</td>
              <td>Can semantic search queries retrieve document chunks belonging to unauthorized tenants?</td>
              <td>Pinecone vector query omitted tenant metadata filter (<span class="font-mono">TTL-03</span>).</td>
              <td><span class="badge badge-critical">BYPASSED</span></td>
            </tr>
            <tr>
              <td class="font-bold">RBAC Integrity</td>
              <td>Can a standard workspace member modify role assignments without administrative privilege?</td>
              <td>Role modification endpoint accepted client role parameter (<span class="font-mono">TTL-04</span>).</td>
              <td><span class="badge badge-high">BYPASSED</span></td>
            </tr>
            <tr>
              <td class="font-bold">GraphQL Depth & Limits</td>
              <td>Can circular GraphQL queries overwhelm the server or bypass field authorization?</td>
              <td>Deep recursive queries caused thread block & leaked billing info (<span class="font-mono">TTL-05</span>).</td>
              <td><span class="badge badge-high">BYPASSED</span></td>
            </tr>
            <tr>
              <td class="font-bold">Token Lifecycle</td>
              <td>Are Single Sign-On (SSO) tokens validated against replay and audience spoofing?</td>
              <td>Missing <span class="font-mono">jti</span> replay validation in SSO callback (<span class="font-mono">TTL-06</span>).</td>
              <td><span class="badge badge-medium">FLAGGED</span></td>
            </tr>
            <tr>
              <td class="font-bold">Webhook Integrity</td>
              <td>Are incoming payment webhooks cryptographically bound and immune to timing attacks?</td>
              <td>Signature validation susceptible to timing & replay (<span class="font-mono">TTL-07</span>).</td>
              <td><span class="badge badge-medium">FLAGGED</span></td>
            </tr>
            <tr>
              <td class="font-bold">Business Logic / Quota</td>
              <td>Can subscription feature limits and AI quotas be bypassed by parameter manipulation?</td>
              <td>Client-provided tier claims accepted without DB check (<span class="font-mono">TTL-08</span>).</td>
              <td><span class="badge badge-low">FLAGGED</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="card-blue">
        <div class="font-bold text-blue-700" style="font-size: 7.8pt; margin-bottom: 2px;">Verification Standards Applied</div>
        <p style="font-size: 7.2pt; color: #334155; margin: 0; line-height: 1.35;">
          Every hypothesis was tested non-destructively in an isolated staging environment. Exploit proofs were constructed with synthetic identifiers to demonstrate viability without causing data loss or service instability.
        </p>
      </div>
    </div>
    ${pageFooter(9)}
  </div>
  `);

  // ==========================================
  // PAGE 10: SCOPE & ILLUSTRATIVE ASSETS
  // ==========================================
  pages.push(`
  <div class="page">
    ${pageHeader(10, "Scope & Asset Inventory")}
    <div class="page-body">
      <div>
        <span class="section-badge">Section 08 • Target Scope</span>
        <h2 class="section-heading">Scope & Illustrative Assets Inventory</h2>
        <p class="section-subheading">Enumeration of all evaluated applications, API endpoints, microservices, and data repositories.</p>
      </div>

      <div class="card-soft">
        <div class="font-bold text-slate-900" style="font-size: 8pt; margin-bottom: 2px;">Formal In-Scope Target Inventory</div>
        <p style="font-size: 7.4pt; color: #475569; margin: 0; line-height: 1.4;">
          The assessment scope encompasses all internet-facing and internal microservice interfaces constituting the ApexCloud AI Core Platform v2.4 staging deployment. Testing was performed under authenticated gray-box conditions with credentials representing various tenant roles.
        </p>
      </div>

      <div class="card">
        <table class="data-table">
          <thead>
            <tr>
              <th style="width: 22%;">Target Component</th>
              <th style="width: 28%;">Hostname / URL Pattern</th>
              <th style="width: 25%;">Technology & Interface</th>
              <th style="width: 25%;">Criticality & Classification</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="font-bold">REST API Gateway</td>
              <td class="font-mono text-blue-700">api.apexcloud.internal/api/v1/*</td>
              <td>Node.js / Express REST API</td>
              <td><span class="badge badge-critical">TIER 1 • CRITICAL</span></td>
            </tr>
            <tr>
              <td class="font-bold">GraphQL Service</td>
              <td class="font-mono text-blue-700">api.apexcloud.internal/graphql</td>
              <td>Apollo Server v4 GraphQL Endpoint</td>
              <td><span class="badge badge-critical">TIER 1 • CRITICAL</span></td>
            </tr>
            <tr>
              <td class="font-bold">AI RAG Microservice</td>
              <td class="font-mono text-blue-700">ai-service.apexcloud.internal/v1/*</td>
              <td>Python FastAPI / LangChain RAG</td>
              <td><span class="badge badge-critical">TIER 1 • CRITICAL</span></td>
            </tr>
            <tr>
              <td class="font-bold">Background Job Queue</td>
              <td class="font-mono text-blue-700">queue.apexcloud.internal (Redis)</td>
              <td>BullMQ / Celery Worker Pool</td>
              <td><span class="badge badge-high">TIER 2 • HIGH</span></td>
            </tr>
            <tr>
              <td class="font-bold">SSO & Auth Callback</td>
              <td class="font-mono text-blue-700">api.apexcloud.internal/auth/sso/*</td>
              <td>OAuth 2.0 / SAML Callback API</td>
              <td><span class="badge badge-high">TIER 2 • HIGH</span></td>
            </tr>
            <tr>
              <td class="font-bold">Webhook Dispatcher</td>
              <td class="font-mono text-blue-700">api.apexcloud.internal/webhooks/*</td>
              <td>Stripe & Customer Webhooks</td>
              <td><span class="badge badge-medium">TIER 3 • MEDIUM</span></td>
            </tr>
            <tr>
              <td class="font-bold">Knowledge Vector Store</td>
              <td class="font-mono text-blue-700">pinecone-index.apexcloud.internal</td>
              <td>Pinecone Serverless Vector Store</td>
              <td><span class="badge badge-critical">TIER 1 • CRITICAL</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="grid-2">
        <div class="card-soft">
          <div class="font-bold text-slate-900" style="font-size: 7.8pt; margin-bottom: 2px;">Test Account Credentials Provided</div>
          <table class="data-table">
            <tr>
              <th style="width: 35%;">Account Persona</th>
              <th style="width: 65%;">Tenant & Role Mapping</th>
            </tr>
            <tr>
              <td class="font-bold">Tenant A Owner</td>
              <td class="font-mono">tenant_alpha_01 (Owner Role)</td>
            </tr>
            <tr>
              <td class="font-bold">Tenant A Member</td>
              <td class="font-mono">tenant_alpha_user (Standard Member)</td>
            </tr>
            <tr>
              <td class="font-bold">Tenant B Owner</td>
              <td class="font-mono">tenant_bravo_02 (Target Victim Tenant)</td>
            </tr>
            <tr>
              <td class="font-bold">Tenant B Auditor</td>
              <td class="font-mono">tenant_bravo_auditor (Read-Only Role)</td>
            </tr>
          </table>
        </div>

        <div class="card-soft">
          <div class="font-bold text-slate-900" style="font-size: 7.8pt; margin-bottom: 2px;">Data Sensitivity Classifications</div>
          <p style="font-size: 7.2pt; color: #475569; margin: 0 0 4px 0; line-height: 1.35;">
            <strong>Confidential Customer Data:</strong> Uploaded business documents, workspace chat histories, RAG knowledge embeddings, billing invoices.
          </p>
          <p style="font-size: 7.2pt; color: #475569; margin: 0; line-height: 1.35;">
            <strong>Restricted Secrets:</strong> Database connection strings, API gateway signing keys, Redis auth tokens, Pinecone API keys.
          </p>
        </div>
      </div>
    </div>
    ${pageFooter(10)}
  </div>
  `);

  // ==========================================
  // PAGE 11: OUT-OF-SCOPE ASSETS & ASSUMPTIONS
  // ==========================================
  pages.push(`
  <div class="page">
    ${pageHeader(11, "Out-of-Scope & Assumptions")}
    <div class="page-body">
      <div>
        <span class="section-badge">Section 09 • Engagement Boundaries</span>
        <h2 class="section-heading">Out-of-Scope Assets & Assumptions</h2>
        <p class="section-subheading">Explicit exclusions, third-party service boundaries, and environmental baseline assumptions.</p>
      </div>

      <div class="card-soft">
        <div class="font-bold text-slate-900" style="font-size: 8pt; margin-bottom: 2px;">Explicit Scope Exclusions Matrix</div>
        <p style="font-size: 7.4pt; color: #475569; margin: 0; line-height: 1.4;">
          To safeguard service availability, adhere to third-party terms of service, and focus offensive engineering resources on custom application business logic, the following targets were explicitly classified as out of scope:
        </p>
      </div>

      <div class="card">
        <table class="data-table">
          <thead>
            <tr>
              <th style="width: 25%;">Target / Asset Category</th>
              <th style="width: 40%;">Reason for Exclusion</th>
              <th style="width: 35%;">Associated Residual Risk</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="font-bold">Third-Party Cloud Hypervisors</td>
              <td>AWS physical data centers, nitro hypervisors, and core routing fabric.</td>
              <td>Managed under AWS Shared Responsibility Model (SOC 2 Type II certified).</td>
            </tr>
            <tr>
              <td class="font-bold">Volumetric DDoS / Flooding</td>
              <td>Simulating Layer 3/4 volumetric bandwidth saturation can disrupt shared hosting.</td>
              <td>Relies on Cloudflare Enterprise DDoS protection configuration.</td>
            </tr>
            <tr>
              <td class="font-bold">Third-Party Payment Rails</td>
              <td>Stripe live payment gateway processing APIs (<span class="font-mono">api.stripe.com</span>).</td>
              <td>Testing confined strictly to local webhook handler verification.</td>
            </tr>
            <tr>
              <td class="font-bold">Foundation LLM Model Weights</td>
              <td>Direct weight extraction or model inversion on upstream OpenAI / Anthropic APIs.</td>
              <td>Assessment focused on application-level RAG vector retrieval & prompt handling.</td>
            </tr>
            <tr>
              <td class="font-bold">Social Engineering & Phishing</td>
              <td>Targeting ApexCloud employees or contractors via spear-phishing or vishing.</td>
              <td>Personnel security is evaluated under organizational GRC policies.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="grid-2">
        <div class="card-soft">
          <div class="font-bold text-slate-900" style="font-size: 7.8pt; margin-bottom: 2px;">Testing Assumptions & Environment Baseline</div>
          <ul style="font-size: 7.2pt; color: #475569; margin: 0; padding-left: 14px; line-height: 1.4;">
            <li>Staging environment matches production codebase (Git tag: <span class="font-mono text-blue-700">v2.4.0-rc3</span>).</li>
            <li>Synthetic data seeds reflect enterprise schema cardinality and multi-tenant volume.</li>
            <li>Database connection pooling settings in staging mirror production Aurora auto-scaling configurations.</li>
          </ul>
        </div>

        <div class="card-amber">
          <div class="font-bold text-amber-700" style="font-size: 7.8pt; margin-bottom: 2px;">Critical Staging Discrepancy Note</div>
          <p style="font-size: 7.2pt; color: #78350f; margin: 0; line-height: 1.35;">
            During initial reconnaissance, TrustLayerLabs noted that GraphQL introspection was enabled in staging but disabled in production. Testing proceeded by utilizing introspection in staging to document full schema resolvers, while verifying in production that schema discovery was properly restricted.
          </p>
        </div>
      </div>
    </div>
    ${pageFooter(11)}
  </div>
  `);

  // ==========================================
  // PAGE 12: RULES OF ENGAGEMENT & AUTHORIZATION
  // ==========================================
  pages.push(`
  <div class="page">
    ${pageHeader(12, "Rules of Engagement")}
    <div class="page-body">
      <div>
        <span class="section-badge">Section 10 • Engagement Protocols</span>
        <h2 class="section-heading">Rules of Engagement & Authorization Framework</h2>
        <p class="section-subheading">Operational testing windows, source IP identification, emergency escalation channels, and legal authorization.</p>
      </div>

      <div class="card-soft">
        <div class="font-bold text-slate-900" style="font-size: 8pt; margin-bottom: 2px;">Formal Authorization & Mutual Agreement</div>
        <p style="font-size: 7.4pt; color: #475569; margin: 0; line-height: 1.4;">
          All testing was conducted pursuant to a formal Master Services Agreement (MSA) and Statement of Work (SOW-2026-APEX-01) executed between TrustLayerLabs and ApexCloud Technologies Inc. Mutual Non-Disclosure Agreements (NDAs) protect all discovered vulnerabilities and technical artifacts.
        </p>
      </div>

      <div class="grid-2">
        <div class="card">
          <div class="font-bold text-slate-900" style="font-size: 7.8pt; margin-bottom: 3px;">Operational Testing Window</div>
          <table class="data-table">
            <tr>
              <th style="width: 40%;">Parameter</th>
              <th style="width: 60%;">Condition</th>
            </tr>
            <tr>
              <td class="font-bold">Assessment Period</td>
              <td class="font-mono">June 05 – June 12, 2026</td>
            </tr>
            <tr>
              <td class="font-bold">Active Testing Hours</td>
              <td>09:00 – 21:00 IST (UTC+5:30)</td>
            </tr>
            <tr>
              <td class="font-bold">Designated Environment</td>
              <td class="font-mono text-blue-700">staging-us-east-1.apexcloud.net</td>
            </tr>
            <tr>
              <td class="font-bold">Concurrency Cap</td>
              <td>Max 15 concurrent HTTP requests/sec</td>
            </tr>
          </table>
        </div>

        <div class="card">
          <div class="font-bold text-slate-900" style="font-size: 7.8pt; margin-bottom: 3px;">Traffic Identification Headers</div>
          <p style="font-size: 7.2pt; color: #475569; margin: 0 0 3px 0; line-height: 1.35;">
            To distinguish legitimate assessment traffic from malicious external probes in AWS CloudWatch and WAF logs, all assessment traffic carried custom identification headers:
          </p>
          <div class="code-box" style="font-size: 6.5pt; padding: 4px 6px;">
X-TTL-Security-Assessment: active
X-TTL-Practitioner: nagasrinivasa-rao
X-TTL-Reference: TTL-SAMPLE-VAPT-2026
          </div>
        </div>
      </div>

      <div class="card-amber">
        <div class="font-bold text-amber-700" style="font-size: 7.8pt; margin-bottom: 2px;">Emergency Critical Escalation Protocol</div>
        <p style="font-size: 7.2pt; color: #78350f; margin: 0 0 3px 0; line-height: 1.35;">
          Under TrustLayerLabs engagement protocols, any discovery of a <strong>Critical vulnerability (CVSS ≥ 9.0)</strong> triggering active cross-tenant data exfiltration triggers an immediate emergency notification window (within 2 hours) to the client CTO via encrypted channels (Signal / PGP Email).
        </p>
        <p style="font-size: 7.2pt; color: #78350f; margin: 0; line-height: 1.35;">
          During this assessment, the BOLA vulnerability (<span class="font-mono">TTL-FINDING-01</span>) was escalated to ApexCloud engineering within 90 minutes of discovery, enabling immediate temporary staging WAF mitigation.
        </p>
      </div>

      <div class="card-soft">
        <div class="font-bold text-slate-900" style="font-size: 7.8pt; margin-bottom: 2px;">Assigned Practitioner Source IP Addresses</div>
        <div class="font-mono text-xs text-blue-700">
          Static Gateway 1: 203.0.113.45/32 • Static Gateway 2: 198.51.100.22/32
        </div>
      </div>
    </div>
    ${pageFooter(12)}
  </div>
  `);

  // ==========================================
  // PAGE 13: ASSESSMENT LIMITATIONS & CONSTRAINTS
  // ==========================================
  pages.push(`
  <div class="page">
    ${pageHeader(13, "Assessment Limitations")}
    <div class="page-body">
      <div>
        <span class="section-badge">Section 11 • Scope Boundaries</span>
        <h2 class="section-heading">Assessment Limitations & Constraints</h2>
        <p class="section-subheading">Inherent boundaries of point-in-time assessments, code-coverage constraints, and residual considerations.</p>
      </div>

      <div class="card-soft">
        <div class="font-bold text-slate-900" style="font-size: 8pt; margin-bottom: 2px;">Understanding Point-in-Time Technical Assessments</div>
        <p style="font-size: 7.4pt; color: #475569; margin: 0; line-height: 1.4;">
          A security assessment represents an intensive evaluation of an application's defensive posture at a specific moment in time under specified environmental configurations. Modern cloud software undergoes continuous deployment cycles; any subsequent code commit, dependency upgrade, or infrastructure modification can introduce novel vulnerability paths.
        </p>
      </div>

      <div class="grid-2">
        <div class="card">
          <div class="font-bold text-slate-900" style="font-size: 7.8pt; margin-bottom: 2px;">1. Time-Boxed Testing Bounds</div>
          <p style="font-size: 7.2pt; color: #475569; margin: 0; line-height: 1.35;">
            The active assessment was executed across a 5-day manual testing window. While testing prioritized high-risk business logic and data access paths, exhaustive analysis of every possible combinatorial parameter path across millions of historical code paths is mathematically bounded by engagement duration.
          </p>
        </div>

        <div class="card">
          <div class="font-bold text-slate-900" style="font-size: 7.8pt; margin-bottom: 2px;">2. Gray-Box vs Full-Audit Bounds</div>
          <p style="font-size: 7.2pt; color: #475569; margin: 0; line-height: 1.35;">
            Testing was conducted under gray-box conditions: API specifications, schema documents, and high-level architectural walkthroughs were provided, but formal line-by-line static cryptographic audit of underlying third-party open-source libraries was outside the core SOW scope.
          </p>
        </div>

        <div class="card">
          <div class="font-bold text-slate-900" style="font-size: 7.8pt; margin-bottom: 2px;">3. Ephemeral Environment Variations</div>
          <p style="font-size: 7.2pt; color: #475569; margin: 0; line-height: 1.35;">
            Certain production features—such as live Stripe payment settlement and third-party enterprise SAML identity federation providers—were evaluated via synthetic mocks in staging. Subtle behavioral variances between mock handlers and live providers can exist.
          </p>
        </div>

        <div class="card">
          <div class="font-bold text-slate-900" style="font-size: 7.8pt; margin-bottom: 2px;">4. Evolving AI Threat Vectors</div>
          <p style="font-size: 7.2pt; color: #475569; margin: 0; line-height: 1.35;">
            GenAI and LLM attack vectors (indirect prompt injection, model jailbreaking) represent a rapidly mutating threat frontier. Testing evaluated the RAG vector retrieval authorization boundary and system prompt guardrails against current OWASP Top 10 for LLM (2025) attack techniques.
          </p>
        </div>
      </div>

      <div class="card-blue">
        <div class="font-bold text-blue-700" style="font-size: 7.8pt; margin-bottom: 2px;">Ongoing Defense Recommendations</div>
        <p style="font-size: 7.2pt; color: #334155; margin: 0; line-height: 1.35;">
          TrustLayerLabs strongly advises integrating automated security unit tests into CI/CD pipelines (verifying tenant isolation on every pull request) and repeating comprehensive manual VAPT audits on a semi-annual basis or following major architectural releases.
        </p>
      </div>
    </div>
    ${pageFooter(13)}
  </div>
  `);

  // ==========================================
  // PAGE 14: TESTING METHODOLOGY & ASSESSMENT PHASES
  // ==========================================
  pages.push(`
  <div class="page">
    ${pageHeader(14, "Testing Methodology")}
    <div class="page-body">
      <div>
        <span class="section-badge">Section 12 • Process Framework</span>
        <h2 class="section-heading">Testing Methodology & Assessment Phases</h2>
        <p class="section-subheading">TrustLayerLabs 5-phase offensive lifecycle: From threat modeling to verified retest attestation.</p>
      </div>

      <div class="card-soft">
        <div class="font-bold text-slate-900" style="font-size: 8pt; margin-bottom: 2px;">The TrustLayerLabs 5-Phase Assessment Lifecycle</div>
        <p style="font-size: 7.4pt; color: #475569; margin: 0; line-height: 1.4;">
          Our proprietary offensive testing methodology synthesizes the OWASP Web Security Testing Guide (WSTG v4.2), OWASP API Security Top 10 (2023), and OWASP Top 10 for LLM Applications (2025) into a structured 5-phase lifecycle tailored for modern cloud architectures.
        </p>
      </div>

      <!-- 5 Phases Timeline -->
      <div style="display: flex; flex-direction: column; gap: 4px;">
        
        <div class="card" style="padding: 5px 8px; border-left: 3.5px solid #2563eb;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span class="font-bold text-slate-900" style="font-size: 7.8pt;">Phase 1: Architecture Discovery & Threat Modeling</span>
            <span class="badge badge-low">Day 1</span>
          </div>
          <p style="font-size: 7.1pt; color: #475569; margin: 2px 0 0 0; line-height: 1.35;">
            Ingest API specifications (OpenAPI / Swagger, GraphQL SDL), map multi-tenant trust boundaries, analyze data models, review tenant isolation design, and establish initial adversarial testing hypotheses.
          </p>
        </div>

        <div class="card" style="padding: 5px 8px; border-left: 3.5px solid #2563eb;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span class="font-bold text-slate-900" style="font-size: 7.8pt;">Phase 2: Active Surface Reconnaissance & Parameter Mapping</span>
            <span class="badge badge-low">Day 2</span>
          </div>
          <p style="font-size: 7.1pt; color: #475569; margin: 2px 0 0 0; line-height: 1.35;">
            Enumerate all public and authenticated routes, identify parameter naming conventions (UUIDs vs sequential IDs), inspect JWT token claims, map role permissions, and test WAF baseline rule sets.
          </p>
        </div>

        <div class="card" style="padding: 5px 8px; border-left: 3.5px solid #dc2626;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span class="font-bold text-slate-900" style="font-size: 7.8pt;">Phase 3: Deep Manual Logic & Boundary Testing</span>
            <span class="badge badge-critical">Days 2–4</span>
          </div>
          <p style="font-size: 7.1pt; color: #475569; margin: 2px 0 0 0; line-height: 1.35;">
            Execute manual adversarial test cases: BOLA/IDOR parameter swapping, horizontal/vertical privilege escalation, second-order asynchronous queue poisoning, GraphQL query recursion, and RAG vector filter bypasses.
          </p>
        </div>

        <div class="card" style="padding: 5px 8px; border-left: 3.5px solid #d97706;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span class="font-bold text-slate-900" style="font-size: 7.8pt;">Phase 4: Root Cause Analysis & Fix Formulation</span>
            <span class="badge badge-medium">Day 4</span>
          </div>
          <p style="font-size: 7.1pt; color: #475569; margin: 2px 0 0 0; line-height: 1.35;">
            Trace confirmed exploits down to backend source code lines, determine architectural vs procedural root causes, formulate framework-specific code patches (TypeScript/Python/Go), and calculate CVSS v3.1 scores.
          </p>
        </div>

        <div class="card" style="padding: 5px 8px; border-left: 3.5px solid #16a34a;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span class="font-bold text-slate-900" style="font-size: 7.8pt;">Phase 5: Collaborative Debrief & Retest Verification</span>
            <span class="badge badge-verified">Day 5 + 30-Day Retest</span>
          </div>
          <p style="font-size: 7.1pt; color: #475569; margin: 2px 0 0 0; line-height: 1.35;">
            Conduct 30-minute interactive remediation debrief with client engineering leads, review developer PRs, and re-execute all original PoCs post-patch deployment to issue a final verified attestation.
          </p>
        </div>

      </div>

      <div class="card-soft" style="display: flex; justify-content: space-between; align-items: center; padding: 6px 10px;">
        <span class="text-xs font-mono text-slate-700">Standards Compliance: OWASP WSTG v4.2 • OWASP API Top 10 • ISO 29147</span>
        <span class="text-xs font-mono text-green-700 font-bold">100% Practitioner-Led Manual Execution</span>
      </div>
    </div>
    ${pageFooter(14)}
  </div>
  `);

  // ==========================================
  // PAGE 15: ILLUSTRATIVE ARCHITECTURE TOPOLOGY
  // ==========================================
  pages.push(`
  <div class="page">
    ${pageHeader(15, "Architecture Topology")}
    <div class="page-body">
      <div>
        <span class="section-badge">Section 13 • System Topology</span>
        <h2 class="section-heading">Illustrative Application Architecture Topology</h2>
        <p class="section-subheading">Technical schematic illustrating microservice interactions, data tiers, queue boundaries, and storage isolation.</p>
      </div>

      <!-- Clean SVG Architecture Diagram -->
      <div class="diagram-wrap" style="padding: 6px 10px;">
        <svg viewBox="0 0 680 260" style="width: 100%; height: auto; max-height: 250px; font-family: -apple-system, sans-serif;">
          <!-- Ingress Layer -->
          <rect x="10" y="15" width="110" height="230" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="3,3" />
          <text x="65" y="32" font-size="8.5" font-weight="700" fill="#334155" text-anchor="middle">CLIENT & EDGE</text>
          
          <rect x="20" y="45" width="90" height="38" rx="4" fill="#ffffff" stroke="#94a3b8" />
          <text x="65" y="62" font-size="7.5" font-weight="600" fill="#0f172a" text-anchor="middle">Web App (React)</text>
          <text x="65" y="73" font-size="6.5" fill="#64748b" text-anchor="middle">Tenant Browser</text>

          <rect x="20" y="100" width="90" height="38" rx="4" fill="#ffffff" stroke="#94a3b8" />
          <text x="65" y="117" font-size="7.5" font-weight="600" fill="#0f172a" text-anchor="middle">Cloudflare WAF</text>
          <text x="65" y="128" font-size="6.5" fill="#64748b" text-anchor="middle">TLS / Rate Limits</text>

          <rect x="20" y="155" width="90" height="38" rx="4" fill="#ffffff" stroke="#94a3b8" />
          <text x="65" y="172" font-size="7.5" font-weight="600" fill="#0f172a" text-anchor="middle">Webhook Dispatch</text>
          <text x="65" y="183" font-size="6.5" fill="#64748b" text-anchor="middle">Stripe / Webhooks</text>

          <!-- Arrows from Edge to API Gateway -->
          <line x1="110" y1="119" x2="160" y2="119" stroke="#2563eb" stroke-width="1.5" marker-end="url(#arrow)" />

          <!-- API Gateway Layer -->
          <rect x="160" y="15" width="150" height="230" rx="6" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5" />
          <text x="235" y="32" font-size="8.5" font-weight="700" fill="#1e40af" text-anchor="middle">API GATEWAY & ROUTING</text>
          
          <rect x="175" y="45" width="120" height="42" rx="4" fill="#ffffff" stroke="#3b82f6" />
          <text x="235" y="62" font-size="7.5" font-weight="700" fill="#1d4ed8" text-anchor="middle">Express Gateway</text>
          <text x="235" y="73" font-size="6.5" fill="#475569" text-anchor="middle">JWT Auth Middleware</text>
          <text x="235" y="82" font-size="6" fill="#b91c1c" text-anchor="middle">※ BOLA Vulnerability Point</text>

          <rect x="175" y="102" width="120" height="42" rx="4" fill="#ffffff" stroke="#3b82f6" />
          <text x="235" y="119" font-size="7.5" font-weight="700" fill="#1d4ed8" text-anchor="middle">Apollo GraphQL</text>
          <text x="235" y="130" font-size="6.5" fill="#475569" text-anchor="middle">SDL Resolvers</text>
          <text x="235" y="139" font-size="6" fill="#b91c1c" text-anchor="middle">※ Circular Query DoS</text>

          <rect x="175" y="160" width="120" height="42" rx="4" fill="#ffffff" stroke="#3b82f6" />
          <text x="235" y="177" font-size="7.5" font-weight="700" fill="#1d4ed8" text-anchor="middle">SSO Handler</text>
          <text x="235" y="188" font-size="6.5" fill="#475569" text-anchor="middle">OAuth 2.0 / SAML</text>
          <text x="235" y="197" font-size="6" fill="#b45309" text-anchor="middle">※ Token Replay Point</text>

          <!-- Arrows to Internal Microservices -->
          <line x1="310" y1="66" x2="360" y2="66" stroke="#2563eb" stroke-width="1.5" />
          <line x1="310" y1="123" x2="360" y2="123" stroke="#2563eb" stroke-width="1.5" />
          <line x1="310" y1="181" x2="360" y2="181" stroke="#2563eb" stroke-width="1.5" />

          <!-- Internal Services & Workers -->
          <rect x="360" y="15" width="150" height="230" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
          <text x="435" y="32" font-size="8.5" font-weight="700" fill="#334155" text-anchor="middle">SERVICES & ASYNC TIER</text>

          <rect x="375" y="45" width="120" height="45" rx="4" fill="#ffffff" stroke="#94a3b8" />
          <text x="435" y="62" font-size="7.5" font-weight="700" fill="#0f172a" text-anchor="middle">FastAPI AI Engine</text>
          <text x="435" y="73" font-size="6.5" fill="#475569" text-anchor="middle">LangChain RAG Pipeline</text>
          <text x="435" y="83" font-size="6" fill="#b91c1c" text-anchor="middle">※ Filter Omission Vulnerability</text>

          <rect x="375" y="105" width="120" height="45" rx="4" fill="#ffffff" stroke="#94a3b8" />
          <text x="435" y="122" font-size="7.5" font-weight="700" fill="#0f172a" text-anchor="middle">Redis BullMQ Queue</text>
          <text x="435" y="133" font-size="6.5" fill="#475569" text-anchor="middle">Export & Ingest Tasks</text>
          <text x="435" y="143" font-size="6" fill="#b91c1c" text-anchor="middle">※ Worker Bleed Point</text>

          <rect x="375" y="165" width="120" height="42" rx="4" fill="#ffffff" stroke="#94a3b8" />
          <text x="435" y="182" font-size="7.5" font-weight="700" fill="#0f172a" text-anchor="middle">Report Worker</text>
          <text x="435" y="193" font-size="6.5" fill="#475569" text-anchor="middle">Background Consumer</text>

          <!-- Arrows to Storage -->
          <line x1="510" y1="67" x2="550" y2="100" stroke="#059669" stroke-width="1.5" />
          <line x1="510" y1="127" x2="550" y2="140" stroke="#059669" stroke-width="1.5" />

          <!-- Storage Tier -->
          <rect x="550" y="15" width="120" height="230" rx="6" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5" />
          <text x="610" y="32" font-size="8.5" font-weight="700" fill="#15803d" text-anchor="middle">PERSISTENCE TIER</text>

          <rect x="560" y="55" width="100" height="48" rx="4" fill="#ffffff" stroke="#10b981" />
          <text x="610" y="73" font-size="7.5" font-weight="700" fill="#065f46" text-anchor="middle">Pinecone Vector DB</text>
          <text x="610" y="84" font-size="6.5" fill="#475569" text-anchor="middle">Knowledge Embeddings</text>
          <text x="610" y="94" font-size="6" fill="#dc2626" text-anchor="middle">Multi-Tenant Vectors</text>

          <rect x="560" y="130" width="100" height="50" rx="4" fill="#ffffff" stroke="#10b981" />
          <text x="610" y="148" font-size="7.5" font-weight="700" fill="#065f46" text-anchor="middle">PostgreSQL 16</text>
          <text x="610" y="159" font-size="6.5" fill="#475569" text-anchor="middle">Aurora Cluster</text>
          <text x="610" y="169" font-size="6" fill="#15803d" text-anchor="middle">Row-Level Security (RLS)</text>
        </svg>
      </div>

      <div class="card-soft">
        <div class="font-bold text-slate-900" style="font-size: 7.8pt; margin-bottom: 2px;">Key Architectural Observations</div>
        <p style="font-size: 7.2pt; color: #475569; margin: 0; line-height: 1.35;">
          The system employs a microservices pattern where authentication tokens are verified at the Express Gateway, but subsequent authorization decisions are decentralized across individual route handlers, background worker threads, and Python AI services. This decentralized authorization architecture directly contributed to the inconsistencies identified in Findings 1, 2, and 3.
        </p>
      </div>
    </div>
    ${pageFooter(15)}
  </div>
  `);

  return pages;
};
