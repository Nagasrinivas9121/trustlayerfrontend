import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";
import { Users, Briefcase, BookPlus, Activity, Database, ShieldAlert } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL;

export default function AdminDashboard() {
  const { token } = useAuth();

  const [users, setUsers] = useState([]);
  const [services, setServices] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ================= COURSE FORM ================= */
  const [courseForm, setCourseForm] = useState({
    title: "",
    description: "",
    price: "",
    originalPrice: "",
    expiryDays: "",
    difficulty: "Beginner",
    highlights: "",
    driveLink: "",
  });

  useEffect(() => {
    fetchAll();
    // eslint-disable-next-line
  }, []);

  /* ================= FETCH ALL ADMIN DATA ================= */
  const fetchAll = async () => {
    try {
      const headers = { Authorization: `Bearer ${token}` };

      const [u, s, c] = await Promise.all([
        fetch(`${API_URL}/api/admin/users`, { headers }),
        fetch(`${API_URL}/api/admin/services`, { headers }),
        fetch(`${API_URL}/api/courses`), 
      ]);

      setUsers(u.ok ? await u.json() : []);
      setServices(s.ok ? await s.json() : []);
      setCourses(c.ok ? await c.json() : []);
    } catch (err) {
      console.error("Admin fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  /* ================= ADD COURSE ================= */
  const addCourse = async () => {
    try {
      await fetch(`${API_URL}/api/courses`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(courseForm),
      });

      setCourseForm({
        title: "",
        description: "",
        price: "",
        originalPrice: "",
        expiryDays: "",
        difficulty: "Beginner",
        highlights: "",
        driveLink: "",
      });

      fetchAll();
    } catch (err) {
      console.error("Create course failed:", err);
    }
  };

  /* ================= UPDATE SERVICE STATUS ================= */
  const updateServiceStatus = async (id, status) => {
    await fetch(`${API_URL}/api/admin/services/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ status }),
    });

    fetchAll();
  };

  /* ================= LOADING ================= */
  if (loading) {
    return (
      <div className="min-h-screen bg-[#05080d] flex flex-col items-center justify-center space-y-4">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-12 h-12 border-2 border-amber-500 border-t-transparent rounded-full shadow-[0_0_15px_rgba(212,175,55,0.2)]"
        />
        <p className="text-amber-500 font-mono text-[10px] tracking-[0.4em] uppercase animate-pulse">
          &gt; INITIALIZING_ADMIN_PROTOCOLS...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#05080d] text-white p-6 md:p-12 font-mono relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      <div className="max-w-7xl mx-auto space-y-10 relative z-10">

        {/* HEADER */}
        <header className="flex flex-col lg:flex-row justify-between lg:items-end border-b border-white/5 pb-8 gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter">
              Command_<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Center</span>
            </h1>
            <p className="text-amber-600/60 text-[10px] tracking-[0.3em] mt-3 uppercase">
              // ROOT_LEVEL_ACCESS_GRANTED // SECURE_NODE: 0x1
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <StatCard label="Total_Users" val={users.length} icon={<Users size={16} />} />
            <StatCard
              label="Pending_Tasks"
              val={services.filter(s => s.status === "pending").length}
              icon={<ShieldAlert size={16} />}
            />
            <StatCard
              label="Live_Modules"
              val={courses.length}
              icon={<Database size={16} />}
            />
          </div>
        </header>

        {/* ADD COURSE SECTION */}
        <section className="bg-gray-900/30 backdrop-blur-xl p-8 rounded-xl border border-white/5 shadow-2xl">
          <h3 className="text-[10px] font-black text-amber-500 mb-6 tracking-widest uppercase flex items-center gap-3">
            <BookPlus size={14} /> &gt; DEPLOY_NEW_CURRICULUM_MODULE
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {Object.keys(courseForm).map(key => (
              <div key={key} className="space-y-1">
                <label className="text-[8px] text-gray-500 uppercase ml-1 tracking-widest">{key.replace(/([A-Z])/g, ' $1')}</label>
                <input
                  placeholder={`Input ${key}...`}
                  value={courseForm[key]}
                  onChange={e =>
                    setCourseForm({ ...courseForm, [key]: e.target.value })
                  }
                  className="w-full bg-white/[0.03] border border-white/10 px-3 py-3 text-xs rounded-sm focus:border-amber-500/50 outline-none transition-all"
                />
              </div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.01, brightness: 1.1 }}
            whileTap={{ scale: 0.99 }}
            onClick={addCourse}
            className="mt-8 w-full bg-gradient-to-r from-amber-500 to-amber-700 text-black font-black py-4 rounded-sm text-[10px] uppercase tracking-[0.3em] shadow-lg shadow-amber-900/20 transition-all"
          >
            EXECUTE_DEPLOYMENT
          </motion.button>
        </section>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* USERS LIST */}
          <section className="bg-gray-900/30 backdrop-blur-xl p-6 rounded-xl border border-white/5 h-[500px] overflow-hidden flex flex-col">
            <h3 className="text-[10px] font-black text-amber-500 mb-4 flex items-center gap-2 uppercase tracking-widest">
              <Users size={14} /> IDENTIFIED_PERSONNEL
            </h3>

            <div className="flex-grow overflow-y-auto space-y-2 pr-2 custom-scrollbar">
              {users.map(u => (
                <div key={u.id} className="p-4 bg-white/[0.02] border border-white/5 rounded-lg group hover:border-amber-500/30 transition-all">
                  <p className="text-xs font-bold text-gray-200">{u.email}</p>
                  <p className="text-[9px] text-amber-600/60 uppercase mt-1 tracking-widest">Access_Level: {u.role}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SERVICE REQUESTS */}
          <section className="bg-gray-900/30 backdrop-blur-xl p-6 rounded-xl border border-white/5 lg:col-span-2 h-[500px] overflow-hidden flex flex-col">
            <h3 className="text-[10px] font-black text-amber-500 mb-4 flex items-center gap-2 uppercase tracking-widest">
              <Briefcase size={14} /> INCOMING_SERVICE_TICKETS
            </h3>

            <div className="flex-grow overflow-y-auto grid md:grid-cols-2 gap-4 pr-2 custom-scrollbar">
              {services.map(s => (
                <div
                  key={s.id}
                  className="p-5 bg-white/[0.02] rounded-lg border border-white/5 hover:border-amber-500/20 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <p className="text-xs font-black uppercase text-amber-100 italic">{s.service}</p>
                      <span className={`text-[8px] font-black px-2 py-0.5 rounded-sm uppercase tracking-tighter ${
                        s.status === 'pending' ? 'bg-amber-500/20 text-amber-500' : 'bg-green-500/20 text-green-500'
                      }`}>
                        {s.status}
                      </span>
                    </div>
                    <p className="text-[10px] text-amber-600 font-mono break-all mb-3 underline underline-offset-4 decoration-amber-900">
                      {s.requesterEmail}
                    </p>
                    <div className="bg-black/40 p-3 rounded italic text-[10px] text-gray-500 leading-relaxed mb-4">
                      “{s.description}”
                    </div>
                  </div>

                  <select
                    value={s.status}
                    onChange={e =>
                      updateServiceStatus(s.id, e.target.value)
                    }
                    className="w-full bg-black border border-white/10 text-amber-500 text-[9px] font-black p-2 rounded-sm outline-none uppercase tracking-widest"
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
      </div>
    </div>
  );
}

/* ================= STAT CARD ================= */
const StatCard = ({ label, val, icon }) => (
  <div className="bg-white/[0.03] border border-white/5 px-6 py-4 rounded-xl flex items-center gap-5 min-w-[180px] shadow-lg">
    <div className="text-amber-500 p-2 bg-amber-500/5 rounded-lg">{icon}</div>
    <div>
      <p className="text-[9px] uppercase text-gray-500 tracking-[0.2em]">{label}</p>
      <p className="text-xl font-black text-white">{val}</p>
    </div>
  </div>
);