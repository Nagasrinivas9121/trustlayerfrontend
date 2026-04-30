"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield, ArrowRight } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Process", href: "/#process" },
  { name: "Case Studies", href: "/#cases" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md border-b border-slate-200" : "bg-transparent"
      }`}
    >
      {/* Urgency Bar */}
      <div className="bg-blue-600 text-white py-2.5">
        <div className="max-w-[1100px] mx-auto px-4 flex items-center justify-center space-x-2 text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
          <span>Only 3 audit slots available this week — book before Friday</span>
        </div>
      </div>

      <div className={`max-w-[1100px] mx-auto px-4 flex items-center justify-between transition-all duration-300 ${scrolled ? "py-4" : "py-6"}`}>
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative w-10 h-10 overflow-hidden rounded-xl">
            <Image
              src="/logo.jpeg"
              alt="TrustLayer Labs Logo"
              fill
              priority // Load instantly as it's in the header
              sizes="40px"
              className="object-cover group-hover:scale-110 transition-transform"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black text-slate-900 tracking-tighter leading-none uppercase">TrustLayer</span>
            <span className="text-sm font-black text-blue-600 uppercase tracking-[0.2em] mt-0.5 ml-0.5">Labs</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link href="https://calendar.app.google/jnamj3gawxVunPJm9" target="_blank" className="btn-primary py-2.5 px-6 text-sm flex items-center group">
            Book a Fix Call <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-slate-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-xl font-black text-slate-900"
                >
                  {link.name}
                </Link>
              ))}
              <Link href="https://calendar.app.google/jnamj3gawxVunPJm9" target="_blank" className="btn-primary block text-center py-4">
                Book a Fix Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
