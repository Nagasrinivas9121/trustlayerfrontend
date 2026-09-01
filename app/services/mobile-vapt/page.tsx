import type { Metadata } from "next";
import Link from "next/link";
import {
  Smartphone,
  ShieldCheck,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Lock,
  FileText,
  Layers,
  Database,
  KeyRound,
  Server,
  Code,
  HelpCircle,
  Clock,
  ChevronRight,
  Info,
  ShieldAlert,
  Terminal,
  Cpu,
  RefreshCw,
  ExternalLink,
  CheckCircle,
  FileCheck,
  CreditCard,
  Eye,
  Fingerprint
} from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Mobile Application VAPT Services | Android & iOS Pentesting | TrustLayerLabs",
  description: "Mobile application VAPT services for Android and iOS apps, APIs, authentication, data storage and business logic. Manual security testing with actionable remediation guidance and retesting.",
  keywords: [
    "mobile application vapt",
    "mobile application VAPT services",
    "mobile app penetration testing",
    "mobile application penetration testing",
    "mobile application security testing",
    "Android application penetration testing",
    "Android VAPT",
    "iOS application penetration testing",
    "iOS security testing",
    "mobile API security testing",
    "mobile app security assessment"
  ],
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/services/mobile-vapt",
  },
  openGraph: {
    title: "Mobile Application VAPT Services | Android & iOS Pentesting | TrustLayerLabs",
    description: "Mobile application VAPT services for Android and iOS apps, APIs, authentication, data storage and business logic. Manual security testing with actionable remediation guidance and retesting.",
    url: "https://www.trustlayerlabs.co.in/services/mobile-vapt",
    siteName: "TrustLayerLabs",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Application VAPT Services | Android & iOS Pentesting | TrustLayerLabs",
    description: "Mobile application VAPT services for Android and iOS apps, APIs, authentication, data storage and business logic. Manual security testing with actionable remediation guidance and retesting.",
  },
};

const whoThisIsFor = [
  {
    title: "FinTech Mobile Apps",
    desc: "Mobile banking, UPI payments, wallet applications, and lending products handling customer funds and sensitive financial records."
  },
  {
    title: "SaaS Mobile Applications",
    desc: "B2B companion apps, multi-tenant portals, and mobile workflow tools with role-based access controls and enterprise integrations."
  },
  {
    title: "AI-Enabled Mobile Apps",
    desc: "Applications utilizing mobile AI models, prompt processing gateways, sensitive user telemetry, and cloud inference APIs."
  },
  {
    title: "Consumer & E-Commerce Apps",
    desc: "High-volume consumer apps managing user identities, in-app purchases, payment gateways, and personal communications."
  },
  {
    title: "B2B & Enterprise Tools",
    desc: "Internal workforce applications, logistics trackers, and field operations tools connecting directly to enterprise databases."
  },
  {
    title: "Apps Preparing for Review",
    desc: "Engineering teams readying iOS and Android builds for Google Play, Apple App Store, or institutional customer security evaluations."
  }
];

const generalTestingAreas = [
  {
    title: "Application Architecture & Config",
    desc: "Reviewing build configurations, compiler flags, debug flags, exported platform handlers, and client-side attack surfaces.",
    icon: Layers
  },
  {
    title: "Authentication & Session Lifecycle",
    desc: "Testing login flows, OTP validation, biometric authentication handoffs, token expiry, and refresh token rotation.",
    icon: KeyRound
  },
  {
    title: "Authorization & Privilege Boundaries",
    desc: "Verifying user-level isolation, vertical role separation, and administrative function protection across app and backend.",
    icon: ShieldCheck
  },
  {
    title: "Sensitive Data & Local Storage",
    desc: "Auditing SharedPreferences, SQLite databases, iOS Keychain, local caches, clipboard data, and application file systems.",
    icon: Database
  },
  {
    title: "Mobile Backend APIs & Webhooks",
    desc: "Manual testing of REST, GraphQL, and microservice APIs for BOLA/IDOR, parameter tampering, and broken object authorization.",
    icon: Server
  },
  {
    title: "Business Logic & Workflows",
    desc: "Evaluating multi-step checkouts, state machine manipulation, price parameter tampering, coupon stacking, and race conditions.",
    icon: Lock
  },
  {
    title: "Transport Security & Pinning",
    desc: "Inspecting TLS configurations, cleartext traffic policies, custom CA handling, and SSL/TLS certificate pinning resilience.",
    icon: ShieldAlert
  },
  {
    title: "Cryptography & Secret Storage",
    desc: "Evaluating local key generation, AES/RSA implementations, hardcoded secrets, API tokens, and private key security.",
    icon: Fingerprint
  },
  {
    title: "Deep Links & WebViews",
    desc: "Testing custom URI schemes, Universal Links, App Links, WebView JavaScript interfaces, and cross-context injection.",
    icon: Code
  },
  {
    title: "Platform Permissions & IPC",
    desc: "Analyzing dangerous permissions, inter-process communication (IPC), intent broadcasts, and component accessibility.",
    icon: Cpu
  },
  {
    title: "Third-Party SDK & Dependency Risk",
    desc: "Reviewing embedded analytics, ad networks, telemetry trackers, and third-party libraries for privacy and security exposure.",
    icon: Eye
  },
  {
    title: "Reverse Engineering Assumptions",
    desc: "Analyzing code obfuscation, symbol stripping, and evaluating how security controls behave when client protections are bypassed.",
    icon: Terminal
  }
];

