import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";

const API_URL = import.meta.env.VITE_API_URL;

export default function Dashboard() {
  const { user, token } = useAuth();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) return;

    const fetchDashboardData = async () => {
      try {
        const res = await fetch(`${API_URL}/api/enrollments`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        setCourses(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Dashboard Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [token]);

  if (!user) return null;

  if (loading) {
    return (
      <div className="min-h-screen bg-[#05080d] flex flex-col items-center justify-center">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-10 h-10 border-2 border-accent border-t-transparent rounded-full mb-4"
        />
        <p className="text-accent font-mono text-[10px] tracking-[0.3em]">INITIALIZING_SESSION...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#05080d] text-white selection:bg-accent/30">
      {/* Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        
        {/* HEADER */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-8"
        >
          <div>
            <h2 className="text-4xl font-black italic tracking-tighter uppercase">
              Dashboard<span className="text-accent">_</span>
            </h2>
            <p className="text-gray-500 mt-2 font-mono text-[11px] uppercase tracking-widest">
              Operator: <span className="text-gray-300">{user.email}</span>
            </p>
          </div>
          <div className="mt-4 md:mt-0 bg-accent/10 text-accent px-4 py-1.5 rounded-md border border-accent/20 text-[10px] font-black uppercase tracking-widest">
            Level: {user.role || "Student"}
          </div>
        </motion.header>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* LEFT: COURSES */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xs font-black text-gray-500 uppercase tracking-[0.2em] flex items-center gap-2">
              <div className="w-4 h-[1px] bg-accent" /> Active_Curriculum
            </h3>

            {courses.length > 0 ? (
              <div className="grid gap-4">
                {courses.map((course, i) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-gray-900/40 backdrop-blur-md border border-white/5 p-6 rounded-2xl hover:border-accent/30 transition-all group"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <h4 className="text-xl font-bold group-hover:text-accent transition-colors">{course.title}</h4>
                      <span className="text-[9px] font-black text-green-500 border border-green-500/20 px-2 py-0.5 rounded uppercase">Encrypted_Access</span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-[10px] font-mono text-gray-500 uppercase">
                        <span>Progress</span>
                        <span>{course.Enrollment?.progress || 0}%</span>
                      </div>
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${course.Enrollment?.progress || 0}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full bg-accent shadow-[0_0_10px_#00b7ff]" 
                        />
                      </div>
                    </div>

                    {course.driveLink && (
                      <div className="mt-6 flex justify-end">
                        <a 
                          href={course.driveLink} 
                          target="_blank" 
                          rel="noreferrer"
                          className="text-[10px] font-black uppercase tracking-widest bg-white text-black px-4 py-2 rounded-lg hover:bg-accent hover:text-white transition-all"
                        >
                          Launch_Course
                        </a>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="border border-dashed border-white/10 rounded-2xl p-12 text-center">
                <p className="text-gray-600 font-mono text-xs uppercase tracking-widest mb-6">// No_Data_Found</p>
                <Link to="/courses" className="text-accent font-black text-xs uppercase border-b border-accent pb-1">
                  Browse_Catalog
                </Link>
              </div>
            )}
          </div>

          {/* RIGHT: PROFILE */}
          <div className="space-y-6">
            <h3 className="text-xs font-black text-gray-500 uppercase tracking-[0.2em] flex items-center gap-2">
              <div className="w-4 h-[1px] bg-accent" /> User_Identity
            </h3>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gray-900/40 backdrop-blur-md border border-white/5 p-8 rounded-2xl"
            >
              <div className="space-y-6">
                <ProfileItem label="Node_Email" value={user.email} />
                <ProfileItem label="Institution" value={user.college} />
                <ProfileItem label="Clearance" value={user.year} />
                <ProfileItem label="Comms" value={user.phone} />
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 text-[9px] text-gray-600 font-mono leading-relaxed uppercase">
                Notice: Profile editing is currently restricted to high-clearance administrators.
              </div>
            </motion.div>
            
            {/* SUPPORT CARD */}
            <Link to="/services">
              <div className="bg-accent p-6 rounded-2xl group cursor-pointer mt-6">
                <h4 className="text-black font-black text-lg leading-none mb-1 uppercase tracking-tighter">Support_Uplink</h4>
                <p className="text-black/60 text-[11px] font-bold mb-4 uppercase">Direct connection to engineers.</p>
                <div className="bg-black text-white text-[10px] font-black uppercase py-2 text-center rounded-lg group-hover:scale-[1.02] transition-transform">
                  Open_Ticket
                </div>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

const ProfileItem = ({ label, value }) => (
  <div className="group">
    <span className="block text-[9px] text-accent font-black uppercase tracking-widest mb-1 opacity-70 group-hover:opacity-100 transition-opacity">
      {label}
    </span>
    <span className="text-sm font-bold text-gray-200">{value || "UNDEFINED"}</span>
  </div>
);