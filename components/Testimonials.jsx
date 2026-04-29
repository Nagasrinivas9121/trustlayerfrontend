"use client";

import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote: "TrustLayer Labs found critical vulnerabilities in our core API that three previous automated scanners had missed. Their manual testing approach and detailed report saved us from a potential disaster before our Series B announcement.",
    author: "Rahul S.",
    role: "CTO, FinTech Innovators",
    rating: 5
  },
  {
    id: 2,
    quote: "The fastest and most professional VAPT service we've used. They helped us achieve SOC2 compliance in record time by providing clear, developer-friendly remediation steps that our team could implement immediately.",
    author: "Sarah J.",
    role: "VP Engineering, HealthTech Solutions",
    rating: 5
  },
  {
    id: 3,
    quote: "Their team doesn't just run tools; they think like real attackers. The depth of their cloud configuration audit exposed risks we didn't even know existed in our AWS environment.",
    author: "Vikram K.",
    role: "CISO, E-commerce Plus",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4">
            Client Success
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-lg text-slate-500">
            Don&apos;t just take our word for it. Here&apos;s what engineering leaders say about our VAPT services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="soft-card p-8 relative group"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-blue-100 group-hover:text-blue-200 transition-colors" />
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-600 font-medium leading-relaxed mb-8 relative z-10">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="flex items-center space-x-4 border-t border-slate-100 pt-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center font-black text-blue-700">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.author}</h4>
                  <p className="text-xs text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
