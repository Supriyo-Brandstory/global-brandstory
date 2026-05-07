import { fetchStrapi } from "@/lib/strapi";
import fs from "fs";
import path from "path";

const BASE_URL = "https://brandstoryglobal.com";

export const dynamic = "force-dynamic";

/**
 * Automatically fetch ALL entries from Strapi
 * without pagination limitations.
 */
async function fetchAllStrapiEntries(endpoint, field) {
    let allData = [];
    let start = 0;
    const limit = 100;
    let total = 0;
    do {
        const response = await fetchStrapi(
            `${endpoint}?fields[0]=${field}&pagination[start]=${start}&pagination[limit]=${limit}`
        );
        total = response?.meta?.pagination?.total || 0;
        allData.push(...(response?.data || []));
        start += limit;
    } while (start < total);
    return allData;
}

/**
 * Automatically crawl local filesystem
 * and generate static routes.
 */
function getLocalPages(dir, currentRoute = "") {
    let results = [];
    if (!fs.existsSync(dir)) return results;
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            // Skip dynamic routes
            if (file.startsWith("[") && file.endsWith("]")) return;
            let nextRoute;
            if (file === "(home)") {
                nextRoute = currentRoute;
            } else if (file.startsWith("(") && file.endsWith(")")) {
                // Skip route groups
                nextRoute = currentRoute;
            } else {
                nextRoute = currentRoute
                    ? `${currentRoute}/${file}`
                    : file;
            }
            results = results.concat(
                getLocalPages(filePath, nextRoute)
            );
        } else if (file === "page.jsx" || file === "page.js") {
            results.push(
                currentRoute === ""
                    ? "/"
                    : `/${currentRoute}`
            );
        }
    });
    return results;
}

export default async function sitemap() {

    /**
     * LOCAL STATIC PAGES
     */
    const pagesDir = path.join(
        process.cwd(),
        "src",
        "app",
        "(pages)"
    );
    const localRoutes = getLocalPages(pagesDir);
    const staticSitemap = localRoutes.map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: route === "/" ? 1 : 0.8,
    }));

    /**
     * FETCH ALL STRAPI COLLECTIONS
     */
    let dynamicRoutes = [];
    let caseRoutes = [];
    let indRoutes = [];
    let blogRoutes = [];
    let locationRoutes = [];

    try {
        const [
            landingPages,
            caseStudies,
            industries,
            blogs,
            locationPages,
        ] = await Promise.all([
            fetchAllStrapiEntries(
                "landing-pages",
                "fullPath"
            ),
            fetchAllStrapiEntries(
                "casestudies",
                "caseStudySlug"
            ),
            fetchAllStrapiEntries(
                "industries",
                "pageSlug"
            ),
            fetchAllStrapiEntries(
                "blogs",
                "blogSlug"
            ),
            fetchAllStrapiEntries(
                "location-pages",
                "fullPath"
            ),
        ]);


        /**
         * LANDING PAGES
         */
        dynamicRoutes = landingPages
            .filter((page) => page.fullPath)
            .map((page) => ({
                url: `${BASE_URL}/${page.fullPath}`,
                lastModified: new Date(),
                changeFrequency: "weekly",
                priority: 0.7,
            }));

        /**
         * CASE STUDIES
         */
        caseRoutes = caseStudies
            .filter((page) => page.caseStudySlug)
            .map((page) => ({
                url: `${BASE_URL}/case-studies/${page.caseStudySlug}`,
                lastModified: new Date(),
                changeFrequency: "weekly",
                priority: 0.7,
            }));

        /**
         * INDUSTRIES
         */
        indRoutes = industries
            .filter((page) => page.pageSlug)
            .map((page) => ({
                url: `${BASE_URL}/industries/${page.pageSlug}`,
                lastModified: new Date(),
                changeFrequency: "weekly",
                priority: 0.7,
            }));

        /**
         * BLOGS
         */
        blogRoutes = blogs
            .filter((blog) => blog.blogSlug)
            .map((blog) => ({
                url: `${BASE_URL}/blogs/${blog.blogSlug}`,
                lastModified: new Date(),
                changeFrequency: "weekly",
                priority: 0.6,
            }));

        /**
         * LOCATION PAGES
         */
        locationRoutes = locationPages
            .filter((page) => page.fullPath)
            .map((page) => ({
                url: `${BASE_URL}/${page.fullPath}`,
                lastModified: new Date(),
                changeFrequency: "weekly",
                priority: 0.6,
            }));

        /**
         * LOGS
         */
        // console.log("Static Pages:", staticSitemap.length);
        // console.log("Landing Pages:", dynamicRoutes.length);
        // console.log("Case Studies:", caseRoutes.length);
        // console.log("Industries:", indRoutes.length);
        // console.log("Blogs:", blogRoutes.length);
        // console.log("Location Pages:", locationRoutes.length);

    } catch (error) {
        console.error("Sitemap generation error:", error);
    }

    /**
     * FINAL SITEMAP
     */
    return [
        ...staticSitemap,
        ...dynamicRoutes,
        ...caseRoutes,
        ...blogRoutes,
        ...indRoutes,
        ...locationRoutes,
    ];
}