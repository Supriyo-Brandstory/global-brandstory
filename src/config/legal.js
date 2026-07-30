/**
 * Legal / privacy configuration.
 * Replace placeholders before public launch. Do not invent certifications or vendor claims.
 */

export const LEGAL_CONFIG = {
  LEGAL_ENTITY_NAME: "BrandStory, PVT LTD",
  REGISTERED_ADDRESS: "No. 4 & 5, 3rd Floor, 1st Cross Road, Krishna Reddy Colony, Domlur Layout, Bengaluru, Karnataka, 560071",
  US_ADDRESS: "39109 Guardino Dr, Fremont, CA 94538",
  US_ADDRESS_ROLE: "[CONFIRM: registered office | business office | mailing address]",
  COMPANY_REGISTRATION: "Private Limited Company",
  PRIVACY_EMAIL: "info@brandstory.in",
  CONTACT_EMAIL: "info@brandstory.in",
  INDIA_GRIEVANCE_CONTACT: "info@brandstory.in",
  ACCESSIBILITY_EMAIL: "info@brandstory.in",
  SECURITY_EMAIL: "info@brandstory.in",
  PHONE_US: "+1 714 599 0207",
  EFFECTIVE_DATE: "July 28, 2026",
  LAST_UPDATED_DATE: "July 28, 2026",
  GOVERNING_LAW: "Indian law",
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
  { href: "/security", label: "Security" },
  { href: "/subprocessors", label: "Subprocessors" },
];

export function resolveLegalToken(text) {
  if (!text) return text;
  return text
    .replaceAll("[INSERT FULL LEGAL ENTITY NAME]", LEGAL_CONFIG.LEGAL_ENTITY_NAME)
    .replaceAll("[INSERT REGISTERED BUSINESS ADDRESS]", LEGAL_CONFIG.REGISTERED_ADDRESS)
    .replaceAll(
      "[INSERT PRIVACY EMAIL, RECOMMENDED: privacy@brandstoryglobal.com]",
      LEGAL_CONFIG.PRIVACY_EMAIL
    )
    .replaceAll("[INSERT PRIVACY EMAIL]", LEGAL_CONFIG.PRIVACY_EMAIL)
    .replaceAll("[INSERT ACCESSIBILITY EMAIL]", LEGAL_CONFIG.ACCESSIBILITY_EMAIL)
    .replaceAll("[INSERT SECURITY EMAIL]", LEGAL_CONFIG.SECURITY_EMAIL)
    .replaceAll("[INSERT INDIA GRIEVANCE CONTACT]", LEGAL_CONFIG.INDIA_GRIEVANCE_CONTACT)
    .replaceAll("[INSERT EFFECTIVE DATE]", LEGAL_CONFIG.EFFECTIVE_DATE)
    .replaceAll("[INSERT LAST UPDATED DATE]", LEGAL_CONFIG.LAST_UPDATED_DATE)
    .replaceAll(
      "[INSERT GOVERNING LAW AND COURTS FROM COUNSEL]",
      LEGAL_CONFIG.GOVERNING_LAW
    );
}

export function isPlaceholder(value) {
  return !value || String(value).includes("[INSERT") || String(value).includes("[CONFIRM");
}
