"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Calendar, ChevronDown, Award } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import CertificateModal from "@/components/CertificateModal";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300">
        <nav className={`w-full max-w-5xl flex items-center justify-between px-6 py-3 rounded-full border bg-surface/80 backdrop-blur-md border-border/80 transition-all duration-300 ${
          scrolled ? "shadow-md" : "shadow-sm"
        }`}>
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2.5 group flex-shrink-0" aria-label="TrustLayerLabs Home">
            <div className="relative w-7 h-7 flex items-center justify-center rounded-full overflow-hidden border border-border bg-black shadow-sm transition-all group-hover:scale-105">
              <img src="/logo.jpeg" alt="TrustLayerLabs Logo" className="w-full h-full object-cover scale-[1.3]" />
            </div>
            <span className="text-xs font-bold text-textPrimary tracking-wider uppercase font-sans flex-shrink-0">
              Trust<span className="text-primary">Layer</span><span className="text-[11px] text-textSecondary font-light lowercase font-sans">.labs</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-5 mx-4 overflow-x-auto scrollbar-none">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.children && pathname.startsWith("/services"));
              
              if (link.children) {
                return (
                  <div 
                    key={link.name}
                    className="relative group flex-shrink-0"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`inline-flex items-center gap-1 text-xs uppercase font-sans tracking-wider font-semibold transition-colors duration-200 hover:text-textPrimary ${
                        isActive ? "text-primary" : "text-textSecondary"
                      }`}
                    >
                      {link.name}
                      <ChevronDown size={12} className="group-hover:rotate-180 transition-transform" />
                    </Link>

                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 pt-2 w-72 hidden group-hover:block transition-all">
                      <div className="bg-surface border border-border rounded-xl p-2 shadow-xl space-y-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-3 py-2 rounded-lg hover:bg-black/30 text-xs transition-colors"
                          >
                            <span className="text-textPrimary font-semibold block">{child.name}</span>
                            <span className="text-[10px] text-textSecondary block leading-tight">{child.description}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className={`text-xs uppercase font-sans tracking-wider font-semibold transition-colors duration-200 hover:text-textPrimary flex-shrink-0 ${
                    isActive ? "text-primary" : "text-textSecondary"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* MSME Certificate Action */}
            <button
              onClick={() => setShowCertificate(true)}
              type="button"
              className="text-xs uppercase font-sans tracking-wider font-semibold transition-colors duration-200 text-textSecondary hover:text-primary flex items-center gap-1 flex-shrink-0 cursor-pointer"
              title="Click to view Govt. MSME Certificate"
            >
              <Award size={13} className="text-primary" />
              <span>MSME</span>
            </button>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block flex-shrink-0">
            <Link 
              href="https://calendar.app.google/jnamj3gawxVunPJm9" 
              target="_blank"
              className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wider font-sans bg-primary text-white hover:bg-primary/90 rounded-full transition-all active:scale-95 flex items-center gap-1.5 shadow-sm"
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
                  <div key={link.name}>
                    <Link 
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block text-xs uppercase tracking-wider font-sans font-semibold ${
                        isActive ? "text-primary" : "text-textSecondary hover:text-textPrimary"
                      }`}
                    >
                      {link.name}
                    </Link>
                    {link.children && (
                      <div className="pl-3 mt-2 space-y-1.5 border-l border-border/60">
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={() => setIsOpen(false)}
                            className="block text-[11px] text-textSecondary hover:text-primary font-sans"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* MSME Certificate in Mobile Menu */}
              <div>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setShowCertificate(true);
                  }}
                  type="button"
                  className="w-full text-left text-xs uppercase tracking-wider font-sans font-semibold text-textSecondary hover:text-primary flex items-center gap-1.5 cursor-pointer"
                >
                  <Award size={13} className="text-primary" />
                  <span>MSME Certificate (Govt. of India)</span>
                </button>
              </div>

              <Link 
                href="https://calendar.app.google/jnamj3gawxVunPJm9" 
                target="_blank"
                onClick={() => setIsOpen(false)}
                className="block text-center py-2.5 text-xs font-bold uppercase tracking-wider font-sans bg-primary text-white hover:bg-primary/90 rounded-full transition-all shadow-md"
              >
                Book a 20-Min Security Review
              </Link>
            </div>
          )}
        </nav>
      </div>

      {/* Certificate Modal */}
      <CertificateModal 
        isOpen={showCertificate} 
        onClose={() => setShowCertificate(false)} 
      />
    </>
  );
}
