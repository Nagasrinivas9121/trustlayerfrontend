import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";

export default function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match");
    }
    if (formData.password.length < 6) {
      return setError("Password must be at least 6 characters");
    }

    try {
      setLoading(true);
      await register(formData.email, formData.password);
      navigate("/login");
    } catch (err) {
      setError(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md border border-gray-100">
        
        {/* Header */}
        <div className="text-center mb-6">
          <img
            src={logo}
            alt="Trustlayer Labs"
            className="h-12 w-auto mx-auto mb-4 rounded"
          />
          <h2 className="text-2xl font-bold text-gray-800">
            Create Account
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Join our cybersecurity community
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 text-red-600 text-sm p-3 rounded mb-4 border border-red-100 text-center">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="Email address"
            // ADDED: text-gray-900 placeholder-gray-500 bg-white
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent text-gray-900 placeholder-gray-500 bg-white"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            name="password"
            type="password"
            required
            autoComplete="new-password"
            placeholder="Password"
            // ADDED: text-gray-900 placeholder-gray-500 bg-white
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent text-gray-900 placeholder-gray-500 bg-white"
            value={formData.password}
            onChange={handleChange}
          />

          <input
            name="confirmPassword"
            type="password"
            required
            autoComplete="new-password"
            placeholder="Confirm password"
            // FIXED: Typo was "borderrounded-lg"
            // ADDED: text-gray-900 placeholder-gray-500 bg-white
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent text-gray-900 placeholder-gray-500 bg-white"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-accent text-primary font-bold py-2.5 rounded-lg disabled:opacity-60 hover:opacity-90 transition-opacity"
          >
            {loading ? "Creating account..." : "Create Account"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-primary font-semibold hover:underline">
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
}