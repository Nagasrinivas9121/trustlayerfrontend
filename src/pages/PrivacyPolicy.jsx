import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
<<<<<<< HEAD
    <div className="pt-[140px] pb-20 px-6">
      <div className="max-w-[850px] mx-auto space-y-12">
        {/* header */}
        <div className="mb-16">
          <h1 className="hero-title text-transparent bg-clip-text bg-gradient-to-r from-[#F9E498] via-[#D4AF37] to-[#8A6E2F] mb-4">
            Privacy Policy
          </h1>
          <p className="body-text text-secondary">
=======

    <section className="bg-[#020617] text-white py-32 px-6">

      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="mb-16">

          <h1 className="text-5xl font-bold tracking-tight mb-4">
            Privacy Policy
          </h1>

          <p className="text-slate-400">
>>>>>>> 4da9e8bea1f3d9e8bf380bab31be4974f552088e
            Effective Date: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="space-y-8">
          <Section
            title="1. Introduction"
            text="TrustLayerLabs provides cybersecurity services including Vulnerability Assessment and Penetration Testing (VAPT). This Privacy Policy explains how we collect, use and protect client information."
          />

          <Section
            title="2. Information We Collect"
            list={[
              "Email address submitted through contact forms",
              "Project scope and technical requirements",
              "IP address and browser metadata",
              "Communication details related to services"
            ]}
          />

<<<<<<< HEAD
          <Section
            title="3. How We Use Information"
            list={[
              "Respond to VAPT service inquiries",
              "Perform security testing and reporting",
              "Improve website functionality and security",
              "Provide project communication updates"
            ]}
          />

          <Section
            title="4. Data Security"
            text="We implement appropriate security measures to protect client data from unauthorized access, disclosure or alteration."
          />
=======
        {/* CONTENT */}
        <div className="space-y-8">

          <Section
            title="Introduction"
            text="TrustLayerLabs provides cybersecurity services including Vulnerability Assessment and Penetration Testing (VAPT). This policy explains how we collect, use and protect information shared with us."
          />

          <Section
            title="Information We Collect"
            list={[
              "Email address submitted through contact forms",
              "Project scope and technical requirements",
              "IP address and browser metadata",
              "Communication details related to services"
            ]}
          />

          <Section
            title="How We Use Information"
            list={[
              "Respond to VAPT service inquiries",
              "Perform security testing and reporting",
              "Improve website functionality and security",
              "Provide project communication updates"
            ]}
          />

          <Section
            title="Data Security"
            text="We apply appropriate security controls to protect client information from unauthorized access, disclosure or misuse."
          />

          <Section
            title="Third Party Services"
            text="We may use trusted infrastructure providers or analytics tools required to operate our services securely."
          />

          <Section
            title="Contact"
            text="For privacy related queries contact:"
          />

        </div>
>>>>>>> 4da9e8bea1f3d9e8bf380bab31be4974f552088e

          <Section
            title="5. Third Party Services"
            text="We may use trusted third-party services such as hosting providers or payment processors. These services maintain their own privacy policies."
          />

<<<<<<< HEAD
          <Section
            title="6. Contact"
            text="For privacy related questions contact:"
          />
=======

        {/* EMAIL */}
        <div className="mt-10 text-lg text-blue-400 font-medium">

          security@trustlayerlabs.co.in
>>>>>>> 4da9e8bea1f3d9e8bf380bab31be4974f552088e

          <div className="text-amber-400 font-semibold pl-6">
            security@trustlayerlabs.co.in
          </div>
        </div>

<<<<<<< HEAD
        {/* footer */}
        <div className="pt-10 border-t border-slate-800 text-muted text-sm mt-16">
          TrustLayerLabs • VAPT & Cybersecurity Services
        </div>
      </div>
    </div>
=======


        {/* FOOTER */}
        <div className="mt-20 pt-10 border-t border-white/10 text-sm text-slate-500">

          TrustLayerLabs • Cybersecurity & VAPT Services

        </div>

      </div>

    </section>

>>>>>>> 4da9e8bea1f3d9e8bf380bab31be4974f552088e
  );
}

function Section({ title, text, list }) {
  return (
<<<<<<< HEAD
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-8 space-y-4"
    >
      <h2 className="card-title text-primary">
=======

    <motion.div

      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}

      className="
      bg-[#0b1220]
      border border-white/5
      p-8
      rounded-xl
      transition
      hover:border-blue-500/40
      "

    >

      <h2 className="text-xl font-semibold mb-3">

>>>>>>> 4da9e8bea1f3d9e8bf380bab31be4974f552088e
        {title}
      </h2>

<<<<<<< HEAD
      {text && (
        <p className="body-text text-secondary leading-loose">
=======


      {text && (

        <p className="text-slate-300 leading-relaxed">

>>>>>>> 4da9e8bea1f3d9e8bf380bab31be4974f552088e
          {text}
        </p>
      )}

<<<<<<< HEAD
      {list && (
        <ul className="list-disc pl-6 space-y-3 body-text text-secondary leading-loose">
=======


      {list && (

        <ul className="list-disc pl-5 space-y-2 text-slate-400">

>>>>>>> 4da9e8bea1f3d9e8bf380bab31be4974f552088e
          {list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
<<<<<<< HEAD
    </motion.section>
=======

    </motion.div>

>>>>>>> 4da9e8bea1f3d9e8bf380bab31be4974f552088e
  );
}