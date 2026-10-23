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
    topic: "Close enterprise sales cycles by showing VAPT attestation letters.",
    copy: `Is security compliance holding back your sales pipeline?

We see it all the time with Indian B2B SaaS startups. 
An enterprise buyer requests a third-party VAPT report. 
You don't have one ready. 
The deal stalls. 

At TrustLayerLabs, we help fast-growing startups clear procurement roadblocks. 

We deliver:
- Thorough manual logic VAPT (OWASP Top 10)
- In-depth developer walkthrough calls
- Signed Attestation Letters for your buyers
- Complete retesting guarantees

Get your snapshot report in 48 hours. 

👉 Book a Free Security Intake Call: https://trustlayerlabs.co.in/contact

#Startup #Sales #Procurement #VAPT #GRC`
  },
  {
    title: "4. The RAG Leakage Risk in GenAI (AI Security)",
    topic: "Why standard RAG vector databases leak tenant records without context filters.",
    copy: `AI Founders: Is your RAG pipeline leaking client data? 🧠

As more SaaS applications integrate LangChain, pgvector, and LLM agents, a new critical risk has emerged: RAG tenant leakage.

Here is how it happens:
1. User A asks the LLM: "Show me my invoice data."
2. The agent triggers a vector search in Pinecone/pgvector.
3. If the search query lacks tenant_id filters, it retrieves documents from the entire database pool.
4. The LLM summarizes information belonging to User B and shows it to User A.

To secure your AI applications:
- Enforce strict metadata filtering by tenant_id on ALL vector query vectors.
- Apply checks-effects constraints on excessive LLM agency (never grant write rights without approval).
- Audit prompts against direct and indirect injections.

Don't let prompt engineering bypass tenant isolation!

#AISecurity #LLM #GenAI #VAPT #Python`
  },
  {
    title: "5. The AWS Metadata Token Hijack (Cloud Security)",
    topic: "How SSRF exposes cloud instance metadata keys and how to secure IMDSv2.",
    copy: `How a simple PDF generator can expose your entire AWS cloud infrastructure. ☁️

It starts with Server-Side Request Forgery (SSRF).

An attacker finds an endpoint that fetches URLs (like a receipt downloader). 
Instead of a website, they request the local cloud metadata loopback:
-> http://169.254.169.254/latest/meta-data/iam/security-credentials/

If your EC2 instances run legacy IMDSv1, the server returns AWS access credentials immediately.

Our recommendations:
1. Force IMDSv2 (requires session-based token requests, blocking simple SSRF redirects).
2. Configure outbound firewall rules (iptables) to reject metadata queries from application servers.
3. Run weekly IAM privilege boundaries scans.

Harden your cloud perimeter before a scanner maps it.

#AWS #CloudSecurity #DevOps #VAPT`
  },
  {
    title: "6. The Staking Reentrancy Exploit (Web3 / Solidity)",
    topic: "Breakdown of the reentrancy pattern that drained millions from liquidity pools.",
    copy: `Solidity Developers: Reentrancy is still draining millions from staking pools. 💸

The mechanics are deceptively simple:
1. A smart contract transfers funds to an address.
2. The recipient contract has a fallback function that calls the withdraw function again.
3. Because the ledger balance state updates AFTER the transfer, the contract calculates payouts repeatedly.

The fix? The Checks-Effects-Interactions pattern:
1. CHECK conditions (require statements).
2. EFFECT state changes (update msg.sender balance to 0).
3. INTERACT with external addresses (execute the transfer).

Keep interactions last, or import OpenZeppelin's ReentrancyGuard.

#Solidity #Ethereum #Web3 #SmartContract #Security`
  },
  {
    title: "7. The K8s HostPath Container Breakout (Containers)",
    topic: "Exploiting insecure Kubernetes configurations to execute host node commands.",
    copy: `Container isolation is a boundary, not a security wall. 🐳

We recently audited a Kubernetes setup for an e-commerce backend.
Containers ran merchant integrations. They were supposed to be completely isolated.

But the configuration allowed:
\`\`\`yaml
volumeMounts:
  - mountPath: /host
    name: host-volume
\`\`\`
Using a hostPath exploit, we mounted the master node root file system inside our pod container.
In seconds, we scaled access to read node environment secrets, taking over the cluster control plane.

Remediation:
- Disable privileged container execution.
- Enforce 'restricted' Pod Security Admission policies.
- Set readOnlyRootFilesystem to true.

#Kubernetes #Docker #CloudSecurity #DevSecOps`
  },
  {
    title: "8. The SameSite Authentication Wall (Web Security)",
    topic: "Why CSRF is still relevant and how to utilize SameSite cookie flags.",
    copy: `Are your authentication cookies leaving users vulnerable to CSRF? 🍪

Cross-Site Request Forgery (CSRF) tricks a user's browser into executing state-changing API calls on a site where they are logged in.

If your cookies lack SameSite constraints, browsers automatically send session cookies on cross-origin actions.

Mitigate this by declaring:
- SameSite=Strict: The cookie is never sent in cross-site requests.
- SameSite=Lax: Sent only on top-level safe navigations (links).
- Secure: Enforce HTTPS.
- HttpOnly: Prevent script access (mitigating XSS extraction).

Hardening cookies is a 5-minute config change that blocks major attack surfaces.

#WebDev #Cybersecurity #React #NodeJS`
  },
  {
    title: "9. Passing Enterprise Security Reviews (Founders)",
    topic: "How startups can speed up sales cycles by pre-empting vendor assessments.",
    copy: `Indian SaaS Founders: Enterprise buyers stalling your sales pipeline with 300-question security surveys? 📋

Here is how to pre-empt GRC blocks and close deals 40% faster:

1. Have a mutual NDA ready to share scoping sheets.
2. Maintain an updated security attestation portal (listing SOC2 status, backup frequencies).
3. Share a third-party manual VAPT attestation report.

Enterprise procurement officers don't expect you to have 100-man security teams. 
They want proof that you manually audit your code boundaries.

👉 Book a scoping intake call: https://trustlayerlabs.co.in/free-assessment

#Startup #Sales #Compliance #SOC2`
  },
  {
    title: "10. The Insecure CORS Wildcard Trap (API Security)",
    topic: "Explaining the risk of Access-Control-Allow-Origin: * combined with credentials.",
    copy: `CORS is a browser boundary, not an API security wall. 🌐

We frequently see Express and Go code configuring:
\`\`\`javascript
Access-Control-Allow-Origin: *
Access-Control-Allow-Credentials: true
\`\`\`
This is a critical misconfiguration. If an API accepts credentials (cookies/tokens), wildcard origins enable malicious sites to send authenticated queries and read private customer payloads.

Harden your CORS:
- Map dynamic origin queries against a strict allow-list database.
- Never use '*' with credentials.
- Explicitly define allowed HTTP methods (GET, POST).

#APISecurity #Backend #Coding #NodeJS`
  },
  {
    title: "11. RBI VAPT Guidelines for FinTech (Regulatory)",
    topic: "Navigating the SEBI, RBI, and IRDAI compliance audits in India.",
    copy: `Indian FinTech Founders: Preparing to launch payment integrations or NPCI UPI interfaces? 🇮🇳

Adhering to the RBI Guidelines on Information Security and NPCI security benchmarks is non-negotiable.

Your audit checklist:
- Encrypt PII fields (Aadhaar, Account numbers) at the database layer (AES-256).
- Disable legacy TLS (v1.0/v1.1) on API gateways; enforce TLS 1.2 minimum.
- Retain detailed immutable application security logs for GRC reviews.
- Conduct a third-party VAPT audit with signed attestation letters.

Avoid compliance delays. Harden your builds early.

#FinTech #RBI #Compliance #VAPT #IndiaStartups`
  },
  {
    title: "12. The Hardcoded JWT Secret Exploit (Authentication)",
    topic: "How public JWT secrets enable token forgery and total account takeover.",
    copy: `In vulnerability research on popular SaaS starter templates, default JWT secret keys consistently enable authentication bypass in under 10 minutes. 🔑

How? Starter templates frequently ship with default template secrets:
\`\`\`javascript
const SECRET = "my-secret-key-123";
\`\`\`
Attackers match them against public wordlists, re-sign token payloads using HS256 with the secret, and elevate the role parameter to "admin".

To prevent token forgery:
1. Rotate keys using AWS KMS or GCP Secret Manager.
2. Use asymmetric algorithms (RS256) so only the private key (unknown to the client) can sign tokens.
3. Keep keys out of Git repositories.

#WebDev #NodeJS #API #Cybersecurity`
  },
  {
    title: "13. HIPAA ePHI Database Hardening (Healthcare)",
    topic: "Securing Protected Health Information in SaaS patient portals.",
    copy: `Building a HealthTech SaaS portal? HIPAA safeguards are mandatory. 🩺

Exposing electronic Protected Health Information (ePHI) can trigger severe regulatory penalties and break client trust.

Three baseline GRC controls to implement:
1. Row-Level DB Encryption: Encrypt patient records individually using AES-GCM before writing to the disk.
2. Short-lived cloud storage assets: Generate pre-signed AWS S3 or GCP Cloud Storage URLs (expiring in 15 minutes) for files.
3. Access Trails: Maintain immutable read/write logs of every user access to medical files.

#HealthTech #HIPAA #Compliance #AWS #NextJS`
  },
  {
    title: "14. Subdomain Takeover and DNS Hygiene (Perimeter)",
    topic: "Tracing dangling DNS CNAME records and remediating shadow IT risks.",
    copy: `DNS Hygiene: Is a dangling CNAME record exposing your brand? 🌐

In cloud perimeter testing, dangling subdomains are a recurring critical vector:
-> blog.startup.com CNAME startup-pages.github.io

When a third-party hosted repository or bucket is deleted without pruning the DNS pointer, an attacker can claim that identifier on the host service.

Instantly, sub.startup.com serves attacker-controlled content under your brand's trusted domain.

Harden your DNS:
- Audit all CNAME pointers monthly.
- Delete CNAME records immediately when deprecating third-party services.

#DNS #NetSec #SubdomainTakeover #VAPT`
  },
  {
    title: "15. GraphQL Query Depth Attacks (Performance)",
    topic: "Mitigating denial-of-service vectors by enforcing query depth limits.",
    copy: `GraphQL Developers: Dynamic query flexibility enables dynamic performance exploits. 🌀

Because GraphQL schemas allow self-referential queries, an attacker can submit:
\`\`\`graphql
query {
  author {
    posts {
      author {
        posts {
          author { ... }
        }
      }
    }
  }
}
\`\`\`
If clients can nest queries infinitely, the server executes deep recursive DB lookups, causing CPU starvation and crashing the application.

Remedy:
- Implement query-depth-limiting middleware (set limit to 5).
- Disable Schema Introspection in production environments.
- Use query cost analysis parameters to limit large requests.

#GraphQL #NodeJS #APISecurity #SaaS`
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
    <div className="bg-[#FAFAFA] min-h-screen pt-32 pb-24 text-neutral-900 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Link 
          href="/" 
          className="inline-flex items-center text-xs font-semibold text-neutral-500 hover:text-neutral-900 transition-colors gap-2 mb-8 group px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 shadow-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/80 shadow-sm text-xs font-semibold text-neutral-800 mb-4">
            <Linkedin size={14} className="text-blue-600" />
            <span>Practitioner Thought Leadership</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 mb-4">
            LinkedIn Security <span className="text-neutral-900">Post Templates</span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl">
            Ready-to-copy social post templates for SaaS founders and CTOs to build cybersecurity credibility and share thought leadership.
          </p>
        </div>

        {/* List of templates */}
        <div className="space-y-6">
          {templates.map((tpl, idx) => (
            <div 
              key={idx} 
              className="p-8 bg-white border border-neutral-200/80 rounded-3xl space-y-4 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:border-neutral-300 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-dashed border-neutral-200 pb-4 gap-3">
                <div>
                  <h3 className="text-base font-bold text-neutral-950">
                    {tpl.title}
                  </h3>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Topic: {tpl.topic}
                  </p>
                </div>
                
                <button
                  onClick={() => copyToClipboard(tpl.copy, idx)}
                  className="self-start sm:self-auto inline-flex items-center gap-1.5 px-4 py-2 bg-neutral-100 hover:bg-neutral-200 rounded-full text-xs font-semibold text-neutral-800 transition-all shadow-sm"
                >
                  {copiedIdx === idx ? (
                    <>
                      <Check size={13} className="text-emerald-600" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={13} /> Copy Template
                    </>
                  )}
                </button>
              </div>

              <div className="p-5 bg-neutral-950 border border-neutral-800 rounded-2xl font-mono text-xs text-neutral-200 whitespace-pre-wrap leading-relaxed max-h-[300px] overflow-y-auto shadow-inner">
                {tpl.copy}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
