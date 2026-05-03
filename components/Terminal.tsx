"use client";

import React from "react";
import { motion } from "framer-motion";

const lines = [
  { text: "trustlayer scan --target=api.v1.prod --mode=offensive", type: "cmd" },
  { text: "[*] Initializing manual logic review...", type: "info" },
  { text: "[*] Found 14 unauthenticated endpoints", type: "info" },
  { text: "[!] testing /api/v1/user/settings/billing", type: "warn" },
  { text: "[CRITICAL] BOLA detected on endpoint", type: "error" },
  { text: "    > session_token bypass successful", type: "detail" },
  { text: "    > unauthorized account data exposure", type: "detail" },
  { text: "[*] Generating technical report...", type: "info" },
];

export default function Terminal() {
  return (
    <div className="w-full max-w-xl mx-auto rounded-lg border border-border/60 bg-secondary/20 backdrop-blur-sm overflow-hidden shadow-2xl">
      {/* Tab Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-secondary/40 border-b border-border/50">
        <div className="flex space-x-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-border" />
          <div className="w-2.5 h-2.5 rounded-full bg-border" />
          <div className="w-2.5 h-2.5 rounded-full bg-border" />
        </div>
        <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">security-audit.log</div>
      </div>

      {/* Terminal Area */}
      <div className="p-5 sm:p-7 font-mono text-[12px] sm:text-[13px] leading-relaxed min-h-[260px]">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 + 0.5 }}
            className={`mb-2 ${
              line.type === "cmd" ? "text-slate-100" :
              line.type === "error" ? "text-red-400 font-semibold" :
              line.type === "warn" ? "text-yellow-400" :
              line.type === "detail" ? "text-slate-500 pl-4" :
              "text-slate-400"
            }`}
          >
            {line.type === "cmd" && <span className="text-primary mr-2">❯</span>}
            {line.text}
          </motion.div>
        ))}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="inline-block w-2 h-4 bg-primary/60 ml-1 translate-y-1"
        />
      </div>
    </div>
  );
}
