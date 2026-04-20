import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import Vapt from './pages/Vapt';
import ApiSecurity from './pages/ApiSecurity';
import WebAppPentest from './pages/WebAppPentest';
import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          
          {/* SEO Friendly Routes */}
          <Route path="/vapt-services" element={<Vapt />} />
          <Route path="/api-security-testing" element={<ApiSecurity />} />
          <Route path="/web-app-security" element={<WebAppPentest />} />
          {/* Using ServicesPage as fallback for other missing specific service pages */}
          <Route path="/cloud-security" element={<ServicesPage />} />
          <Route path="/network-penetration-testing" element={<ServicesPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;