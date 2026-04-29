"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsApp() {
  return (
    <a 
      href="https://wa.me/918822402811" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(34,197,94,0.4)] hover:shadow-[0_8px_30px_rgba(34,197,94,0.6)] hover:-translate-y-1 transition-all z-50 group"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-slate-900 text-white text-xs font-bold px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with Security Expert
        <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-slate-900"></div>
      </span>
    </a>
  );
}
