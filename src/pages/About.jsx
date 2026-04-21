import { motion } from "framer-motion";
import { Shield, Target, Eye, Lock, Server } from "lucide-react";
import SEO from '../components/SEO';

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <SEO 
        title="About Us | TrustLayer Labs"
        description="TrustLayerLabs provides professional Vulnerability Assessment and Penetration Testing (VAPT) services to help organizations."
      />
      <div className="pt-32 pb-24 px-6 bg-slate-50 min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-dotted-pattern opacity-50 pointer-events-none"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto space-y-32 relative z-10">
          {/* HERO */}
          <div className="text-center max-w-3xl mx-auto">
            <img src="/logo.jpeg" alt="TrustLayer Labs Logo" className="w-32 h-32 object-contain rounded-2xl shadow-xl mx-auto mb-8 border border-slate-200" />
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-slate-900">
              Cybersecurity
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-400"> built for modern apps</span>
            </h1>

            <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
              TrustLayerLabs delivers professional Vulnerability Assessment and
              Penetration Testing services to identify security risks across
              web applications, APIs and cloud infrastructure.
            </p>
          </div>

          {/* STORY SECTION */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Security testing that reflects real-world threats
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4 text-lg">
                We simulate real attacker behaviour to identify vulnerabilities
                before they can be exploited.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg">
                Our testing approach aligns with OWASP Top 10 and modern
                application security standards.
              </p>
            </div>

            <div className="light-card bg-white p-10">
              <div className="space-y-6">
                <Feature icon={<Shield size={24} />} text="OWASP aligned methodology" />
                <Feature icon={<Target size={24} />} text="Risk-based vulnerability prioritization" />
                <Feature icon={<Eye size={24} />} text="Manual + automated testing approach" />
              </div>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Core Security Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <ServiceCard
                icon={<Shield size={32} />}
                title="Web App VAPT"
                desc="Identify vulnerabilities across authentication, access control and data exposure."
              />
              <ServiceCard
                icon={<Server size={32} />}
                title="API Security"
                desc="Detect broken authorization, insecure tokens and data leakage issues."
              />
              <ServiceCard
                icon={<Lock size={32} />}
                title="OWASP Testing"
                desc="Coverage against XSS, SQL Injection and common web attack vectors."
              />
            </div>
          </div>

          {/* APPROACH */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Our Approach
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <ApproachCard
                icon={<Eye size={32} />}
                title="Research Driven"
                desc="Continuous research on modern attack techniques."
              />
              <ApproachCard
                icon={<Target size={32} />}
                title="Risk Focused"
                desc="Focus on vulnerabilities impacting business risk."
              />
              <ApproachCard
                icon={<Shield size={32} />}
                title="Clear Guidance"
                desc="Actionable remediation steps for developers."
              />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

function Feature({ icon, text }) {
  return (
    <div className="flex items-center gap-4 text-slate-700 font-medium">
      <div className="text-blue-600 bg-blue-50 p-2 rounded-lg">
        {icon}
      </div>
      <span>{text}</span>
    </div>
  );
}

function ServiceCard({ icon, title, desc }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="light-card bg-white p-8 group flex flex-col"
    >
      <div className="text-blue-600 mb-6 bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="font-bold text-xl text-slate-900 mb-3">
        {title}
      </h3>
      <p className="text-slate-600 leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
}

function ApproachCard({ icon, title, desc }) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="text-blue-600 mb-6 bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center">
        {icon}
      </div>
      <h3 className="font-bold text-lg text-slate-900 mb-2">
        {title}
      </h3>
      <p className="text-slate-600">
        {desc}
      </p>
    </div>
  );
}