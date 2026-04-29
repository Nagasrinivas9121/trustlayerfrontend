import { ShieldCheck, Activity, Server, Database, Globe } from "lucide-react";

export const metadata = {
  title: "Service Status | TrustLayer Labs",
  description: "Check the current status of TrustLayer Labs services and scanning infrastructure.",
};

export default function StatusPage() {
  const systems = [
    { name: "VAPT Scanning Engine", status: "Operational", icon: <Server className="w-5 h-5 text-green-500" /> },
    { name: "Reporting Dashboard", status: "Operational", icon: <Activity className="w-5 h-5 text-green-500" /> },
    { name: "Security Database", status: "Operational", icon: <Database className="w-5 h-5 text-green-500" /> },
    { name: "Public Website", status: "Operational", icon: <Globe className="w-5 h-5 text-green-500" /> },
  ];

  return (
    <div className="pt-40 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-[600px] mx-auto px-4">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
          <div className="flex items-center space-x-3 mb-10 pb-6 border-b border-slate-100">
            <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center">
              <ShieldCheck className="w-7 h-7 text-green-600" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-slate-900">System Status</h1>
              <p className="text-sm font-bold text-green-600 uppercase tracking-widest">All Systems Operational</p>
            </div>
          </div>

          <div className="space-y-6">
            {systems.map((system, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center space-x-3">
                  {system.icon}
                  <span className="font-bold text-slate-700">{system.name}</span>
                </div>
                <span className="text-xs font-black text-green-600 uppercase bg-green-50 px-3 py-1 rounded-full border border-green-100">
                  {system.status}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-blue-50 rounded-2xl border border-blue-100">
            <p className="text-sm text-blue-700 font-medium leading-relaxed">
              We monitor our infrastructure 24/7 to ensure your security testing is never delayed. Status is updated in real-time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
