import { useState } from "react";
import { Shield, Server, Cloud, ArrowRight, Lock, X } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

// ✅ Backend URL from env
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
      icon: <Shield size={32} className="text-accent" />,
    },
    {
      id: 2,
      title: "SOC Setup & Monitoring",
      description: "24/7 security operations center to monitor and respond to threats.",
      icon: <Server size={32} className="text-accent" />,
    },
    {
      id: 3,
      title: "Cloud Security Hardening",
      description: "Secure your AWS, Azure, or GCP infrastructure against breaches.",
      icon: <Cloud size={32} className="text-accent" />,
    },
    {
      id: 4,
      title: "Compliance Audits",
      description: "Get compliant with ISO 27001, SOC2, HIPAA, and GDPR standards.",
      icon: <Lock size={32} className="text-accent" />,
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
        body: JSON.stringify({
          service: selectedService,
          description,
        }),
      });

      if (!res.ok) throw new Error("Request failed");

      alert("Service request submitted successfully!");
      setSelectedService(null);
      setDescription("");
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-16 mt-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Enterprise Security Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            End-to-end cybersecurity solutions tailored to your business needs.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {servicesList.map((service) => (
            <div
              key={service.id}
              className="bg-white text-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 cursor-pointer group"
              onClick={() => setSelectedService(service.title)}
            >
              <div className="flex items-start gap-6">
                <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-blue-50 transition-colors">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <span className="text-primary font-bold flex items-center text-sm uppercase tracking-wide">
                    Request Proposal
                    <ArrowRight
                      size={16}
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {selectedService && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
            <div className="bg-white text-gray-900 p-6 rounded-2xl w-full max-w-md shadow-2xl relative">
              
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>

              <h3 className="text-2xl font-bold mb-2">
                Request Proposal
              </h3>
              <p className="text-gray-500 mb-6 text-sm">
                For:{" "}
                <span className="font-semibold text-primary">
                  {selectedService}
                </span>
              </p>

              <textarea
                rows="5"
                className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:ring-2 focus:ring-primary outline-none resize-none text-gray-900 placeholder-gray-500"
                placeholder="Describe your requirements..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-5 py-2.5 text-gray-600 font-medium hover:bg-gray-100 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={submitRequest}
                  disabled={loading}
                  className="px-5 py-2.5 bg-primary text-white font-bold rounded-lg hover:opacity-90 disabled:opacity-70"
                >
                  {loading ? "Submitting..." : "Submit Request"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}