"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Target, Lock } from "lucide-react";

const aboutFeatures = [
  {
    icon: Target,
    title: "Offensive Security Focus",
    desc: "We don't just run automated scanners. We manually hunt for complex business logic flaws and API vulnerabilities that automated tools miss."
  },
  {
    icon: Lock,
    title: "AI & SaaS Expertise",
    desc: "Deep understanding of modern tech stacks, cloud architectures, and the unique security challenges faced by rapidly scaling startups."
  },
  {
    icon: Shield,
    title: "Compliance Readiness",
    desc: "We bridge the gap between technical security and GRC, ensuring your penetration tests map directly to SOC2, ISO 27001, and other frameworks."
  }
];

export default function About() {
  return (
    <section className="py-24 bg-background border-t border-border/40" id="about">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-secondary/60 border border-border/50 rounded-full text-[11px] font-semibold text-primary uppercase tracking-wider mb-8">
              <span>About TrustLayer Labs</span>
            </div>
            
            <h2 className="heading-2 mb-6">
              Securing the next generation of <span className="text-primary">SaaS & AI platforms</span>
            </h2>
            
            <p className="body-text text-lg mb-8">
              TrustLayer Labs is a specialized cybersecurity firm focused on securing rapidly growing technology companies. We combine deep offensive security expertise with a streamlined approach to compliance.
            </p>
            
            <p className="body-text text-lg mb-8">
              Our mission is to help startups build trust, prevent data breaches, and accelerate enterprise deal closures by providing agency-grade API security and GRC readiness.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {aboutFeatures.map((feature, i) => (
              <div key={i} className="flex gap-4 p-6 bg-secondary/30 border border-border/40 rounded-xl hover:border-primary/30 transition-colors">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 bg-background border border-border/60 rounded-xl flex items-center justify-center shadow-sm">
                    <feature.icon size={20} className="text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
