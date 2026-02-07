import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Courses() {
  const { token, user } = useAuth();
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/courses`)
      .then(res => res.json())
      .then(setCourses);
  }, []);

  const payNow = async (course) => {
    if (!user) {
      navigate("/login");
      return;
    }

    // 1️⃣ Create Order
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

    // 2️⃣ Razorpay Options
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: "INR",
      name: "Trustlayer Labs",
      description: course.title,
      order_id: order.id,

      handler: async function (response) {
        // 3️⃣ Verify Payment
        await fetch(
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

        alert("Payment successful 🎉");
        navigate("/dashboard");
      },

      theme: { color: "#0f172a" },
    };

    new window.Razorpay(options).open();
  };

  return (
    <div className="p-10 text-white">
      <h2 className="text-3xl font-bold mb-6">Courses</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {courses.map(course => (
          <div
            key={course.id}
            className="bg-white text-black p-6 rounded-lg shadow"
          >
            <h3 className="text-xl font-bold">{course.title}</h3>
            <p className="text-lg mt-2">₹{course.price}</p>

            <button
              onClick={() => payNow(course)}
              className="mt-4 bg-black text-white px-4 py-2 rounded"
            >
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}