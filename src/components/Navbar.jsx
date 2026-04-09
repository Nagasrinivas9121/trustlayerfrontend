import { useState } from "react";

import { Link, NavLink } from "react-router-dom";

import logo from "../assets/logo.jpeg";

import { Menu, X } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";


export default function Navbar() {

  const [open, setOpen] = useState(false);


  const closeMenu = () => setOpen(false);


  const navClass = ({ isActive }) =>

    `uppercase text-xs tracking-widest font-semibold transition

    ${

      isActive

        ? "text-amber-400"

        : "text-gray-400 hover:text-white"

    }

    `;



  return (

    <nav className="
    bg-[#030712]/90
    backdrop-blur-xl
    border-b border-white/10
    sticky top-0
    z-50
    ">

      <div className="
      max-w-7xl mx-auto
      px-6 py-4
      flex justify-between items-center
      ">


        {/* logo */}

        <Link

          to="/"

          className="flex items-center gap-3"

        >

          <motion.img

            whileHover={{ rotate: 6, scale: 1.05 }}

            src={logo}

            alt="TrustLayerLabs VAPT Services"

            className="
            w-9
            drop-shadow-[0_0_10px_rgba(212,175,55,0.25)]
            "

          />


          <span className="
          font-black
          text-transparent
          bg-clip-text
          bg-gradient-to-r
          from-[#F9E498]
          via-[#D4AF37]
          to-[#8A6E2F]
          ">

            TrustLayerLabs

          </span>

        </Link>



        {/* desktop nav */}

        <div className="hidden md:flex gap-8">

          <NavLink to="/" className={navClass}>

            Home

          </NavLink>


          <NavLink to="/services" className={navClass}>

            Services

          </NavLink>


          <NavLink to="/about" className={navClass}>

            About

          </NavLink>


          <NavLink to="/contact" className={navClass}>

            Contact

          </NavLink>

        </div>



        {/* mobile toggle */}

        <button

          onClick={() => setOpen(!open)}

          className="
          md:hidden
          text-amber-400
          hover:text-white
          transition
          "

        >

          {open ? <X size={22}/> : <Menu size={22}/>}

        </button>

      </div>



      {/* mobile menu */}

      <AnimatePresence>

        {open && (

          <motion.div

            initial={{ opacity: 0, y: -10 }}

            animate={{ opacity: 1, y: 0 }}

            exit={{ opacity: 0, y: -10 }}

            className="
            md:hidden
            bg-[#030712]
            border-t border-white/10
            px-6 py-8
            flex flex-col gap-6
            text-sm uppercase tracking-widest
            "

          >

            <Link

              to="/"

              onClick={closeMenu}

              className="text-gray-300 hover:text-amber-400 transition"

            >

              Home

            </Link>


            <Link

              to="/services"

              onClick={closeMenu}

              className="text-gray-300 hover:text-amber-400 transition"

            >

              Services

            </Link>


            <Link

              to="/about"

              onClick={closeMenu}

              className="text-gray-300 hover:text-amber-400 transition"

            >

              About

            </Link>


            <Link

              to="/contact"

              onClick={closeMenu}

              className="text-gray-300 hover:text-amber-400 transition"

            >

              Contact

            </Link>

          </motion.div>

        )}

      </AnimatePresence>

    </nav>

  );

}