import {
  collectAllSitePages,
  groupSitePagesForDisplay,
} from "@/lib/site-pages";
import { SitemapContent } from "@/component/pages/Sitemap/SitemapContent";

export const metadata = {
  title: "Sitemap | BrandStory Global",
  description:
    "Browse all pages on BrandStory Global — services, case studies, blogs, industries, locations, and more.",
};

export const revalidate = 3600;

export default async function Page() {
  const pages = await collectAllSitePages();
  const sections = groupSitePagesForDisplay(pages);

  return <SitemapContent sections={sections} pageCount={pages.length} />;
}
