import React from 'react';

export default function Status() {

return (

<div className="min-h-screen bg-[#030712] text-white px-6 py-20">

<h1 className="text-4xl font-bold mb-6 text-center">
System Status
</h1>

<p className="text-center text-gray-400 mb-12">
Current uptime and availability of TrustLayerLabs services.
</p>

<div className="max-w-2xl mx-auto space-y-6">

<div className="bg-[#0f172a] p-6 rounded border border-green-500">
<h2 className="font-semibold">Website</h2>
<p className="text-green-400">Operational</p>
</div>

<div className="bg-[#0f172a] p-6 rounded border border-green-500">
<h2 className="font-semibold">API Services</h2>
<p className="text-green-400">Operational</p>
</div>

<div className="bg-[#0f172a] p-6 rounded border border-green-500">
<h2 className="font-semibold">Contact Form</h2>
<p className="text-green-400">Operational</p>
</div>

<div className="text-sm text-gray-500 text-center mt-10">
Last updated: April 2026
</div>

</div>

</div>

);

}