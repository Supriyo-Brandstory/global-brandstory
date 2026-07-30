"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { LEGAL_CONFIG } from "@/config/legal";
import {
  acceptAllCategories,
  defaultCategories,
  rejectOptionalCategories,
} from "@/lib/consent/types";
import {
  createConsentRecord,
  hasValidConsentChoice,
  readConsent,
  writeConsent,
  CONSENT_CHANGED_EVENT,
} from "@/lib/consent/store";
import {
  applyConsentUpdate,
  categoriesToGcmSignals,
  pushConsentEvent,
} from "@/lib/consent/gcm";
import { applyGpcToCategories, detectGpc } from "@/lib/consent/gpc";
import { clearOptionalCookies } from "@/lib/consent/cookies";
import dynamic from "next/dynamic";

const ConsentBanner = dynamic(
  () =>
    import("@/component/consent/ConsentBanner").then((m) => m.ConsentBanner),
  { ssr: false }
);
const PreferenceCentre = dynamic(
  () =>
    import("@/component/consent/PreferenceCentre").then(
      (m) => m.PreferenceCentre
    ),
  { ssr: false }
);
const ClarityLoader = dynamic(
  () =>
    import("@/component/consent/ClarityLoader").then((m) => m.ClarityLoader),
  { ssr: false }
);

const ConsentContext = createContext(null);

export function useConsent() {
  const ctx = useContext(ConsentContext);
  if (!ctx) {
    throw new Error("useConsent must be used within ConsentProvider");
  }
  return ctx;
}

export function useConsentOptional() {
  return useContext(ConsentContext);
}

function persistAndApply(record) {
  writeConsent(record);
  applyConsentUpdate(categoriesToGcmSignals(record.categories));
  pushConsentEvent(record);
  if (!record.categories.analytics && !record.categories.experience && !record.categories.advertising) {
    clearOptionalCookies();
  } else if (!record.categories.analytics || !record.categories.experience) {
    clearOptionalCookies();
  }
  return record;
}

export function ConsentProvider({ children }) {
  const [consent, setConsentState] = useState(null);
  const [ready, setReady] = useState(false);
  const [bannerOpen, setBannerOpen] = useState(false);
  const [prefsOpen, setPrefsOpen] = useState(false);
  const [prefsMode, setPrefsMode] = useState("cookies");

  useEffect(() => {
    let record = readConsent();
    const gpc = detectGpc();

    if (hasValidConsentChoice(record)) {
      if (gpc && record.categories?.advertising) {
        record = persistAndApply(
          createConsentRecord({
            categories: applyGpcToCategories(record.categories),
            source: "gpc",
            region: record.region || "unknown",
            id: record.id,
          })
        );
      }
      setConsentState(record);
      setBannerOpen(false);
    } else if (gpc) {
      record = persistAndApply(
        createConsentRecord({
          categories: applyGpcToCategories(defaultCategories()),
          source: "gpc",
        })
      );
      setConsentState(record);
      setBannerOpen(true);
    } else {
      setBannerOpen(true);
    }

    setReady(true);

    const onExternal = (event) => {
      if (event?.detail) setConsentState(event.detail);
    };
    window.addEventListener(CONSENT_CHANGED_EVENT, onExternal);
    return () => window.removeEventListener(CONSENT_CHANGED_EVENT, onExternal);
  }, []);

  const saveCategories = useCallback((categories, source = "preferences") => {
    const nextCategories = detectGpc()
      ? applyGpcToCategories(categories)
      : { ...categories, necessary: true };

    const record = persistAndApply(
      createConsentRecord({
        categories: nextCategories,
        source,
        id: readConsent()?.id,
      })
    );
    setConsentState(record);
    setBannerOpen(false);
    setPrefsOpen(false);
    return record;
  }, []);

  const acceptAll = useCallback(() => {
    return saveCategories(acceptAllCategories(), "banner");
  }, [saveCategories]);

  const rejectAll = useCallback(() => {
    clearOptionalCookies();
    return saveCategories(rejectOptionalCategories(), "banner");
  }, [saveCategories]);

  const openPreferences = useCallback((mode = "cookies") => {
    setPrefsMode(mode);
    setPrefsOpen(true);
  }, []);

  const closePreferences = useCallback(() => {
    setPrefsOpen(false);
  }, []);

  const value = useMemo(
    () => ({
      consent,
      ready,
      bannerOpen,
      prefsOpen,
      prefsMode,
      acceptAll,
      rejectAll,
      saveCategories,
      openPreferences,
      closePreferences,
      bannerVersion: LEGAL_CONFIG.BANNER_VERSION,
    }),
    [
      consent,
      ready,
      bannerOpen,
      prefsOpen,
      prefsMode,
      acceptAll,
      rejectAll,
      saveCategories,
      openPreferences,
      closePreferences,
    ]
  );

  return (
    <ConsentContext.Provider value={value}>
      {children}
      <ConsentBanner />
      <PreferenceCentre />
      <ClarityLoader />
    </ConsentContext.Provider>
  );
}
