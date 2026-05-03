"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import Image from "next/image";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Case Studies", href: "#cases" },
  { name: "Blog", href: "/blog" },
  { name: "Trust", href: "#trust" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      scrolled ? "bg-background/80 backdrop-blur-sm border-b border-border/50 py-4" : "bg-transparent py-6"
    }`}>
      <div className="section-container flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 group" aria-label="TrustLayerLabs Home">
          <div className="relative w-10 h-10 overflow-hidden rounded-md border border-border/50 group-hover:border-primary/50 transition-colors">
            <Image 
              src="/logo.jpeg" 
              alt="TrustLayerLabs Logo" 
              fill 
              className="object-cover"
            />
          </div>
          <span className="text-lg font-semibold text-white tracking-tight uppercase">TrustLayerLabs</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <div className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
                aria-label={`Go to ${link.name}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Link 
            href="https://calendar.app.google/jnamj3gawxVunPJm9" 
            target="_blank"
            className="btn-primary text-sm py-2"
            aria-label="Book a security review"
          >
            Book Security Review
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-400" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-6 space-y-6 animate-fade-in">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium text-slate-300"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="https://calendar.app.google/jnamj3gawxVunPJm9" 
            target="_blank"
            className="btn-primary block text-center"
          >
            Book Security Review
          </Link>
        </div>
      )}
    </nav>
  );
}
