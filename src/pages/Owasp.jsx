export default function Owasp() {

  return (

    <div className="min-h-screen bg-[#05080d] text-white px-6 py-20">

      <div className="max-w-5xl mx-auto space-y-10">

        <h1 className="text-4xl md:text-5xl font-bold">

          OWASP Top 10 Security Testing

        </h1>


        <p className="text-gray-400">

          OWASP Top 10 represents the most critical security risks
          affecting modern web applications and APIs.

        </p>


        <ul className="list-disc pl-6 text-gray-400 space-y-2">

          <li>Injection vulnerabilities</li>
          <li>Broken authentication</li>
          <li>Sensitive data exposure</li>
          <li>Security misconfiguration</li>
          <li>Broken access control</li>

        </ul>

      </div>

    </div>

  );

}