import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile Application VAPT | iOS & Android Pentesting",
  description: "Static and dynamic penetration testing for iOS (IPA) and Android (APK) apps. SSL pinning bypass, insecure data storage, and reverse engineering analysis.",
  alternates: {
    canonical: "https://www.trustlayerlabs.co.in/services/mobile-vapt",
  },
};

export default function MobileVaptPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Mobile Application VAPT",
        "provider": { "@id": "https://www.trustlayerlabs.co.in/#organization" },
        "serviceType": "Mobile Application Penetration Testing",
        "description": "Static and dynamic penetration testing for iOS (IPA) and Android (APK) apps. SSL pinning bypass, insecure data storage, and reverse engineering analysis.",
        "areaServed": ["India", "Global"],
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trustlayerlabs.co.in" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.trustlayerlabs.co.in/services" },
          { "@type": "ListItem", "position": 3, "name": "Mobile Application VAPT", "item": "https://www.trustlayerlabs.co.in/services/mobile-vapt" },
        ],
      },
    ],
  };

  return (
    <div className="bg-background min-h-screen pt-32 pb-24 font-sans text-textPrimary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="section-container max-w-5xl mx-auto">
        <Link href="/services" className="inline-flex items-center text-xs uppercase tracking-widest text-textSecondary hover:text-textPrimary transition-colors gap-2 mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" /> Back to All Services
        </Link>
        <div className="mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold text-primary uppercase tracking-widest mb-4">
            <span>Mobile Security</span>
          </div>
          <h1 className="heading-1 mb-6 text-textPrimary font-extrabold tracking-tight">
            Mobile Application <span className="text-primary">VAPT Services</span>
          </h1>
          <p className="body-text text-base max-w-3xl text-textSecondary leading-relaxed">
            Exhaustive static (SAST) and dynamic (DAST) penetration testing for iOS (IPA) and Android (APK) applications following OWASP MASVS standards.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="p-6 bg-surface border border-border/80 rounded-xl space-y-3">
            <h3 className="text-sm font-bold text-textPrimary font-sans">Dynamic SSL Pinning Bypass</h3>
            <p className="text-xs text-textSecondary leading-relaxed">
              We test mobile application network traffic using Frida and Objection to verify if SSL pinning controls withstand runtime hooking attacks.
            </p>
          </div>
          <div className="p-6 bg-surface border border-border/80 rounded-xl space-y-3">
            <h3 className="text-sm font-bold text-textPrimary font-sans">Insecure Local Storage Audit</h3>
            <p className="text-xs text-textSecondary leading-relaxed">
              Analyzing SQLite databases, SharedPreferences, and iOS Keychains for unencrypted auth tokens and hardcoded secret keys.
            </p>
          </div>
        </div>
        <div className="p-8 bg-surface border border-primary/30 rounded-2xl text-center space-y-4">
          <h3 className="text-xl font-bold text-textPrimary">Book Mobile App VAPT</h3>
          <p className="text-xs text-textSecondary max-w-xl mx-auto">
            Audit your iOS or Android app before releasing to the App Store or Play Store.
          </p>
          <div className="pt-2">
            <Link href="https://calendar.app.google/jnamj3gawxVunPJm9" target="_blank" className="inline-flex items-center gap-2 px-8 py-3 bg-[#0a0a0a] text-white font-bold text-xs uppercase tracking-wider rounded-full hover:bg-zinc-800 transition-colors">
              Book Mobile Audit <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
