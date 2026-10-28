"use client";

import React from "react";
import Link from "next/link";
import { Check, ArrowRight, ShieldCheck, Clock, Layers } from "lucide-react";
import { PRICING_PACKAGES, OTHER_SERVICES, FOUNDING_CLIENT_CONFIG } from "@/lib/pricing-config";
import { trackPrimaryQuoteClick, trackPackageCtaClick } from "@/lib/analytics";

export default function PricingSection() {
  return (
    <section id="pricing" className="w-full bg-[#FAFAFA] px-4 sm:px-6 py-20 border-t border-dashed border-neutral-200 scroll-mt-24">
      <div className="max-w-[1140px] mx-auto w-full flex flex-col items-center">
        
        {/* Section Header */}
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 shadow-xs text-xs font-semibold text-neutral-800 mb-3">
            <ShieldCheck size={14} className="text-primary" />
            <span>Transparent Fixed-Scope Engagements</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 mb-4 font-sans">
            Fixed-Scope Packages &amp; Pricing
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-xl mx-auto font-sans">
            Transparent, sprint-aligned pricing for startups preparing for enterprise vendor security questionnaires and external compliance audits. Explore our{" "}
            <Link href="/services/api-security" className="text-neutral-900 font-semibold underline underline-offset-2 hover:text-primary">
              API Security
            </Link>{" "}
            and{" "}
            <Link href="/services/saas-vapt" className="text-neutral-900 font-semibold underline underline-offset-2 hover:text-primary">
              SaaS Pentesting
            </Link>{" "}
            scopes.
          </p>
        </div>

        {/* 3 Fixed-Scope Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full items-stretch mb-16">
          {PRICING_PACKAGES.map((pkg) => {
            const [priceAmount, ...taxParts] = pkg.priceInr.split(/\s*\+\s*/);
            const priceTax = taxParts.length > 0 ? `+ ${taxParts.join(" + ")}` : "";

            return (
              <div
                key={pkg.id}
                className={`p-7 sm:p-8 bg-white rounded-3xl border flex flex-col h-full transition-colors shadow-xs ${
                  pkg.popular 
                    ? "border-primary/40 ring-1 ring-primary/20 shadow-md relative" 
                    : "border-neutral-200/90"
                }`}
              >
                <div className="flex-1 flex flex-col">
                  {/* Header Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-neutral-100 min-h-[52px]">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-600">
                      {pkg.scope}
                    </span>
                    {pkg.badge && (
                      <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-md whitespace-nowrap shrink-0 ${
                        pkg.popular 
                          ? "bg-blue-50 text-primary border border-blue-200" 
                          : "bg-neutral-100 text-neutral-700"
                      }`}>
                        {pkg.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-neutral-950 font-sans mb-2 min-h-[56px] flex items-center">
                    {pkg.name}
                  </h3>

                  <p className="text-xs text-neutral-600 leading-relaxed mb-6 font-sans min-h-[54px]">
                    {pkg.description}
                  </p>

                  {/* Pricing Block */}
                  <div className="mb-6 p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80 space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
                      <span>Starting from</span>
                      <span>Fixed scope</span>
                    </div>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-2">
                      <div className="inline-flex items-baseline whitespace-nowrap shrink-0">
                        <span className="text-2xl sm:text-3xl font-bold text-neutral-950 font-mono tracking-tight whitespace-nowrap">
                          {priceAmount}
                        </span>
                        {priceTax && (
                          <span className="ml-1 text-[11px] sm:text-xs font-semibold font-mono text-neutral-500 whitespace-nowrap">
                            {priceTax}
                          </span>
                        )}
                      </div>
                      <span className="text-xs font-mono text-neutral-600 bg-white px-2 py-0.5 rounded border border-neutral-200 shrink-0">
                        ~ {pkg.priceUsd} USD
                      </span>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-neutral-200/70 text-xs font-semibold text-neutral-700 font-sans">
                      <div className="flex items-center gap-1.5">
                        <Clock size={12} className="text-neutral-500 shrink-0" />
                        <span>Turnaround: {pkg.timeline}</span>
                      </div>
                    </div>
                  </div>

                  {/* Inclusions List */}
                  <div className="space-y-2.5 text-xs text-neutral-700 font-sans mb-8 flex-1">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                      Every Engagement Includes:
                    </span>
                    {pkg.inclusions.map((inc, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                          <Check size={10} strokeWidth={3} />
                        </div>
                        <span className="leading-tight">{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-4 border-t border-dashed border-neutral-200 mt-auto">
                  <Link
                    href={`/free-assessment?package=${pkg.id}`}
                    onClick={() => {
                      trackPrimaryQuoteClick(`pricing_package_${pkg.id}`);
                      trackPackageCtaClick(pkg.id, "pricing_package_card");
                    }}
                    className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-full font-semibold text-xs tracking-tight transition-colors cursor-pointer min-h-[44px] bg-neutral-950 hover:bg-neutral-800 text-white shadow-md"
                  >
                    <span>Get a fixed-price quote in 24h</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note under packages indicating star means negotiable */}
        <p className="text-xs text-neutral-500 font-sans text-center mb-12 max-w-xl">
          Starting prices. Your final fixed price is confirmed within 24 hours after scoping. India prices exclude GST. Founding prices apply to the first {FOUNDING_CLIENT_CONFIG.slotsTotal} clients and may change afterwards.
        </p>

        {/* Other Services Link List (Narrowing the Homepage Offer while Preserving Routes) */}
        <div className="w-full max-w-4xl bg-white rounded-3xl border border-neutral-200/90 p-7 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-dashed border-neutral-200 gap-2">
            <div>
              <h3 className="text-base font-bold text-neutral-950 font-sans">
                More services
              </h3>
              <p className="text-xs text-neutral-500 mt-0.5">
                Full-stack offensive security capabilities available upon scoping request:
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-blue-700 transition-colors shrink-0"
            >
              <span>View complete services catalog</span>
              <ArrowRight size={12} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {OTHER_SERVICES.map((serv) => (
              <Link
                key={serv.name}
                href={serv.href}
                className="p-3.5 rounded-2xl bg-neutral-50 hover:bg-neutral-100/80 border border-neutral-200/70 transition-colors group flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-bold text-neutral-900 font-sans group-hover:text-primary transition-colors flex items-center justify-between">
                    <span>{serv.name}</span>
                    <ArrowRight size={12} className="text-neutral-400 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <p className="text-[11px] text-neutral-500 mt-1 leading-relaxed">
                    {serv.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-dashed border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-600">
            <span>Wondering why automated scanners miss authorization vulnerabilities?</span>
            <Link
              href="/why-manual-testing"
              className="font-semibold text-primary hover:text-blue-700 inline-flex items-center gap-1"
            >
              <span>Explore our guide on 8 critical attack surfaces</span>
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
