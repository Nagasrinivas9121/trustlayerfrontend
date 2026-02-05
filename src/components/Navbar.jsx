import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/logo.jpeg";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const getLinkClass = ({ isActive }) =>
    isActive
      ? "text-accent font-semibold"
      : "hover:text-accent transition-colors";

  return (
    <nav className="bg-primary text-white shadow-md sticky top-0 z-50">
      <div className="px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" onClick={closeMenu} className="flex items-center space-x-3">
          <img src={logo} alt="Trustlayer Labs" className="h-9 rounded-sm" />
          <span className="font-bold text-lg tracking-wide">
            Trustlayer Labs
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex space-x-6 text-sm items-center">
          <NavLink to="/courses" className={getLinkClass}>EdTech</NavLink>
          <NavLink to="/services" className={getLinkClass}>Services</NavLink>
          <NavLink to="/privacy-policy" className={getLinkClass}>Privacy</NavLink>
          <NavLink to="/terms-and-conditions" className={getLinkClass}>Terms</NavLink>

          {!user ? (
            <div className="flex space-x-4">
              <Link
                to="/login"
                className="px-4 py-2 border border-white rounded hover:bg-white hover:text-primary transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 bg-accent text-white rounded hover:bg-opacity-90 transition"
              >
                Register
              </Link>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link
                to={user.role === "admin" ? "/admin" : "/dashboard"}
                className="hover:text-accent"
              >
                Dashboard
              </Link>
              <button
                onClick={() => {
                  logout();
                  closeMenu();
                }}
                className="bg-red-500 hover:bg-red-600 px-3 py-1.5 rounded text-xs transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        {/* MOBILE BUTTON */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-primary px-6 pb-4 pt-3 border-t border-gray-700 flex flex-col space-y-4 text-sm">
          <NavLink to="/courses" className={getLinkClass} onClick={closeMenu}>
            EdTech
          </NavLink>
          <NavLink to="/services" className={getLinkClass} onClick={closeMenu}>
            Services
          </NavLink>
          <NavLink to="/privacy-policy" className={getLinkClass} onClick={closeMenu}>
            Privacy Policy
          </NavLink>
          <NavLink to="/terms-and-conditions" className={getLinkClass} onClick={closeMenu}>
            Terms & Conditions
          </NavLink>

          <div className="border-t border-gray-600 pt-3 flex flex-col space-y-3">
            {!user ? (
              <>
                <Link to="/login" onClick={closeMenu}>Login</Link>
                <Link to="/register" onClick={closeMenu}>Register</Link>
              </>
            ) : (
              <>
                <Link
                  to={user.role === "admin" ? "/admin" : "/dashboard"}
                  onClick={closeMenu}
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    logout();
                    closeMenu();
                  }}
                  className="text-left text-red-400"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}