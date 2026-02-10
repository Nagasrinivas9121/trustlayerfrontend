import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#05080d] text-gray-400 mt-20 relative overflow-hidden border-t border-white/5">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-accent/5 blur-[120px] pointer-events-none" />

      {/* Animated Top Scanning Line */}
      <motion.div 
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 h-[1px] w-1/4 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"
      />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* BRAND SECTION */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-black text-white italic tracking-tighter mb-4">
              TRUSTLAYER<span className="text-accent">_LABS</span>
            </h2>
            <p className="text-xs leading-relaxed font-medium text-gray-500 uppercase tracking-wider">
              Secure-by-design EdTech & Cybersecurity Services. 
              Mastering the digital frontier through iron-clad education 
              and enterprise-grade defense.
            </p>
          </div>

          {/* EDTECH */}
          <div>
            <h3 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-6 border-l-2 border-accent pl-3">
              Curriculum
            </h3>
            <ul className="space-y-4 text-sm font-bold">
              <li>
                <Link to="/courses" className="hover:text-accent transition-colors flex items-center gap-2 group">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity font-mono text-accent text-[10px]">&gt;</span>
                  All Courses
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-accent transition-colors flex items-center gap-2 group">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity font-mono text-accent text-[10px]">&gt;</span>
                  Student Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-6 border-l-2 border-accent pl-3">
              Operations
            </h3>
            <ul className="space-y-4 text-sm font-bold">
              <li>
                <Link to="/services" className="hover:text-accent transition-colors flex items-center gap-2 group">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity font-mono text-accent text-[10px]">&gt;</span>
                  VAPT Audits
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-accent transition-colors flex items-center gap-2 group">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity font-mono text-accent text-[10px]">&gt;</span>
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-accent transition-colors flex items-center gap-2 group">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity font-mono text-accent text-[10px]">&gt;</span>
                  Cloud Hardening
                </Link>
              </li>
            </ul>
          </div>

          {/* LEGAL & CONTACT */}
          <div>
            <h3 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-6 border-l-2 border-accent pl-3">
              Protocol
            </h3>
            <ul className="space-y-4 text-sm font-bold">
              <li><Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="hover:text-accent transition-colors">Terms of Service</Link></li>
              <li><Link to="/refund" className="hover:text-accent transition-colors uppercase">Refund_Policy</Link></li>
              <li className="pt-4">
                <a 
                  href="mailto:nagasrinivasaraoeevuri@gmail.com" 
                  className="text-[10px] font-mono text-accent hover:underline decoration-accent/50 underline-offset-4"
                >
                  [CONTACT_OPERATOR]
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-mono text-gray-600 tracking-widest">
            © {currentYear} TRUSTLAYER_LABS // GLOBAL_SECURITY_PLATFORM
          </p>
          <div className="flex gap-6">
             <div className="h-1 w-1 bg-accent rounded-full animate-pulse" />
             <span className="text-[10px] font-mono text-gray-500 uppercase">Status: Secure</span>
          </div>
        </div>
      </div>
    </footer>
  );
}