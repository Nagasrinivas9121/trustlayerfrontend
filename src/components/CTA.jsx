import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useEffect } from "react";

export default function CTA() {

  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://platform.linkedin.com/badges/js/profile.js"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://platform.linkedin.com/badges/js/profile.js";
      script.async = true;
      script.defer = true;
      script.onload = () => {
        if (window?.IN?.parse) {
          window.IN.parse(); // force render
        }
      };
      document.body.appendChild(script);
    } else {
      if (window?.IN?.parse) {
        window.IN.parse(); // re-render if already loaded
      }
    }
  }, []);

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-6">

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl gradient-bg shadow-2xl p-10 md:p-16 text-center"
        >

          {/* Background glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-sky-400 opacity-20 blur-3xl"></div>

          <div className="relative z-10">

            {/* Headline */}
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Secure your application before attackers exploit vulnerabilities.
            </h2>

            {/* Subheadline */}
            <p className="text-blue-100 mb-6 text-lg max-w-2xl mx-auto">
              Find and fix critical vulnerabilities in your SaaS, AI, or API before launch — avoiding costly breaches and delays.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-4">
              <Link 
                to="/contact" 
                className="bg-white text-slate-900 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center"
              >
                Get Free Security Audit 
                <ArrowRight size={20} className="ml-2 text-blue-600" />
              </Link>
            </div>

            {/* Urgency */}
            <p className="text-red-300 text-sm mb-4">
              ⚠️ Most startups discover vulnerabilities after launch. Avoid costly fixes later.
            </p>

            {/* Trust Line */}
            <p className="text-blue-200 text-xs mb-6">
              Trusted by startups to secure applications before scaling
            </p>

            {/* LinkedIn Section */}
            <div className="flex flex-col items-center mt-4">
              <p className="text-blue-100 mb-3 text-sm">
                Talk directly with the founder 
              </p>

              <div
                className="badge-base LI-profile-badge"
                data-locale="en_US"
                data-size="large"
                data-theme="dark"
                data-type="VERTICAL"
                data-vanity="naga-srinivasarao"
              ></div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}