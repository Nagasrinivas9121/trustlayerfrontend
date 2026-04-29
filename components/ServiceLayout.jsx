"use client";

import { motion } from "framer-motion";
import { CheckCircle, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import CTA from "./CTA";

export default function ServiceLayout({ title, description, problem, solution, outcomes, benefits, process, faqs }) {
  return (
    <div className="pt-32 pb-0">
      {/* Hero Section */}
      <section className="relative py-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-[1000px] mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
          >
            {title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-[700px] mx-auto mb-10"
          >
            {description}
          </motion.p>
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
          >
            <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-colors">
              Talk to Expert <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-24 bg-white">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <div className="text-red-600 font-bold uppercase tracking-widest text-sm mb-4">The Challenge</div>
              <h2 className="text-3xl font-black text-slate-900 mb-6">{problem.title}</h2>
              <p className="text-slate-600 leading-relaxed">{problem.description}</p>
            </div>
            <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100">
              <div className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Our Solution</div>
              <h2 className="text-2xl font-black text-slate-900 mb-4">{solution.title}</h2>
              <p className="text-slate-600 leading-relaxed mb-6">{solution.description}</p>
              <ul className="space-y-3">
                {outcomes.map((outcome, i) => (
                  <li key={i} className="flex items-start text-sm font-bold text-slate-800">
                    <ShieldCheck className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900">Key Benefits</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="max-w-[800px] mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-12">How We Test</h2>
          <div className="space-y-8 text-left">
            {process.map((step, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6 p-6 border rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-black flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[800px] mx-auto px-4">
          <h2 className="text-3xl font-black text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-2">{faq.question}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
