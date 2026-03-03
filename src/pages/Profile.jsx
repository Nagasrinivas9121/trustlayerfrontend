import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Profile() {
  const { user, updateProfile } = useAuth();
  const [form, setForm] = useState(user);
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      await updateProfile(form);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (err) {
      console.error("Update failed", err);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#05080d] text-white p-4 md:p-8 relative overflow-hidden font-mono">
      {/* Background Decor - Golden Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        {/* Header - Styled with Gold Border */}
        <div className="mb-10 border-l-4 border-amber-500 pl-6">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase italic">
            Personnel_<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Profile</span>
          </h2>
          <p className="text-gray-500 text-[10px] mt-2 uppercase tracking-[0.3em] opacity-60">
            &gt; SYNC_DIGITAL_SIGNATURE_AND_CREDENTIALS
          </p>
        </div>

        <div className="bg-gray-900/40 backdrop-blur-2xl border border-white/5 rounded-xl p-8 md:p-10 shadow-2xl">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {["name", "college", "course", "year", "phone", "city"].map((f) => (
              <div key={f} className="group">
                <label className="block text-[9px] font-black text-amber-500/60 uppercase tracking-[0.2em] mb-2 ml-1 group-focus-within:text-amber-400 transition-colors">
                  {f === "year" ? "Clearance_Level (Year)" : f === "college" ? "Assigned_Institution" : f.replace('_', ' ')}
                </label>
                <input
                  type="text"
                  placeholder={`Input ${f}...`}
                  value={form[f] || ""}
                  onChange={(e) => setForm({ ...form, [f]: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/10 px-4 py-4 rounded-lg focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 text-white transition-all placeholder:text-gray-800 font-mono text-sm"
                />
              </div>
            ))}

            <div className="md:col-span-2 pt-8 border-t border-white/5 mt-4 flex items-center justify-between">
              <div className="min-h-[20px]">
                <AnimatePresence>
                  {showSuccess && (
                    <motion.span 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-amber-500 font-mono text-[10px] font-black tracking-widest uppercase"
                    >
                      [ STATUS: DATA_SYNCHRONIZED ]
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

              <motion.button
                whileHover={{ scale: 1.02, brightness: 1.1 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSaving}
                className="bg-gradient-to-r from-amber-500 to-amber-700 text-black px-10 py-4 rounded-lg font-black text-[10px] uppercase tracking-[0.2em] shadow-lg shadow-amber-900/20 disabled:opacity-50 transition-all"
              >
                {isSaving ? "UPLOADING_CHANGES..." : "Commit Changes"}
              </motion.button>
            </div>
          </form>
        </div>

        {/* Footer Note with updated email */}
        <div className="mt-8 bg-amber-500/5 border border-amber-500/10 p-6 rounded-lg backdrop-blur-sm">
          <p className="text-[9px] text-gray-500 font-mono text-center uppercase tracking-[0.2em] leading-relaxed">
            <span className="text-amber-600 font-black mr-2">PROTOCOL_WARNING:</span> 
            Updates propagate through the node network instantly. For manual identity verification, contact <span className="text-white font-bold">trustlayerlabs@gmail.com</span>.
          </p>
        </div>
      </motion.div>
    </div>
  );
}