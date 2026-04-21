import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 pt-20 pb-10 border-t border-slate-800 text-slate-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group shrink-0">
              <img src="/logo.jpeg" alt="TrustLayer Labs Logo" className="w-10 h-10 object-contain rounded-full shadow-sm group-hover:scale-105 transition-transform" />
              <span className="font-heading font-bold text-xl text-white tracking-tight">
                TrustLayer <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-400">Labs</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 mt-4 leading-relaxed">
              We identify, exploit, and help you remediate critical vulnerabilities before attackers do.
            </p>
            <div className="inline-flex items-center gap-2 mt-4 px-3 py-1.5 rounded-lg bg-slate-800/50 border border-slate-700/50">
              <ShieldCheck size={16} className="text-blue-400" />
              <span className="text-xs font-semibold text-slate-200">MSME Registered</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/vapt-services" className="hover:text-blue-400 transition-colors">VAPT Testing</Link></li>
              <li><Link to="/web-app-security" className="hover:text-blue-400 transition-colors">Web App Security</Link></li>
              <li><Link to="/api-security-testing" className="hover:text-blue-400 transition-colors">API Security</Link></li>
              <li><Link to="/cloud-security" className="hover:text-blue-400 transition-colors">Cloud Security</Link></li>
              <li><Link to="/network-penetration-testing" className="hover:text-blue-400 transition-colors">Network Pentesting</Link></li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h4 className="text-white font-bold mb-6">Company & Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">All Services</Link></li>
              <li><Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="block text-slate-400 mb-1">Email:</span>
                <a href="mailto:security@trustlayerlabs.co.in" className="hover:text-blue-400 transition-colors">security@trustlayerlabs.co.in</a>
              </li>
              <li>
                <span className="block text-slate-400 mb-1">Phone:</span>
                <a href="tel:+918822402811" className="hover:text-blue-400 transition-colors">+91 8822402811</a>
              </li>
              <li className="mt-4">
                <Link to="/contact" className="inline-block mt-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                  Contact Support &rarr;
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} TrustLayer Labs. All rights reserved.
          </p>
          <div className="flex gap-4">
            {/* Social Icons Placeholder */}
            <a href="https://www.linkedin.com/company/trustlayerlabs/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors text-white">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors text-white">
              <span className="sr-only">Twitter</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}