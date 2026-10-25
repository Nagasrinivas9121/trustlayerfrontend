import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MapPin, ShieldCheck, ArrowRight, Calendar, FileText, CheckCircle2, HelpCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "VAPT Services in Bangalore | Manual API & SaaS Security Testing",
  description: "Practitioner-led manual penetration testing, SaaS tenant boundary verification, and SOC 2 / ISO 27001 audit attestation for Bangalore technology startups across Koramangala, Indiranagar, and HSR Layout.",
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/vapt-bangalore",
  },
  openGraph: {
    title: "VAPT Services in Bangalore | TrustLayerLabs",
    description: "Manual API & SaaS penetration testing for Bangalore tech startups. Every finding manually verified with reproducible cURL PoCs.",
    url: "https://www.trustlayerlabs.co.in/vapt-bangalore",
  },
};

export default function VaptBangalore() {
  const bangaloreFaqs = [
    {
      q: "How fast can we receive a VAPT report for our SOC 2 audit or US enterprise deal?",
      a: "For fast-moving SaaS startups in Bengaluru, we offer accelerated scoping intake under mutual NDA. Standard web & API assessments wrap up in 5-10 business days depending on package, with immediate preliminary notifications for any Critical findings so your developers can patch while we finalize the report."
    },
    {
      q: "Do you test staging or production environments for Bangalore engineering teams?",
      a: "We primarily test isolated staging or pre-production environments populated with realistic anonymized mock data. For complex microservices or serverless architectures hosted in AWS ap-south-1 (Mumbai), we coordinate safe non-destructive testing windows."
    },
    {
      q: "Will your Attestation Letter satisfy Tier-1 US enterprise vendor risk assessments?",
      a: "Yes. Our executive attestation letters are signed by certified practitioners (CEH, C3SA, ISO 27001 Lead Auditor) and detail assessment scope, testing dates, methodology (OWASP Top 10, ASVS), and clean retest verification."
    }
  ];

  const bangaloreSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": "https://www.trustlayerlabs.co.in/vapt-bangalore#localbusiness",
    "name": "TrustLayerLabs Bangalore — VAPT & API Security Testing",
    "description": "Manual penetration testing, SaaS multi-tenant isolation audits, and SOC 2 / ISO 27001 readiness for Bangalore startups.",
    "url": "https://www.trustlayerlabs.co.in/vapt-bangalore",
    "telephone": "+91-9391220328",
    "email": "ceo@trustlayerlabs.co.in",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.9716,
      "longitude": 77.5946
    },
    "areaServed": [
      { "@type": "City", "name": "Bengaluru" },
      { "@type": "AdministrativeArea", "name": "Koramangala" },
      { "@type": "AdministrativeArea", "name": "Indiranagar" },
      { "@type": "AdministrativeArea", "name": "HSR Layout" },
      { "@type": "AdministrativeArea", "name": "Whitefield" },
      { "@type": "AdministrativeArea", "name": "Electronic City" }
    ],
    "priceRange": "₹₹₹"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": bangaloreFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen pt-32 pb-24 text-neutral-900 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bangaloreSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Link 
          href="/" 
          className="inline-flex items-center text-xs font-semibold text-neutral-500 hover:text-neutral-900 transition-colors gap-2 mb-8 group px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 shadow-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="mb-14 space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/80 shadow-sm text-xs font-semibold text-neutral-800">
            <MapPin size={13} className="text-neutral-900" />
            <span>Serving Bengaluru Technology Ecosystem & Global SaaS</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950">
            VAPT & API Security Testing for <br />
            <span className="text-neutral-900">Bangalore Tech Startups</span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-3xl">
            Practitioner-led manual penetration testing, SaaS tenant boundary verification, and SOC 2 / ISO 27001 audit attestation for venture-backed engineering teams across Koramangala, Indiranagar, HSR Layout, and Whitefield.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link 
              href="/free-assessment" 
              className="px-7 py-3.5 bg-neutral-900 hover:bg-black text-white text-xs font-semibold rounded-full transition-all shadow-md flex items-center gap-2 group"
            >
              <ShieldCheck size={15} />
              <span>Get Free Scoping Review</span>
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link 
              href="/sample-report"
              className="px-7 py-3.5 bg-white border border-neutral-200 hover:border-neutral-400 text-xs font-semibold rounded-full text-neutral-800 transition-all flex items-center gap-2 shadow-sm"
            >
              <FileText size={15} />
              <span>View Sample Report</span>
            </Link>
          </div>
        </div>

        {/* 2 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-14">
          <div className="bg-white border border-neutral-200/80 p-8 rounded-3xl space-y-4 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
            <div>
              <h2 className="text-lg font-bold text-neutral-950 tracking-tight">
                Practitioner-Led Application Testing
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed mt-2">
                Bengaluru product teams build complex microservices, GraphQL APIs, and multi-tenant architectures. Our offensive security engineers work directly with your engineering leads under mutual NDA, executing manual authorization audits that automated vulnerability scanners consistently miss.
              </p>
            </div>
            
            <div className="pt-4 border-t border-dashed border-neutral-200 text-xs text-neutral-500 font-medium">
              📍 Remote-First Audits Serving Bangalore, Silicon Valley Expansions & Across India
            </div>
          </div>

          <div className="bg-white border border-neutral-200/80 p-8 rounded-3xl space-y-4 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
            <div>
              <h2 className="text-lg font-bold text-neutral-950 tracking-tight">
                Why Bangalore SaaS Leaders Choose Us
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed mt-2">
                Early-stage and growth-stage SaaS startups cannot afford 30-day corporate delays or 50-page scanner noise. We deliver reproduction steps with raw curl commands, code patches for Python/Node/Go, and complimentary 30-day retesting to verify fixes.
              </p>
            </div>

            <div className="pt-4 border-t border-dashed border-neutral-200 flex flex-wrap gap-2 text-[11px] font-semibold text-neutral-700">
              <span className="px-3 py-1 bg-neutral-100 rounded-full border border-neutral-200">30-Day Retest Included</span>
              <span className="px-3 py-1 bg-neutral-100 rounded-full border border-neutral-200">Mutual NDA Upfront</span>
              <span className="px-3 py-1 bg-neutral-100 rounded-full border border-neutral-200">Zero Offshore Subcontracting</span>
            </div>
          </div>
        </div>

        {/* Regional Tech Ecosystem Context */}
        <div className="mb-14 bg-white border border-neutral-200/80 rounded-3xl p-8 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
          <div className="max-w-2xl mb-6">
            <h2 className="text-xl font-bold text-neutral-950 tracking-tight mb-2">
              Security Compliance for Bangalore&apos;s SaaS & AI Hub
            </h2>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Bangalore represents India&apos;s highest concentration of venture-backed SaaS startups and AI innovators. As engineering organizations prepare for global enterprise procurement, demonstrating certified application security is mandatory.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-5 bg-neutral-50 border border-neutral-200/70 rounded-2xl space-y-2">
              <h3 className="text-xs font-bold text-neutral-950 uppercase tracking-wider">Enterprise Procurement</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Pass Fortune 500 vendor risk assessments with executive attestation letters signed by certified CEH, C3SA, and ISO 27001 lead auditors.
              </p>
            </div>
            <div className="p-5 bg-neutral-50 border border-neutral-200/70 rounded-2xl space-y-2">
              <h3 className="text-xs font-bold text-neutral-950 uppercase tracking-wider">RBI & CERT-In Compliance</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Meet regulatory mandates for FinTech applications, payment gateways, and banking APIs operating in the Indian financial ecosystem.
              </p>
            </div>
            <div className="p-5 bg-neutral-50 border border-neutral-200/70 rounded-2xl space-y-2">
              <h3 className="text-xs font-bold text-neutral-950 uppercase tracking-wider">Developer-First Sprints</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Seamless integration with GitHub/GitLab PRs, fast Slack/Teams debrief calls, and free 30-day retesting to verify fixes.
              </p>
            </div>
          </div>
        </div>

        {/* Bangalore FAQ */}
        <div className="mb-14 bg-white border border-neutral-200/80 rounded-3xl p-8 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
          <h2 className="text-xl font-bold text-neutral-950 tracking-tight mb-6">
            Frequently Asked Questions by Bangalore Engineering Teams
          </h2>
          <div className="space-y-4">
            {bangaloreFaqs.map((faq) => (
              <div key={faq.q} className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200/70 space-y-2">
                <h3 className="text-sm font-bold text-neutral-950 flex items-start gap-2">
                  <HelpCircle size={15} className="text-neutral-900 shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Cross Links */}
        <div className="my-14 border-t border-dashed border-neutral-200 pt-10">
          <h2 className="text-sm font-bold text-neutral-950 uppercase tracking-wider mb-5">
            Core Assessment Capabilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/services/saas-vapt" className="p-6 bg-white border border-neutral-200/80 rounded-3xl hover:border-neutral-300 transition-all shadow-[0_4px_24px_rgba(0,0,0,0.02)] group">
              <h3 className="text-sm font-bold text-neutral-950 mb-1 flex items-center justify-between">
                <span>SaaS VAPT</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-neutral-500">Multi-tenant isolation & privilege escalation.</p>
            </Link>
            <Link href="/services/api-security" className="p-6 bg-white border border-neutral-200/80 rounded-3xl hover:border-neutral-300 transition-all shadow-[0_4px_24px_rgba(0,0,0,0.02)] group">
              <h3 className="text-sm font-bold text-neutral-950 mb-1 flex items-center justify-between">
                <span>API Security Testing</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-neutral-500">BOLA, BFLA & JWT penetration testing.</p>
            </Link>
            <Link href="/grc-readiness" className="p-6 bg-white border border-neutral-200/80 rounded-3xl hover:border-neutral-300 transition-all shadow-[0_4px_24px_rgba(0,0,0,0.02)] group">
              <h3 className="text-sm font-bold text-neutral-950 mb-1 flex items-center justify-between">
                <span>SOC 2 & ISO Readiness</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-neutral-500">Technical controls mapping & advisory.</p>
            </Link>
          </div>
        </div>

      </div>

      {/* Contact Form */}
      <div className="mt-8">
        <ContactForm />
      </div>
    </div>
  );
}
