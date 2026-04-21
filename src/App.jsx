import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Eager load Home page for fastest initial contentful paint
import Home from './pages/Home';

// Lazy load other routes to split the JS bundle and improve performance
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const Vapt = lazy(() => import('./pages/Vapt'));
const ApiSecurity = lazy(() => import('./pages/ApiSecurity'));
const WebAppPentest = lazy(() => import('./pages/WebAppPentest'));
const About = lazy(() => import('./pages/About'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'));

// Simple loading spinner for Suspense fallback
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-[72px]"> {/* Ensures content doesn't go under the fixed navbar */}
        <Suspense fallback={<PageLoader />}>
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
            
            {/* Fallbacks */}
            <Route path="/cloud-security" element={<ServicesPage />} />
            <Route path="/network-penetration-testing" element={<ServicesPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;