"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote: "Found critical bugs our scanners missed. The manual testing approach is a game-changer for our security posture.",
    author: "Sarah Chen",
    role: "CTO at Fintech Startup",
    image: "https://i.pravatar.cc/100?u=sarah"
  },
  {
    quote: "Helped us pass our SOC2 audit with flying colors. Their remediation guide was clear, actionable, and extremely professional.",
    author: "Marcus Thorne",
    role: "Head of Engineering",
    image: "https://i.pravatar.cc/100?u=marcus"
  },
  {
    quote: "Saved us from a major breach by identifying an exposed API endpoint we didn't even know existed. Highly recommended.",
    author: "Elena Rodriguez",
    role: "Security Director",
    image: "https://i.pravatar.cc/100?u=elena"
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
                  "{t.quote}"
                </p>
              </div>
              <div className="flex items-center space-x-4 pt-6 border-t border-slate-100">
                <div className="w-12 h-12 rounded-full overflow-hidden relative">
                  <Image src={t.image} alt={t.author} fill className="object-cover" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">{t.author}</div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
