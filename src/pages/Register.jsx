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
      return setError("Passwords do not match."); // Updated from "Access keys"

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
    <div className="min-h-screen flex items-center justify-center bg-[#05080d] px-4 py-12 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 w-full max-w-2xl"
      >
        <div className="bg-gray-900/40 backdrop-blur-2xl p-8 md:p-12 rounded-[2rem] border border-white/10 shadow-2xl">
          
          {/* Header */}
          <div className="text-center mb-10">
            <img src={logo} alt="Logo" className="h-16 w-16 mx-auto mb-4 rounded-full border-2 border-accent/20" />
            <h2 className="text-3xl font-black text-white tracking-tighter uppercase italic">REGISTER</h2>
            <p className="text-gray-500 text-xs font-mono mt-2 tracking-[0.2em]">
              // Initialize your security profile
            </p>
          </div>

          {error && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
              className="bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-bold p-3 rounded-lg mb-6 text-center uppercase tracking-widest"
            >
              System Alert: {error}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="space-y-2">
                <label className="text-[10px] font-black text-accent uppercase ml-1">Email_Address</label>
                <input name="email" type="email" placeholder="name@domain.com" required onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-xl focus:border-accent/50 outline-none text-white transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-accent uppercase ml-1">Institution</label>
                <input name="college" type="text" placeholder="University Name" required onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-xl focus:border-accent/50 outline-none text-white transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-accent uppercase ml-1">Year_Standard</label>
                <input name="year" type="text" placeholder="e.g. 3rd Year" required onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-xl focus:border-accent/50 outline-none text-white transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-accent uppercase ml-1">Phone number</label>
                <input name="phone" type="tel" placeholder="10-digit mobile" required onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-xl focus:border-accent/50 outline-none text-white transition-all" />
              </div>

              {/* Updated Item #7: Access Key -> Password */}
              <div className="space-y-2">
                <label className="text-[10px] font-black text-accent uppercase ml-1">Password</label>
                <input name="password" type="password" placeholder="••••••••" required onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-xl focus:border-accent/50 outline-none text-white transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-accent uppercase ml-1">Confirm_Password</label>
                <input name="confirmPassword" type="password" placeholder="••••••••" required onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-xl focus:border-accent/50 outline-none text-white transition-all" />
              </div>

            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full bg-white text-black font-black py-4 rounded-xl text-xs uppercase tracking-[0.3em] hover:bg-accent hover:text-white transition-all shadow-xl shadow-accent/10 mt-4"
            >
              {loading ? "Transmitting..." : "Register"}
            </motion.button>
          </form>

          <p className="text-center text-xs text-gray-500 mt-8 font-medium">
            Already registered?{" "}
            <Link to="/login" className="text-accent font-black uppercase tracking-tighter hover:underline">
              Return to Login
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}