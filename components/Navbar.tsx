"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ChevronDown, Award } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import CertificateModal from "@/components/CertificateModal";
import { openQuoteModal } from "@/components/QuoteModal";
import { trackPrimaryQuoteClick } from "@/lib/analytics";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="w-full fixed top-4 left-0 right-0 z-50 flex justify-center items-center px-4">
        
        {/* Left Logo (Desktop) */}
        <Link 
          href="/" 
          className="max-md:hidden absolute left-5 lg:left-12 flex items-center group"
          aria-label="TrustLayerLabs Home"
        >
          <div className="bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-sm border border-black/5 flex items-center transition-transform group-hover:scale-105">
            <Image
              src="/trustlayerlabs-api-security-logo.png"
              alt="TrustLayerLabs"
              width={150}
              height={32}
              priority
              unoptimized
              className="h-7 w-auto object-contain"
            />
          </div>
        </Link>

        {/* Center Rounded Pill Navigation Bar (CodeDale Style) */}
        <div className={`relative flex flex-col bg-white text-black w-full md:w-fit rounded-[24px] md:rounded-full border border-black/5 transition-all duration-300 ${
          scrolled ? "shadow-md" : "shadow-sm"
        }`}>
          <div className="flex items-center justify-between md:justify-center font-medium py-1.5 px-3 md:px-3">
            
            {/* Mobile Logo inside pill */}
            <Link href="/" className="md:hidden flex items-center py-1 pl-1">
              <Image
                src="/trustlayerlabs-api-security-logo.png"
                alt="TrustLayerLabs"
                width={120}
                height={26}
                unoptimized
                className="h-6 w-auto object-contain"
              />
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-1 font-medium text-[13px] text-gray-800 tracking-tight">
              <Link
                href="/services"
                className="hover:text-black hover:bg-black/5 rounded-full py-2 px-3.5 transition-all"
              >
                Services
              </Link>

              <Link
                href="/#steps"
                className="hover:text-black hover:bg-black/5 rounded-full py-2 px-3.5 transition-all"
              >
                Methodology
              </Link>

              <Link
                href="/#why-choose-us"
                className="hover:text-black hover:bg-black/5 rounded-full py-2 px-3.5 transition-all"
              >
                Why Us
              </Link>

              <Link
                href="/#achievements"
                className="hover:text-black hover:bg-black/5 rounded-full py-2 px-3.5 transition-all"
              >
                Standards
              </Link>

              <Link
                href="/#faq"
                className="hover:text-black hover:bg-black/5 rounded-full py-2 px-3.5 transition-all"
              >
                FAQs
              </Link>

              <Link
                href="/sample-report"
                className="hover:text-black hover:bg-black/5 rounded-full py-2 px-3.5 transition-all"
              >
                Sample Report
              </Link>

              <Link
                href="/contact"
                className="hover:text-black hover:bg-black/5 rounded-full py-2 px-3.5 transition-all"
              >
                Contact
              </Link>

              {/* MSME Verified Badge Button */}
              <button
                type="button"
                onClick={() => setShowCertificate(true)}
                className="hover:text-primary hover:bg-blue-50 text-gray-600 rounded-full py-1.5 px-2.5 transition-all flex items-center gap-1 text-xs cursor-pointer ml-1"
                title="View Govt. MSME Certificate"
              >
                <Award size={13} className="text-primary" />
                <span className="font-semibold text-[11px]">MSME</span>
              </button>
            </nav>

            {/* Mobile Toggle Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 shrink-0 text-gray-900"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>

          </div>

          {/* Mobile Accordion Dropdown */}
          {isOpen && (
            <div className="md:hidden p-4 pt-2 border-t border-gray-100 flex flex-col gap-2 animate-fade-in text-sm font-medium">
              <Link
                href="/services"
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 rounded-xl hover:bg-gray-50 text-gray-800"
              >
                Services
              </Link>
              <Link
                href="/#steps"
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 rounded-xl hover:bg-gray-50 text-gray-800"
              >
                Methodology
              </Link>
              <Link
                href="/#why-choose-us"
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 rounded-xl hover:bg-gray-50 text-gray-800"
              >
                Why Us
              </Link>
              <Link
                href="/#achievements"
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 rounded-xl hover:bg-gray-50 text-gray-800"
              >
                Standards
              </Link>
              <Link
                href="/#faq"
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 rounded-xl hover:bg-gray-50 text-gray-800"
              >
                FAQs
              </Link>
              <Link
                href="/sample-report"
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 rounded-xl hover:bg-gray-50 text-gray-800"
              >
                Sample Report
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 rounded-xl hover:bg-gray-50 text-gray-800"
              >
                Contact
              </Link>

              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  setShowCertificate(true);
                }}
                className="text-left px-3 py-2 rounded-xl hover:bg-blue-50 text-primary flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
              >
                <Award size={14} /> Govt. MSME Certificate
              </button>

              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  trackPrimaryQuoteClick("navbar_mobile");
                  openQuoteModal();
                }}
                className="w-full text-center py-3 bg-[#151619] hover:bg-[#252830] text-white rounded-full font-semibold text-xs mt-2 shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <span>Get a quote in 24h</span>
                <ArrowRight size={14} />
              </button>
            </div>
          )}
        </div>

        {/* Right CTA Button (Desktop - Single Primary CTA) */}
        <div className="max-md:hidden absolute right-5 lg:right-12">
          <button
            type="button"
            onClick={() => {
              trackPrimaryQuoteClick("navbar_desktop");
              openQuoteModal();
            }}
            className="inline-flex items-center gap-2.5 pr-1.5 py-1.5 pl-5 font-semibold bg-[#151619] hover:bg-[#252830] text-white rounded-full shadow tracking-tight text-xs lg:text-[13px] transition button-shadow whitespace-nowrap cursor-pointer group"
          >
            <span>Get a fixed-price quote in 24h</span>
            <div className="border border-[#545557] bg-[#333437] group-hover:bg-primary transition-colors w-7 h-7 rounded-full flex items-center justify-center">
              <ArrowRight size={13} className="-rotate-45 text-white" />
            </div>
          </button>
        </div>

      </header>

      {/* Certificate Modal */}
      <CertificateModal
        isOpen={showCertificate}
        initialCertId="msme"
        onClose={() => setShowCertificate(false)}
      />
    </>
  );
}
