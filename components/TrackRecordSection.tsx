"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, ExternalLink, Award, Linkedin, CheckCircle2, FileCode } from "lucide-react";
import { TRACK_RECORD_ENTRIES, FOUNDER_PROFILES } from "@/lib/track-record";
import { PROOF_ITEMS } from "@/lib/proof-items";

export default function TrackRecordSection() {
  // Auto-hide the section completely if there are no entries
  if (!TRACK_RECORD_ENTRIES || TRACK_RECORD_ENTRIES.length === 0) {
    return null;
  }

  return (
    <section id="track-record" className="w-full bg-[#FAFAFA] px-4 sm:px-6 py-20 border-t border-dashed border-neutral-200">
      <div className="max-w-[1140px] mx-auto w-full flex flex-col items-center">
        
        {/* Section Header */}
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 shadow-xs text-xs font-semibold text-neutral-800 mb-3">
            <Award size={14} className="text-primary" />
            <span>Practitioner Research</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 mb-4 font-sans">
            Research &amp; Write-ups
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-xl mx-auto font-sans">
            Technical write-ups from our team. You can verify our practitioners through the LinkedIn profiles and credential links on this page.
          </p>
        </div>

        {/* Track Record List */}
        <div className="w-full max-w-4xl space-y-4 mb-10">
          {TRACK_RECORD_ENTRIES.map((record) => (
            <div
              key={record.id}
              className="p-6 bg-white rounded-3xl border border-neutral-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1.5 min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-md">
                    {record.type}
                  </span>
                  {record.isPlaceholder && (
                    <span className="text-[10px] font-mono font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md">
                      Sample / Pending Advisory Entry
                    </span>
                  )}
                  <span className="text-[11px] font-mono text-neutral-400">
                    {record.date}
                  </span>
                </div>

                <h3 className="text-base font-bold text-neutral-950 font-sans tracking-tight">
                  {record.title}
                </h3>

                <p className="text-xs text-neutral-600 font-sans leading-relaxed">
                  {record.summary}
                </p>

                <div className="text-[11px] font-mono text-neutral-500 pt-0.5">
                  Scope / Entity: <strong className="text-neutral-800">{record.targetOrVendor}</strong>
                </div>
              </div>

              <div className="shrink-0 pt-2 sm:pt-0">
                {record.link.startsWith("/") ? (
                  <Link
                    href={record.link}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-blue-700 bg-blue-50 hover:bg-blue-100/80 px-3.5 py-2 rounded-xl transition-colors border border-blue-200"
                  >
                    <span>Inspect Research Scenario</span>
                    <ExternalLink size={12} />
                  </Link>
                ) : (
                  <a
                    href={record.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-blue-700 bg-blue-50 hover:bg-blue-100/80 px-3.5 py-2 rounded-xl transition-colors border border-blue-200"
                  >
                    <span>Inspect Advisory</span>
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Real Proof Items (Hidden when empty) */}
        {PROOF_ITEMS && PROOF_ITEMS.length > 0 && (
          <div className="w-full max-w-4xl space-y-3 mb-10">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 mb-2">
              Verified Proof Items
            </h3>
            <div className="bg-white rounded-2xl border border-neutral-200 divide-y divide-neutral-100 p-4">
              {PROOF_ITEMS.map((item, idx) => (
                <div key={idx} className="py-2.5 flex items-center justify-between gap-4 text-xs font-sans">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-[10px] uppercase font-bold text-primary bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
                      {item.type}
                    </span>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-neutral-900 hover:text-primary transition-colors inline-flex items-center gap-1"
                    >
                      <span>{item.title}</span>
                      <ExternalLink size={11} />
                    </a>
                  </div>
                  <span className="font-mono text-neutral-400 text-[11px] shrink-0">
                    {item.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Security Research Scenarios Link */}
        <div className="mb-12 text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-blue-700 transition-colors underline underline-offset-4"
          >
            <span>Explore Security Research Scenarios</span>
            <ExternalLink size={12} />
          </Link>
        </div>

        {/* Verified Founder Profiles Strip */}
        <div className="w-full max-w-4xl p-6 sm:p-7 bg-white rounded-3xl border border-neutral-200/90 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-5 border-b border-dashed border-neutral-200 gap-2">
            <div>
              <h3 className="text-sm font-bold text-neutral-950 font-sans uppercase tracking-wider">
                Practitioner Identity Verification
              </h3>
              <p className="text-xs text-neutral-500 mt-0.5">
                Every client assessment is conducted directly by our certified founding team:
              </p>
            </div>
            <span className="text-xs font-mono text-emerald-700 font-bold flex items-center gap-1">
              <CheckCircle2 size={13} />
              Identity Confirmed
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {FOUNDER_PROFILES.map((profile) => (
              <div
                key={profile.name}
                className="p-4 bg-neutral-50 rounded-2xl border border-neutral-200 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Image
                      src={profile.avatar}
                      alt={profile.name}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover border border-neutral-200"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-neutral-950 font-sans">
                        {profile.name}
                      </h4>
                      <p className="text-[10px] font-mono text-primary font-semibold">
                        {profile.education}
                      </p>
                    </div>
                  </div>
                  <p className="text-[11px] text-neutral-600 font-sans">
                    {profile.credentials}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-neutral-200/60">
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-700 hover:text-blue-600 transition-colors"
                  >
                    <Linkedin size={13} className="text-blue-600" />
                    <span>LinkedIn Profile ↗</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
