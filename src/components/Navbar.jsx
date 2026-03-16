import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/logo.jpeg";
import { Menu, X, Power } from "lucide-react"; 
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Target, Eye, Cpu, Award, Globe } from "lucide-react";
import About from "../pages/About";
export default function Navbar() {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  // Link styles with the brand's golden indicator
  const getLinkClass = ({ isActive }) =>
    `relative px-2 py-1 transition-all duration-300 uppercase tracking-widest text-[11px] font-black ${
      isActive ? "text-amber-500" : "text-gray-400 hover:text-white"
    }`;

  return (
    <nav className="bg-[#05080d]/90 backdrop-blur-xl text-white border-b border-white/5 sticky top-0 z-[100] font-mono">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO SECTION */}
        <Link to="/" onClick={closeMenu} className="flex items-center space-x-3 group">
          <motion.img 
            whileHover={{ rotate: 10, scale: 1.1 }}
            src={logo} 
            alt="Trustlayer Labs" 
            className="h-9 w-9 object-contain drop-shadow-[0_0_8px_rgba(212,175,55,0.3)]" 
          />
          <span className="font-black text-sm md:text-base uppercase tracking-tighter italic">
            Trustlayer<span className="text-amber-500">_Labs</span>
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex space-x-8 items-center">
          <NavLink to="/courses" className={getLinkClass}>
            {({ isActive }) => (
              <>
                {isActive && <motion.span layoutId="nav-dot" className="absolute -left-3 text-amber-500 font-bold">_</motion.span>}
                Curriculum
              </>
            )}
          </NavLink>
          <NavLink to="/services" className={getLinkClass}>
             {({ isActive }) => (
              <>
                {isActive && <motion.span layoutId="nav-dot" className="absolute -left-3 text-amber-500 font-bold">_</motion.span>}
                Services
              </>
            )}
          </NavLink>
          <NavLink to="/dashboard" className={getLinkClass}>
            {({ isActive }) => (
              <>
                {isActive && <motion.span layoutId="nav-dot" className="absolute -left-3 text-amber-500 font-bold">_</motion.span>}
                Dashboard
              </>
            )}
          </NavLink>

          <div className="h-4 w-[1px] bg-white/10 mx-2" />

          {!user ? (
            <div className="flex items-center space-x-6">
              <Link
                to="/login"
                className="text-[11px] font-black uppercase tracking-widest hover:text-amber-500 transition-colors"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-6 py-2 bg-gradient-to-r from-amber-500 to-amber-700 text-black text-[11px] font-black uppercase tracking-widest rounded-sm hover:brightness-110 transition-all shadow-lg shadow-amber-900/10"
              >
                Register
              </Link>
            </div>
          ) : (
            <div className="flex items-center space-x-6">
              <button
                onClick={logout}
                className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-red-500/80 hover:text-red-400 transition-colors border border-red-500/20 px-4 py-1.5 rounded-sm bg-red-500/5 group"
              >
                <Power size={12} className="group-hover:scale-110 transition-transform" />
                Logout
              </button>
            </div>
          )}
        </div>

        {/* MOBILE TRIGGER */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-amber-500 hover:text-white transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-[#0a0f18] border-b border-white/5 overflow-hidden absolute w-full shadow-2xl"
          >
            <div className="px-8 py-12 flex flex-col space-y-8">
              <NavLink to="/courses" className="text-3xl font-black italic uppercase tracking-tighter" onClick={closeMenu}>
                Curriculum<span className="text-amber-500">.</span>
              </NavLink>
              <NavLink to="/services" className="text-3xl font-black italic uppercase tracking-tighter" onClick={closeMenu}>
                Services<span className="text-amber-500">.</span>
              </NavLink>
              
              <NavLink to="/dashboard" className="text-3xl font-black italic uppercase tracking-tighter" onClick={closeMenu}>
                Dashboard<span className="text-amber-500">.</span>
              </NavLink>
              
              <div className="pt-8 border-t border-white/5 flex flex-col space-y-6">
                {!user ? (
                  <>
                    <Link to="/login" className="text-amber-500 text-sm font-black uppercase tracking-widest" onClick={closeMenu}>&gt; Login_Access</Link>
                    <Link to="/register" className="text-white text-sm font-black uppercase tracking-widest" onClick={closeMenu}>&gt; Register_Account</Link>
                  </>
                ) : (
                  <button onClick={() => { logout(); closeMenu(); }} className="flex items-center gap-3 text-left text-red-500 text-sm font-black uppercase tracking-widest">
                    <Power size={18} />
                    Terminate_Session
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}