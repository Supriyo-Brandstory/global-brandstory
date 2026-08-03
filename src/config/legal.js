/**
 * Legal / privacy configuration.
 * Publish-ready values — do not leave [INSERT]/[CONFIRM]/[VERIFY] tokens in content.
 */

export const LEGAL_CONFIG = {
  LEGAL_ENTITY_NAME: "BrandStory, PVT LTD",
  REGISTERED_ADDRESS:
    "No. 4 & 5, 3rd Floor, 1st Cross Road, Krishna Reddy Colony, Domlur Layout, Bengaluru, Karnataka, 560071",
  US_ADDRESS: "39109 Guardino Dr, Fremont, CA 94538",
  US_ADDRESS_ROLE: "registered office",
  COMPANY_REGISTRATION: "Private Limited Company",
  PRIVACY_EMAIL: "contact@brandstoryglobal.com",
  CONTACT_EMAIL: "contact@brandstoryglobal.com",
  INDIA_GRIEVANCE_CONTACT: "contact@brandstoryglobal.com",
  ACCESSIBILITY_EMAIL: "contact@brandstoryglobal.com",
  SECURITY_EMAIL: "contact@brandstoryglobal.com",
  PHONE_US: "+1 714 599 0207",
  EFFECTIVE_DATE: "July 28, 2026",
  LAST_UPDATED_DATE: "July 28, 2026",
  GOVERNING_LAW: "the laws of India, and the courts in Bengaluru, Karnataka",
  HOSTING_PROVIDER: "DigitalOcean",
  EMAIL_PROVIDER: "Google Workspace",
  CRM_PROVIDER: "monday.com (monday CRM)",
  BANNER_VERSION: "1.0.0",
  ENQUIRY_NOTICE_VERSION: "1.0.0",
  FEATURE_MARKETING_PHONE_WHATSAPP: false,
  FEATURE_CAREERS_PRIVACY_FOOTER: false,
  GTM_ID: "GTM-PWWSNR99",
  GA4_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || "",
  CLARITY_PROJECT_ID: process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || "",
  CMP_PROVIDER: "custom-first-party",
  CONSENT_STORAGE_KEY: "bsg_consent_v1",
  CLARITY_BLOCKED_PATHS: ["/data-rights-request"],
};

export const LEGAL_FOOTER_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-use", label: "Terms of Use" },
  { href: "/cookie-policy", label: "Cookie Policy" },
  { href: "/us-state-privacy-notice", label: "US State Privacy Notice" },
  { href: "/india-privacy-notice", label: "India Privacy Notice" },
  { href: "/data-rights-request", label: "Data Rights Request" },
  { href: "/accessibility", label: "Accessibility" },
];

export function resolveLegalToken(text) {
  if (!text) return text;
  const c = LEGAL_CONFIG;
  return text
    .replaceAll("[LEGAL_ENTITY_NAME]", c.LEGAL_ENTITY_NAME)
    .replaceAll("[REGISTERED_ADDRESS]", c.REGISTERED_ADDRESS)
    .replaceAll("[US_ADDRESS]", c.US_ADDRESS)
    .replaceAll("[US_ADDRESS_ROLE]", c.US_ADDRESS_ROLE)
    .replaceAll("[PRIVACY_EMAIL]", c.PRIVACY_EMAIL)
    .replaceAll("[CONTACT_EMAIL]", c.CONTACT_EMAIL)
    .replaceAll("[ACCESSIBILITY_EMAIL]", c.ACCESSIBILITY_EMAIL)
    .replaceAll("[SECURITY_EMAIL]", c.SECURITY_EMAIL)
    .replaceAll("[INDIA_GRIEVANCE_CONTACT]", c.INDIA_GRIEVANCE_CONTACT)
    .replaceAll("[EFFECTIVE_DATE]", c.EFFECTIVE_DATE)
    .replaceAll("[LAST_UPDATED_DATE]", c.LAST_UPDATED_DATE)
    .replaceAll("[GOVERNING_LAW]", c.GOVERNING_LAW)
    .replaceAll("[PHONE_US]", c.PHONE_US)
    .replaceAll("[HOSTING_PROVIDER]", c.HOSTING_PROVIDER)
    .replaceAll("[EMAIL_PROVIDER]", c.EMAIL_PROVIDER)
    .replaceAll("[CRM_PROVIDER]", c.CRM_PROVIDER);
}

export function isPlaceholder(value) {
  return (
    !value ||
    String(value).includes("[INSERT") ||
    String(value).includes("[CONFIRM") ||
    String(value).includes("[VERIFY")
  );
}
