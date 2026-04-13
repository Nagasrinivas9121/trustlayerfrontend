import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Contact from "./pages/Contact";

/* SEO SERVICE PAGES */

import Vapt from "./pages/Vapt";
import ApiSecurity from "./pages/ApiSecurity";
import WebAppPentest from "./pages/WebAppPentest";
import Owasp from "./pages/Owasp";

/* TRUST PAGE */

import Status from "./pages/Status";


/* Scroll fix */

function ScrollToTop() {

  const { pathname } = useLocation();

  useEffect(() => {

    window.scrollTo(0, 0);

  }, [pathname]);

  return null;

}


/* page animation wrapper */

const PageWrapper = ({ children }) => (

  <motion.div

    initial={{ opacity: 0, y: 10 }}

    animate={{ opacity: 1, y: 0 }}

    exit={{ opacity: 0, y: -10 }}

    transition={{ duration: 0.4 }}

  >

    {children}

  </motion.div>

);


export default function App() {

  return (

    <BrowserRouter>

      <div className="flex flex-col min-h-screen bg-[#05080d] text-white">

        <ScrollToTop />

        <Navbar />

        <main className="flex-grow">

          <AnimatePresence mode="wait">

            <Routes>

              {/* MAIN */}

              <Route
                path="/"
                element={
                  <PageWrapper>
                    <Home />
                  </PageWrapper>
                }
              />

              <Route
                path="/services"
                element={
                  <PageWrapper>
                    <Services />
                  </PageWrapper>
                }
              />


              {/* SEO SERVICE PAGES */}

              <Route
                path="/vapt-services"
                element={
                  <PageWrapper>
                    <Vapt />
                  </PageWrapper>
                }
              />

              <Route
                path="/api-security-testing"
                element={
                  <PageWrapper>
                    <ApiSecurity />
                  </PageWrapper>
                }
              />

              <Route
                path="/web-application-penetration-testing"
                element={
                  <PageWrapper>
                    <WebAppPentest />
                  </PageWrapper>
                }
              />

              <Route
                path="/owasp-top-10-testing"
                element={
                  <PageWrapper>
                    <Owasp />
                  </PageWrapper>
                }
              />


              {/* COMPANY */}

              <Route
                path="/about"
                element={
                  <PageWrapper>
                    <About />
                  </PageWrapper>
                }
              />

              <Route
                path="/contact"
                element={
                  <PageWrapper>
                    <Contact />
                  </PageWrapper>
                }
              />


              {/* TRUST */}

              <Route
                path="/status"
                element={
                  <PageWrapper>
                    <Status />
                  </PageWrapper>
                }
              />


              {/* LEGAL */}

              <Route
                path="/privacy-policy"
                element={
                  <PageWrapper>
                    <PrivacyPolicy />
                  </PageWrapper>
                }
              />

              <Route
                path="/terms-and-conditions"
                element={
                  <PageWrapper>
                    <TermsAndConditions />
                  </PageWrapper>
                }
              />

            </Routes>

          </AnimatePresence>

        </main>

        <Footer />

      </div>

    </BrowserRouter>

  );

}