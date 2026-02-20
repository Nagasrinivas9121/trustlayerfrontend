import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";
import { Users, Briefcase, Activity, BookPlus } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL;

export default function AdminDashboard() {
  const { token } = useAuth();

  const [users, setUsers] = useState([]);
  const [services, setServices] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ================= NEW COURSE FORM ================= */

  const [courseForm, setCourseForm] = useState({
    title: "",
    description: "",
    price: "",
    originalPrice: "",
    driveLink: "",
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

      const [u, s, c] = await Promise.all([
        fetch(`${API_URL}/api/admin/users`, { headers }),
        fetch(`${API_URL}/api/admin/services`, { headers }),
        fetch(`${API_URL}/api/admin/courses`, { headers }),
      ]);

      setUsers(await u.json());
      setServices(await s.json());
      setCourses(await c.json());
    } catch (err) {
      console.error("Admin fetch failed:", err);
    } finally {
      setLoading(false);
    }
  };

  /* ================= CREATE COURSE ================= */

  const createCourse = async () => {
    try {
      await fetch(`${API_URL}/api/admin/courses`, {
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
        driveLink: "",
        difficulty: "Beginner",
        highlights: "",
      });

      fetchData();
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

    fetchData();
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
      <div className="max-w-7xl mx-auto space-y-12">

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

        {/* ================= COURSES ================= */}

        <section className="bg-gray-900/40 p-6 rounded-2xl border border-white/5">
          <h3 className="text-xs font-black text-accent mb-6 flex items-center gap-2">
            <BookPlus size={14} /> COURSES
          </h3>

          {/* ADD COURSE */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {Object.keys(courseForm).map(key => (
              <input
                key={key}
                placeholder={key.toUpperCase()}
                value={courseForm[key]}
                onChange={e =>
                  setCourseForm({ ...courseForm, [key]: e.target.value })
                }
                className="bg-black border border-white/10 text-xs p-3 rounded-lg"
              />
            ))}

            <button
              onClick={createCourse}
              className="md:col-span-2 bg-accent text-black font-black py-3 rounded-lg"
            >
              DEPLOY COURSE
            </button>
          </div>

          {/* COURSE LIST */}
          <div className="grid md:grid-cols-2 gap-6">
            {courses.map(course => (
              <div
                key={course.id}
                className="p-5 bg-white/5 rounded-xl border border-white/10"
              >
                <p className="text-sm font-black">{course.title}</p>

                <p className="text-[11px] text-gray-400 mt-2">
                  {course.description}
                </p>

                <div className="flex justify-between text-[11px] mt-3">
                  <span>₹{course.price}</span>
                  <span className="text-accent">{course.difficulty}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= USERS & SERVICES ================= */}

        <div className="grid lg:grid-cols-3 gap-8">

          {/* USERS */}
          <section className="bg-gray-900/40 p-6 rounded-2xl border border-white/5">
            <h3 className="text-xs font-black text-accent mb-4">
              USERS
            </h3>

            <div className="space-y-3 max-h-[400px] overflow-y-auto">
              {users.map(u => (
                <div key={u.id} className="p-3 bg-white/5 rounded-xl">
                  <p className="text-xs font-bold">{u.email}</p>
                  <p className="text-[10px] text-gray-500 uppercase">{u.role}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SERVICES */}
          <section className="bg-gray-900/40 p-6 rounded-2xl border border-white/5 lg:col-span-2">
            <h3 className="text-xs font-black text-accent mb-4">
              SERVICE REQUESTS
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {services.map(s => (
                <div key={s.id} className="p-5 bg-white/5 rounded-xl">
                  <p className="text-xs font-black">{s.service}</p>

                  <p className="text-[10px] text-accent break-all mt-1">
                    {s.requesterEmail}
                  </p>

                  <p className="text-[10px] text-gray-500 italic mt-2">
                    “{s.description}”
                  </p>

                  <select
                    value={s.status}
                    onChange={e =>
                      updateServiceStatus(s.id, e.target.value)
                    }
                    className="w-full bg-black border border-white/10 text-xs p-2 mt-3 rounded-lg"
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