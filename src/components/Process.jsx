import { motion } from 'framer-motion';

const steps = [
  { id: 1, title: 'Requirement Discussion', desc: 'Understanding your architecture and defining scope with precision.' },
  { id: 2, title: 'Security Testing', desc: 'Executing automated and deep manual penetration tests against critical infrastructure.' },
  { id: 3, title: 'Vulnerability Discovery', desc: 'Finding and validating critical security flaws before attackers exploit them.' },
  { id: 4, title: 'Risk Analysis', desc: 'Assessing business impact and assigning accurate CVSS scoring.' },
  { id: 5, title: 'Detailed Report', desc: 'Delivering comprehensive findings, executive summaries, and PoCs.' },
  { id: 6, title: 'Re-testing Support', desc: 'Verifying patches and issuing secure certificates upon remediation.' },
];

export default function Process() {
  return (
    <section id="process" className="section-spacing relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-24"
        >
          <h2 className="section-title text-primary mb-6 tracking-[-0.5px]">
            Penetration Testing Process
          </h2>
          <p className="body-text text-secondary max-w-[700px] mx-auto">
            A structured, transparent methodology ensuring thorough security coverage and actionable remediation guidance.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-[28px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-blue-600 via-sky-400 to-transparent opacity-20 hidden md:block"></div>

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex flex-col md:flex-row gap-6 md:gap-12 group"
              >
                {/* Timeline Node */}
                <div className="hidden md:flex flex-col items-center shrink-0 z-10 relative mt-2">
                  <div className="w-14 h-14 rounded-full glass-card flex items-center justify-center text-blue-400 font-bold border border-blue-500/30 shadow-[0_0_15px_rgba(37,99,235,0.2)] group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    {step.id}
                  </div>
                </div>

                {/* Content Card */}
                <div className="glass-card p-8 md:p-10 flex-1 relative overflow-hidden hover:translate-y-[-4px] transition-all duration-300">
                  <div className="text-[120px] font-heading font-black text-white opacity-[0.03] absolute -top-8 -right-4 z-0 pointer-events-none group-hover:opacity-[0.05] transition-opacity duration-300">
                    0{step.id}
                  </div>
                  
                  <div className="relative z-10">
                    <h3 className="card-title text-primary mb-3 flex items-center gap-4">
                      <span className="md:hidden text-blue-500 font-bold">{step.id}.</span>
                      {step.title}
                    </h3>
                    <p className="body-text text-secondary max-w-[600px]">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
