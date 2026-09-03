import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kubernetes & Container Security",
  description: "Security assessments for Kubernetes clusters, RBAC roles, container base images, and Pod Security Admission policies.",
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/services/kubernetes-security",
  },
};

export default function KubernetesSecurityPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Kubernetes & Container Security",
        "provider": { "@id": "https://www.trustlayerlabs.co.in/#organization" },
        "serviceType": "Container Security Auditing",
        "description": "Security assessments for Kubernetes clusters, RBAC roles, container base images, and Pod Security Admission policies.",
        "areaServed": ["India", "Global"],
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trustlayerlabs.co.in" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.trustlayerlabs.co.in/services" },
          { "@type": "ListItem", "position": 3, "name": "Kubernetes & Container Security", "item": "https://www.trustlayerlabs.co.in/services/kubernetes-security" },
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
        <Link href="/services" className="inline-flex items-center text-xs uppercase tracking-widest text-textSecondary hover:text-textPrimary transition-colors gap-2 mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" /> Back to All Services
        </Link>
        <div className="mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-widest mb-4">
            <span>Container Security</span>
          </div>
          <h1 className="heading-1 mb-6 text-textPrimary font-extrabold tracking-tight">
            Kubernetes & Container <span className="text-primary">Security Audits</span>
          </h1>
          <p className="body-text text-base max-w-3xl text-textSecondary leading-relaxed">
            In-depth security reviews for K8s clusters, RBAC authorization matrices, Helm charts, and container pod isolation controls.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="p-6 bg-surface border border-border/80 rounded-xl space-y-3">
            <h3 className="text-sm font-bold text-textPrimary font-sans">K8s RBAC Permission Matrix Audit</h3>
            <p className="text-xs text-textSecondary leading-relaxed">
              Identifying over-privileged ServiceAccounts and ClusterRoles that could allow container breakouts or cluster takeovers.
            </p>
          </div>
          <div className="p-6 bg-surface border border-border/80 rounded-xl space-y-3">
            <h3 className="text-sm font-bold text-textPrimary font-sans">Pod Security & Image CVE Scanning</h3>
            <p className="text-xs text-textSecondary leading-relaxed">
              Evaluating Pod Security Admission (PSA) policies to prevent containers from running as privileged root users.
            </p>
          </div>
        </div>
        <div className="p-8 bg-surface border border-primary/30 rounded-2xl text-center space-y-4">
          <h3 className="text-xl font-bold text-textPrimary">Book Kubernetes Security Audit</h3>
          <p className="text-xs text-textSecondary max-w-xl mx-auto">
            Harden your K8s deployment against container breakouts and cluster compromise.
          </p>
          <div className="pt-2">
            <Link href="https://calendar.app.google/jnamj3gawxVunPJm9" target="_blank" className="inline-flex items-center gap-2 px-8 py-3 bg-[#0a0a0a] text-white font-bold text-xs uppercase tracking-wider rounded-full hover:bg-zinc-800 transition-colors">
              Book K8s Audit <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
