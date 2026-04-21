import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    alert('Thank you for reaching out! We will contact you soon.');
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            Get in Touch
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-600 text-lg"
          >
            Ready to secure your application? Fill out the form below and our security experts will get back to you.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Acme Corp"
                />
              </div>
              <div>
                <label htmlFor="website" className="block text-sm font-semibold text-slate-700 mb-2">Website URL</label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="https://example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">Service Required</label>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-slate-700 appearance-none"
              >
                <option value="" disabled>Select a service</option>
                <option value="VAPT Testing">VAPT Testing</option>
                <option value="Web App Penetration Testing">Web App Penetration Testing</option>
                <option value="API Security Testing">API Security Testing</option>
                <option value="Cloud Security Testing">Cloud Security Testing</option>
                <option value="Network Penetration Testing">Network Penetration Testing</option>
                <option value="Red Team Assessment">Red Team Assessment</option>
                <option value="Security Audit">Security Audit</option>
                <option value="SOC Consulting">SOC Consulting</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Tell us about your security requirements..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full btn-primary py-4 text-lg mt-4"
            >
              Submit Request
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
