import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();
const API = import.meta.env.VITE_API_URL;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [loading, setLoading] = useState(true); // Start true to verify session

  /* ================= SESSION VERIFICATION ================= */
  useEffect(() => {
    const verifySession = async () => {
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        try {
          // Optional: Verify token with backend on mount
          const res = await fetch(`${API}/api/user/profile`, {
            headers: { Authorization: `Bearer ${storedToken}` },
          });
          if (!res.ok) throw new Error("Session Expired");
          
          const data = await res.json();
          setUser(data.user);
          setToken(storedToken);
        } catch (err) {
          console.error("// SECURITY_NOTICE: Session Invalidated");
          logout();
        }
      }
      setLoading(false);
    };

    verifySession();
  }, []);

  /* ================= LOGIN ================= */
  const login = async (email, password) => {
    setLoading(true);
    try {
      const res = await fetch(`${API}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Access Denied: Invalid Credentials");

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      
      setToken(data.token);
      setUser(data.user);
      return data.user;
    } finally {
      setLoading(false);
    }
  };

  /* ================= REGISTER ================= */
  const register = async (payload) => {
    setLoading(true);
    try {
      const res = await fetch(`${API}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Enlistment Failed");
      return data;
    } finally {
      setLoading(false);
    }
  };

  /* ================= UPDATE PROFILE ================= */
  const updateProfile = async (updatedData) => {
    setLoading(true);
    try {
      const res = await fetch(`${API}/api/user/profile`, {
        method: "PUT",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(updatedData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Profile Sync Failed");

      localStorage.setItem("user", JSON.stringify(data.user));
      setUser(data.user);
    } finally {
      setLoading(false);
    }
  };

  /* ================= LOGOUT ================= */
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
    // Force a clean state refresh if needed
    window.location.href = "/login";
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        register,
        logout,
        updateProfile,
        loading,
        isAuthenticated: !!user && !!token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);