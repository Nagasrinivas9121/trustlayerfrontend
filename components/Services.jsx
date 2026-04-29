"use client";

import { Shield, Zap, Cloud, Lock } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Web App VAPT",
    description: "Deep manual penetration testing for modern web applications to uncover logic flaws and critical vulnerabilities.",
    icon: <Globe className="w-6 h-6 text-blue-600" />,
    color: "bg-blue-50",
    href: "/web-application-security"
  },
  {
    title: "API Security",
    description: "Comprehensive testing of REST and GraphQL endpoints for broken access control, injection, and data exposure.",
    icon: <Zap className="w-6 h-6 text-amber-600" />,
    color: "bg-amber-50",
    href: "/api-security-testing"
  },
  {
    title: "Cloud Security Audit",
    description: "Configuration review for AWS, GCP, and Azure environments to prevent data leaks and unauthorized access.",
    icon: <Cloud className="w-6 h-6 text-sky-600" />,
    color: "bg-sky-50",
    href: "/cloud-security"
  },
  {
    title: "VAPT Services India",
    description: "Gap assessments and complete penetration testing services customized for Indian enterprises and CERT-In compliance.",
    icon: <Lock className="w-6 h-6 text-indigo-600" />,
    color: "bg-indigo-50",
    href: "/vapt-services"
  }
];

// Re-importing Globe here since I used it above
import { Globe } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4">
            Our Expertise
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
            Comprehensive <span className="text-gradient">Security</span> Solutions
          </h2>
          <p className="text-lg text-slate-500">
            We move beyond automated scanners. Our certified experts deliver actionable insights to secure your infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Link href={service.href} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="soft-card p-8 group hover:-translate-y-1 transition-transform duration-300 h-full flex flex-col"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${service.color} group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed flex-grow">{service.description}</p>
                <div className="mt-6 text-sm font-bold text-blue-600 flex items-center">
                  Learn more <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
