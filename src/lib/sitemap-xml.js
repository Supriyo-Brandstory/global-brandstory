import {
  BASE_URL,
  fetchAllStrapiEntries,
  getLocalPages,
} from "@/lib/site-pages";

export async function getSitemapEntries() {
  const localRoutes = getLocalPages();

  const staticSitemap = localRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));

  let dynamicRoutes = [];
  let caseRoutes = [];
  let indRoutes = [];
  let blogRoutes = [];
  let locationRoutes = [];

  try {
    const [landingPages, caseStudies, industries, blogs, locationPages] =
      await Promise.all([
        fetchAllStrapiEntries("landing-pages", ["fullPath"]),
        fetchAllStrapiEntries("casestudies", ["caseStudySlug"]),
        fetchAllStrapiEntries("industries", ["pageSlug"]),
        fetchAllStrapiEntries("blogs", ["blogSlug"]),
        fetchAllStrapiEntries("location-pages", ["fullPath"]),
      ]);

    dynamicRoutes = landingPages
      .filter((page) => page.fullPath)
      .map((page) => ({
        url: `${BASE_URL}/${page.fullPath}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
      }));

    caseRoutes = caseStudies
      .filter((page) => page.caseStudySlug)
      .map((page) => ({
        url: `${BASE_URL}/case-studies/${page.caseStudySlug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
      }));

    indRoutes = industries
      .filter((page) => page.pageSlug)
      .map((page) => ({
        url: `${BASE_URL}/industries/${page.pageSlug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
      }));

    blogRoutes = blogs
      .filter((blog) => blog.blogSlug)
      .map((blog) => ({
        url: `${BASE_URL}/blogs/${blog.blogSlug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.6,
      }));

    locationRoutes = locationPages
      .filter((page) => page.fullPath)
      .map((page) => ({
        url: `${BASE_URL}/${page.fullPath}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.6,
      }));
  } catch (error) {
    console.error("Sitemap generation error:", error);
  }

  return [
    ...staticSitemap,
    ...dynamicRoutes,
    ...caseRoutes,
    ...blogRoutes,
    ...indRoutes,
    ...locationRoutes,
  ];
}
