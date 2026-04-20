import { motion } from "framer-motion";

const steps = [
  { id: 1, title: "Requirement Discussion", desc: "Understanding your architecture and defining scope." },
  { id: 2, title: "Security Testing", desc: "Executing automated and deep manual penetration tests." },
  { id: 3, title: "Vulnerability Discovery", desc: "Finding and validating critical security flaws." },
  { id: 4, title: "Risk Analysis", desc: "Assessing business impact and CVSS scoring." },
  { id: 5, title: "Detailed Report", desc: "Delivering comprehensive findings and PoCs." },
  { id: 6, title: "Re-testing Support", desc: "Verifying patches and issuing secure certificates." },
];

export default function Process() {
  return (
    <section className="py-28 bg-[#020617] text-white">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-4 tracking-tight">
            Penetration Testing Process
          </h2>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            A structured methodology ensuring strong security coverage across applications and infrastructure.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="relative bg-[#0f172a] border border-slate-700 
                         p-8 rounded-xl 
                         hover:border-blue-500 
                         hover:shadow-[0_8px_30px_rgba(37,99,235,0.25)]
                         transition-all duration-300"
            >

              {/* Large Background Number */}
              <span className="absolute top-4 right-5 text-6xl font-bold text-slate-700/40">
                0{step.id}
              </span>

              {/* Step Badge */}
              <div className="w-10 h-10 flex items-center justify-center 
                              rounded-full bg-blue-600 text-white font-semibold mb-4">
                {step.id}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-slate-300 text-sm leading-relaxed">
                {step.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}