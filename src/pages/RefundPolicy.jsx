import { motion } from "framer-motion";

export default function RefundPolicy() {
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
      {/* Background Grid - Consistent with other pages */}
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
            Refund_<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Settlement</span>_Protocol
          </motion.h1>
          <motion.p variants={itemVariants} className="text-amber-500/60 text-[10px] tracking-[0.3em] mt-4 uppercase">
            // DOCUMENT_ID: TL-REFUND-092
          </motion.p>
          <motion.p variants={itemVariants} className="text-gray-500 text-xs mt-1">
            Last_Modified: {new Date().toLocaleDateString()}
          </motion.p>
        </header>

        <div className="space-y-12">
          
          {/* Course Purchases Section */}
          <motion.section variants={itemVariants}>
            <h2 className="text-amber-500 font-black text-xs uppercase tracking-widest mb-4 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-amber-500/30"></span> 01. Module_Access_Purchases
            </h2>
            <div className="bg-white/[0.03] border border-white/5 p-6 rounded-lg leading-relaxed text-sm md:text-base">
              All digital module purchases and educational enrollments are <span className="text-white font-bold underline decoration-amber-500/50 underline-offset-4 uppercase">non-refundable</span> once the secure uplink is granted. Due to the proprietary nature of the cybersecurity intelligence provided, access is considered final unless a critical system failure on our node prevents delivery.
            </div>
          </motion.section>

          {/* Service Payments Section */}
          <motion.section variants={itemVariants}>
            <h2 className="text-amber-500 font-black text-xs uppercase tracking-widest mb-4 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-amber-500/30"></span> 02. Cybersecurity_Service_Settlement
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Payments for customized VAPT, SOC, or other technical infrastructure services are evaluated on a <span className="italic">case-by-case basis</span>. Refund eligibility is determined by the percentage of work completed and the resources allocated to the specific investigation.
            </p>
          </motion.section>

          {/* Cancellation Notice */}
          <motion.section variants={itemVariants} className="bg-amber-500/5 border border-amber-500/20 p-8 rounded-lg">
            <h2 className="text-white font-black text-xs uppercase tracking-widest mb-4">
              03. Subscription_&_Cancellation
            </h2>
            <p className="text-sm text-gray-400">
              Users may terminate their account at any time. Termination of service does not entitle the operator to a prorated refund of previous billing cycles or one-time module access fees.
            </p>
          </motion.section>

          {/* Contact Node */}
          <footer className="pt-12 border-t border-white/5">
            <motion.div variants={itemVariants} className="bg-black/40 border border-white/5 p-8 rounded-xl flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h3 className="text-white font-black text-xs uppercase mb-1">Settlement_Dispute_Node</h3>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest italic">// Encrypted communication line</p>
              </div>
              <a 
                href="mailto:trustlayerlabs@gmail.com" 
                className="bg-gradient-to-r from-amber-500 to-amber-700 text-black px-8 py-3 rounded-sm font-black text-[10px] uppercase tracking-widest hover:brightness-110 transition-all shadow-lg shadow-amber-900/20"
              >
                Contact_Support
              </a>
            </motion.div>
          </footer>

        </div>
      </motion.div>
    </div>
  );
}