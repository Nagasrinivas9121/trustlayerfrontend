import { motion } from 'framer-motion';
import { ShieldAlert, Globe, FileJson, Cloud, Network, Target, Search, Headphones } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'VAPT Testing',
    description: 'Comprehensive Vulnerability Assessment and Penetration Testing.',
    icon: <ShieldAlert size={24} />,
  },
  {
    id: 2,
    title: 'Web App Penetration Testing',
    description: 'Deep-dive security assessment to uncover OWASP Top 10 vulnerabilities.',
    icon: <Globe size={24} />,
  },
  {
    id: 3,
    title: 'API Security Testing',
    description: 'Secure your backend infrastructure with rigorous REST & GraphQL testing.',
    icon: <FileJson size={24} />,
  },
  {
    id: 4,
    title: 'Cloud Security Testing',
    description: 'Evaluate AWS, Azure, and GCP environments for compliance gaps.',
    icon: <Cloud size={24} />,
  },
  {
    id: 5,
    title: 'Network Penetration Testing',
    description: 'Identify exploitable vulnerabilities in your internal/external network.',
    icon: <Network size={24} />,
  },
  {
    id: 6,
    title: 'Red Team Assessment',
    description: 'Simulate real-world cyberattacks to test detection and response.',
    icon: <Target size={24} />,
  },
  {
    id: 7,
    title: 'Security Audit',
    description: 'Thorough review of security policies, architecture, and code.',
    icon: <Search size={24} />,
  },
  {
    id: 8,
    title: 'SOC Consulting',
    description: 'Expert guidance on establishing and optimizing your SOC.',
    icon: <Headphones size={24} />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 tracking-tight"
          >
            Premium Security Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            Protect your digital infrastructure with our specialized penetration testing methodologies.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 text-slate-700 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 border border-slate-100 group-hover:border-blue-600 shadow-sm">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold font-heading text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
