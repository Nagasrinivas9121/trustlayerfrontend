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
  HelpCircle,
  ArrowRight,
  ArrowLeft
} from "lucide-react";
import QuoteModal, { openQuoteModal } from "@/components/QuoteModal";
import { trackPrimaryQuoteClick } from "@/lib/analytics";

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
  const [isHoveredPart, setIsHoveredPart] = useState<number | null>(null);
  const [securityChecks, setSecurityChecks] = useState<SecurityCheck[]>([]);

  const parts = token.trim().split(".");

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
          title: "Warning: Symmetric HMAC Signing",
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
    <div className="bg-[#FAFAFA] min-h-screen pt-32 pb-24 font-sans text-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs Pill */}
        <div className="flex items-center gap-2 mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-xs font-semibold text-neutral-500 hover:text-neutral-900 transition-colors gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span className="text-neutral-400">/</span>
          <Link 
            href="/services" 
            className="text-xs font-semibold text-neutral-500 hover:text-neutral-900 transition-colors px-3 py-1.5 rounded-full bg-white border border-neutral-200 shadow-sm"
          >
            Services
          </Link>
          <span className="text-neutral-400">/</span>
          <span className="text-xs font-semibold text-neutral-900 px-3 py-1.5 rounded-full bg-neutral-200 border border-neutral-300">
            JWT Analyzer
          </span>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/80 shadow-sm text-xs font-semibold text-neutral-800 mb-3">
              <Shield size={14} className="text-neutral-900" />
              <span>Free Developer Security Utility</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 mb-3">
              Free JWT <span className="text-neutral-900">Security Analyzer</span>
            </h1>
            <p className="text-sm sm:text-base max-w-2xl text-neutral-600 leading-relaxed">
              Inspect JWT structure, claims, algorithms, and configuration risks client-side before they become authorization weaknesses.
            </p>
          </div>

          {/* Privacy Badge */}
          <div className="flex items-center gap-3 px-4 py-3 bg-white border border-neutral-200 rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.02)] max-w-xs">
            <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
              <Lock size={15} />
            </div>
            <div className="text-xs leading-tight">
              <div className="font-bold text-neutral-950">100% Client-Side</div>
              <div className="text-neutral-500 text-[11px]">Decoded in browser. Tokens never leave your device.</div>
            </div>
          </div>
        </div>

        {/* Quick Sample Selector */}
        <div className="mb-8 flex flex-wrap items-center gap-2.5">
          <span className="text-xs font-semibold text-neutral-500 mr-1">Load Mock Token:</span>
          <button 
            onClick={() => loadSample("valid")}
            className="px-4 py-2 bg-white hover:bg-neutral-50 border border-neutral-200 rounded-full text-xs font-semibold text-neutral-800 transition-all flex items-center gap-1.5 shadow-sm"
          >
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> Valid RS256 Token
          </button>
          <button 
            onClick={() => loadSample("expired")}
            className="px-4 py-2 bg-white hover:bg-neutral-50 border border-neutral-200 rounded-full text-xs font-semibold text-neutral-800 transition-all flex items-center gap-1.5 shadow-sm"
          >
            <Clock className="w-3.5 h-3.5 text-amber-500" /> Expired Session
          </button>
          <button 
            onClick={() => loadSample("vulnerable")}
            className="px-4 py-2 bg-white hover:bg-neutral-50 border border-neutral-200 rounded-full text-xs font-semibold text-neutral-800 transition-all flex items-center gap-1.5 shadow-sm"
          >
            <AlertTriangle className="w-3.5 h-3.5 text-rose-500" /> Vulnerable (alg=none)
          </button>
          {token && (
            <button 
              onClick={() => setToken("")}
              className="ml-auto px-4 py-2 bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 rounded-full text-xs font-semibold text-neutral-600 transition-all flex items-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Clear
            </button>
          )}
        </div>

        {/* Main Grid: Input & Output */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          
          {/* Left Column: Raw Input */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 sm:p-8 bg-white border border-neutral-200/80 rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex flex-col justify-between min-h-[480px]">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-dashed border-neutral-200">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-800 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-neutral-900" /> Paste Encoded Token
                  </h2>
                  <span className="text-[11px] font-mono text-neutral-400">JWT / JWS</span>
                </div>

                <textarea
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                  placeholder="eyJhbGciOiJSUzI1NiIs..."
                  className="w-full h-[320px] p-4 bg-neutral-50 border border-neutral-200 rounded-2xl text-xs font-mono resize-none focus:outline-none focus:border-neutral-900 leading-relaxed text-neutral-900"
                />
              </div>

              {/* Token Segment Layout Pills */}
              {token.trim() && parts.length >= 2 && (
                <div className="border-t border-dashed border-neutral-200 pt-4 mt-4 space-y-2">
                  <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider">Token Segments:</div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span 
                      onMouseEnter={() => setIsHoveredPart(0)}
                      onMouseLeave={() => setIsHoveredPart(null)}
                      className={`px-3 py-1 rounded-full cursor-help transition-all ${
                        isHoveredPart === 0 ? "bg-rose-100 text-rose-800 font-bold border border-rose-300" : "bg-rose-50 text-rose-700 border border-rose-200"
                      }`}
                    >
                      Header (Metadata)
                    </span>
                    <span 
                      onMouseEnter={() => setIsHoveredPart(1)}
                      onMouseLeave={() => setIsHoveredPart(null)}
                      className={`px-3 py-1 rounded-full cursor-help transition-all ${
                        isHoveredPart === 1 ? "bg-blue-100 text-blue-800 font-bold border border-blue-300" : "bg-blue-50 text-blue-700 border border-blue-200"
                      }`}
                    >
                      Payload (Claims)
                    </span>
                    <span 
                      onMouseEnter={() => setIsHoveredPart(2)}
                      onMouseLeave={() => setIsHoveredPart(null)}
                      className={`px-3 py-1 rounded-full cursor-help transition-all ${
                        isHoveredPart === 2 ? "bg-emerald-100 text-emerald-800 font-bold border border-emerald-300" : "bg-emerald-50 text-emerald-700 border border-emerald-200"
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
          <div className="lg:col-span-7 space-y-5">
            
            {/* Decoded Header */}
            <div className={`p-6 sm:p-7 bg-white border rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.02)] transition-all duration-300 ${
              isHoveredPart === 0 ? "border-rose-400 ring-2 ring-rose-200" : "border-neutral-200/80"
            }`}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-rose-700 flex items-center gap-2">
                  <FileJson className="w-4 h-4 text-rose-600" /> Decoded Header
                </h3>
                {headerText && (
                  <button 
                    onClick={() => triggerCopy(headerText, "header")}
                    className="px-3 py-1 bg-neutral-100 hover:bg-neutral-200 rounded-full text-neutral-700 transition-all flex items-center gap-1 text-[11px] font-semibold"
                  >
                    {copied["header"] ? (
                      <>
                        <CheckCircle className="w-3 h-3 text-emerald-600" /> Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" /> Copy JSON
                      </>
                    )}
                  </button>
                )}
              </div>
              <pre className="p-4 bg-neutral-950 border border-neutral-800 rounded-2xl text-xs font-mono overflow-x-auto max-h-[140px] text-neutral-200 leading-relaxed select-all">
                {headerText || <span className="text-neutral-500 italic">Waiting for token input...</span>}
              </pre>
            </div>

            {/* Decoded Payload */}
            <div className={`p-6 sm:p-7 bg-white border rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.02)] transition-all duration-300 ${
              isHoveredPart === 1 ? "border-blue-400 ring-2 ring-blue-200" : "border-neutral-200/80"
            }`}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-blue-700 flex items-center gap-2">
                  <FileJson className="w-4 h-4 text-blue-600" /> Decoded Payload (Claims)
                </h3>
                {payloadText && (
                  <button 
                    onClick={() => triggerCopy(payloadText, "payload")}
                    className="px-3 py-1 bg-neutral-100 hover:bg-neutral-200 rounded-full text-neutral-700 transition-all flex items-center gap-1 text-[11px] font-semibold"
                  >
                    {copied["payload"] ? (
                      <>
                        <CheckCircle className="w-3 h-3 text-emerald-600" /> Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" /> Copy JSON
                      </>
                    )}
                  </button>
                )}
              </div>
              <pre className="p-4 bg-neutral-950 border border-neutral-800 rounded-2xl text-xs font-mono overflow-x-auto max-h-[260px] text-neutral-200 leading-relaxed select-all">
                {payloadText || <span className="text-neutral-500 italic">Waiting for token input...</span>}
              </pre>
            </div>

            {/* Decoded Signature */}
            <div className={`p-6 sm:p-7 bg-white border rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.02)] transition-all duration-300 ${
              isHoveredPart === 2 ? "border-emerald-400 ring-2 ring-emerald-200" : "border-neutral-200/80"
            }`}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-emerald-600" /> Signature Verification Hash
                </h3>
              </div>
              <div className="p-4 bg-neutral-950 border border-neutral-800 rounded-2xl text-[11px] font-mono break-all text-neutral-300 leading-normal max-h-[90px] overflow-y-auto">
                {signatureText ? (
                  <>
                    <span className="text-emerald-400 font-semibold">HMACSHA256(</span>
                    <span className="text-neutral-400"> base64UrlEncode(Header) + &quot;.&quot; + base64UrlEncode(Payload), secret </span>
                    <span className="text-emerald-400">)</span>
                    <div className="border-t border-neutral-800 pt-1 mt-1 text-[10px] text-neutral-500 truncate">
                      Raw: {signatureText}
                    </div>
                  </>
                ) : (
                  <span className="text-neutral-500 italic">Waiting for token input...</span>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* Security Assessment Panel */}
        {token.trim() && (
          <div className="p-8 sm:p-10 bg-white border border-neutral-200/80 rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.02)] mb-14">
            <h2 className="text-base font-bold text-neutral-950 uppercase tracking-wider mb-6 flex items-center gap-2.5">
              <Shield className="w-5 h-5 text-neutral-900" /> Automated JWT Vulnerability Audit
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {securityChecks.map((check) => {
                const statusStyles = 
                  check.status === "critical" ? "bg-rose-50 border-rose-200 text-rose-900" :
                  check.status === "warning" ? "bg-amber-50 border-amber-200 text-amber-900" :
                  check.status === "secure" ? "bg-emerald-50 border-emerald-200 text-emerald-900" :
                  "bg-neutral-50 border-neutral-200 text-neutral-900";
                
                const StatusIcon = 
                  check.status === "critical" ? AlertTriangle :
                  check.status === "warning" ? AlertTriangle :
                  check.status === "secure" ? CheckCircle :
                  Info;

                return (
                  <div key={check.id} className={`p-5 border rounded-2xl flex items-start gap-3.5 ${statusStyles}`}>
                    <StatusIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <h4 className="text-xs font-bold">{check.title}</h4>
                      <p className="text-xs leading-relaxed opacity-90">{check.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Educational Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-dashed border-neutral-200 mb-14">
          <div className="p-7 bg-white border border-neutral-200/80 rounded-3xl space-y-3 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
            <div className="w-10 h-10 bg-neutral-100 rounded-xl flex items-center justify-center text-neutral-900">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-neutral-950">JWT Authentication Flow</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              JWTs are stateless credentials. While they can be decoded client-side, the signature ensures cryptographic tamper-proofing. The backend must always verify this signature against a secure key.
            </p>
          </div>

          <div className="p-7 bg-white border border-neutral-200/80 rounded-3xl space-y-3 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
            <div className="w-10 h-10 bg-neutral-100 rounded-xl flex items-center justify-center text-neutral-900">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-neutral-950">The &quot;alg: none&quot; Exploit</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Some legacy libraries process JWTs without verifying signatures when <code className="font-mono text-neutral-900 bg-neutral-100 px-1 py-0.5 rounded">&quot;alg&quot;: &quot;none&quot;</code> is defined. Attackers exploit this to elevate privileges.
            </p>
          </div>

          <div className="p-7 bg-white border border-neutral-200/80 rounded-3xl space-y-3 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
            <div className="w-10 h-10 bg-neutral-100 rounded-xl flex items-center justify-center text-neutral-900">
              <HelpCircle className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-neutral-950">JSON Web Key Sets (JWKS)</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              In modern B2B SaaS applications, public keys are dynamically exposed on a JWKS endpoint. This permits distributed API resource servers to verify token signatures asynchronously.
            </p>
          </div>
        </div>

        {/* Comprehensive JWT Guide */}
        <div className="p-8 sm:p-10 bg-white border border-neutral-200/80 rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.02)] space-y-6 mb-14">
          <h2 className="text-xl font-bold text-neutral-950 tracking-tight">
            JWT Security Best Practices for Backend & API Engineering
          </h2>
          <p className="text-sm text-neutral-600 leading-relaxed">
            JSON Web Tokens (RFC 7519) are the standard for stateless authentication in modern microservices and single-page applications. Follow these essential defense-in-depth principles:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-5 bg-neutral-50 border border-neutral-200/70 rounded-2xl space-y-2">
              <h3 className="text-xs font-bold text-neutral-950 uppercase tracking-wider">
                1. Prevent Asymmetric Algorithm Confusion
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Never rely on the token header&apos;s <code className="font-mono text-neutral-900 bg-neutral-200/60 px-1 py-0.5 rounded">&quot;alg&quot;</code> property alone to decide verification algorithms. Always hardcode expected algorithm sets on server verifiers.
              </p>
            </div>

            <div className="p-5 bg-neutral-50 border border-neutral-200/70 rounded-2xl space-y-2">
              <h3 className="text-xs font-bold text-neutral-950 uppercase tracking-wider">
                2. Enforce Ephemeral Lifespans & Token Rotation
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Restrict access token TTL to a maximum of 10 to 15 minutes. Pair short-lived tokens with rotating refresh tokens stored exclusively in HTTP-Only, SameSite=Strict cookies.
              </p>
            </div>

            <div className="p-5 bg-neutral-50 border border-neutral-200/70 rounded-2xl space-y-2">
              <h3 className="text-xs font-bold text-neutral-950 uppercase tracking-wider">
                3. Couple Claims with Database Tenant Verification (BOLA Defense)
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                A valid JWT proves identity, but does not inherently guarantee authorization to every requested resource. Backend resolvers must always verify that the <code className="font-mono text-neutral-900 bg-neutral-200/60 px-1 py-0.5 rounded">tenant_id</code> matches in the database.
              </p>
            </div>

            <div className="p-5 bg-neutral-50 border border-neutral-200/70 rounded-2xl space-y-2">
              <h3 className="text-xs font-bold text-neutral-950 uppercase tracking-wider">
                4. Strict Signature Secret Entropy
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                For symmetric HS256/HS512 signatures, ensure the secret key contains at least 256 bits of cryptographically secure random entropy to prevent offline brute-forcing.
              </p>
            </div>
          </div>
        </div>

        {/* Static CTA Banner Driving to Quote Form */}
        <div className="p-8 sm:p-12 bg-white rounded-3xl border border-dashed border-neutral-300 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight font-sans">
              Need a Complete Manual API &amp; Token Audit?
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 max-w-xl leading-relaxed font-sans">
              Automated token inspection is only step one. Our certified practitioners manually audit token issuance, signing keys, authorization boundaries, and session revocation in 5 business days.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto justify-center">
            <Link
              href="/free-assessment"
              onClick={() => {
                trackPrimaryQuoteClick("jwt_decoder_cta_banner");
              }}
              className="w-full md:w-auto text-center py-3.5 px-8 bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-semibold rounded-full shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get a fixed-price quote in 24h</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* One-Line Text CTA Under Tool */}
        <div className="mt-8 text-center">
          <Link
            href="/free-assessment"
            className="text-xs font-semibold text-primary hover:text-blue-700 underline underline-offset-4"
          >
            Preparing for an enterprise security review? Get a fixed-price quote in 24h →
          </Link>
        </div>

      </div>
      <QuoteModal />
    </div>
  );
}
