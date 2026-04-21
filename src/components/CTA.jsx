import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl gradient-bg shadow-2xl p-10 md:p-16 text-center"
        >
          {/* Abstract circles */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-sky-400 opacity-20 blur-3xl"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Secure your application before attackers exploit vulnerabilities.
            </h2>
            <p className="text-blue-100 mb-10 text-lg max-w-2xl mx-auto">
              Partner with TrustLayer Labs to proactively identify and remediate security gaps across your web apps, APIs, and cloud infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link 
                to="/contact" 
                className="bg-white text-slate-900 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center"
              >
                Request VAPT Quote <ArrowRight size={20} className="ml-2 text-blue-600" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
