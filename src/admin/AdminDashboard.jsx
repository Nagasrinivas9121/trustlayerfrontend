import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";
import { Users, Briefcase, BookPlus, Activity } from "lucide-react";

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
        fetch(`${API_URL}/api/courses`), // public (NO driveLink)
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

  /* ================= UI ================= */
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
            <StatCard
              label="Courses"
              val={courses.length}
              icon={<BookPlus size={14} />}
            />
          </div>
        </header>

        {/* ADD COURSE */}
        <section className="bg-gray-900/40 p-6 rounded-2xl border border-white/5">
          <h3 className="text-xs font-black text-accent mb-4">
            DEPLOY COURSE
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {Object.keys(courseForm).map(key => (
              <input
                key={key}
                placeholder={key}
                value={courseForm[key]}
                onChange={e =>
                  setCourseForm({ ...courseForm, [key]: e.target.value })
                }
                className="bg-black border border-white/10 p-2 text-xs rounded"
              />
            ))}
          </div>

          <button
            onClick={addCourse}
            className="mt-4 w-full bg-accent text-black font-black py-2 rounded"
          >
            DEPLOY COURSE
          </button>
        </section>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* USERS */}
          <section className="bg-gray-900/40 p-6 rounded-2xl border border-white/5">
            <h3 className="text-xs font-black text-accent mb-4 flex gap-2">
              <Users size={14} /> USERS
            </h3>

            {users.map(u => (
              <div key={u.id} className="p-3 bg-white/5 rounded-xl mb-2">
                <p className="text-xs font-bold">{u.email}</p>
                <p className="text-[10px] text-gray-500 uppercase">{u.role}</p>
              </div>
            ))}
          </section>

          {/* SERVICE REQUESTS */}
          <section className="bg-gray-900/40 p-6 rounded-2xl border border-white/5 lg:col-span-2">
            <h3 className="text-xs font-black text-accent mb-4 flex gap-2">
              <Briefcase size={14} /> SERVICE REQUESTS
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {services.map(s => (
                <div
                  key={s.id}
                  className="p-5 bg-white/5 rounded-xl border border-white/10"
                >
                  <p className="text-xs font-black uppercase">{s.service}</p>
                  <p className="text-[10px] text-accent font-mono break-all">
                    {s.requesterEmail}
                  </p>
                  <p className="text-[10px] text-gray-500 italic my-2">
                    “{s.description}”
                  </p>

                  <select
                    value={s.status}
                    onChange={e =>
                      updateServiceStatus(s.id, e.target.value)
                    }
                    className="w-full bg-black border border-white/10 text-xs p-2 rounded"
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
  <div className="bg-white/5 border border-white/10 px-5 py-3 rounded-xl flex items-center gap-4">
    <div className="text-accent">{icon}</div>
    <div>
      <p className="text-[10px] uppercase text-gray-500">{label}</p>
      <p className="text-lg font-black">{val}</p>
    </div>
  </div>
);