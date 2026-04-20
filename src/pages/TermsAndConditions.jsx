import { motion } from "framer-motion";

export default function TermsAndConditions() {
  return (
<<<<<<< HEAD
    <div className="pt-[140px] pb-20 px-6">
      <div className="max-w-[850px] mx-auto space-y-12">
        {/* header */}
        <div className="mb-16">
          <h1 className="hero-title text-transparent bg-clip-text bg-gradient-to-r from-[#F9E498] via-[#D4AF37] to-[#8A6E2F] mb-4">
            Terms and Conditions
          </h1>
          <p className="body-text text-secondary">
=======

    <section className="bg-[#020617] text-white py-32 px-6">

      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="mb-16">

          <h1 className="text-5xl font-bold tracking-tight mb-4">
            Terms and Conditions
          </h1>

          <p className="text-slate-400">
>>>>>>> 4da9e8bea1f3d9e8bf380bab31be4974f552088e
            Effective Date: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="space-y-8">
          <Section
            title="1. Agreement"
            text="By requesting services from TrustLayerLabs, you agree to these Terms and Conditions. These terms apply to all cybersecurity services including Vulnerability Assessment and Penetration Testing (VAPT)."
          />

          <Section
            title="2. Scope of Services"
            list={[
              "Web application penetration testing",
              "API security testing",
              "OWASP Top 10 vulnerability assessment",
              "Security risk identification"
            ]}
          />

<<<<<<< HEAD
          <Section
            title="3. Client Authorization"
            text="Clients must provide written authorization before any testing begins. Security testing will only be performed on systems owned or legally authorized by the client."
          />
=======
        {/* CONTENT */}
        <div className="space-y-8">

          <Section
            title="Agreement"
            text="By requesting services from TrustLayerLabs, you agree to these Terms and Conditions. These terms apply to all cybersecurity services including Vulnerability Assessment and Penetration Testing (VAPT)."
          />

          <Section
            title="Scope of Services"
            list={[
              "Web application penetration testing",
              "API security testing",
              "OWASP Top 10 vulnerability assessment",
              "Security risk identification"
            ]}
          />

          <Section
            title="Client Authorization"
            text="Clients must provide written authorization before any testing begins. Security testing will only be performed on systems owned or legally authorized by the client."
          />

          <Section
            title="Responsible Use"
            text="TrustLayerLabs performs testing ethically and responsibly. No unauthorized exploitation will be performed outside agreed scope."
          />

          <Section
            title="Limitation of Liability"
            text="TrustLayerLabs shall not be liable for indirect damages or losses related to vulnerabilities identified during testing."
          />

          <Section
            title="Confidentiality"
            text="All client data, findings and security reports remain confidential and will not be shared without permission."
          />

          <Section
            title="Governing Law"
            text="These terms are governed by the laws of India."
          />

          <Section
            title="Contact"
            text="For questions regarding these Terms contact:"
          />

        </div>
>>>>>>> 4da9e8bea1f3d9e8bf380bab31be4974f552088e

          <Section
            title="4. Responsible Use"
            text="TrustLayerLabs performs testing ethically and responsibly. No unauthorized exploitation will be performed outside agreed scope."
          />

<<<<<<< HEAD
          <Section
            title="5. Limitation of Liability"
            text="TrustLayerLabs shall not be liable for indirect damages or losses related to vulnerabilities identified during testing."
          />

          <Section
            title="6. Confidentiality"
            text="All client data, findings and security reports will remain confidential and will not be shared without permission."
          />

          <Section
            title="7. Governing Law"
            text="These terms are governed by the laws of India."
          />

          <Section
            title="8. Contact"
            text="For questions regarding these Terms contact:"
          />

          <div className="text-amber-400 font-semibold pl-6">
            security@trustlayerlabs.co.in
          </div>
        </div>

        {/* footer */}
        <div className="pt-10 border-t border-slate-800 text-muted text-sm mt-16">
          TrustLayerLabs • VAPT & Cybersecurity Services
        </div>
      </div>
    </div>
=======

        {/* EMAIL */}
        <div className="mt-10 text-lg text-blue-400 font-medium">

          security@trustlayerlabs.co.in

        </div>



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
      hover:border-blue-500/40
      transition
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