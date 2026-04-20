import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Process from '../components/Process';
import Industries from '../components/Industries';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <>
      <SEO 
        title="TrustLayer Labs | VAPT & Penetration Testing Company India"
        description="TrustLayer Labs provides VAPT, penetration testing, API security testing, cloud security assessment, and cybersecurity consulting services."
        keywords="VAPT services India, penetration testing company India, cybersecurity services India, web application security testing services, API penetration testing services, cloud security assessment India, network penetration testing services"
      />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Process />
      <Industries />
      <CTA />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/yourphonenumber" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 z-50 flex items-center justify-center"
        aria-label="Contact on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      </a>
    </>
  );
}