"use client";

import React from "react";
import Image from "next/image";
import { MousePointer, ShieldCheck } from "lucide-react";

export default function StatementSection() {
  return (
    <div id="statement" className="w-full my-8 px-4 sm:px-6">
      <section className="w-full dashed-y-custom py-2">
        <div className="max-w-[1050px] mx-auto w-full flex flex-col text-center items-center justify-center gap-4 py-12 sm:py-14 px-6 dashed-x-custom bg-white/70 rounded-3xl relative overflow-hidden">
          
          {/* Floating Cursor Badge (CodeDale Signature) */}
          <div className="absolute top-5 right-6 hidden sm:flex items-center gap-1.5 px-3 py-1 bg-white rounded-full border border-black/10 shadow-sm text-xs font-semibold text-neutral-800 -rotate-3 hover:rotate-0 transition-transform">
            <MousePointer size={13} className="text-primary fill-primary" />
            <span>Practitioner Philosophy</span>
          </div>

          {/* Practitioner Avatar with Verification Badge */}
          <div className="relative">
            <Image
              src="/nagasrinivasarao.jpg"
              alt="Nagasrinivasa Rao, Lead Security Architect"
              width={64}
              height={64}
              className="w-14 h-14 object-cover rounded-full shrink-0 border-2 border-white shadow-sm"
            />
            <span className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full flex items-center justify-center text-[8px] text-white font-bold">
              ✓
            </span>
          </div>

          {/* Statement Text */}
          <div className="flex flex-col items-center justify-center gap-2 max-w-2xl mx-auto">
            <p className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight leading-[1.35] text-neutral-900">
              &ldquo;It&apos;s not just running an automated scan — it&apos;s understanding the multi-tenant business logic and authorization boundaries humans write.&rdquo;
            </p>

            {/* Attribution */}
            <div className="mt-3 text-center">
              <span className="text-sm font-semibold text-neutral-900 block">
                Nagasrinivasa Rao
              </span>
              <span className="text-xs text-neutral-500 block mt-0.5">
                Founder &amp; Lead Security Architect · CEH · CWL C3SA
              </span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
