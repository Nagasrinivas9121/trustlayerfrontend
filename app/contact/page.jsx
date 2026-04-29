import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata = {
  title: "Contact Us | TrustLayer Labs",
  description: "Get in touch with our security experts for a comprehensive VAPT audit.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              Let&apos;s Secure Your <span className="text-gradient">Application</span>
            </h1>
            <p className="text-slate-400 text-xl mb-12 leading-relaxed">
              Have questions about our VAPT services? Want to schedule an audit? Our team of certified ethical hackers is ready to help.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-primary-600/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Email Us</h3>
                  <p className="text-slate-400">security@trustlayerlabs.co.in</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-primary-600/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Visit Us</h3>
                  <p className="text-slate-400">T-Hub 2.0, HITEC City, Hyderabad, India</p>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
}
