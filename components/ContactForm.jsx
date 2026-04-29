"use client";

import { useState } from "react";
import { submitContact } from "@/lib/contactApi";
import { Loader2, CheckCircle2, AlertCircle, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    message: ""
  });
  const [status, setStatus] = useState("idle"); 
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      await submitContact(formData);
      setStatus("success");
      setFormData({ name: "", email: "", company: "", website: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error);
    }
  };

  return (
    <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      {status === "success" ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-500" />
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
          <p className="text-slate-400 max-w-sm mx-auto">Thank you for reaching out. Our security team will contact you within the next 2 hours.</p>
          <button 
            onClick={() => setStatus("idle")}
            className="mt-8 text-primary-500 font-bold hover:underline"
          >
            Send another message
          </button>
        </motion.div>
      ) : (
        <>
          <div className="mb-10">
            <h3 className="text-3xl font-bold text-white mb-2">Request a Consultation</h3>
            <p className="text-slate-400">Fill out the form below to speak with our security architects.</p>
          </div>

          {status === "error" && (
            <div className="mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-red-400 text-sm font-medium">{errorMessage}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-slate-400 text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-sm font-medium mb-2">Work Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-slate-400 text-sm font-medium mb-2">Company Name</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                  placeholder="Company Inc."
                />
              </div>
              <div>
                <label className="block text-slate-400 text-sm font-medium mb-2">Website</label>
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                  placeholder="https://example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-400 text-sm font-medium mb-2">How can we help?</label>
              <textarea
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none"
                placeholder="Describe your security needs..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-primary-600 hover:bg-primary-500 disabled:bg-slate-800 disabled:text-slate-500 text-white font-bold py-5 rounded-2xl transition-all flex items-center justify-center space-x-2 shadow-2xl"
            >
              {status === "loading" ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </>
      )}
    </div>
  );
}
