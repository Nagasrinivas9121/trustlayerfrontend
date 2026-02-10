import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/logo.jpeg";
import { Menu, X, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  // Link styles with a high-tech indicator
  const getLinkClass = ({ isActive }) =>
    `relative px-2 py-1 transition-all duration-300 uppercase tracking-widest text-[11px] font-black ${
      isActive ? "text-accent" : "text-gray-400 hover:text-white"
    }`;

  return (
    <nav className="bg-[#05080d]/80 backdrop-blur-md text-white border-b border-white/5 sticky top-0 z-[100]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <Link to="/" onClick={closeMenu} className="flex items-center space-x-3 group">
          <motion.img 
            whileHover={{ rotate: 180 }}
            src={logo} 
            alt="Trustlayer Labs" 
            className="h-8 w-8 rounded-full border border-white/10 group-hover:border-accent/50 transition-colors" 
          />
          <span className="font-black text-sm uppercase tracking-tighter italic">
            Trustlayer<span className="text-accent">_Labs</span>
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex space-x-8 items-center">
          <NavLink to="/courses" className={getLinkClass}>
            {({ isActive }) => (
              <>
                {isActive && <motion.span layoutId="nav-dot" className="absolute -left-2 text-accent">_</motion.span>}
                EdTech
              </>
            )}
          </NavLink>
          <NavLink to="/services" className={getLinkClass}>
             {({ isActive }) => (
              <>
                {isActive && <motion.span layoutId="nav-dot" className="absolute -left-2 text-accent">_</motion.span>}
                Services
              </>
            )}
          </NavLink>
          <NavLink to="/dashboard" className={getLinkClass}>Dashboard</NavLink>

          <div className="h-4 w-[1px] bg-white/10 mx-2" />

          {!user ? (
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-[11px] font-black uppercase tracking-widest hover:text-accent transition-colors"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-5 py-2 bg-white text-black text-[11px] font-black uppercase tracking-widest rounded-full hover:bg-accent hover:text-white transition-all shadow-lg shadow-accent/5"
              >
                Enlist
              </Link>
            </div>
          ) : (
            <div className="flex items-center space-x-6">
              <button
                onClick={logout}
                className="text-[10px] font-black uppercase tracking-widest text-red-500/70 hover:text-red-400 transition-colors border border-red-500/20 px-3 py-1 rounded-md"
              >
                Disconnect
              </button>
            </div>
          )}
        </div>

        {/* MOBILE TRIGGER */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-400 hover:text-white transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0f18] border-b border-white/5 overflow-hidden"
          >
            <div className="px-8 py-10 flex flex-col space-y-6">
              <NavLink to="/courses" className="text-2xl font-black italic uppercase" onClick={closeMenu}>EdTech</NavLink>
              <NavLink to="/services" className="text-2xl font-black italic uppercase" onClick={closeMenu}>Services</NavLink>
              <NavLink to="/dashboard" className="text-2xl font-black italic uppercase" onClick={closeMenu}>Dashboard</NavLink>
              
              <div className="pt-6 border-t border-white/5 flex flex-col space-y-4">
                {!user ? (
                  <>
                    <Link to="/login" className="text-accent font-black uppercase tracking-widest" onClick={closeMenu}>Login</Link>
                    <Link to="/register" className="text-white font-black uppercase tracking-widest" onClick={closeMenu}>Register</Link>
                  </>
                ) : (
                  <button onClick={() => { logout(); closeMenu(); }} className="text-left text-red-500 font-black uppercase tracking-widest">
                    Terminate Session
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