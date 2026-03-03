import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import { motion } from "framer-motion";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    college: "",
    year: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const { email, college, year, phone, password, confirmPassword } = form;

    if (!email || !college || !year || !phone || !password || !confirmPassword)
      return setError("All data streams are required.");

    if (!/^\d{10}$/.test(phone))
      return setError("Phone must be exactly 10 digits.");

    if (password !== confirmPassword)
      return setError("Passwords do not match.");

    try {
      setLoading(true);
      await register({ email, college, year, phone, password });
      navigate("/login");
    } catch (err) {
      setError(err.message || "Enlistment failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#05080d] px-4 py-12 relative overflow-hidden font-mono">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-amber-500/5 to-transparent pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-3xl"
      >
        <div className="bg-gray-900/40 backdrop-blur-3xl p-8 md:p-12 rounded-xl border border-white/5 shadow-2xl">
          
          {/* Header */}
          <div className="text-center mb-10">
            <img 
              src={logo} 
              alt="TrustLayer Labs" 
              className="h-20 w-20 mx-auto mb-4 object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]" 
            />
            <h2 className="text-3xl font-black text-white tracking-tighter uppercase italic">
              REGISTER
            </h2>
            <p className="text-gray-500 text-[10px] font-mono mt-2 tracking-[0.3em] uppercase opacity-60">
              &gt; INITIALIZE_SECURITY_PROFILE
            </p>
          </div>

          {error && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-bold p-4 rounded-lg mb-8 text-center uppercase tracking-widest"
            >
              System_Alert: {error}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              
              <div className="space-y-2 group">
                <label className="text-[9px] font-black text-amber-500 uppercase tracking-[0.2em] ml-1 group-focus-within:text-amber-400 transition-colors">Email_Identity</label>
                <input name="email" type="email" placeholder="name@domain.com" required onChange={handleChange}
                  className="w-full bg-white/[0.03] border border-white/10 px-4 py-4 rounded-lg focus:border-amber-500/50 outline-none text-white transition-all text-sm placeholder:text-gray-800" />
              </div>

              <div className="space-y-2 group">
                <label className="text-[9px] font-black text-amber-500 uppercase tracking-[0.2em] ml-1 group-focus-within:text-amber-400 transition-colors">Assigned_Institution</label>
                <input name="college" type="text" placeholder="University Name" required onChange={handleChange}
                  className="w-full bg-white/[0.03] border border-white/10 px-4 py-4 rounded-lg focus:border-amber-500/50 outline-none text-white transition-all text-sm placeholder:text-gray-800" />
              </div>

              <div className="space-y-2 group">
                <label className="text-[9px] font-black text-amber-500 uppercase tracking-[0.2em] ml-1 group-focus-within:text-amber-400 transition-colors">Clearance_Level (Year)</label>
                <input name="year" type="text" placeholder="e.g. 3rd Year" required onChange={handleChange}
                  className="w-full bg-white/[0.03] border border-white/10 px-4 py-4 rounded-lg focus:border-amber-500/50 outline-none text-white transition-all text-sm placeholder:text-gray-800" />
              </div>

              <div className="space-y-2 group">
                <label className="text-[9px] font-black text-amber-500 uppercase tracking-[0.2em] ml-1 group-focus-within:text-amber-400 transition-colors">Comms_Uplink (Phone)</label>
                <input name="phone" type="tel" placeholder="10-digit mobile" required onChange={handleChange}
                  className="w-full bg-white/[0.03] border border-white/10 px-4 py-4 rounded-lg focus:border-amber-500/50 outline-none text-white transition-all text-sm placeholder:text-gray-800" />
              </div>

              <div className="space-y-2 group">
                <label className="text-[9px] font-black text-amber-500 uppercase tracking-[0.2em] ml-1 group-focus-within:text-amber-400 transition-colors">Password</label>
                <input name="password" type="password" placeholder="••••••••" required onChange={handleChange}
                  className="w-full bg-white/[0.03] border border-white/10 px-4 py-4 rounded-lg focus:border-amber-500/50 outline-none text-white transition-all text-sm placeholder:text-gray-800" />
              </div>

              <div className="space-y-2 group">
                <label className="text-[9px] font-black text-amber-500 uppercase tracking-[0.2em] ml-1 group-focus-within:text-amber-400 transition-colors">Confirm Password</label>
                <input name="confirmPassword" type="password" placeholder="••••••••" required onChange={handleChange}
                  className="w-full bg-white/[0.03] border border-white/10 px-4 py-4 rounded-lg focus:border-amber-500/50 outline-none text-white transition-all text-sm placeholder:text-gray-800" />
              </div>

            </div>

            <motion.button
              whileHover={{ scale: 1.01, brightness: 1.1 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-amber-500 to-amber-700 text-black font-black py-4 rounded-lg text-xs uppercase tracking-[0.3em] shadow-lg shadow-amber-900/20 transition-all mt-6"
            >
              {loading ? "TRANSMITTING_DATA..." : "Finalize Enlistment"}
            </motion.button>
          </form>

          <div className="mt-10 text-center border-t border-white/5 pt-6">
            <p className="text-[10px] text-gray-500 font-mono uppercase tracking-[0.2em]">
              Existing Operator?{" "}
              <Link to="/login" className="text-amber-500 font-black hover:text-white transition-colors underline underline-offset-4">
                Return to Login
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}