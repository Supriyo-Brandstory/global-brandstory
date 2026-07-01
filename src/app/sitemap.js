import { getSitemapEntries } from "@/lib/sitemap-xml";

export const dynamic = "force-dynamic";

export default async function sitemap() {
  return getSitemapEntries();
}
