"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    quote: "TrustLayer Labs didn't just run a Nessus scan; their manual API security testing found two critical logic flaws that our previous vendor completely missed. Their 48-hour turnaround is unmatched in India.",
    author: "Rahul S.",
    role: "CTO, Series B Fintech",
    image: "https://i.pravatar.cc/100?img=11"
  },
  {
    quote: "The remediation report was exactly what our developers needed. Clear, concise, and actionable. They are our go-to penetration testing company for all future compliance audits.",
    author: "Priya M.",
    role: "VP of Engineering, HealthTech",
    image: "https://i.pravatar.cc/100?img=47"
  },
  {
    quote: "We required a rigorous VAPT service before launching our new AWS infrastructure. Their deep cloud security audit safely identified misconfigurations that saved us from massive data exposure.",
    author: "Vikram K.",
    role: "CISO, Enterprise E-commerce",
    image: "https://i.pravatar.cc/100?img=33"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Trusted by Security Leaders
          </h2>
          <p className="text-lg text-slate-500 font-medium">Real outcomes from companies that take security seriously.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 rounded-3xl flex flex-col justify-between"
            >
              <div>
                <Quote className="w-10 h-10 text-blue-100 mb-6" />
                <p className="text-slate-700 font-medium text-lg leading-relaxed mb-8 italic">
                  &quot;{t.quote}&quot;
                </p>
              </div>
              <div className="flex items-center space-x-4 pt-6 border-t border-slate-100">
                <div className="w-12 h-12 rounded-full overflow-hidden relative">
                  <Image 
                    src={t.image} 
                    alt={t.author} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover" 
                  />
                </div>
                <div>
                  <div className="font-bold text-slate-900">{t.author}</div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-20">
          <Link href="/#scan" className="btn-primary inline-flex items-center">
            Run Free Security Scan
          </Link>
        </div>
      </div>
    </section>
  );
}
