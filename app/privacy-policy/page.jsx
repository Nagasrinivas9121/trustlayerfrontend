export const metadata = {
  title: "Privacy Policy | TrustLayer Labs",
  description: "Learn how TrustLayer Labs handles and protects your data. Our privacy policy outlines our commitment to data security and transparency.",
};

export default function PrivacyPolicy() {
  return (
    <div className="pt-40 pb-24 bg-white min-h-screen">
      <div className="max-w-[800px] mx-auto px-4 prose prose-slate">
        <h1 className="text-4xl font-black text-slate-900 mb-8">Privacy Policy</h1>
        <p className="text-slate-500 text-sm mb-12 italic">Last Updated: April 29, 2026</p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
          <p>TrustLayer Labs (\"we,\" \"us,\" or \"our\") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website at trustlayerlabs.co.in.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Information We Collect</h2>
          <p>We may collect personal information that you voluntarily provide to us when you:</p>
          <ul>
            <li>Request a Free Security Snapshot</li>
            <li>Submit a contact form</li>
            <li>Book a consultation call</li>
          </ul>
          <p>This information may include your name, email address, company name, and website URL.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Use of Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and deliver the security snapshots you request</li>
            <li>Respond to your inquiries and support requests</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Security</h2>
          <p>We implement industry-standard security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at security@trustlayerlabs.co.in.</p>
        </section>
      </div>
    </div>
  );
}
