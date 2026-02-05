import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function AdminDashboard() {
  const { token } = useAuth();

  const [users, setUsers] = useState([]);
  const [courses, setCourses] = useState([]);
  const [services, setServices] = useState([]);

  const [newCourse, setNewCourse] = useState({
    title: "",
    price: "",
  });

  /* ================= FETCH ALL DATA ================= */

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  const fetchData = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const [usersRes, coursesRes, servicesRes] = await Promise.all([
        fetch("http://localhost:5000/api/admin/users", { headers }),
        fetch("http://localhost:5000/api/courses"),
        fetch("http://localhost:5000/api/admin/services", { headers }),
      ]);

      setUsers(await usersRes.json());
      setCourses(await coursesRes.json());
      setServices(await servicesRes.json());
    } catch (err) {
      console.error("Failed to load admin data", err);
    }
  };

  /* ================= USER ROLE ================= */

  const changeRole = async (id, role) => {
    try {
      await fetch(`http://localhost:5000/api/admin/users/${id}/role`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ role }),
      });

      fetchData();
    } catch (err) {
      alert("Failed to update role");
    }
  };

  /* ================= COURSES ================= */

  const addCourse = async () => {
    if (!newCourse.title || !newCourse.price) {
      alert("Title and price required");
      return;
    }

    try {
      await fetch("http://localhost:5000/api/admin/courses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newCourse),
      });

      setNewCourse({ title: "", price: "" });
      fetchData();
    } catch (err) {
      alert("Failed to add course");
    }
  };

  const deleteCourse = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this course?"
    );

    if (!confirmDelete) return;

    try {
      const res = await fetch(
        `http://localhost:5000/api/admin/courses/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) throw new Error();

      fetchData();
    } catch (err) {
      alert("Failed to delete course");
    }
  };

  /* ================= SERVICES ================= */

  const updateServiceStatus = async (id, status) => {
    try {
      await fetch(`http://localhost:5000/api/admin/services/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      });

      fetchData();
    } catch (err) {
      alert("Failed to update service status");
    }
  };

  /* ================= UI ================= */

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-12">
      <h2 className="text-3xl font-bold text-primary">Admin Dashboard</h2>

      {/* USERS */}
      <section>
        <h3 className="text-xl font-bold mb-4">Users</h3>

        {users.map((u) => (
          <div
            key={u.id}
            className="flex justify-between items-center border p-3 mb-2 rounded"
          >
            <span>{u.email}</span>

            <select
              value={u.role}
              onChange={(e) => changeRole(u.id, e.target.value)}
              className="border p-1 rounded"
            >
              <option value="student">Student</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        ))}
      </section>

      {/* COURSES */}
      <section>
        <h3 className="text-xl font-bold mb-4">Courses</h3>

        <div className="flex gap-2 mb-4">
          <input
            placeholder="Title"
            className="border p-2 rounded w-1/3"
            value={newCourse.title}
            onChange={(e) =>
              setNewCourse({ ...newCourse, title: e.target.value })
            }
          />

          <input
            type="number"
            placeholder="Price"
            className="border p-2 rounded w-1/3"
            value={newCourse.price}
            onChange={(e) =>
              setNewCourse({ ...newCourse, price: e.target.value })
            }
          />

          <button
            onClick={addCourse}
            className="bg-accent px-4 font-bold rounded"
          >
            Add
          </button>
        </div>

        {courses.map((c) => (
          <div
            key={c.id}
            className="flex justify-between items-center border p-3 mb-2 rounded"
          >
            <span>
              {c.title} – ₹{c.price}
            </span>

            <button
              onClick={() => deleteCourse(c.id)}
              className="text-red-600 font-semibold hover:underline"
            >
              Delete
            </button>
          </div>
        ))}
      </section>

      {/* SERVICES */}
      <section>
        <h3 className="text-xl font-bold mb-4">Service Requests</h3>

        {services.map((s) => (
          <div key={s.id} className="border p-4 mb-3 rounded">
            <p className="font-semibold">{s.service}</p>
            <p className="text-sm text-gray-600 mb-2">
              {s.description}
            </p>

            <select
              value={s.status}
              onChange={(e) =>
                updateServiceStatus(s.id, e.target.value)
              }
              className="border p-2 rounded"
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