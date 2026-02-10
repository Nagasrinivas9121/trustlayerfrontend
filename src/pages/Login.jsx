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
      {/* Background FX */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="bg-gray-900/50 backdrop-blur-2xl p-8 rounded-3xl border border-white/10 shadow-2xl">
          
          {/* Header */}
          <div className="text-center mb-10">
            <motion.img
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.7 }}
              src={logo}
              alt="Trustlayer Labs"
              className="h-16 w-16 mx-auto mb-4 rounded-full border-2 border-accent/30 shadow-[0_0_15px_rgba(0,183,255,0.2)]"
            />
            <h2 className="text-3xl font-black text-white tracking-tighter uppercase">
              Secure Access
            </h2>
            <p className="text-gray-500 text-xs font-mono mt-2 tracking-widest uppercase">
              // Identify yourself to continue
            </p>
          </div>

          {/* Error */}
          {error && (
            <motion.div 
              initial={{ x: -10 }} animate={{ x: 0 }}
              className="mb-6 text-xs font-bold text-red-400 bg-red-500/10 border border-red-500/20 p-3 rounded-lg text-center uppercase tracking-tighter"
            >
              Error: {error}
            </motion.div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[10px] font-black text-accent uppercase tracking-[0.2em] mb-2 ml-1">
                Identity (Email)
              </label>
              <input
                type="email"
                required
                className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-xl focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 text-white transition-all placeholder:text-gray-700"
                placeholder="operator@trustlayer.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-[10px] font-black text-accent uppercase tracking-[0.2em] mb-2 ml-1">
                Access Key (Password)
              </label>
              <input
                type="password"
                required
                className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-xl focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 text-white transition-all placeholder:text-gray-700"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full bg-white text-black font-black py-4 rounded-xl text-xs uppercase tracking-[0.2em] hover:bg-accent hover:text-white transition-all disabled:opacity-50"
            >
              {loading ? "Decrypting..." : "Initialize Session"}
            </motion.button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-xs text-gray-500 font-medium">
              New operator?{" "}
              <Link
                to="/register"
                className="text-accent font-black uppercase tracking-tighter hover:underline underline-offset-4"
              >
                Register Credentials
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}