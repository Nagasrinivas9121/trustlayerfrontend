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
        <div className="mb-16">
          <h2 className="text-xl font-bold text-textPrimary font-sans mb-6">
            Kubernetes Cluster Security Audit Modules
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-surface border border-border/80 rounded-xl space-y-3 shadow-sm">
              <h3 className="text-sm font-bold text-textPrimary font-sans">1. K8s RBAC Permission Matrix Audit</h3>
              <p className="text-xs text-textSecondary leading-relaxed">
                Identifying over-privileged ServiceAccounts, ClusterRoles, and RoleBindings that could allow container breakouts, API credential scraping, or full cluster takeover.
              </p>
            </div>
            <div className="p-6 bg-surface border border-border/80 rounded-xl space-y-3 shadow-sm">
              <h3 className="text-sm font-bold text-textPrimary font-sans">2. Pod Security & Image CVE Scanning</h3>
              <p className="text-xs text-textSecondary leading-relaxed">
                Evaluating Pod Security Admission (PSA) policies to prevent containers from running as privileged root, mounting host directories, or bypassing Linux seccomp/AppArmor profiles.
              </p>
            </div>
            <div className="p-6 bg-surface border border-border/80 rounded-xl space-y-3 shadow-sm">
              <h3 className="text-sm font-bold text-textPrimary font-sans">3. Network Policies & Egress Isolation</h3>
              <p className="text-xs text-textSecondary leading-relaxed">
                Auditing CNI network policies (Calico, Cilium) to enforce strict zero-trust pod-to-pod segmentation and prevent unauthorized lateral movement and metadata server access.
              </p>
            </div>
            <div className="p-6 bg-surface border border-border/80 rounded-xl space-y-3 shadow-sm">
              <h3 className="text-sm font-bold text-textPrimary font-sans">4. Secret Management & Control Plane Hardening</h3>
              <p className="text-xs text-textSecondary leading-relaxed">
                Reviewing etcd encryption at rest, API server TLS configurations, admission controllers, and integrating external vaults (AWS Secrets Manager, HashiCorp Vault) via CSI drivers.
              </p>
            </div>
          </div>
        </div>

        {/* Deliverables Section */}
        <div className="mb-16 bg-surface border border-border/80 rounded-2xl p-8 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-textPrimary font-sans">
            Kubernetes Hardening & Compliance Deliverables
          </h2>
          <p className="text-xs text-textSecondary leading-relaxed font-sans">
            Our certified Kubernetes practitioners assess your EKS, GKE, AKS, or bare-metal clusters against CIS Kubernetes Benchmarks. We provide ready-to-apply YAML manifests, Helm values overrides, and network policy definitions to remediate security gaps without causing application downtime.
          </p>
        </div>

        {/* Kubernetes Security FAQs */}
        <div className="mb-16 bg-surface border border-border/80 rounded-2xl p-6 sm:p-8 shadow-sm">
          <h2 className="text-lg sm:text-xl font-bold text-textPrimary font-sans mb-6">
            Frequently Asked Kubernetes Security Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-textSecondary">
            <div className="space-y-2">
              <h3 className="text-xs sm:text-sm font-bold text-textPrimary font-sans">
                How do you audit Kubernetes clusters without impacting production workloads?
              </h3>
              <p className="leading-relaxed">
                We utilize read-only audit roles, offline manifest inspection, and passive configuration scanning against live control planes. Simulated attack scenarios and breakout vectors are executed exclusively in dedicated staging environments or using calibrated, non-destructive payloads.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xs sm:text-sm font-bold text-textPrimary font-sans">
                Do you assess managed cloud services like AWS EKS, GCP GKE, and Azure AKS?
              </h3>
              <p className="leading-relaxed">
                Yes. In addition to core Kubernetes objects, we assess cloud IAM role-binding mappings (AWS IRSA, GCP Workload Identity, Azure Workload Identity), managed node group hardening, private endpoint configurations, and control plane audit logging.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xs sm:text-sm font-bold text-textPrimary font-sans">
                Which compliance and security standards are referenced during the audit?
              </h3>
              <p className="leading-relaxed">
                We benchmark your cluster configurations against CIS Kubernetes Benchmark v1.8+, NSA/CISA Kubernetes Hardening Guidance, MITRE ATT&CK for Containers, and relevant SOC 2 / ISO 27001 technical control requirements.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xs sm:text-sm font-bold text-textPrimary font-sans">
                What remediations are delivered for detected cluster vulnerabilities?
              </h3>
              <p className="leading-relaxed">
                Every vulnerability report includes reproducible proof-of-concept steps, severity scoring via CVSS v3.1, ready-to-merge Kubernetes NetworkPolicy manifests, RBAC least-privilege role definitions, and 30 days of re-testing support.
              </p>
            </div>
          </div>
        </div>

        <div className="p-8 bg-surface border border-primary/30 rounded-2xl text-center space-y-4">
          <h2 className="text-xl font-bold text-textPrimary font-sans">Book Kubernetes Security Audit</h2>
          <p className="text-xs text-textSecondary max-w-xl mx-auto">
            Harden your K8s deployment against container breakouts, supply-chain exploits, and cluster compromise.
          </p>
          <div className="pt-2">
            <Link href="https://cal.com/nagasrinivasarao/30min" target="_blank" className="inline-flex items-center gap-2 px-8 py-3 bg-[#0a0a0a] text-white font-bold text-xs uppercase tracking-wider rounded-full hover:bg-zinc-800 transition-colors">
              Book K8s Audit <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
