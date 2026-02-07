import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Courses() {
  const { token } = useAuth();
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/courses`)
      .then(res => res.json())
      .then(data => setCourses(data));
  }, []);

  const payNow = async (course) => {
    // 1️⃣ Create order (backend)
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

    // 2️⃣ Razorpay checkout
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: "INR",
      name: "Trustlayer Labs",
      description: course.title,
      order_id: order.id,
      handler: async function (response) {
        // 3️⃣ Verify payment (backend)
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
      theme: {
        color: "#0f172a",
      },
    };

    new window.Razorpay(options).open();
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Courses</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="border p-6 rounded-lg shadow bg-white"
          >
            <h3 className="text-xl font-bold">{course.title}</h3>
            <p className="text-gray-600 mt-2">₹{course.price}</p>

            <button
              onClick={() => payNow(course)}
              className="mt-4 bg-primary text-white px-6 py-2 rounded hover:opacity-90"
            >
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}