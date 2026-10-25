import React from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  Zap, 
  DollarSign, 
  UserCheck, 
  Terminal, 
  RefreshCw, 
  ArrowRight 
} from "lucide-react";
import { trackPrimaryQuoteClick } from "@/lib/analytics";

interface Benefit {
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
}

const BENEFITS: Benefit[] = [
  {
    title: "Impact-Driven Logic Testing",
    description: "Every assessment probes authorization boundaries, BOLA, and multi-step workflows that automated scanners overlook.",
    icon: <ShieldCheck size={34} className="text-primary" />,
  },
  {
    title: "Fast 48h Critical Briefings",
    description: "For tight enterprise deal or audit deadlines, we alert your engineers to critical findings within 48 hours to start patching.",
    icon: <Zap size={34} className="text-amber-500" />,
  },
  {
    title: "Transparent & Fair Pricing",
    description: (
      <span>
        Fixed-scope packages starting from ₹9,999 / $129.{" "}
        <Link href="/#pricing" className="text-primary font-semibold underline hover:text-blue-700">
          View packages &amp; pricing →
        </Link>
      </span>
    ),
    icon: <DollarSign size={34} className="text-emerald-600" />,
  },
  {
    title: "Direct Senior Pentester Access",
    description: "Collaborate directly with certified practitioners (CEH, CWL C3SA, ISO 27001 Lead Auditor). No junior proxies or account managers.",
    icon: <UserCheck size={34} className="text-blue-600" />,
  },
  {
    title: "Developer-Ready PoCs with cURL",
    description: "Every finding includes exact reproduction steps, cURL scripts, and practical code snippets for rapid remediation.",
    icon: <Terminal size={34} className="text-indigo-600" />,
  },
  {
    title: "Complimentary 30-Day Retesting",
    description: "We verify your deployed fixes at zero extra cost and issue an official Retest Attestation Letter for your enterprise buyers.",
    icon: <RefreshCw size={34} className="text-primary" />,
  },
];

export default function BenefitsSection() {
  return (
    <div id="why-choose-us" className="w-full bg-[#FAFAFA] px-4 sm:px-6 py-20 border-t border-dashed border-neutral-200">
      <section className="max-w-[1140px] mx-auto dashed-x-custom w-full flex flex-col items-center justify-center px-4">
        
        {/* Section Header */}
        <div className="w-full max-w-xl mx-auto flex flex-col items-center justify-center text-center py-8 sm:py-12 gap-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/80 shadow-sm text-xs font-semibold text-neutral-800 mb-2">
            <ShieldCheck size={14} className="text-primary" />
            <span>Our Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 mb-3 font-sans">
            Why Choose TrustLayer Labs?
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-md font-sans">
            Discover the advantages of partnering with an offensive security team built for speed, depth, and engineering collaboration:
          </p>
        </div>

        {/* 6 Grid Benefits (CodeDale Signature Dashed Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full items-start justify-start dashed-y-custom gap-y-12 gap-x-8 px-4 sm:px-8 py-14">
          {BENEFITS.map((benefit, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center gap-3.5 text-center group">
              <div className="w-20 h-20 rounded-2xl bg-white shadow-xs border border-black/5 flex items-center justify-center group-hover:scale-110 group-hover:-translate-y-1 group-hover:shadow-md transition-all duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-neutral-950 tracking-tight leading-snug font-sans">
                {benefit.title}
              </h3>
              <div className="w-full max-w-[300px]">
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CodeDale Rolling Call-to-Action Button */}
        <div className="my-10">
          <Link
            href="/free-assessment"
            onClick={() => {
              trackPrimaryQuoteClick("benefits_rolling_button");
            }}
            className="group relative px-8 py-4 rounded-full flex items-center justify-center overflow-hidden cta-shadow bg-[#151619] hover:bg-[#252830] text-white transition-all duration-300 cursor-pointer shadow-lg active:scale-98 min-h-[46px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
          >
            <div className="flex items-center gap-2.5 text-sm font-semibold tracking-tight">
              <span>Get a fixed-price quote in 24h</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>

      </section>
    </div>
  );
}
