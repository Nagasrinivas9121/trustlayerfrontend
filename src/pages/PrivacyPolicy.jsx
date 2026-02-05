export default function PrivacyPolicy() {
  return (
    <div className="max-w-5xl mx-auto p-8 space-y-6">
      <h1 className="text-3xl font-bold text-primary">
        Privacy Policy
      </h1>

      <p className="text-gray-600">
        Effective Date: {new Date().toLocaleDateString()}
      </p>

      <section>
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p className="text-gray-700">
          Trustlayer Labs ("we", "our", "us") respects your privacy. This Privacy
          Policy explains how we collect, use, and protect your personal data
          when you use our platform, courses, and cybersecurity services.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Email address and account details</li>
          <li>Payment information (processed securely via Razorpay)</li>
          <li>Service requests and communication data</li>
          <li>Technical data (IP address, browser, logs)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">3. How We Use Your Data</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>To provide access to courses and services</li>
          <li>To process payments and enrollments</li>
          <li>To improve platform security and performance</li>
          <li>To comply with legal obligations</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">4. Data Security</h2>
        <p className="text-gray-700">
          We implement industry-standard security measures including encryption,
          access control, audit logging, and rate-limiting to protect your data.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">5. Third-Party Services</h2>
        <p className="text-gray-700">
          Payments are processed securely by Razorpay. We do not store your card
          details on our servers.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
        <p className="text-gray-700">
          You have the right to access, update, or delete your personal data.
          Contact us at <strong>nagasrinivasaraoeevuri@gmail.com</strong>.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">7. Contact</h2>
        <p className="text-gray-700">
          Email: <strong>nagasrinivasaraoeevuri@gmail.com</strong>
        </p>
      </section>
    </div>
  );
}