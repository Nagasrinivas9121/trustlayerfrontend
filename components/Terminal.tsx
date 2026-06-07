"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface LogLine {
  text: string;
  type: "cmd" | "info" | "warn" | "error" | "detail" | "success";
}

const lines: LogLine[] = [
  { text: "trustlayer-agent --target=api.v1.prod --mode=offensive", type: "cmd" },
  { text: "[*] Initializing manual logic review & recon...", type: "info" },
  { text: "[*] Discovered 48 GraphQL resolvers & 112 REST endpoints", type: "info" },
  { text: "[!] Injecting payload on /v1/accounts/transfers [IDOR test]", type: "warn" },
  { text: "[CRITICAL] BOLA vulnerable: account data exposure (Bypassed JWT Signature)", type: "error" },
  { text: "    > Ref: CVSS 9.8 - Broken Object Level Authorization", type: "detail" },
  { text: "    > Action: Patched in row-level security model", type: "detail" },
  { text: "[!] Probing S3 media storage for HealthTech portal", type: "warn" },
  { text: "[HIGH] Unsigned URLs returned in JSON payload", type: "error" },
  { text: "    > Mitigation: Replaced with short-lived CloudFront cookies", type: "detail" },
  { text: "[*] Running cloud configuration audit [AWS / IAM]", type: "info" },
  { text: "[SUCCESS] SOC2 control CC6.1 (Access Controls) - verified", type: "success" },
  { text: "[*] Security scan completed. Attestation Certificate issued.", type: "success" }
];

export default function Terminal() {
  const [visibleLines, setVisibleLines] = useState<LogLine[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < lines.length) {
      const delay = index === 0 ? 500 : lines[index - 1].type === "detail" ? 400 : 900;
      const timer = setTimeout(() => {
        setVisibleLines((prev) => [...prev, lines[index]]);
        setIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      // Loop scan every 10 seconds
      const resetTimer = setTimeout(() => {
        setVisibleLines([]);
        setIndex(0);
      }, 10000);
      return () => clearTimeout(resetTimer);
    }
  }, [index]);

  return (
    <div className="w-full max-w-xl mx-auto rounded-lg border border-border/80 bg-[#141720]/60 backdrop-blur-md overflow-hidden shadow-2xl scanline">
      {/* Tab Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#0D0F14]/80 border-b border-border/60">
        <div className="flex space-x-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-critical/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-warning/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-success/60" />
        </div>
        <div className="text-[10px] font-mono text-textSecondary uppercase tracking-widest">trustlayer-scanner.log</div>
      </div>

      {/* Terminal Area */}
      <div className="p-5 sm:p-7 font-mono text-[11px] sm:text-[12px] leading-relaxed min-h-[300px] bg-[#0D0F14]/40 flex flex-col justify-start">
        {visibleLines.map((line, i) => (
          <div
            key={i}
            className={`mb-2 font-mono ${
              line.type === "cmd" ? "text-white" :
              line.type === "error" ? "text-critical font-bold" :
              line.type === "warn" ? "text-warning font-semibold" :
              line.type === "success" ? "text-success font-semibold" :
              line.type === "detail" ? "text-textSecondary pl-4 text-[10px]" :
              "text-textPrimary"
            }`}
          >
            {line.type === "cmd" && <span className="text-primary mr-2">❯</span>}
            {line.text}
          </div>
        ))}
        {index < lines.length && (
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-2 h-3.5 bg-accent ml-1"
          />
        )}
      </div>
    </div>
  );
}

