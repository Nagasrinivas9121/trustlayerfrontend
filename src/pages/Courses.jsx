import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Courses() {
  const { token, user } = useAuth();
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH COURSES ================= */
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/courses`)
      .then((res) => res.json())
      .then((data) => {
        setCourses(data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  /* ================= PAY NOW ================= */
  const payNow = async (course) => {
    if (!user) {
      navigate("/login", { state: { from: "/courses" } });
      return;
    }

    try {
      // 1️⃣ Create Razorpay Order
      const orderRes = await fetch(
        `${import.meta.env.VITE_API_URL}/api/payment/create-order`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ amount: course.price }),
        }
      );

      const order = await orderRes.json();
      if (!order.id) throw new Error("Order creation failed");

      // 2️⃣ Razorpay Checkout
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: "INR",
        name: "Trustlayer Labs",
        description: course.title,
        order_id: order.id,

        handler: async function (response) {
          // 3️⃣ Verify Payment (Backend)
          const verifyRes = await fetch(
            `${import.meta.env.VITE_API_URL}/api/payment/verify`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                courseId: course.id,
              }),
            }
          );

          if (!verifyRes.ok) {
            alert("Payment verification failed");
            return;
          }

          alert("🎉 Payment successful! Course unlocked.");
          navigate("/dashboard");
        },

        prefill: {
          email: user.email,
        },

        theme: { color: "#0f172a" },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (err) {
      console.error(err);
      alert("Payment failed. Please try again.");
    }
  };

  /* ================= UI ================= */
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        Loading courses...
      </div>
    );
  }

  return (
    <div className="p-10 min-h-screen bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-8">Available Courses</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white text-black p-6 rounded-lg shadow-md flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold">{course.title}</h3>
              <p className="text-lg mt-2 font-semibold">
                ₹{course.price}
              </p>
            </div>

            <button
              onClick={() => payNow(course)}
              className="mt-6 bg-black text-white px-4 py-2 rounded font-semibold hover:opacity-90 transition"
            >
              Enroll Now
            </button>
          </div>
        ))}
      </div>

      {courses.length === 0 && (
        <p className="text-gray-400 mt-10">No courses available.</p>
      )}
    </div>
  );
}