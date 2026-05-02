import Link from "next/link";
import { Shield, ArrowRight, CheckCircle2, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-slate-50 min-h-[70vh] flex items-center">
      {/* Optimized Background - Reduced complexity */}
      <div className="absolute inset-0 opacity-[0.2] pointer-events-none bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px]" />
      
      {/* Simplified Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/20 blur-[120px] rounded-full -mr-64 -mt-64" />

      <div className="max-w-[1100px] mx-auto px-4 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          {/* Trust Badge - Pre-rendered */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white border border-slate-200 rounded-full shadow-sm mb-8">
            <Shield className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-black text-slate-600 uppercase tracking-widest">Enterprise-Grade VAPT</span>
          </div>

          {/* Headline - Primary LCP Element (No JS required for initial render) */}
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight leading-[1.1] max-w-[900px]">
            Enterprise-Grade VAPT Services <br />
            <span className="text-blue-600">
              in India
            </span>
          </h1>
          
          {/* Subheadline - Critical keywords server-rendered */}
          <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-[900px] font-medium leading-relaxed">
            Go beyond automated scanners. We are a premier <strong className="text-slate-700">penetration testing company in India</strong> specializing in deep, manual security testing. From <strong className="text-slate-700">web application security</strong> to complex <strong className="text-slate-700">API security testing</strong>.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <Link href="/services" className="px-10 py-5 bg-slate-900 text-white font-black rounded-2xl hover:bg-slate-800 transition-all flex items-center group shadow-xl shadow-slate-900/10">
              View Our Services <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="https://calendar.app.google/jnamj3gawxVunPJm9" target="_blank" className="px-10 py-5 bg-white text-slate-900 border border-slate-200 font-black rounded-2xl hover:bg-slate-50 transition-all shadow-sm">
              Book a Security Audit Call
            </Link>
          </div>
          
          {/* Proof Grid - Static & Fast */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
            {[
              { label: "100+ vulnerabilities identified across client systems", icon: Zap, color: "text-amber-500" },
              { label: "0 breaches after remediation", icon: CheckCircle2, color: "text-green-500" },
              { label: "Reports delivered in 24–48 hours", icon: ArrowRight, color: "text-blue-500" },
            ].map((stat, i) => (
              <div key={i} className="flex items-center space-x-4 p-6 bg-white border border-slate-100 rounded-3xl text-left">
                <div className={`w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center flex-shrink-0`}>
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <span className="text-sm font-bold text-slate-600 leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
