import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";
import { Users, Briefcase, Activity, Plus } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL;

export default function AdminDashboard() {
  const { token } = useAuth();

  const [users, setUsers] = useState([]);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const [newCourse, setNewCourse] = useState({
    title: "",
    description: "",
    price: "",
    originalPrice: "",
    driveLink: "",
    expiryDays: "",
    difficulty: "Beginner",
    highlights: "",
  });

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  /* ================= FETCH ADMIN DATA ================= */

  const fetchData = async () => {
    try {
      const headers = { Authorization: `Bearer ${token}` };

      const [usersRes, servicesRes] = await Promise.all([
        fetch(`${API_URL}/api/admin/users`, { headers }),
        fetch(`${API_URL}/api/admin/services`, { headers }),
      ]);

      const usersData = await usersRes.json();
      const servicesData = await servicesRes.json();

      setUsers(Array.isArray(usersData) ? usersData : []);
      setServices(Array.isArray(servicesData) ? servicesData : []);
    } catch (err) {
      console.error("Admin fetch failed:", err);
    } finally {
      setLoading(false);
    }
  };

  /* ================= ADD COURSE ================= */

  const addCourse = async () => {
    try {
      const res = await fetch(`${API_URL}/api/admin/courses`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newCourse),
      });

      if (!res.ok) throw new Error("Course creation failed");

      alert("✅ Course added successfully");

      setNewCourse({
        title: "",
        description: "",
        price: "",
        originalPrice: "",
        driveLink: "",
        expiryDays: "",
        difficulty: "Beginner",
        highlights: "",
      });
    } catch (err) {
      console.error(err);
      alert("❌ Failed to add course");
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
    fetchData();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#05080d] flex items-center justify-center">
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 1.4 }}
          className="text-accent font-black tracking-widest text-sm"
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
            <h1 className="text-4xl font-black italic uppercase">
              Command<span className="text-accent">_Center</span>
            </h1>
            <p className="text-gray-500 text-xs tracking-widest mt-2">
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

        {/* ADD COURSE */}
        <section className="bg-gray-900/40 p-6 rounded-2xl border border-white/5">
          <h3 className="text-xs font-black text-accent mb-4 flex items-center gap-2">
            <Plus size={14} /> ADD COURSE
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            <input placeholder="Title" className="admin-input"
              value={newCourse.title}
              onChange={e => setNewCourse({ ...newCourse, title: e.target.value })}
            />

            <select className="admin-input"
              value={newCourse.difficulty}
              onChange={e => setNewCourse({ ...newCourse, difficulty: e.target.value })}
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>

            <textarea placeholder="Description" className="admin-input md:col-span-2"
              value={newCourse.description}
              onChange={e => setNewCourse({ ...newCourse, description: e.target.value })}
            />

            <input type="number" placeholder="Original Price" className="admin-input"
              value={newCourse.originalPrice}
              onChange={e => setNewCourse({ ...newCourse, originalPrice: e.target.value })}
            />

            <input type="number" placeholder="Current Price" className="admin-input"
              value={newCourse.price}
              onChange={e => setNewCourse({ ...newCourse, price: e.target.value })}
            />

            <input placeholder="Google Drive Link" className="admin-input md:col-span-2"
              value={newCourse.driveLink}
              onChange={e => setNewCourse({ ...newCourse, driveLink: e.target.value })}
            />

            <input type="number" placeholder="Expiry Days" className="admin-input"
              value={newCourse.expiryDays}
              onChange={e => setNewCourse({ ...newCourse, expiryDays: e.target.value })}
            />

            <input placeholder="Highlights (comma separated)" className="admin-input md:col-span-2"
              value={newCourse.highlights}
              onChange={e => setNewCourse({ ...newCourse, highlights: e.target.value })}
            />

            <button onClick={addCourse}
              className="bg-white text-black font-black py-3 rounded-xl hover:bg-accent hover:text-white transition-all md:col-span-2">
              DEPLOY COURSE
            </button>
          </div>
        </section>

        {/* SERVICES */}
        <section className="bg-gray-900/40 p-6 rounded-2xl border border-white/5">
          <h3 className="text-xs font-black text-accent mb-4 flex items-center gap-2">
            <Briefcase size={14} /> SERVICE REQUESTS
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map(s => (
              <div key={s.id} className="p-4 bg-white/5 rounded-xl">
                <p className="text-xs font-black">{s.service}</p>
                <p className="text-[10px] text-accent break-all">{s.requesterEmail}</p>
                <p className="text-[10px] text-gray-500 italic mb-2">
                  “{s.description}”
                </p>

                <select
                  value={s.status}
                  onChange={e => updateServiceStatus(s.id, e.target.value)}
                  className="admin-input"
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

      {/* INPUT STYLE */}
      <style>{`
        .admin-input {
          width: 100%;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 12px;
          border-radius: 12px;
          font-size: 12px;
          color: white;
          outline: none;
        }
      `}</style>
    </div>
  );
}

/* ================= STAT CARD ================= */

const StatCard = ({ label, val, icon }) => (
  <div className="bg-white/5 border border-white/10 px-5 py-3 rounded-xl flex items-center gap-4">
    <div className="text-accent">{icon}</div>
    <div>
      <p className="text-[10px] uppercase text-gray-500">{label}</p>
      <p className="text-lg font-black">{val}</p>
    </div>
  </div>
);