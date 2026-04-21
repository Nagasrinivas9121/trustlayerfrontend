import { motion } from 'framer-motion';
import { Award, ShieldAlert, UserCheck, FileText, LockKeyhole, Zap } from 'lucide-react';

const features = [
  {
    icon: <Award size={24} className="text-white" />,
    title: "MSME Registered",
    description: "Government recognized and certified cybersecurity consulting firm you can trust.",
    bg: "bg-blue-600"
  },
  {
    icon: <ShieldAlert size={24} className="text-white" />,
    title: "OWASP Top 10",
    description: "Adherence to global standards like OWASP, SANS, and NIST for comprehensive security testing.",
    bg: "bg-sky-500"
  },
  {
    icon: <UserCheck size={24} className="text-white" />,
    title: "Manual Testing",
    description: "Deep manual exploitation beyond automated scanners to find complex business logic flaws.",
    bg: "bg-teal-500"
  },
  {
    icon: <FileText size={24} className="text-white" />,
    title: "Detailed Reports",
    description: "Actionable reports with proof of concepts (PoCs) and clear remediation guidelines.",
    bg: "bg-indigo-500"
  },
  {
    icon: <LockKeyhole size={24} className="text-white" />,
    title: "Confidentiality",
    description: "Strict non-disclosure agreements (NDAs) ensuring your sensitive data remains completely secure.",
    bg: "bg-slate-700"
  },
  {
    icon: <Zap size={24} className="text-white" />,
    title: "Fast Turnaround",
    description: "Agile methodologies to deliver high-quality security assessments within tight deadlines.",
    bg: "bg-blue-500"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            Why Choose TrustLayer Labs
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-600 max-w-2xl mx-auto text-lg"
          >
            We combine advanced methodologies with expert manual testing to deliver unparalleled security assurance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="shrink-0">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${feature.bg} shadow-lg`}>
                  {feature.icon}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}