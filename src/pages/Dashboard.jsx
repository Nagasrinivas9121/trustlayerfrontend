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
        console.error("Critical System Error: Dashboard Fetch Failure", err);
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
          className="w-10 h-10 border-2 border-amber-500 border-t-transparent rounded-full mb-4 shadow-[0_0_15px_rgba(245,158,11,0.2)]"
        />
        <p className="text-amber-500 font-mono text-[10px] tracking-[0.3em] uppercase">Initializing_Secure_Session...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#05080d] text-white selection:bg-amber-500/30 selection:text-white font-mono">
      {/* Dynamic Background FX - Gold Nebula */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-amber-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        
        {/* HEADER SECTION */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-white/10 pb-10 gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase">
              Student_Portal<span className="text-amber-500">_</span>
            </h2>
            <p className="text-gray-500 mt-2 font-mono text-[10px] md:text-[12px] uppercase tracking-[0.2em]">
              Active_Investigator: <span className="text-amber-200 italic">{user.email}</span>
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
             <div className="bg-amber-500/10 text-amber-500 px-5 py-2 rounded-lg border border-amber-500/20 text-[10px] font-black uppercase tracking-widest shadow-lg shadow-amber-900/5">
               Clearance: {user.role || "Operator"}
             </div>
          </div>
        </motion.header>

        <div className="grid lg:grid-cols-3 gap-10">
          
          {/* LEFT COLUMN: ENROLLED MODULES */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-[10px] font-black text-amber-500 uppercase tracking-[0.4em] flex items-center gap-3">
              <div className="w-8 h-[1px] bg-amber-500/30" /> Enrolled_Curriculum
            </h3>

            {courses.length > 0 ? (
              <div className="grid gap-6">
                {courses.map((course, i) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-gray-900/40 backdrop-blur-xl border border-white/5 p-8 rounded-xl hover:border-amber-500/40 transition-all group relative overflow-hidden"
                  >
                    {/* Security Scanline Animation */}
                    <motion.div 
                      animate={{ top: ["-100%", "200%"] }} 
                      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                      className="absolute left-0 right-0 h-[1px] bg-amber-500/10 z-0 pointer-events-none"
                    />

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 relative z-10">
                      <h4 className="text-2xl font-black group-hover:text-amber-400 transition-colors uppercase tracking-tighter italic">
                        {course.title}
                      </h4>
                      <span className="text-[9px] font-black text-amber-500 border border-amber-500/30 px-3 py-1 rounded-sm uppercase tracking-widest bg-amber-500/5">
                        SECURE_UPLINK_ESTABLISHED
                      </span>
                    </div>

                    <div className="space-y-3 relative z-10">
                      <div className="flex justify-between text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                        <span>Initialization_Progress</span>
                        <span className="text-amber-500">{course.Enrollment?.progress || 0}%</span>
                      </div>
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${course.Enrollment?.progress || 0}%` }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-amber-600 to-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.4)]" 
                        />
                      </div>
                    </div>

                    {course.driveLink && (
                      <div className="mt-8 flex justify-end relative z-10">
                        <a 
                          href={course.driveLink} 
                          target="_blank" 
                          rel="noreferrer"
                          className="text-[10px] font-black uppercase tracking-[0.2em] bg-amber-500 text-black px-8 py-3 rounded-sm hover:bg-white transition-all shadow-xl shadow-black"
                        >
                          Launch_Environment
                        </a>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="border border-dashed border-white/10 rounded-xl p-16 text-center bg-white/2">
                <p className="text-gray-600 font-mono text-xs uppercase tracking-[0.3em] mb-8">// Zero_Enrollments_Detected</p>
                <Link to="/courses" className="inline-block bg-amber-500/10 text-amber-500 px-10 py-4 rounded-sm border border-amber-500/20 font-black text-[10px] uppercase tracking-widest hover:bg-amber-500 hover:text-white transition-all">
                  Access_Catalog
                </Link>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: IDENTITY PANEL */}
          <div className="space-y-8">
            <h3 className="text-[10px] font-black text-amber-500 uppercase tracking-[0.4em] flex items-center gap-3">
              <div className="w-8 h-[1px] bg-amber-500/30" /> Personnel_ID
            </h3>

            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gray-900/40 backdrop-blur-xl border border-white/5 p-10 rounded-xl shadow-2xl relative"
            >
              <div className="space-y-8">
                <ProfileItem label="Identity_Email" value={user.email} />
                <ProfileItem label="Current_Institution" value={user.college} />
                <ProfileItem label="Security_Clearance" value={user.year} />
                <ProfileItem label="Comms_Phone" value={user.phone} />
              </div>

              <div className="mt-12 pt-8 border-t border-white/5 text-[9px] text-gray-600 font-mono leading-relaxed uppercase tracking-widest">
                <span className="text-amber-600">Warning:</span> Security profile is locked. Manual modification requires senior investigator approval.
              </div>
            </motion.div>
            
            {/* SUPPORT ACTION CARD */}
            <Link to="/services">
              <div className="group relative cursor-pointer mt-8">
                <div className="absolute -inset-1 bg-amber-500 rounded-xl blur opacity-10 group-hover:opacity-25 transition duration-500" />
                <div className="relative bg-gradient-to-br from-[#F9E498] via-[#D4AF37] to-[#B8860B] p-8 rounded-xl overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full translate-x-10 -translate-y-10" />
                  
                  <h4 className="text-black font-black text-xl leading-none mb-2 uppercase tracking-tighter italic">Support_Uplink</h4>
                  <p className="text-black/60 text-[10px] font-black mb-6 uppercase tracking-wider italic">Direct encrypted line to node engineers.</p>
                  
                  <div className="bg-black text-white text-[10px] font-black uppercase py-4 text-center rounded-sm group-hover:bg-gray-800 transition-colors tracking-widest">
                    Initialize_Ticket
                  </div>
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
    <span className="block text-[9px] text-amber-500 font-black uppercase tracking-[0.2em] mb-2 opacity-60 group-hover:opacity-100 transition-opacity">
      {label}
    </span>
    <span className="text-sm font-bold text-gray-200 tracking-tight">{value || "NULL_DATA"}</span>
  </div>
);