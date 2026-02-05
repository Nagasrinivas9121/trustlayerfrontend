export default function TermsAndConditions() {
  return (
    <div className="max-w-5xl mx-auto p-8 space-y-6">
      <h1 className="text-3xl font-bold text-primary">
        Terms & Conditions
      </h1>

      <p className="text-gray-600">
        Effective Date: {new Date().toLocaleDateString()}
      </p>

      <section>
        <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
        <p className="text-gray-700">
          By accessing or using Trustlayer Labs, you agree to be bound by these
          Terms and Conditions. If you do not agree, please do not use our
          services.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">2. Services</h2>
        <p className="text-gray-700">
          We provide cybersecurity education, consulting, and enterprise
          security services. Services may change or be discontinued at any time.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">3. User Accounts</h2>
        <p className="text-gray-700">
          You are responsible for maintaining the confidentiality of your
          account. Any activity under your account is your responsibility.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">4. Payments & Refunds</h2>
        <p className="text-gray-700">
          All payments are processed securely. Course purchases are generally
          non-refundable unless stated otherwise.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">5. Prohibited Use</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Illegal or malicious activity</li>
          <li>Attempting to breach platform security</li>
          <li>Unauthorized data access</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">6. Limitation of Liability</h2>
        <p className="text-gray-700">
          Trustlayer Labs shall not be liable for any indirect or consequential
          damages arising from use of the platform.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">7. Governing Law</h2>
        <p className="text-gray-700">
          These terms are governed by the laws of India.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">8. Contact</h2>
        <p className="text-gray-700">
          Email: <strong>nagasrinivasaraoeevuri@gmail.com</strong>
        </p>
      </section>
    </div>
  );
}