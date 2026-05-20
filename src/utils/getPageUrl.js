import path from "path";
import { fileURLToPath } from "url";

export const SITE_URL = "https://brandstoryglobal.com";

/**
 * Builds the canonical URL from a page module's route folder (e.g. case-study/[slug]).
 * Pass `import.meta.url` from the page file.
 */
export function getPageUrl(moduleUrl) {
  const pageDir = path.dirname(fileURLToPath(moduleUrl));
  const slug = path.basename(pageDir);
  const segment = path.basename(path.dirname(pageDir));
  return `${SITE_URL}/${segment}/${slug}`;
}
