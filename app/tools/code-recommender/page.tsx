"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Shield,
  ShieldAlert,
  ShieldCheck,
  CheckCircle,
  Copy,
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  Code,
  Layers,
  Sparkles,
  Download,
  Terminal,
  FileCode,
  Lock,
  Cpu,
  RefreshCw,
  ExternalLink,
  HelpCircle,
  Check
} from "lucide-react";
import {
  VULNERABILITY_TEMPLATES,
  TECH_STACK_RECOMMENDATIONS,
  analyzeCodeSnippet,
  VulnerabilityTemplate,
  StackRecommendation
} from "@/lib/recommender-data";
import QuoteModal, { openQuoteModal } from "@/components/QuoteModal";
import { trackPrimaryQuoteClick } from "@/lib/analytics";

export default function CodeRecommenderPage() {
  const [activeTab, setActiveTab] = useState<"vulnerability" | "stack">("vulnerability");
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>("bola-idor");
  const [language, setLanguage] = useState<"typescript" | "python" | "go">("typescript");
  const [customCode, setCustomCode] = useState<string>("");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Stack recommender states
  const [selectedStackId, setSelectedStackId] = useState<string>("nextjs-prisma");

  // Determine current active template
  const currentTemplate = useMemo(() => {
    return VULNERABILITY_TEMPLATES.find((t) => t.id === selectedTemplateId) || VULNERABILITY_TEMPLATES[0];
  }, [selectedTemplateId]);

  // Code to analyze: either custom input or selected template code
  const activeCode = useMemo(() => {
    if (customCode.trim().length > 0) return customCode;
    const langData = currentTemplate.languages[language] || currentTemplate.languages["typescript"];
    return langData?.vulnerableCode || "";
  }, [customCode, currentTemplate, language]);

  // Run heuristic analysis
  const analysis = useMemo(() => {
    return analyzeCodeSnippet(activeCode, language);
  }, [activeCode, language]);

  const handleSelectTemplate = (templateId: string) => {
    setSelectedTemplateId(templateId);
    setCustomCode(""); // Clear custom code to switch to template
  };

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleDownloadReport = () => {
    const reportContent = `# TrustLayerLabs Security Remediation Report
Generated: ${new Date().toISOString()}
Target Category: ${analysis.matchedTemplate?.category || "Custom Code Review"}
Risk Severity: ${analysis.riskLevel} (Score: ${analysis.overallScore}/100)
CWE Reference: ${analysis.matchedTemplate?.cwe || "N/A"}
OWASP Alignment: ${analysis.matchedTemplate?.owasp || "N/A"}

## Identified Vulnerability & Root Cause
${analysis.detectedIssues.map((issue) => `### ${issue.title} [${issue.severity.toUpperCase()}]\n${issue.description}\nHint: ${issue.lineHint || "Review implementation"}`).join("\n\n")}

## Recommended Secure Refactor
\`\`\`${language}
${analysis.recommendedPatch}
\`\`\`

## Key Security Diff Highlights
${analysis.diffSummary.map((diff) => `- ${diff}`).join("\n")}

## Automated Verification Unit Test
\`\`\`${language}
${analysis.unitTestRecommendation}
\`\`\`

## TrustLayerLabs Practitioner Advisory
${analysis.advisory}
`;

    const blob = new Blob([reportContent], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `trustlayer-code-remediation-${selectedTemplateId}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const currentStack = useMemo(() => {
    return TECH_STACK_RECOMMENDATIONS.find((s) => s.id === selectedStackId) || TECH_STACK_RECOMMENDATIONS[0];
  }, [selectedStackId]);

  return (
    <div className="bg-[#FAFAFA] min-h-screen pt-28 pb-24 font-sans text-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <Link 
            href="/tools" 
            className="inline-flex items-center text-xs font-semibold text-neutral-500 hover:text-neutral-900 transition-colors gap-2 group px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 shadow-xs"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Developer Security Tools</span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              100% Client-Side Engine (No Code Transmitted)
            </span>
          </div>
        </div>

        {/* Hero Header */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 shadow-xs text-xs font-semibold text-blue-700 mb-4">
            <Sparkles size={14} className="text-blue-600" />
            <span>Automated Remediation &amp; Secure Architecture Engine</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 mb-4">
            Secure Code <span className="text-blue-600">Recommender</span> System
          </h1>
          
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Inspect vulnerable backend code, diagnose OWASP &amp; BOLA logic flaws, and receive instant hardened code patches, line-by-line diffs, and regression unit tests.
          </p>

          {/* Mode Switcher Tabs */}
          <div className="mt-8 inline-flex p-1 bg-neutral-200/80 rounded-xl shadow-inner border border-neutral-300/60">
            <button
              onClick={() => setActiveTab("vulnerability")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === "vulnerability"
                  ? "bg-white text-neutral-950 shadow-sm"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              <Code size={15} />
              Vulnerability &amp; Code Patch Recommender
            </button>
            <button
              onClick={() => setActiveTab("stack")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === "stack"
                  ? "bg-white text-neutral-950 shadow-sm"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              <Layers size={15} />
              Stack Architecture Hardening Blueprint
            </button>
          </div>
        </div>

        {/* TAB 1: Vulnerability & Code Patch Recommender */}
        {activeTab === "vulnerability" && (
          <div className="space-y-8">
            
            {/* Top Toolbar: Template Selector & Language Toggle */}
            <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-5">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-neutral-100">
                <div>
                  <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 mb-1">
                    Select Vulnerability Scenario or Paste Your Code
                  </h2>
                  <p className="text-xs text-neutral-600">
                    Choose from 7 critical OWASP/API attack patterns or paste your own backend function into the editor.
                  </p>
                </div>

                {/* Language Select */}
                <div className="flex items-center gap-2 self-end md:self-auto">
                  <span className="text-xs font-medium text-neutral-500">Language:</span>
                  <div className="flex p-0.5 bg-neutral-100 rounded-lg border border-neutral-200">
                    {(["typescript", "python", "go"] as const).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => setLanguage(lang)}
                        className={`px-3 py-1 rounded-md text-xs font-semibold capitalize transition-all ${
                          language === lang
                            ? "bg-white text-blue-700 shadow-xs"
                            : "text-neutral-600 hover:text-neutral-900"
                        }`}
                      >
                        {lang === "typescript" ? "TypeScript / Node" : lang}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Template Buttons */}
              <div className="flex flex-wrap gap-2 pt-4">
                {VULNERABILITY_TEMPLATES.map((tmpl) => {
                  const isSelected = selectedTemplateId === tmpl.id && customCode.trim() === "";
                  return (
                    <button
                      key={tmpl.id}
                      onClick={() => handleSelectTemplate(tmpl.id)}
                      className={`text-xs font-medium px-3.5 py-1.5 rounded-full border transition-all flex items-center gap-1.5 ${
                        isSelected
                          ? "bg-neutral-900 text-white border-neutral-900 shadow-sm"
                          : "bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100 hover:border-neutral-300"
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        tmpl.severity === "critical" ? "bg-red-500" : "bg-amber-500"
                      }`} />
                      {tmpl.title.split("(")[0].trim()}
                    </button>
                  );
                })}

                {customCode.trim() && (
                  <button
                    onClick={() => setCustomCode("")}
                    className="text-xs font-medium px-3.5 py-1.5 rounded-full border border-blue-300 bg-blue-50 text-blue-700 hover:bg-blue-100 transition-all flex items-center gap-1"
                  >
                    <RefreshCw size={12} />
                    Reset to Preset
                  </button>
                )}
              </div>
            </div>

            {/* Severity & Threat Diagnostic Badge Strip */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Card 1: Risk Level */}
              <div className="bg-white rounded-xl border border-neutral-200 p-4 shadow-xs flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                  analysis.riskLevel === "CRITICAL"
                    ? "bg-red-50 text-red-600"
                    : analysis.riskLevel === "HIGH"
                    ? "bg-amber-50 text-amber-600"
                    : "bg-emerald-50 text-emerald-600"
                }`}>
                  {analysis.riskLevel === "CLEAN" ? <ShieldCheck size={22} /> : <ShieldAlert size={22} />}
                </div>
                <div>
                  <p className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">Assessed Risk</p>
                  <div className="flex items-center gap-2">
                    <span className={`text-base font-bold ${
                      analysis.riskLevel === "CRITICAL"
                        ? "text-red-600"
                        : analysis.riskLevel === "HIGH"
                        ? "text-amber-600"
                        : "text-emerald-600"
                    }`}>
                      {analysis.riskLevel}
                    </span>
                    <span className="text-xs text-neutral-400">Score {analysis.overallScore}/100</span>
                  </div>
                </div>
              </div>

              {/* Card 2: CWE Classification */}
              <div className="bg-white rounded-xl border border-neutral-200 p-4 shadow-xs flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Lock size={20} />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">CWE Classification</p>
                  <p className="text-xs font-bold text-neutral-900 truncate max-w-[200px]" title={analysis.matchedTemplate?.cwe || "Heuristic Pattern"}>
                    {analysis.matchedTemplate?.cwe.split(":")[0] || "Custom Signature"}
                  </p>
                </div>
              </div>

              {/* Card 3: OWASP Category */}
              <div className="bg-white rounded-xl border border-neutral-200 p-4 shadow-xs flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                  <Terminal size={20} />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">OWASP Standard</p>
                  <p className="text-xs font-bold text-neutral-900 truncate max-w-[200px]" title={analysis.matchedTemplate?.owasp || "OWASP API Top 10"}>
                    {analysis.matchedTemplate?.owasp.split("-")[0].trim() || "API Security"}
                  </p>
                </div>
              </div>

              {/* Card 4: Export Button */}
              <div className="bg-white rounded-xl border border-neutral-200 p-4 shadow-xs flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">Audit Documentation</p>
                  <p className="text-xs font-medium text-neutral-600">Export Patch Report</p>
                </div>
                <button
                  onClick={handleDownloadReport}
                  className="px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
                >
                  <Download size={13} />
                  <span>.MD</span>
                </button>
              </div>
            </div>

            {/* Split Screen: Vulnerable Code (Input) vs. Recommended Secure Patch */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Left Column: Vulnerable Code */}
              <div className="bg-[#0f1117] rounded-2xl border border-neutral-800 overflow-hidden shadow-lg flex flex-col">
                <div className="px-4 py-3 bg-[#181a20] border-b border-neutral-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
                    <span className="text-xs font-mono font-semibold text-neutral-300">
                      Original / Vulnerable Implementation
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-neutral-400">
                    Editable (Paste your code here)
                  </span>
                </div>

                <div className="p-4 flex-1 flex flex-col font-mono text-xs">
                  <textarea
                    value={activeCode}
                    onChange={(e) => setCustomCode(e.target.value)}
                    placeholder="// Paste any backend handler or API function here..."
                    className="w-full h-80 bg-transparent text-neutral-200 resize-none outline-none font-mono text-xs leading-relaxed"
                    spellCheck={false}
                  />
                  <div className="mt-auto pt-3 border-t border-neutral-800 flex items-center justify-between text-[11px] text-neutral-400">
                    <span>{activeCode.split("\n").length} lines</span>
                    <button
                      onClick={() => handleCopy(activeCode, "vulnerable")}
                      className="hover:text-white transition-colors flex items-center gap-1"
                    >
                      {copiedKey === "vulnerable" ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                      {copiedKey === "vulnerable" ? "Copied" : "Copy Source"}
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Recommended Secure Patch */}
              <div className="bg-[#0f1117] rounded-2xl border border-emerald-900/60 overflow-hidden shadow-lg flex flex-col">
                <div className="px-4 py-3 bg-[#131b18] border-b border-emerald-900/50 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                    <span className="text-xs font-mono font-semibold text-emerald-300">
                      Recommended Secure Patch (Refactored)
                    </span>
                  </div>
                  <button
                    onClick={() => handleCopy(analysis.recommendedPatch, "patch")}
                    className="text-xs font-semibold px-2.5 py-1 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 rounded border border-emerald-500/40 transition-colors flex items-center gap-1.5"
                  >
                    {copiedKey === "patch" ? <Check size={13} className="text-emerald-300" /> : <Copy size={13} />}
                    <span>{copiedKey === "patch" ? "Copied Patch!" : "Copy Code"}</span>
                  </button>
                </div>

                <div className="p-4 flex-1 flex flex-col font-mono text-xs overflow-x-auto">
                  <pre className="text-emerald-200 leading-relaxed font-mono whitespace-pre text-xs">
                    {analysis.recommendedPatch}
                  </pre>
                  
                  <div className="mt-auto pt-3 border-t border-emerald-900/40 flex items-center justify-between text-[11px] text-neutral-400">
                    <span className="text-emerald-400/80">Production-Ready Hardened Implementation</span>
                    <span className="text-neutral-500">Dual-layer validation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Remediation Details: Diff Explanation, Root Cause & Attack Vector */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Card 1: Key Refactoring Diff */}
              <div className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle size={18} className="text-emerald-600" />
                  <h3 className="text-sm font-bold text-neutral-900">Key Security Refactor Diffs</h3>
                </div>
                <p className="text-xs text-neutral-600 mb-4">
                  Specific lines modified to eliminate the vulnerability and enforce defense-in-depth:
                </p>
                <ul className="space-y-2 font-mono text-xs text-neutral-800">
                  {analysis.diffSummary.map((item, idx) => (
                    <li 
                      key={idx} 
                      className={`p-2 rounded-lg border leading-relaxed ${
                        item.startsWith("+") 
                          ? "bg-emerald-50/70 border-emerald-200 text-emerald-900" 
                          : item.startsWith("-") 
                          ? "bg-red-50/70 border-red-200 text-red-900" 
                          : "bg-neutral-50 border-neutral-200 text-neutral-700"
                      }`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card 2: Root Cause & Attacker PoC */}
              <div className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle size={18} className="text-amber-600" />
                  <h3 className="text-sm font-bold text-neutral-900">Root Cause &amp; Exploitation PoC</h3>
                </div>
                <div className="space-y-3 text-xs text-neutral-700 leading-relaxed">
                  <div>
                    <span className="font-semibold text-neutral-900 block mb-1">Architectural Root Cause:</span>
                    <p>{analysis.matchedTemplate?.rootCause || "Input lacks strict type and relational boundary scoping."}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-neutral-900 block mb-1">Simulated Attacker Exploitation PoC:</span>
                    <div className="bg-neutral-900 text-neutral-200 p-2.5 rounded-lg font-mono text-[11px] whitespace-pre-wrap">
                      {analysis.matchedTemplate?.attackVectorPoC || "N/A"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Compliance & Regulatory Impact */}
              <div className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Shield size={18} className="text-blue-600" />
                  <h3 className="text-sm font-bold text-neutral-900">Audit &amp; Compliance Mapping</h3>
                </div>
                <p className="text-xs text-neutral-600 mb-3">
                  Security frameworks and audit criteria impacted by this vulnerability:
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {(analysis.matchedTemplate?.complianceRelevance || ["SOC 2 CC6.1", "ISO 27001", "GDPR Article 32"]).map((comp, i) => (
                    <span key={i} className="px-2.5 py-1 bg-neutral-100 rounded text-[11px] font-semibold text-neutral-800 border border-neutral-200">
                      {comp}
                    </span>
                  ))}
                </div>
                <div className="border-t border-neutral-100 pt-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                    Business Impact
                  </span>
                  <p className="text-xs text-neutral-700 leading-relaxed">
                    {analysis.matchedTemplate?.impact || "Unauthorized data access and compliance failure."}
                  </p>
                </div>
              </div>

            </div>

            {/* Regression Unit Test Card */}
            {analysis.unitTestRecommendation && (
              <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden">
                <div className="px-6 py-4 bg-neutral-50 border-b border-neutral-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Terminal size={16} className="text-neutral-700" />
                    <h3 className="text-xs font-mono font-bold text-neutral-900 uppercase tracking-wider">
                      Automated CI/CD Regression Test Snippet
                    </h3>
                  </div>
                  <button
                    onClick={() => handleCopy(analysis.unitTestRecommendation, "test")}
                    className="text-xs font-semibold px-2.5 py-1 bg-white hover:bg-neutral-100 text-neutral-800 rounded border border-neutral-200 transition-colors flex items-center gap-1.5"
                  >
                    {copiedKey === "test" ? <Check size={12} className="text-emerald-600" /> : <Copy size={12} />}
                    <span>{copiedKey === "test" ? "Copied Test" : "Copy Test"}</span>
                  </button>
                </div>
                <div className="p-6 bg-[#0f1117] text-neutral-200 font-mono text-xs overflow-x-auto">
                  <pre className="whitespace-pre">{analysis.unitTestRecommendation}</pre>
                </div>
              </div>
            )}

            {/* Practitioner Advisory & Manual Pentest CTA Banner */}
            <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="relative z-10 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-semibold mb-3">
                  <ShieldCheck size={14} className="text-blue-300" />
                  <span>The Limits of Automated Code Checkers</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2">
                  Static Code Tools Miss Complex Business Logic Flaws
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                  While our code recommender helps you fix syntax and authorization patterns locally, attackers target multi-step workflow logic, race conditions in state machines, and cross-tenant API chaining that only certified human practitioners can uncover.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => {
                      trackPrimaryQuoteClick("code_recommender_advisory");
                      openQuoteModal();
                    }}
                    className="px-5 py-2.5 bg-blue-500 hover:bg-blue-400 text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center gap-2"
                  >
                    <span>Request Fixed-Price Penetration Test</span>
                    <ArrowRight size={14} />
                  </button>
                  <Link
                    href="/manual-vs-automated-pentest"
                    className="px-4 py-2.5 bg-white/10 hover:bg-white/15 text-white rounded-xl text-xs font-semibold transition-all border border-white/20"
                  >
                    Why Manual Testing Beats Scanners
                  </Link>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: Stack Architecture Hardening Blueprint */}
        {activeTab === "stack" && (
          <div className="space-y-8">
            
            {/* Stack Selector Pills */}
            <div className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 mb-3">
                Select Your Core Technology Stack
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {TECH_STACK_RECOMMENDATIONS.map((stk) => {
                  const isSelected = selectedStackId === stk.id;
                  return (
                    <button
                      key={stk.id}
                      onClick={() => setSelectedStackId(stk.id)}
                      className={`text-left p-4 rounded-xl border transition-all ${
                        isSelected
                          ? "bg-blue-50/50 border-blue-500 ring-2 ring-blue-500/20 shadow-xs"
                          : "bg-white border-neutral-200 hover:border-neutral-300"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-neutral-900">{stk.name}</span>
                        {isSelected && <CheckCircle size={15} className="text-blue-600" />}
                      </div>
                      <p className="text-[11px] text-neutral-500">
                        {stk.criticalRisks.length} stack-specific vulnerability vectors
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Stack Recommendations Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Critical Stack Vulnerabilities */}
              <div className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <ShieldAlert size={18} className="text-red-600" />
                  <h3 className="text-sm font-bold text-neutral-900">
                    Common High-Severity Risks in {currentStack.name}
                  </h3>
                </div>
                <div className="space-y-2.5">
                  {currentStack.criticalRisks.map((risk, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-red-50/50 border border-red-200/60 flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <p className="text-xs text-neutral-800 leading-relaxed font-medium">
                        {risk}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-neutral-100">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 mb-2">
                    Hardening Checklist
                  </h4>
                  <ul className="space-y-1.5 text-xs text-neutral-700">
                    {currentStack.hardeningChecklist.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check size={13} className="text-emerald-600 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Recommended Security Config & Headers */}
              <div className="bg-[#0f1117] rounded-2xl border border-neutral-800 p-6 shadow-sm flex flex-col">
                <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-4">
                  <div className="flex items-center gap-2">
                    <Lock size={16} className="text-blue-400" />
                    <h3 className="text-xs font-mono font-bold text-neutral-200 uppercase tracking-wider">
                      {currentStack.codeSnippetTitle}
                    </h3>
                  </div>
                  <button
                    onClick={() => handleCopy(currentStack.codeSnippet, "stack-config")}
                    className="text-xs font-semibold px-2.5 py-1 bg-white/10 hover:bg-white/20 text-neutral-200 rounded transition-colors flex items-center gap-1"
                  >
                    {copiedKey === "stack-config" ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                    <span>{copiedKey === "stack-config" ? "Copied" : "Copy"}</span>
                  </button>
                </div>
                
                <pre className="text-neutral-300 font-mono text-xs leading-relaxed overflow-x-auto p-2 flex-1">
                  {currentStack.codeSnippet}
                </pre>
              </div>

            </div>

            {/* Penetration Testing Scope for Stack */}
            <div className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Cpu size={18} className="text-indigo-600" />
                  <h3 className="text-sm font-bold text-neutral-900">
                    Recommended Penetration Test Scope for {currentStack.name}
                  </h3>
                </div>
                <button
                  onClick={() => {
                    trackPrimaryQuoteClick("stack_recommender_pentest_scope");
                    openQuoteModal();
                  }}
                  className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold transition-all flex items-center gap-1.5"
                >
                  <span>Book Audit for This Stack</span>
                  <ArrowRight size={13} />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {currentStack.pentestFocusAreas.map((focus, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200 text-xs text-neutral-800 font-medium leading-relaxed">
                    {focus}
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* FAQ Section */}
        <div className="mt-16 bg-white rounded-2xl border border-neutral-200 p-8 shadow-sm">
          <h2 className="text-xl font-bold text-neutral-950 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-neutral-600">
            <div>
              <h3 className="font-bold text-neutral-900 mb-1">
                Is my code snippet transmitted to any server or LLM API?
              </h3>
              <p className="leading-relaxed">
                No. The TrustLayerLabs Secure Code Recommender runs 100% in your local browser sandbox using client-side heuristic parsers. Your proprietary code and tokens are never uploaded or saved to remote servers.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-neutral-900 mb-1">
                Can automated code recommenders replace a penetration test?
              </h3>
              <p className="leading-relaxed">
                No. Automated tools check for known static syntax rules (e.g., parameter binding or missing algorithms). However, real-world breaches target multi-step business logic flaws, role elevation, and tenant isolation escapes that require offensive human practitioners.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-neutral-900 mb-1">
                Which programming languages are supported?
              </h3>
              <p className="leading-relaxed">
                Our templates and analysis heuristics support Node.js / TypeScript (Express, Nest, Next.js), Python (FastAPI, Flask, Django), and Go (Gin, GORM, Fiber), with cross-language AST patterns for Java and PHP.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-neutral-900 mb-1">
                How do I get a full manual audit report for my platform?
              </h3>
              <p className="leading-relaxed">
                TrustLayerLabs provides comprehensive 5-10 day manual VAPT engagements with cURL reproduction proof-of-concepts and zero false positives. You can request a fixed-price quote in 24 hours.
              </p>
            </div>
          </div>
        </div>

      </div>

      <QuoteModal />
    </div>
  );
}
