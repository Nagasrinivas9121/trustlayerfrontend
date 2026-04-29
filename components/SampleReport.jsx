"use client";

import { motion } from "framer-motion";
import { FileCheck, Download, CheckCircle, Shield } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function SampleReport() {
  return (
    <section className="py-24 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest mb-6">
              Verifiable Trust
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
              Executive-Ready <br /><span className="text-gradient">Deliverables</span>
            </h2>
            <p className="text-lg text-slate-500 mb-8 leading-relaxed">
              We don&apos;t just hand you an automated printout. Our final VAPT reports provide clear CVSS scoring, exact evidence, and developer-friendly remediation steps.
            </p>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900">OWASP Methodology</h4>
                  <p className="text-sm text-slate-500">Adherence to OWASP Top 10, ASVS, and SANS 25 standards.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900">CVSS v3.1 Scoring</h4>
                  <p className="text-sm text-slate-500">Universal risk metrics to prioritize the most critical patches.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900">Secure Testing Process</h4>
                  <p className="text-sm text-slate-500">Zero downtime guaranteed during exploitation phases.</p>
                </div>
              </li>
            </ul>

            <Link href="/contact" className="btn-primary inline-flex items-center">
              Talk to Security Expert
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-3xl transform rotate-3 scale-105"></div>
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-8 relative z-10 overflow-hidden group">
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-100">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 relative rounded-md shadow-sm overflow-hidden bg-slate-900">
                    <Image src="/logo.jpeg" alt="TrustLayer Labs Logo" fill className="object-contain" />
                  </div>
                  <span className="font-black text-xl text-slate-900">TrustLayer<span className="text-blue-600">Labs</span></span>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Confidential</div>
                  <div className="text-sm font-bold text-slate-900">VAPT Report</div>
                </div>
              </div>
              
              <div className="space-y-6 blur-[3px] group-hover:blur-[1px] transition-all duration-500 select-none opacity-60">
                <div className="h-4 bg-slate-200 rounded w-1/3"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-slate-100 rounded w-full"></div>
                  <div className="h-3 bg-slate-100 rounded w-5/6"></div>
                  <div className="h-3 bg-slate-100 rounded w-4/6"></div>
                </div>
                <div className="grid grid-cols-3 gap-4 py-4">
                  <div className="h-16 bg-red-50 rounded-lg border border-red-100"></div>
                  <div className="h-16 bg-amber-50 rounded-lg border border-amber-100"></div>
                  <div className="h-16 bg-blue-50 rounded-lg border border-blue-100"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-12 bg-slate-50 rounded-lg border border-slate-100"></div>
                  <div className="h-12 bg-slate-50 rounded-lg border border-slate-100"></div>
                </div>
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/40 backdrop-blur-[2px]">
                <div className="bg-white px-6 py-4 rounded-2xl shadow-xl border border-slate-100 text-center transform group-hover:scale-105 transition-transform">
                  <FileCheck className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                  <div className="font-bold text-slate-900">Sample Report Preview</div>
                  <div className="text-xs text-slate-500 mt-1">See how we document vulnerabilities</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
