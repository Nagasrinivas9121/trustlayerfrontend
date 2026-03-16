import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AuthProvider } from "./context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Services from "./pages/Services";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./admin/AdminDashboard";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import RefundPolicy from "./pages/RefundPolicy";
import About from "./pages/About";

/**
 * TRUSTLAYER LABS - MAIN APPLICATION CORE
 * Synchronized with Gold/Amber brand identity.
 */

// Helper to reset scroll position on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Global Page Transition Wrapper
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -15 }}
    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        {/* Global selection color set to Gold */}
        <div className="flex flex-col min-h-screen bg-[#05080d] selection:bg-amber-500/30 selection:text-amber-200">
          <ScrollToTop />
          <Navbar />

          {/* MAIN CONTENT AREA */}
          <main className="flex-grow relative">
            
            {/* STATIC GLOBAL BACKGROUND GLOWS - Updated to Gold/Amber */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
              {/* Top Left Amber Nebula */}
              <div className="absolute top-[-5%] left-[-5%] w-[45%] h-[45%] bg-amber-600/5 blur-[120px] rounded-full" />
              {/* Bottom Right Bronze Nebula */}
              <div className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] bg-orange-900/10 blur-[100px] rounded-full" />
            </div>

            {/* ROUTE DEFINITIONS with Page Transitions */}
            <AnimatePresence mode="wait">
              <Routes>
                {/* PUBLIC ACCESS NODES */}
                <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
                <Route path="/courses" element={<PageWrapper><Courses /></PageWrapper>} />
                <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
                <Route path="/login" element={<PageWrapper><Login /></PageWrapper>} />
                <Route path="/register" element={<PageWrapper><Register /></PageWrapper>} />
                <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
                
                {/* PROTOCOL DOCUMENTS */}
                <Route path="/privacy-policy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
                <Route path="/terms-and-conditions" element={<PageWrapper><TermsAndConditions /></PageWrapper>} />
                <Route path="/refund" element={<PageWrapper><RefundPolicy /></PageWrapper>} />

                {/* PROTECTED USER DASHBOARD */}
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <PageWrapper><Dashboard /></PageWrapper>
                    </ProtectedRoute>
                  }
                />

                {/* SECURE ADMIN TERMINAL */}
                <Route
                  path="/admin"
                  element={
                    <ProtectedRoute adminOnly>
                      <PageWrapper><AdminDashboard /></PageWrapper>
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </AnimatePresence>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}