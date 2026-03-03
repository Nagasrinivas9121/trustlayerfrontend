import { useState } from "react";
import {
  Shield,
  Server,
  Cloud,
  ArrowRight,
  Lock,
  X,
  Code,
  Globe,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const API_URL = import.meta.env.VITE_API_URL;

export default function Services() {
  const { user, token } = useAuth();
  const navigate = useNavigate();

  const [selectedService, setSelectedService] = useState(null);
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState(user?.email || "");
  const [loading, setLoading] = useState(false);

  const servicesList = [
    {
      id: 1,
      title: "VAPT (Vulnerability Assessment)",
      description: "Identify and fix security loopholes before hackers exploit them.",
      icon: <Shield size={28} className="text-amber-500" />,
      category: "Security",
    },
    {
      id: 2,
      title: "Full-Stack Web Development",
      description: "Scalable, secure, high-performance web applications.",
      icon: <Code size={28} className="text-amber-500" />,
      category: "Development",
    },
    {
      id: 3,
      title: "SOC Setup & Monitoring",
      description: "24/7 monitoring and incident response systems.",
      icon: <Server size={28} className="text-amber-500" />,
      category: "Security",
    },
    {
      id: 4,
      title: "E-Commerce & CMS Solutions",
      description: "Robust stores and custom CMS platforms.",
      icon: <Globe size={28} className="text-amber-500" />,
      category: "Development",
    },
    {
      id: 5,
      title: "Cloud Hardening",
      description: "Secure AWS, Azure, and GCP infrastructure.",
      icon: <Cloud size={28} className="text-amber-500" />,
      category: "Security",
    },
    {
      id: 6,
      title: "Compliance Audits",
      description: "ISO, SOC2, HIPAA, GDPR compliance support.",
      icon: <Lock size={28} className="text-amber-500" />,
      category: "Security",
    },
  ];

  const submitRequest = async () => {
    if (!email.trim()) {
      alert("Email is required");
      return;
    }

    if (!description.trim()) {
      alert("Please describe your requirement");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(`${API_URL}/api/services`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token && { Authorization: `Bearer ${token}` }),
        },
        body: JSON.stringify({
          service: selectedService,
          description,
          requesterEmail: email,
        }),
      });

      if (!res.ok) throw new Error("Request failed");

      alert("✅ Service request submitted successfully!");
      setSelectedService(null);
      setDescription("");
    } catch (err) {
      alert("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#05080d] text-white p-6 md:p-12 relative overflow-hidden font-mono">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      <div className="max-w-6xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="text-center mb-16 mt-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black italic uppercase mb-4 tracking-tighter"
          >
            Tech & Security <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Solutions</span>
          </motion.h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-xs md:text-sm uppercase tracking-widest">
            // Select a professional service node to initialize collaboration
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedService(service.title)}
              className="group bg-gray-900/30 p-8 rounded-xl border border-white/5 
                         hover:border-amber-500/50 cursor-pointer transition-all duration-300
                         backdrop-blur-sm relative overflow-hidden shadow-2xl"
            >
              {/* Subtle hover glow */}
              <div className="absolute -inset-1 bg-amber-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-lg" />
              
              <div className="mb-6 relative z-10">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-tight group-hover:text-amber-400 transition-colors relative z-10">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 relative z-10">{service.description}</p>
              
              <div className="mt-auto text-amber-500 text-[10px] font-black uppercase tracking-[0.2em] flex items-center relative z-10">
                Request_Service <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* MODAL */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/90 backdrop-blur-md"
                onClick={() => setSelectedService(null)}
              />

              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                className="bg-[#0a0f18] border border-amber-500/20 p-8 md:p-10 rounded-xl w-full max-w-lg relative z-10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
              >
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-6 right-6 text-gray-500 hover:text-amber-500 transition-colors"
                >
                  <X size={20} />
                </button>

                <div className="mb-8">
                  <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-2">
                    {selectedService}
                  </h3>
                  <div className="h-1 w-12 bg-amber-500" />
                </div>

                {/* EMAIL FIELD */}
                <div className="mb-4">
                  <label className="text-[10px] font-black text-amber-500 uppercase tracking-widest mb-2 block ml-1">Requester_Identity</label>
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-4 rounded-lg bg-white/[0.03]
                               border border-white/10 text-white
                               focus:border-amber-500/50 outline-none transition-all font-mono text-sm"
                  />
                </div>

                {/* DESCRIPTION */}
                <div className="mb-6">
                  <label className="text-[10px] font-black text-amber-500 uppercase tracking-widest mb-2 block ml-1">Requirement_Brief</label>
                  <textarea
                    rows="4"
                    placeholder="Describe your project goals..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-4 rounded-lg bg-white/[0.03]
                               border border-white/10 text-white
                               focus:border-amber-500/50 outline-none resize-none transition-all font-mono text-sm"
                  />
                </div>

                <button
                  onClick={submitRequest}
                  disabled={loading}
                  className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-700 text-black font-black
                             rounded-lg hover:brightness-110 transition-all disabled:opacity-50 
                             uppercase text-xs tracking-[0.2em] shadow-lg shadow-amber-900/20"
                >
                  {loading ? "TRANSMITTING..." : "Initialize Request"}
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}