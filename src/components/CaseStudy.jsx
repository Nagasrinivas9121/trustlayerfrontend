import { motion } from 'framer-motion';
import { AlertTriangle, ShieldCheck } from 'lucide-react';

export default function CaseStudy() {
  const issues = [
    "Exposed API endpoint allowing unauthorized data access",
    "Weak JWT validation enabling token reuse",
    "Rate-limiting gaps leading to automated signup abuse",
    "Missing input validation in critical routes",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
        >
          Recent security audit insights
        </motion.h2>

        {/* Subtext */}
        <p className="text-slate-600 mb-12 max-w-2xl mx-auto">
          Findings from a recent SaaS security review (details anonymized).
        </p>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-slate-50 border border-slate-100 rounded-2xl p-8 text-left shadow-sm"
        >
          <h3 className="font-semibold text-slate-900 mb-6 flex items-center gap-2">
            <AlertTriangle className="text-red-500" size={20} />
            Key vulnerabilities identified
          </h3>

          <ul className="space-y-3 mb-8">
            {issues.map((issue, i) => (
              <li key={i} className="text-slate-700 text-sm flex gap-2">
                <span className="text-red-500">•</span>
                {issue}
              </li>
            ))}
          </ul>

          {/* Outcome */}
          <div className="flex items-start gap-3 bg-green-50 border border-green-100 rounded-xl p-4">
            <ShieldCheck className="text-green-600 mt-1" size={18} />
            <p className="text-sm text-slate-700">
              Resolved <strong>7+ vulnerabilities</strong> before production launch,
              preventing potential data exposure and abuse risks.
            </p>
          </div>
        </motion.div>

        {/* CTA again */}
        <div className="mt-10">
          <a
            href="https://calendar.app.google/RyeMVZDQRiCvGpsT9"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 py-4 text-lg"
          >
            Get Your Free Audit
          </a>

          <p className="text-sm text-slate-500 mt-3">
            See what issues exist in your product
          </p>
        </div>

      </div>
    </section>
  );
}