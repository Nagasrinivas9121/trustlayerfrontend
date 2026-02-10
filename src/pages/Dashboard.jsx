import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

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
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 12 } }
};

export default function Dashboard() {
  const { user, token } = useAuth();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // --- 3D TILT LOGIC FOR PROFILE CARD ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

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
      <div className="min-h-screen bg-[#05080d] flex flex-col items-center justify-center">
        <motion.div 
          animate={{ 
            rotate: 360,
            borderRadius: ["25%", "25%", "50%", "50%", "25%"],
          }} 
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="w-12 h-12 border-2 border-accent border-t-transparent mb-4"
        />
        <p className="text-accent font-mono text-xs tracking-[0.3em] animate-pulse">SYNCHRONIZING...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#05080d] text-white p-4 md:p-8 perspective-1000">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto"
      >
        {/* HEADER SECTION */}
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/5 pb-8 relative">
           <div className="absolute -top-20 -left-20 w-64 h-64 bg-accent/10 blur-[100px] pointer-events-none rounded-full" />
          <div>
            <motion.h2 
              className="text-4xl font-black tracking-tighter uppercase italic"
              initial={{ x: -20 }}
              animate={{ x: 0 }}
            >
              Dashboard<span className="text-accent">_</span>
            </motion.h2>
            <p className="text-gray-500 mt-2 font-mono text-xs uppercase tracking-widest">
              Authorized Access: <span className="text-gray-300">{user.email}</span>
            </p>
          </div>
          <motion.span 
            whileHover={{ scale: 1.1, backgroundColor: "rgba(0,183,255,0.2)" }}
            className="mt-4 md:mt-0 bg-accent/10 text-accent px-4 py-1 rounded border border-accent/30 text-[10px] font-black uppercase tracking-widest"
          >
            {user.role}
          </motion.span>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* LEFT — COURSES */}
          <div className="md:col-span-2 space-y-8">
            <motion.div 
              variants={itemVariants}
              className="bg-gray-900/40 backdrop-blur-xl p-8 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-lg font-bold flex items-center gap-3">
                  <span className="w-1 h-5 bg-accent"></span>
                  CURRENT_MODULES
                </h3>
                <span className="text-[10px] text-gray-500 font-mono italic">DATA_SYNC_ACTIVE</span>
              </div>

              {courses.length > 0 ? (
                <div className="space-y-6">
                  {courses.map((course) => (
                    <motion.div
                      key={course.id}
                      whileHover={{ scale: 1.01, x: 5 }}
                      className="group bg-[#0a0f18] border border-white/5 p-6 rounded-2xl hover:border-accent/40 transition-all duration-300 shadow-xl"
                    >
                      <div className="flex justify-between items-center mb-5">
                        <h4 className="font-bold text-xl tracking-tight group-hover:text-accent transition-colors">
                          {course.title}
                        </h4>
                        <div className="flex items-center gap-2">
                           <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                           <span className="text-[9px] font-black text-green-500 tracking-tighter uppercase">Online</span>
                        </div>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-[10px] font-mono text-gray-500">
                           <span>LINKED_PROGRESS</span>
                           <span>{course.Enrollment?.progress || 0}%</span>
                        </div>
                        <div className="relative w-full bg-white/5 h-1 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${course.Enrollment?.progress || 0}%` }}
                            transition={{ duration: 1.5, ease: "circOut" }}
                            className="absolute top-0 left-0 bg-accent h-full shadow-[0_0_15px_rgba(0,183,255,0.6)]"
                          />
                        </div>
                      </div>

                      <div className="flex justify-end mt-6">
                        {course.driveLink && (
                          <motion.a
                            whileHover={{ x: 3 }}
                            href={course.driveLink}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[11px] font-black text-accent uppercase tracking-widest flex items-center gap-2 bg-accent/5 px-4 py-2 rounded-lg border border-accent/20 hover:bg-accent hover:text-white transition-all"
                          >
                            Enter_Classroom
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
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="bg-gray-900/60 backdrop-blur-2xl p-8 rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl group-hover:bg-accent/30 transition-colors" />
              
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-gray-400 mb-8 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                ID_CARD
              </h3>
              
              <div className="space-y-6" style={{ transform: "translateZ(50px)" }}>
                <ProfileRow label="Email" value={user.email} />
                <ProfileRow label="Institution" value={user.college} />
                <ProfileRow label="Clearance" value={user.year} />
                <ProfileRow label="Comms" value={user.phone} />
              </div>

              <motion.button 
                disabled 
                className="w-full mt-10 bg-white/5 border border-white/10 py-3 rounded-xl text-gray-600 text-[10px] font-black uppercase tracking-widest"
              >
                Access_Denied (LOCKED)
              </motion.button>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-accent p-8 rounded-3xl shadow-[0_20px_40px_rgba(0,183,255,0.2)] relative group cursor-pointer"
            >
              <div className="relative z-10">
                <h3 className="font-black text-2xl text-black italic tracking-tighter mb-2">SYSTEM_SUPPORT</h3>
                <p className="text-black/60 text-xs font-bold mb-6">Uplink active 24/7. Open a ticket for immediate curriculum assistance.</p>
                <Link to="/services" className="bg-black text-white px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest inline-block hover:scale-105 transition-transform">
                  Contact_Support
                </Link>
              </div>
              <div className="absolute -bottom-4 -right-4 opacity-10 rotate-12 transition-transform group-hover:rotate-0">
                 <svg width="140" height="140" viewBox="0 0 24 24" fill="black"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

const ProfileRow = ({ label, value }) => (
  <div className="relative border-l border-white/5 pl-4 hover:border-accent transition-colors">
    <span className="block text-[9px] text-gray-500 uppercase font-black tracking-widest mb-1">
      {label}
    </span >
    <span className="text-sm font-bold text-gray-200 tracking-tight">
      {value || "NOT_PROVIDED"}
    </span>
  </div>
);

const EmptyState = () => (
  <div className="text-center py-20 bg-black/20 rounded-3xl border-2 border-dashed border-white/5">
    <p className="text-gray-600 font-mono text-sm mb-8 tracking-widest italic">// NO_ACTIVE_ENROLLMENTS_FOUND</p>
    <Link to="/courses" className="bg-accent text-black px-10 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:shadow-[0_0_20px_rgba(0,183,255,0.4)] transition-all">
      View_Catalog
    </Link>
  </div>
);