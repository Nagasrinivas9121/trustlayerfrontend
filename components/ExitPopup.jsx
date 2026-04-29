"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function ExitPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Only show on desktop for better UX
    if (window.innerWidth < 768) return;

    const handleMouseLeave = (e) => {
      // Trigger when mouse moves up towards the browser chrome
      if (e.clientY <= 0 && !hasShown) {
        setShowPopup(true);
        setHasShown(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasShown]);

  return (
    <AnimatePresence>
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            onClick={() => setShowPopup(false)}
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white rounded-[2rem] shadow-2xl p-8 md:p-12 max-w-lg w-full z-10 overflow-hidden border border-slate-100"
          >
            <button 
              onClick={() => setShowPopup(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors bg-slate-50 p-2 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-4">Wait! Don&apos;t leave your app vulnerable.</h2>
              <p className="text-slate-500 mb-8 font-medium">
                Get a free vulnerability snapshot of your domain in under 2 minutes. No credit card required.
              </p>

              <Link 
                href="#scan" 
                onClick={() => setShowPopup(false)}
                className="block w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-500/25"
              >
                Get Free Security Report
              </Link>
              <button 
                onClick={() => setShowPopup(false)}
                className="mt-4 text-sm font-bold text-slate-400 hover:text-slate-600 transition-colors"
              >
                No thanks, I&apos;ll take the risk
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
