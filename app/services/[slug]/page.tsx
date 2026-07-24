import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Shield, CheckCircle, Code, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { SERVICES } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate static params for all custom services for full SSG pre-rendering
export async function generateStaticParams() {
  // We generate params for all services that are NOT already statically created
  const customSlugs = [
    "saas-vapt",
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
    "owasp-api-security"
  ];
  return customSlugs.map((slug) => ({ slug }));
}

// Dynamically generate SEO Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: `${service.title} | Elite VAPT & CyberSecurity Audit Services`,
    description: service.description,
    alternates: {
      canonical: `https://www.trustlayerlabs.co.in/services/${slug}`,
    },
  };
}

export default async function ServiceSlugPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": service.title,
        "provider": { "@id": "https://www.trustlayerlabs.co.in/#organization" },
        "serviceType": service.title,
        "description": service.description,
        "areaServed": ["India", "Global"],
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trustlayerlabs.co.in" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.trustlayerlabs.co.in/services" },
          { "@type": "ListItem", "position": 3, "name": service.title, "item": `https://www.trustlayerlabs.co.in/services/${slug}` },
        ],
      },
    ],
  };

  return (
    <div className="bg-background min-h-screen pt-32 pb-24 font-sans text-textPrimary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="section-container max-w-5xl mx-auto">
        
        {/* Back navigation */}
        <Link 
          href="/services" 
          className="inline-flex items-center text-xs uppercase tracking-widest text-textSecondary hover:text-textPrimary transition-colors gap-2 mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
          Back to All Services
        </Link>

        {/* Hero Section */}
        <div className="mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-widest mb-4">
            <span>Specialized Penetration Test</span>
          </div>
          <h1 className="heading-1 mb-6 text-textPrimary font-extrabold tracking-tight">
            {service.title} <span className="text-primary">Services</span>
          </h1>
          <p className="body-text text-base max-w-3xl text-textSecondary leading-relaxed">
            {service.description} Our manual auditing process uses real threat triggers to ensure your infrastructure and compliance controls are completely hardened against cyber attacks.
          </p>
        </div>

        {/* Details & Specs Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Info */}
          <div className="md:col-span-8 space-y-6">
            <div className="premium-card p-8 bg-surface border border-border rounded-2xl space-y-4">
              <h2 className="text-lg font-bold text-textPrimary font-sans">Methodology & Focus Areas</h2>
              <p className="text-xs text-textSecondary leading-relaxed">
                Our approach combines active reconnaissance with manual exploitation of complex logic flows. We map access privilege boundaries and check code vulnerabilities step-by-step.
              </p>
              <div className="p-4 bg-zinc-50 border border-border rounded-xl space-y-2 text-xs">
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider block">Target Outcome:</span>
                <p className="text-textPrimary leading-relaxed">{service.outcome}</p>
              </div>
            </div>

            {/* Deliverables Box */}
            <div className="premium-card p-8 bg-surface border border-border rounded-2xl space-y-4">
              <h3 className="text-base font-bold text-textPrimary font-sans">Audit Deliverables</h3>
              <ul className="space-y-3.5 text-xs text-textSecondary">
                {service.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-textPrimary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar Specifications */}
          <div className="md:col-span-4 space-y-6">
            <div className="premium-card p-6 bg-surface border border-border rounded-xl space-y-5">
              <div>
                <h4 className="text-[10px] font-bold text-textSecondary uppercase tracking-wider mb-2">Audit Timeline</h4>
                <span className="px-3 py-1.5 bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary rounded-md uppercase font-mono block text-center">
                  🕒 {service.duration}
                </span>
              </div>

              <div>
                <h4 className="text-[10px] font-bold text-textSecondary uppercase tracking-wider mb-2">Risk Priority</h4>
                <span className="px-3 py-1.5 bg-critical/10 border border-critical/20 text-[10px] font-bold text-critical rounded-md uppercase font-mono block text-center">
                  ⚠️ {service.severity}
                </span>
              </div>

              <div className="border-t border-border/40 pt-4">
                <h4 className="text-[10px] font-bold text-textSecondary uppercase tracking-wider mb-3">Tools & Ecosystem</h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-zinc-100 border border-border rounded-md text-[9px] font-mono text-textPrimary">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Booking CTA Banner */}
        <div className="p-8 bg-surface border border-primary/30 rounded-2xl text-center space-y-4 shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full pointer-events-none -z-10" />
          <h3 className="text-xl font-bold text-textPrimary font-sans">Book a Free {service.title} Scoping Call</h3>
          <p className="text-xs text-textSecondary max-w-xl mx-auto">
            Schedule a confidential call with our lead security architect to review your system, scoping size, and timeline requirements.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="https://calendar.app.google/jnamj3gawxVunPJm9"
              target="_blank"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#0a0a0a] text-white font-bold text-xs uppercase tracking-wider rounded-full hover:bg-zinc-800 transition-colors shadow-sm"
            >
              Schedule Scoping Call <ArrowRight size={14} />
            </Link>
            <Link
              href="/free-assessment"
              className="inline-flex items-center gap-2 px-8 py-3 bg-surface border border-border text-textPrimary font-bold text-xs uppercase tracking-wider rounded-full hover:border-zinc-400 transition-colors shadow-sm"
            >
              Get Free VAPT Consultation
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
