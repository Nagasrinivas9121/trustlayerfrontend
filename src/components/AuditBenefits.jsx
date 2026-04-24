import { motion } from 'framer-motion';
import { ShieldCheck, Key, Activity, CheckCircle } from 'lucide-react';

export default function AuditBenefits() {
  const items = [
    {
      icon: <ShieldCheck className="text-blue-600" />,
      title: "API Vulnerability Scan",
      desc: "Identify insecure endpoints, broken auth, and exposed data risks.",
    },
    {
      icon: <Key className="text-blue-600" />,
      title: "Authentication & Token Review",
      desc: "Detect weak JWT handling, session issues, and access control flaws.",
    },
    {
      icon: <Activity className="text-blue-600" />,
      title: "Abuse & Bot Risk Analysis",
      desc: "Spot fake signups, spam vectors, and traffic abuse vulnerabilities.",
    },
    {
      icon: <CheckCircle className="text-blue-600" />,
      title: "Actionable Next Steps",
      desc: "Clear recommendations you can implement immediately.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
        >
          What you'll get in 15 minutes
        </motion.h2>

        {/* Subtext */}
        <p className="text-slate-600 mb-12 max-w-2xl mx-auto">
          A focused security review with clear, actionable insights — not generic advice.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-left hover:shadow-md transition"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-50 rounded-lg">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA again (important) */}
        <div className="mt-12">
          <a
            href="https://calendar.app.google/RyeMVZDQRiCvGpsT9"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 py-4 text-lg"
          >
            Book Your Free Audit
          </a>

          <p className="text-sm text-slate-500 mt-3">
            Takes less than 30 seconds to schedule
          </p>
        </div>

      </div>
    </section>
  );
}