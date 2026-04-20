import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden min-h-screen flex items-center justify-center">
      {/* Animated Background Gradients */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none z-0"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#facc15]/10 rounded-full blur-[150px] pointer-events-none z-0"
      />

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -100, 0],
            x: [0, i % 2 === 0 ? 50 : -50, 0],
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: 5 + i * 2,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.5
          }}
          className="absolute w-1 h-1 bg-white rounded-full blur-[1px] z-0"
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 15}%`
          }}
        />
      ))}

      <div className="max-w-[1200px] mx-auto px-6 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start max-w-3xl"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card text-blue-400 text-sm font-semibold mb-8 border border-blue-500/20 shadow-[0_0_15px_rgba(37,99,235,0.2)]"
          >
            <ShieldCheck size={18} /> Enterprise Grade Security
          </motion.div>
          
          <h1 className="hero-title text-primary mb-6">
            Comprehensive <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-sky-400 to-blue-500 bg-[length:200%_auto] animate-gradient">
              Security Services
            </span>
          </h1>
          
          <p className="body-text text-secondary mb-10 max-w-[600px] text-lg md:text-xl leading-[1.8]">
            We identify, exploit, and help you remediate critical vulnerabilities before attackers do. Protect your business with elite penetration testing.
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-start gap-5 w-full sm:w-auto"
          >
            <Link
              to="/contact"
              className="w-full sm:w-auto btn-primary shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            >
              Book Consultation <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link
              to="/services"
              className="w-full sm:w-auto px-8 py-3 rounded-full glass-card text-primary font-semibold transition-all duration-300 hover:bg-white/5 flex items-center justify-center border border-slate-700 hover:border-slate-500"
            >
              Explore Services
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
