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
