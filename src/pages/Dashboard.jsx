import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// ✅ Backend URL from env
const API_URL = import.meta.env.VITE_API_URL;

export default function Dashboard() {
  const { user, token } = useAuth();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) return;

    fetch(`${API_URL}/api/enrollments`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCourses(data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [token]);

  if (!user) return null;

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-gray-400 text-lg">
          Loading your dashboard...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-gray-700 pb-4">
          <div>
            <h2 className="text-3xl font-bold">
              Student Dashboard
            </h2>
            <p className="text-gray-400 mt-1">
              Welcome back,{" "}
              <span className="font-semibold text-accent">
                {user.email}
              </span>
            </p>
          </div>
          <span className="mt-4 md:mt-0 bg-primary/20 text-accent px-4 py-1.5 rounded-full text-sm font-medium uppercase tracking-wide border border-primary/30">
            {user.role} Account
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* LEFT: LEARNING */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg border">
              <h3 className="text-xl font-bold mb-6 border-b pb-2">
                My Learning
              </h3>

              {courses.length > 0 ? (
                <div className="space-y-4">
                  {courses.map((course) => (
                    <div
                      key={course.id}
                      className="border p-4 rounded-lg hover:bg-gray-50 transition"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold text-lg">
                          {course.title}
                        </h4>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-medium">
                          Active
                        </span>
                      </div>

                      {/* PROGRESS */}
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-3">
                        <div
                          className="bg-accent h-2.5 rounded-full transition-all"
                          style={{
                            width: `${course.Enrollment?.progress || 0}%`,
                          }}
                        />
                      </div>

                      <p className="text-xs text-right mt-2 text-gray-600 font-medium">
                        {course.Enrollment?.progress || 0}% Complete
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-lg border border-dashed">
                  <p className="text-gray-500 mb-4 text-lg">
                    You haven’t enrolled in any courses yet.
                  </p>
                  <Link
                    to="/courses"
                    className="text-primary font-bold hover:underline text-lg"
                  >
                    Browse Courses →
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: PROFILE */}
          <div className="space-y-6">
            <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg border">
              <h3 className="text-lg font-bold mb-4 border-b pb-2">
                Profile
              </h3>

              <div className="space-y-4 text-sm">
                <div>
                  <span className="block text-xs text-gray-500 uppercase font-semibold">
                    Email
                  </span>
                  <span className="font-medium break-all text-base">
                    {user.email}
                  </span>
                </div>

                <div>
                  <span className="block text-xs text-gray-500 uppercase font-semibold">
                    Role
                  </span>
                  <span className="font-medium capitalize text-base">
                    {user.role}
                  </span>
                </div>

                <button className="w-full mt-6 border-2 py-2 rounded-lg text-gray-600 font-semibold hover:bg-gray-50">
                  Edit Profile (Coming Soon)
                </button>
              </div>
            </div>

            {/* HELP */}
            <div className="bg-blue-600 p-6 rounded-lg shadow-lg">
              <h3 className="font-bold text-lg mb-2">Need Help?</h3>
              <p className="text-sm text-blue-100 mb-4">
                Contact our security team for assistance or custom services.
              </p>
              <Link
                to="/services"
                className="text-sm font-bold underline hover:text-blue-100"
              >
                Go to Services →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}