import { motion } from "framer-motion";
import { Shield, Target, Eye, Lock, Server } from "lucide-react";
import logo from "../assets/logo.jpeg";

export default function About() {

<<<<<<< HEAD
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="section-spacing px-6">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* HERO */}
        <section className="text-center">
          <img
            src={logo}
            alt="TrustLayerLabs VAPT Cybersecurity Company"
            className="mx-auto w-32 mb-6 drop-shadow-[0_0_25px_rgba(212,175,55,0.25)]"
          />

          <h1 className="hero-title text-transparent bg-clip-text bg-gradient-to-r from-[#F9E498] via-[#D4AF37] to-[#8A6E2F] tracking-normal mb-8">
            About TrustLayerLabs
          </h1>

          <p className="body-text text-secondary max-w-[720px] mx-auto leading-loose">
            TrustLayerLabs provides professional Vulnerability Assessment
            and Penetration Testing (VAPT) services to help organizations
            identify and fix security vulnerabilities in web applications,
            APIs and cloud infrastructure.
          </p>
        </section>

        {/* COMPANY DESCRIPTION */}
        <motion.section
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="max-w-[720px] mx-auto body-text text-secondary leading-loose space-y-6 text-center"
        >
          <p>
            Our mission is to improve cybersecurity posture by identifying
            vulnerabilities before attackers exploit them.
          </p>
          <p>
            We perform structured penetration testing aligned with OWASP Top 10
            methodology and industry best practices to ensure applications remain secure.
          </p>
          <p>
            We work with startups, SaaS platforms and businesses that require
            reliable application security testing and risk assessment.
          </p>
        </motion.section>

        {/* CORE SERVICES */}
        <section>
          <h2 className="section-title mb-12 text-center text-primary">
            Core Security Services
          </h2>

          <div className="grid md:grid-cols-3 grid-spacing">
            <ServiceCard
              icon={<Shield size={32} />}
              title="VAPT Testing"
              desc="Comprehensive vulnerability assessment and penetration testing for web applications."
            />
            <ServiceCard
              icon={<Server size={32} />}
              title="API Security Testing"
              desc="Identify authentication flaws, data exposure and authorization vulnerabilities."
            />
            <ServiceCard
              icon={<Lock size={32} />}
              title="OWASP Top 10 Testing"
              desc="Detect critical vulnerabilities including XSS, SQL Injection and misconfiguration risks."
            />
          </div>
        </section>

        {/* APPROACH */}
        <section>
          <h2 className="section-title mb-12 text-center text-primary">
            Security Approach
          </h2>

          <div className="grid md:grid-cols-3 grid-spacing">
            <ServiceCard
              icon={<Eye size={32} />}
              title="Security Research"
              desc="Continuous research of modern attack techniques and vulnerabilities."
            />
            <ServiceCard
              icon={<Target size={32} />}
              title="Risk Identification"
              desc="Identify vulnerabilities impacting confidentiality, integrity and availability."
            />
            <ServiceCard
              icon={<Shield size={32} />}
              title="Remediation Guidance"
              desc="Clear technical guidance to fix vulnerabilities and improve security architecture."
            />
          </div>
        </section>

        {/* TRUST NOTE */}
        <section className="text-center max-w-[720px] mx-auto">
          <p className="body-text text-muted leading-loose">
            TrustLayerLabs focuses on practical security testing that helps
            organizations understand real-world risks and strengthen their
            application security.
          </p>
        </section>

        {/* FOOTER NOTE */}
        <div className="text-center text-muted text-sm pt-10 border-t border-slate-800">
          TrustLayerLabs • VAPT & Cybersecurity Services
        </div>
      </div>
    </div>
  );
