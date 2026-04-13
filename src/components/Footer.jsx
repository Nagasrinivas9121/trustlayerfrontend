import { Link } from "react-router-dom";

export default function Footer() {

  const year = new Date().getFullYear();

  return (

    <footer className="bg-[#030712] text-gray-400 mt-24 border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-12">


          {/* brand */}

          <div>

            <h2 className="
            text-xl font-black
            text-transparent bg-clip-text
            bg-gradient-to-r
            from-[#F9E498]
            via-[#D4AF37]
            to-[#8A6E2F]
            mb-4
            ">

              TrustLayerLabs

            </h2>


            <p className="text-sm leading-relaxed">

              Professional cybersecurity services focused on
              Vulnerability Assessment and Penetration Testing (VAPT)
              for web applications, APIs and cloud infrastructure.

            </p>

          </div>



          {/* services */}

          <div>

            <h3 className="text-white font-semibold mb-4">

              Services

            </h3>


            <ul className="space-y-3 text-sm">

              <li>

                <Link to="/vapt-services" className="hover:text-amber-400">

                  VAPT Services

                </Link>

              </li>


              <li>

                <Link to="/web-application-penetration-testing" className="hover:text-amber-400">

                  Web App Penetration Testing

                </Link>

              </li>


              <li>

                <Link to="/api-security-testing" className="hover:text-amber-400">

                  API Security Testing

                </Link>

              </li>


              <li>

                <Link to="/owasp-top-10-testing" className="hover:text-amber-400">

                  OWASP Top 10 Testing

                </Link>

              </li>

            </ul>

          </div>



          {/* company */}

          <div>

            <h3 className="text-white font-semibold mb-4">

              Company

            </h3>


            <ul className="space-y-3 text-sm">

              <li>

                <Link to="/about" className="hover:text-amber-400">

                  About

                </Link>

              </li>


              <li>

                <Link to="/contact" className="hover:text-amber-400">

                  Contact

                </Link>

              </li>


              <li>

                <Link to="/status" className="hover:text-amber-400">

                  System Status

                </Link>

              </li>

            </ul>

          </div>



          {/* legal */}

          <div>

            <h3 className="text-white font-semibold mb-4">

              Legal

            </h3>


            <ul className="space-y-3 text-sm">

              <li>

                <Link to="/privacy-policy" className="hover:text-amber-400">

                  Privacy Policy

                </Link>

              </li>


              <li>

                <Link to="/terms-and-conditions" className="hover:text-amber-400">

                  Terms & Conditions

                </Link>

              </li>

            </ul>


            <p className="mt-6 text-sm text-amber-400">

              security@trustlayerlabs.co.in

            </p>

          </div>


        </div>



        {/* bottom */}

        <div className="
        border-t border-white/10
        mt-12 pt-6
        text-sm text-gray-500
        flex flex-col md:flex-row
        justify-between
        gap-3
        ">

          <span>

            © {year} TrustLayerLabs

          </span>


          <span>

            VAPT • Penetration Testing • API Security • OWASP Testing

          </span>

        </div>

      </div>

    </footer>

  );

}