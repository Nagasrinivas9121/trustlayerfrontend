import { motion } from 'framer-motion';

const steps = [
  { id: 1, title: 'Requirement Discussion', desc: 'Understanding your architecture and defining scope.' },
  { id: 2, title: 'Security Testing', desc: 'Executing automated and deep manual penetration tests.' },
  { id: 3, title: 'Vulnerability Discovery', desc: 'Finding and validating critical security flaws.' },
  { id: 4, title: 'Risk Analysis', desc: 'Assessing business impact and CVSS scoring.' },
  { id: 5, title: 'Detailed Report', desc: 'Delivering comprehensive findings and PoCs.' },
  { id: 6, title: 'Re-testing Support', desc: 'Verifying patches and issuing secure certificates.' },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background abstract shape */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6 tracking-tight text-white"
          >
            Our Penetration Testing Process
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-slate-400"
          >
            A structured, transparent methodology ensuring thorough security coverage.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl relative hover:bg-slate-800 transition-colors duration-300 group overflow-hidden"
            >
              <div className="text-7xl font-heading font-black text-slate-700/30 absolute -top-4 -right-2 z-0 pointer-events-none group-hover:text-blue-500/10 transition-colors duration-300">
                0{step.id}
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold font-heading text-white mb-3 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">
                    {step.id}
                  </span>
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed pl-11">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
