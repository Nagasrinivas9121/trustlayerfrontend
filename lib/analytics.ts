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
  "email",
  "phone",
  "name",
  "first_name",
  "last_name",
  "full_name",
  "user_name",
  "company",
  "startup",
  "website",
  "address",
  "ssn",
  "ip",
  "bearer",
]);

const EMAIL_PATTERN = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
const PHONE_PATTERN = /(\+?\d{1,4}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/;

/**
 * Sanitize parameters before dispatching to analytics:
 * - Drops blacklisted keys
 * - Drops strings matching email or phone number patterns
 * - Truncates strings to max 100 characters to prevent buffer overflow
 */
function sanitizeEventParams(params: Record<string, any>): Record<string, any> {
  const sanitized: Record<string, any> = {};
  for (const [key, value] of Object.entries(params)) {
    const lowerKey = key.toLowerCase();
    if (!FORBIDDEN_ANALYTICS_KEYS.has(lowerKey)) {
      if (typeof value === "string") {
        if (EMAIL_PATTERN.test(value) || PHONE_PATTERN.test(value)) {
          continue; // Omit accidental PII leak in string values
        }
        sanitized[key] = value.slice(0, 100);
      } else {
        sanitized[key] = value;
      }
    }
  }
  return sanitized;
}

/**
 * Universal safe event dispatcher for GA4, GTM, and custom conversion tracking.
 * Sanitizes page_location by strictly stripping query parameters and hash fragments.
 */
export function trackEvent(eventName: string, params: Record<string, any> = {}) {
  if (typeof window === "undefined") return;

  const w = window as any;
  const utm = getUtmAttribution();
  const cleanParams = sanitizeEventParams(params);

  // Sanitize page location: origin + pathname only (never leak query strings or hashes)
  const safeOrigin = window.location.origin || "https://www.trustlayerlabs.co.in";
  const safePath = window.location.pathname || "/";
  const sanitizedLocation = `${safeOrigin}${safePath}`;

  const payload = {
    event: eventName,
    page_location: sanitizedLocation,
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
        page_location: sanitizedLocation,
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
// 2. CTA Click Events (Deduplicated Single-Dispatch)
// ==========================================
export const trackHeroCtaClick = (location: string = "hero", text: string = "Get a Free Security Scoping Review") => {
  trackEvent("hero_cta_click", {
    cta_location: location,
    cta_text: text,
  });
};

export const trackSecurityReviewCtaClick = (location: string, text: string = "Get a Free Security Scoping Review") => {
  trackEvent("security_review_cta_click", {
    cta_location: location,
    cta_text: text,
    legacy_event: "click_primary_cta",
  });
};
export const trackFreeReviewCtaClick = trackSecurityReviewCtaClick;

export const trackSampleReportClick = (location: string, text: string = "View the Sample Assessment Report") => {
  trackEvent("sample_report_click", {
    cta_location: location,
    cta_text: text,
    legacy_event: "click_sample_report",
  });
};
export const trackSampleReportCtaClick = trackSampleReportClick;

export const trackCalendarBookingClick = (location: string = "calendar_button", text: string = "Schedule 30-Min Security Review") => {
  trackEvent("calendar_booking_click", {
    cta_location: location,
    cta_text: text,
    destination: "cal.com",
    legacy_event: "click_booking_link",
  });
};
export const trackBookingLinkClick = trackCalendarBookingClick;
export const trackCalendarCtaClick = trackCalendarBookingClick;

export const trackWhatsappClick = (location: string = "floating_button") => {
  trackEvent("whatsapp_click", {
    cta_location: location,
    channel: "whatsapp",
    legacy_event: "click_whatsapp",
  });
};
export const trackWhatsappCtaClick = trackWhatsappClick;

export const trackEmailClick = (location: string = "email_link") => {
  trackEvent("email_click", {
    cta_location: location,
    channel: "email",
    legacy_event: "click_email",
  });
};

export const trackWrittenScopeCtaClick = (location: string = "contact_form") => {
  trackEvent("click_primary_cta", {
    cta_location: location,
    cta_action: "written_scope",
    legacy_event: "written_scope_cta_click",
  });
};

export const trackPartnerCtaClick = (location: string = "partnership_page") => {
  trackEvent("click_primary_cta", {
    cta_location: location,
    cta_action: "partner",
    legacy_event: "partner_cta_click",
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

export const trackLeadFormStart = (formName: string = "free_security_review_intake", source: string = "website") => {
  trackEvent("lead_form_start", {
    form_name: formName,
    source,
  });
};

export const trackSecurityReviewFormStart = (source: string = "free-assessment") => {
  trackLeadFormStart("free_security_review_intake", source);
  trackEvent("security_review_form_start", {
    form_name: "free_security_review_intake",
    form_step: "start",
    source,
  });
};
export const trackFreeSecurityReviewStart = trackSecurityReviewFormStart;

export const trackLeadFormSubmit = (data?: Record<string, any>) => {
  trackEvent("lead_form_submit", {
    ...data,
  });
};

export const trackQualifiedLead = (criteria?: Record<string, any>) => {
  trackEvent("qualified_lead", {
    ...criteria,
  });
};

export const trackSalesOpportunity = (details?: Record<string, any>) => {
  trackEvent("sales_opportunity", {
    ...details,
  });
};

export const trackSecurityReviewFormSuccess = (metadata?: Record<string, any>) => {
  // Standard conversion events: fired ONLY after a genuine enquiry has successfully validated and completed (zero PII)
  trackLeadFormSubmit({
    lead_type: "free_security_review",
    form_name: "free_security_review_intake",
    ...metadata,
  });
  trackQualifiedLead({
    type: "security_scoping_enquiry",
  });
  trackEvent("security_review_form_success", {
    lead_type: "free_security_review",
    form_name: "free_security_review_intake",
    form_step: "submit",
    legacy_event: "generate_lead",
    ...metadata,
  });
};
export const trackFreeSecurityReviewSubmit = trackSecurityReviewFormSuccess;

export const trackSecurityReviewFormError = (errorType: string = "delivery_error", formName: string = "free_security_review_intake") => {
  trackEvent("security_review_form_error", {
    form_name: formName,
    error_type: errorType.slice(0, 50),
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
  // Content engagement event: strictly distinct from generate_lead
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
// 5. Booking Events (Calendly & Cal.com Integration)
// ==========================================
export const trackBookingStart = (location: string = "calendar") => {
  trackEvent("booking_start", {
    location,
  });
};

export const trackCalendarLoaded = (location: string = "embed") => {
  trackEvent("calendar_loaded", {
    location,
  });
};

export const trackBookingStarted = (location: string = "calendly") => {
  trackBookingStart(location);
  trackEvent("booking_started", {
    location,
  });
};

export const trackBookingComplete = (eventPayload?: Record<string, any>) => {
  trackEvent("booking_complete", {
    ...eventPayload,
  });
  trackSalesOpportunity({
    stage: "scoping_call_booked",
  });
};

export const trackScopingCallBooked = (eventPayload?: Record<string, any>) => {
  // GA4 standard conversion event: fired ONLY after verified postMessage booking confirmation (zero PII)
  trackBookingComplete(eventPayload);
  trackEvent("book_appointment", {
    booking_method: "calendar_postmessage",
    confirmed: true,
    legacy_event: "scoping_call_booked",
    ...eventPayload,
  });
};

// ==========================================
// 6. Contact Form Events
// ==========================================
export const trackContactFormStart = (formName: string = "contact_form") => {
  trackLeadFormStart(formName, "contact_page");
  trackEvent("contact_form_start", {
    form_name: formName,
    form_step: "start",
  });
};

export const trackContactFormSubmit = (data?: Record<string, any>) => {
  // GA4 standard conversion event: fired ONLY after contact form successfully validates and submits (zero PII)
  trackLeadFormSubmit({
    lead_type: "contact_form",
    form_name: "contact_form",
    ...data,
  });
  trackQualifiedLead({
    type: "written_scope_enquiry",
  });
  trackEvent("generate_lead", {
    lead_type: "contact_form",
    form_name: "contact_form",
    form_step: "submit",
    legacy_event: "contact_form_submit",
    ...data,
  });
};

// Backward-compatibility aliases
export const trackHeroPrimaryCta = () => {
  trackHeroCtaClick("hero_form", "Get a Free Security Scoping Review");
  trackFreeReviewCtaClick("hero_form", "Get a Free Security Scoping Review");
};
export const trackCalendarClick = (label: string = "calendly") => trackCalendarCtaClick(label);
export const trackPhoneClick = () => trackEvent("phone_click", { channel: "phone" });

