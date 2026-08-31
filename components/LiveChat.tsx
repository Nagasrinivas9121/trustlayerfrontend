"use client";

import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Shield, Send, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Message {
  sender: "bot" | "user";
  text: string;
  type?: "text" | "options" | "links";
  options?: string[];
  links?: { label: string; url: string; download?: boolean }[];
}

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [unread, setUnread] = useState(true);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputVal, setInputVal] = useState("");
  const [sessionStage, setSessionStage] = useState<"initial" | "asking" | "complete">("initial");
  
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial bot greetings
    setMessages([
      {
        sender: "bot",
        text: "Hi! Welcome to TrustLayerLabs. I'm your Security Assistant. 🛡️"
      },
      {
        sender: "bot",
        text: "How can I help you secure your APIs, Cloud settings, or Web Application today?",
        type: "options",
        options: [
          "📋 Book 20-Min Security Review",
          "📄 Download Redacted VAPT PDF",
          "📱 Chat on WhatsApp (+91 88224 02811)",
          "💬 Ask a Security Question"
        ]
      }
    ]);
  }, []);

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
            text: "Excellent! You can schedule a confidential 20-minute scoping review directly on our calendar under mutual NDA:",
            type: "links",
            links: [{ label: "Open Security Review Calendar", url: "https://calendar.app.google/jnamj3gawxVunPJm9" }]
          }
        ]);
      } else if (option.includes("WhatsApp")) {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "You can start a direct chat with our lead security architects right away on WhatsApp:",
            type: "links",
            links: [{ label: "Open WhatsApp (+91 88224 02811)", url: "https://wa.me/918822402811" }]
          }
        ]);
      } else if (option.includes("PDF")) {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "Certainly! You can download our full redacted PDF report bundle or view the live interactive preview:",
            type: "links",
            links: [
              { label: "Download Sample PDF Report", url: "/trustlayerlabs-sample-vapt-report.pdf", download: true },
              { label: "View Online Report Preview", url: "/sample-report" }
            ]
          }
        ]);
      } else {
        setSessionStage("asking");
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "Sure thing! Please write your question or enter your email address below, and our lead security team will respond promptly."
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
      // Save message lead in localStorage
      const existingLeads = JSON.parse(localStorage.getItem("trustlayer_leads") || "[]");
      existingLeads.push({
        email: userText.includes("@") ? userText : "chat-user",
        message: userText,
        scope: "live-chat",
        timestamp: new Date().toISOString()
      });
      localStorage.setItem("trustlayer_leads", JSON.stringify(existingLeads));

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Thank you! I have transmitted your message to our security operations team. We will review your context and contact you via email shortly."
        }
      ]);
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
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={toggleChat}
          className="relative flex items-center justify-center w-14 h-14 bg-primary hover:bg-primary-hover text-white rounded-full shadow-[0_4px_20px_rgba(59,91,219,0.3)] hover:scale-110 active:scale-95 transition-all duration-200"
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
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Shield size={16} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-textPrimary uppercase tracking-wider">Security Desk</h4>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse"></span>
                  <span className="text-[10px] text-textSecondary uppercase tracking-widest font-semibold">Architect Online</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-textSecondary hover:text-textPrimary p-1"
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
                  className="flex-1 bg-background border border-border rounded-lg px-3 py-2 text-xs text-textPrimary focus:outline-none focus:border-primary placeholder:text-textSecondary/40"
                />
                <button
                  type="submit"
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
