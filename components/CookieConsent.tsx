"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, Settings, Check, X, Shield, BarChart3, Target } from "lucide-react";

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState<boolean>(false);
  const [showCustomizer, setShowCustomizer] = useState<boolean>(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    // Read previous consent from localStorage
    try {
      const saved = localStorage.getItem("cookie-consent");
      if (!saved) {
        // If no consent has been given yet, show the banner
        setShowBanner(true);
      } else {
        // Apply previously saved consent
        const parsed = JSON.parse(saved) as CookiePreferences;
        setPreferences(parsed);
        applyConsent(parsed);
      }
    } catch (e) {
      setShowBanner(true);
    }
  }, []);

  const applyConsent = (prefs: CookiePreferences) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        ad_storage: prefs.marketing ? "granted" : "denied",
        ad_user_data: prefs.marketing ? "granted" : "denied",
        ad_personalization: prefs.marketing ? "granted" : "denied",
        analytics_storage: prefs.analytics ? "granted" : "denied",
        personalization_storage: prefs.functional ? "granted" : "denied",
        functionality_storage: prefs.functional ? "granted" : "denied",
      });
    }
  };

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      essential: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    setPreferences(allAccepted);
    localStorage.setItem("cookie-consent", JSON.stringify(allAccepted));
    applyConsent(allAccepted);
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    const allRejected: CookiePreferences = {
      essential: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    setPreferences(allRejected);
    localStorage.setItem("cookie-consent", JSON.stringify(allRejected));
    applyConsent(allRejected);
    setShowBanner(false);
  };

  const handleSaveCustom = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(preferences));
    applyConsent(preferences);
    setShowBanner(false);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === "essential") return; // Essential cannot be disabled
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-6 right-6 left-6 md:left-auto md:max-w-md z-[100] backdrop-blur-md bg-white/95 border border-zinc-200/80 shadow-[0_15px_40px_rgba(0,0,0,0.12)] rounded-2xl p-5 sm:p-6"
        >
          {!showCustomizer ? (
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg shrink-0">
                  <Cookie className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-zinc-900 leading-tight">
                    Cookie Preferences
                  </h4>
                  <p className="mt-1.5 text-xs text-zinc-500 leading-relaxed">
                    We use cookies to analyze site traffic and personalize marketing experiences. Please choose your preferred level of privacy.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 pt-2">
                <button
                  onClick={handleAcceptAll}
                  className="w-full sm:flex-1 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-xs transition-all active:scale-[0.98] shadow-sm flex items-center justify-center gap-1.5"
                >
                  <Check className="h-3.5 w-3.5" /> Accept All
                </button>
                <button
                  onClick={handleRejectAll}
                  className="w-full sm:flex-1 py-2 px-4 bg-zinc-50 hover:bg-zinc-100 text-zinc-700 border border-zinc-200 font-medium rounded-lg text-xs transition-all active:scale-[0.98] flex items-center justify-center gap-1.5"
                >
                  <X className="h-3.5 w-3.5" /> Decline Optional
                </button>
              </div>

              <div className="flex justify-center pt-1">
                <button
                  onClick={() => setShowCustomizer(true)}
                  className="text-[11px] font-medium text-zinc-400 hover:text-zinc-600 transition-colors flex items-center gap-1"
                >
                  <Settings className="h-3 w-3" /> Customize Settings
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
                <h4 className="text-sm font-semibold text-zinc-900 flex items-center gap-1.5">
                  <Settings className="h-4 w-4 text-blue-600" /> Customize Privacy
                </h4>
                <button
                  onClick={() => setShowCustomizer(false)}
                  className="p-1 hover:bg-zinc-100 text-zinc-400 hover:text-zinc-600 rounded-md transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="space-y-3 max-h-[260px] overflow-y-auto pr-1">
                {/* Essential Cookies */}
                <div className="flex items-start justify-between gap-4 p-2.5 rounded-xl border border-zinc-100 bg-zinc-50/50">
                  <div className="flex gap-2">
                    <Shield className="h-4 w-4 text-zinc-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-zinc-800">Essential</p>
                      <p className="text-[10px] text-zinc-400 leading-normal mt-0.5">
                        Required for basic features, security assessments, and consent settings.
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold text-zinc-400 bg-zinc-100 px-2 py-1 rounded">
                    Always On
                  </span>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start justify-between gap-4 p-2.5 rounded-xl border border-zinc-100">
                  <div className="flex gap-2">
                    <BarChart3 className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-zinc-800">Analytics</p>
                      <p className="text-[10px] text-zinc-400 leading-normal mt-0.5">
                        Helps us measure site performance and visitor behavior to optimize features.
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => togglePreference("analytics")}
                    className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                      preferences.analytics ? "bg-blue-600" : "bg-zinc-200"
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                        preferences.analytics ? "translate-x-4" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-start justify-between gap-4 p-2.5 rounded-xl border border-zinc-100">
                  <div className="flex gap-2">
                    <Target className="h-4 w-4 text-purple-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-zinc-800">Marketing & Ads</p>
                      <p className="text-[10px] text-zinc-400 leading-normal mt-0.5">
                        Used to serve relevant ads and measure effectiveness of campaign parameters.
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => togglePreference("marketing")}
                    className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                      preferences.marketing ? "bg-blue-600" : "bg-zinc-200"
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                        preferences.marketing ? "translate-x-4" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
              </div>

              <div className="flex gap-2 pt-2 border-t border-zinc-100">
                <button
                  onClick={handleSaveCustom}
                  className="w-full py-2 px-4 bg-zinc-900 hover:bg-zinc-800 text-white font-medium rounded-lg text-xs transition-all active:scale-[0.98] shadow-sm flex items-center justify-center gap-1.5"
                >
                  Save Settings
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-xs transition-all active:scale-[0.98] shadow-sm flex items-center justify-center gap-1.5"
                >
                  Accept All
                </button>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
