import { motion } from "framer-motion";

export default function TermsAndConditions() {

  return (

    <div className="min-h-screen bg-[#030712] text-gray-300 py-20 px-6">

      <div className="max-w-4xl mx-auto space-y-12">


        {/* header */}

        <div>

          <h1 className="text-4xl font-bold
          text-transparent bg-clip-text
          bg-gradient-to-r
          from-[#F9E498]
          via-[#D4AF37]
          to-[#8A6E2F]">

            Terms and Conditions

          </h1>


          <p className="text-gray-400 mt-3">

            Effective Date: {new Date().toLocaleDateString()}

          </p>

        </div>



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


        <Section
          title="3. Client Authorization"
          text="Clients must provide written authorization before any testing begins. Security testing will only be performed on systems owned or legally authorized by the client."
        />


        <Section
          title="4. Responsible Use"
          text="TrustLayerLabs performs testing ethically and responsibly. No unauthorized exploitation will be performed outside agreed scope."
        />


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


        <div className="text-amber-400 font-semibold">

          support@trustlayerlabs.co.in

        </div>



        {/* footer */}

        <div className="pt-10 border-t border-white/5 text-gray-500 text-sm">

          TrustLayerLabs • VAPT & Cybersecurity Services

        </div>


      </div>

    </div>

  );

}



function Section({ title, text, list }) {

  return (

    <motion.section

      initial={{ opacity: 0, y: 15 }}

      animate={{ opacity: 1, y: 0 }}

      className="
      bg-[#0f172a]
      border border-white/10
      p-6
      rounded-lg
      space-y-4
      shadow-lg
      "

    >

      <h2 className="text-lg font-semibold text-white">

        {title}

      </h2>


      {text && (

        <p className="text-gray-300">

          {text}

        </p>

      )}


      {list && (

        <ul className="list-disc pl-6 space-y-2 text-gray-400">

          {list.map((item, i) => (

            <li key={i}>{item}</li>

          ))}

        </ul>

      )}

    </motion.section>

  );

}