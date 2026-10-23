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
  Users,
  ArrowLeft
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import PartnershipActions from "@/components/PartnershipActions";

export const metadata: Metadata = {
  title: "Security Partner Program",
  description: "Partner with TrustLayerLabs as your dedicated technical offensive security and VAPT partner for agencies, MSPs, and SOC 2 advisors.",
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/partnerships",
  },
};

const partnerTypes = [
  {
    title: "Software & Web Development Agencies",
    description: "Offer manual VAPT and API security testing to your enterprise and startup clients prior to project handover and production launch.",
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
    title: "Direct Access to Offensive Practitioners",
    desc: "Work directly with certified security engineers (CEH, C3SA, ISO 27001 LA) who understand modern codebases and cloud architectures."
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
    <div className="bg-[#FAFAFA] min-h-screen pt-32 pb-24 font-sans text-neutral-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Pill */}
        <Link 
          href="/" 
          className="inline-flex items-center text-xs font-semibold text-neutral-500 hover:text-neutral-900 transition-colors gap-2 mb-8 group px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 shadow-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>

        {/* Hero Section */}
        <div className="max-w-4xl space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/80 shadow-sm text-xs font-semibold text-neutral-800">
            <Handshake size={14} className="text-neutral-900" />
            <span>Technical Assessment Partner Program</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950">
            Your Dedicated <br />
            <span className="text-neutral-900">Offensive Security & VAPT Partner</span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-3xl">
            We partner with software agencies, cloud consultancies, MSPs, and compliance advisors to deliver high-depth manual penetration testing and GRC readiness for your clients.
          </p>

          <PartnershipActions />
        </div>

        {/* Partner Categories */}
        <div className="py-14 border-t border-dashed border-neutral-200">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 shadow-sm text-xs font-semibold text-neutral-800 mb-4">
              <span>Who We Partner With</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 mb-3">
              Built for Modern <span className="text-neutral-900">Technology Ecosystems</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 max-w-2xl">
              Enhance your core client offerings with manual technical penetration testing and compliance readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partnerTypes.map((pt, idx) => (
              <div 
                key={idx}
                className="p-8 bg-white border border-neutral-200/80 rounded-3xl flex flex-col justify-between hover:border-neutral-300 transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.02)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-2xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-900">
                      <pt.icon size={20} />
                    </div>
                    <span className="px-3 py-1 text-[11px] font-semibold text-neutral-700 bg-neutral-100 border border-neutral-200/80 rounded-full">
                      {pt.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-neutral-950 tracking-tight mb-2">
                    {pt.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {pt.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Benefits */}
        <div className="py-14 border-t border-dashed border-neutral-200">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 shadow-sm text-xs font-semibold text-neutral-800 mb-4">
              <span>Partnership Advantages</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 mb-3">
              Why Partner with <span className="text-neutral-900">TrustLayerLabs?</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-600">
              We make adding security testing to your service catalogue seamless, transparent, and developer-friendly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {partnerBenefits.map((item, i) => (
              <div key={i} className="p-7 bg-white border border-neutral-200/80 rounded-3xl space-y-3 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                    <CheckCircle2 size={14} />
                  </div>
                  <h3 className="text-sm font-bold text-neutral-950">{item.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed pl-8">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Embedded Contact Form */}
      <div className="mt-12">
        <ContactForm />
      </div>
    </div>
  );
}
