"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Shield, 
  Copy, 
  CheckCircle, 
  AlertTriangle, 
  Clock, 
  FileJson, 
  Lock, 
  Info,
  ChevronRight,
  RefreshCw,
  HelpCircle
} from "lucide-react";

// Robust Base64URL decoder in pure JS
const base64UrlDecode = (str: string) => {
  try {
    let base64 = str.replace(/-/g, "+").replace(/_/g, "/");
    while (base64.length % 4) {
      base64 += "=";
    }
    return decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
  } catch (e) {
    try {
      return atob(str.replace(/-/g, "+").replace(/_/g, "/"));
    } catch (err) {
      return null;
    }
  }
};

const MOCK_TOKENS = {
  valid: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImFwaS1rZXktMDIifQ.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFuZHkgRGV2ZWxvcGVyIiwiZW1haWwiOiJhbmR5QHRydXN0bGF5ZXJsYWJzLmNvLmluIiwiY2xpZW50X2lkIjoic2Fhc19hcHBfOTk4OCIsImlzcyI6Imh0dHBzOi8vYXV0aC50cnVzdGxheWVybGFicy5jby5pbiIsImF1ZCI6Imh0dHBzOi8vYXBpLnRydXN0bGF5ZXJsYWJzLmNvLmluIiwiaWF0IjoxNzE2NDAwMDAwLCJleHAiOjE4MDQ3NjQ4MDAsInJvbGVzIjpbImFwaV9hZG1pbiIsImRldmVsb3BlciJdLCJzZWN1cmVfc2Vzc2lvbiI6dHJ1ZX0.SignatureVerifiedMockValueOnlyForDisplayPurposes_AsymmetricEncryptionSigningKeyValidationStepsHere",
  expired: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5ODc2NTQzMjEwIiwibmFtZSI6IkV4cGlyZWQgVXNlciIsImlhdCI6MTUwMDAwMDAwMCwiZXhwIjoxNTEwMDAwMDAwfQ.InvalidSignatureOrExpiredSessionForVisualTestingMockOnly",
  vulnerable: "eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJzdWIiOiJhZG1pbiIsImlzX2FkbWluIjp0cnVlLCJyb2xlIjoiU3VwZXJBZG1pbiIsImV4cCI6MTgwNDc2NDgwMH0."
};

interface SecurityCheck {
  id: string;
  title: string;
  status: "critical" | "warning" | "secure" | "info";
  description: string;
}

