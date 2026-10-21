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
  Layers
} from "lucide-react";
import type { Metadata } from "next";
import { SERVICES } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";

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

  return {
    title: `${service.title} Services`,
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
        "areaServed": ["India", "Global"],
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
          <span className="text-xs uppercase font-mono text-primary font-bold">{service.title}</span>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider">
            <ShieldCheck size={13} className="text-primary" />
            <span>Offensive Security Assessment</span>
          </div>

          <h1 className="heading-1 font-sans text-textPrimary tracking-tight">
            {service.title} <span className="text-primary">Services</span>
          </h1>

          <p className="text-base sm:text-lg text-textSecondary leading-relaxed font-sans max-w-3xl">
            {service.description} We perform deep manual security testing to identify exploitable vulnerabilities, privilege escalation paths, and compliance control gaps.
          </p>

          {/* Quick Value Prop Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-3.5 bg-surface border border-border/80 rounded-xl">
              <span className="text-[10px] font-mono uppercase tracking-wider text-primary font-bold block mb-1">AUDIT DURATION</span>
              <p className="text-xs text-textSecondary leading-normal">🕒 {service.duration} timeline with initial findings debrief within 48–72h.</p>
            </div>
            <div className="p-3.5 bg-surface border border-border/80 rounded-xl">
              <span className="text-[10px] font-mono uppercase tracking-wider text-primary font-bold block mb-1">RETEST GUARANTEE</span>
              <p className="text-xs text-textSecondary leading-normal">30-day retest included on applicable assessments with verified attestation letter.</p>
            </div>
            <div className="p-3.5 bg-surface border border-border/80 rounded-xl">
              <span className="text-[10px] font-mono uppercase tracking-wider text-primary font-bold block mb-1">NDA UPFRONT</span>
              <p className="text-xs text-textSecondary leading-normal">Mutual NDA executed before exchanging any architecture or credentials.</p>
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

        {/* Details & Specs Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Info */}
          <div className="md:col-span-8 space-y-6">
            <div className="p-8 bg-surface border border-border rounded-2xl space-y-4 shadow-sm">
              <h2 className="text-lg font-bold text-textPrimary font-sans">Testing Methodology & Technical Focus</h2>
              <p className="text-xs text-textSecondary leading-relaxed">
                Our approach combines active reconnaissance with manual exploitation of complex logic flows. We map access privilege boundaries and verify code, cloud configuration, and infrastructure vulnerabilities step-by-step.
              </p>
              <div className="p-4 bg-zinc-50 border border-border rounded-xl space-y-2 text-xs">
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider block">Expected Assessment Outcome:</span>
                <p className="text-textPrimary leading-relaxed">{service.outcome}</p>
              </div>

              {slug === "fintech-vapt" && (
                <div className="p-4 bg-primary/5 border border-primary/20 rounded-xl space-y-1 text-xs">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-wider block">Related Offering</span>
                  <p className="text-textSecondary leading-relaxed">
                    Looking for transaction tampering, ledger race condition, and payment API testing instead of compliance attestation? Explore our{" "}
                    <Link href="/fintech-security" className="text-primary font-bold hover:underline">
                      FinTech VAPT & Payment API Security Testing
                    </Link>{" "}
                    service.
                  </p>
                </div>
              )}

              {(slug === "graphql-security" || slug === "owasp-api-security") && (
                <div className="p-4 bg-primary/5 border border-primary/20 rounded-xl space-y-1 text-xs">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-wider block">Comprehensive API Review</span>
                  <p className="text-textSecondary leading-relaxed">
                    Need a broader offensive security review across REST, GraphQL, and microservice APIs? Explore our full{" "}
                    <Link href="/services/api-security" className="text-primary font-bold hover:underline">
                      API Security Testing & BOLA Pentesting
                    </Link>{" "}
                    service.
                  </p>
                </div>
              )}
            </div>

            {/* Deliverables Box */}
            <div className="p-8 bg-surface border border-border rounded-2xl space-y-4 shadow-sm">
              <h2 className="text-lg font-bold text-textPrimary font-sans">Included Engineering Deliverables</h2>
              <ul className="space-y-3.5 text-xs text-textSecondary">
                {service.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-textPrimary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Safe Harbor & Scope Boundaries */}
            <div className="p-8 bg-surface border border-border rounded-2xl space-y-4 shadow-sm">
              <h2 className="text-lg font-bold text-textPrimary font-sans">Safe Harbor & Testing Boundaries</h2>
              <p className="text-xs text-textSecondary leading-relaxed font-sans">
                All security testing activities operate under strict ethical hacking guidelines and executed mutual Non-Disclosure Agreements (NDA). Our team strictly adheres to predefined operational boundaries:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-background border border-border/80 rounded-xl space-y-2">
                  <h3 className="text-xs font-bold text-primary font-mono uppercase tracking-wider">In-Scope Execution</h3>
                  <p className="text-xs text-textSecondary leading-relaxed">
                    Business logic testing, authentication flow verification, privilege escalation, rate-limiting evaluation, and input fuzzing.
                  </p>
                </div>
                <div className="p-4 bg-background border border-border/80 rounded-xl space-y-2">
                  <h3 className="text-xs font-bold text-textPrimary font-mono uppercase tracking-wider">Excluded / Out of Scope</h3>
                  <p className="text-xs text-textSecondary leading-relaxed">
                    Denial of Service (DoS/DDoS), physical facility intrusion, social engineering of employees, and unauthorized destruction of live data.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQs Section */}
            <div className="p-8 bg-surface border border-border rounded-2xl space-y-6 shadow-sm">
              <h2 className="text-lg font-bold text-textPrimary font-sans">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="border-b border-border/60 pb-4 last:border-b-0 last:pb-0">
                    <h3 className="text-sm font-bold text-textPrimary font-sans mb-1.5">{faq.q}</h3>
                    <p className="text-xs text-textSecondary leading-relaxed font-sans">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Specifications */}
          <div className="md:col-span-4 space-y-6">
            <div className="p-6 bg-surface border border-border rounded-2xl space-y-5 shadow-sm">
              <div>
                <p className="text-[10px] font-bold text-textSecondary uppercase tracking-wider mb-2">Audit Timeline</p>
                <span className="px-3 py-1.5 bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary rounded-md uppercase font-mono block text-center">
                  🕒 {service.duration}
                </span>
              </div>

              <div>
                <p className="text-[10px] font-bold text-textSecondary uppercase tracking-wider mb-2">Risk Classification</p>
                <span className="px-3 py-1.5 bg-critical/10 border border-critical/20 text-[10px] font-bold text-critical rounded-md uppercase font-mono block text-center">
                  ⚠️ {service.severity.toUpperCase()}
                </span>
              </div>

              <div className="border-t border-border/40 pt-4">
                <p className="text-[10px] font-bold text-textSecondary uppercase tracking-wider mb-3">Tools & Frameworks</p>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-zinc-100 border border-border rounded-md text-[10px] font-mono text-textPrimary">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Booking CTA Banner */}
        <div className="my-16 p-8 bg-surface border border-primary/30 rounded-3xl text-center space-y-6 shadow-sm">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-textPrimary font-sans">
              Book a 30-Minute {service.title} Scoping Call
            </h2>
            <p className="text-xs sm:text-sm text-textSecondary max-w-xl mx-auto font-sans leading-relaxed">
              Schedule a confidential call with our lead security architects under mutual NDA to review your target scope, endpoint surface, and timeline requirements.
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
