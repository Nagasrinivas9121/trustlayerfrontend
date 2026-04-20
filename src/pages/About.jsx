import { motion } from "framer-motion";

import {
  Shield,
  Target,
  Eye,
  Lock,
  Globe,
  Server
} from "lucide-react";

import logo from "../assets/logo.jpeg";

export default function About() {

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
}

function ServiceCard({ icon, title, desc }) {
  return (
    <div className="glass-card p-8 h-full flex flex-col">
      <div className="text-[#facc15] mb-6">
        {icon}
      </div>
      <h3 className="card-title text-primary mb-4">
        {title}
      </h3>
      <p className="body-text text-secondary">
        {desc}
      </p>
    </div>
  );
}