export function stripSensitiveQuery(urlString) {
  try {
    const url = new URL(urlString, "https://brandstoryglobal.com");
    const blocked = ["email", "mail", "phone", "mobile", "name", "token", "password"];
    for (const key of [...url.searchParams.keys()]) {
      if (blocked.includes(key.toLowerCase())) {
        url.searchParams.delete(key);
      }
    }
    return `${url.pathname}${url.search}`;
  } catch {
    return "/";
  }
}

export function readUtmParams() {
  if (typeof window === "undefined") {
    return { utmSource: "", utmMedium: "", utmCampaign: "" };
  }
  const params = new URLSearchParams(window.location.search);
  return {
    utmSource: params.get("utm_source") || "",
    utmMedium: params.get("utm_medium") || "",
    utmCampaign: params.get("utm_campaign") || "",
  };
}

export function createSubmissionId() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `sub_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}