export default function JwtDecoderPage() {
  const [token, setToken] = useState("");
  const [copied, setCopied] = useState<{[key: string]: boolean}>({});
  const [headerText, setHeaderText] = useState("");
  const [payloadText, setPayloadText] = useState("");
  const [signatureText, setSignatureText] = useState("");
  const [isHoveredPart, setIsHoveredPart] = useState<number | null>(null); // 0: header, 1: payload, 2: signature
  const [securityChecks, setSecurityChecks] = useState<SecurityCheck[]>([]);

  // Split Token parts helper for visual layout
  const parts = token.trim().split(".");
  const rawHeader = parts[0] || "";
  const rawPayload = parts[1] || "";
  const rawSignature = parts[2] || "";

  useEffect(() => {
    if (!token.trim()) {
      setHeaderText("");
      setPayloadText("");
      setSignatureText("");
      setSecurityChecks([]);
      return;
    }

    const tokenParts = token.trim().split(".");
    
    // Parse Header
    let decodedHeaderObj: any = null;
    if (tokenParts[0]) {
      const decoded = base64UrlDecode(tokenParts[0]);
      if (decoded) {
        try {
          decodedHeaderObj = JSON.parse(decoded);
          setHeaderText(JSON.stringify(decodedHeaderObj, null, 2));
        } catch (e) {
          setHeaderText("Invalid JSON: " + decoded);
        }
      } else {
        setHeaderText("Failed to decode base64 header.");
      }
    } else {
      setHeaderText("");
    }

    // Parse Payload
    let decodedPayloadObj: any = null;
    if (tokenParts[1]) {
      const decoded = base64UrlDecode(tokenParts[1]);
      if (decoded) {
        try {
          decodedPayloadObj = JSON.parse(decoded);
          setPayloadText(JSON.stringify(decodedPayloadObj, null, 2));
        } catch (e) {
          setPayloadText("Invalid JSON: " + decoded);
        }
      } else {
        setPayloadText("Failed to decode base64 payload.");
      }
    } else {
      setPayloadText("");
    }

    // Parse Signature
    if (tokenParts[2]) {
      setSignatureText(tokenParts[2]);
    } else {
      setSignatureText("");
    }

    // Security Analysis Checks
    const checks: SecurityCheck[] = [];

    if (decodedHeaderObj) {
      const alg = (decodedHeaderObj.alg || "").toLowerCase();
      if (!decodedHeaderObj.alg || alg === "none") {
        checks.push({
          id: "alg-none",
          title: "Critical: 'none' Algorithm Allowed",
          status: "critical",
          description: "The token uses the 'none' algorithm or lacks an algorithm parameter. An attacker can tamper with the payload, remove the signature, and bypass authentication completely."
        });
      } else if (alg.startsWith("hs")) {
        checks.push({
          id: "alg-symmetric",
          title: "Warning: Symmetric HMACSigning",
          status: "warning",
          description: "This token uses a symmetric key (HS256/384/512). If the key leaks from the backend, attackers can forge valid tokens. Consider using asymmetric RS256/ES256 in distributed systems."
        });
      } else if (alg.startsWith("rs") || alg.startsWith("es") || alg.startsWith("ps")) {
        checks.push({
          id: "alg-secure",
          title: "Secure: Asymmetric Signature",
          status: "secure",
          description: `Token is signed using asymmetric key algorithm (${decodedHeaderObj.alg.toUpperCase()}). Public keys can be safely distributed without compromising token signing capabilities.`
        });
      }
    } else {
      checks.push({
        id: "header-missing",
        title: "Vulnerable: Missing or Unparseable Header",
        status: "critical",
        description: "The JWT header is empty or malformed. Ensure the token structure is complete."
      });
    }

    if (decodedPayloadObj) {
      // Expiration check
      const nowSec = Math.floor(Date.now() / 1000);
      if (typeof decodedPayloadObj.exp === "number") {
        const expTime = decodedPayloadObj.exp;
        const timeLeft = expTime - nowSec;
        const expDate = new Date(expTime * 1000).toLocaleString();
        
        if (timeLeft < 0) {
          checks.push({
            id: "token-expired",
            title: "Warning: Token Expired",
            status: "warning",
            description: `The token expired on ${expDate} (expired ${Math.abs(Math.round(timeLeft / 60))} minutes ago). The backend should reject this token.`
          });
        } else {
          checks.push({
            id: "token-valid-expiry",
            title: "Info: Active Session Expiration",
            status: "secure",
            description: `Token is currently active. Expires on ${expDate} (remains valid for ${Math.round(timeLeft / 3600)} hours).`
          });
        }
      } else {
        checks.push({
          id: "token-no-expiry",
          title: "Warning: No Expiration Claim (exp)",
          status: "warning",
          description: "The token does not have an 'exp' (expiration time) claim. Un-expiring tokens can lead to perpetual sessions and authorization abuse if intercepted."
        });
      }

      // Check for standard claims
      const missingClaims = [];
      if (!decodedPayloadObj.iss) missingClaims.push("iss (Issuer)");
      if (!decodedPayloadObj.aud) missingClaims.push("aud (Audience)");
      if (!decodedPayloadObj.sub) missingClaims.push("sub (Subject)");
      
      if (missingClaims.length > 0) {
        checks.push({
          id: "missing-claims",
          title: "Info: Optional Claims Missing",
          status: "info",
          description: `Missing standard claim safeguards: ${missingClaims.join(", ")}. Setting these helps verify identity scopes and mitigate replay attacks.`
        });
      }
    }

    setSecurityChecks(checks);
  }, [token]);

  const triggerCopy = (text: string, key: string) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopied(prev => ({ ...prev, [key]: true }));
    setTimeout(() => {
      setCopied(prev => ({ ...prev, [key]: false }));
    }, 2000);
  };

  const loadSample = (type: "valid" | "expired" | "vulnerable") => {
    setToken(MOCK_TOKENS[type]);
  };

  return (
    <div className="bg-background min-h-screen pt-32 pb-24 font-sans text-textPrimary selection:bg-primary/20 selection:text-primary">
      <div className="section-container max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header Breadcrumbs */}
        <div className="mb-12">
          <div className="flex items-center space-x-2 text-xs text-textSecondary uppercase tracking-widest mb-4">
            <Link href="/" className="hover:text-textPrimary transition-colors">Home</Link>
            <ChevronRight size={12} className="text-border" />
            <Link href="/services" className="hover:text-textPrimary transition-colors">Services</Link>
            <ChevronRight size={12} className="text-border" />
            <span className="text-primary font-bold">Free Tools</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="heading-1 font-extrabold tracking-tight mb-3">
                JWT Decoder & <span className="text-primary">Security Analyzer</span>
              </h1>
              <p className="body-text text-sm md:text-base max-w-3xl text-textSecondary leading-relaxed">
                Decode Json Web Tokens (JWT) locally and run instant vulnerability audits. Detect authentication flaws, algorithm bypasses, and validation gaps.
              </p>
            </div>

            {/* Privacy Badge */}
            <div className="flex items-center gap-3 px-4 py-2.5 bg-surface border border-border/80 rounded-xl max-w-xs shadow-sm">
              <Lock className="text-success w-5 h-5 flex-shrink-0" />
              <div className="text-[11px] font-sans leading-tight">
                <div className="font-bold text-textPrimary uppercase tracking-wider">100% Client-Side</div>
                <div className="text-textSecondary">Decoded in your browser. Tokens never leave your device.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Sample Selector */}
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-textSecondary font-sans">Load Mock Token:</span>
          <button 
            onClick={() => loadSample("valid")}
            className="px-3.5 py-1.5 bg-surface hover:bg-zinc-800 border border-border rounded-lg text-xs font-medium text-textPrimary hover:border-zinc-400 transition-all flex items-center gap-1.5"
          >
            <CheckCircle className="w-3.5 h-3.5 text-success" /> Valid RS256 Token
          </button>
          <button 
            onClick={() => loadSample("expired")}
            className="px-3.5 py-1.5 bg-surface hover:bg-zinc-800 border border-border rounded-lg text-xs font-medium text-textPrimary hover:border-zinc-400 transition-all flex items-center gap-1.5"
          >
            <Clock className="w-3.5 h-3.5 text-warning" /> Expired Session
          </button>
          <button 
            onClick={() => loadSample("vulnerable")}
            className="px-3.5 py-1.5 bg-surface hover:bg-zinc-800 border border-border rounded-lg text-xs font-medium text-textPrimary hover:border-zinc-400 transition-all flex items-center gap-1.5"
          >
            <AlertTriangle className="w-3.5 h-3.5 text-critical" /> Vulnerable (alg=none)
          </button>
          {token && (
            <button 
              onClick={() => setToken("")}
              className="ml-auto px-3.5 py-1.5 bg-surface/50 hover:bg-surface border border-border rounded-lg text-xs font-medium text-textSecondary hover:text-textPrimary transition-all flex items-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Clear
            </button>
          )}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Raw Input */}
          <div className="lg:col-span-5 space-y-6 h-full">
            <div className="premium-card p-6 bg-surface border border-border rounded-2xl flex flex-col justify-between min-h-[500px] shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full pointer-events-none -z-10" />
              
              <div className="flex flex-col h-full space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-textSecondary font-sans flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" /> Paste Encoded Token
                  </h2>
                </div>

                <div className="flex-grow relative">
                  <textarea
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                    placeholder="eyJhbGciOiJSUzI1NiIs..."
                    className="w-full h-[400px] p-4 bg-background border border-border rounded-xl text-xs font-mono resize-none focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 leading-relaxed text-textPrimary tracking-wide"
                  />
                </div>
              </div>

              {/* Explaining color segmentation */}
              {token.trim() && parts.length >= 2 && (
                <div className="border-t border-border pt-4 mt-4 space-y-2.5">
                  <div className="text-[10px] font-bold text-textSecondary uppercase tracking-widest">Token Segment Layout:</div>
                  <div className="flex flex-wrap gap-3 font-mono text-xs">
                    <span 
                      onMouseEnter={() => setIsHoveredPart(0)}
                      onMouseLeave={() => setIsHoveredPart(null)}
                      className={`px-2 py-0.5 rounded cursor-help transition-colors ${
                        isHoveredPart === 0 ? "bg-critical/20 text-critical font-bold border border-critical/30" : "bg-critical/10 text-critical"
                      }`}
                    >
                      Header (Metadata)
                    </span>
                    <span 
                      onMouseEnter={() => setIsHoveredPart(1)}
                      onMouseLeave={() => setIsHoveredPart(null)}
                      className={`px-2 py-0.5 rounded cursor-help transition-colors ${
                        isHoveredPart === 1 ? "bg-primary/20 text-accent font-bold border border-primary/30" : "bg-primary/10 text-accent"
                      }`}
                    >
                      Payload (Claims)
                    </span>
                    <span 
                      onMouseEnter={() => setIsHoveredPart(2)}
                      onMouseLeave={() => setIsHoveredPart(null)}
                      className={`px-2 py-0.5 rounded cursor-help transition-colors ${
                        isHoveredPart === 2 ? "bg-success/20 text-success font-bold border border-success/30" : "bg-success/10 text-success"
                      }`}
                    >
                      Signature
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Decoded Output */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Decoded Header */}
            <div className={`premium-card p-6 bg-surface border rounded-2xl shadow-sm transition-all duration-300 ${
              isHoveredPart === 0 ? "border-critical ring-1 ring-critical/30 shadow-critical/5 shadow-md" : "border-border"
            }`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-critical font-sans flex items-center gap-2">
                  <FileJson className="w-4 h-4 text-critical" /> Decoded Header
                </h3>
                {headerText && (
                  <button 
                    onClick={() => triggerCopy(headerText, "header")}
                    className="p-1.5 hover:bg-zinc-800 border border-border hover:border-zinc-400 rounded-lg text-textSecondary hover:text-textPrimary transition-all flex items-center gap-1 text-[11px]"
                  >
                    {copied["header"] ? (
                      <>
                        <CheckCircle className="w-3.5 h-3.5 text-success" /> Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" /> Copy JSON
                      </>
                    )}
                  </button>
                )}
              </div>
              <pre className="p-4 bg-background border border-border/80 rounded-xl text-xs font-mono overflow-x-auto max-h-[160px] text-textPrimary leading-relaxed select-all">
                {headerText || <span className="text-textSecondary italic">Waiting for token...</span>}
              </pre>
            </div>

            {/* Decoded Payload */}
            <div className={`premium-card p-6 bg-surface border rounded-2xl shadow-sm transition-all duration-300 ${
              isHoveredPart === 1 ? "border-primary ring-1 ring-primary/30 shadow-primary/5 shadow-md" : "border-border"
            }`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-accent font-sans flex items-center gap-2">
                  <FileJson className="w-4 h-4 text-accent" /> Decoded Payload (Claims)
                </h3>
                {payloadText && (
                  <button 
                    onClick={() => triggerCopy(payloadText, "payload")}
                    className="p-1.5 hover:bg-zinc-800 border border-border hover:border-zinc-400 rounded-lg text-textSecondary hover:text-textPrimary transition-all flex items-center gap-1 text-[11px]"
                  >
                    {copied["payload"] ? (
                      <>
                        <CheckCircle className="w-3.5 h-3.5 text-success" /> Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" /> Copy JSON
                      </>
                    )}
                  </button>
                )}
              </div>
              <pre className="p-4 bg-background border border-border/80 rounded-xl text-xs font-mono overflow-x-auto max-h-[300px] text-textPrimary leading-relaxed select-all">
                {payloadText || <span className="text-textSecondary italic">Waiting for token...</span>}
              </pre>
            </div>

            {/* Decoded Signature */}
            <div className={`premium-card p-6 bg-surface border rounded-2xl shadow-sm transition-all duration-300 ${
              isHoveredPart === 2 ? "border-success ring-1 ring-success/30 shadow-success/5 shadow-md" : "border-border"
            }`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-success font-sans flex items-center gap-2">
                  <Lock className="w-4 h-4 text-success" /> Signature Hash Code
                </h3>
              </div>
              <div className="p-4 bg-background border border-border/80 rounded-xl text-[10px] font-mono break-all text-textSecondary leading-normal max-h-[100px] overflow-y-auto">
                {signatureText ? (
                  <>
                    <span className="text-success font-semibold">HMACSHA256(</span>
                    <br />
                    <span className="text-textSecondary">
                      base64UrlEncode(Header) + "." + base64UrlEncode(Payload),
                      <br />
                      secret_key_used_on_backend
                    </span>
                    <br />
                    <span className="text-success">)</span>
                    <div className="border-t border-border/50 pt-2 mt-2 break-all text-zinc-500 font-sans text-[9px] uppercase tracking-wider font-bold">
                      Signature String: <span className="font-mono text-zinc-400 break-all select-all">{signatureText}</span>
                    </div>
                  </>
                ) : (
                  <span className="text-textSecondary italic">Waiting for token...</span>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* Security Assessment Panel */}
        {token.trim() && (
          <div className="premium-card p-8 bg-surface border border-border rounded-2xl shadow-sm mb-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none -z-10" />
            
            <h2 className="text-base font-bold text-textPrimary uppercase tracking-wider font-sans mb-6 flex items-center gap-2.5">
              <Shield className="w-5 h-5 text-primary" /> Automated JWT Vulnerability Audit
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {securityChecks.map((check) => {
                const statusColor = 
                  check.status === "critical" ? "text-critical bg-critical/5 border-critical/20" :
                  check.status === "warning" ? "text-warning bg-warning/5 border-warning/20" :
                  check.status === "secure" ? "text-success bg-success/5 border-success/20" :
                  "text-primary bg-primary/5 border-primary/20";
                
                const StatusIcon = 
                  check.status === "critical" ? AlertTriangle :
                  check.status === "warning" ? AlertTriangle :
                  check.status === "secure" ? CheckCircle :
                  Info;

                return (
                  <div key={check.id} className={`p-5 border rounded-xl flex items-start gap-4 ${statusColor}`}>
                    <StatusIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <div className="space-y-1.5 font-sans">
                      <h4 className="text-xs font-bold text-textPrimary">{check.title}</h4>
                      <p className="text-xs text-textSecondary leading-relaxed">{check.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Educational Content for Topical Authority */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-border">
          <div className="space-y-3 font-sans">
            <div className="p-3 bg-surface border border-border rounded-xl w-fit">
              <Lock className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-sm font-bold text-textPrimary">JWT Authentication Flow</h3>
            <p className="text-xs text-textSecondary leading-relaxed">
              JWTs are stateless credentials. While they can be decoded client-side, the signature ensures cryptographic tamper-proofing. The backend must always verify this signature against a secure key.
            </p>
          </div>

          <div className="space-y-3 font-sans">
            <div className="p-3 bg-surface border border-border rounded-xl w-fit">
              <AlertTriangle className="w-5 h-5 text-warning" />
            </div>
            <h3 className="text-sm font-bold text-textPrimary">The "alg: none" Exploit</h3>
            <p className="text-xs text-textSecondary leading-relaxed">
              Some legacy or misconfigured libraries process JWTs without verifying signatures when `"alg": "none"` is defined. Attackers exploit this to elevate privileges to administrative scopes.
            </p>
          </div>

          <div className="space-y-3 font-sans">
            <div className="p-3 bg-surface border border-border rounded-xl w-fit">
              <HelpCircle className="w-5 h-5 text-success" />
            </div>
            <h3 className="text-sm font-bold text-textPrimary">JSON Web Key Sets (JWKS)</h3>
            <p className="text-xs text-textSecondary leading-relaxed">
              In modern B2B SaaS applications, public keys are dynamically exposed on a JWKS endpoint (e.g., `/.well-known/jwks.json`). This permits distributed API resource servers to verify token signatures asynchronously.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
