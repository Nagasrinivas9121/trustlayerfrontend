export const metadata = {
  title: "Terms of Service | TrustLayer Labs",
  description: "Read our terms of service for using TrustLayer Labs website and services.",
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
          <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Service Usage</h2>
          <p>Our VAPT services are provided under specific engagement letters and service agreements. The content on this website is for informational purposes to help you understand our service offerings.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">3. User Responsibility</h2>
          <p>You agree to use our website only for lawful purposes and in a manner that does not infringe upon the rights of others. Unauthorized use of this website or our systems is strictly prohibited.</p>
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
