import { ShieldAlert, Fingerprint, FileSearch, Timer } from "lucide-react";

const features = [
  {
    title: "Manual Exploitation First",
    description: "Beyond the scanner. Automated tools miss 60% of critical business logic flaws. Our OSCP-certified hackers manually probe your web applications to find the chained vulnerabilities that scanners ignore.",
    icon: ShieldAlert,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Deep API Security Testing",
    description: "APIs are the #1 target for hackers. We specialize in rigorous REST and GraphQL penetration testing to secure your backend against BOLA and broken access control.",
    icon: Fingerprint,
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "Actionable, Developer-Friendly Reports",
    description: "No fluff, just fixes. You receive a prioritized, CVSS-scored report with exact proof-of-concept (PoC) videos and clear remediation code for your developers to patch immediately.",
    icon: FileSearch,
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    title: "Rapid 24-48 Hour Turnaround",
    description: "Security at the speed of Agile. Startups can't wait weeks for an audit. We deliver your initial critical findings within 48 hours, allowing you to secure your platform faster.",
    icon: Timer,
    color: "bg-emerald-50 text-emerald-600"
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Why We Are India&apos;s Trusted <br className="hidden md:block" /> Penetration Testing Company
          </h2>
          <p className="text-lg text-slate-500 font-medium max-w-[800px] mx-auto">
            We provide deep VAPT services that keep your business safe from sophisticated attacks, ensuring compliance and building trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-blue-200 transition-colors group shadow-sm"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${f.color}`}>
                <f.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-4 leading-tight">
                {f.title}
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
