import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";
import {
  Trash2,
  Users,
  BookOpen,
  Briefcase,
  ExternalLink,
  Activity,
  ShieldCheck,
  Target
} from "lucide-react";

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
    originalPrice: "",
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
      console.error("Fetch failed", err);
    } finally {
      setLoading(false);
    }
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

  if (loading) {
    return (
      <div className="min-h-screen bg-[#05080d] flex items-center justify-center">
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-accent font-black tracking-[0.3em] text-sm"
        >
          INITIALIZING_ADMIN_PROTOCOLS...
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#05080d] text-white p-6">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* HEADER */}
        <header className="flex justify-between items-end border-b border-white/10 pb-6">
          <div>
            <h2 className="text-4xl font-black italic uppercase">
              Command<span className="text-accent">_Center</span>
            </h2>
            <p className="text-gray-500 text-xs mt-2 tracking-widest">
              ROOT LEVEL ACCESS
            </p>
          </div>
          <div className="flex gap-4">
            <StatCard label="Users" val={users.length} icon={<Users size={14} />} />
            <StatCard
              label="Pending Requests"
              val={services.filter(s => s.status === "pending").length}
              icon={<Activity size={14} />}
            />
          </div>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* USERS */}
          <section className="bg-gray-900/40 p-6 rounded-2xl border border-white/5">
            <h3 className="text-xs font-black text-accent mb-4 flex items-center gap-2">
              <Users size={14} /> USERS
            </h3>
            <div className="space-y-3 max-h-[400px] overflow-y-auto">
              {users.map(u => (
                <div key={u.id} className="p-3 bg-white/5 rounded-xl">
                  <p className="text-xs font-bold truncate">{u.email}</p>
                  <p className="text-[10px] text-gray-500">{u.college || "N/A"}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SERVICE REQUESTS (EMAIL FIXED) */}
          <section className="bg-gray-900/40 p-6 rounded-2xl border border-white/5 lg:col-span-2">
            <h3 className="text-xs font-black text-accent mb-4 flex items-center gap-2">
              <Briefcase size={14} /> SERVICE REQUESTS
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {services.map(s => (
                <div key={s.id} className="p-5 bg-white/5 rounded-2xl border border-white/10">
                  
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-[11px] font-black uppercase">{s.service}</p>
                    <span className={`text-[9px] px-2 py-0.5 rounded ${
                      s.status === "pending"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-green-500/20 text-green-400"
                    }`}>
                      {s.status}
                    </span>
                  </div>

                  {/* ✅ REQUESTER EMAIL */}
                  <p className="text-[10px] text-accent font-mono mb-2 break-all">
                    {s.requesterEmail || "anonymous@unknown"}
                  </p>

                  <p className="text-[10px] text-gray-500 italic mb-4">
                    “{s.description}”
                  </p>

                  <select
                    value={s.status}
                    onChange={e => updateServiceStatus(s.id, e.target.value)}
                    className="w-full bg-black border border-white/10 text-xs p-2 rounded-lg uppercase"
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

/* ================= STATS CARD ================= */

const StatCard = ({ label, val, icon }) => (
  <div className="bg-white/5 border border-white/10 px-5 py-3 rounded-xl flex items-center gap-4">
    <div className="text-accent">{icon}</div>
    <div>
      <p className="text-[10px] uppercase text-gray-500">{label}</p>
      <p className="text-lg font-black">{val}</p>
    </div>
  </div>
);