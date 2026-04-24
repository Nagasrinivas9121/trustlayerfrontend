import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const BOOKING_LINK = "https://calendar.app.google/RyeMVZDQRiCvGpsT9";

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
            <img src="/logo.jpeg" alt="TrustLayer Labs Logo" className="w-10 h-10 rounded-full shadow-sm group-hover:scale-105 transition-transform" />
            <span className="font-bold text-xl text-slate-900">
              TrustLayer <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-400">Labs</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className={`text-sm font-medium transition hover:text-blue-600 ${
                  location.pathname === link.path ? 'text-blue-600' : 'text-slate-600'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <a
              href={BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm shadow-md"
            >
              Free Security Check
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-4 right-4 bg-white rounded-2xl shadow-xl p-4 md:hidden"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-slate-700 hover:bg-slate-50"
                >
                  {link.name}
                </a>
              ))}

              {/* Mobile CTA */}
              <a
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-center btn-primary"
              >
                Free Security Check
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}