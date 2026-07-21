import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud Security Assessment | AWS, GCP & Azure IAM Audits",
  description: "Comprehensive AWS, GCP, and Azure cloud security configuration audits. Eliminate IAM privilege creep, S3 bucket exposure, and unencrypted data assets.",
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/services/cloud-security",
  },
};

export default function CloudSecurityPage() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-24 font-sans text-textPrimary">
      <div className="section-container max-w-5xl mx-auto">
        <Link href="/services" className="inline-flex items-center text-xs uppercase tracking-widest text-textSecondary hover:text-textPrimary transition-colors gap-2 mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" /> Back to All Services
        </Link>
        <div className="mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-widest mb-4">
            <span>Cloud Architecture Audit</span>
          </div>
          <h1 className="heading-1 mb-6 text-textPrimary font-extrabold tracking-tight">
            Cloud Security <span className="text-primary">Assessment Services</span>
          </h1>
          <p className="body-text text-base max-w-3xl text-textSecondary leading-relaxed">
            Configuration and IAM privilege reviews across AWS, GCP, and Azure aligned with CIS Benchmarks to eliminate cloud data leaks.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="p-6 bg-surface border border-border/80 rounded-xl space-y-3">
            <h3 className="text-sm font-bold text-textPrimary font-sans">AWS IAM & Role Hardening</h3>
            <p className="text-xs text-textSecondary leading-relaxed">
              Mapping principal rights, eliminating wildcard permissions, and enforcing strict least-privilege security policies.
            </p>
          </div>
          <div className="p-6 bg-surface border border-border/80 rounded-xl space-y-3">
            <h3 className="text-sm font-bold text-textPrimary font-sans">S3 & Data Bucket Exposure Check</h3>
            <p className="text-xs text-textSecondary leading-relaxed">
              Verifying public bucket block policies, pre-signed URL configurations, and CloudFront CDN signed token protections.
            </p>
          </div>
        </div>
        <div className="p-8 bg-surface border border-primary/30 rounded-2xl text-center space-y-4">
          <h3 className="text-xl font-bold text-textPrimary">Book Cloud Audit</h3>
          <p className="text-xs text-textSecondary max-w-xl mx-auto">
            Harden your AWS or GCP cloud environment in 4 to 6 days.
          </p>
          <div className="pt-2">
            <Link href="https://calendar.app.google/jnamj3gawxVunPJm9" target="_blank" className="inline-flex items-center gap-2 px-8 py-3 bg-[#0a0a0a] text-white font-bold text-xs uppercase tracking-wider rounded-full hover:bg-zinc-800 transition-colors">
              Book Cloud Audit <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
