"use client";

import { CheckCircle2, ShieldCheck, Zap, Activity } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Manual + Automated Testing",
      description: "We don't just rely on automated tools. Our certified ethical hackers manually chain vulnerabilities to find critical business logic flaws."
    },
    {
      title: "Real Exploit Proof",
      description: "No false positives. We provide verifiable proof-of-concept (PoC) for every vulnerability to demonstrate real-world impact."
    },
    {
      title: "Fast Turnaround",
      description: "Get comprehensive VAPT reports in days, not weeks. Perfect for startups scaling fast and facing strict compliance deadlines."
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4">
              The TrustLayer Advantage
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
              We Find What <br />
              <span className="text-gradient">Automated Tools</span> Miss.
            </h2>
            <p className="text-lg text-slate-500 mb-8 leading-relaxed">
              Standard scanners miss up to 45% of critical vulnerabilities. Our elite security team acts like real attackers to ensure your application is battle-tested.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-slate-900">{feature.title}</h4>
                    <p className="text-slate-500 text-sm mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-[3rem] transform rotate-3"></div>
            <div className="soft-card p-10 relative z-10 bg-white/80 backdrop-blur-xl border border-white/50 shadow-2xl">
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-100">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <Activity className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Audit Status</h3>
                    <p className="text-xs text-green-600 font-bold uppercase tracking-wider">Active Monitoring</p>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <ShieldCheck className="w-5 h-5 text-blue-500" />
                    <span className="font-bold text-slate-700 text-sm">Deep Logic Testing</span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-amber-500" />
                    <span className="font-bold text-slate-700 text-sm">Zero-Day Detection</span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: '0.5s' }}></span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="font-bold text-slate-700 text-sm">Compliance Validation</span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: '1s' }}></span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
