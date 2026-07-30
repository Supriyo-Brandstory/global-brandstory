"use client";

import Link from "next/link";
import styles from "@/style/consent/consent.module.css";
import { useConsentOptional } from "@/component/consent/ConsentProvider";
import {
  LEGAL_CONFIG,
  LEGAL_FOOTER_LINKS,
  isPlaceholder,
} from "@/config/legal";

export function FooterLegalControls() {
  const consent = useConsentOptional();

  const links = [...LEGAL_FOOTER_LINKS];
  if (LEGAL_CONFIG.FEATURE_CAREERS_PRIVACY_FOOTER) {
    links.push({ href: "/careers-privacy", label: "Careers Privacy" });
  }

  return (
    <div className={styles.footerLegal}>
      <Link href="/sitemap">Sitemap</Link>
      <nav className={styles.footerLegalNav} aria-label="Legal">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
      <button
        type="button"
        onClick={() => consent?.openPreferences("cookies")}
      >
        Cookie Preferences
      </button>
      <button
        type="button"
        onClick={() => consent?.openPreferences("privacy-choices")}
      >
        Your Privacy Choices
      </button>
      {!isPlaceholder(LEGAL_CONFIG.LEGAL_ENTITY_NAME) ? (
        <span>{LEGAL_CONFIG.LEGAL_ENTITY_NAME}</span>
      ) : null}
    </div>
  );
}
