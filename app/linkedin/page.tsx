"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Copy, Check, Linkedin, Shield } from "lucide-react";

interface PostTemplate {
  title: string;
  topic: string;
  copy: string;
}

const templates: PostTemplate[] = [
  {
    title: "1. The Scanner Fallacy (Thought Leadership)",
    topic: "Why automated VAPT fails SaaS startups during enterprise security procurement.",
    copy: `SaaS Founders: Stop relying on automated vulnerability scanners. 

Here is why your enterprise buyers don't trust them:

We just audited a Series A fintech app. 
They had a clean bill of health from a top automated scanner. 
Zero critical alerts. 

But when we did a manual logic audit, we found a BOLA (Broken Object Level Authorization) flaw in 15 minutes. 
An attacker could view any client transaction simply by changing an ID in the API URL query.

Scanners are great for matching signatures.
But they don't understand business logic. 
They don't understand context.

If you are trying to close $100k+ enterprise contracts, you need manual penetration testing. 

Agree or disagree?

#Cybersecurity #SaaS #VAPT #API`
  },
  {
    title: "2. The BOLA Audit & Resolution Walkthrough (Technical)",
    topic: "Line-by-line technical breakdown of tracing and patching BOLA authorization gaps.",
    copy: `How we identified and remediated a critical API authorization flaw in 4 steps (and how to fix it):

Vulnerability: Broken Object Level Authorization (BOLA)
Target: /api/v1/accounts/transfers

1. Interface Audit: Discovered target endpoints via architecture mapping.
2. Token Analysis: Inspected the JWT structure. The signature was valid, but client accounts could be queried by changing parameter IDs.
3. Tenancy Validation Check: Swapped user Account ID header with another tenant's ID. Mismatch allowed data retrieval.
4. Mitigation: Replaced direct database queries with signed row-level filters. 

Code fix:
\`\`\`javascript
if (req.user.accountId !== req.body.account_id) {
  return res.status(403).json({ error: "Access denied" });
}
\`\`\`

If your developers are writing APIs, make sure they perform resource-level authorization checks. 

#API #Security #VAPT #NodeJS #WebDev`
  },
  {
    title: "3. The 48-Hour Attestation (Conversion Focused)",
    topic: "Close enterprise sales cycles by showing VAPT certificates.",
    copy: `Is security compliance holding back your sales pipeline?

We see it all the time with Indian B2B SaaS startups. 
An enterprise buyer requests a third-party VAPT report. 
You don't have one ready. 
The deal stalls. 

At TrustLayerLabs, we help fast-growing startups clear procurement roadblocks. 

We deliver:
- Thorough manual logic VAPT (OWASP Top 10)
- In-depth developer walkthrough calls
- Attestation Certificates for your buyers
- Complete retesting guarantees

Get your snapshot report in 48 hours. 

👉 Book a Free Security Intake Call: https://trustlayerlabs.co.in/contact

#Startup #Sales #Procurement #VAPT #GRC`
  },
  {
    title: "4. The RAG Leakage Risk in GenAI (AI Security)",
    topic: "Why standard RAG vector databases leak tenant records without context filters.",
    copy: "AI Founders: Is your RAG pipeline leaking client data? 🧠\n\nAs more SaaS applications integrate LangChain, pgvector, and LLM agents, a new critical risk has emerged: RAG tenant leakage.\n\nHere is how it happens:\n1. User A asks the LLM: \"Show me my invoice data.\"\n2. The agent triggers a vector search in Pinecone/pgvector.\n3. If the search query lacks tenant_id filters, it retrieves documents from the entire database pool.\n4. The LLM summarizes information belonging to User B and shows it to User A.\n\nTo secure your AI applications:\n- Enforce strict metadata filtering by tenant_id on ALL vector query vectors.\n- Apply checks-effects constraints on excessive LLM agency (never grant write rights without approval).\n- Audit prompts against direct and indirect injections.\n\nDon't let prompt engineering bypass tenant isolation!\n\n#AISecurity #LLM #GenAI #VAPT #Python"
  },
  {
    title: "5. The AWS Metadata Token Hijack (Cloud Security)",
    topic: "How SSRF exposes cloud instance metadata keys and how to secure IMDSv2.",
    copy: "How a simple PDF generator can expose your entire AWS cloud infrastructure. ☁️\n\nIt starts with Server-Side Request Forgery (SSRF).\n\nAn attacker finds an endpoint that fetches URLs (like a receipt downloader). \nInstead of a website, they request the local cloud metadata loopback:\n-> http://169.254.169.254/latest/meta-data/iam/security-credentials/\n\nIf your EC2 instances run legacy IMDSv1, the server returns AWS access credentials immediately.\n\nOur recommendations:\n1. Force IMDSv2 (requires session-based token requests, blocking simple SSRF redirects).\n2. Configure outbound firewall rules (iptables) to reject metadata queries from application servers.\n3. Run weekly IAM privilege boundaries scans.\n\nHarden your cloud perimeter before a scanner maps it.\n\n#AWS #CloudSecurity #DevOps #VAPT"
  },
  {
    title: "6. The Staking Reentrancy Exploit (Web3 / Solidity)",
    topic: "Breakdown of the reentrancy pattern that drained millions from liquidity pools.",
    copy: "Solidity Developers: Reentrancy is still draining millions from staking pools. 💸\n\nThe mechanics are deceptively simple:\n1. A smart contract transfers funds to an address.\n2. The recipient contract has a fallback function that calls the withdraw function again.\n3. Because the ledger balance state updates AFTER the transfer, the contract calculates payouts repeatedly.\n\nThe fix? The Checks-Effects-Interactions pattern:\n1. CHECK conditions (require statements).\n2. EFFECT state changes (update msg.sender balance to 0).\n3. INTERACT with external addresses (execute the transfer).\n\nKeep interactions last, or import OpenZeppelin's ReentrancyGuard.\n\n#Solidity #Ethereum #Web3 #SmartContract #Security"
  },
  {
    title: "7. The K8s HostPath Container Breakout (Containers)",
    topic: "Exploiting insecure Kubernetes configurations to execute host node commands.",
    copy: "Container isolation is a boundary, not a security wall. 🐳\n\nWe recently audited a Kubernetes setup for an e-commerce backend.\nContainers ran merchant integrations. They were supposed to be completely isolated.\n\nBut the configuration allowed:\n```yaml\nvolumeMounts:\n  - mountPath: /host\n    name: host-volume\n```\nUsing a hostPath exploit, we mounted the master node root file system inside our pod container.\nIn seconds, we scaled access to read node environment secrets, taking over the cluster control plane.\n\nRemediation:\n- Disable privileged container execution.\n- Enforce 'restricted' Pod Security Admission policies.\n- Set readOnlyRootFilesystem to true.\n\n#Kubernetes #Docker #CloudSecurity #DevSecOps"
  },
  {
    title: "8. The SameSite Authentication Wall (Web Security)",
    topic: "Why CSRF is still relevant and how to utilize SameSite cookie flags.",
    copy: "Are your authentication cookies leaving users vulnerable to CSRF? 🍪\n\nCross-Site Request Forgery (CSRF) tricks a user's browser into executing state-changing API calls on a site where they are logged in.\n\nIf your cookies lack SameSite constraints, browsers automatically send session cookies on cross-origin actions.\n\nMitigate this by declaring:\n- SameSite=Strict: The cookie is never sent in cross-site requests.\n- SameSite=Lax: Sent only on top-level safe navigations (links).\n- Secure: Enforce HTTPS.\n- HttpOnly: Prevent script access (mitigating XSS extraction).\n\nHardening cookies is a 5-minute config change that blocks major attack surfaces.\n\n#WebDev #Cybersecurity #React #NodeJS"
  },
  {
    title: "9. Passing Enterprise Security Reviews (Founders)",
    topic: "How startups can speed up sales cycles by pre-empting vendor assessments.",
    copy: "Indian SaaS Founders: Enterprise buyers stalling your sales pipeline with 300-question security surveys? 📋\n\nHere is how to pre-empt GRC blocks and close deals 40% faster:\n\n1. Have a mutual NDA ready to share scoping sheets.\n2. Maintain an updated security attestation portal (listing SOC2 status, backup frequencies).\n3. Share a third-party manual VAPT attestation certificate.\n\nEnterprise procurement officers don't expect you to have 100-man security teams. \nThey want proof that you manually audit your code boundaries.\n\n👉 Book a scoping intake call: https://trustlayerlabs.co.in/free-assessment\n\n#Startup #Sales #Compliance #SOC2"
  },
  {
    title: "10. The Insecure CORS Wildcard Trap (API Security)",
    topic: "Explaining the risk of Access-Control-Allow-Origin: * combined with credentials.",
    copy: "CORS is a browser boundary, not an API security wall. 🌐\n\nWe frequently see Express and Go code configuring:\n```javascript\nAccess-Control-Allow-Origin: *\nAccess-Control-Allow-Credentials: true\n```\nThis is a critical misconfiguration. If an API accepts credentials (cookies/tokens), wildcard origins enable malicious sites to send authenticated queries and read private customer payloads.\n\nHarden your CORS:\n- Map dynamic origin queries against a strict allow-list database.\n- Never use '*' with credentials.\n- Explicitly define allowed HTTP methods (GET, POST).\n\n#APISecurity #Backend #Coding #NodeJS"
  },
  {
    title: "11. RBI VAPT Guidelines for FinTech (Regulatory)",
    topic: "Navigating the SEBI, RBI, and IRDAI compliance audits in India.",
    copy: "Indian FinTech Founders: Preparing to launch payment integrations or NPCI UPI interfaces? 🇮🇳\n\nAdhering to the RBI Guidelines on Information Security and NPCI security benchmarks is non-negotiable.\n\nYour audit checklist:\n- Encrypt PII fields (Aadhaar, Account numbers) at the database layer (AES-256).\n- Disable legacy TLS (v1.0/v1.1) on API gateways; enforce TLS 1.2 minimum.\n- Retain detailed immutable application security logs for GRC reviews.\n- Conduct a third-party VAPT audit with signed attestation certificates.\n\nAvoid compliance delays. Harden your builds early.\n\n#FinTech #RBI #Compliance #VAPT #IndiaStartups"
  },
  {
    title: "12. The Hardcoded JWT Secret Exploit (Authentication)",
    topic: "How public JWT secrets enable token forgery and total account takeover.",
    copy: "We just audited a SaaS app where we bypassed authentication entirely in 10 minutes. 🔑\n\nHow? The backend team used a default JWT secret key from a template:\n```javascript\nconst SECRET = \"my-secret-key-123\";\n```\nWe matched it using public lists, re-signed our JWT payload using HS256 with the secret, and changed the role parameter to \"admin\".\n\nTo prevent token forgery:\n1. Rotate keys using AWS KMS or GCP Secret Manager.\n2. Use asymmetric algorithms (RS256) so only the private key (unknown to the client) can sign tokens.\n3. Keep keys out of Git repositories.\n\n#WebDev #NodeJS #API #Cybersecurity"
  },
  {
    title: "13. HIPAA ePHI Database Hardening (Healthcare)",
    topic: "Securing Protected Health Information in SaaS patient portals.",
    copy: "Building a HealthTech SaaS portal? HIPAA safeguards are mandatory. 🩺\n\nExposing electronic Protected Health Information (ePHI) can trigger severe regulatory penalties and break client trust.\n\nThree baseline GRC controls to implement:\n1. Row-Level DB Encryption: Encrypt patient records individually using AES-GCM before writing to the disk.\n2. Short-lived cloud storage assets: Generate pre-signed AWS S3 or GCP Cloud Storage URLs (expiring in 15 minutes) for files.\n3. Access Trails: Maintain immutable read/write logs of every user access to medical files.\n\n#HealthTech #HIPAA #Compliance #AWS #NextJS"
  },
  {
    title: "14. Subdomain Takeover and DNS Hygiene (Perimeter)",
    topic: "Tracing dangling DNS CNAME records and remediating shadow IT risks.",
    copy: "DNS Hygiene: Is a dangling CNAME record exposing your brand? 🌐\n\nWe scanned a customer's perimeter and found a subdomain:\n-> blog.startup.com CNAME startup-pages.github.io\n\nBut the GitHub pages repository was deleted months ago.\nBecause the DNS CNAME remained active (dangling), we registered \"startup-pages\" on GitHub ourselves.\n\nInstantly, sub.startup.com pointed to our repository content, allowing us to host custom pages under their domain.\n\nHarden your DNS:\n- Audit all CNAME pointers monthly.\n- Delete CNAME records immediately when deprecating or deleting third-party SaaS services.\n\n#DNS #NetSec #SubdomainTakeover #VAPT"
  },
  {
    title: "15. GraphQL Query Depth Attacks (Performance)",
    topic: "Mitigating denial-of-service vectors by enforcing query depth limits.",
    copy: "GraphQL Developers: Dynamic query flexibility enables dynamic performance exploits. 🌀\n\nBecause GraphQL schemas allow self-referential queries, an attacker can submit:\n```graphql\nquery {\n  author {\n    posts {\n      author {\n        posts {\n          author { ... }\n        }\n      }\n    }\n  }\n}\n```\nIf clients can nest queries infinitely, the server executes deep recursive DB lookups, causing CPU starvation and crashing the application.\n\nRemedy:\n- Implement query-depth-limiting middleware (set limit to 5).\n- Disable Schema Introspection in production environments.\n- Use query cost analysis parameters to limit large requests.\n\n#GraphQL #NodeJS #APISecurity #SaaS"
  }
];

