export function detectGpc() {
  if (typeof navigator === "undefined") return false;
  return Boolean(navigator.globalPrivacyControl);
}

/**
 * Apply Global Privacy Control as US sale/share/targeted-advertising opt-out.
 * Forces advertising category off; leaves other categories unchanged.
 */
export function applyGpcToCategories(categories = {}) {
  return {
    ...categories,
    necessary: true,
    advertising: false,
  };
}
