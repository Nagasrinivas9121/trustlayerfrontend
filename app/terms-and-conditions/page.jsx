export const metadata = {
  title: "Terms of Service | TrustLayer Labs",
  description: "Read our terms of service for using TrustLayer Labs website and our security snapshot tool.",
};

export default function TermsOfService() {
  return (
    <div className="pt-40 pb-24 bg-white min-h-screen">
      <div className="max-w-[800px] mx-auto px-4 prose prose-slate">
        <h1 className="text-4xl font-black text-slate-900 mb-8">Terms of Service</h1>
        <p className="text-slate-500 text-sm mb-12 italic">Last Updated: April 29, 2026</p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
          <p>By accessing or using our website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our site.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Security Snapshot Tool</h2>
          <p>Our \"Free Security Snapshot\" is an automated tool intended for educational and baseline testing purposes only. It does not constitute a full Vulnerability Assessment or Penetration Test (VAPT). We are not liable for any findings or lack thereof reported by the tool.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">3. User Responsibility</h2>
          <p>You agree to use our services only for lawful purposes and in a manner that does not infringe upon the rights of others. You must have authorization for any domain you enter into our scanning tool.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Limitation of Liability</h2>
          <p>TrustLayer Labs shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Contact Information</h2>
          <p>For any questions regarding these terms, please contact us at security@trustlayerlabs.co.in.</p>
        </section>
      </div>
    </div>
  );
}
