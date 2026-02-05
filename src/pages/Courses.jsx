import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Courses() {
  const { user, token } = useAuth();
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleBuy = (course) => {
    if (!user) {
      navigate("/login", { state: { from: { pathname: "/courses" } } });
      return;
    }

    alert(
      `Enrolled Successfully!\n\nCourse: ${course.title}\nUser: ${user.email}`
    );
  };

  if (loading) {
    return <p className="text-center mt-20">Loading courses...</p>;
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-2 text-primary">
        Available Courses
      </h2>
      <p className="text-gray-600 mb-8">
        Upgrade your skills with our premium cybersecurity tracks.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition bg-white flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-800">
                  {course.title}
                </h3>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  Paid
                </span>
              </div>

              <p className="text-gray-600 mb-4 text-sm">
                Professional cybersecurity training program.
              </p>
            </div>

            <div className="flex items-center justify-between mt-4 pt-4 border-t">
              <span className="text-2xl font-bold text-gray-900">
                ₹{course.price}
              </span>
              <button
                onClick={() => handleBuy(course)}
                className="bg-accent text-primary font-bold px-6 py-2 rounded"
              >
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {courses.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No courses available yet.
        </p>
      )}
    </div>
  );
}