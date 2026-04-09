import { motion } from "framer-motion";

export default function PrivacyPolicy() {

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

            Privacy Policy

          </h1>


          <p className="text-gray-400 mt-3">

            Effective Date: {new Date().toLocaleDateString()}

          </p>

        </div>



        {/* section */}

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


        <Section
          title="5. Third Party Services"
          text="We may use trusted third-party services such as hosting providers or payment processors. These services maintain their own privacy policies."
        />


        <Section
          title="6. Contact"
          text="For privacy related questions contact:"
        />


        <div className="text-amber-400 font-semibold">

          security@trustlayerlabs.co.in

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