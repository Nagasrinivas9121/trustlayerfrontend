"use client";

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

/**
 * UTM Attribution storage key
 */
const UTM_STORAGE_KEY = "trustlayer_utm_attribution";

/**
 * Safely extract and persist UTM parameters on first touch.
 */
export function captureUtmAttribution(): Record<string, string> {
  if (typeof window === "undefined") return {};

  try {
    const searchParams = new URLSearchParams(window.location.search);
    const utmKeys = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_content",
      "utm_term",
      "gclid",
    ];

    const currentUtm: Record<string, string> = {};
    let hasUtm = false;

    utmKeys.forEach((key) => {
      const val = searchParams.get(key);
      if (val) {
        currentUtm[key] = val;
        hasUtm = true;
      }
    });

    if (hasUtm) {
      currentUtm.landing_page = window.location.pathname;
      currentUtm.referrer = document.referrer || "direct";
      currentUtm.first_touch_timestamp = new Date().toISOString();
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(currentUtm));
      return currentUtm;
    }

    const saved = sessionStorage.getItem(UTM_STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch {
    // Graceful fallback for non-storage environments
  }

  return {};
}

/**
 * Retrieve saved UTM attribution parameters safely.
 */
export function getUtmAttribution(): Record<string, string> {
  if (typeof window === "undefined") return {};
  try {
    const saved = sessionStorage.getItem(UTM_STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

/**
 * Blacklisted fields: Never allow passwords, raw messages, private tokens,
 * vulnerability details, or sensitive PII into analytics.
 */
const FORBIDDEN_ANALYTICS_KEYS = new Set([
  "password",
  "token",
  "secret",
  "authorization",
  "message",
  "notes",
  "vulnerability_details",
  "exploit",
  "private_key",
  "credentials",
  "email", // Avoid raw email in GA4 standard params for privacy compliance
  "phone",
  "name",
]);

/**
 * Sanitize parameters before dispatching to analytics.
 */
function sanitizeEventParams(params: Record<string, any>): Record<string, any> {
  const sanitized: Record<string, any> = {};
  for (const [key, value] of Object.entries(params)) {
    const lowerKey = key.toLowerCase();
    if (!FORBIDDEN_ANALYTICS_KEYS.has(lowerKey)) {
      if (typeof value === "string") {
        sanitized[key] = value.slice(0, 100); // Prevent buffer overflow
      } else {
        sanitized[key] = value;
      }
    }
  }
  return sanitized;
}

/**
 * Universal safe event dispatcher for GA4, GTM, and custom conversion tracking.
 */
export function trackEvent(eventName: string, params: Record<string, any> = {}) {
  if (typeof window === "undefined") return;

  const w = window as any;
  const utm = getUtmAttribution();
  const cleanParams = sanitizeEventParams(params);

  const payload = {
    event: eventName,
    page_location: window.location.pathname,
    device_type: window.innerWidth < 768 ? "mobile" : window.innerWidth < 1024 ? "tablet" : "desktop",
    timestamp: new Date().toISOString(),
    ...utm,
    ...cleanParams,
  };

  // Push to GTM dataLayer
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push(payload);

  // Send to GA4 gtag
  if (typeof w.gtag === "function") {
    try {
      w.gtag("event", eventName, {
        page_location: window.location.pathname,
        ...cleanParams,
      });
    } catch {
      // Graceful fallback
    }
  }
}

// ==========================================
// 1. Acquisition & Engagement Events
// ==========================================
export const trackLandingPageView = (pageType: string = "home") => {
  captureUtmAttribution();
  trackEvent("landing_page_view", { page_type: pageType });
};

// ==========================================
// 2. CTA Click Events
// ==========================================
export const trackFreeReviewCtaClick = (location: string, text: string = "Get a Free Security Review") => {
  trackEvent("free_review_cta_click", {
    cta_location: location,
    cta_text: text,
  });
};

export const trackSampleReportCtaClick = (location: string, text: string = "View Sample Report") => {
  trackEvent("sample_report_cta_click", {
    cta_location: location,
    cta_text: text,
  });
};

export const trackCalendarCtaClick = (location: string, text: string = "Book a 20-Min Security Review") => {
  trackEvent("calendar_cta_click", {
    cta_location: location,
    cta_text: text,
  });
  // Maintain backward compatibility with existing tags
  trackEvent("calendly_click", { event_label: location });
};

export const trackWhatsappCtaClick = (location: string = "floating_button") => {
  trackEvent("whatsapp_cta_click", {
    cta_location: location,
    channel: "whatsapp",
  });
};

export const trackWrittenScopeCtaClick = (location: string = "contact_form") => {
  trackEvent("written_scope_cta_click", {
    cta_location: location,
  });
};

export const trackPartnerCtaClick = (location: string = "partnership_page") => {
  trackEvent("partner_cta_click", {
    cta_location: location,
  });
};

// ==========================================
// 3. Free Review Funnel Events
// ==========================================
export const trackFreeSecurityReviewView = () => {
  trackEvent("free_security_review_view", {
    form_name: "free_security_review_intake",
    form_step: "view",
  });
};

export const trackFreeSecurityReviewStart = (source: string = "free-assessment") => {
  trackEvent("free_security_review_start", {
    form_name: "free_security_review_intake",
    form_step: "start",
    source,
  });
};

export const trackFreeSecurityReviewSubmit = (metadata?: Record<string, any>) => {
  trackEvent("free_security_review_submit", {
    form_name: "free_security_review_intake",
    form_step: "submit",
    ...metadata,
  });
};

export const trackFreeSecurityReviewConfirmation = () => {
  trackEvent("free_security_review_confirmation", {
    form_name: "free_security_review_intake",
    form_step: "confirmation",
  });
};

// ==========================================
// 4. Content Engagement Events
// ==========================================
export const trackSampleReportView = () => {
  trackEvent("sample_report_view", {
    content_type: "sample_report",
  });
};

export const trackSampleReportDownload = (source: string = "sample_report_page") => {
  trackEvent("sample_report_download", {
    content_type: "sample_vapt_pdf",
    source,
  });
};

export const trackServiceView = (serviceSlug: string, serviceTitle?: string) => {
  trackEvent("service_view", {
    service: serviceSlug,
    service_title: serviceTitle || serviceSlug,
  });
};

export const trackFaqExpand = (faqQuestion: string) => {
  trackEvent("faq_expand", {
    question: faqQuestion.slice(0, 80),
  });
};

export const trackPackageView = (packageId: string, packageTitle?: string) => {
  trackEvent("package_view", {
    package_id: packageId,
    package_title: packageTitle || packageId,
  });
};

// ==========================================
// 5. Booking Events (Calendly Integration)
// ==========================================
export const trackCalendarLoaded = (location: string = "embed") => {
  trackEvent("calendar_loaded", {
    location,
  });
};

export const trackBookingStarted = (location: string = "calendly") => {
  trackEvent("booking_started", {
    location,
  });
};

export const trackScopingCallBooked = (eventPayload?: Record<string, any>) => {
  trackEvent("scoping_call_booked", {
    confirmed: true,
    ...eventPayload,
  });
};

// ==========================================
// 6. Contact Form Events
// ==========================================
export const trackContactFormStart = (formName: string = "contact_form") => {
  trackEvent("contact_form_start", {
    form_name: formName,
    form_step: "start",
  });
};

export const trackContactFormSubmit = (data?: Record<string, any>) => {
  trackEvent("contact_form_submit", {
    form_name: "contact_form",
    form_step: "submit",
    ...data,
  });
};

// Backward-compatibility aliases
export const trackHeroPrimaryCta = () => trackFreeReviewCtaClick("hero_form", "Get a Free Security Review");
export const trackSampleReportClick = (source: string = "general") => trackSampleReportCtaClick(source, "View Sample Report");
export const trackCalendarClick = (label: string = "calendly") => trackCalendarCtaClick(label);
export const trackWhatsappClick = () => trackWhatsappCtaClick("floating_button");
export const trackPhoneClick = () => trackEvent("phone_click", { channel: "phone" });
