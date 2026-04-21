import { motion } from "framer-motion";
import SEO from '../components/SEO';

export default function PrivacyPolicy() {
  return (
    <>
      <SEO 
        title="Privacy Policy | TrustLayer Labs"
        description="Privacy Policy for TrustLayer Labs cybersecurity services."
      />
      <div className="pt-32 pb-20 px-6 bg-slate-50 min-h-screen relative">
        <div className="absolute inset-0 bg-dotted-pattern opacity-50 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-lg text-slate-600">
              Effective Date: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="space-y-6">
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
            >
              <div className="mt-4 text-lg text-blue-600 font-medium">
                security@trustlayerlabs.co.in
              </div>
            </Section>
          </div>
        </div>
      </div>
    </>
  );
}

function Section({ title, text, list, children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="light-card p-8 bg-white"
    >
      <h2 className="text-xl font-bold text-slate-900 mb-4">
        {title}
      </h2>

      {text && (
        <p className="text-slate-600 leading-relaxed">
          {text}
        </p>
      )}

      {list && (
        <ul className="list-disc pl-6 mt-4 space-y-2 text-slate-600">
          {list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
      
      {children}
    </motion.section>
  );
}