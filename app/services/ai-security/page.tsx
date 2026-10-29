export const revalidate = 3600;
import React from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  ShieldCheck, 
  ArrowRight, 
  Calendar, 
  CheckCircle2, 
  Bot, 
  Lock, 
  Database, 
  Server, 
  FileText, 
  Layers, 
  HelpCircle,
  Clock,
  ShieldAlert,
  Code,
  Cpu
} from "lucide-react";
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI & LLM Application Security Testing",
  description: "Offensive security assessment for GenAI apps, LLM agents, and RAG vector databases. Test prompt injection, context leakage, and tool abuse with free retesting.",
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/services/ai-security",
  },
  openGraph: {
    title: "AI & LLM Application Security Testing | TrustLayerLabs",
    description: "Offensive security assessment for GenAI apps, LLM agents, and RAG vector databases. Test prompt injection, context leakage, and tool abuse with free retesting.",
    url: "https://www.trustlayerlabs.co.in/services/ai-security",
    siteName: "TrustLayerLabs",
    locale: "en_IN",
    alternateLocale: ["en_US"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & LLM Application Security Testing | TrustLayerLabs",
    description: "Offensive security assessment for GenAI apps, LLM agents, and RAG vector databases. Test prompt injection, context leakage, and tool abuse with free retesting.",
  },
};

const whoWeHelp = [
  {
    title: "GenAI SaaS Products",
    desc: "Startups integrating OpenAI, Anthropic, or open-source LLMs into customer-facing multi-tenant products."
  },
  {
    title: "Autonomous AI Agents",
    desc: "Systems with tool-execution privileges (e.g., executing SQL queries, sending emails, or triggering API webhooks)."
  },
  {
    title: "RAG & Vector Search Platforms",
    desc: "Knowledge retrieval systems using Pinecone, Qdrant, Weaviate, or pgvector storing sensitive enterprise documents."
  },
  {
    title: "Enterprise Copilots & Chatbots",
    desc: "Internal enterprise assistants accessing HR, finance, and confidential internal intellectual property."
  }
];

const testAreas = [
  {
    code: "LLM01:2025",
    title: "Direct & Indirect Prompt Injection",
    desc: "Testing system prompt bypasses, instruction override attacks, and indirect injection embedded within external web/document inputs.",
    icon: ShieldAlert
  },
  {
    code: "LLM02:2025",
    title: "Sensitive Information Disclosure",
    desc: "Evaluating LLM training data extraction, system prompt leakage, and proprietary backend prompt architecture disclosure.",
    icon: Lock
  },
  {
    code: "LLM06:2025",
    title: "RAG Vector Database Tenant Isolation",
    desc: "Auditing vector search query filters (e.g. pgvector, Pinecone) to ensure Tenant A cannot retrieve documents belonging to Tenant B.",
    icon: Database
  },
  {
    code: "LLM08:2025",
    title: "Excessive Agency & Tool Abuse",
    desc: "Fuzzing LLM tool parameters to verify if adversarial prompts can trigger unauthorized database deletions, file writes, or API calls.",
    icon: Cpu
  },
  {
    code: "LLM04:2025",
    title: "Model Denial of Service (DoS)",
    desc: "Testing context window overflow, resource-intensive query loops, and recursive token consumption triggers.",
    icon: Server
  },
  {
    code: "LLM05:2025",
    title: "Supply Chain & Dependency Vulnerabilities",
    desc: "Reviewing vulnerable LangChain, LlamaIndex, model checkpoints, and third-party plugin integrations.",
    icon: Code
  },
  {
    code: "Insecure Output",
    title: "Insecure Output Handling & SSRF/XSS",
    desc: "Evaluating whether raw LLM output fed into downstream browsers or backend interpreters causes XSS or remote execution.",
    icon: Layers
  },
  {
    code: "Guardrails Audit",
    title: "Guardrails & Filter Robustness",
    desc: "Testing jailbreaks and adversarial Unicode/base64 encoding to bypass NeMo Guardrails, Llama Guard, and moderation layers.",
    icon: ShieldCheck
  }
];

