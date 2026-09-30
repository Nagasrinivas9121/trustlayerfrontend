"use client";

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Universal safe event dispatcher for GA4, GTM, and custom conversion tracking.
 */
export function trackEvent(eventName: string, params: Record<string, any> = {}) {
  if (typeof window === "undefined") return;

  const w = window as any;
  const payload = {
    event: eventName,
    page_location: window.location.pathname,
    timestamp: new Date().toISOString(),
    ...params,
  };

  // Push to GTM dataLayer
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push(payload);

  // Send to GA4 gtag if active
  if (typeof w.gtag === "function") {
    w.gtag("event", eventName, {
      page_location: window.location.pathname,
      ...params,
    });
  }
}

// Named Conversion Event Dispatchers
export const trackHeroPrimaryCta = () => trackEvent("hero_primary_cta_click", { cta_label: "Get a Free Security Review" });
export const trackSampleReportClick = (source: string = "general") => trackEvent("sample_report_click", { source, cta_label: "View Sample Report" });
export const trackFreeSecurityReviewStart = (source: string = "free-assessment") => trackEvent("free_security_review_start", { source });
export const trackFreeSecurityReviewSubmit = (data?: Record<string, any>) => trackEvent("free_security_review_submit", data);
export const trackContactFormStart = () => trackEvent("contact_form_start");
export const trackContactFormSubmit = (data?: Record<string, any>) => trackEvent("contact_form_submit", data);
export const trackCalendarClick = (label: string = "calendly") => {
  trackEvent("calendar_click", { event_label: label });
  // Maintain backward-compatibility for existing GTM tags looking for calendly_click
  trackEvent("calendly_click", { event_label: label });
};
export const trackWhatsappClick = () => trackEvent("whatsapp_click", { channel: "whatsapp" });
export const trackPhoneClick = () => trackEvent("phone_click", { channel: "phone" });
export const trackPartnerCtaClick = (label: string = "become_partner") => trackEvent("partner_cta_click", { cta_label: label });
