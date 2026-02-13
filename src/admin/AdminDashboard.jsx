import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2, Plus, Users, BookOpen, Briefcase, ExternalLink, Activity, ShieldCheck, Target, Tag } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL;

export default function AdminDashboard() {
  const { token } = useAuth();
  const [users, setUsers] = useState([]);
  const [courses, setCourses] = useState([]);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  // Updated state to handle manual entry of both prices
  const [newCourse, setNewCourse] = useState({
    title: "",
    price: "",         // Current Price (Manual)
    originalPrice: "", // Original Price (Manual)
    driveLink: "",
    expiryDays: "",
    difficulty: "Beginner",
    highlights: "", 
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const headers = { Authorization: `Bearer ${token}` };
    try {
      const [u, c, s] = await Promise.all([
        fetch(`${API_URL}/api/admin/users`, { headers }).then(r => r.json()),
        fetch(`${API_URL}/api/courses`).then(r => r.json()),
        fetch(`${API_URL}/api/admin/services`, { headers }).then(r => r.json()),
      ]);
      setUsers(u || []);
      setCourses(c || []);
      setServices(s || []);
    } catch (err) {
      console.error("Protocol Breach: Fetch failed", err);
    } finally {
      setLoading(false);
    }
  };

  const addCourse = async () => {
    const { title, price, originalPrice, driveLink, expiryDays } = newCourse;
    if (!title || !price || !originalPrice || !driveLink || !expiryDays) return alert("All data streams required");

    await fetch(`${API_URL}/api/admin/courses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newCourse),
    });

    // Reset with empty strings for manual entry next time
    setNewCourse({ 
      title: "", 
      price: "", 
      originalPrice: "", 
      driveLink: "", 
      expiryDays: "", 
      difficulty: "Beginner", 
      highlights: "" 
    });
    fetchData();
  };

  const deleteCourse = async (id) => {
    if (!window.confirm("Terminate this course module?")) return;
    await fetch(`${API_URL}/api/admin/courses/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchData();
  };

  const updateServiceStatus = async (id, status) => {
    await fetch(`${API_URL}/api/admin/services/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ status }),
    });
    fetchData();
  };

  if (loading) return (
    <div className="min-h-screen bg-[#05080d] flex items-center justify-center">
      <motion.div 
        animate={{ opacity: [0.4, 1, 0.4] }} 
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="text-accent font-black tracking-[0.3em] text-sm font-mono"
      >
        INITIALIZING_ADMIN_PROTOCOLS...
      </motion.div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#05080d] text-white p-4 md:p-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/10 pb-8 gap-6">
          <div>
            <h2 className="text-4xl font-black tracking-tighter uppercase italic text-white">
              Command<span className="text-accent">_Center</span>
            </h2>
            <p className="text-gray-500 font-mono text-[10px] mt-2 tracking-[0.3em] uppercase">
              // Root Level Access: Global Oversight
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
             <StatCard label="Personnel" val={users.length} icon={<Users size={14}/>} />
             <StatCard label="Live Inquiries" val={services.filter(s => s.status === 'pending').length} icon={<Activity size={14}/>} />
          </div>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-1 space-y-8">
            <section className="bg-gray-900/40 backdrop-blur-xl p-6 rounded-[2rem] border border-white/5 shadow-2xl shadow-black">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-accent mb-6 flex items-center gap-2">
                <Users size={14} /> Personnel_Registry
              </h3>
              <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {users.map(u => (
                  <div key={u.id} className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-accent/30 transition-all">
                    <div className="truncate pr-4">
                      <p className="text-xs font-bold text-gray-200 truncate tracking-tight">{u.email}</p>
                      <p className="text-[9px] font-mono text-gray-500 uppercase mt-1 tracking-widest">{u.college || "Unassigned"}</p>
                    </div>
                    <span className={`text-[8px] font-black px-2 py-1 rounded-md uppercase tracking-tighter ${u.role === 'admin' ? 'bg-accent text-white' : 'bg-white/10 text-gray-400'}`}>
                      {u.role}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gray-900/40 backdrop-blur-xl p-6 rounded-[2rem] border border-white/5 shadow-2xl shadow-black">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-accent mb-6 flex items-center gap-2">
                <Briefcase size={14} /> Ops_Requests
              </h3>
              <div className="space-y-4">
                {services.map(s => (
                  <div key={s.id} className="p-4 bg-white/5 rounded-2xl border border-white/5">
                    <div className="flex justify-between items-center mb-3">
                      <p className="text-[10px] font-black uppercase text-gray-300 tracking-widest">{s.service}</p>
                      <span className={`text-[8px] font-black uppercase px-2 py-0.5 rounded-md ${s.status === 'pending' ? 'bg-yellow-500/10 text-yellow-500' : 'bg-accent/10 text-accent'}`}>
                        {s.status}
                      </span>
                    </div>
                    <p className="text-[10px] text-gray-500 leading-relaxed mb-4 italic line-clamp-2">// "{s.description}"</p>
                    <select
                      value={s.status}
                      onChange={e => updateServiceStatus(s.id, e.target.value)}
                      className="w-full bg-[#05080d] border border-white/10 text-[9px] p-3 rounded-xl font-black text-gray-400 outline-none focus:border-accent uppercase tracking-widest"
                    >
                      <option value="pending">PENDING</option>
                      <option value="quoted">QUOTED</option>
                      <option value="completed">COMPLETED</option>
                    </select>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <section className="bg-gray-900/40 backdrop-blur-xl p-8 rounded-[2rem] border border-white/5 shadow-2xl shadow-black">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-accent mb-8 flex items-center gap-2">
                <BookOpen size={14} /> Curriculum_Architect
              </h3>

              {/* FORM: Manual Original & Current Price Entry */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 bg-black/40 p-8 rounded-3xl border border-white/5">
                <div className="space-y-2">
                   <label className="text-[9px] font-black text-accent uppercase tracking-widest ml-1">Module_Title</label>
                   <input placeholder="Ex: ADVANCED_FORENSICS" className="admin-input" value={newCourse.title} onChange={e => setNewCourse({ ...newCourse, title: e.target.value })} />
                </div>
                
                {/* Manual Original Price */}
                <div className="space-y-2">
                   <label className="text-[9px] font-black text-gray-500 uppercase tracking-widest ml-1">Original_Price (MRP)</label>
                   <input type="number" placeholder="2599" className="admin-input border-gray-800" value={newCourse.originalPrice} onChange={e => setNewCourse({ ...newCourse, originalPrice: e.target.value })} />
                </div>

                {/* Manual Current Price */}
                <div className="space-y-2">
                   <label className="text-[9px] font-black text-accent uppercase tracking-widest ml-1">Current_Sale_Price (INR)</label>
                   <input type="number" placeholder="499" className="admin-input" value={newCourse.price} onChange={e => setNewCourse({ ...newCourse, price: e.target.value })} />
                </div>

                <div className="space-y-2">
                   <label className="text-[9px] font-black text-accent uppercase tracking-widest ml-1">Difficulty_Level</label>
                   <select className="admin-input" value={newCourse.difficulty} onChange={e => setNewCourse({ ...newCourse, difficulty: e.target.value })}>
                      <option value="Beginner">BEGINNER</option>
                      <option value="Intermediate">INTERMEDIATE</option>
                      <option value="Advanced">ADVANCED</option>
                   </select>
                </div>

                <div className="space-y-2">
                   <label className="text-[9px] font-black text-accent uppercase tracking-widest ml-1">Active_Duration (Days)</label>
                   <input type="number" placeholder="365" className="admin-input" value={newCourse.expiryDays} onChange={e => setNewCourse({ ...newCourse, expiryDays: e.target.value })} />
                </div>
                
                <div className="space-y-2 md:col-span-1">
                   <label className="text-[9px] font-black text-accent uppercase tracking-widest ml-1">Resource_Uplink (Drive URL)</label>
                   <input placeholder="https://drive.google.com/..." className="admin-input" value={newCourse.driveLink} onChange={e => setNewCourse({ ...newCourse, driveLink: e.target.value })} />
                </div>

                <div className="space-y-2 md:col-span-2">
                   <label className="text-[9px] font-black text-accent uppercase tracking-widest ml-1">Curriculum_Highlights (Comma Separated)</label>
                   <div className="flex gap-4">
                    <input placeholder="Memory Analysis, Packet Tracking, Lab Access" className="admin-input" value={newCourse.highlights} onChange={e => setNewCourse({ ...newCourse, highlights: e.target.value })} />
                    <button onClick={addCourse} className="bg-white text-black px-8 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-accent hover:text-white transition-all shadow-lg min-w-[140px]">
                      Deploy_Module
                    </button>
                   </div>
                </div>
              </div>

              {/* LIST: Displaying both manual prices */}
              <div className="grid md:grid-cols-2 gap-6">
                {courses.map(c => {
                  // Discount calculation based on stored values
                  const disc = c.originalPrice && c.price ? Math.round(((c.originalPrice - c.price) / c.originalPrice) * 100) : 0;
                  
                  return (
                    <motion.div layout key={c.id} className="p-6 bg-white/5 rounded-3xl border border-white/5 group hover:border-accent/50 transition-all relative overflow-hidden flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h4 className="font-black text-white text-lg tracking-tighter uppercase italic">{c.title}</h4>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-accent font-black text-sm">₹{c.price}</span>
                              {c.originalPrice && (
                                <>
                                  <span className="text-gray-600 line-through text-[10px]">₹{c.originalPrice}</span>
                                  <span className="text-green-500 font-bold text-[9px]">{disc}% OFF</span>
                                </>
                              )}
                            </div>
                          </div>
                          <button onClick={() => deleteCourse(c.id)} className="text-gray-700 hover:text-red-500 transition-colors">
                            <Trash2 size={16} />
                          </button>
                        </div>
                        
                        <div className="flex gap-2 mb-4">
                           <span className="text-[8px] bg-accent/10 text-accent px-2 py-0.5 rounded border border-accent/20 font-black uppercase tracking-tighter">
                              {c.difficulty || "Investigator"}
                           </span>
                        </div>
                        
                        {c.highlights && (
                          <div className="space-y-1 mb-6">
                            {c.highlights.split(',').map((point, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-[9px] text-gray-500 font-mono uppercase tracking-tight">
                                <Target size={8} className="text-accent" />
                                {point.trim()}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between pt-6 border-t border-white/5">
                        <div className="flex items-center gap-1.5">
                           <ShieldCheck size={10} className="text-accent" />
                           <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">TTL: {c.expiryDays}D</span>
                        </div>
                        <a href={c.driveLink} target="_blank" rel="noreferrer" className="text-[9px] font-black text-gray-400 hover:text-white flex items-center gap-1.5 uppercase tracking-widest group-hover:text-accent transition-colors">
                          Resource_Link <ExternalLink size={10}/>
                        </a>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </div>

      <style>{`
        .admin-input {
          width: 100%;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          padding: 14px 18px;
          border-radius: 16px;
          font-size: 11px;
          font-weight: 700;
          color: white;
          outline: none;
          transition: all 0.3s ease;
          letter-spacing: 0.05em;
        }
        .admin-input:focus { 
          border-color: #00b7ff; 
          background: rgba(0,183,255,0.05);
          box-shadow: 0 0 20px rgba(0,183,255,0.1);
        }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
      `}</style>
    </div>
  );
}

const StatCard = ({ label, val, icon }) => (
  <div className="bg-white/5 backdrop-blur-md border border-white/10 px-5 py-3 rounded-2xl flex items-center gap-4 shadow-xl">
    <div className="text-accent p-2 bg-accent/10 rounded-lg">{icon}</div>
    <div>
      <p className="text-[9px] font-black uppercase text-gray-500 leading-none tracking-widest">{label}</p>
      <p className="text-lg font-black text-white leading-none mt-1.5 italic tracking-tighter">{val}</p>
    </div>
  </div>
);