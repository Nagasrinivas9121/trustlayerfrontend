import React from "react";
import Link from "next/link";
import { 
  Shield, 
  Code, 
  Lock, 
  FileCheck, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Terminal, 
  Cpu, 
  Layers 
} from "lucide-react";

export const metadata = {
  title: "Free Developer Security Tools & Utilities",
  description: "Free client-side developer security tools by TrustLayerLabs: Secure Code Recommender, JWT Decoder & Security Analyzer, and API security checklists.",
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/tools",
  },
};

const TOOLS = [
  {
    id: "code-recommender",
    title: "Secure Code Recommender",
    badge: "Interactive Fix Engine",
    description: "Inspect backend code snippets for BOLA, SQLi, SSRF, and broken auth. Generates production-ready hardened code patches, line-by-line diffs, and regression unit tests.",
    href: "/tools/code-recommender",
    icon: Code,
    category: "Code & Architecture",
    tags: ["OWASP API", "BOLA / IDOR", "TypeScript", "Python", "Go"],
    features: [
      "Real-time heuristic vulnerability detection",
      "Side-by-side secure refactor diff viewer",
      "Ready-to-run regression unit test suites",
      "100% private in-browser analysis"
    ]
  },
  {
    id: "jwt-decoder",
    title: "JWT Decoder & Security Analyzer",
    badge: "Auth Auditor",
    description: "Decode and inspect JSON Web Tokens locally. Audits signatures, tests for 'alg: none' exploits, key confusion, and sensitive payload exposure.",
    href: "/tools/jwt-decoder",
    icon: Lock,
    category: "Authentication",
    tags: ["JWT", "Signature Check", "RFC 7519", "None Exploit"],
    features: [
      "Decode header, payload, and signatures client-side",
      "Automated CVE vulnerability assessment",
      "Expiration & time-skew verification",
      "Zero server logging or storage"
    ]
  },
  {
    id: "startup-checklist",
    title: "Startup API & SaaS Security Checklist",
    badge: "Lead Magnet",
    description: "Interactive 64-point offensive checklist auditing multi-tenant isolation, authorization state machines, and cloud configurations prior to SOC 2 audits.",
    href: "/checklist",
    icon: FileCheck,
    category: "Compliance & Auditing",
    tags: ["SOC 2", "ISO 27001", "Multi-Tenant", "Checklist"],
    features: [
      "Interactive progress tracker",
      "Downloadable audit brief",
      "Categorized by engineering domains",
      "Benchmark against enterprise requirements"
    ]
  },
  {
    id: "api-checklist",
    title: "OWASP API Security Checklist",
    badge: "Microservices",
    description: "Comprehensive testing checklist focused on OWASP API Top 10 vulnerabilities including BOLA, BFLA, mass assignment, and unrestricted resource consumption.",
    href: "/api-security-checklist",
    icon: Terminal,
    category: "API & Microservices",
    tags: ["REST", "GraphQL", "gRPC", "BOLA"],
    features: [
      "OWASP API 2023 alignment",
      "Practical remediation patterns",
      "Tenant boundary controls",
      "Audit preparation guide"
    ]
  }
];

export default function ToolsIndexPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen pt-32 pb-24 font-sans text-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 shadow-xs text-xs font-semibold text-blue-700 mb-4">
            <Sparkles size={14} className="text-blue-600" />
            <span>Practitioner-Built Developer Utilities</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 mb-4">
            Free Developer <span className="text-blue-600">Security Tools</span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Free, privacy-first developer security utilities built by offensive security practitioners to help engineering teams harden code, verify auth tokens, and prepare for enterprise security audits.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {TOOLS.map((tool) => {
            const Icon = tool.icon;
            return (
              <div 
                key={tool.id}
                className="bg-white rounded-2xl border border-neutral-200 p-8 shadow-sm hover:shadow-md hover:border-neutral-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon size={24} />
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200">
                      {tool.badge}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-neutral-950 mb-2 group-hover:text-blue-600 transition-colors">
                    {tool.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                    {tool.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {tool.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-neutral-700 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {tool.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-0.5 bg-neutral-50 rounded text-[10px] font-mono font-medium text-neutral-600 border border-neutral-200/80">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={tool.href}
                  className="w-full py-2.5 px-4 rounded-xl bg-neutral-900 hover:bg-blue-600 text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <span>Launch Tool</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="bg-gradient-to-r from-neutral-900 to-[#121620] text-white rounded-2xl p-8 sm:p-10 shadow-lg border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              Need a Full Manual Penetration Test for SOC 2 or Enterprise Sales?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Our certified offensive practitioners systematically probe your APIs, web apps, and AI state machines with reproduction cURL scripts and complimentary 30-day retesting.
            </p>
          </div>
          <Link
            href="/free-assessment"
            className="shrink-0 px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center gap-2"
          >
            <span>Get Fixed-Price Quote in 24h</span>
            <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </div>
  );
}
