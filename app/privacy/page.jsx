export const metadata = {
  title: "Privacy Policy | TrustLayer Labs",
  description: "Privacy policy and data handling practices for TrustLayer Labs.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none text-slate-600">
          <p className="mb-4">Last updated: April 29, 2026</p>
          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">1. Information We Collect</h2>
          <p className="mb-4">We collect information that you provide directly to us when you request a consultation, use our contact form, or communicate with us about our services. This may include your name, email address, phone number, and company details.</p>
          
          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to ensure the security of our platform.</p>
          
          <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">3. Data Security</h2>
          <p className="mb-4">As a cybersecurity company, we take the security of your data seriously. We implement enterprise-grade security measures to protect your personal information against unauthorized access, alteration, and destruction.</p>
        </div>
      </div>
    </div>
  );
}
