import { motion } from "framer-motion";

export default function TermsAndConditions() {
  return (
    <div className="pt-[140px] pb-20 px-6">
      <div className="max-w-[850px] mx-auto space-y-12">
        {/* header */}
        <div className="mb-16">
          <h1 className="hero-title text-transparent bg-clip-text bg-gradient-to-r from-[#F9E498] via-[#D4AF37] to-[#8A6E2F] mb-4">
            Terms and Conditions
          </h1>
          <p className="body-text text-secondary">
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
  );
}

function Section({ title, text, list }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-8 space-y-4"
    >
      <h2 className="card-title text-primary">
        {title}
      </h2>

      {text && (
        <p className="body-text text-secondary leading-loose">
          {text}
        </p>
      )}

      {list && (
        <ul className="list-disc pl-6 space-y-3 body-text text-secondary leading-loose">
          {list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </motion.section>
  );
}