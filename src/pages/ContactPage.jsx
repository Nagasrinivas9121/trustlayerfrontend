import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <SEO 
        title="Contact Us | TrustLayer Labs Cybersecurity Services"
        description="Get in touch with TrustLayer Labs for VAPT services, penetration testing, and cybersecurity consultation. Request a quote today."
        keywords="contact cybersecurity company, request VAPT quote, penetration testing consultation"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6"
          >
            Let's Secure Your <span className="text-blue-600">Digital Assets</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Have a security concern or need a VAPT quote? Fill out the form below and our security experts will get back to you within 24 hours.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-6 flex items-center gap-2">
                <ShieldCheck className="text-blue-600" /> TrustLayer Labs
              </h3>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Email Us</p>
                    <a href="mailto:security@trustlayerlabs.co.in" className="text-slate-600 hover:text-blue-600 transition-colors">
                      security@trustlayerlabs.co.in
                    </a>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Call Us</p>
                    <a href="tel:+918822402811" className="text-slate-600 hover:text-blue-600 transition-colors">
                      +91 8822402811
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Location</p>
                    <p className="text-slate-600">
                      India
                      <br />
                      Serving clients globally.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Trust Banner */}
            <div className="bg-gradient-to-r from-slate-900 to-blue-900 p-8 rounded-2xl text-white shadow-lg relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="font-heading font-bold text-lg mb-2">Confidentiality Assured</h4>
                <p className="text-slate-300 text-sm">
                  We sign strict Non-Disclosure Agreements (NDAs) before discussing your sensitive architecture or vulnerabilities.
                </p>
              </div>
              <ShieldCheck size={100} className="absolute -bottom-6 -right-6 text-white/10" />
            </div>
          </motion.div>

          {/* Form Component */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