const androidTestingPoints = [
  {
    title: "APK Decompilation & Static Analysis",
    desc: "Decompiling APK packages with Jadx and APKTool to review manifest permissions, hardcoded API secrets, debuggable flags, and exported endpoints."
  },
  {
    title: "Exported Component Security",
    desc: "Auditing Activities, Services, Broadcast Receivers, and Content Providers for unauthorized invocation, data leakage, and intent manipulation."
  },
  {
    title: "Intent Handling & Deep Link Injection",
    desc: "Fuzzing explicit and implicit intent filters, App Links, and custom URL schemes to identify unauthorized state changes and sensitive data exposure."
  },
  {
    title: "WebView Hardening & Bridge Security",
    desc: "Reviewing WebView settings for addJavascriptInterface vulnerabilities, cross-origin file URL access, and mixed content exposure."
  },
  {
    title: "Insecure Local Storage & Databases",
    desc: "Inspecting SharedPreferences, SQLite databases, Room ORM files, and internal app storage for unencrypted tokens, credentials, and PII."
  },
  {
    title: "Logging, Cache & Backup Policies",
    desc: "Evaluating Logcat outputs for sensitive runtime data, inspecting screenshot caching, clipboard access, and verifying android:allowBackup flags."
  },
  {
    title: "Network Security Configuration & Pinning",
    desc: "Reviewing network_security_config.xml, testing cleartext traffic restrictions, and assessing SSL certificate pinning defenses."
  },
  {
    title: "Root & Runtime Security Assumptions",
    desc: "Testing how client authentication, cryptographic storage, and transaction verification behave in root-accessible or instrumented environments."
  }
];

const iosTestingPoints = [
  {
    title: "IPA Structure & Binary Analysis",
    desc: "Inspecting the iOS application binary, class structures, embedded configuration files, third-party frameworks, and compiled metadata."
  },
  {
    title: "Info.plist Configuration Review",
    desc: "Auditing custom URL schemes, App Transport Security (ATS) exception domains, background modes, and required device capability permissions."
  },
  {
    title: "Universal Links & Custom URL Schemes",
    desc: "Testing custom URI scheme handlers and Universal Links for input validation flaws, authorization bypasses, and account link hijacking."
  },
  {
    title: "iOS Keychain & Secure Enclave Access",
    desc: "Evaluating Keychain access groups, kSecAttrAccessible accessibility flags, biometric authentication handoffs, and credential isolation."
  },
  {
    title: "Local Storage & Data Protection",
    desc: "Auditing CoreData databases, Realm storage, plist files, and cache directories against iOS Data Protection classes (NSFileProtectionComplete)."
  },
  {
    title: "WKWebView Security Posture",
    desc: "Evaluating WKWebView configuration, JavaScript message handlers, local file loading permissions, and cross-site scripting vectors."
  },
  {
    title: "App Transport Security & TLS Validation",
    desc: "Verifying that ATS enforces TLS 1.3/1.2 requirements without insecure domain exceptions, and evaluating certificate validation routines."
  },
  {
    title: "Jailbreak & Runtime Defense Assumptions",
    desc: "Evaluating whether security-critical decisions rely solely on client-side jailbreak checks or are validated independently by the backend API."
  }
];

const apiSecurityVectors = [
  {
    code: "BOLA / IDOR",
    title: "Broken Object Level Authorization",
    desc: "Verifying whether mobile API requests enforce strict server-side resource ownership so User A cannot access User B's profile, data, or documents by modifying IDs."
  },
  {
    code: "BFLA",
    title: "Broken Function Level Authorization",
    desc: "Testing if regular mobile user tokens can invoke administrative, partner, or back-office API endpoints not exposed in the mobile UI."
  },
  {
    code: "Broken Auth",
    title: "Authentication & Token Flaws",
    desc: "Evaluating JWT signature validation, weak signing secrets, token expiration lifecycles, and refresh token exchange vulnerabilities on mobile endpoints."
  },
  {
    code: "Mass Assign",
    title: "Object Property & Mass Assignment",
    desc: "Testing if injecting additional JSON parameters in mobile update payloads can alter sensitive server properties like user roles, limits, or verification flags."
  },
  {
    code: "Excessive Data",
    title: "Excessive Data Exposure",
    desc: "Ensuring backend APIs do not return full database records, PII, or internal tokens to the mobile app under the false assumption that the UI will hide them."
  },
  {
    code: "Rate Limits",
    title: "Rate Limiting & Abuse Controls",
    desc: "Testing brute-force controls, OTP generation limits, coupon redemption concurrency, and endpoint consumption on high-risk mobile APIs."
  }
];

