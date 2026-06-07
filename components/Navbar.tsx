"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Shield, Calendar } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300">
      <nav className={`w-full max-w-5xl flex items-center justify-between px-6 py-3 rounded-full border bg-surface/80 backdrop-blur-md border-border/80 transition-all duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}>
        
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2.5 group" aria-label="TrustLayerLabs Home">
          <div className="relative w-7 h-7 flex items-center justify-center rounded-full overflow-hidden border border-border bg-black shadow-sm transition-all group-hover:scale-105">
            <img src="/logo.jpeg" alt="TrustLayerLabs Logo" className="w-full h-full object-cover scale-[1.3]" />
          </div>
          <span className="text-xs font-bold text-textPrimary tracking-wider uppercase font-sans">
            Trust<span className="text-primary">Layer</span><span className="text-[11px] text-textSecondary font-light lowercase font-sans">.labs</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-xs uppercase font-sans tracking-wider font-semibold transition-colors duration-200 hover:text-textPrimary ${
                  isActive ? "text-primary" : "text-textSecondary"
                }`}
                aria-label={`Go to ${link.name}`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Link 
            href="https://calendar.app.google/jnamj3gawxVunPJm9" 
            target="_blank"
            className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wider font-sans bg-primary text-white hover:bg-primary-hover rounded-full transition-all active:scale-95 flex items-center gap-1.5 shadow-sm"
            aria-label="Book a security review"
          >
            <Calendar className="w-3.5 h-3.5" /> Book Review
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-textSecondary hover:text-textPrimary p-1.5" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        {/* Mobile Menu Panel */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-surface/95 backdrop-blur-md border border-border p-6 rounded-2xl space-y-4 animate-fade-in shadow-xl mx-4">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-xs uppercase tracking-wider font-sans font-semibold ${
                    isActive ? "text-primary" : "text-textSecondary hover:text-textPrimary"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link 
              href="https://calendar.app.google/jnamj3gawxVunPJm9" 
              target="_blank"
              onClick={() => setIsOpen(false)}
              className="block text-center py-2 text-xs font-semibold uppercase tracking-wider font-sans bg-primary text-white hover:bg-primary-hover rounded-full transition-all"
            >
              Book Free Review
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}
