import { motion } from 'framer-motion';
import { Landmark, HeartPulse, Cloud, ShoppingCart, Rocket, Building2 } from 'lucide-react';

const industries = [
  {
    icon: <Landmark size={32} className="text-blue-500" />,
    name: "Fintech",
    description: "Securing financial data and ensuring regulatory compliance."
  },
  {
    icon: <HeartPulse size={32} className="text-blue-500" />,
    name: "Healthcare",
    description: "Protecting patient records and HIPAA compliant architectures."
  },
  {
    icon: <Cloud size={32} className="text-blue-500" />,
    name: "SaaS",
    description: "Securing multi-tenant architectures and user data privacy."
  },
  {
    icon: <ShoppingCart size={32} className="text-blue-500" />,
    name: "E-commerce",
    description: "Preventing transaction fraud and securing customer details."
  },
  {
    icon: <Rocket size={32} className="text-blue-500" />,
    name: "Startups",
    description: "Building scalable security from day one for fast-growing companies."
  },
  {
    icon: <Building2 size={32} className="text-blue-500" />,
    name: "Enterprise",
    description: "Comprehensive audits for complex organizational networks."
  }
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            Industries We Secure
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-600 max-w-2xl mx-auto text-lg"
          >
            Tailored cybersecurity strategies designed for the unique threat landscapes of diverse sectors.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center hover:bg-blue-50 hover:border-blue-200 transition-colors duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-4">
                {industry.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{industry.name}</h3>
              <p className="text-sm text-slate-500">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