export default function LinkedInPage() {
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const copyToClipboard = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <div className="bg-background min-h-screen">
      <main className="pt-32 pb-24 text-textPrimary">
        <div className="section-container max-w-4xl">
          
          {/* Header */}
          <div className="mb-12">
            <Link 
              href="/" 
              className="inline-flex items-center text-xs uppercase font-sans tracking-widest text-textSecondary hover:text-textPrimary transition-colors gap-2 mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
              Back to Home
            </Link>

            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-[10px] font-bold text-primary uppercase tracking-wider mb-6 shadow-sm">
              <Linkedin size={12} className="text-primary" />
              <span>Thought Leadership Assets</span>
            </div>

            <h1 className="heading-1 mb-6 text-textPrimary font-extrabold font-sans tracking-tight">
              LinkedIn <span className="text-primary">Templates</span>
            </h1>
            <p className="body-text text-base max-w-3xl">
              Ready-to-copy social post templates for SaaS founders and CTOs to build cybersecurity credibility and share thought leadership.
            </p>
          </div>

          {/* List of templates */}
          <div className="space-y-10">
            {templates.map((tpl, idx) => (
              <div 
                key={idx} 
                className="premium-card p-6 bg-surface border border-border rounded-xl space-y-4 relative shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border/40 pb-4 gap-2">
                  <div>
                    <h3 className="text-sm font-bold text-textPrimary uppercase tracking-wider font-sans">
                      {tpl.title}
                    </h3>
                    <p className="text-[10px] text-textSecondary font-sans uppercase tracking-wider mt-1">
                      Target Focus: {tpl.topic}
                    </p>
                  </div>
                  
                  <button
                    onClick={() => copyToClipboard(tpl.copy, idx)}
                    className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 bg-background border border-border hover:border-zinc-400 rounded-lg text-[10px] uppercase font-sans tracking-wider text-textPrimary hover:bg-zinc-50 font-semibold transition-all shadow-sm"
                  >
                    {copiedIdx === idx ? (
                      <>
                        <Check size={11} className="text-success" /> Copied!
                      </>
                    ) : (
                      <>
                        <Copy size={11} /> Copy Template
                      </>
                    )}
                  </button>
                </div>

                <pre className="p-4 bg-zinc-50 border border-border rounded-xl font-mono text-[10px] text-textPrimary whitespace-pre-wrap leading-relaxed max-h-[300px] overflow-y-auto">
                  {tpl.copy}
                </pre>
              </div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}
