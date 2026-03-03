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

  useEffect(() => {
    fetch(`${API_URL}/api/courses`)
      .then((res) => res.json())
      .then((data) => {
        setCourses(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => {
        setCourses([]);
        setLoading(false);
      });
  }, []);

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
        theme: { color: "#D4AF37" }, // Gold theme for Razorpay
      };

      new window.Razorpay(options).open();
    } catch (err) {
      console.error(err);
      alert("Payment failed. Try again.");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#05080d] flex items-center justify-center">
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-amber-500 font-mono tracking-[0.4em] text-xs"
        >
          &gt; SCANNING_ENCRYPTED_DATABASE...
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#05080d] text-white p-6 md:p-12 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            Available <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">Modules</span>
          </h2>
          <p className="text-gray-500 font-mono text-xs mt-2 tracking-widest uppercase">// SELECT_SECURE_PATHWAY</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {courses.map((course, index) => {
            const discount = course.originalPrice && course.originalPrice > course.price
                ? Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)
                : 0;

            return (
              <CourseTilt key={course.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-900/40 border border-white/5 backdrop-blur-sm rounded-xl p-8 flex flex-col justify-between h-full relative group hover:border-amber-500/30 transition-colors shadow-2xl"
                >
                  {discount > 0 && (
                    <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-600 to-amber-400 text-black text-[10px] font-black px-4 py-1 rounded-bl-lg rounded-tr-xl">
                      {discount}% OFF
                    </div>
                  )}

                  <div>
                    <div className="text-amber-500 font-mono text-[10px] mb-2 tracking-[0.2em]">0{index + 1} // UNIT</div>
                    <h3 className="text-2xl font-bold uppercase mb-3 group-hover:text-amber-200 transition-colors">
                      {course.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-3">
                      {course.description}
                    </p>

                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-3xl font-black text-white">
                        ₹{course.price}
                      </span>
                      {course.originalPrice && (
                        <span className="line-through text-gray-600 text-sm italic">
                          ₹{course.originalPrice}
                        </span>
                      )}
                    </div>

                    <div className="inline-block px-3 py-1 border border-white/10 rounded-full text-[9px] uppercase tracking-widest text-gray-400 mb-6">
                      Level: {course.difficulty}
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => payNow(course)}
                    className="mt-8 w-full bg-gradient-to-r from-amber-500 to-amber-700 text-black font-black py-4 rounded-lg text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-lg shadow-amber-900/20"
                  >
                    Enroll Now
                  </motion.button>
                </motion.div>
              </CourseTilt>
            );
          })}
        </div>

        {courses.length === 0 && (
          <div className="text-center py-40 text-gray-600 font-mono text-xs animate-pulse">
            &gt; ERROR: NO_MODULES_FOUND_IN_SECTOR_7
          </div>
        )}
      </div>
    </div>
  );
}