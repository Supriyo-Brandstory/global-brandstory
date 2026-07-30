import { LEGAL_CONFIG } from "@/config/legal";
import { defaultCategories } from "@/lib/consent/types";

export const CONSENT_CHANGED_EVENT = "bsg:consent-changed";

function storageKey() {
  return LEGAL_CONFIG.CONSENT_STORAGE_KEY;
}

export function createConsentId() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `bsg_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

export function createConsentRecord({
  categories,
  source = "banner",
  region = "unknown",
  id,
} = {}) {
  return {
    id: id || createConsentId(),
    ts: new Date().toISOString(),
    version: LEGAL_CONFIG.BANNER_VERSION,
    region,
    categories: {
      ...defaultCategories(),
      ...categories,
      necessary: true,
    },
    source,
  };
}

export function readConsent() {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(storageKey());
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed?.categories || typeof parsed.categories !== "object") return null;
    return parsed;
  } catch {
    return null;
  }
}

export function writeConsent(record) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(storageKey(), JSON.stringify(record));
  window.dispatchEvent(
    new CustomEvent(CONSENT_CHANGED_EVENT, { detail: record })
  );
}

export function clearConsentStorage() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(storageKey());
}

export function hasValidConsentChoice(record) {
  return Boolean(record?.categories && record?.ts && record?.id);
}
