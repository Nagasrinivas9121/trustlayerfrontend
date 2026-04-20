import { motion } from "framer-motion";

export default function TermsAndConditions() {

  return (

    <section className="bg-[#020617] text-white py-32 px-6">

      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="mb-16">

          <h1 className="text-5xl font-bold tracking-tight mb-4">
            Terms and Conditions
          </h1>

          <p className="text-slate-400">
            Effective Date: {new Date().toLocaleDateString()}
          </p>

        </div>



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

  );

}



function Section({ title, text, list }) {

  return (

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

        {title}

      </h2>



      {text && (

        <p className="text-slate-300 leading-relaxed">

          {text}

        </p>

      )}



      {list && (

        <ul className="list-disc pl-5 space-y-2 text-slate-400">

          {list.map((item, i) => (

            <li key={i}>{item}</li>

          ))}

        </ul>

      )}

    </motion.div>

  );

}