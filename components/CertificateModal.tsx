"use client";

import React, { useEffect } from "react";
import { FileCheck, ExternalLink, X, ShieldCheck, Download } from "lucide-react";

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CertificateModal({ isOpen, onClose }: CertificateModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="relative w-full max-w-2xl bg-surface border border-border/90 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col max-h-[92vh] animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-border/80 bg-[#0A0D14]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <ShieldCheck size={20} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-textPrimary font-sans">Govt. MSME / Udyam Certificate</h3>
                <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  VERIFIED
                </span>
              </div>
              <p className="text-[11px] font-mono text-textSecondary mt-0.5">
                UDYAM-AP-21-0044317 • Ministry of MSME, Govt. of India
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-1.5">
            <a
              href="/trustlayerlabs-udyam-registration-certificate.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-textSecondary hover:text-emerald-400 transition-colors rounded-lg hover:bg-white/5"
              title="Open Full Image in New Tab"
            >
              <ExternalLink size={18} />
            </a>
            <button
              onClick={onClose}
              className="p-2 text-textSecondary hover:text-textPrimary transition-colors rounded-lg hover:bg-white/5"
              title="Close Preview (Esc)"
              aria-label="Close Preview"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Image Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 flex justify-center bg-black/60 items-center">
          <div className="relative w-full max-w-lg border border-border/80 rounded-xl overflow-hidden shadow-2xl bg-white">
            <img
              src="/trustlayerlabs-udyam-registration-certificate.jpg"
              alt="Udyam Registration Certificate - TRUSTLAYER LABS (UDYAM-AP-21-0044317)"
              className="w-full h-auto object-contain cursor-zoom-in"
              onClick={() => window.open("/trustlayerlabs-udyam-registration-certificate.jpg", "_blank")}
            />
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-5 sm:px-6 py-3.5 border-t border-border/80 bg-[#0A0D14] flex flex-col sm:flex-row items-center justify-between text-xs text-textSecondary gap-2.5">
          <div className="flex items-center gap-2">
            <FileCheck size={14} className="text-emerald-400" />
            <span className="font-sans text-[11px]">
              Enterprise: <strong className="text-textPrimary">TRUSTLAYER LABS</strong> (Micro Enterprise — Services)
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/trustlayerlabs-udyam-registration-certificate.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-semibold font-mono text-[11px] flex items-center gap-1"
            >
              Open Original Certificate ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
