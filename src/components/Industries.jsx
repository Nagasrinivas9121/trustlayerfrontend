import { motion } from 'framer-motion';
import { Landmark, HeartPulse, Code2, ShoppingCart, Rocket, Building2 } from 'lucide-react';

const industries = [
  { id: 1, name: 'Fintech', icon: <Landmark size={28} /> },
  { id: 2, name: 'Healthcare', icon: <HeartPulse size={28} /> },
  { id: 3, name: 'SaaS', icon: <Code2 size={28} /> },
  { id: 4, name: 'Ecommerce', icon: <ShoppingCart size={28} /> },
  { id: 5, name: 'Startups', icon: <Rocket size={28} /> },
  { id: 6, name: 'Enterprise', icon: <Building2 size={28} /> },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 tracking-tight"
          >
            Industries We Secure
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            Tailored cybersecurity solutions addressing the unique compliance and risk landscapes of your sector.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {industries.map((ind, index) => (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center group cursor-pointer"
            >
              <div className="text-slate-400 mb-4 group-hover:scale-110 group-hover:text-blue-600 transition-all duration-300">
                {ind.icon}
              </div>
              <h3 className="text-lg font-bold font-heading text-slate-900">{ind.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
