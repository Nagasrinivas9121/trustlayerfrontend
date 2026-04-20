import { motion } from 'framer-motion';
import { Award, ShieldCheck, UserCheck, FileText, Lock, Clock } from 'lucide-react';

const features = [
  {
    id: 1,
    title: 'MSME Registered',
    description: 'Government recognized cybersecurity company ensuring trust and reliability.',
    icon: <Award size={24} />,
  },
  {
    id: 2,
    title: 'OWASP Top 10',
    description: 'Strict adherence to OWASP Top 10 methodology for web and API security.',
    icon: <ShieldCheck size={24} />,
  },
  {
    id: 3,
    title: 'Manual Testing',
    description: 'Deep manual penetration testing beyond automated scans to find complex flaws.',
    icon: <UserCheck size={24} />,
  },
  {
    id: 4,
    title: 'Detailed Reports',
    description: 'Comprehensive vulnerability reports with actionable remediation steps and PoCs.',
    icon: <FileText size={24} />,
  },
  {
    id: 5,
    title: 'Confidentiality',
    description: 'Strict NDA backed engagements to ensure your sensitive data remains secure.',
    icon: <Lock size={24} />,
  },
  {
    id: 6,
    title: 'Fast Turnaround',
    description: 'Efficient testing processes ensuring you get reports without project delays.',
    icon: <Clock size={24} />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 tracking-tight"
          >
            Why Choose Us
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            We combine automated efficiency with deep manual expertise to deliver premium security assessments.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-6 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
