import SEO from '../components/SEO';
import Services from '../components/Services';
import CTA from '../components/CTA';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-12">
      <SEO 
        title="VAPT & Penetration Testing Services | TrustLayer Labs"
        description="Explore our comprehensive cybersecurity services including Web Application Penetration Testing, API Security, Cloud Assessment, and Red Teaming."
        keywords="web application penetration testing, API security testing company, cloud security assessment India, network penetration testing services, SOC consulting"
      />
      
      {/* Page Header */}
      <section className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-slate-900 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-bold text-white mb-6"
          >
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Security Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            We help SaaS, AI & FinTech startups identify and fix security vulnerabilities before launch using VAPT & OWASP-based testing.
          </motion.p>
        </div>
      </section>

      {/* Services Listing Component */}
      <Services />

      {/* CTA Section */}
      <CTA />
    </div>
  );
}
