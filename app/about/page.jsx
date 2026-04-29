import CTA from "@/components/CTA";
import { Shield, Target, Users, Award } from "lucide-react";

export const metadata = {
  title: "About Us | TrustLayer Labs - VAPT Experts",
  description: "Learn more about TrustLayer Labs, a premier cybersecurity firm dedicated to providing elite penetration testing and security audits.",
};

export default function AboutPage() {
  const stats = [
    { label: "Vulnerabilities Found", value: "5,000+" },
    { label: "Clients Secured", value: "200+" },
    { label: "Expert Researchers", value: "15+" },
    { label: "Compliance Pass Rate", value: "100%" },
  ];

  const values = [
    {
      title: "Manual-First Approach",
      description: "We believe that human intelligence is superior to any automated scanner when it comes to identifying complex logic flaws.",
      icon: <Target className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Absolute Integrity",
      description: "We operate with total transparency and provide honest assessments of your security posture, no matter how harsh.",
      icon: <Shield className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Actionable Results",
      description: "We don't just find problems; we provide the exact steps and support needed to fix them permanently.",
      icon: <Award className="w-6 h-6 text-blue-600" />
    }
  ];

  return (
    <div className="pt-32 pb-0 bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-[1100px] mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6">Securing the Digital Frontier</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            TrustLayer Labs was founded with a single mission: to provide enterprise-grade security testing that goes beyond the checkbox.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center text-white">
                <div className="text-4xl font-black mb-2">{stat.value}</div>
                <div className="text-sm font-bold uppercase tracking-widest opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Our Core Principles</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">The foundation of every security engagement we undertake.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, i) => (
              <div key={i} className="text-center p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-500 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
