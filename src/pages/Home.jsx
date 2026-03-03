import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg"; 
import { motion } from "framer-motion";

/**
 * TRUSTLAYER LABS - HOME COMPONENT
 * Final refined version matching gold/black brand identity.
 */

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.4 } }
  };

  return (
    <main className="min-h-[calc(100vh-70px)] bg-[#05080d] flex items-center justify-center text-white relative overflow-hidden px-4 md:px-12">
      
      {/* BACKGROUND FX: Subtle Grid & Golden Nebula */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:30px_30px]"></div>
      
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1], 
          opacity: [0.05, 0.12, 0.05],
          x: [0, 20, 0] 
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-600 rounded-full blur-[140px] pointer-events-none"
      />

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="text-center w-full max-w-5xl relative z-10"
      >
        {/* LOGO: Floating effect with Golden Drop Shadow */}
        <motion.div 
          animate={{ y: [0, -15, 0] }} 
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative inline-block mb-8 md:mb-10"
        >
          <img 
            src={logo} 
            alt="TrustLayer Labs" 
            className="mx-auto w-28 h-28 md:w-48 md:h-48 object-contain drop-shadow-[0_0_30px_rgba(212,175,55,0.25)]" 
          />
        </motion.div>
        
        {/* HERO TITLE: Utilizing the Gold Gradient from the Logo */}
        <motion.h1 className="text-[11vw] sm:text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-[0.95] md:leading-[0.9] uppercase">
          <div className="overflow-hidden">
            <motion.span variants={fadeInUp} className="block text-gray-400 font-light tracking-widest text-sm md:text-xl mb-2">
              ESTABLISHING EXCELLENCE IN
            </motion.span>
          </div>
          <div className="relative inline-block">
            <motion.span 
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 1.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-transparent bg-clip-text bg-gradient-to-b from-[#F9E498] via-[#D4AF37] to-[#8A6E2F] block"
            >
              Digital Frontier
            </motion.span>
            
            {/* Animated Scanning Line */}
            <motion.div
              initial={{ left: "0%" }}
              animate={{ left: "100%" }}
              transition={{ duration: 1.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-0 bottom-0 w-[2px] bg-[#FFD700] shadow-[0_0_20px_#FFD700] hidden sm:block"
            />
          </div>
        </motion.h1>
        
        {/* SUBTEXT: Mono-spaced Tech font look */}
        <motion.div variants={fadeInUp} className="space-y-4 mb-10 md:mb-14">
          <p className="text-gray-400 text-sm md:text-xl max-w-2xl mx-auto font-medium tracking-tight">
            Advanced EdTech solutions and elite Cybersecurity infrastructure.
          </p>
          <p className="text-[#D4AF37]/50 font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase">
            &lt; system_status: secured /&gt;
          </p>
        </motion.div>
        
        {/* CTA BUTTONS: Metallic and Outline styles */}
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-8">
          <Link 
            to="/courses" 
            className="group relative w-full sm:w-auto overflow-hidden bg-gradient-to-br from-[#F9E498] via-[#D4AF37] to-[#B8860B] text-black px-10 py-4 rounded-sm font-black text-xs md:text-sm uppercase tracking-[0.2em] shadow-[0_10px_30px_rgba(212,175,55,0.15)] hover:shadow-amber-500/30 transition-all text-center"
          >
            <span className="relative z-10">Start Learning</span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-[-20deg]"></div>
          </Link>
          
          <Link 
            to="/services" 
            className="w-full sm:w-auto px-10 py-4 rounded-sm font-black text-xs md:text-sm uppercase tracking-[0.2em] border border-white/10 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all text-center backdrop-blur-sm"
          >
            Our Services
          </Link>
        </motion.div>
      </motion.div>

      {/* FOOTER-ISH ELEMENT (Mobile Bottom Decor) */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center opacity-20 md:hidden">
        <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
      </div>
    </main>
  );
}