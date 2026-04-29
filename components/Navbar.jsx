"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Shield, Menu, X, ArrowRight, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Process", href: "/#process" },
    { name: "Industries", href: "/#industries" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-4 md:px-0">
      <div className="max-w-[1100px] mx-auto">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`glass-pill rounded-full px-8 py-4 flex items-center justify-between transition-all duration-300 relative ${
            isScrolled ? "shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] py-3" : "shadow-sm"
          }`}
        >
          {/* Left: Logo */}
          <div className="flex-1 flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 relative rounded-lg overflow-hidden flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform bg-white">
                <img src="/logo.jpeg" alt="TrustLayer Labs Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 hidden sm:block">
                TrustLayer<span className="text-blue-600">Labs</span>
              </span>
            </Link>
          </div>

          {/* Center: Desktop Nav */}
          <div className="hidden md:flex items-center justify-center space-x-10 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right: CTA */}
          <div className="flex-1 flex items-center justify-end">
            <div className="hidden md:flex">
              <Link 
                href="https://calendar.app.google/J2JjTsqSHMDWTNu4A"
                target="_blank"
                className="flex items-center space-x-2 px-6 py-3 bg-slate-900 text-white rounded-full text-sm font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Call</span>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-slate-600 p-2 ml-4"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-24 left-4 right-4 bg-white/95 backdrop-blur-xl border border-slate-100 rounded-3xl p-6 shadow-2xl md:hidden z-50"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="text-lg font-bold text-slate-900 border-b border-slate-50 pb-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="/contact"
                className="btn-primary text-center mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
