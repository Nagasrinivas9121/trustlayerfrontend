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

// Helper to reset scroll position on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Wrapper for page transitions
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen bg-[#05080d] selection:bg-accent selection:text-white">
          <ScrollToTop />
          <Navbar />

          {/* MAIN CONTENT AREA */}
          <main className="flex-grow relative">
            {/* Global background glow that stays put */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
              <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/5 blur-[120px] rounded-full" />
              <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/5 blur-[120px] rounded-full" />
            </div>

            <AnimatePresence mode="wait">
              <Routes>
                {/* PUBLIC ROUTES */}
                <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
                <Route path="/courses" element={<PageWrapper><Courses /></PageWrapper>} />
                <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
                <Route path="/login" element={<PageWrapper><Login /></PageWrapper>} />
                <Route path="/register" element={<PageWrapper><Register /></PageWrapper>} />
                <Route path="/privacy-policy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
                <Route path="/terms-and-conditions" element={<PageWrapper><TermsAndConditions /></PageWrapper>} />
                <Route path="/refund" element={<PageWrapper><RefundPolicy /></PageWrapper>} />

                {/* USER DASHBOARD */}
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <PageWrapper><Dashboard /></PageWrapper>
                    </ProtectedRoute>
                  }
                />

                {/* ADMIN DASHBOARD */}
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