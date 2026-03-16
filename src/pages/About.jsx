import { motion } from "framer-motion";
import { Shield, Target, Eye, Cpu, Award, Globe } from "lucide-react";
import logo from "../assets/logo.jpeg";

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const stats = [
    { label: "Global_Reach", val: "24/7", icon: <Globe size={20} /> },
    { label: "Security_Audits", val: "500+", icon: <Shield size={20} /> },
    { label: "Elite_Operators", val: "1k+", icon: <Award size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-[#05080d] text-white p-6 md:p-12 font-mono relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-24">
        
        {/* HERO SECTION */}
        <section className="text-center pt-12">
          <motion.img 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={logo} 
            alt="TrustLayer Labs Logo" 
            className="mx-auto w-32 h-32 md:w-44 md:h-44 object-contain mb-8 drop-shadow-[0_0_25px_rgba(212,175,55,0.3)]"
          />
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter"
          >
            The_Entity: <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">TrustLayer Labs</span>
          </motion.h1>
          <p className="text-gray-500 text-xs md:text-sm mt-4 uppercase tracking-[0.4em]">
            // SECURING_THE_FUTURE_THROUGH_INTELLIGENCE
          </p>
        </section>

        {/* MISSION & VISION */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-3">
              <Target className="text-amber-500" /> Our_Mission
            </h2>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base border-l-2 border-amber-500/20 pl-6">
              Founded at the intersection of EdTech and elite Cybersecurity, TrustLayer Labs was established to bridge the gap between theoretical knowledge and offensive/defensive operations. We empower the next generation of investigators with iron-clad training and provide enterprises with fortified digital defense mechanisms.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 gap-4">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/[0.03] border border-white/5 p-6 rounded-lg flex items-center justify-between group hover:border-amber-500/30 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="text-amber-500">{stat.icon}</div>
                  <span className="text-[10px] uppercase tracking-widest text-gray-500">{stat.label}</span>
                </div>
                <span className="text-xl font-black text-amber-200">{stat.val}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CORE VALUES GRID */}
        <section>
          <h2 className="text-[10px] font-black text-amber-500 uppercase tracking-[0.4em] mb-12 text-center">
            &lt; CORE_OPERATING_PROTOCOLS /&gt;
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ValueCard 
              icon={<Eye />} 
              title="Forensic_Integrity" 
              desc="We approach every line of code with an investigator's mindset—meticulous, objective, and accurate." 
            />
            <ValueCard 
              icon={<Shield />} 
              title="Proactive_Defense" 
              desc="Building walls isn't enough; we believe in identifying vulnerabilities before they become entry points." 
            />
            <ValueCard 
              icon={<Cpu />} 
              title="Infinite_Scaling" 
              desc="Our solutions and curriculum are designed to evolve alongside the rapidly shifting threat landscape." 
            />
          </div>
        </section>

        {/* FOOTER NOTE */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-amber-500/5 border border-amber-500/10 p-10 rounded-xl text-center"
        >
          <p className="text-gray-500 text-xs uppercase tracking-[0.2em] mb-4">Ready to initiate connection?</p>
          <div className="flex justify-center gap-6">
            <div className="h-1.5 w-1.5 bg-amber-500 rounded-full animate-pulse shadow-[0_0_8px_#D4AF37]" />
            <span className="text-[10px] font-black uppercase">TrustLayer Labs // Established 2026</span>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

function ValueCard({ icon, title, desc }) {
  return (
    <div className="bg-gray-900/30 p-8 rounded-xl border border-white/5 hover:border-amber-500/20 transition-all group">
      <div className="text-amber-500 mb-6 group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="text-lg font-black uppercase tracking-tighter mb-4">{title}</h3>
      <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
    </div>
  );
}