import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

const API_URL = import.meta.env.VITE_API_URL;

/* ================= 3D TILT EFFECT ================= */

const CourseTilt = ({ children }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(useSpring(y), [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(useSpring(x), [-0.5, 0.5], ["-7deg", "7deg"]);

  return (
    <motion.div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group"
    >
      <div style={{ transform: "translateZ(20px)" }}>{children}</div>
    </motion.div>
  );
};

/* ================= COURSES PAGE ================= */

export default function Courses() {
  const { token, user } = useAuth();
  const navigate = useNavigate();

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH COURSES ================= */

  useEffect(() => {
    fetch(`${API_URL}/api/courses`)
      .then((res) => res.json())
      .then((data) => {
        setCourses(Array.isArray(data) ? data : []); // 🔒 CRASH SAFE
        setLoading(false);
      })
      .catch(() => {
        setCourses([]);
        setLoading(false);
      });
  }, []);

  /* ================= PAYMENT ================= */

  const payNow = async (course) => {
    if (!user) {
      navigate("/login", { state: { from: "/courses" } });
      return;
    }

    try {
      const orderRes = await fetch(`${API_URL}/api/payment/create-order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ amount: course.price }),
      });

      const order = await orderRes.json();
      if (!order?.id) throw new Error("Order failed");

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: "INR",
        name: "TrustLayer Labs",
        description: course.title,
        order_id: order.id,
        handler: async (response) => {
          const verifyRes = await fetch(`${API_URL}/api/payment/verify`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              ...response,
              courseId: course.id,
            }),
          });

          if (!verifyRes.ok) {
            alert("Payment verification failed");
            return;
          }

          navigate("/dashboard");
        },
        prefill: { email: user.email },
        theme: { color: "#00b7ff" },
      };

      new window.Razorpay(options).open();
    } catch (err) {
      console.error(err);
      alert("Payment failed. Try again.");
    }
  };

  /* ================= LOADING ================= */

  if (loading) {
    return (
      <div className="min-h-screen bg-[#05080d] flex items-center justify-center">
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-accent font-black tracking-[0.3em] text-sm"
        >
          SCANNING_DATABASE...
        </motion.div>
      </div>
    );
  }

  /* ================= UI ================= */

  return (
    <div className="min-h-screen bg-[#05080d] text-white p-6 md:p-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-6xl font-black italic uppercase mb-4">
          Available <span className="text-accent">Modules</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {courses.map((course, index) => {
            const discount =
              course.originalPrice && course.originalPrice > course.price
                ? Math.round(
                    ((course.originalPrice - course.price) /
                      course.originalPrice) *
                      100
                  )
                : 0;

            return (
              <CourseTilt key={course.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-900/40 border border-white/10 rounded-3xl p-8 flex flex-col justify-between h-full relative"
                >
                  {discount > 0 && (
                    <div className="absolute top-6 right-[-35px] bg-accent text-white text-[10px] font-black px-10 py-1 rotate-45">
                      {discount}% OFF
                    </div>
                  )}

                  <div>
                    <h3 className="text-2xl font-bold uppercase mb-3">
                      {course.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-6">
                      {course.description}
                    </p>

                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-3xl font-black">
                        ₹{course.price}
                      </span>
                      {course.originalPrice && (
                        <span className="line-through text-gray-500 text-sm">
                          ₹{course.originalPrice}
                        </span>
                      )}
                    </div>

                    <div className="text-[10px] uppercase tracking-widest text-gray-500">
                      Difficulty: {course.difficulty}
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => payNow(course)}
                    className="mt-8 w-full bg-white text-black font-black py-4 rounded-2xl text-xs uppercase tracking-widest hover:bg-accent hover:text-white"
                  >
                    Enroll Now
                  </motion.button>
                </motion.div>
              </CourseTilt>
            );
          })}
        </div>

        {courses.length === 0 && (
          <div className="text-center py-20 text-gray-600 font-mono text-xs">
            // NO_COURSES_AVAILABLE
          </div>
        )}
      </div>
    </div>
  );
}