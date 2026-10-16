"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FileCheck, ExternalLink, X, ShieldCheck, Award, Building2, Check, Copy } from "lucide-react";

export type CertificateId = "c3sa" | "iso27001" | "msme";

export interface CertificateData {
  id: CertificateId;
  tabLabel: string;
  badge: string;
  badgeColor: string;
  title: string;
  credentialId: string;
  issuer: string;
  recipient: string;
  src: string;
  footer: string;
  icon: "shield" | "award" | "building";
}

export const CERTIFICATES: Record<CertificateId, CertificateData> = {
  c3sa: {
    id: "c3sa",
    tabLabel: "CWL C3SA Analyst",
    badge: "VERIFIED PRACTITIONER",
    badgeColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    title: "CWL Certified Cyber Security Analyst (C3SA)",
    credentialId: "C3SA-6ad1ceaeb6d122ea6a9362fa",
    issuer: "CyberWarfare Labs (CWL)",
    recipient: "Naga Srinivasarao",
    src: "/c3sa-nagasrinivasarao.png",
    footer: "Recipient: Naga Srinivasarao • Examination Verified • CyberWarfare Labs",
    icon: "shield"
  },
  iso27001: {
    id: "iso27001",
    tabLabel: "ISO 27001 Lead Auditor",
    badge: "VERIFIED AUDITOR",
    badgeColor: "bg-blue-500/15 text-blue-300 border-blue-500/30",
    title: "ISO/IEC 27001:2022 Lead Auditor (ISMS)",
    credentialId: "CQI | IRCA ISMS Lead Auditor",
    issuer: "CQI | IRCA",
    recipient: "Ramineni Teja",
    src: "/iso-27001-ramineni-teja.png",
    footer: "Recipient: Ramineni Teja • Information Security Management Systems",
    icon: "award"
  },
  msme: {
    id: "msme",
    tabLabel: "Govt. MSME / Udyam",
    badge: "GOVT. VERIFIED ENTITY",
    badgeColor: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    title: "Govt. MSME / Udyam Registration Certificate",
    credentialId: "UDYAM-AP-21-0044317",
    issuer: "Ministry of MSME, Govt. of India",
    recipient: "TrustLayer Labs",
    src: "/trustlayerlabs-udyam-registration-certificate.jpg",
    footer: "Enterprise: TRUSTLAYER LABS (Micro Enterprise — Services)",
    icon: "building"
  }
};

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCertId?: CertificateId | string;
}

export default function CertificateModal({ isOpen, onClose, initialCertId = "c3sa" }: CertificateModalProps) {
  const [selectedId, setSelectedId] = useState<CertificateId>(
    (initialCertId in CERTIFICATES ? initialCertId : "c3sa") as CertificateId
  );
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialCertId && initialCertId in CERTIFICATES) {
      setSelectedId(initialCertId as CertificateId);
    }
  }, [initialCertId, isOpen]);

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

  const currentCert = CERTIFICATES[selectedId] || CERTIFICATES.c3sa;

  const handleCopyId = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(currentCert.credentialId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="relative w-full max-w-4xl bg-surface border border-border/90 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col max-h-[94vh] animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-5 sm:px-6 py-4 border-b border-border/80 bg-[#0A0D14]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
                {currentCert.icon === "shield" ? (
                  <ShieldCheck size={22} />
                ) : currentCert.icon === "award" ? (
                  <Award size={22} />
                ) : (
                  <Building2 size={22} />
                )}
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-sm sm:text-base font-bold text-textPrimary font-sans">
                    {currentCert.title}
                  </h3>
                  <span className={`px-2 py-0.5 rounded-full text-[9px] font-mono font-bold border ${currentCert.badgeColor}`}>
                    {currentCert.badge}
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <p className="text-[11px] font-mono text-textSecondary">
                    ID: <span className="text-textPrimary font-medium">{currentCert.credentialId}</span>
                  </p>
                  <button
                    onClick={handleCopyId}
                    className="inline-flex items-center gap-1 text-[10px] text-textSecondary hover:text-emerald-400 font-mono transition-colors"
                    title="Copy Credential ID"
                    aria-label="Copy credential ID"
                  >
                    {copied ? <Check size={11} className="text-emerald-400" /> : <Copy size={11} />}
                    <span>{copied ? "Copied" : "Copy"}</span>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-end gap-1.5 self-end sm:self-auto">
              <a
                href={currentCert.src}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-textSecondary hover:text-emerald-400 transition-colors rounded-lg hover:bg-white/5"
                title="Open Full Image in New Tab"
                aria-label="Open full certificate in new tab"
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

          {/* Certificate Switcher Tabs */}
          <div className="flex items-center gap-2 mt-4 pt-3 border-t border-border/50 overflow-x-auto pb-1">
            {(Object.keys(CERTIFICATES) as CertificateId[]).map((certKey) => {
              const item = CERTIFICATES[certKey];
              const isActive = selectedId === certKey;
              return (
                <button
                  key={certKey}
                  onClick={() => setSelectedId(certKey)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-[color,background-color,border-color,box-shadow,transform] flex items-center gap-1.5 whitespace-nowrap ${
                    isActive
                      ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/40 shadow-sm"
                      : "text-textSecondary hover:text-textPrimary hover:bg-white/5 border border-transparent"
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-emerald-400" : "bg-textSecondary/40"}`} />
                  {item.tabLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* Modal Image Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 flex justify-center bg-black/70 items-center min-h-[350px]">
          <div className="relative max-w-full border border-border/80 rounded-xl overflow-hidden shadow-2xl bg-[#07090E] flex items-center justify-center p-1 sm:p-2">
            <Image
              src={currentCert.src}
              alt={currentCert.title}
              width={1200}
              height={800}
              priority
              className="max-h-[60vh] sm:max-h-[64vh] w-auto h-auto object-contain cursor-zoom-in rounded-lg"
              onClick={() => window.open(currentCert.src, "_blank")}
            />
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-5 sm:px-6 py-3.5 border-t border-border/80 bg-[#0A0D14] flex flex-col sm:flex-row items-center justify-between text-xs text-textSecondary gap-2.5">
          <div className="flex items-center gap-2">
            <FileCheck size={14} className="text-emerald-400 flex-shrink-0" />
            <span className="font-sans text-[11px] text-textSecondary">
              {currentCert.footer}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={currentCert.src}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-semibold font-mono text-[11px] flex items-center gap-1"
            >
              Open Full Resolution ↗
            </a>
            <span className="text-border">•</span>
            <a
              href={currentCert.src}
              download
              className="text-textSecondary hover:text-textPrimary font-semibold font-mono text-[11px] flex items-center gap-1"
            >
              Download File
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
