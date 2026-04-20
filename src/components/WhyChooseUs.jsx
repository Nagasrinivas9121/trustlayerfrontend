import { motion } from 'framer-motion';
import { Award, ShieldCheck, UserCheck, FileText, Lock, Clock } from 'lucide-react';

const features = [
  {
    id: 1,
    title: 'MSME Registered',
    description: 'Government recognized cybersecurity company ensuring trust and reliability.',
<<<<<<< HEAD
    icon: <Award size={32} />,
=======
    icon: <Award size={24} />,
    logo: "https://www.pngkey.com/png/full/452-4521672_ministry-of-micro-small-medium-enterprises-udyog-aadhar.png"
>>>>>>> 4da9e8bea1f3d9e8bf380bab31be4974f552088e
  },
  {
    id: 2,
    title: 'OWASP Top 10',
    description: 'Strict adherence to OWASP Top 10 methodology for web and API security.',
    icon: <ShieldCheck size={32} />,
  },
  {
    id: 3,
    title: 'Manual Testing',
    description: 'Deep manual penetration testing beyond automated scans to find complex flaws.',
    icon: <UserCheck size={32} />,
  },
  {
    id: 4,
    title: 'Detailed Reports',
    description: 'Comprehensive vulnerability reports with actionable remediation steps and PoCs.',
    icon: <FileText size={32} />,
  },
  {
    id: 5,
    title: 'Confidentiality',
    description: 'Strict NDA backed engagements to ensure your sensitive data remains secure.',
    icon: <Lock size={32} />,
  },
  {
    id: 6,
    title: 'Fast Turnaround',
    description: 'Efficient testing processes ensuring you get reports without project delays.',
    icon: <Clock size={32} />,
  },
];

export default function WhyChooseUs() {
  return (
<<<<<<< HEAD
    <section className="section-spacing relative z-10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <div className="text-center max-w-[700px] mx-auto mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="section-title text-primary mb-6 tracking-[-0.5px]"
=======
    <section className="py-24 bg-slate-50 relative">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto mb-16">

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
>>>>>>> 4da9e8bea1f3d9e8bf380bab31be4974f552088e
          >
            Why Choose TrustLayerLabs
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="body-text text-secondary"
          >
            We combine automated efficiency with deep manual expertise to deliver premium, intelligence-driven security assessments.
=======
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Trusted cybersecurity expertise aligned with industry standards.
>>>>>>> 4da9e8bea1f3d9e8bf380bab31be4974f552088e
          </motion.p>

        </div>

<<<<<<< HEAD
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-spacing">
=======

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

>>>>>>> 4da9e8bea1f3d9e8bf380bab31be4974f552088e
          {features.map((feature, index) => (

            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-[#facc15] mb-6 drop-shadow-[0_0_10px_rgba(250,204,21,0.3)] group-hover:scale-110 group-hover:text-amber-300 transition-all duration-300 origin-left">
=======
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}

              className="
              relative
              p-8
              rounded-2xl
              bg-white
              border border-slate-200
              shadow-sm
              hover:shadow-xl
              transition
              "
            >

              {/* MSME badge */}
              {feature.logo && (
                <div className="absolute top-4 right-4 bg-white border border-slate-200 rounded-lg px-2 py-1 shadow-sm">

                  <img
                    src={feature.logo}
                    alt="MSME certified"
                    className="h-6 object-contain"
                  />

                </div>
              )}

              {/* icon */}
              <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-6">

>>>>>>> 4da9e8bea1f3d9e8bf380bab31be4974f552088e
                {feature.icon}

              </div>
<<<<<<< HEAD
              <h3 className="card-title text-primary mb-3">
=======


              <h3 className="text-xl font-semibold text-slate-900 mb-3">

>>>>>>> 4da9e8bea1f3d9e8bf380bab31be4974f552088e
                {feature.title}

              </h3>
<<<<<<< HEAD
              <p className="body-text text-secondary">
=======

              <p className="text-slate-600 text-sm leading-relaxed">

>>>>>>> 4da9e8bea1f3d9e8bf380bab31be4974f552088e
                {feature.description}

              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}