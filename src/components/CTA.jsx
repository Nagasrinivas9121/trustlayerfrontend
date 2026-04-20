import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-blue-600 via-blue-500 to-sky-400 rounded-3xl p-12 md:p-20 text-center shadow-2xl shadow-blue-500/20 relative overflow-hidden"
        >
          {/* Abstract floating shapes */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-900/20 rounded-full blur-2xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
              Secure your application before attackers exploit vulnerabilities.
            </h2>
            <p className="text-blue-50 text-lg md:text-xl mb-10 leading-relaxed font-medium">
              Get an accurate assessment of your security posture with our expert VAPT services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="bg-white text-slate-900 font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Request VAPT Quote
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
