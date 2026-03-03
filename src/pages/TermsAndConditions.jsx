import { motion } from "framer-motion";

export default function TermsAndConditions() {
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
            className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter"
          >
            Engagement_<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Protocol</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-amber-500/60 text-[10px] tracking-[0.3em] mt-4 uppercase">
            // DOCUMENT_ID: TL-TERMS-X71
          </motion.p>
          <motion.p variants={itemVariants} className="text-gray-500 text-xs mt-1">
            Activation_Date: {new Date().toLocaleDateString()}
          </motion.p>
        </header>

        <div className="space-y-12 text-sm md:text-base leading-relaxed">
          
          <motion.section variants={itemVariants}>
            <h2 className="text-amber-500 font-black text-xs uppercase tracking-widest mb-4 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-amber-500/30"></span> 01. Acceptance_of_Terms
            </h2>
            <p className="bg-white/5 p-6 rounded-lg border border-white/5 italic">
              "By initiating a connection to TrustLayer Labs, the operator (User) acknowledges and accepts all security and service protocols listed herein. Failure to comply results in immediate revocation of access keys."
            </p>
          </motion.section>

          <motion.section variants={itemVariants}>
            <h2 className="text-amber-500 font-black text-xs uppercase tracking-widest mb-4 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-amber-500/30"></span> 02. Service_Scope
            </h2>
            <p>
              We provide advanced cybersecurity education, enterprise-grade VAPT, SOC infrastructure, and custom technology solutions. We reserve the right to modify or terminate these services at our discretion to maintain platform integrity.
            </p>
          </motion.section>

          <motion.section variants={itemVariants}>
            <h2 className="text-amber-500 font-black text-xs uppercase tracking-widest mb-4 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-amber-500/30"></span> 03. Credential_Responsibility
            </h2>
            <p>
              Operators are solely responsible for the confidentiality of their digital identity. TrustLayer Labs shall not be held liable for unauthorized breaches occurring due to compromised operator-side credentials.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="relative group">
            <div className="absolute -inset-1 bg-amber-500/10 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-black border border-amber-500/20 p-8 rounded-lg">
              <h2 className="text-amber-500 font-black text-xs uppercase tracking-widest mb-4">
                04. Prohibited_Activities (Critical)
              </h2>
              <ul className="space-y-3">
                {[
                  "Malicious or unauthorized exploitation of the platform",
                  "Attempts to brute-force or reverse-engineer proprietary modules",
                  "Unauthorized interception of cross-node data traffic",
                  "Utilization of platform intelligence for unethical purposes"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-red-400/80 text-[10px] uppercase font-bold">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          <motion.section variants={itemVariants}>
            <h2 className="text-amber-500 font-black text-xs uppercase tracking-widest mb-4 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-amber-500/30"></span> 05. Liability_Limitation
            </h2>
            <p className="text-gray-500">
              Under no circumstances shall TrustLayer Labs be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use the platform's security intelligence or tools.
            </p>
          </motion.section>

          <motion.section variants={itemVariants}>
            <h2 className="text-amber-500 font-black text-xs uppercase tracking-widest mb-4 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-amber-500/30"></span> 06. Jurisdictional_Law
            </h2>
            <p>
              These Engagement Protocols are governed by the laws of <span className="text-white font-bold">India</span>. Any disputes shall be subject to the exclusive jurisdiction of the courts therein.
            </p>
          </motion.section>

          <footer className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-left">
              <h3 className="text-white font-black text-xs uppercase mb-1 tracking-widest">Protocol_Uplink</h3>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest italic">// nagasrinivasaraoeevuri@gmail.com</p>
            </div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-amber-500/10 border border-amber-500/30 px-8 py-3 rounded-sm text-amber-500 text-xs font-black uppercase tracking-widest shadow-lg shadow-amber-900/5"
            >
              Uplink_Confirmed
            </motion.div>
          </footer>
        </div>
      </motion.div>
    </div>
  );
}