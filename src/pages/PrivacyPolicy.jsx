import { motion } from "framer-motion";

export default function PrivacyPolicy() {

  return (

    <section className="bg-[#020617] text-white py-32 px-6">

      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="mb-16">

          <h1 className="text-5xl font-bold tracking-tight mb-4">
            Privacy Policy
          </h1>

          <p className="text-slate-400">
            Effective Date: {new Date().toLocaleDateString()}
          </p>

        </div>



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
      transition
      hover:border-blue-500/40
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