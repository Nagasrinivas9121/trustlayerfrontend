import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

const API_URL = import.meta.env.VITE_API_URL;

export default function AdminDashboard() {
  const { token } = useAuth();

  const [users, setUsers] = useState([]);
  const [courses, setCourses] = useState([]);
  const [services, setServices] = useState([]);

  const [newCourse, setNewCourse] = useState({
    title: "",
    price: "",
    driveLink: "",
    expiryDays: "",
  });

  /* ================= FETCH ALL DATA ================= */

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const headers = { Authorization: `Bearer ${token}` };

    const [u, c, s] = await Promise.all([
      fetch(`${API_URL}/api/admin/users`, { headers }).then(r => r.json()),
      fetch(`${API_URL}/api/courses`).then(r => r.json()),
      fetch(`${API_URL}/api/admin/services`, { headers }).then(r => r.json()),
    ]);

    setUsers(u);
    setCourses(c);
    setServices(s);
  };

  /* ================= ADD COURSE ================= */

  const addCourse = async () => {
    const { title, price, driveLink, expiryDays } = newCourse;

    if (!title || !price || !driveLink || !expiryDays) {
      return alert("All fields required");
    }

    await fetch(`${API_URL}/api/admin/courses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newCourse),
    });

    setNewCourse({
      title: "",
      price: "",
      driveLink: "",
      expiryDays: "",
    });

    fetchData();
  };

  /* ================= DELETE COURSE ================= */

  const deleteCourse = async (id) => {
    if (!window.confirm("Delete this course?")) return;

    await fetch(`${API_URL}/api/admin/courses/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    fetchData();
  };

  /* ================= UPDATE SERVICE ================= */

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

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-12">
      <h2 className="text-3xl font-bold text-primary">Admin Dashboard</h2>

      {/* ================= USERS ================= */}
      <section>
        <h3 className="text-xl font-bold mb-4">Users</h3>
        {users.map(u => (
          <div key={u.id} className="flex justify-between border p-2 mb-2">
            <span>{u.email}</span>
            <span className="font-semibold">{u.role}</span>
          </div>
        ))}
      </section>

      {/* ================= COURSES ================= */}
      <section>
        <h3 className="text-xl font-bold mb-4">Courses</h3>

        {/* ADD COURSE */}
        <div className="grid grid-cols-5 gap-2 mb-4">
          <input
            placeholder="Title"
            className="border p-2"
            value={newCourse.title}
            onChange={e => setNewCourse({ ...newCourse, title: e.target.value })}
          />
          <input
            type="number"
            placeholder="Price"
            className="border p-2"
            value={newCourse.price}
            onChange={e => setNewCourse({ ...newCourse, price: e.target.value })}
          />
          <input
            placeholder="Drive Link"
            className="border p-2"
            value={newCourse.driveLink}
            onChange={e => setNewCourse({ ...newCourse, driveLink: e.target.value })}
          />
          <input
            type="number"
            placeholder="Expiry (days)"
            className="border p-2"
            value={newCourse.expiryDays}
            onChange={e => setNewCourse({ ...newCourse, expiryDays: e.target.value })}
          />
          <button onClick={addCourse} className="bg-accent font-bold">
            Add
          </button>
        </div>

        {/* COURSE LIST */}
        {courses.map(c => (
          <div key={c.id} className="border p-3 mb-2 rounded">
            <div className="flex justify-between">
              <span className="font-semibold">
                {c.title} – ₹{c.price}
              </span>
              <button
                onClick={() => deleteCourse(c.id)}
                className="text-red-600 font-bold"
              >
                Delete
              </button>
            </div>

            <p className="text-sm mt-1">
              📎 Drive:{" "}
              <a
                href={c.driveLink}
                target="_blank"
                className="text-blue-600 underline"
              >
                Open Link
              </a>
            </p>

            <p className="text-xs text-gray-500">
              ⏳ Expiry: {c.expiryDays} days
            </p>
          </div>
        ))}
      </section>

      {/* ================= SERVICES ================= */}
      <section>
        <h3 className="text-xl font-bold mb-4">Service Requests</h3>

        {services.map(s => (
          <div key={s.id} className="border p-4 mb-3 rounded">
            <p className="font-semibold">{s.service}</p>
            <p className="text-sm text-gray-600">{s.description}</p>

            <select
              value={s.status}
              onChange={e => updateServiceStatus(s.id, e.target.value)}
              className="border p-2 mt-2"
            >
              <option value="pending">Pending</option>
              <option value="quoted">Quoted</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        ))}
      </section>
    </div>
  );
}