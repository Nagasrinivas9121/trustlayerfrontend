import Link from "next/link";
import { Shield, Mail, Phone, MapPin, Lock, Zap, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 pt-24 pb-12 border-t border-slate-100">
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-8">
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-black text-slate-900 tracking-tight uppercase">TrustLayer</span>
            </Link>
            <p className="text-slate-500 font-medium leading-relaxed mb-8">
              Professional penetration testing and VAPT services to secure your business against modern threats.
            </p>
            <div className="flex space-x-4">
              {[Shield, Lock, Globe].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-200 transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-8">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-slate-500 font-medium hover:text-blue-600 transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-slate-500 font-medium hover:text-blue-600 transition-colors">VAPT Services</Link></li>
              <li><Link href="/#process" className="text-slate-500 font-medium hover:text-blue-600 transition-colors">Our Process</Link></li>
              <li><Link href="/#cases" className="text-slate-500 font-medium hover:text-blue-600 transition-colors">Case Studies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-8">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="/privacy" className="text-slate-500 font-medium hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="text-slate-500 font-medium hover:text-blue-600 transition-colors">Terms of Service</Link></li>
              <li><Link href="/status" className="text-slate-500 font-medium hover:text-blue-600 transition-colors">System Status</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-8">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center text-slate-500 font-medium">
                <Mail className="w-4 h-4 mr-3 text-slate-400" />
                security@trustlayerlabs.co.in
              </li>
              <li className="flex items-center text-slate-500 font-medium">
                <Phone className="w-4 h-4 mr-3 text-slate-400" />
                +91 91215 54064
              </li>
              <li className="flex items-start text-slate-500 font-medium">
                <MapPin className="w-4 h-4 mr-3 mt-1 text-slate-400" />
                Cyber Hub, Phase 2<br />Gurugram, India
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm font-bold">
          <p>© {currentYear} TrustLayer Labs. All rights reserved.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
