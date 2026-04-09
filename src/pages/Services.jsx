import { useState } from "react";

import {
  Shield,
  Server,
  Cloud,
  ArrowRight,
  Lock,
  X,
  Globe
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";


export default function Services() {

  const [selectedService, setSelectedService] = useState(null);

  const [form, setForm] = useState({

    email: "",
    message: ""

  });

  const [loading, setLoading] = useState(false);



  const servicesList = [

    {
      id: 1,
      title: "VAPT Services",
      description:
        "Complete vulnerability assessment and penetration testing for web applications.",
      icon: <Shield size={28} />
    },

    {
      id: 2,
      title: "Web Application Penetration Testing",
      description:
        "Identify SQL Injection, XSS, authentication flaws and security misconfiguration.",
      icon: <Globe size={28} />
    },

    {
      id: 3,
      title: "API Security Testing",
      description:
        "Secure REST APIs from unauthorized access and data leakage.",
      icon: <Server size={28} />
    },

    {
      id: 4,
      title: "Cloud Security Testing",
      description:
        "Identify vulnerabilities in AWS, Azure and cloud environments.",
      icon: <Cloud size={28} />
    },

    {
      id: 5,
      title: "OWASP Security Assessment",
      description:
        "Security testing aligned with OWASP Top 10 standards.",
      icon: <Lock size={28} />
    }

  ];



  const submitRequest = () => {

    if (!form.email || !form.message) {

      alert("Please fill all fields");

      return;

    }


    setLoading(true);


    setTimeout(() => {

      alert("Request submitted successfully");


      setSelectedService(null);

      setForm({

        email: "",
        message: ""

      });


      setLoading(false);

    }, 800);

  };



  return (

    <div className="min-h-screen bg-[#030712] text-white px-6 py-20">


      {/* heading */}

      <div className="text-center mb-16">

        <h1 className="
        text-4xl md:text-6xl font-black
        text-transparent bg-clip-text
        bg-gradient-to-r
        from-[#F9E498]
        via-[#D4AF37]
        to-[#8A6E2F]
        ">

          VAPT & Cybersecurity Services

        </h1>


        <p className="text-gray-300 mt-5 max-w-2xl mx-auto">

          Identify vulnerabilities before attackers exploit them.
          Professional penetration testing for web applications,
          APIs and cloud infrastructure.

        </p>

      </div>



      {/* cards */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {servicesList.map((service, i) => (

          <motion.div

            key={service.id}

            initial={{ opacity: 0, y: 25 }}

            animate={{ opacity: 1, y: 0 }}

            transition={{ delay: i * 0.05 }}

            onClick={() => setSelectedService(service.title)}

            className="
            bg-[#0f172a]
            border border-white/10
            p-8
            rounded-xl
            hover:border-amber-400/40
            hover:shadow-[0_0_25px_rgba(212,175,55,0.15)]
            cursor-pointer
            transition-all
            "

          >

            <div className="text-amber-400 mb-5">

              {service.icon}

            </div>


            <h2 className="text-lg font-semibold mb-3">

              {service.title}

            </h2>


            <p className="text-gray-400 text-sm leading-relaxed">

              {service.description}

            </p>


            <div className="mt-6 text-amber-400 text-xs flex items-center">

              Request Service

              <ArrowRight size={14} className="ml-2" />

            </div>

          </motion.div>

        ))}

      </div>



      {/* modal */}

      <AnimatePresence>

        {selectedService && (

          <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-6 backdrop-blur">

            <motion.div

              initial={{ scale: 0.92, opacity: 0 }}

              animate={{ scale: 1, opacity: 1 }}

              exit={{ scale: 0.92, opacity: 0 }}

              className="
              bg-[#0f172a]
              border border-white/10
              p-8
              rounded-xl
              w-full max-w-lg
              shadow-2xl
              "

            >

              <button

                onClick={() => setSelectedService(null)}

                className="float-right text-gray-400 hover:text-white"

              >

                <X />

              </button>


              <h3 className="text-xl font-semibold mb-6">

                {selectedService}

              </h3>


              <input

                placeholder="business email"

                value={form.email}

                onChange={(e) => setForm({

                  ...form,
                  email: e.target.value

                })}

                className="
                w-full
                p-3
                mb-4
                bg-[#030712]
                border border-white/10
                rounded
                focus:border-amber-400/40
                outline-none
                "

              />


              <textarea

                rows="4"

                placeholder="describe application, scope and testing requirements"

                value={form.message}

                onChange={(e) => setForm({

                  ...form,
                  message: e.target.value

                })}

                className="
                w-full
                p-3
                mb-6
                bg-[#030712]
                border border-white/10
                rounded
                focus:border-amber-400/40
                outline-none
                "

              />


              <button

                onClick={submitRequest}

                className="
                w-full
                py-3
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

                {loading ? "Sending..." : "Submit Request"}

              </button>

            </motion.div>

          </div>

        )}

      </AnimatePresence>


    </div>

  );

}