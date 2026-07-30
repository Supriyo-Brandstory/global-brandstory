"use client";

import Link from "next/link";
import styles from "@/style/consent/consent.module.css";
import { useConsentOptional } from "@/component/consent/ConsentProvider";

export function ConsentBanner() {
  const consent = useConsentOptional();
  if (!consent?.ready || !consent.bannerOpen || consent.prefsOpen) return null;

  return (
    <div
      className={styles.banner}
      role="dialog"
      aria-modal="false"
      aria-labelledby="bsg-consent-banner-title"
      aria-describedby="bsg-consent-banner-desc"
    >
      <div className={styles.bannerInner}>
        <div className={styles.bannerCopy}>
          <h2 id="bsg-consent-banner-title" className={styles.bannerTitle}>
            Cookie and privacy choices
          </h2>
          <p id="bsg-consent-banner-desc" className={styles.bannerText}>
            We use necessary cookies to run the site. Optional analytics,
            experience (including Microsoft Clarity) and advertising technologies
            stay off until you choose. Read our{" "}
            <Link href="/cookie-policy">Cookie Policy</Link> and{" "}
            <Link href="/privacy-policy">Privacy Policy</Link>.
          </p>
        </div>
        <div className={styles.bannerActions}>
          <button
            type="button"
            className={styles.btnSecondary}
            onClick={consent.rejectAll}
          >
            Reject All
          </button>
          <button
            type="button"
            className={styles.btnSecondary}
            onClick={() => consent.openPreferences("cookies")}
          >
            Manage Preferences
          </button>
          <button
            type="button"
            className={styles.btnPrimary}
            onClick={consent.acceptAll}
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
