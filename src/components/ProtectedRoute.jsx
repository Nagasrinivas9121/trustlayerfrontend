import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";

export default function ProtectedRoute({ children, adminOnly }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen bg-[#05080d] flex flex-col items-center justify-center space-y-6 font-mono">
        {/* GOLDEN SECURITY SCANNER LOADER */}
        <div className="relative w-56 h-[2px] bg-white/5 overflow-hidden rounded-full">
          <motion.div 
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 w-1/3 h-full bg-gradient-to-r from-transparent via-amber-500 to-transparent shadow-[0_0_20px_#D4AF37]"
          />
        </div>
        
        <div className="text-center space-y-2">
          <p className="text-[10px] font-black text-amber-500 uppercase tracking-[0.4em] animate-pulse">
            Verifying_Security_Clearance
          </p>
          <p className="text-[8px] text-gray-600 uppercase tracking-[0.2em]">
            // UPLINK_STATUS: ENCRYPTED
          </p>
        </div>
      </div>
    );
  }

  if (!user) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (adminOnly && user.role !== "admin") {
    // Redirect non-admins to dashboard
    return <Navigate to="/dashboard" replace />;
  }

  // Smooth transition for authorized access
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.99 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}