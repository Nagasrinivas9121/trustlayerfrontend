export const revalidate = 3600;

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  ArrowLeft, 
  ShieldCheck, 
  CheckCircle, 
  Code, 
  ArrowRight, 
  Calendar, 
  FileText, 
  Clock, 
  ShieldAlert,
  CheckCircle2,
  Lock,
  Layers,
  Sparkles,
  ChevronRight,
  Check
} from "lucide-react";
import type { Metadata } from "next";
import { SERVICES } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";
import { PRICING_PACKAGES } from "@/lib/pricing-config";

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate static params for all custom services for full SSG pre-rendering
export async function generateStaticParams() {
  const customSlugs = [
    "soc2-pentesting",
    "fintech-vapt",
    "aws-security",
    "smart-contract-audit",
    "iso-27001-vapt",
    "hipaa-vapt",
    "active-directory-pentesting",
    "external-attack-surface",
    "pci-dss-pentesting",
    "source-code-review",
    "azure-security",
    "gcp-security",
    "graphql-security",
    "owasp-api-security",
    "web-development"
  ];
  return customSlugs.map((slug) => ({ slug }));
}

// Dynamically generate SEO Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};

  if (slug === "soc2-pentesting") {
    const soc2Price = PRICING_PACKAGES.find((p) => p.id === "soc2-readiness-pentest")?.priceInr.split("+")[0].trim() || "₹1,24,999";
    return {
      title: {
        absolute: `SOC 2 Penetration Testing in India | From ${soc2Price}`,
      },
      description: "Pentest mapped to SOC 2 and ISO 27001 for enterprise security reviews. Report designed to support auditor evidence requests. Quote in 24h.",
      alternates: {
        canonical: "https://www.trustlayerlabs.co.in/services/soc2-pentesting",
      },
      openGraph: {
        title: "SOC 2 Penetration Testing in India | TrustLayerLabs",
        description: "Pentest mapped to SOC 2 and ISO 27001 for enterprise security reviews. Report designed to support auditor evidence requests. Quote in 24h.",
        url: "https://www.trustlayerlabs.co.in/services/soc2-pentesting",
        siteName: "TrustLayerLabs",
        locale: "en_US",
        type: "website",
      },
    };
  }

  return {
    title: `${service.title} Services | TrustLayerLabs`,
    description: service.description,
    alternates: {
      canonical: `https://www.trustlayerlabs.co.in/services/${slug}`,
    },
    openGraph: {
      title: `${service.title} Services | TrustLayerLabs`,
      description: service.description,
      url: `https://www.trustlayerlabs.co.in/services/${slug}`,
      siteName: "TrustLayerLabs",
      locale: "en_IN",
      alternateLocale: ["en_US"],
      type: "website",
    },
  };
}