const methodologySteps = [
  { step: "01", title: "Scope & Rules of Engagement", desc: "Define target APK/IPA builds, staging backend APIs, testing accounts, test payment credentials, and execute a mutual NDA." },
  { step: "02", title: "Application Understanding", desc: "Map mobile workflows, authentication lifecycles, backend API endpoints, third-party integrations, and sensitive data paths." },
  { step: "03", title: "Static & Configuration Review", desc: "Inspect decompiled package assets, platform configurations, manifest files, exported components, and embedded secrets." },
  { step: "04", title: "Dynamic Security Testing", desc: "Intercept network traffic, analyze runtime memory, evaluate SSL pinning resilience, and assess local database security." },
  { step: "05", title: "Mobile API Penetration Testing", desc: "Perform deep manual testing of backend APIs for BOLA/IDOR, authentication flaws, mass assignment, and data leakage." },
  { step: "06", title: "Manual Business Logic Testing", desc: "Evaluate workflow integrity, multi-step transaction authorization, discount abuse, and state machine transitions." },
  { step: "07", title: "Validation & Reporting", desc: "Manually verify findings to eliminate false positives, score vulnerabilities with CVSS v3.1, and provide reproduction steps." },
  { step: "08", title: "Remediation Guidance & Retesting", desc: "Review findings with your engineering team, verify applied patches in your staging environment, and issue a Retest Verification Letter." }
];

const deliverables = [
  {
    title: "Mobile Application VAPT Report",
    desc: "Comprehensive technical assessment report detailing all identified vulnerabilities across Android, iOS, and mobile backend APIs."
  },
  {
    title: "Executive Security Summary",
    desc: "A clear, risk-oriented briefing designed for CTOs, founders, board members, and enterprise customer security reviews."
  },
  {
    title: "Technical Findings & CVSS v3.1 Scores",
    desc: "Standardized vulnerability classifications with industry-standard CVSS v3.1 scoring, affected endpoints, and severity ratings."
  },
  {
    title: "Evidence & Step-by-Step PoCs",
    desc: "Clear reproduction context, HTTP requests, curl commands, and payload samples to help developers reproduce each issue instantly."
  },
  {
    title: "Actionable Remediation Guidance",
    desc: "Practical code snippets, architectural recommendations, and framework configuration guidance for Android, iOS, and backend teams."
  },
  {
    title: "Retest Results & Verification Letter",
    desc: "Formal confirmation letter and updated report verifying that identified security flaws have been effectively remediated."
  }
];

const faqs = [
  {
    q: "What is Mobile Application VAPT?",
    a: "Mobile Application VAPT (Vulnerability Assessment and Penetration Testing) is a comprehensive security testing methodology for Android and iOS applications and their supporting backend APIs. It combines static analysis (SAST), dynamic runtime testing (DAST), and manual penetration testing to identify vulnerabilities in local data storage, authentication, transport security, business logic, and API endpoints."
  },
  {
    q: "Do you test both Android and iOS applications?",
    a: "Yes. We perform security testing for both Android (APK / AAB) and iOS (IPA / TestFlight) applications. We analyze platform-specific architectures including AndroidManifest configurations, exported components, iOS Info.plist properties, Keychain accessibility, and platform-specific storage mechanisms."
  },
  {
    q: "Does Mobile VAPT include backend API testing?",
    a: "Yes. Mobile applications rely heavily on backend APIs for business logic, data persistence, and transaction processing. Our mobile VAPT assessments evaluate both the client-side mobile application and the corresponding REST, GraphQL, or microservice APIs for authorization flaws (BOLA/IDOR), authentication bypasses, and data exposure."
  },
  {
    q: "What vulnerabilities do you test for in mobile applications?",
    a: "We test for a broad range of mobile security weaknesses, including broken object level authorization (BOLA/IDOR), insecure local data storage (unencrypted SQLite, SharedPreferences, plists), hardcoded secrets, weak session handling, SSL pinning bypass vulnerabilities, exported component exploitation, deep link injection, WebView vulnerabilities, and business logic flaws."
  },
  {
    q: "Do you follow OWASP MASVS and MASTG frameworks?",
    a: "Yes. Our testing methodology aligns with the OWASP Mobile Application Security Verification Standard (MASVS) and the Mobile Application Security Testing Guide (MASTG). We use these industry standards as our testing baseline and reference framework."
  },
  {
    q: "What do you need to start a mobile application security assessment?",
    a: "To begin an assessment, we typically need the test application build (APK/AAB for Android or IPA/TestFlight access for iOS), staging backend API documentation (Swagger/Postman if available), test credentials representing different user roles, and mutual execution of an NDA."
  },
  {
    q: "How long does a mobile VAPT assessment take?",
    a: "The duration of a mobile security assessment depends on application complexity, the number of target platforms (Android, iOS, or both), the count of backend API endpoints, and user role complexity. A standard assessment typically takes 5 to 8 business days, with preliminary high-severity findings communicated earlier if critical issues are discovered."
  },
  {
    q: "What deliverables do we receive upon completion?",
    a: "You receive an Executive Summary for leadership and stakeholders, a detailed Technical Penetration Testing Report with CVSS v3.1 ratings, step-by-step reproduction steps with evidence, actionable remediation guidance with code examples, and a formal Retest Verification Letter once patches are verified."
  },
  {
    q: "Is retesting available after vulnerabilities are fixed?",
    a: "Yes. Retesting is included in every TrustLayerLabs engagement. Once your engineering team deploys fixes to your staging environment, our security practitioners re-evaluate the remediated vulnerabilities and issue an updated final report and Retest Verification Letter."
  },
  {
    q: "Can you test FinTech mobile applications?",
    a: "Yes. We regularly assess financial technology mobile applications, focusing on payment gateway integrations, transaction authorization, beneficiary addition workflows, OTP/MFA mechanisms, and sensitive financial data protection."
  }
];

