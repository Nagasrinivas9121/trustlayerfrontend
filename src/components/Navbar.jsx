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
    <div className="fixed top-0 w-full z-50 pt-4 px-4 transition-all duration-300">
      <nav
        className={`mx-auto max-w-6xl rounded-full transition-all duration-300 h-16 flex items-center px-6 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-md shadow-md border border-slate-200' 
            : 'bg-white shadow-sm border border-slate-100'
        }`}
      >
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <img src="/logo.jpeg" alt="TrustLayer Labs Logo" className="w-10 h-10 object-contain rounded-full shadow-sm group-hover:scale-105 transition-transform" />
            <span className="font-heading font-bold text-xl text-slate-900 tracking-tight">
              TrustLayer <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-400">Labs</span>
            </span>
          </Link>

          {/* Center Desktop Menu */}
          <div className="hidden md:flex items-center justify-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path.startsWith('/#') ? link.path : undefined}
                onClick={link.path.startsWith('/#') ? undefined : (e) => { e.preventDefault(); window.location.href = link.path; }}
                className={`text-sm font-medium transition-all hover:text-blue-600 ${
                  location.pathname === link.path ? 'text-blue-600' : 'text-slate-600'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right CTA Button */}
          <div className="hidden md:flex items-center shrink-0">
            <Link
              to="/contact"
              className="btn-primary text-sm shadow-md"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none p-2 rounded-full"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
            className="absolute top-24 left-4 right-4 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden md:hidden p-4"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center mt-4 btn-primary"
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