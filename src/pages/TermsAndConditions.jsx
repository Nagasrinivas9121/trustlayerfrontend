import { motion } from "framer-motion";

export default function TermsAndConditions() {
  return (
    <div className="pt-32 pb-20 px-6 bg-slate-50 min-h-screen relative">
      <div className="absolute inset-0 bg-dotted-pattern opacity-50 pointer-events-none"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Terms and Conditions
          </h1>
          <p className="text-lg text-slate-600">
            Effective Date: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="space-y-6">
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
            text="All client data, findings and security reports remain confidential and will not be shared without permission."
          />

          <Section
            title="7. Governing Law"
            text="These terms are governed by the laws of India."
          />

          <Section
            title="8. Contact"
            text="For questions regarding these Terms contact:"
          >
            <div className="mt-4 text-lg text-blue-600 font-medium">
              security@trustlayerlabs.co.in
            </div>
          </Section>
        </div>
      </div>
    </div>
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