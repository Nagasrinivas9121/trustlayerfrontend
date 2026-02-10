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
    <div className="min-h-screen bg-[#05080d] text-white p-4 md:p-8 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 blur-[100px] rounded-full pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto relative z-10"
      >
        {/* Header */}
        <div className="mb-10 border-l-4 border-accent pl-6">
          <h2 className="text-3xl font-black tracking-tighter uppercase italic">User_Settings</h2>
          <p className="text-gray-500 font-mono text-xs mt-1 uppercase tracking-widest">
            // Modify your digital signature
          </p>
        </div>

        <div className="bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {["name", "college", "course", "year", "phone", "city"].map((f) => (
              <div key={f} className="group">
                <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2 ml-1 group-focus-within:text-accent transition-colors">
                  {f === "year" ? "Year / Standard" : f}
                </label>
                <input
                  type="text"
                  placeholder={`Enter ${f}...`}
                  value={form[f] || ""}
                  onChange={(e) => setForm({ ...form, [f]: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-xl focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 text-white transition-all placeholder:text-gray-700"
                />
              </div>
            ))}

            <div className="md:col-span-2 pt-6 border-t border-white/5 mt-4 flex items-center justify-between">
              <AnimatePresence>
                {showSuccess && (
                  <motion.span 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-accent font-mono text-xs font-bold"
                  >
                    DATA_SYNCHRONIZED_SUCCESSFULLY
                  </motion.span>
                )}
              </AnimatePresence>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSaving}
                className="bg-white text-black px-10 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-accent hover:text-white transition-all disabled:opacity-50 ml-auto shadow-lg shadow-accent/10"
              >
                {isSaving ? "Uploading..." : "Save Changes"}
              </motion.button>
            </div>
          </form>
        </div>

        {/* Footer Note */}
        <div className="mt-8 bg-accent/5 border border-accent/10 p-4 rounded-xl">
          <p className="text-[10px] text-gray-400 font-mono text-center uppercase tracking-tighter">
            <span className="text-accent mr-2">NOTICE:</span> 
            Profile updates may take a few seconds to propagate through the node network.
          </p>
        </div>
      </motion.div>
    </div>
  );
}