import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";

const API_URL = import.meta.env.VITE_API_URL;

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
};

export default function Dashboard() {
  const { user, token } = useAuth();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) return;
    fetch(`${API_URL}/api/enrollments`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setCourses(data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [token]);

  if (!user) return null;

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0f18] flex items-center justify-center">
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }} 
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-accent text-xl font-bold tracking-widest"
        >
          LOADING...
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0f18] text-white p-4 md:p-8 overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto"
      >
        {/* HEADER SECTION */}
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-800 pb-6">
          <div>
            <h2 className="text-4xl font-extrabold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              Student Dashboard
            </h2>
            <p className="text-gray-400 mt-2">
              Welcome back, <span className="text-accent font-medium">{user.email}</span>
            </p>
          </div>
          <motion.span 
            whileHover={{ scale: 1.05 }}
            className="mt-4 md:mt-0 bg-accent/10 text-accent px-6 py-2 rounded-full text-xs font-bold uppercase border border-accent/30 shadow-[0_0_15px_rgba(var(--accent-rgb),0.1)]"
          >
            {user.role}
          </motion.span>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* LEFT — COURSES */}
          <div className="md:col-span-2 space-y-6">
            <motion.div 
              variants={itemVariants}
              className="bg-gray-800/40 backdrop-blur-md p-8 rounded-2xl border border-gray-700 shadow-2xl"
            >
              <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                <span className="w-2 h-6 bg-accent rounded-full"></span>
                My Learning
              </h3>

              {courses.length > 0 ? (
                <div className="space-y-6">
                  {courses.map((course) => (
                    <motion.div
                      key={course.id}
                      whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.03)" }}
                      className="group bg-gray-900/50 border border-gray-700 p-5 rounded-xl transition-all duration-300 shadow-lg"
                    >
                      <div className="flex justify-between mb-4">
                        <h4 className="font-bold text-lg group-hover:text-accent transition-colors">
                          {course.title}
                        </h4>
                        <span className="text-[10px] font-bold bg-green-500/10 text-green-400 border border-green-500/20 px-3 py-1 rounded-full uppercase tracking-wider">
                          Active
                        </span>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className="relative w-full bg-gray-800 h-3 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${course.Enrollment?.progress || 0}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="absolute top-0 left-0 bg-gradient-to-r from-accent to-blue-400 h-full rounded-full shadow-[0_0_10px_rgba(0,120,255,0.5)]"
                        />
                      </div>

                      <div className="flex justify-between items-center mt-3">
                         <p className="text-xs font-mono text-gray-500">
                          {course.Enrollment?.progress || 0}% COMPLETE
                        </p>
                        {course.driveLink && (
                          <motion.a
                            whileHover={{ x: 5 }}
                            href={course.driveLink}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm font-bold text-accent flex items-center gap-1"
                          >
                            ACCESS COURSE <span className="text-lg">→</span>
                          </motion.a>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <EmptyState />
              )}
            </motion.div>
          </div>

          {/* RIGHT — PROFILE & HELP */}
          <div className="space-y-8">
            <motion.div 
              variants={itemVariants}
              className="bg-gray-800/40 backdrop-blur-md p-8 rounded-2xl border border-gray-700 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-accent/5 rounded-full blur-3xl"></div>
              <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-3">Student Profile</h3>
              
              <div className="space-y-5">
                <ProfileRow label="Email" value={user.email} />
                <ProfileRow label="College" value={user.college} />
                <ProfileRow label="Year / Standard" value={user.year} />
                <ProfileRow label="Phone" value={user.phone} />
              </div>

              <button disabled className="w-full mt-8 bg-gray-700/50 border border-gray-600 py-3 rounded-xl text-gray-500 text-xs font-bold uppercase tracking-widest cursor-not-allowed">
                Edit Profile (Coming Soon)
              </button>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-2xl shadow-xl shadow-blue-900/20 relative group"
            >
              <div className="relative z-10">
                <h3 className="font-bold text-xl mb-2 text-white">Need Help?</h3>
                <p className="text-sm text-blue-100/80 mb-6">Our support team is active 24/7 to help you with your curriculum.</p>
                <Link to="/services" className="bg-white text-blue-700 px-6 py-2.5 rounded-lg font-bold text-sm inline-block shadow-lg hover:bg-blue-50 transition-colors">
                  Contact Support
                </Link>
              </div>
              <div className="absolute bottom-[-20%] right-[-10%] opacity-10 group-hover:scale-110 transition-transform">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

const ProfileRow = ({ label, value }) => (
  <div className="group">
    <span className="block text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1 group-hover:text-accent transition-colors">
      {label}
    </span>
    <span className="font-medium text-gray-200">
      {value || "Not provided"}
    </span>
  </div>
);

const EmptyState = () => (
  <div className="text-center py-16 bg-gray-900/30 rounded-2xl border-2 border-dashed border-gray-700">
    <p className="text-gray-500 mb-6">You haven’t enrolled in any courses yet.</p>
    <Link to="/courses" className="bg-accent hover:bg-accent/80 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-accent/20">
      Browse Catalog
    </Link>
  </div>
);