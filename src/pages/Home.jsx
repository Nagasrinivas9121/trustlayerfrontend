import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg"; 
import { motion } from "framer-motion";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
  };

  return (
    <main className="min-h-[calc(100vh-70px)] bg-[#05080d] flex items-center justify-center text-white relative overflow-hidden px-4 md:px-12">
      
      {/* Background FX - Optimized size for mobile */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] md:bg-[size:32px_32px]"></div>
      
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-accent rounded-full blur-[80px] md:blur-[120px] pointer-events-none"
      />

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="text-center w-full max-w-4xl relative z-10"
      >
        {/* Floating Logo - Scaled for mobile */}
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
          <img 
            src={logo} 
            alt="Logo" 
            className="mx-auto w-24 h-24 md:w-40 md:h-40 object-contain mb-6 md:mb-8 rounded-full border-2 border-white/10 shadow-2xl shadow-accent/20" 
          />
        </motion.div>
        
        {/* RUNNING MOTION TEXT - Fluid sizing */}
        <motion.h1 className="text-[10vw] sm:text-5xl md:text-7xl font-black mb-4 md:mb-6 tracking-tighter leading-[1.1] md:leading-none uppercase">
          <div className="overflow-hidden">
            <motion.span variants={fadeInUp} className="block italic">Fortifying the</motion.span>
          </div>
          <div className="relative inline-block mt-1 md:mt-2">
            <motion.span 
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400 block sm:inline"
            >
              Digital Frontier
            </motion.span>
            <motion.div
              initial={{ left: "0%" }}
              animate={{ left: "100%" }}
              transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}
              className="absolute top-0 bottom-0 w-1 bg-accent shadow-[0_0_15px_#00b7ff] hidden sm:block"
            />
          </div>
        </motion.h1>
        
        {/* Subtext - Adjusted for smaller screens */}
        <motion.p variants={fadeInUp} className="text-gray-400 text-sm md:text-lg mb-8 md:mb-12 max-w-2xl mx-auto font-medium px-2">
          Premier EdTech & Cybersecurity Services.
          <span className="block mt-2 text-gray-500 font-mono text-[10px] md:text-sm tracking-widest uppercase italic">
            // SECURE_THE_FUTURE
          </span>
        </motion.p>
        
        {/* CTA BUTTONS - Stacked on mobile */}
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6">
          <Link 
            to="/courses" 
            className="w-full sm:w-auto bg-white text-black px-8 md:px-10 py-4 rounded-full font-black text-xs md:text-sm uppercase tracking-widest hover:bg-accent hover:text-white transition-all shadow-xl shadow-accent/10 text-center"
          >
            Start Learning
          </Link>
          <Link 
            to="/services" 
            className="w-full sm:w-auto px-8 md:px-10 py-4 rounded-full font-black text-xs md:text-sm uppercase tracking-widest border border-white/20 hover:border-accent transition-all text-center"
          >
            Our Services
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}