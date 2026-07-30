export const CONSENT_CATEGORIES = {
  necessary: "necessary",
  analytics: "analytics",
  experience: "experience",
  advertising: "advertising",
};

export const CATEGORY_LABELS = {
  necessary: "Strictly necessary",
  analytics: "Analytics",
  experience: "Experience / session analytics",
  advertising: "Advertising",
};

export const CATEGORY_DESCRIPTIONS = {
  necessary:
    "Required for security, consent records, form operation and core site functions.",
  analytics:
    "Measures visits, page use, conversions and technical performance (including GA4).",
  experience:
    "Interaction analytics, heatmaps and session playback (including Microsoft Clarity).",
  advertising:
    "Advertising measurement, personalisation or audiences — only if tags are installed.",
};

export function defaultCategories({ analytics = false, experience = false, advertising = false } = {}) {
  return {
    necessary: true,
    analytics: Boolean(analytics),
    experience: Boolean(experience),
    advertising: Boolean(advertising),
  };
}

export function acceptAllCategories() {
  return defaultCategories({ analytics: true, experience: true, advertising: true });
}

export function rejectOptionalCategories() {
  return defaultCategories();
}
