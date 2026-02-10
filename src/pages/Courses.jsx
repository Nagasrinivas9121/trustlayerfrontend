import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useMotionValue, useTransform, useSpring } from "framer-motion";

const API_URL = import.meta.env.VITE_API_URL;

// --- 3D TILT EFFECT COMPONENT ---
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
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group"
    >
      <div style={{ transform: "translateZ(20px)" }}>{children}</div>
    </motion.div>
  );
};

export default function Courses() {
  const { token, user } = useAuth();
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/api/courses`)
      .then((res) => res.json())
      .then((data) => {
        setCourses(data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
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
      if (!order.id) throw new Error("Order creation failed");

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: "INR",
        name: "Trustlayer Labs",
        description: course.title,
        order_id: order.id,
        handler: async function (response) {
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
        theme: { color: "#00b7ff" }, // Matching your accent color
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (err) {
      console.error(err);
      alert("Payment failed. Please try again.");
    }
  };

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

  return (
    <div className="min-h-screen bg-[#05080d] text-white p-6 md:p-12 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase">
            Available <span className="text-accent">Modules</span>
          </h2>
          <p className="text-gray-500 font-mono text-xs mt-2 uppercase tracking-widest">
            // Select a curriculum to begin initialization
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseTilt key={course.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full flex flex-col justify-between hover:border-accent/50 transition-colors shadow-2xl shadow-black"
              >
                <div>
                  <div className="h-1 w-12 bg-accent mb-6 rounded-full" />
                  <h3 className="text-2xl font-bold tracking-tight mb-2 uppercase">{course.title}</h3>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-3xl font-black text-white">₹{course.price}</span>
                    <span className="text-gray-500 text-xs font-mono uppercase">/ lifetime_access</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8">
                    Master professional-grade skills with our industry-vetted security curriculum.
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => payNow(course)}
                  className="w-full bg-white text-black font-black py-4 rounded-2xl text-xs uppercase tracking-widest hover:bg-accent hover:text-white transition-all"
                >
                  Enroll Now
                </motion.button>
              </motion.div>
            </CourseTilt>
          ))}
        </div>

        {courses.length === 0 && (
          <div className="text-center py-20 border border-dashed border-white/10 rounded-3xl">
            <p className="text-gray-600 font-mono italic">NO_DATA_FOUND: Please check back later.</p>
          </div>
        )}
      </div>
    </div>
  );
}