import privacyPolicy from "./privacy-policy";
import termsOfUse from "./terms-of-use";
import cookiePolicy from "./cookie-policy";
import usStatePrivacyNotice from "./us-state-privacy-notice";
import indiaPrivacyNotice from "./india-privacy-notice";
import dataRightsRequest from "./data-rights-request";
import accessibility from "./accessibility";
import security from "./security";
import subprocessors from "./subprocessors";
import careersPrivacy from "./careers-privacy";

export const LEGAL_CONTENT = {
  "privacy-policy": privacyPolicy,
  "terms-of-use": termsOfUse,
  "cookie-policy": cookiePolicy,
  "us-state-privacy-notice": usStatePrivacyNotice,
  "india-privacy-notice": indiaPrivacyNotice,
  "data-rights-request": dataRightsRequest,
  accessibility,
  security,
  subprocessors,
  "careers-privacy": careersPrivacy,
};

export function getLegalContent(slug) {
  return LEGAL_CONTENT[slug] || null;
}
