import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";

export default function ProtectedRoute({ children, adminOnly }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen bg-[#05080d] flex flex-col items-center justify-center space-y-4">
        {/* Animated Security Scanner Loader */}
        <div className="relative w-48 h-1 bg-white/5 overflow-hidden rounded-full">
          <motion.div 
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 w-1/2 h-full bg-accent shadow-[0_0_15px_#00b7ff]"
          />
        </div>
        <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] animate-pulse">
          Authenticating_Identity...
        </p>
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

  // Wrap the protected content in a simple fade-in for a smoother transition
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}