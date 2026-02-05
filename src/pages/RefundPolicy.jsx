export default function RefundPolicy() {
  return (
    <div className="max-w-5xl mx-auto p-8 space-y-6">
      <h1 className="text-3xl font-bold text-primary">
        Refund & Cancellation Policy
      </h1>

      <p className="text-gray-600">
        Effective Date: {new Date().toLocaleDateString()}
      </p>

      <section>
        <h2 className="text-xl font-semibold mb-2">Course Purchases</h2>
        <p className="text-gray-700">
          All course purchases are non-refundable once access is granted,
          unless explicitly stated otherwise.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Service Payments</h2>
        <p className="text-gray-700">
          Refunds for cybersecurity services are evaluated on a case-by-case
          basis depending on work completion status.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Contact</h2>
        <p className="text-gray-700">
          Email: <strong>contact@trustlayerlabs.com</strong>
        </p>
      </section>
    </div>
  );
}