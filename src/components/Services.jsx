import { motion } from 'framer-motion';
import { ShieldAlert, Globe, FileJson, Cloud, Network, Target, Search, Headphones } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'VAPT Testing',
    description: 'Comprehensive vulnerability assessment and penetration testing across all digital assets.',
    icon: <ShieldAlert size={28} />,
  },
  {
    id: 2,
    title: 'Web App Penetration',
    description: 'Deep-dive security assessment to uncover critical OWASP Top 10 vulnerabilities.',
    icon: <Globe size={28} />,
  },
  {
    id: 3,
    title: 'API Security',
    description: 'Secure your backend infrastructure with rigorous REST & GraphQL endpoint testing.',
    icon: <FileJson size={28} />,
  },
  {
    id: 4,
    title: 'Cloud Security',
    description: 'Evaluate AWS, Azure, and GCP environments for severe misconfigurations.',
    icon: <Cloud size={28} />,
  },
  {
    id: 5,
    title: 'Network Penetration',
    description: 'Identify exploitable vulnerabilities hiding within your internal and external network.',
    icon: <Network size={28} />,
  },
  {
    id: 6,
    title: 'Red Team Assessment',
    description: 'Simulate real-world advanced persistent threats to test detection and response.',
    icon: <Target size={28} />,
  },
  {
    id: 7,
    title: 'Security Architecture',
    description: 'Thorough review of security policies, system architecture, and source code.',
    icon: <Search size={28} />,
  },
  {
    id: 8,
    title: 'SOC Optimization',
    description: 'Expert guidance on establishing, managing, and optimizing your Security Operations Center.',
    icon: <Headphones size={28} />,
  },
];

export default function Services() {
  return (
    <section id="services" className="section-spacing relative z-10 overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#facc15]/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-[700px] mx-auto mb-20"
        >
          <h2 className="section-title text-primary mb-6 tracking-[-0.5px]">
            Premium Security Offerings
          </h2>
          <p className="body-text text-secondary">
            Protect your digital infrastructure with specialized, intelligence-driven penetration testing methodologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-spacing">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass-card p-8 group hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(37,99,235,0.15)] hover:border-[#2563eb]/30 cursor-default flex flex-col h-full"
            >
              <div className="text-[#facc15] mb-6 group-hover:scale-110 group-hover:text-amber-300 transition-all duration-300 origin-left drop-shadow-[0_0_10px_rgba(250,204,21,0.3)]">
                {service.icon}
              </div>
              <h3 className="card-title text-primary mb-3 group-hover:text-white transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-[15px] text-secondary leading-[1.7] flex-1">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
