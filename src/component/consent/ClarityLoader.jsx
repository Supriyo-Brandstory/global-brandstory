"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { LEGAL_CONFIG } from "@/config/legal";
import { shouldLoadClarity } from "@/lib/consent/cookies";
import { useConsentOptional } from "@/component/consent/ConsentProvider";

function injectClarity(projectId) {
  if (!projectId || typeof window === "undefined") return;
  if (window.__bsgClarityLoaded) return;

  window.__bsgClarityLoaded = true;
  (function (c, l, a, r, i, t, y) {
    c[a] =
      c[a] ||
      function () {
        (c[a].q = c[a].q || []).push(arguments);
      };
    t = l.createElement(r);
    t.async = 1;
    t.src = "https://www.clarity.ms/tag/" + i;
    y = l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t, y);
  })(window, document, "clarity", "script", projectId);
}

export function ClarityLoader() {
  const consent = useConsentOptional();
  const pathname = usePathname() || "";
  const loadedFor = useRef(null);

  useEffect(() => {
    if (!consent?.ready) return;

    const allowed = shouldLoadClarity({
      categories: consent.consent?.categories,
      pathname,
      blockedPaths: LEGAL_CONFIG.CLARITY_BLOCKED_PATHS,
    });

    const projectId = LEGAL_CONFIG.CLARITY_PROJECT_ID;
    if (!allowed || !projectId) return;

    if (loadedFor.current !== projectId) {
      injectClarity(projectId);
      loadedFor.current = projectId;
    }
  }, [consent?.ready, consent?.consent, pathname]);

  return null;
}
