import { useState } from "react";
import { motion } from "framer-motion";

const API_URL = import.meta.env.VITE_API_URL;

export default function Contact() {

  const [form, setForm] = useState({

    name: "",
    email: "",
    company: "",
    service: "VAPT",
    message: ""

  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);



  const handleChange = (e) => {

    setForm({

      ...form,
      [e.target.name]: e.target.value

    });

  };



  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const res = await fetch(`${API_URL}/api/contact`, {

        method: "POST",

        headers: {

          "Content-Type": "application/json"

        },

        body: JSON.stringify(form)

      });


      if (!res.ok) throw new Error();


      setSuccess(true);


      setForm({

        name: "",
        email: "",
        company: "",
        service: "VAPT",
        message: ""

      });


    } catch {

      alert("Error sending request");

    }

    finally {

      setLoading(false);

    }

  };



  return (

    <div className="min-h-screen bg-[#030712] text-white px-6 py-20">

      <div className="max-w-3xl mx-auto space-y-12">


        {/* heading */}

        <div className="text-center">

          <h1 className="
          text-4xl md:text-5xl font-black
          text-transparent bg-clip-text
          bg-gradient-to-r
          from-[#F9E498]
          via-[#D4AF37]
          to-[#8A6E2F]
          ">

            Contact for VAPT Services

          </h1>


          <p className="text-gray-300 mt-4">

            Request vulnerability assessment and penetration testing
            for web applications, APIs and cloud systems.

          </p>

        </div>



        {/* form */}

        <motion.form

          onSubmit={handleSubmit}

          initial={{ opacity: 0, y: 20 }}

          animate={{ opacity: 1, y: 0 }}

          className="
          space-y-6
          bg-[#0f172a]
          p-8
          rounded-xl
          border border-white/10
          shadow-xl
          "

        >


          <input

            name="name"

            placeholder="Full Name"

            value={form.name}

            onChange={handleChange}

            required

            className="
            w-full
            p-4
            bg-[#030712]
            border border-white/10
            rounded
            focus:border-amber-400/40
            outline-none
            "

          />


          <input

            name="email"

            type="email"

            placeholder="Business Email"

            value={form.email}

            onChange={handleChange}

            required

            className="
            w-full
            p-4
            bg-[#030712]
            border border-white/10
            rounded
            focus:border-amber-400/40
            outline-none
            "

          />


          <input

            name="company"

            placeholder="Company Name"

            value={form.company}

            onChange={handleChange}

            className="
            w-full
            p-4
            bg-[#030712]
            border border-white/10
            rounded
            focus:border-amber-400/40
            outline-none
            "

          />


          <select

            name="service"

            value={form.service}

            onChange={handleChange}

            className="
            w-full
            p-4
            bg-[#030712]
            border border-white/10
            rounded
            focus:border-amber-400/40
            outline-none
            "

          >

            <option>VAPT</option>

            <option>Web Application Penetration Testing</option>

            <option>API Security Testing</option>

            <option>OWASP Security Testing</option>

            <option>Cloud Security Testing</option>

          </select>


          <textarea

            name="message"

            rows="5"

            placeholder="Describe application, scope, URLs, technology stack"

            value={form.message}

            onChange={handleChange}

            required

            className="
            w-full
            p-4
            bg-[#030712]
            border border-white/10
            rounded
            focus:border-amber-400/40
            outline-none
            "

          />


          <button

            disabled={loading}

            className="
            w-full
            py-4
            rounded
            font-semibold
            bg-gradient-to-r
            from-[#F9E498]
            to-[#D4AF37]
            text-black
            hover:brightness-110
            transition
            "

          >

            {loading ? "Sending..." : "Request Security Audit"}

          </button>


          {success && (

            <p className="text-green-400 text-sm">

              Request submitted successfully. We will contact you soon.

            </p>

          )}

        </motion.form>



        {/* contact email */}

        <div className="text-center text-gray-500 text-sm">

          security@trustlayerlabs.co.in

        </div>


      </div>

    </div>

  );

}