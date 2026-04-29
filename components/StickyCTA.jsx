"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Shield, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 800px
      if (window.scrollY > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToScan = () => {
    const scanSection = document.getElementById("scan");
    if (scanSection) {
      scanSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="fixed bottom-6 left-6 z-40 hidden md:block"
        >
          <button
            onClick={scrollToScan}
            className="group flex items-center space-x-3 bg-white border border-blue-100 p-2 pr-6 rounded-full shadow-2xl shadow-blue-200/50 hover:shadow-blue-300/60 transition-all hover:-translate-y-1"
          >
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-500/40 group-hover:scale-110 transition-transform">
              <Shield className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest leading-none mb-1"></div>
              <div className="text-sm font-black text-slate-900 flex items-center">
                Free Security Snapshot <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
