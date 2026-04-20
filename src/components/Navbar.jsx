import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Process', path: '/#process' },
    { name: 'Industries', path: '/#industries' },
    { name: 'FAQs', path: '/#faqs' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="fixed top-0 w-full z-50 pt-4 px-4 pointer-events-none transition-all duration-300">
      <nav
        className={`pointer-events-auto mx-auto max-w-5xl rounded-[40px] transition-all duration-300 h-[72px] flex items-center px-6 ${
          isScrolled 
            ? 'nav-glass shadow-lg' 
            : 'nav-glass shadow-md'
        }`}
      >
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <img src="/logo.jpeg" alt="TrustLayer Labs Logo" className="w-10 h-10 object-contain rounded-full shadow-sm group-hover:scale-105 transition-transform" />
            <span className="font-heading font-bold text-lg text-white tracking-tight hidden sm:block">
              TrustLayer <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#38bdf8]">Labs</span>
            </span>
          </Link>

          {/* Center Desktop Menu */}
          <div className="hidden md:flex items-center justify-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-all hover:text-white ${
                  location.pathname === link.path ? 'text-white' : 'text-slate-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right CTA Button */}
          <div className="hidden md:flex items-center shrink-0">
            <Link
              to="/contact"
              className="btn-primary text-sm font-semibold shadow-md"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-300 hover:text-white focus:outline-none p-2 rounded-full"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto absolute top-24 left-4 right-4 nav-glass rounded-2xl shadow-xl overflow-hidden md:hidden p-4"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center mt-2 btn-primary shadow-md"
              >
                Book a Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}