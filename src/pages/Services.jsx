import { useState } from "react";
import { Shield, Server, Cloud, ArrowRight, Lock, X, Code, Globe } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const API_URL = import.meta.env.VITE_API_URL;

export default function Services() {
  const { user, token } = useAuth();
  const navigate = useNavigate();

  const [selectedService, setSelectedService] = useState(null);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const servicesList = [
    {
      id: 1,
      title: "VAPT (Vulnerability Assessment)",
      description: "Identify and fix security loopholes before hackers exploit them.",
      icon: <Shield size={28} className="text-accent" />,
      category: "Security"
    },
    {
      id: 2,
      title: "Full-Stack Web Development",
      description: "Scalable, secure, and high-performance web applications built with modern stacks.",
      icon: <Code size={28} className="text-accent" />,
      category: "Development"
    },
    {
      id: 3,
      title: "SOC Setup & Monitoring",
      description: "24/7 security operations center to monitor and respond to threats in real-time.",
      icon: <Server size={28} className="text-accent" />,
      category: "Security"
    },
    {
      id: 4,
      title: "E-Commerce & CMS Solutions",
      description: "Robust online stores and custom content management systems tailored for growth.",
      icon: <Globe size={28} className="text-accent" />,
      category: "Development"
    },
    {
      id: 5,
      title: "Cloud Hardening",
      description: "Secure your AWS, Azure, or GCP infrastructure against complex data breaches.",
      icon: <Cloud size={28} className="text-accent" />,
      category: "Security"
    },
    {
      id: 6,
      title: "Compliance Audits",
      description: "Get compliant with ISO 27001, SOC2, HIPAA, and GDPR standards with ease.",
      icon: <Lock size={28} className="text-accent" />,
      category: "Security"
    },
  ];

  const submitRequest = async () => {
    if (!user) {
      navigate("/login", { state: { from: "/services" } });
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
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ service: selectedService, description }),
      });

      if (!res.ok) throw new Error("Request failed");

      alert("Service request submitted! Our engineers will contact you.");
      setSelectedService(null);
      setDescription("");
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#05080d] text-white p-4 md:p-8 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(0,183,255,0.1),transparent_50%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20 mt-12"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter italic uppercase mb-6">
            Tech & Security <span className="text-accent">Solutions</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
            From iron-clad cybersecurity to high-performance web architecture. 
            Select a service to initialize a proposal.
          </p>
        </motion.div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {servicesList.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, borderColor: "rgba(0,183,255,0.4)" }}
              onClick={() => setSelectedService(service.title)}
              className="bg-gray-900/40 backdrop-blur-xl p-8 rounded-2xl border border-white/5 shadow-2xl cursor-pointer group transition-all"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-accent/10 rounded-xl border border-accent/20">
                    {service.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-600">
                    {service.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                
                <div className="flex items-center text-xs font-black uppercase tracking-widest text-accent/70 group-hover:text-accent transition-colors">
                  Initialize Proposal
                  <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MODAL */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
              />
              
              <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="bg-[#0a0f18] border border-white/10 p-8 rounded-3xl w-full max-w-lg shadow-[0_0_50px_rgba(0,0,0,0.5)] relative z-10"
              >
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>

                <div className="mb-8">
                  <h3 className="text-2xl font-black uppercase tracking-tighter mb-2 italic">
                    Project Brief
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="h-1 w-6 bg-accent rounded-full" />
                    <p className="text-gray-400 text-sm font-mono">
                      SERVICE_ID: <span className="text-accent">{selectedService.toUpperCase().replace(/\s/g, '_')}</span>
                    </p>
                  </div>
                </div>

                <textarea
                  rows="5"
                  className="w-full bg-white/5 border border-white/10 p-4 rounded-xl mb-6 focus:border-accent/50 outline-none resize-none text-white placeholder:text-gray-700 transition-all"
                  placeholder="Tell us about your project or security requirements..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />

                <div className="flex flex-col gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={submitRequest}
                    disabled={loading}
                    className="w-full py-4 bg-white text-black font-black uppercase text-xs tracking-[0.2em] rounded-xl hover:bg-accent hover:text-white transition-all disabled:opacity-50"
                  >
                    {loading ? "Transmitting Data..." : "Submit Proposal Request"}
                  </motion.button>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="w-full py-3 text-gray-600 font-bold text-xs uppercase tracking-widest hover:text-gray-400 transition-colors"
                  >
                    Cancel Session
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}