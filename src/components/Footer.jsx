import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, MapPin, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo.jpeg" alt="TrustLayer Labs Logo" className="w-8 h-8 object-contain rounded-full shadow-sm" />
              <span className="font-heading font-bold text-xl text-slate-900 tracking-tight">
                TrustLayer <span className="text-blue-600">Labs</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-500">
              Trusted cybersecurity partner for startups & enterprises providing comprehensive VAPT and penetration testing services.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/trustlayerlabs/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-slate-900 font-heading font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services" className="hover:text-blue-600 transition-colors">VAPT Testing</Link></li>
              <li><Link to="/services" className="hover:text-blue-600 transition-colors">Web App Penetration Testing</Link></li>
              <li><Link to="/services" className="hover:text-blue-600 transition-colors">API Security Testing</Link></li>
              <li><Link to="/services" className="hover:text-blue-600 transition-colors">Cloud Security Testing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-slate-900 font-heading font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-blue-600 transition-colors">About Us</Link></li>
              <li><Link to="/process" className="hover:text-blue-600 transition-colors">Process</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link></li>
              <li><Link to="/careers" className="hover:text-blue-600 transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-slate-900 font-heading font-bold mb-6">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-blue-600 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-slate-200 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {currentYear} TrustLayer Labs. All rights reserved.</p>
          <div className="flex items-center gap-2 font-medium">
            <ShieldCheck size={16} className="text-green-500" />
            <span className="text-slate-700">MSME Registered Cybersecurity Company</span>
          </div>
        </div>
      </div>
    </footer>
  );
}