"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Script from "next/script";

const faqs = [
  {
    question: "What is VAPT in cybersecurity?",
    answer: "VAPT (Vulnerability Assessment and Penetration Testing) is a comprehensive security testing process. Vulnerability Assessment identifies potential flaws using automated tools, while Penetration Testing involves ethical hackers manually exploiting those flaws to determine the real-world risk."
  },
  {
    question: "Why do companies in India need VAPT services?",
    answer: "With rising cyber threats, Indian enterprises need VAPT to protect sensitive customer data, prevent financial losses, and comply with regulatory frameworks like CERT-In, RBI guidelines, and DPDP Act. It's a critical component of a proactive security strategy."
  },
  {
    question: "How often should we conduct penetration testing?",
    answer: "Industry best practices and compliance standards (like SOC2, ISO 27001) recommend conducting comprehensive VAPT at least annually. Additionally, you should test whenever significant changes are made to your application, infrastructure, or APIs."
  },
  {
    question: "Do you follow the OWASP Top 10 methodology?",
    answer: "Yes, our manual penetration testing strictly adheres to the latest OWASP Top 10, ASVS, and SANS Top 25 frameworks. We ensure all major security risks, including injection flaws, broken authentication, and business logic errors, are thoroughly tested."
  },
  {
    question: "Will the VAPT scan disrupt our live application?",
    answer: "No. Our automated scanning and manual exploitation processes are designed to be non-intrusive. We coordinate closely with your engineering team to ensure zero downtime and safe testing of production environments."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <Script id="faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <div className="max-w-[800px] mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4">
            Got Questions?
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-slate-500">
            Everything you need to know about our VAPT services and security testing methodologies.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`border rounded-2xl overflow-hidden transition-colors ${openIndex === index ? 'border-blue-200 bg-blue-50/30' : 'border-slate-200 bg-white hover:border-blue-100'}`}
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="font-bold text-slate-900 pr-8">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-blue-600 transition-transform flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 pt-0 text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
