"use client";

import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Shield, Send, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { BRAND } from "@/lib/constants";

interface Message {
  sender: "bot" | "user";
  text: string;
  type?: "text" | "options" | "links";
  options?: string[];
  links?: { label: string; url: string; download?: boolean }[];
}

const initialGreetings: Message[] = [
  {
    sender: "bot",
    text: "Hi! Welcome to TrustLayerLabs. I'm your Security Assistant. 🛡️"
  },
  {
    sender: "bot",
    text: "How can I help you secure your APIs, Cloud settings, or Web Application today?",
    type: "options",
    options: [
      "📋 Schedule 30-Min Security Review",
      "📄 View Sample Assessment Report",
      `📱 Chat on WhatsApp (${BRAND.contact.phone})`,
      "💬 Ask a Security Question"
    ]
  }
];

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [unread, setUnread] = useState(true);
  const [messages, setMessages] = useState<Message[]>(initialGreetings);
  const [inputVal, setInputVal] = useState("");
  const [sessionStage, setSessionStage] = useState<"initial" | "asking" | "complete">("initial");
  
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleOptionClick = (option: string) => {
    // Add user response
    setMessages((prev) => [...prev, { sender: "user", text: option }]);

    setTimeout(() => {
      if (option.includes("Security Review") || option.includes("Scoping")) {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "Request a fixed-price proposal in 24 hours under bilateral mutual NDA:",
            type: "links",
            links: [{ label: "Get a fixed-price quote in 24h", url: "/free-assessment" }]
          }
        ]);
      } else if (option.includes("WhatsApp")) {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "You can start a direct chat with our lead security architects right away on WhatsApp:",
            type: "links",
            links: [{ label: `Open WhatsApp (${BRAND.contact.phone})`, url: BRAND.contact.whatsapp }]
          }
        ]);
      } else if (option.includes("PDF") || option.includes("Sample") || option.includes("Report")) {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "Certainly! You can download our full 46-page sample deliverable bundle or inspect the live interactive preview:",
            type: "links",
            links: [
              { label: "View Online Report Preview", url: "/sample-report" },
              { label: "Direct PDF Download (46 Pages)", url: "/trustlayerlabs-sample-vapt-report.pdf", download: true }
            ]
          }
        ]);
      } else {
        setSessionStage("asking");
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "Sure thing! Please share your architecture details or enter your work email below, and our lead offensive security team will follow up promptly."
          }
        ]);
      }
    }, 800);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const userText = inputVal.trim();
    setMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setInputVal("");

    setTimeout(() => {
      const emailMatch = userText.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
      const email = emailMatch ? emailMatch[0] : "";

      // Save message lead in localStorage
      const existingLeads = JSON.parse(localStorage.getItem("trustlayer_leads") || "[]");
      existingLeads.push({
        email: email || "chat-inquiry",
        message: userText,
        scope: "live-chat",
        timestamp: new Date().toISOString()
      });
      localStorage.setItem("trustlayer_leads", JSON.stringify(existingLeads));

      if (email) {
        // Dispatch to lead intake if work email was provided
        fetch("/api/leads", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: "Live Chat Inquirer",
            email,
            message: userText,
            source: "live-chat",
          }),
        }).catch(() => {});

        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: `Thank you! We received your inquiry. Our offensive security architects will review your details under mutual NDA and follow up at ${email} within one business day.`
          }
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "Thank you for reaching out! To receive a tailored scope proposal or vulnerability review, please share your work email address or message us directly at ceo@trustlayerlabs.co.in or on WhatsApp (+91 93912 20328)."
          }
        ]);
      }
      setSessionStage("complete");
    }, 1000);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setUnread(false);
  };

  return (
    <>
      {/* Floating Chat Bubble Button */}
      <div className="fixed bottom-20 md:bottom-6 right-5 sm:right-6 z-50">
        <button
          onClick={toggleChat}
          className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-primary hover:bg-primary-hover text-white rounded-full shadow-[0_4px_20px_rgba(59,91,219,0.3)] hover:scale-110 active:scale-95 transition-all duration-200"
          aria-label="Open support chat"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
          {unread && !isOpen && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-critical opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-critical text-[9px] font-bold text-white items-center justify-center font-sans">
                1
              </span>
            </span>
          )}
        </button>
      </div>

      {/* Chat Window Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[350px] sm:w-[380px] h-[480px] bg-surface border border-border/80 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden animate-fade-in font-sans">
          
          {/* Header */}
          <div className="p-4 bg-[#0A0A0A] border-b border-border/80 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-950/80 border border-blue-800 flex items-center justify-center text-blue-400">
                <Shield size={16} />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">Security Desk</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-[10px] text-zinc-300 uppercase tracking-widest font-semibold">Architect Online</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-zinc-300 hover:text-white p-1 transition-colors"
              aria-label="Close live security chat"
            >
              <X size={16} />
            </button>
          </div>

          {/* Message Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background/50 scrollbar-none">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div className={`max-w-[85%] rounded-2xl p-3.5 text-xs leading-relaxed font-sans ${
                  msg.sender === "user" 
                    ? "bg-primary text-white rounded-br-none" 
                    : "bg-surface border border-border text-textPrimary rounded-bl-none"
                }`}>
                  <p>{msg.text}</p>

                  {/* Render Options Buttons */}
                  {msg.type === "options" && msg.options && (
                    <div className="mt-3.5 space-y-2">
                      {msg.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleOptionClick(opt)}
                          className="w-full text-left p-2.5 bg-background border border-border hover:border-zinc-400 text-textPrimary font-semibold rounded-lg text-[11px] block transition-colors shadow-sm"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Render Link Buttons */}
                  {msg.type === "links" && msg.links && (
                    <div className="mt-3.5 space-y-2">
                      {msg.links.map((link) => (
                        <Link
                          key={link.label}
                          href={link.url}
                          download={link.download}
                          className="w-full text-center p-2.5 bg-primary hover:bg-primary-hover text-white font-bold rounded-lg text-[10px] uppercase tracking-wider block transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                        >
                          {link.label} <ArrowRight size={12} />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Footer Input Form */}
          <div className="p-3 bg-[#0A0A0A] border-t border-border/80">
            {sessionStage === "asking" ? (
              <form onSubmit={handleSend} className="flex gap-2">
                <input
                  type="text"
                  required
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="Type message or email..."
                  aria-label="Type message or email"
                  className="flex-1 bg-background border border-border rounded-lg px-3 py-2 text-xs text-textPrimary focus:outline-none focus:border-primary placeholder:text-textSecondary/40"
                />
                <button
                  type="submit"
                  aria-label="Send message"
                  className="p-2 bg-primary hover:bg-primary-hover text-white rounded-lg transition-colors flex items-center justify-center shadow-sm"
                >
                  <Send size={14} />
                </button>
              </form>
            ) : (
              <div className="text-center py-1">
                <span className="text-[10px] text-textSecondary uppercase tracking-widest font-semibold block">
                  {sessionStage === "complete" ? "✓ Message Synced" : "Secure End-to-End Encryption"}
                </span>
              </div>
            )}
          </div>

        </div>
      )}
    </>
  );
}
