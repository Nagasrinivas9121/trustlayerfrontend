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
    <div className="fixed top-0 w-full z-50 pt-6 px-4 pointer-events-none transition-all duration-300">
      <nav
        className={`pointer-events-auto mx-auto max-w-5xl rounded-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-md shadow-lg border border-slate-200/50 py-3 px-6' 
            : 'bg-white/95 backdrop-blur-sm shadow-md py-4 px-6 border border-slate-100'
        }`}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <img src="/logo.jpeg" alt="TrustLayer Labs Logo" className="w-10 h-10 object-contain rounded-full shadow-sm group-hover:scale-105 transition-transform" />
            <span className="font-heading font-bold text-lg text-slate-900 tracking-tight hidden sm:block">
              TrustLayer <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-400">Labs</span>
            </span>
          </Link>

          {/* Center Desktop Menu */}
          <div className="hidden md:flex items-center justify-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-all hover:text-blue-600 ${
                  location.pathname === link.path ? 'text-blue-600' : 'text-slate-600'
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
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-600 hover:text-blue-600 focus:outline-none p-2 bg-slate-50 rounded-full"
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
            className="pointer-events-auto absolute top-24 left-4 right-4 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden md:hidden p-4"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center mt-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3.5 rounded-xl font-medium transition-colors shadow-md"
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