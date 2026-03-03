import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="min-h-screen bg-[#05080d] text-gray-300 py-16 px-6 relative overflow-hidden font-mono">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto relative z-10"
      >
        {/* Header Section */}
        <header className="border-b border-amber-500/20 pb-8 mb-12">
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter"
          >
            Privacy_<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Protocol</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-amber-500/60 text-[10px] tracking-[0.3em] mt-4 uppercase">
            // DOCUMENT_ID: TL-PRIV-2024-001
          </motion.p>
          <motion.p variants={itemVariants} className="text-gray-500 text-xs mt-1">
            Effective_Date: {new Date().toLocaleDateString()}
          </motion.p>
        </header>

        <div className="space-y-12 text-sm md:text-base leading-relaxed">
          
          <motion.section variants={itemVariants}>
            <h2 className="text-amber-500 font-black text-xs uppercase tracking-widest mb-4 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-amber-500/30"></span> 01. Introduction
            </h2>
            <p className="bg-white/5 p-6 rounded-lg border border-white/5">
              Trustlayer Labs ("we", "our", "us") operates as a high-integrity entity. This Privacy Protocol outlines our rigorous standards for data collection, encryption, and protection for all operators utilizing our cybersecurity services and educational modules.
            </p>
          </motion.section>

          <motion.section variants={itemVariants}>
            <h2 className="text-amber-500 font-black text-xs uppercase tracking-widest mb-4 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-amber-500/30"></span> 02. Data_Harvesting
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Account Authentication Credentials",
                "Transaction Metadata (via Razorpay)",
                "Service Uplink Logs & Comms",
                "Technical Footprint (IP, Browser ID)"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-400 text-xs border border-white/5 p-3 rounded-md bg-white/[0.02]">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full shadow-[0_0_8px_#D4AF37]"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.section>

          <motion.section variants={itemVariants}>
            <h2 className="text-amber-500 font-black text-xs uppercase tracking-widest mb-4 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-amber-500/30"></span> 03. Usage_Parameters
            </h2>
            <div className="space-y-4 text-gray-400 italic">
              <p>&gt; Authorization of course material access.</p>
              <p>&gt; Validation of financial transactions.</p>
              <p>&gt; Hardening of platform security architecture.</p>
              <p>&gt; Compliance with regulatory legal frameworks.</p>
            </div>
          </motion.section>

          <motion.section variants={itemVariants} className="relative group">
            <div className="absolute -inset-1 bg-amber-500/10 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-black border border-amber-500/20 p-8 rounded-lg">
              <h2 className="text-amber-500 font-black text-xs uppercase tracking-widest mb-4">
                04. Encryption & Security_Hardening
              </h2>
              <p>
                All data is protected via industry-standard encryption protocols. We utilize multilayer access control, real-time audit logging, and rate-limiting to prevent unauthorized interception of personnel data.
              </p>
            </div>
          </motion.section>

          <motion.section variants={itemVariants}>
            <h2 className="text-amber-500 font-black text-xs uppercase tracking-widest mb-4 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-amber-500/30"></span> 05. Third_Party_Uplinks
            </h2>
            <p>
              Financial settlements are executed exclusively through <span className="text-white font-bold">Razorpay</span>. TrustLayer Labs does not store localized card data. External links (Google Drive, etc.) are subject to their respective security protocols.
            </p>
          </motion.section>

          <footer className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between gap-8">
            <motion.div variants={itemVariants}>
              <h3 className="text-white font-black text-xs uppercase mb-2">Subject_Rights</h3>
              <p className="text-xs text-gray-500 max-w-xs">
                Operators maintain the right to data deletion. Manual requests require identity verification.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="text-left md:text-right">
              <h3 className="text-white font-black text-xs uppercase mb-2">Contact_Node</h3>
              <a 
                href="mailto:nagasrinivasaraoeevuri@gmail.com" 
                className="text-amber-500 text-xs hover:text-white transition-colors underline underline-offset-4"
              >
                nagasrinivasaraoeevuri@gmail.com
              </a>
            </motion.div>
          </footer>
        </div>
      </motion.div>
    </div>
  );
}