import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, CheckCircle2, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50 min-h-[90vh] flex items-center">
      {/* Dotted Background Pattern */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-70"></div>
      
      {/* Subtle Gradient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* Floating Testimonial Cards */}
      <motion.div 
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="hidden lg:flex absolute left-[10%] top-[30%] bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex-col gap-2 z-10 w-64"
      >
        <div className="flex text-amber-400">
          {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
        </div>
        <p className="text-sm text-slate-700 font-medium">"Found critical API flaws before our launch."</p>
        <p className="text-xs text-slate-500">- CTO, Fintech Startup</p>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="hidden lg:flex absolute right-[10%] top-[40%] bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex-col gap-3 z-10 w-72"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
            <CheckCircle2 size={20} />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-900">Zero-day Protected</p>
            <p className="text-xs text-slate-500">Secured 50k+ user records</p>
          </div>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 relative z-20">
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-8 border border-blue-100 shadow-sm">
              <ShieldCheck size={18} /> Enterprise Grade Security
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Comprehensive <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-400">Security Services</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
              We identify, exploit, and help you remediate critical vulnerabilities before attackers do.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 w-full sm:w-auto">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Book Security Consultation <ArrowRight size={20} />
              </Link>
              <Link
                to="/services"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-700 font-semibold text-lg hover:bg-slate-50 transition-all duration-300 border border-slate-200 shadow-sm flex items-center justify-center"
              >
                View Services
              </Link>
            </div>

            <p className="text-sm font-medium text-slate-500">
              Trusted cybersecurity partner for startups & enterprises.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
