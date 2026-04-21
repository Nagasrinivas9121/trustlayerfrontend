import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Requirement Discussion",
    description: "We understand your application architecture, define the scope of work, and establish objectives.",
  },
  {
    number: "02",
    title: "Security Testing",
    description: "Execution of automated and deep manual testing methodologies to simulate real-world attacks.",
  },
  {
    number: "03",
    title: "Vulnerability Discovery",
    description: "Identification of security loopholes, business logic flaws, and potential exploit vectors.",
  },
  {
    number: "04",
    title: "Risk Analysis",
    description: "Evaluating the business impact and severity of each discovered vulnerability.",
  },
  {
    number: "05",
    title: "Detailed Report",
    description: "Comprehensive documentation with Proof of Concepts (PoCs) and actionable remediation steps.",
  },
  {
    number: "06",
    title: "Re-testing Support",
    description: "Verification of applied patches to ensure all identified vulnerabilities are successfully remediated.",
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-slate-50 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            Our Testing Process
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-600 max-w-2xl mx-auto text-lg"
          >
            A systematic and transparent approach to securing your digital infrastructure from start to finish.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {/* Subtle connecting lines for desktop */}
          <div className="hidden lg:block absolute top-12 left-10 right-10 h-0.5 bg-blue-100 -z-0"></div>
          <div className="hidden lg:block absolute top-[220px] left-10 right-10 h-0.5 bg-blue-100 -z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative z-10"
            >
              <div className="light-card p-8 h-full bg-white group hover:border-blue-300">
                <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-100 to-blue-50 mb-6 group-hover:from-blue-200 group-hover:to-blue-100 transition-all duration-300">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}