import ScannerFlow from "@/components/ScannerFlow";

export const metadata = {
  title: "Free VAPT Scanner | TrustLayer Labs",
  description: "Get a free security audit for your website. Identify critical vulnerabilities before attackers do.",
};

export default function ScanPage() {
  return (
    <div className="relative pt-24 pb-20">
      {/* Background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-900/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-900/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-4 text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
            Automated <span className="text-primary-500">Security</span> Scanner
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Uncover vulnerabilities in your web applications, APIs, and cloud infrastructure with our enterprise-grade scanning engine.
          </p>
        </div>

        <ScannerFlow />
      </div>
    </div>
  );
}