const deliverables = [
  {
    title: "AI Security Vulnerability Report",
    desc: "Complete technical findings breakdown with CVSS v3.1 scoring, LLM attack vectors, and risk classifications."
  },
  {
    title: "Adversarial Prompt PoC Payloads",
    desc: "Reproducible prompt injection strings, jailbreak templates, and automated harness scripts."
  },
  {
    title: "Deterministic Guardrail Remediation",
    desc: "Practical defense patterns including vector metadata filtering, input sanitation, and output validation code."
  },
  {
    title: "Executive Summary for Stakeholders",
    desc: "A clear risk briefing designed for founders, CTOs, enterprise procurement reviewers, and investors."
  },
  {
    title: "Developer Debrief Call",
    desc: "Direct consultation with our lead offensive practitioner to walk your engineering team through fix strategies."
  },
  {
    title: "30-Day Retest & Verification Letter",
    desc: "Re-evaluation of patched guardrails and issuance of a formal Retest Verification Letter."
  }
];

const faqs = [
  {
    q: "What is AI application security testing and what does it cover?",
    a: "AI application security testing is an offensive security assessment tailored for systems integrating Large Language Models (LLMs), autonomous agents, and Retrieval-Augmented Generation (RAG) architectures. It covers direct and indirect prompt injection, vector store multi-tenant isolation, excessive agency in tool-calling workflows, sensitive context disclosure, and insecure output handling across your application stack."
  },
  {
    q: "How should permissions and authorization be enforced in RAG applications?",
    a: "Authorization in RAG applications must be enforced deterministically at the data retrieval layer before context reaches the LLM. Vector queries must include mandatory metadata filters matching the authenticated user's tenant and role permissions (e.g., filter: { tenantId: user.tenantId, acl: { $in: user.groups } }). Attempting to enforce permissions via prompt instructions alone is ineffective because system prompts can be overridden by adversarial user inputs."
  },
  {
    q: "What is Indirect Prompt Injection and why is it dangerous?",
    a: "Indirect prompt injection occurs when an AI application ingests untrusted third-party data—such as parsed PDFs, scraped web content, or incoming emails—that contains hidden adversarial instructions. When the model processes this data, it may follow the attacker's embedded instructions rather than the developer's system prompt, potentially triggering unauthorized tool calls or leaking private workspace documents."
  },
  {
    q: "How do you evaluate AI agent tool permissions and excessive agency?",
    a: "We audit the boundary between the model's natural language reasoning and your backend tools (APIs, SQL databases, email services). We test whether malicious prompt manipulation can coerce the agent into calling unintended functions, escalating parameter values (e.g., modifying SQL WHERE clauses), or executing destructive write operations without human-in-the-loop confirmation."
  },
  {
    q: "Does every AI application have these vulnerabilities?",
    a: "No. Security risk is determined by architecture and privilege boundaries. An isolated, read-only documentation chatbot has a fundamentally different risk profile than an autonomous agent with database write access or a multi-tenant RAG platform querying confidential corporate archives. Our assessment scopes testing to your specific architectural boundaries."
  },
  {
    q: "How long does an AI application security audit take?",
    a: "AI application security assessments typically take 7-10 business days, depending on model integration depth, tool-calling complexity, and vector store architecture. If you have an urgent deadline, critical findings and PoCs are debriefed within 48 hours so your engineers can start patching."
  },
  {
    q: "Is vulnerability retesting included after our engineering team implements guardrails?",
    a: "Yes. Every assessment includes 30 days of complimentary retesting. Once your developers implement deterministic filtering, prompt defenses, or tool permission boundaries, we re-test the identified attack vectors and issue an updated report and Retest Verification Letter."
  }
];

