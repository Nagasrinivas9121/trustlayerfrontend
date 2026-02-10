import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2, Plus, Users, BookOpen, Briefcase, ExternalLink, Activity } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL;

export default function AdminDashboard() {
  const { token } = useAuth();
  const [users, setUsers] = useState([]);
  const [courses, setCourses] = useState([]);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const [newCourse, setNewCourse] = useState({
    title: "",
    price: "",
    driveLink: "",
    expiryDays: "",
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
      console.error("Fetch failed", err);
    } finally {
      setLoading(false);
    }
  };

  const addCourse = async () => {
    const { title, price, driveLink, expiryDays } = newCourse;
    if (!title || !price || !driveLink || !expiryDays) return alert("All fields required");

    await fetch(`${API_URL}/api/admin/courses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newCourse),
    });

    setNewCourse({ title: "", price: "", driveLink: "", expiryDays: "" });
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

  if (loading) return <div className="min-h-screen bg-[#05080d] flex items-center justify-center text-accent font-mono">LOADING_ADMIN_PROTOCOLS...</div>;

  return (
    <div className="min-h-screen bg-[#05080d] text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* PAGE HEADER */}
        <header className="flex justify-between items-end border-b border-white/10 pb-8">
          <div>
            <h2 className="text-4xl font-black tracking-tighter uppercase italic text-white">
              Admin_Control<span className="text-accent">_Center</span>
            </h2>
            <p className="text-gray-500 font-mono text-xs mt-2 tracking-widest uppercase">
              // Global System Management & Oversight
            </p>
          </div>
          <div className="flex gap-4">
             <StatCard label="Total Users" val={users.length} icon={<Users size={14}/>} />
             <StatCard label="Active Requests" val={services.filter(s => s.status === 'pending').length} icon={<Activity size={14}/>} />
          </div>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* LEFT: USERS & SERVICES */}
          <div className="lg:col-span-1 space-y-8">
            {/* USERS SECTION */}
            <section className="bg-gray-900/40 backdrop-blur-md p-6 rounded-2xl border border-white/5">
              <h3 className="text-sm font-black uppercase tracking-widest text-accent mb-6 flex items-center gap-2">
                <Users size={16} /> User_Registry
              </h3>
              <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {users.map(u => (
                  <div key={u.id} className="flex justify-between items-center p-3 bg-white/5 rounded-lg border border-white/5 hover:border-white/10 transition-colors">
                    <div className="truncate pr-4">
                      <p className="text-xs font-bold text-gray-200 truncate">{u.email}</p>
                      <p className="text-[9px] font-mono text-gray-500 uppercase">{u.college || "No College"}</p>
                    </div>
                    <span className={`text-[9px] font-black px-2 py-1 rounded uppercase ${u.role === 'admin' ? 'bg-accent/20 text-accent' : 'bg-gray-800 text-gray-400'}`}>
                      {u.role}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* SERVICES SECTION */}
            <section className="bg-gray-900/40 backdrop-blur-md p-6 rounded-2xl border border-white/5">
              <h3 className="text-sm font-black uppercase tracking-widest text-accent mb-6 flex items-center gap-2">
                <Briefcase size={16} /> Service_Inquiries
              </h3>
              <div className="space-y-4">
                {services.map(s => (
                  <div key={s.id} className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <div className="flex justify-between mb-2">
                      <p className="text-xs font-black uppercase text-gray-300 tracking-tighter">{s.service}</p>
                      <span className={`text-[8px] font-bold uppercase px-2 py-0.5 rounded-full ${s.status === 'pending' ? 'bg-yellow-500/20 text-yellow-500' : 'bg-green-500/20 text-green-500'}`}>
                        {s.status}
                      </span>
                    </div>
                    <p className="text-[10px] text-gray-500 leading-relaxed mb-4 line-clamp-2 italic">"{s.description}"</p>
                    <select
                      value={s.status}
                      onChange={e => updateServiceStatus(s.id, e.target.value)}
                      className="w-full bg-black border border-white/10 text-[10px] p-2 rounded-lg font-bold text-gray-400 outline-none focus:border-accent"
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

          {/* RIGHT: COURSE MANAGEMENT */}
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-gray-900/40 backdrop-blur-md p-8 rounded-2xl border border-white/5">
              <h3 className="text-sm font-black uppercase tracking-widest text-accent mb-8 flex items-center gap-2">
                <BookOpen size={16} /> Course_Catalog_Manager
              </h3>

              {/* ADD COURSE FORM */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 bg-black/40 p-6 rounded-xl border border-white/5">
                <div className="space-y-2">
                   <label className="text-[9px] font-black text-gray-500 uppercase">Title</label>
                   <input placeholder="Ex: Web Security" className="admin-input" value={newCourse.title} onChange={e => setNewCourse({ ...newCourse, title: e.target.value })} />
                </div>
                <div className="space-y-2">
                   <label className="text-[9px] font-black text-gray-500 uppercase">Price (INR)</label>
                   <input type="number" placeholder="4999" className="admin-input" value={newCourse.price} onChange={e => setNewCourse({ ...newCourse, price: e.target.value })} />
                </div>
                <div className="space-y-2">
                   <label className="text-[9px] font-black text-gray-500 uppercase">Drive URL</label>
                   <input placeholder="https://..." className="admin-input" value={newCourse.driveLink} onChange={e => setNewCourse({ ...newCourse, driveLink: e.target.value })} />
                </div>
                <div className="space-y-2">
                   <label className="text-[9px] font-black text-gray-500 uppercase">Expiry (Days)</label>
                   <div className="flex gap-2">
                    <input type="number" placeholder="365" className="admin-input" value={newCourse.expiryDays} onChange={e => setNewCourse({ ...newCourse, expiryDays: e.target.value })} />
                    <button onClick={addCourse} className="bg-accent text-black px-4 rounded-xl hover:bg-white transition-colors">
                      <Plus size={20} />
                    </button>
                   </div>
                </div>
              </div>

              {/* COURSE LIST */}
              <div className="grid md:grid-cols-2 gap-4">
                {courses.map(c => (
                  <motion.div layout key={c.id} className="p-5 bg-white/5 rounded-2xl border border-white/5 group hover:border-accent/30 transition-all">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-bold text-white text-lg tracking-tight">{c.title}</h4>
                        <p className="text-accent font-mono text-xs">₹{c.price}</p>
                      </div>
                      <button onClick={() => deleteCourse(c.id)} className="text-gray-600 hover:text-red-500 transition-colors">
                        <Trash2 size={18} />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5">
                      <div className="text-[9px] font-mono text-gray-500">
                        EXPIRY: {c.expiryDays}D
                      </div>
                      <a href={c.driveLink} target="_blank" className="text-[9px] font-black text-gray-400 hover:text-white flex items-center gap-1 uppercase tracking-widest">
                        Verify Link <ExternalLink size={10}/>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

        </div>
      </div>

      <style>{`
        .admin-input {
          width: 100%;
          background: #000;
          border: 1px solid rgba(255,255,255,0.1);
          padding: 10px 14px;
          border-radius: 10px;
          font-size: 12px;
          color: white;
          outline: none;
        }
        .admin-input:focus { border-color: var(--color-accent); }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
      `}</style>
    </div>
  );
}

const StatCard = ({ label, val, icon }) => (
  <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl flex items-center gap-3">
    <div className="text-accent">{icon}</div>
    <div>
      <p className="text-[8px] font-black uppercase text-gray-500 leading-none">{label}</p>
      <p className="text-sm font-bold text-white leading-none mt-1">{val}</p>
    </div>
  </div>
);