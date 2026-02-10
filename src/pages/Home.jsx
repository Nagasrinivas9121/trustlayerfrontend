import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg"; 
import { motion } from "framer-motion";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
  };

  return (
    <main className="min-h-[calc(100vh-70px)] bg-[#05080d] flex items-center justify-center text-white relative overflow-hidden">
      {/* Background FX */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-[120px] pointer-events-none"
      />

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl px-6 relative z-10"
      >
        {/* Floating Logo */}
        <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
          <img src={logo} alt="Logo" className="mx-auto w-32 h-32 md:w-40 md:h-40 object-contain mb-8 rounded-full border-2 border-white/10 shadow-2xl shadow-accent/20" />
        </motion.div>
        
        {/* RUNNING MOTION TEXT */}
        <motion.h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-none">
          <div className="overflow-hidden">
            <motion.span variants={fadeInUp} className="block">Fortifying the</motion.span>
          </div>
          <div className="relative inline-block mt-2">
            <motion.span 
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400"
            >
              Digital Frontier
            </motion.span>
            <motion.div
              initial={{ left: "0%" }}
              animate={{ left: "100%" }}
              transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}
              className="absolute top-0 bottom-0 w-1 bg-accent shadow-[0_0_15px_#00b7ff]"
            />
          </div>
        </motion.h1>
        
        <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto font-medium">
          Premier EdTech & Cybersecurity Services.
          <span className="block mt-2 text-gray-500 font-mono text-sm tracking-widest">// SECURE_THE_FUTURE</span>
        </motion.p>
        
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link to="/courses" className="bg-white text-black px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-accent hover:text-white transition-all shadow-xl shadow-accent/10">
            Start Learning
          </Link>
          <Link to="/services" className="px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest border border-white/20 hover:border-accent transition-all">
            Services
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}