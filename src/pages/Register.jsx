import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    college: "",
    year: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, college, year, phone, password, confirmPassword } = form;

    if (!email || !college || !year || !phone || !password || !confirmPassword)
      return setError("All fields are required");

    if (!/^\d{10}$/.test(phone))
      return setError("Phone must be 10 digits");

    if (password !== confirmPassword)
      return setError("Passwords do not match");

    try {
      setLoading(true);
      await register({ email, college, year, phone, password });
      navigate("/login");
    } catch (err) {
      setError(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-lg">

        <div className="text-center mb-6">
          <img src={logo} className="h-12 mx-auto mb-3 rounded" />
          <h2 className="text-2xl font-bold">Create Account</h2>
          <p className="text-sm text-gray-500">
            Fill all details to continue
          </p>
        </div>

        {error && (
          <div className="bg-red-100 text-red-600 text-sm p-2 rounded mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg"
            required
            onChange={handleChange}
          />

          <input
            type="text"
            name="college"
            placeholder="College"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg"
            required
            onChange={handleChange}
          />

          <input
            type="text"
            name="year"
            placeholder="Year / Standard"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg"
            required
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone (10 digits)"
            pattern="[0-9]{10}"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg"
            required
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg"
            required
            onChange={handleChange}
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg"
            required
            onChange={handleChange}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-700"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}