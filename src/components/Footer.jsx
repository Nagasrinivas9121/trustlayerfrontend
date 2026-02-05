import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* BRAND */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">
            Trustlayer Labs
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Secure-by-design EdTech & Cybersecurity Services platform.
            Empowering students and enterprises with trusted security solutions.
          </p>
        </div>

        {/* EDTECH */}
        <div>
          <h3 className="text-white font-semibold mb-3">EdTech</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/courses" className="hover:text-white">
                Courses
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="hover:text-white">
                Student Dashboard
              </Link>
            </li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-white font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/services" className="hover:text-white">
                VAPT
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white">
                SOC Setup
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white">
                Cloud Security
              </Link>
            </li>
          </ul>
        </div>

        {/* LEGAL */}
        <div>
          <h3 className="text-white font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms-and-conditions" className="hover:text-white">
                Terms & Conditions
              </Link>
            </li>
            <li className="pt-2 text-gray-400">
              📧 nagasrinivasaraoeevuri@gmail.com
            </li>
            <li>
                <Link to='refund' className="hover:text-white">refund</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Trustlayer Labs. All rights reserved.
      </div>
    </footer>
  );
}