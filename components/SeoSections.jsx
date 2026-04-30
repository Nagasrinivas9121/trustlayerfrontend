import Link from "next/link";
import { ArrowRight, ShieldCheck, Server, Cloud, Code, Building, Activity, Heart, Rocket, ChevronRight } from "lucide-react";

export default function SeoSections() {
  const faqs = [
    {
      q: "What is VAPT?",
      a: "VAPT stands for Vulnerability Assessment and Penetration Testing. It is a two-step security audit where automated tools find known weaknesses, and human experts manually attempt to exploit them to understand the real-world risk."
    },
    {
      q: "How long does a penetration test take?",
      a: "A typical engagement takes 1-2 weeks depending on the application's complexity. However, at TrustLayer Labs, we deliver initial reports for critical vulnerabilities within 24-48 hours."
    },
    {
      q: "Is penetration testing safe for my production environment?",
      a: "Yes. We perform 'Safe Exploitation,' which means we verify the vulnerability without causing downtime, corrupting data, or impacting your real users."
    },
    {
      q: "How much do VAPT services in India cost?",
      a: "The cost depends on the scope (e.g., number of dynamic pages, API endpoints, or IP addresses). Book a consultation with us for a precise, customized quote."
    },
    {
      q: "What is the difference between VAPT and an automated scanner?",
      a: "Automated scanners only look for known signatures and often produce false positives. Our manual penetration testing understands context, finding chained exploits and business logic flaws that tools miss."
    }
  ];

  const services = [
    {
      icon: <Code className="w-6 h-6 text-blue-600" />,
      title: "Web Application Security Testing",
      desc: "Deep manual audits of your React, Angular, or Next.js apps to prevent OWASP Top 10 vulnerabilities like XSS and SQL Injection."
    },
    {
      icon: <Server className="w-6 h-6 text-blue-600" />,
      title: "API Security Testing",
      desc: "Securing your backend REST and GraphQL APIs against BOLA, rate-limiting failures, and unauthorized data exposure."
    },
    {
      icon: <Cloud className="w-6 h-6 text-blue-600" />,
      title: "Cloud Security Audits",
      desc: "Reviewing your AWS, Azure, or GCP environments for dangerous misconfigurations and exposed storage buckets."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      title: "Business Logic Testing",
      desc: "Identifying unique flaws in your application's workflow that automated scanners simply cannot understand."
    }
  ];

  const industries = [
    { icon: <Cloud className="w-5 h-5 text-slate-700" />, name: "SaaS Platforms", desc: "Protecting multi-tenant architectures and data isolation." },
    { icon: <Activity className="w-5 h-5 text-slate-700" />, name: "Fintech & Banking", desc: "Rigorous testing of payment gateways and transaction logic." },
    { icon: <Heart className="w-5 h-5 text-slate-700" />, name: "Healthcare (HealthTech)", desc: "Ensuring HIPAA and local compliance by securing PHI." },
    { icon: <Rocket className="w-5 h-5 text-slate-700" />, name: "Fast-Growing Startups", desc: "Agile, developer-friendly audits for CI/CD pipelines." }
  ];

  return (
    <div className="bg-slate-50 py-24 border-t border-slate-200">
      <div className="max-w-[1100px] mx-auto px-4 space-y-32">
        
        {/* What is VAPT */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <ShieldCheck className="w-4 h-4" />
              <span>Cybersecurity Fundamentals</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
              Understanding <span className="text-blue-600">VAPT</span> in Cybersecurity
            </h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Vulnerability Assessment and Penetration Testing (VAPT) is a comprehensive security process designed to identify and eliminate cyber risks.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <ChevronRight className="w-5 h-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                <p className="text-slate-600"><strong className="text-slate-900">Vulnerability Assessment (VA)</strong> is an automated scan that quickly discovers known flaws, outdated software, and misconfigurations.</p>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-5 h-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                <p className="text-slate-600"><strong className="text-slate-900">Penetration Testing (PT)</strong> is a manual, expert-led simulation of a real cyberattack to uncover complex business logic flaws.</p>
              </li>
            </ul>
            <p className="text-slate-600 mb-8">
              For modern startups and enterprises in India, regular VAPT services are critical to prevent data breaches, protect customer trust, and meet rigorous compliance standards like SOC2 and ISO 27001.
            </p>
            <Link href="/#scan" className="btn-primary inline-flex items-center">
              Run Free Security Scan <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10" />
             <h3 className="text-2xl font-black text-slate-900 mb-8">Trusted Results</h3>
             <div className="space-y-6">
               <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                 <span className="text-slate-500 font-bold">Vulnerabilities Found</span>
                 <span className="text-2xl font-black text-blue-600">100+</span>
               </div>
               <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                 <span className="text-slate-500 font-bold">Report Turnaround</span>
                 <span className="text-2xl font-black text-blue-600">24-48 hrs</span>
               </div>
               <div className="flex items-center justify-between">
                 <span className="text-slate-500 font-bold">False Positives</span>
                 <span className="text-2xl font-black text-green-500">0%</span>
               </div>
             </div>
          </div>
        </section>

        {/* Our VAPT Services */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Comprehensive Security Testing Services</h2>
            <p className="text-slate-500 text-lg">Deep manual penetration testing tailored for your modern tech stack.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="https://calendar.app.google/jnamj3gawxVunPJm9" target="_blank" className="text-blue-600 font-bold hover:text-blue-800 inline-flex items-center">
              Book a Security Audit Call <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </section>

        {/* Industries We Serve */}
        <section>
          <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-1">
                <h2 className="text-3xl md:text-4xl font-black mb-6">Specialized Security for High-Risk Sectors</h2>
                <p className="text-slate-400 mb-8">We understand the unique regulatory and technical challenges of different industries in India and globally.</p>
                <Link href="/#scan" className="btn-primary border-none shadow-[0_0_40px_rgba(37,99,235,0.3)] hover:shadow-[0_0_60px_rgba(37,99,235,0.5)]">
                  Run Free Security Scan
                </Link>
              </div>
              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {industries.map((ind, i) => (
                  <div key={i} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 bg-slate-700 rounded-lg">{ind.icon}</div>
                      <h3 className="font-bold text-lg">{ind.name}</h3>
                    </div>
                    <p className="text-slate-400 text-sm">{ind.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Frequently Asked Questions About VAPT Services</h2>
            <p className="text-slate-500 text-lg">Everything you need to know about securing your platform.</p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-start">
                  <span className="text-blue-600 mr-3">Q.</span>
                  {faq.q}
                </h3>
                <p className="text-slate-600 leading-relaxed ml-7">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="https://calendar.app.google/jnamj3gawxVunPJm9" target="_blank" className="btn-primary inline-flex items-center">
              Book a Security Audit Call <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
