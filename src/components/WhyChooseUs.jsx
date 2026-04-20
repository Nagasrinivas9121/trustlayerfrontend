import { motion } from 'framer-motion';
import { Award, ShieldCheck, UserCheck, FileText, Lock, Clock } from 'lucide-react';

const features = [
  {
    id: 1,
    title: 'MSME Registered',
    description: 'Government recognized cybersecurity company ensuring trust and reliability.',
    icon: <Award size={32} />,
  },
  {
    id: 2,
    title: 'OWASP Top 10',
    description: 'Strict adherence to OWASP Top 10 methodology for web and API security.',
    icon: <ShieldCheck size={32} />,
  },
  {
    id: 3,
    title: 'Manual Testing',
    description: 'Deep manual penetration testing beyond automated scans to find complex flaws.',
    icon: <UserCheck size={32} />,
  },
  {
    id: 4,
    title: 'Detailed Reports',
    description: 'Comprehensive vulnerability reports with actionable remediation steps and PoCs.',
    icon: <FileText size={32} />,
  },
  {
    id: 5,
    title: 'Confidentiality',
    description: 'Strict NDA backed engagements to ensure your sensitive data remains secure.',
    icon: <Lock size={32} />,
  },
  {
    id: 6,
    title: 'Fast Turnaround',
    description: 'Efficient testing processes ensuring you get reports without project delays.',
    icon: <Clock size={32} />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-spacing relative z-10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <div className="text-center max-w-[700px] mx-auto mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="section-title text-primary mb-6 tracking-[-0.5px]"
          >
            Why Choose TrustLayerLabs
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="body-text text-secondary"
          >
            We combine automated efficiency with deep manual expertise to deliver premium, intelligence-driven security assessments.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-spacing">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-[#facc15] mb-6 drop-shadow-[0_0_10px_rgba(250,204,21,0.3)] group-hover:scale-110 group-hover:text-amber-300 transition-all duration-300 origin-left">
                {feature.icon}
              </div>
              <h3 className="card-title text-primary mb-3">
                {feature.title}
              </h3>
              <p className="body-text text-secondary">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
