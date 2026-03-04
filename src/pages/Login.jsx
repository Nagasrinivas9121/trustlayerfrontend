import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, useLocation, Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import { motion } from "framer-motion";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/dashboard";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Credentials required for access.");
      return;
    }

    try {
      setLoading(true);
      await login(email.trim(), password);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message || "Authentication failed. Check credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#05080d] px-4 relative overflow-hidden">
      {/* Background FX - Grid and Golden Nebula */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px] z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/5 rounded-full blur-[140px] pointer-events-none z-0" />

      <motion.div 
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="bg-gray-900/40 backdrop-blur-3xl p-8 md:p-10 rounded-xl border border-white/5 shadow-2xl">
          
          {/* Header */}
          <div className="text-center mb-10">
            <motion.img
              whileHover={{ rotate: 10, scale: 1.05 }}
              src={logo}
              alt="Trustlayer Labs"
              className="h-20 w-20 mx-auto mb-4 object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]"
            />
            {/* Improved Visibility Header */}
            <h2 className="text-3xl font-black text-white tracking-tighter uppercase italic block">
              Log
              <span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500"
                style={{ WebkitBackgroundClip: 'text', backgroundClip: 'text' }}
              >
                in
              </span>
            </h2>
            <p className="text-gray-500 text-[10px] font-mono mt-2 tracking-[0.3em] uppercase opacity-60">
              &gt; Identification_Required
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 text-[10px] font-bold text-red-400 bg-red-500/10 border border-red-500/20 p-4 rounded-lg text-center uppercase tracking-widest"
            >
              System_Alert: {error}
            </motion.div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[9px] font-black text-amber-500 uppercase tracking-[0.3em] mb-2 ml-1">
                Identity_Uplink (Email)
              </label>
              <input
                type="email"
                required
                className="w-full bg-white/[0.03] border border-white/10 px-4 py-4 rounded-lg focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 text-white transition-all placeholder:text-gray-700 font-mono text-sm"
                placeholder="operator@trustlayer.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-[9px] font-black text-amber-500 uppercase tracking-[0.3em] mb-2 ml-1">
                Security_Key (Password)
              </label>
              <input
                type="password"
                required
                className="w-full bg-white/[0.03] border border-white/10 px-4 py-4 rounded-lg focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 text-white transition-all placeholder:text-gray-700 font-mono text-sm"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.01, filter: "brightness(1.1)" }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-amber-500 to-amber-700 text-black font-black py-4 rounded-lg text-xs uppercase tracking-[0.2em] shadow-lg shadow-amber-900/20 disabled:opacity-50 transition-all mt-4"
            >
              {loading ? "AUTHENTICATING..." : "Establish Connection"}
            </motion.button>
          </form>

          <div className="mt-10 text-center border-t border-white/5 pt-6">
            <p className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">
              No clearance?{" "}
              <Link
                to="/register"
                className="text-amber-500 font-black hover:text-white transition-colors underline underline-offset-4"
              >
                Register_ID
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}