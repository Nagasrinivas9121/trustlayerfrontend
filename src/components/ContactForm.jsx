import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import { sendContactForm } from '../api/contactApi';

export default function ContactForm() {
  const [formState, setFormState] = useState('idle');
  
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    service: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState('submitting');
    
    console.log(form);

    try {
      await sendContactForm({
        name: form.name,
        email: form.email,
        message: form.message
      });

      alert("Message sent successfully");

      setForm({
        name: "",
        email: "",
        company: "",
        website: "",
        service: "",
        message: ""
      });
      setFormState('success');
      
    } catch (error) {
      console.log(error);
      alert("Error sending message");
      setFormState('idle');
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-100 relative overflow-hidden">
      {formState === 'success' ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center py-16 text-center"
        >
          <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
            <CheckCircle2 size={32} />
          </div>
          <h3 className="text-2xl font-heading font-bold text-slate-900 mb-2">Message Sent Successfully!</h3>
          <p className="text-slate-600">
            Thank you for reaching out. Our security team will get back to you within 24 hours.
          </p>
          <button 
            onClick={() => setFormState('idle')}
            className="mt-8 text-blue-600 font-medium hover:text-blue-700 transition-colors"
          >
            Send another message
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                autoComplete="name"
                className="w-full border border-slate-200 rounded-full px-5 py-3.5 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all shadow-sm bg-slate-50 focus:bg-white"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium text-slate-700">Company Name</label>
              <input 
                type="text" 
                id="company" 
                name="company"
                value={form.company}
                onChange={handleChange}
                required
                autoComplete="organization"
                className="w-full border border-slate-200 rounded-full px-5 py-3.5 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all shadow-sm bg-slate-50 focus:bg-white"
                placeholder="Acme Corp"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-700">Work Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                autoComplete="email"
                className="w-full border border-slate-200 rounded-full px-5 py-3.5 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all shadow-sm bg-slate-50 focus:bg-white"
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="website" className="text-sm font-medium text-slate-700">Website URL</label>
              <input 
                type="url" 
                id="website" 
                name="website"
                value={form.website}
                onChange={handleChange}
                autoComplete="url"
                className="w-full border border-slate-200 rounded-full px-5 py-3.5 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all shadow-sm bg-slate-50 focus:bg-white"
                placeholder="https://example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="service" className="text-sm font-medium text-slate-700">Service Required</label>
            <select 
              id="service" 
              name="service"
              value={form.service}
              onChange={handleChange}
              required
              autoComplete="off"
              className="w-full border border-slate-200 rounded-full px-5 py-3.5 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all shadow-sm bg-slate-50 focus:bg-white appearance-none"
            >
              <option value="" disabled>Select a service</option>
              <option value="VAPT Testing">VAPT Testing</option>
              <option value="Web App Penetration Testing">Web App Penetration Testing</option>
              <option value="API Security Testing">API Security Testing</option>
              <option value="Cloud Security Testing">Cloud Security Testing</option>
              <option value="Network Penetration Testing">Network Penetration Testing</option>
              <option value="Other / Consulting">Other / Consulting</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
            <textarea 
              id="message" 
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              autoComplete="off"
              className="w-full border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all shadow-sm bg-slate-50 focus:bg-white resize-none"
              placeholder="Tell us about your security testing requirements..."
            ></textarea>
          </div>

          <button 
            type="submit" 
            disabled={formState === 'submitting'}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-full flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {formState === 'submitting' ? (
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <>
                Send Message <Send size={18} />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
