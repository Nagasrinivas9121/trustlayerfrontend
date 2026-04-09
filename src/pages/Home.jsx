import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import { motion } from "framer-motion";

export default function Home() {

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (

    <main className="min-h-[calc(100vh-70px)] bg-[#030712] flex items-center justify-center text-white relative overflow-hidden px-6">

      {/* grid background */}
      <div className="
      absolute inset-0 opacity-[0.04] pointer-events-none
      bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),
      linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
      bg-[size:32px_32px]
      "></div>


      {/* golden glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.05, 0.12, 0.05]
        }}
        transition={{
          duration: 12,
          repeat: Infinity
        }}
        className="
        absolute top-1/3 left-1/3
        w-[420px] h-[420px]
        bg-amber-500
        rounded-full
        blur-[160px]
        opacity-10
        "
      />


      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="text-center max-w-5xl relative z-10"
      >


        {/* logo */}

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="mb-10"
        >

          <img
            src={logo}
            alt="TrustLayerLabs VAPT Services"
            className="
            mx-auto
            w-32 md:w-48
            drop-shadow-[0_0_30px_rgba(212,175,55,0.25)]
            "
          />

        </motion.div>



        {/* main heading */}

        <motion.h1
          variants={fadeInUp}
          className="
          text-[10vw] sm:text-6xl md:text-7xl
          font-black
          uppercase
          leading-tight
          mb-6
          "
        >

          <span className="
          block
          text-gray-400
          text-sm md:text-lg
          tracking-widest
          font-light
          mb-2
          ">

            PROFESSIONAL CYBERSECURITY

          </span>


          <span className="
          text-transparent
          bg-clip-text
          bg-gradient-to-r
          from-[#F9E498]
          via-[#D4AF37]
          to-[#8A6E2F]
          ">

            VAPT & Penetration Testing

          </span>

        </motion.h1>



        {/* description */}

        <motion.p
          variants={fadeInUp}
          className="
          text-gray-300
          max-w-2xl
          mx-auto
          text-sm md:text-lg
          mb-10
          "
        >

          Secure your web applications, APIs and cloud infrastructure with
          professional Vulnerability Assessment and Penetration Testing (VAPT).
          Identify OWASP Top 10 vulnerabilities before attackers exploit them.

        </motion.p>



        {/* keyword trust line */}

        <motion.p
          variants={fadeInUp}
          className="
          text-[#D4AF37]/70
          text-xs
          tracking-[0.35em]
          font-mono
          mb-12
          uppercase
          "
        >

          web security • api security • owasp testing • ethical hacking

        </motion.p>



        {/* CTA */}

        <motion.div
          variants={fadeInUp}
          className="
          flex flex-col sm:flex-row
          gap-4
          justify-center
          "
        >

          <Link

            to="/services"

            className="
            bg-gradient-to-r
            from-[#F9E498]
            to-[#D4AF37]
            text-black
            px-10 py-4
            font-bold
            text-xs
            tracking-widest
            uppercase
            rounded
            hover:brightness-110
            transition
            shadow-lg
            "
          >

            Get Security Audit

          </Link>



          <Link

            to="/services"

            className="
            border border-white/10
            px-10 py-4
            text-xs
            uppercase
            tracking-widest
            rounded
            hover:border-amber-400
            hover:text-amber-400
            transition
            "
          >

            View Services

          </Link>

        </motion.div>



        {/* extra keywords */}

        <motion.div
          variants={fadeInUp}
          className="
          mt-16
          text-gray-500
          text-xs
          space-y-2
          "
        >

          <p>Web Application Penetration Testing</p>

          <p>API Security Testing</p>

          <p>OWASP Top 10 Vulnerability Assessment</p>

          <p>Cybersecurity Consulting</p>

        </motion.div>



      </motion.div>

    </main>

  );

}