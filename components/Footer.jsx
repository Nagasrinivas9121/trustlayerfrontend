import Link from "next/link";
import { Mail, Phone, MapPin, Shield, Globe, Lock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
      
      <div className="max-w-[1100px] mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-8 group">
              <div className="w-10 h-10 relative rounded-lg overflow-hidden flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform bg-white">
                <img src="/logo.jpeg" alt="TrustLayer Labs Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                TrustLayer<span className="text-blue-600">Labs</span>
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Protecting the world's most innovative companies through expert-led security audits and manual penetration testing.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Globe className="w-5 h-5" /></a>
              <a href="https://www.linkedin.com/company/trustlayerlabs/" target="_blank" className="text-slate-400 hover:text-blue-600 transition-colors"><Shield className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Lock className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-slate-900 font-bold text-sm mb-6 uppercase tracking-widest">Services</h3>
            <ul className="space-y-4">
              <li><Link href="/web-application-penetration-testing" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">Web App Security</Link></li>
              <li><Link href="/api-security-testing" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">API VAPT</Link></li>
              <li><Link href="/cloud-security-testing" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">Cloud Security Audit</Link></li>
              <li><Link href="/owasp-top-10-testing" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">OWASP Top 10 Testing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-slate-900 font-bold text-sm mb-6 uppercase tracking-widest">Company</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">About Us</Link></li>
              <li><Link href="/status" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">System Status</Link></li>
              <li><Link href="/privacy-policy" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-slate-900 font-bold text-sm mb-6 uppercase tracking-widest">Get in touch</h3>
            <ul className="space-y-6">
              <li className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                  <Mail className="w-5 h-5 text-slate-400 group-hover:text-blue-600" />
                </div>
                <span className="text-slate-600 font-medium text-sm">security@trustlayerlabs.co.in</span>
              </li>

            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm font-medium">
            &copy; {new Date().getFullYear()} TrustLayer Labs. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-slate-600 text-xs font-bold">
            <Shield className="w-4 h-4 text-green-500" />
            <span>Secure Enterprise Infrastructure</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
