"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import styles from "@/style/consent/consent.module.css";
import { useConsentOptional } from "@/component/consent/ConsentProvider";
import {
  CATEGORY_DESCRIPTIONS,
  CATEGORY_LABELS,
  defaultCategories,
} from "@/lib/consent/types";
import { detectGpc } from "@/lib/consent/gpc";

export function PreferenceCentre() {
  const consent = useConsentOptional();
  const titleId = useId();
  const closeRef = useRef(null);
  const [draft, setDraft] = useState(defaultCategories());
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (!consent?.prefsOpen) return;
    const current = consent.consent?.categories || defaultCategories();
    setDraft({ ...defaultCategories(), ...current, necessary: true });
    setStatus("");
    const timer = window.setTimeout(() => closeRef.current?.focus(), 0);
    return () => window.clearTimeout(timer);
  }, [consent?.prefsOpen, consent?.consent]);

  useEffect(() => {
    if (!consent?.prefsOpen) return undefined;

    const onKey = (event) => {
      if (event.key === "Escape") consent.closePreferences();
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [consent]);

  if (!consent?.prefsOpen) return null;

  const isPrivacyChoices = consent.prefsMode === "privacy-choices";
  const gpc = typeof window !== "undefined" ? detectGpc() : false;

  const toggle = (key) => {
    if (key === "necessary") return;
    if (key === "advertising" && gpc) return;
    setDraft((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const save = () => {
    consent.saveCategories(draft, isPrivacyChoices ? "preferences" : "preferences");
    setStatus("Your preferences have been saved.");
  };

  const rejectOptional = () => {
    consent.rejectAll();
    setStatus("Optional categories rejected.");
  };

  return (
    <div className={styles.overlay} role="presentation" onClick={consent.closePreferences}>
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.modalHeader}>
          <h2 id={titleId} className={styles.modalTitle}>
            {isPrivacyChoices ? "Your Privacy Choices" : "Cookie Preferences"}
          </h2>
          <button
            ref={closeRef}
            type="button"
            className={styles.iconClose}
            onClick={consent.closePreferences}
            aria-label="Close preferences"
          >
            ×
          </button>
        </div>

        <div className={styles.modalBody}>
          {isPrivacyChoices ? (
            <p className={styles.modalLead}>
              Use this control to opt out of sale, sharing or targeted advertising
              where those concepts apply under US state privacy laws. Turning off
              Advertising blocks advertising-related tags. See the{" "}
              <Link href="/us-state-privacy-notice">US State Privacy Notice</Link>.
            </p>
          ) : (
            <p className={styles.modalLead}>
              Necessary technologies stay on. Optional categories are off unless you
              enable them. You can change this anytime from the footer.
            </p>
          )}

          {gpc ? (
            <p className={styles.gpcNote} role="status">
              Global Privacy Control detected. Advertising remains opted out.
            </p>
          ) : null}

          <ul className={styles.categoryList}>
            {Object.keys(CATEGORY_LABELS).map((key) => {
              const locked = key === "necessary" || (key === "advertising" && gpc);
              return (
                <li key={key} className={styles.categoryItem}>
                  <div className={styles.categoryText}>
                    <strong>{CATEGORY_LABELS[key]}</strong>
                    <p>{CATEGORY_DESCRIPTIONS[key]}</p>
                  </div>
                  <label className={styles.switch}>
                    <span className={styles.srOnly}>
                      {CATEGORY_LABELS[key]}
                    </span>
                    <input
                      type="checkbox"
                      checked={Boolean(draft[key])}
                      disabled={locked}
                      onChange={() => toggle(key)}
                    />
                  </label>
                </li>
              );
            })}
          </ul>

          <p className={styles.modalFine}>
            Details: <Link href="/cookie-policy">Cookie Policy</Link> ·{" "}
            <Link href="/privacy-policy">Privacy Policy</Link>
          </p>

          <div aria-live="polite" className={styles.status}>
            {status}
          </div>
        </div>

        <div className={styles.modalActions}>
          <button type="button" className={styles.btnSecondary} onClick={rejectOptional}>
            Reject optional
          </button>
          <button type="button" className={styles.btnPrimary} onClick={save}>
            Save preferences
          </button>
        </div>
      </div>
    </div>
  );
}
