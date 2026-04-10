export default function Vapt() {
  return (
    <div className="min-h-screen bg-[#05080d] text-white px-6 py-20">

      <div className="max-w-5xl mx-auto space-y-10">

        <h1 className="text-4xl md:text-5xl font-bold">
          VAPT Services (Vulnerability Assessment and Penetration Testing)
        </h1>

        <p className="text-gray-400">
          TrustLayerLabs provides professional VAPT services to identify
          security vulnerabilities in web applications, APIs and cloud
          infrastructure before attackers exploit them.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          What is VAPT?
        </h2>

        <p className="text-gray-400">
          Vulnerability Assessment and Penetration Testing (VAPT) helps
          organizations detect security weaknesses such as SQL Injection,
          XSS, authentication flaws and misconfigurations.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          What we test
        </h2>

        <ul className="list-disc pl-6 text-gray-400 space-y-2">

          <li>Web application vulnerabilities</li>
          <li>API security risks</li>
          <li>Authentication and session issues</li>
          <li>OWASP Top 10 vulnerabilities</li>
          <li>Data exposure risks</li>

        </ul>

      </div>

    </div>
  );
}