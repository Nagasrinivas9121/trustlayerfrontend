import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#05080d] text-gray-400 mt-20 relative overflow-hidden border-t border-white/5 font-mono">
      {/* Subtle Golden Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-amber-500/5 blur-[120px] pointer-events-none" />

      {/* Animated Golden Scanning Line */}
      <motion.div 
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 h-[1px] w-1/4 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-30"
      />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* BRAND SECTION */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-black text-white italic tracking-tighter mb-4 uppercase">
              TRUSTLAYER<span className="text-amber-500">_LABS</span>
            </h2>
            <p className="text-[10px] leading-relaxed font-medium text-gray-500 uppercase tracking-widest">
              Secure-by-design EdTech & Cybersecurity Services. 
              Mastering the digital frontier through iron-clad education 
              and enterprise-grade defense.
            </p>
          </div>

          {/* CURRICULUM */}
          <div>
            <h3 className="text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6 border-l-2 border-amber-500 pl-3">
              Curriculum
            </h3>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-tight">
              <li>
                <Link to="/courses" className="hover:text-amber-500 transition-colors flex items-center gap-2 group">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-amber-500 text-[10px]">&gt;</span>
                  All_Modules
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-amber-500 transition-colors flex items-center gap-2 group">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-amber-500 text-[10px]">&gt;</span>
                  Student_Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* OPERATIONS */}
          <div>
            <h3 className="text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6 border-l-2 border-amber-500 pl-3">
              Operations
            </h3>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-tight">
              <li>
                <Link to="/services" className="hover:text-amber-500 transition-colors flex items-center gap-2 group">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-amber-500 text-[10px]">&gt;</span>
                  VAPT_Audits
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-500 transition-colors flex items-center gap-2 group">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-amber-500 text-[10px]">&gt;</span>
                  Full_Stack_Dev
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-500 transition-colors flex items-center gap-2 group">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-amber-500 text-[10px]">&gt;</span>
                  SOC_Monitoring
                </Link>
              </li>
            </ul>
          </div>

          {/* PROTOCOLS */}
          <div>
            <h3 className="text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6 border-l-2 border-amber-500 pl-3">
              Protocols
            </h3>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-tight">
              <li><Link to="/privacy-policy" className="hover:text-amber-500 transition-colors">Privacy_Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="hover:text-amber-500 transition-colors">Engagement_Terms</Link></li>
              <li><Link to="/refund" className="hover:text-amber-500 transition-colors">Refund_Protocol</Link></li>
              <li className="pt-4">
                <a 
                  href="mailto:nagasrinivasaraoeevuri@gmail.com" 
                  className="text-[10px] font-black text-amber-500 hover:text-white transition-colors border border-amber-500/20 px-3 py-2 rounded-sm"
                >
                  [CONTACT_NODE]
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[9px] text-gray-600 tracking-[0.3em] uppercase">
            © {currentYear} TRUSTLAYER_LABS // GLOBAL_SECURITY_INFRASTRUCTURE
          </p>
          <div className="flex items-center gap-6">
             <div className="flex items-center gap-2">
               <div className="h-1.5 w-1.5 bg-amber-500 rounded-full animate-pulse shadow-[0_0_8px_#D4AF37]" />
               <span className="text-[10px] text-gray-500 uppercase tracking-widest font-black">System_Status: Optimal</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}