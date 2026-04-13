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


            <p className="text-sm leading-relaxed mb-6">

              Professional cybersecurity services focused on
              Vulnerability Assessment and Penetration Testing (VAPT)
              for web applications, APIs and cloud infrastructure.

            </p>


            {/* social icons */}

            <div className="flex gap-4">


              {/* linkedin */}

              <a
                href="https://www.linkedin.com/company/trustlayerlabs/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
              >

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="text-gray-400 hover:text-amber-400"
                >

                  <path d="M20.447 20.452H17.21V14.8c0-1.347-.026-3.08-1.878-3.08-1.878 0-2.165 1.466-2.165 2.98v5.752H9.032V9h3.104v1.561h.045c.433-.82 1.492-1.685 3.07-1.685 3.285 0 3.888 2.163 3.888 4.977v6.599zM5.337 7.433c-1.002 0-1.814-.812-1.814-1.814S4.335 3.805 5.337 3.805s1.814.812 1.814 1.814-.812 1.814-1.814 1.814zm1.618 13.019H3.719V9h3.236v11.452z"/>

                </svg>

              </a>


              {/* product hunt */}

              <a
                href="https://www.producthunt.com/@nagasrinivas"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
              >

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-gray-400 hover:text-amber-400"
                >

                  <path d="M13.6 9.6h-2.4v4.8h2.4c1.32 0 2.4-1.08 2.4-2.4s-1.08-2.4-2.4-2.4zm0-7.2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 16.8h-4.8v-12h4.8c2.64 0 4.8 2.16 4.8 4.8s-2.16 4.8-4.8 4.8z"/>

                </svg>

              </a>


              {/* medium */}

              <a
                href="https://medium.com/@trustlayerlabs"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
              >

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-gray-400 hover:text-amber-400"
                >

                  <path d="M2 4.5L7.5 10v7.5L2 20V4.5zM8.5 10.5l6 6V9l-6 1.5zM15.5 9l6-1.5v9L15.5 15V9z"/>

                </svg>

              </a>


            </div>

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



        <div className="border-t border-white/10 mt-12 pt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between">

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