export default function AiSecurityPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.trustlayerlabs.co.in/services/ai-security#service",
        "name": "AI & LLM Application Security Testing",
        "serviceType": "AI Security Auditing",
        "provider": {
          "@type": "Organization",
          "@id": "https://www.trustlayerlabs.co.in/#organization",
          "name": "TrustLayerLabs",
          "url": "https://www.trustlayerlabs.co.in"
        },
        "description": "Vulnerability assessment for AI applications, LLM agents, RAG vector databases, and prompt injection vectors (OWASP Top 10 for LLMs).",
        "areaServed": ["India", "United States", "United Kingdom", "European Union", "United Arab Emirates", "Singapore"],
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.trustlayerlabs.co.in/services/ai-security#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trustlayerlabs.co.in" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.trustlayerlabs.co.in/services" },
          { "@type": "ListItem", "position": 3, "name": "AI Security", "item": "https://www.trustlayerlabs.co.in/services/ai-security" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.trustlayerlabs.co.in/services/ai-security#faq",
        "mainEntity": faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ],
  };

  return (
    <div className="bg-background min-h-screen pt-32 pb-24 font-sans text-textPrimary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="section-container max-w-6xl mx-auto">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 mb-6">
          <Link href="/" className="text-xs uppercase font-mono text-textSecondary hover:text-textPrimary transition-colors">Home</Link>
          <span className="text-xs text-textSecondary">/</span>
          <Link href="/services" className="text-xs uppercase font-mono text-textSecondary hover:text-textPrimary transition-colors">Services</Link>
          <span className="text-xs text-textSecondary">/</span>
          <span className="text-xs uppercase font-mono text-primary font-bold">AI Security</span>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider">
            <Bot size={13} className="text-primary" />
            <span>OWASP Top 10 for LLMs</span>
          </div>

          <h1 className="heading-1 font-sans text-textPrimary tracking-tight">
            AI & LLM Application <span className="text-primary">Security Testing</span>
          </h1>

          <p className="text-base sm:text-lg text-textSecondary leading-relaxed font-sans max-w-3xl">
            Offensive security assessments for GenAI applications, autonomous AI agents, and RAG vector store integrations. We test for prompt injection, sensitive context leakage, tool-calling abuse, and vector database isolation flaws.
          </p>

          {/* Quick Value Prop Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-3.5 bg-surface border border-border/80 rounded-xl">
              <span className="text-[10px] font-mono uppercase tracking-wider text-primary font-bold block mb-1">WHO WE HELP</span>
              <p className="text-xs text-textSecondary leading-normal">AI SaaS startups, LLM agent builders, and RAG database platforms.</p>
            </div>
            <div className="p-3.5 bg-surface border border-border/80 rounded-xl">
              <span className="text-[10px] font-mono uppercase tracking-wider text-primary font-bold block mb-1">WHAT WE TEST</span>
              <p className="text-xs text-textSecondary leading-normal">Direct/indirect prompt injection, vector tenant isolation, and tool abuse.</p>
            </div>
            <div className="p-3.5 bg-surface border border-border/80 rounded-xl">
              <span className="text-[10px] font-mono uppercase tracking-wider text-primary font-bold block mb-1">DELIVERABLES</span>
              <p className="text-xs text-textSecondary leading-normal">Adversarial PoCs, guardrail fixes, executive summary & 30-day verified retest.</p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link 
              href="/free-assessment"
              className="px-8 py-3.5 bg-primary hover:bg-primary-hover text-white text-xs uppercase font-sans font-bold tracking-wider rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              <span>Get a Free Security Scoping Review →</span>
            </Link>

            <Link 
              href="/sample-report"
              className="px-8 py-3.5 bg-surface border border-border hover:border-zinc-400 text-xs uppercase font-sans font-semibold tracking-wider rounded-xl text-textPrimary hover:text-primary transition-all flex items-center gap-2"
            >
              <FileText size={15} />
              <span>View the Sample Assessment Report</span>
            </Link>
          </div>
        </div>

        {/* Who We Help Section */}
        <div className="py-16 border-t border-border" id="who-we-help">
          <div className="mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-4">
              <span>Target AI Systems</span>
            </div>
            <h2 className="heading-2 font-sans mb-3 text-textPrimary">
              Who We <span className="text-primary">Help</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whoWeHelp.map((item, idx) => (
              <div key={idx} className="p-6 bg-surface border border-border rounded-2xl space-y-2.5 shadow-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                  <h3 className="text-sm font-bold text-textPrimary font-sans">{item.title}</h3>
                </div>
                <p className="text-xs text-textSecondary leading-relaxed font-sans pl-6">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* What We Test */}
        <div className="py-16 border-t border-border" id="test-areas">
          <div className="mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-4">
              <span>Testing Vectors</span>
            </div>
            <h2 className="heading-2 font-sans mb-3 text-textPrimary">
              What We Test in <span className="text-primary">AI & LLM Applications</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testAreas.map((area, idx) => (
              <div key={idx} className="p-6 bg-surface border border-border rounded-2xl flex flex-col justify-between hover:border-zinc-400 transition-all duration-300 shadow-sm">
                <div>
                  <span className="text-[9px] font-mono font-bold text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded uppercase block mb-3 w-fit">
                    {area.code}
                  </span>
                  <h3 className="text-sm font-bold text-textPrimary tracking-tight font-sans mb-2">
                    {area.title}
                  </h3>
                  <p className="text-xs text-textSecondary leading-relaxed font-sans">
                    {area.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables Section */}
        <div className="py-16 border-t border-border" id="deliverables">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-4">
              <span>Deliverables</span>
            </div>
            <h2 className="heading-2 font-sans mb-3 text-textPrimary">
              What You Receive from <span className="text-primary">TrustLayerLabs</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item, idx) => (
              <div key={idx} className="p-6 bg-surface border border-border rounded-2xl space-y-2.5 shadow-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                  <h3 className="text-sm font-bold text-textPrimary font-sans">{item.title}</h3>
                </div>
                <p className="text-xs text-textSecondary leading-relaxed font-sans pl-6">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Cross-Service Contextual Linking */}
        <div className="my-12 space-y-4">
          <div className="p-4 bg-surface border border-border/80 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-textSecondary font-sans">
              Deploying AI models via REST or GraphQL microservices? Explore our <Link href="/services/api-security" className="text-primary font-bold hover:underline">API Security Testing</Link> services.
            </p>
            <Link href="/services/api-security" className="text-xs font-bold font-mono text-primary flex items-center gap-1 uppercase tracking-wider flex-shrink-0">
              API Security →
            </Link>
          </div>

          <div className="p-4 bg-surface border border-border/80 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-textSecondary font-sans">
              Hosting AI pipelines on AWS, GCP, or Azure? Explore our <Link href="/services/cloud-security" className="text-primary font-bold hover:underline">Cloud Security Assessment</Link> audits.
            </p>
            <Link href="/services/cloud-security" className="text-xs font-bold font-mono text-primary flex items-center gap-1 uppercase tracking-wider flex-shrink-0">
              Cloud Security →
            </Link>
          </div>
        </div>

        {/* FAQs */}
        <div className="py-16 border-t border-border" id="faqs">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-4">
              <span>FAQ</span>
            </div>
            <h2 className="heading-2 font-sans mb-3 text-textPrimary">
              AI Security Testing <span className="text-primary">FAQs</span>
            </h2>
          </div>

          <div className="space-y-4 max-w-4xl">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-6 bg-surface border border-border rounded-2xl space-y-2 shadow-sm">
                <h3 className="text-sm font-bold text-textPrimary font-sans flex items-start gap-2">
                  <span className="text-primary font-mono">Q:</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs text-textSecondary leading-relaxed font-sans pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Banner */}
        <div className="my-16 p-8 bg-surface border border-primary/30 rounded-3xl text-center space-y-6 shadow-sm">
          <div className="max-w-2xl mx-auto space-y-3">
            <h3 className="text-xl sm:text-2xl font-bold text-textPrimary font-sans">
              Ready to Scope Your AI Security Audit?
            </h3>
            <p className="text-xs sm:text-sm text-textSecondary font-sans leading-relaxed">
              Book a 30-minute scoping call with our lead security architects under mutual NDA to review your AI application architecture and prompt safety requirements.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link 
              href="/free-assessment"
              className="px-8 py-3.5 bg-primary hover:bg-primary-hover text-white text-xs uppercase font-sans font-bold tracking-wider rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              <span>Get a Free Security Scoping Review →</span>
            </Link>
            <Link 
              href="/sample-report"
              className="px-8 py-3.5 bg-background border border-border hover:border-zinc-400 text-xs uppercase font-sans font-semibold tracking-wider rounded-xl text-textPrimary hover:text-primary transition-all flex items-center gap-2"
            >
              <FileText size={15} />
              <span>View the Sample Assessment Report</span>
            </Link>
          </div>
        </div>

      </div>

      {/* Embedded Contact Form */}
      <ContactForm />
    </div>
  );
}
