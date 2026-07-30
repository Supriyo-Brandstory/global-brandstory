/** Known optional first-party cookie name prefixes to clear on withdraw. */
export const OPTIONAL_COOKIE_PREFIXES = [
  "_ga",
  "_gid",
  "_gat",
  "_gcl",
  "_clck",
  "_clsk",
  "CLID",
  "ANONCHK",
  "MR",
  "MUID",
  "SM",
];

export function clearOptionalCookies(prefixes = OPTIONAL_COOKIE_PREFIXES) {
  if (typeof document === "undefined") return [];

  const cleared = [];
  const cookies = document.cookie ? document.cookie.split(";") : [];

  for (const part of cookies) {
    const name = part.split("=")[0]?.trim();
    if (!name) continue;
    const shouldClear = prefixes.some(
      (prefix) => name === prefix || name.startsWith(`${prefix}_`) || name.startsWith(prefix)
    );
    if (!shouldClear) continue;

    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${window.location.hostname}`;
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.${window.location.hostname}`;
    cleared.push(name);
  }

  return cleared;
}

export function shouldLoadClarity({ categories, pathname, blockedPaths = [] }) {
  if (!categories?.experience) return false;
  if (!pathname) return true;
  return !blockedPaths.some(
    (blocked) => pathname === blocked || pathname.startsWith(`${blocked}/`)
  );
}