export default async function ServiceSlugPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) {
    notFound();
  }

  const faqs = [
    {
      q: `What is the delivery timeline and format for the ${service.title} assessment?`,
      a: `Initial vulnerability debriefs and critical findings are shared within 48 to 72 hours. The complete assessment deliverable—including executive summary, CVSS v3.1 scores, and copy-paste code patches—is delivered within ${service.duration}.`
    },
    {
      q: `Does our ${service.title} assessment rely on automated tools or manual testing?`,
      a: `While automated tools assist with initial asset discovery, over 80% of our assessment effort is dedicated to manual penetration testing. Certified security practitioners manually evaluate authorization boundaries, session handling, business logic flaws, and privilege escalation vectors that automated scanners miss.`
    },
    {
      q: `How do you ensure testing will not impact our live uptime or cause data corruption?`,
      a: `All testing adheres to strict Safe Harbor boundaries. We use non-destructive payloads, coordinate rate-limiting parameters, test staging environments whenever possible, and strictly avoid denial-of-service tests or uncoordinated database modifications.`
    },
    {
      q: `Is vulnerability retesting included after our engineering team patches the findings?`,
      a: `Yes. Every assessment includes one complimentary retest within 30 days of report delivery. Upon verifying the fixes, we issue an updated deliverable and a formal signed Executive Attestation Letter for your stakeholders and compliance auditors.`
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `https://www.trustlayerlabs.co.in/services/${slug}#service`,
        "name": `${service.title} Services`,
        "provider": { "@id": "https://www.trustlayerlabs.co.in/#organization" },
        "serviceType": service.title,
        "description": service.description,
        "areaServed": ["India", "United States", "United Kingdom", "European Union", "United Arab Emirates", "Singapore"],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://www.trustlayerlabs.co.in/services/${slug}#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trustlayerlabs.co.in" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.trustlayerlabs.co.in/services" },
          { "@type": "ListItem", "position": 3, "name": service.title, "item": `https://www.trustlayerlabs.co.in/services/${slug}` },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `https://www.trustlayerlabs.co.in/services/${slug}#faq`,
        "mainEntity": faqs.map(faq => ({
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
    <div className="bg-background min-h-screen pt-32 pb-24 font-sans text-neutral-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="section-container max-w-6xl mx-auto">
        
        {/* Breadcrumb Navigation - CodeDale style */}
        <div className="flex items-center gap-2 mb-8 flex-wrap">
          <Link href="/" className="px-3 py-1 rounded-full bg-white border border-neutral-200 text-xs font-semibold text-neutral-600 hover:text-neutral-900 transition-colors shadow-sm">
            Home
          </Link>
          <span className="text-neutral-400 text-xs">/</span>
          <Link href="/services" className="px-3 py-1 rounded-full bg-white border border-neutral-200 text-xs font-semibold text-neutral-600 hover:text-neutral-900 transition-colors shadow-sm">
            Services
          </Link>
          <span className="text-neutral-400 text-xs">/</span>
          <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-primary">
            {service.title}
          </span>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-neutral-200 shadow-sm rounded-full text-xs font-semibold text-neutral-800 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>Offensive Security Assessment</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-tight font-sans">
            {service.title} <span className="text-primary">Services</span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-sans max-w-3xl">
            {service.description} We perform deep manual security testing to identify exploitable vulnerabilities, privilege escalation paths, and compliance control gaps.
          </p>

          {/* Quick Value Prop Strip - CodeDale 3-Card Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-5 bg-white border border-neutral-200/90 rounded-2xl shadow-sm">
              <span className="text-[10px] font-mono uppercase tracking-wider text-primary font-bold block mb-1">AUDIT DURATION</span>
              <p className="text-xs text-neutral-600 leading-relaxed font-sans">🕒 {service.duration} timeline with initial findings debrief within 48–72h.</p>
            </div>
            <div className="p-5 bg-white border border-neutral-200/90 rounded-2xl shadow-sm">
              <span className="text-[10px] font-mono uppercase tracking-wider text-primary font-bold block mb-1">RETEST VERIFICATION</span>
              <p className="text-xs text-neutral-600 leading-relaxed font-sans">30-day retest included with verified executive attestation letter.</p>
            </div>
            <div className="p-5 bg-white border border-neutral-200/90 rounded-2xl shadow-sm">
              <span className="text-[10px] font-mono uppercase tracking-wider text-primary font-bold block mb-1">MUTUAL NDA UPFRONT</span>
              <p className="text-xs text-neutral-600 leading-relaxed font-sans">Executed prior to exchanging architecture, credentials, or target URLs.</p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link 
              href="/free-assessment"
              className="px-8 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white text-xs uppercase font-sans font-bold tracking-wider rounded-full shadow-md transition-all flex items-center gap-2 group"
            >
              <span>Schedule Scoping Review</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-blue-400" />
            </Link>

            <Link 
              href="/sample-report"
              className="px-8 py-3.5 bg-neutral-100 hover:bg-neutral-200/80 border border-neutral-200 text-xs uppercase font-sans font-semibold tracking-wider rounded-full text-neutral-800 transition-all flex items-center gap-2"
            >
              <FileText size={15} />
              <span>View Sample Assessment Report</span>
            </Link>
          </div>
        </div>

        {/* Details & Specs Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Info */}
          <div className="md:col-span-8 space-y-6">
            <div className="p-8 bg-white border border-neutral-200/90 rounded-3xl space-y-4 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
              <h2 className="text-xl font-bold text-neutral-900 font-sans tracking-tight">Testing Methodology &amp; Technical Focus</h2>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Our approach combines active reconnaissance with manual exploitation of complex logic flows. We map access privilege boundaries and verify code, cloud configuration, and infrastructure vulnerabilities step-by-step.
              </p>
              <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-2xl space-y-1.5 text-xs">
                <span className="text-[10px] font-mono font-bold text-primary uppercase tracking-wider block">Expected Assessment Outcome:</span>
                <p className="text-neutral-800 leading-relaxed font-sans">{service.outcome}</p>
              </div>

              {slug === "fintech-vapt" && (
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-2xl space-y-1 text-xs">
                  <span className="text-[10px] font-mono font-bold text-primary uppercase tracking-wider block">Specialized Offering</span>
                  <p className="text-neutral-700 leading-relaxed font-sans">
                    Looking for transaction tampering, ledger race condition, and payment API testing instead of compliance attestation? Explore our{" "}
                    <Link href="/fintech-security" className="text-primary font-bold hover:underline">
                      FinTech VAPT &amp; Payment API Security Testing
                    </Link>{" "}
                    service.
                  </p>
                </div>
              )}

              {(slug === "graphql-security" || slug === "owasp-api-security") && (
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-2xl space-y-1 text-xs">
                  <span className="text-[10px] font-mono font-bold text-primary uppercase tracking-wider block">Comprehensive API Review</span>
                  <p className="text-neutral-700 leading-relaxed font-sans">
                    Need a broader offensive security review across REST, GraphQL, and microservice APIs? Explore our full{" "}
                    <Link href="/services/api-security" className="text-primary font-bold hover:underline">
                      API Security Testing &amp; BOLA Pentesting
                    </Link>{" "}
                    service.
                  </p>
                </div>
              )}
            </div>

            {/* Deliverables Box */}
            <div className="p-8 bg-white border border-neutral-200/90 rounded-3xl space-y-4 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
              <h2 className="text-xl font-bold text-neutral-900 font-sans tracking-tight">Included Engineering Deliverables</h2>
              <ul className="space-y-3 text-xs sm:text-sm text-neutral-700">
                {service.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200 mt-0.5">
                      <Check size={11} strokeWidth={3} />
                    </div>
                    <span className="text-neutral-800 font-sans">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Safe Harbor & Scope Boundaries */}
            <div className="p-8 bg-white border border-neutral-200/90 rounded-3xl space-y-4 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
              <h2 className="text-xl font-bold text-neutral-900 font-sans tracking-tight">Safe Harbor &amp; Testing Boundaries</h2>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
                All security testing activities operate under strict ethical hacking guidelines and executed mutual Non-Disclosure Agreements (NDA). Our team strictly adheres to predefined operational boundaries:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 bg-neutral-50 border border-neutral-200 rounded-2xl space-y-2">
                  <h3 className="text-xs font-bold text-primary font-mono uppercase tracking-wider">In-Scope Execution</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                    Business logic testing, authentication flow verification, privilege escalation, rate-limiting evaluation, and input fuzzing.
                  </p>
                </div>
                <div className="p-5 bg-neutral-50 border border-neutral-200 rounded-2xl space-y-2">
                  <h3 className="text-xs font-bold text-neutral-800 font-mono uppercase tracking-wider">Excluded / Out of Scope</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                    Denial of Service (DoS/DDoS), physical facility intrusion, social engineering of employees, and unauthorized destruction of live data.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQs Section */}
            <div className="p-8 bg-white border border-neutral-200/90 rounded-3xl space-y-6 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
              <h2 className="text-xl font-bold text-neutral-900 font-sans tracking-tight">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="border-b border-dashed border-neutral-200 pb-4 last:border-b-0 last:pb-0">
                    <h3 className="text-sm font-bold text-neutral-900 font-sans mb-1.5">{faq.q}</h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Specifications */}
          <div className="md:col-span-4 space-y-6">
            <div className="p-6 bg-white border border-neutral-200/90 rounded-3xl space-y-5 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
              <div>
                <p className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wider mb-2">Audit Timeline</p>
                <span className="px-3 py-2 bg-blue-50 border border-blue-200 text-xs font-bold text-primary rounded-xl uppercase font-mono block text-center">
                  🕒 {service.duration}
                </span>
              </div>

              <div>
                <p className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wider mb-2">Risk Classification</p>
                <span className="px-3 py-2 bg-red-50 border border-red-200 text-xs font-bold text-red-700 rounded-xl uppercase font-mono block text-center">
                  ⚠️ {service.severity.toUpperCase()} FOCUS
                </span>
              </div>

              <div className="border-t border-dashed border-neutral-200 pt-4">
                <p className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wider mb-3">Tools &amp; Frameworks</p>
                <div className="flex flex-wrap gap-1.5">
                  {service.technologies.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 bg-neutral-100 border border-neutral-200 rounded-md text-[10px] font-mono text-neutral-800">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-dashed border-neutral-200 pt-4">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center py-3 bg-neutral-900 hover:bg-neutral-800 text-white text-xs uppercase font-sans font-bold tracking-wider rounded-full shadow-sm transition-all"
                >
                  Direct Inquiry
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Booking CTA Banner - CodeDale Dashed Container */}
        <div className="my-16 p-8 sm:p-12 bg-white border border-dashed border-neutral-300 rounded-3xl text-center space-y-6 shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 font-sans tracking-tight">
              Book a 30-Minute {service.title} Scoping Call
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 max-w-xl mx-auto font-sans leading-relaxed">
              Schedule a confidential call with our lead security architects under mutual NDA to review your target scope, endpoint surface, and timeline requirements.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/free-assessment"
              className="px-8 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white text-xs uppercase font-sans font-bold tracking-wider rounded-full shadow-md transition-all flex items-center gap-2"
            >
              <span>Schedule Scoping Review</span>
              <ArrowRight size={14} className="text-blue-400" />
            </Link>
            <Link
              href="/sample-report"
              className="px-8 py-3.5 bg-neutral-100 hover:bg-neutral-200/80 border border-neutral-200 text-xs uppercase font-sans font-semibold tracking-wider rounded-full text-neutral-800 transition-all flex items-center gap-2"
            >
              <FileText size={15} />
              <span>View Sample Assessment Report</span>
            </Link>
          </div>
        </div>

      </div>

      {/* Embedded Contact Form */}
      <ContactForm />
    </div>
  );
}