export default function MobileVaptPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.trustlayerlabs.co.in/services/mobile-vapt#service",
        "name": "Mobile Application VAPT Services",
        "serviceType": "Mobile Application Penetration Testing & API Security Testing",
        "provider": {
          "@type": "Organization",
          "@id": "https://www.trustlayerlabs.co.in/#organization",
          "name": "TrustLayerLabs",
          "url": "https://www.trustlayerlabs.co.in",
          "telephone": "+91-8822402811",
          "email": "security@trustlayerlabs.co.in"
        },
        "description": "Manual mobile application VAPT services for Android and iOS apps, APIs, authentication, data storage and business logic with actionable remediation guidance and retesting.",
        "areaServed": ["India", "Global"],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Mobile Application Security Testing Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Android Application Penetration Testing" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "iOS Application Penetration Testing" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile API Security Testing" } }
          ]
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.trustlayerlabs.co.in/services/mobile-vapt#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trustlayerlabs.co.in" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.trustlayerlabs.co.in/services" },
          { "@type": "ListItem", "position": 3, "name": "Mobile Application VAPT", "item": "https://www.trustlayerlabs.co.in/services/mobile-vapt" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.trustlayerlabs.co.in/services/mobile-vapt#faq",
        "mainEntity": faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
  };

  return (
    <div className="bg-background min-h-screen pt-32 pb-24 font-sans text-textPrimary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="section-container max-w-6xl mx-auto">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6">
          <Link href="/" className="text-xs uppercase font-mono text-textSecondary hover:text-textPrimary transition-colors">Home</Link>
          <span className="text-xs text-textSecondary">/</span>
          <Link href="/services" className="text-xs uppercase font-mono text-textSecondary hover:text-textPrimary transition-colors">Services</Link>
          <span className="text-xs text-textSecondary">/</span>
          <span className="text-xs uppercase font-mono text-primary font-bold">Mobile VAPT</span>
        </div>

        {/* Hero Section — Above-The-Fold */}
        <div className="max-w-4xl space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider">
            <Smartphone size={13} className="text-primary" />
            <span>Mobile Security Assessment</span>
          </div>

          {/* Primary H1 */}
          <h1 className="heading-1 font-sans text-textPrimary tracking-tight">
            Mobile Application VAPT & <span className="text-primary">Penetration Testing Services</span>
          </h1>

          {/* Positioning Statement */}
          <p className="text-base sm:text-lg text-textSecondary leading-relaxed font-sans max-w-3xl">
            Manual security testing for Android and iOS applications, mobile APIs, authentication flows, sensitive-data handling and business logic.
          </p>

          {/* Supporting Outcome Copy */}
          <p className="text-sm sm:text-base text-textSecondary/90 leading-relaxed font-sans max-w-3xl">
            Identify exploitable mobile application and API security weaknesses before they create production, customer or security-review risks.
          </p>

          {/* Value Props Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-3.5 bg-surface border border-border/80 rounded-xl">
              <span className="text-[10px] font-mono uppercase tracking-wider text-primary font-bold block mb-1">WHAT</span>
              <p className="text-xs text-textSecondary leading-normal">Manual Android & iOS mobile VAPT, API testing, and business logic assessment.</p>
            </div>
            <div className="p-3.5 bg-surface border border-border/80 rounded-xl">
              <span className="text-[10px] font-mono uppercase tracking-wider text-primary font-bold block mb-1">WHO</span>
              <p className="text-xs text-textSecondary leading-normal">FinTech, SaaS, AI startups, consumer, and B2B mobile engineering teams.</p>
            </div>
            <div className="p-3.5 bg-surface border border-border/80 rounded-xl">
              <span className="text-[10px] font-mono uppercase tracking-wider text-primary font-bold block mb-1">WHY</span>
              <p className="text-xs text-textSecondary leading-normal">Uncover critical client and backend vulnerabilities before app store release or security reviews.</p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link 
              href="https://calendar.app.google/jnamj3gawxVunPJm9"
              target="_blank"
              className="px-8 py-3.5 bg-primary hover:bg-primary-hover text-white text-xs uppercase font-sans font-bold tracking-wider rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              <Calendar size={15} />
              <span>Book a 20-Min Security Review</span>
            </Link>

            <Link 
              href="/sample-report"
              className="px-8 py-3.5 bg-surface border border-border hover:border-zinc-400 text-xs uppercase font-sans font-semibold tracking-wider rounded-xl text-textPrimary hover:text-primary transition-all flex items-center gap-2"
            >
              <FileText size={15} />
              <span>View Sample VAPT Report</span>
            </Link>
          </div>
        </div>

        {/* Who This Service Is For */}
        <div className="py-16 border-t border-border" id="who-this-is-for">
          <div className="mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-4">
              <span>Target Platforms & Teams</span>
            </div>
            <h2 className="heading-2 font-sans mb-3 text-textPrimary">
              Who This <span className="text-primary">Service Is For</span>
            </h2>
            <p className="body-text text-textSecondary font-sans max-w-3xl">
              Our mobile security assessments are structured for development teams, founders, and security leaders building critical mobile products across platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whoThisIsFor.map((item, idx) => (
              <div 
                key={idx}
                className="p-6 bg-surface border border-border rounded-2xl space-y-2.5 shadow-sm hover:border-zinc-400 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Smartphone size={16} className="text-primary flex-shrink-0" />
                  <h3 className="text-sm font-bold text-textPrimary font-sans">{item.title}</h3>
                </div>
                <p className="text-xs text-textSecondary leading-relaxed font-sans pl-6">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* What We Test in a Mobile Application VAPT */}
        <div className="py-16 border-t border-border" id="testing-coverage">
          <div className="mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-4">
              <span>Assessment Scope</span>
            </div>
            <h2 className="heading-2 font-sans mb-3 text-textPrimary">
              What We Test in a <span className="text-primary">Mobile Application VAPT</span>
            </h2>
            <p className="body-text text-textSecondary font-sans max-w-3xl">
              A comprehensive mobile assessment evaluates both client-side binary integrity and backend communication channels. We examine platform security, data storage, cryptographic controls, and API authorization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {generalTestingAreas.map((area, idx) => (
              <div 
                key={idx}
                className="p-6 bg-surface border border-border rounded-2xl flex flex-col justify-between hover:border-zinc-400 transition-all duration-300 shadow-sm"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-5">
                    <area.icon size={18} />
                  </div>
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

          <div className="mt-8 p-4 bg-surface border border-border/60 rounded-xl text-xs text-textSecondary font-sans flex items-center gap-2.5">
            <Info size={16} className="text-primary flex-shrink-0" />
            <span>Note: Vector depth and test coverage are customized during technical scoping based on your application architecture and release requirements.</span>
          </div>
        </div>

        {/* Android Application Security Testing Section */}
        <div className="py-16 border-t border-border" id="android-security">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-4">
              <span>Android Ecosystem</span>
            </div>
            <h2 className="heading-2 font-sans mb-3 text-textPrimary">
              Android Application <span className="text-primary">Security Testing</span>
            </h2>
            <p className="body-text text-textSecondary font-sans">
              Android applications present distinct platform-level attack surfaces due to package structures, inter-process communication mechanisms, and flexible storage configurations. Our assessment covers defensive analysis across the full Android lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {androidTestingPoints.map((point, idx) => (
              <div key={idx} className="p-6 bg-surface border border-border rounded-2xl space-y-2.5 shadow-sm">
                <div className="flex items-center gap-2">
                  <Code size={15} className="text-primary flex-shrink-0" />
                  <h3 className="text-sm font-bold text-textPrimary font-sans">{point.title}</h3>
                </div>
                <p className="text-xs text-textSecondary leading-relaxed font-sans pl-6">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* iOS Application Security Testing Section */}
        <div className="py-16 border-t border-border" id="ios-security">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-4">
              <span>Apple iOS Ecosystem</span>
            </div>
            <h2 className="heading-2 font-sans mb-3 text-textPrimary">
              iOS Application <span className="text-primary">Security Testing</span>
            </h2>
            <p className="body-text text-textSecondary font-sans">
              iOS security relies heavily on sandbox controls, Keychain APIs, and App Transport Security. We evaluate IPA packages, runtime behavior, and local storage mechanisms to detect vulnerabilities in iOS implementations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {iosTestingPoints.map((point, idx) => (
              <div key={idx} className="p-6 bg-surface border border-border rounded-2xl space-y-2.5 shadow-sm">
                <div className="flex items-center gap-2">
                  <Lock size={15} className="text-primary flex-shrink-0" />
                  <h3 className="text-sm font-bold text-textPrimary font-sans">{point.title}</h3>
                </div>
                <p className="text-xs text-textSecondary leading-relaxed font-sans pl-6">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile API Security Testing — HIGH PRIORITY SECTION */}
        <div className="py-16 border-t border-border" id="mobile-api-security">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-4">
                <span>Critical Focus Area</span>
              </div>
              <h2 className="heading-2 font-sans mb-3 text-textPrimary">
                Mobile API <span className="text-primary">Security Testing</span>
              </h2>
              <p className="body-text text-textSecondary font-sans">
                A secure-looking mobile interface often masks vulnerable backend APIs. Even when the mobile UI restricts unauthorized actions, the backend API must independently verify authorization, validate object ownership, and prevent parameter tampering.
              </p>
            </div>
            <div>
              <Link 
                href="/services/api-security"
                className="inline-flex items-center gap-1.5 text-xs uppercase font-sans font-bold tracking-wider text-primary hover:underline"
              >
                <span>Explore Dedicated API Security Testing →</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {apiSecurityVectors.map((item, idx) => (
              <div key={idx} className="p-6 bg-surface border border-border rounded-2xl space-y-3 shadow-sm">
                <span className="text-[10px] font-mono font-bold text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded uppercase">
                  {item.code}
                </span>
                <h3 className="text-sm font-bold text-textPrimary font-sans">{item.title}</h3>
                <p className="text-xs text-textSecondary leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 bg-surface border border-border rounded-2xl text-xs text-textSecondary font-sans leading-relaxed flex items-start gap-3.5 shadow-sm">
            <ShieldAlert size={18} className="text-primary flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-textPrimary font-semibold block mb-0.5">Why Backend API Security Matters in Mobile VAPT:</strong>
              Mobile clients can be intercepted, decompiled, or instrumented via tools like Frida and Burp Suite. All access control, input validation, and business logic enforcement must reside securely on the server side rather than relying on mobile UI constraints.
            </div>
          </div>
        </div>

        {/* Authentication & Session Security Section */}
        <div className="py-16 border-t border-border" id="auth-session-security">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-4">
              <span>Identity & Session Management</span>
            </div>
            <h2 className="heading-2 font-sans mb-3 text-textPrimary">
              Authentication & Session <span className="text-primary">Security Testing</span>
            </h2>
            <p className="body-text text-textSecondary font-sans">
              Mobile authentication involves long-lived sessions, refresh token exchange, OTP verification, and biometric handoffs. We test every state transition to ensure that authentication cannot be bypassed or hijacked across devices.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Login & Password Reset Flows",
                desc: "Evaluating credential handling, password reset link integrity, and testing for timing attacks or account enumeration."
              },
              {
                title: "OTP & MFA Implementation",
                desc: "Testing OTP generation limits, brute-force protections, response manipulation bypasses, and multi-factor validation."
              },
              {
                title: "Token Lifecycle & Rotation",
                desc: "Auditing JWT signing algorithms, access token expiration windows, refresh token reuse detection, and revocation on logout."
              },
              {
                title: "Biometric Auth Handoffs",
                desc: "Verifying whether biometric checks (FaceID/Fingerprint) validate cryptographic keys in Keystore/Keychain rather than relying on boolean returns."
              },
              {
                title: "Device & Session Binding",
                desc: "Testing whether session tokens are properly bounded to authorized device IDs or if tokens can be transferred across unauthorized clients."
              },
              {
                title: "Account Recovery & Privilege Escalation",
                desc: "Assessing account recovery workflows and testing whether standard user sessions can transition into elevated privileges."
              }
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-surface border border-border rounded-2xl space-y-2.5 shadow-sm">
                <div className="flex items-center gap-2">
                  <KeyRound size={15} className="text-primary flex-shrink-0" />
                  <h3 className="text-sm font-bold text-textPrimary font-sans">{item.title}</h3>
                </div>
                <p className="text-xs text-textSecondary leading-relaxed font-sans pl-6">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sensitive Data Handling & Local Storage Section */}
        <div className="py-16 border-t border-border" id="data-storage-security">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-4">
              <span>Data Protection</span>
            </div>
            <h2 className="heading-2 font-sans mb-3 text-textPrimary">
              Sensitive Data & <span className="text-primary">Local Storage Audits</span>
            </h2>
            <p className="body-text text-textSecondary font-sans">
              Improperly stored data on mobile devices can be retrieved through physical access, backup inspection, or secondary application snooping. We audit local file systems and caching layers to identify sensitive information exposure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Authentication Tokens & Credentials",
                desc: "Scanning local storage for unencrypted session tokens, passwords, API keys, and personal identification records."
              },
              {
                title: "SQLite & Local Databases",
                desc: "Inspecting SQLite, Room, Realm, and CoreData stores for unencrypted financial tables, chat logs, and PII."
              },
              {
                title: "SharedPreferences & Plist Files",
                desc: "Reviewing key-value property files for sensitive configuration flags, user roles, and plaintext telemetry."
              },
              {
                title: "Application Logs & Debug Output",
                desc: "Analyzing production log output (Logcat/NSLog) for sensitive HTTP request parameters, session headers, and user PII."
              },
              {
                title: "Clipboard & Snapshot Caching",
                desc: "Evaluating whether sensitive input fields permit unauthorized clipboard copying or retain screen snapshots in background task switchers."
              },
              {
                title: "Temporary Files & HTTP Caches",
                desc: "Verifying that downloaded documents, identity images, and cached API responses are securely cleared and not exposed in public cache directories."
              }
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-surface border border-border rounded-2xl space-y-2.5 shadow-sm">
                <div className="flex items-center gap-2">
                  <Database size={15} className="text-primary flex-shrink-0" />
                  <h3 className="text-sm font-bold text-textPrimary font-sans">{item.title}</h3>
                </div>
                <p className="text-xs text-textSecondary leading-relaxed font-sans pl-6">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-background border border-border/60 rounded-xl text-xs text-textSecondary font-sans leading-relaxed">
            <strong className="text-textPrimary font-semibold">Security Posture Clarification:</strong> Our security assessments evaluate storage configurations, cryptographic hygiene, and application permissions to identify exploitable exposures and help teams apply industry-standard data protection controls.
          </div>
        </div>

        {/* Business Logic Testing Section */}
        <div className="py-16 border-t border-border" id="business-logic-testing">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-4">
              <span>Manual Logic Verification</span>
            </div>
            <h2 className="heading-2 font-sans mb-3 text-textPrimary">
              Mobile Application <span className="text-primary">Business Logic Testing</span>
            </h2>
            <p className="body-text text-textSecondary font-sans">
              Automated scanners only identify known signature patterns and completely miss workflow-specific logic flaws. Our offensive specialists manually test application state transitions to detect business logic bypasses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Transaction & Amount Tampering",
                desc: "Evaluating whether modifying pricing parameters or currency codes in intercepted requests alters final payment amounts."
              },
              {
                title: "Discount & Promo Abuse",
                desc: "Testing for coupon code reusability, concurrent redemption race conditions, and negative price balance calculations."
              },
              {
                title: "Multi-Step Workflow Bypasses",
                desc: "Attempting to skip intermediate onboarding, payment verification, or compliance checks by directly requesting later workflow stages."
              },
              {
                title: "State Transition Manipulation",
                desc: "Testing if order statuses, subscription tiers, or verification statuses can be manipulated through client-controlled parameters."
              }
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-surface border border-border rounded-2xl space-y-2.5 shadow-sm">
                <h3 className="text-sm font-bold text-textPrimary font-sans">{item.title}</h3>
                <p className="text-xs text-textSecondary leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FinTech Mobile Security Subsection */}
        <div className="py-16 border-t border-border" id="fintech-mobile-security">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-4">
                <span>Specialized Domain Focus</span>
              </div>
              <h2 className="heading-2 font-sans mb-3 text-textPrimary">
                FinTech <span className="text-primary">Mobile Application Security</span>
              </h2>
              <p className="body-text text-textSecondary font-sans">
                Financial mobile applications require rigorous verification of transaction integrity, beneficiary workflows, and sensitive financial records to satisfy enterprise partner requirements and maintain customer trust.
              </p>
            </div>
            <div>
              <Link 
                href="/fintech-security"
                className="inline-flex items-center gap-1.5 text-xs uppercase font-sans font-bold tracking-wider text-primary hover:underline"
              >
                <span>Explore Full FinTech Security Services →</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Payment Workflows & Callbacks",
                desc: "Auditing payment gateway SDK integrations, callback validation, and verifying server-side signature verification."
              },
              {
                title: "Transaction Authorization & Limits",
                desc: "Testing step-up authentication, PIN/OTP enforcement, and transaction limit boundaries on fund transfers."
              },
              {
                title: "Beneficiary Management Security",
                desc: "Evaluating beneficiary addition workflows, cooldown period enforcement, and authorization boundaries."
              },
              {
                title: "Financial API Authorization",
                desc: "Verifying that account statements, balances, card details, and loan records enforce strict user-level authorization."
              },
              {
                title: "Sensitive Financial Data Handling",
                desc: "Auditing local storage and network payloads for PAN, CVV, bank account numbers, and transaction metadata."
              },
              {
                title: "Technical Alignment for Reviews",
                desc: "Generating technical penetration testing documentation and evidence needed for partner bank and enterprise vendor reviews."
              }
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-surface border border-border rounded-2xl space-y-2.5 shadow-sm">
                <div className="flex items-center gap-2">
                  <CreditCard size={15} className="text-primary flex-shrink-0" />
                  <h3 className="text-sm font-bold text-textPrimary font-sans">{item.title}</h3>
                </div>
                <p className="text-xs text-textSecondary leading-relaxed font-sans pl-6">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Methodology / OWASP Reference Section */}
        <div className="py-16 border-t border-border" id="methodology-framework">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-4">
                <span>Testing Standards</span>
              </div>
              <h2 className="heading-2 font-sans mb-3 text-textPrimary">
                Industry-Standard <span className="text-primary">Testing Methodology</span>
              </h2>
              <p className="body-text text-textSecondary font-sans">
                TrustLayerLabs utilizes recognized industry frameworks, including the OWASP Mobile Application Security Verification Standard (MASVS) and Mobile Application Security Testing Guide (MASTG), to ensure structured and repeatable security assessments.
              </p>
            </div>
            <div>
              <Link 
                href="/methodology"
                className="inline-flex items-center gap-1.5 text-xs uppercase font-sans font-bold tracking-wider text-primary hover:underline"
              >
                <span>Read Full Methodology →</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                framework: "OWASP MASVS",
                desc: "Baseline security verification standard covering architecture, data storage, cryptography, authentication, network communication, platform interaction, and code quality."
              },
              {
                framework: "OWASP MASTG",
                desc: "Comprehensive manual testing guide detailing static analysis, dynamic analysis, and runtime manipulation techniques for Android and iOS."
              },
              {
                framework: "OWASP API Security Top 10",
                desc: "Dedicated methodology targeting critical API vulnerabilities including BOLA/IDOR, broken authentication, object property level manipulation, and resource consumption."
              }
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-surface border border-border rounded-2xl space-y-3 shadow-sm">
                <span className="text-[10px] font-mono font-bold text-primary uppercase tracking-wider bg-primary/10 border border-primary/20 px-2 py-0.5 rounded">
                  Reference Framework
                </span>
                <h3 className="text-base font-bold text-textPrimary font-sans">{item.framework}</h3>
                <p className="text-xs text-textSecondary leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 bg-surface border border-border rounded-2xl flex items-start gap-3.5 shadow-sm">
            <HelpCircle size={18} className="text-primary flex-shrink-0 mt-0.5" />
            <div className="text-xs text-textSecondary font-sans leading-relaxed">
              <strong className="text-textPrimary font-semibold block mb-0.5">Framework Reference Note:</strong>
              TrustLayerLabs applies industry-standard guidelines including OWASP MASVS and MASTG as technical assessment references. We provide independent third-party penetration testing and technical verification reports.
            </div>
          </div>
        </div>

        {/* 8-Phase Assessment Process */}
        <div className="py-16 border-t border-border" id="assessment-process">
          <div className="mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-4">
              <span>Engagement Lifecycle</span>
            </div>
            <h2 className="heading-2 font-sans mb-3 text-textPrimary">
              Our 8-Phase <span className="text-primary">Mobile VAPT Process</span>
            </h2>
            <p className="body-text text-textSecondary font-sans max-w-3xl">
              A structured testing process designed for clear communication, non-disruptive testing, developer-friendly reporting, and validated remediation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologySteps.map((step, idx) => (
              <div key={idx} className="p-6 bg-surface border border-border rounded-2xl space-y-2.5 shadow-sm">
                <span className="text-xs font-mono font-bold text-primary uppercase tracking-wider bg-primary/10 px-2 py-0.5 rounded">
                  Phase {step.step}
                </span>
                <h3 className="text-sm font-bold text-textPrimary font-sans">{step.title}</h3>
                <p className="text-xs text-textSecondary leading-relaxed font-sans">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables Section */}
        <div className="py-16 border-t border-border" id="deliverables">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-4">
              <span>Engineering Deliverables</span>
            </div>
            <h2 className="heading-2 font-sans mb-3 text-textPrimary">
              What You <span className="text-primary">Receive</span>
            </h2>
            <p className="body-text text-textSecondary font-sans">
              Actionable, developer-focused documentation designed for rapid remediation, stakeholder transparency, and external review verification.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item, i) => (
              <div key={i} className="p-6 bg-surface border border-border rounded-2xl space-y-2.5 shadow-sm">
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

        {/* Sample Report CTA Banner */}
        <div className="my-12 p-8 md:p-12 bg-surface border border-border rounded-3xl relative overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-bold uppercase tracking-wider">
                <span>Deliverable Preview</span>
              </div>
              <h3 className="heading-2 font-sans text-textPrimary">
                Review an Illustrative Sample VAPT Report
              </h3>
              <p className="text-xs sm:text-sm text-textSecondary font-sans leading-relaxed">
                Review the exact structure of our technical findings, CVSS scoring breakdown, reproduction steps, and remediation code guidance before booking an assessment.
              </p>
              <div className="p-3 bg-background border border-border/60 rounded-xl text-[11px] text-textSecondary font-sans leading-normal">
                <span className="font-bold text-textPrimary uppercase tracking-wider block mb-0.5">
                  ILLUSTRATIVE SAMPLE — NOT A CLIENT ENGAGEMENT
                </span>
                This sample demonstrates our reporting structure and technical depth. It does not represent a real customer engagement.
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <Link 
                href="/sample-report"
                className="px-6 py-3.5 bg-primary hover:bg-primary-hover text-white text-xs font-sans font-bold uppercase tracking-wider rounded-xl transition-all shadow-md text-center flex items-center justify-center gap-2"
              >
                <FileText size={15} />
                <span>View Sample VAPT Report</span>
              </Link>
              <Link 
                href="/api-security-checklist"
                className="px-6 py-3.5 bg-background border border-border hover:border-zinc-400 text-xs font-sans font-semibold tracking-wider rounded-xl text-textPrimary hover:text-primary transition-all text-center"
              >
                <span>32-Point API Checklist →</span>
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-16 border-t border-border" id="faq">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-4">
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="heading-2 font-sans mb-3 text-textPrimary">
              Mobile Application Security & <span className="text-primary">VAPT FAQs</span>
            </h2>
            <p className="body-text text-textSecondary font-sans">
              Answers to common technical and commercial questions regarding our mobile application security testing services.
            </p>
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

        {/* Mid-Page Booking CTA Strip */}
        <div className="my-16 p-8 bg-surface border border-primary/30 rounded-3xl text-center space-y-6 shadow-sm">
          <div className="max-w-2xl mx-auto space-y-3">
            <h3 className="text-xl sm:text-2xl font-bold text-textPrimary font-sans">
              Ready to Scope Your Mobile Application VAPT?
            </h3>
            <p className="text-xs sm:text-sm text-textSecondary font-sans leading-relaxed">
              Schedule a 20-minute scoping call with our lead security specialists under mutual NDA. We will evaluate your mobile architecture, platform requirements, and backend API scope.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link 
              href="https://calendar.app.google/jnamj3gawxVunPJm9"
              target="_blank"
              className="px-8 py-3.5 bg-primary hover:bg-primary-hover text-white text-xs uppercase font-sans font-bold tracking-wider rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              <Calendar size={15} />
              <span>Book a 20-Min Security Review</span>
            </Link>
            <Link 
              href="/contact"
              className="px-8 py-3.5 bg-background border border-border hover:border-zinc-400 text-xs uppercase font-sans font-semibold tracking-wider rounded-xl text-textPrimary hover:text-primary transition-all flex items-center gap-2"
            >
              <span>Submit Scoping Request Form</span>
            </Link>
          </div>
        </div>

      </div>

      {/* Embedded Contact Form */}
      <ContactForm />
    </div>
  );
}
