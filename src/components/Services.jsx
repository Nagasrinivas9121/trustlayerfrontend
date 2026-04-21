import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Globe, Webhook, Cloud, Network, Crosshair, FileSearch, Activity, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <ShieldCheck size={28} className="text-blue-500" />,
    title: "VAPT Testing",
    description: "Comprehensive Vulnerability Assessment and Penetration Testing to secure your IT infrastructure.",
    link: "/vapt-services"
  },
  {
    icon: <Globe size={28} className="text-blue-500" />,
    title: "Web App Penetration Testing",
    description: "Deep dive security assessment of your web applications to uncover hidden vulnerabilities.",
    link: "/web-app-security"
  },
  {
    icon: <Webhook size={28} className="text-blue-500" />,
    title: "API Security Testing",
    description: "Identify and patch critical flaws in your APIs, ensuring secure data exchange.",
    link: "/api-security-testing"
  },
  {
    icon: <Cloud size={28} className="text-blue-500" />,
    title: "Cloud Security Testing",
    description: "Thorough security review of your AWS, Azure, or GCP environments against misconfigurations.",
    link: "/cloud-security"
  },
  {
    icon: <Network size={28} className="text-blue-500" />,
    title: "Network Penetration Testing",
    description: "Simulated attacks on your internal and external networks to identify entry points.",
    link: "/network-penetration-testing"
  },
  {
    icon: <Crosshair size={28} className="text-blue-500" />,
    title: "Red Team Assessment",
    description: "Advanced simulation of real-world targeted cyber attacks to test your organization's defenses.",
    link: "/services"
  },
  {
    icon: <FileSearch size={28} className="text-blue-500" />,
    title: "Security Audit",
    description: "Holistic review of your security policies, architecture, and compliance standards.",
    link: "/services"
  },
  {
    icon: <Activity size={28} className="text-blue-500" />,
    title: "SOC Consulting",
    description: "Expert guidance on building and optimizing your Security Operations Center.",
    link: "/services"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold"
          >
            Our Expertise
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            Offensive Security Solutions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-600 max-w-2xl mx-auto text-lg"
          >
            We provide specialized cybersecurity services tailored to protect your critical digital assets from modern threats.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="light-card p-8 group relative overflow-hidden bg-white"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6 line-clamp-3">{service.description}</p>
              
              <Link 
                to={service.link}
                className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700"
              >
                Learn More <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
