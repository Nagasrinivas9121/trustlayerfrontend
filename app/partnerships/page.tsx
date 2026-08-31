import type { Metadata } from "next";
import Link from "next/link";
import { 
  ShieldCheck, 
  ArrowRight, 
  Calendar, 
  CheckCircle2, 
  Handshake, 
  Code, 
  Cloud, 
  Scale, 
  Rocket, 
  FileText,
  Users
} from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Security Assessment Partner Program | TrustLayerLabs",
  description: "Partner with TrustLayerLabs as your dedicated technical offensive security and VAPT partner for agencies, cloud consultancies, MSPs, and SOC 2 advisors.",
  keywords: [
    "cybersecurity partner program",
    "white label VAPT partner",
    "agency penetration testing partner",
    "SOC 2 compliance partner India",
    "cloud security consultant partner"
  ],
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/partnerships",
  },
};

const partnerTypes = [
  {
    title: "Software & Web Development Agencies",
    description: "Offer certified manual VAPT and API security testing to your enterprise and startup clients prior to project handover and production launch.",
    icon: Code,
    badge: "Agency Partner"
  },
  {
    title: "Cloud Consultancies & MSPs",
    description: "Provide deep AWS/GCP IAM reviews, Kubernetes cluster hardening, and external network penetration testing to complement your cloud services.",
    icon: Cloud,
    badge: "Cloud Partner"
  },
  {
    title: "SOC 2 & ISO 27001 Advisors",
    description: "Outsource required third-party penetration tests and technical controls verification with retest confirmation letters for your audit clients.",
    icon: Scale,
    badge: "Compliance Partner"
  },
  {
    title: "Venture Funds & Startup Ecosystems",
    description: "Support your portfolio companies with pre-launch security audits, API security checklists, and enterprise security readiness reviews.",
    icon: Rocket,
    badge: "Ecosystem Partner"
  }
];

const partnerBenefits = [
  {
    title: "Direct Access to Certified Architects",
    desc: "Work directly with CEH, eWPT, and ISO 27001 certified security engineers who understand modern codebases and cloud architectures."
  },
  {
    title: "Developer-First Remediation Support",
    desc: "Every finding comes with reproducible PoCs and actionable code snippets so your development team can patch issues immediately."
  },
  {
    title: "Retesting & Remediation Letters",
    desc: "We verify applied patches and issue updated reports and Retest Verification Letters for enterprise procurement and compliance audits."
  },
  {
    title: "Fast 5–10 Day Turnaround",
    desc: "Rapid scoping, kickoff under mutual NDA, and expedited 48-hour preliminary snapshot delivery for urgent deal deadlines."
  }
];

export default function PartnershipsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Security Assessment Partner Program",
    "provider": {
      "@type": "Organization",
      "name": "TrustLayerLabs",
      "url": "https://www.trustlayerlabs.co.in"
    },
    "description": "Technical Security Assessment Partner for Agencies, Cloud Consultancies, and GRC Advisors.",
    "serviceType": "Cybersecurity Partnership Program"
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
          <Link href="/" className="text-xs uppercase font-mono text-textSecondary hover:text-textPrimary">Home</Link>
          <span className="text-xs text-textSecondary">/</span>
          <span className="text-xs uppercase font-mono text-primary font-bold">Partnerships</span>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider">
            <Handshake size={13} className="text-primary" />
            <span>Technical Assessment Partner</span>
          </div>

          <h1 className="heading-1 font-sans text-textPrimary">
            Your Dedicated <br />
            <span className="text-primary">Offensive Security & VAPT Partner</span>
          </h1>

          <p className="text-base sm:text-lg text-textSecondary leading-relaxed font-sans max-w-3xl">
            We partner with software agencies, cloud consultancies, MSPs, and compliance advisors to deliver high-depth manual penetration testing and GRC readiness for your clients.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link 
              href="https://calendar.app.google/jnamj3gawxVunPJm9"
              target="_blank"
              className="px-8 py-3.5 bg-primary hover:bg-primary-hover text-white text-xs uppercase font-sans font-bold tracking-wider rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              <Calendar size={15} />
              <span>Schedule Partner Discussion</span>
            </Link>

            <Link 
              href="/sample-report"
              className="px-8 py-3.5 bg-surface border border-border hover:border-zinc-400 text-xs uppercase font-sans font-semibold tracking-wider rounded-xl text-textPrimary hover:text-primary transition-all flex items-center gap-2"
            >
              <FileText size={15} />
              <span>View Sample Report</span>
            </Link>
          </div>
        </div>

        {/* Partner Categories */}
        <div className="py-16 border-t border-border">
          <div className="mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-4">
              <span>Who We Partner With</span>
            </div>
            <h2 className="heading-2 font-sans mb-3">
              Built for Modern <span className="text-primary">Technology Ecosystems</span>
            </h2>
            <p className="body-text text-textSecondary font-sans">
              Enhance your core client offerings with certified technical penetration testing and compliance readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerTypes.map((pt, idx) => (
              <div 
                key={idx}
                className="premium-card p-8 bg-surface border border-border rounded-2xl flex flex-col justify-between hover:border-zinc-400 transition-all duration-300 shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                      <pt.icon size={20} />
                    </div>
                    <span className="px-2.5 py-0.5 text-[10px] font-sans font-bold uppercase tracking-wider bg-background border border-border text-primary rounded-full">
                      {pt.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-textPrimary tracking-tight font-sans mb-3">
                    {pt.title}
                  </h3>
                  <p className="text-xs text-textSecondary leading-relaxed font-sans">
                    {pt.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Benefits */}
        <div className="py-16 border-t border-border">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-4">
              <span>Partnership Advantages</span>
            </div>
            <h2 className="heading-2 font-sans mb-3">
              Why Partner with <span className="text-primary">TrustLayerLabs?</span>
            </h2>
            <p className="body-text text-textSecondary font-sans">
              We make adding security testing to your service catalogue seamless, transparent, and developer-friendly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {partnerBenefits.map((item, i) => (
              <div key={i} className="p-6 bg-surface border border-border rounded-2xl space-y-3 shadow-sm">
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

      </div>

      {/* Embedded Contact Form */}
      <ContactForm />
    </div>
  );
}
