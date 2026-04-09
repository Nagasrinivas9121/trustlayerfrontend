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

    <div className="min-h-screen bg-[#030712] text-white px-6 py-20">

      <div className="max-w-6xl mx-auto space-y-24">


        {/* HERO */}

        <section className="text-center">

          <img
            src={logo}
            alt="TrustLayerLabs VAPT Cybersecurity Company"
            className="
            mx-auto
            w-32
            mb-6
            drop-shadow-[0_0_25px_rgba(212,175,55,0.25)]
            "
          />


          <h1 className="
          text-4xl md:text-6xl
          font-black
          uppercase
          text-transparent
          bg-clip-text
          bg-gradient-to-r
          from-[#F9E498]
          via-[#D4AF37]
          to-[#8A6E2F]
          ">

            About TrustLayerLabs

          </h1>


          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">

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

          className="
          max-w-3xl
          mx-auto
          text-gray-300
          leading-relaxed
          space-y-5
          "

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

          <h2 className="
          text-2xl
          font-bold
          mb-12
          text-center
          ">

            Core Security Services

          </h2>


          <div className="grid md:grid-cols-3 gap-8">


            <ServiceCard

              icon={<Shield />}

              title="VAPT Testing"

              desc="Comprehensive vulnerability assessment and penetration testing for web applications."

            />


            <ServiceCard

              icon={<Server />}

              title="API Security Testing"

              desc="Identify authentication flaws, data exposure and authorization vulnerabilities."

            />


            <ServiceCard

              icon={<Lock />}

              title="OWASP Top 10 Testing"

              desc="Detect critical vulnerabilities including XSS, SQL Injection and misconfiguration risks."

            />

          </div>

        </section>



        {/* APPROACH */}

        <section>

          <h2 className="text-2xl font-bold mb-12 text-center">

            Security Approach

          </h2>


          <div className="grid md:grid-cols-3 gap-8">


            <ServiceCard

              icon={<Eye />}

              title="Security Research"

              desc="Continuous research of modern attack techniques and vulnerabilities."

            />


            <ServiceCard

              icon={<Target />}

              title="Risk Identification"

              desc="Identify vulnerabilities impacting confidentiality, integrity and availability."

            />


            <ServiceCard

              icon={<Shield />}

              title="Remediation Guidance"

              desc="Clear technical guidance to fix vulnerabilities and improve security architecture."

            />

          </div>

        </section>



        {/* TRUST NOTE */}

        <section className="text-center max-w-3xl mx-auto">

          <p className="text-gray-400">

            TrustLayerLabs focuses on practical security testing that helps
            organizations understand real-world risks and strengthen their
            application security.

          </p>

        </section>



        {/* FOOTER NOTE */}

        <div className="
        text-center
        text-gray-500
        text-sm
        pt-10
        border-t border-white/5
        ">

          TrustLayerLabs • VAPT & Cybersecurity Services

        </div>


      </div>

    </div>

  );

}



function ServiceCard({ icon, title, desc }) {

  return (

    <div className="
    bg-[#0f172a]
    p-6
    rounded-xl
    border border-white/10
    hover:border-amber-400/40
    transition
    shadow-lg
    ">

      <div className="text-amber-400 mb-4">

        {icon}

      </div>


      <h3 className="font-semibold mb-2">

        {title}

      </h3>


      <p className="text-gray-400 text-sm leading-relaxed">

        {desc}

      </p>

    </div>

  );

}