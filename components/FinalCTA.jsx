import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-4 relative z-10">
        <div className="bg-slate-900 rounded-[48px] p-12 md:p-24 text-center relative overflow-hidden">
          {/* Decorative mesh */}
          <div className="absolute inset-0 bg-mesh opacity-10 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 bg-blue-600 rounded-[32px] flex items-center justify-center mb-10 shadow-2xl shadow-blue-500/20">
              <ShieldCheck className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight leading-tight max-w-[800px]">
              Get Your Security Audit <br /> Before Attackers Do
            </h2>
            
            <p className="text-xl text-slate-400 mb-12 max-w-[600px] font-medium leading-relaxed">
              Every minute counts in cybersecurity. Secure your enterprise with professional penetration testing today.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link href="https://calendar.app.google/jnamj3gawxVunPJm9" target="_blank" className="px-10 py-5 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20 flex items-center group">
                Book Free Consultation <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <p className="mt-12 text-sm text-slate-500 font-bold uppercase tracking-widest">
              No credit card required • Secure manual testing available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
