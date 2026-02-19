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
      icon: <Shield size={28} className="text-accent" />,
      category: "Security",
    },
    {
      id: 2,
      title: "Full-Stack Web Development",
      description: "Scalable, secure, high-performance web applications.",
      icon: <Code size={28} className="text-accent" />,
      category: "Development",
    },
    {
      id: 3,
      title: "SOC Setup & Monitoring",
      description: "24/7 monitoring and incident response systems.",
      icon: <Server size={28} className="text-accent" />,
      category: "Security",
    },
    {
      id: 4,
      title: "E-Commerce & CMS Solutions",
      description: "Robust stores and custom CMS platforms.",
      icon: <Globe size={28} className="text-accent" />,
      category: "Development",
    },
    {
      id: 5,
      title: "Cloud Hardening",
      description: "Secure AWS, Azure, and GCP infrastructure.",
      icon: <Cloud size={28} className="text-accent" />,
      category: "Security",
    },
    {
      id: 6,
      title: "Compliance Audits",
      description: "ISO, SOC2, HIPAA, GDPR compliance support.",
      icon: <Lock size={28} className="text-accent" />,
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
    <div className="min-h-screen bg-[#05080d] text-white p-6">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16 mt-10">
          <h2 className="text-4xl md:text-6xl font-black italic uppercase mb-4">
            Tech & Security <span className="text-accent">Solutions</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Select a service and submit your project requirements.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service.title)}
              className="bg-gray-900/40 p-8 rounded-2xl border border-white/10
                         hover:border-accent cursor-pointer transition"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm">{service.description}</p>
              <div className="mt-6 text-accent text-sm flex items-center">
                Request Service <ArrowRight size={14} className="ml-2" />
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
              <div
                className="absolute inset-0 bg-black/80"
                onClick={() => setSelectedService(null)}
              />

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-[#0a0f18] p-8 rounded-2xl w-full max-w-lg relative z-10"
              >
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 text-gray-500"
                >
                  <X />
                </button>

                <h3 className="text-2xl font-bold mb-6">
                  {selectedService}
                </h3>

                {/* EMAIL FIELD */}
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full mb-4 p-4 rounded-xl bg-white/5
                             border border-white/10 text-white
                             focus:border-accent outline-none"
                />

                {/* DESCRIPTION */}
                <textarea
                  rows="5"
                  placeholder="Describe your requirement..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full mb-6 p-4 rounded-xl bg-white/5
                             border border-white/10 text-white
                             focus:border-accent outline-none resize-none"
                />

                <button
                  onClick={submitRequest}
                  disabled={loading}
                  className="w-full py-4 bg-white text-black font-bold
                             rounded-xl hover:bg-accent hover:text-white
                             transition disabled:opacity-50"
                >
                  {loading ? "Submitting..." : "Submit Request"}
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}