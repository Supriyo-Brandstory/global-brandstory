/**
 * Google Consent Mode v2 helpers.
 */

export function categoriesToGcmSignals(categories = {}) {
  const analytics = categories.analytics ? "granted" : "denied";
  const advertising = categories.advertising ? "granted" : "denied";

  return {
    ad_storage: advertising,
    analytics_storage: analytics,
    ad_user_data: advertising,
    ad_personalization: advertising,
    functionality_storage: "granted",
    security_storage: "granted",
    personalization_storage: categories.experience ? "granted" : "denied",
  };
}

export function ensureGtagStub() {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== "function") {
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
  }
}

export function applyConsentDefault(signals, waitForUpdate = 500) {
  ensureGtagStub();
  window.gtag("consent", "default", {
    ...signals,
    wait_for_update: waitForUpdate,
  });
}

export function applyConsentUpdate(signals) {
  ensureGtagStub();
  window.gtag("consent", "update", signals);
}

export function pushConsentEvent(record) {
  ensureGtagStub();
  window.dataLayer.push({
    event: "bsg_consent_update",
    consent_id: record?.id,
    consent_version: record?.version,
    consent_source: record?.source,
    analytics_consent: record?.categories?.analytics ? "granted" : "denied",
    experience_consent: record?.categories?.experience ? "granted" : "denied",
    advertising_consent: record?.categories?.advertising ? "granted" : "denied",
  });
}

export function buildLeadAnalyticsEvent({ formId, pageType, serviceCategory } = {}) {
  return {
    event: "generate_lead",
    form_id: formId || "unknown",
    page_type: pageType || "contact",
    service_category: serviceCategory || "general",
  };
}

export function assertNoPiiInAnalyticsPayload(payload = {}) {
  const forbidden = ["email", "mail", "phone", "mobile", "name", "message", "company"];
  const keys = Object.keys(payload).map((k) => k.toLowerCase());
  return !forbidden.some((f) => keys.includes(f));
}