=======
  return (
    <section className="bg-[#020617] text-white py-32 px-6">

      <div className="max-w-6xl mx-auto space-y-32">

        {/* HERO */}
        <div className="text-center max-w-3xl mx-auto">

          <img
            src={logo}
            alt="TrustLayerLabs"
            className="w-28 mx-auto mb-8"
          />

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Cybersecurity
            <span className="text-blue-500"> built for modern apps</span>
          </h1>

          <p className="text-slate-300 text-lg leading-relaxed">
            TrustLayerLabs delivers professional Vulnerability Assessment and
            Penetration Testing services to identify security risks across
            web applications, APIs and cloud infrastructure.
          </p>

        </div>



        {/* STORY SECTION */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Security testing that reflects real-world threats
            </h2>

            <p className="text-slate-300 leading-relaxed mb-4">
              We simulate real attacker behaviour to identify vulnerabilities
              before they can be exploited.
            </p>

            <p className="text-slate-300 leading-relaxed">
              Our testing approach aligns with OWASP Top 10 and modern
              application security standards.
            </p>
          </div>

          <div className="bg-[#0f172a] p-10 rounded-2xl border border-white/10">

            <div className="space-y-4">

              <Feature icon={<Shield />} text="OWASP aligned methodology" />
              <Feature icon={<Target />} text="Risk-based vulnerability prioritization" />
              <Feature icon={<Eye />} text="Manual + automated testing approach" />

            </div>

          </div>

        </div>



        {/* SERVICES */}
        <div>

          <h2 className="text-3xl font-semibold mb-12 text-center">
            Core Security Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <ServiceCard
              icon={<Shield />}
              title="Web App VAPT"
              desc="Identify vulnerabilities across authentication, access control and data exposure."
            />

            <ServiceCard
              icon={<Server />}
              title="API Security"
              desc="Detect broken authorization, insecure tokens and data leakage issues."
            />

            <ServiceCard
              icon={<Lock />}
              title="OWASP Testing"
              desc="Coverage against XSS, SQL Injection and common web attack vectors."
            />

          </div>

        </div>



        {/* APPROACH */}
        <div className="grid md:grid-cols-3 gap-8">

          <ApproachCard
            icon={<Eye />}
            title="Research Driven"
            desc="Continuous research on modern attack techniques."
          />

          <ApproachCard
            icon={<Target />}
            title="Risk Focused"
            desc="Focus on vulnerabilities impacting business risk."
          />

          <ApproachCard
            icon={<Shield />}
            title="Clear Guidance"
            desc="Actionable remediation steps for developers."
          />

        </div>



        {/* CTA */}
        <div className="text-center max-w-2xl mx-auto">

          <h2 className="text-3xl font-semibold mb-4">
            Strengthen your application security posture
          </h2>

          <p className="text-slate-400 mb-8">
            Identify vulnerabilities early and prevent real-world exploitation.
          </p>

          <button className="bg-blue-600 px-6 py-3 rounded-full font-medium hover:bg-blue-500 transition">
            Request Security Testing
          </button>

        </div>

      </div>

    </section>
  );
}



function Feature({ icon, text }) {
  return (
    <div className="flex items-center gap-4 text-slate-300">

      <div className="text-blue-500">
        {icon}
      </div>

      <span>{text}</span>

    </div>
  );
>>>>>>> 4da9e8bea1f3d9e8bf380bab31be4974f552088e
}

function ServiceCard({ icon, title, desc }) {
  return (
<<<<<<< HEAD
    <div className="glass-card p-8 h-full flex flex-col">
      <div className="text-[#facc15] mb-6">
        {icon}
      </div>
      <h3 className="card-title text-primary mb-4">
        {title}
      </h3>
      <p className="body-text text-secondary">
        {desc}
=======
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-[#0f172a] border border-white/10 p-8 rounded-xl
      hover:border-blue-500 transition duration-300"
    >

      <div className="text-blue-500 mb-4">
        {icon}
      </div>

      <h3 className="font-semibold text-lg mb-2">
        {title}
      </h3>

      <p className="text-slate-400 text-sm leading-relaxed">
        {desc}
      </p>

    </motion.div>
  );

}



function ApproachCard({ icon, title, desc }) {

  return (
    <div className="bg-[#0b1220] p-8 rounded-xl border border-white/5">

      <div className="text-blue-500 mb-4">
        {icon}
      </div>

      <h3 className="font-medium mb-2">
        {title}
      </h3>

      <p className="text-slate-400 text-sm">
        {desc}
>>>>>>> 4da9e8bea1f3d9e8bf380bab31be4974f552088e
      </p>
    </div>
  );
}