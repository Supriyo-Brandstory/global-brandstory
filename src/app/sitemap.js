import { fetchStrapi } from "@/lib/strapi";
import fs from "fs";
import path from "path";

const BASE_URL = 'https://brandstoryglobal.com';

export const dynamic = 'force-dynamic';

/**
 * Automatically crawls the local filesystem to find static routes.
 * This ensures that renaming a folder or adding a new page locally 
 * is reflected in the sitemap without manual code changes.
 */
function getLocalPages(dir, currentRoute = "") {
    let results = [];
    if (!fs.existsSync(dir)) return results;

    const list = fs.readdirSync(dir);
    list.forEach((file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat && stat.isDirectory()) {
            // Skip dynamic routes like [[...slug]] or [slug] as these are handled by Strapi fetch
            if (file.startsWith("[") && file.endsWith("]")) return;

            let nextRoute;
            if (file === "(home)") {
                // (home) is a route group, its content is at the root level
                nextRoute = currentRoute;
            } else if (file.startsWith("(") && file.endsWith(")")) {
                // Skip other route groups but process their nested content
                nextRoute = currentRoute;
            } else {
                // Build the URL path
                nextRoute = currentRoute ? `${currentRoute}/${file}` : file;
            }
            results = results.concat(getLocalPages(filePath, nextRoute));
        } else if (file === "page.jsx" || file === "page.js") {
            // We found a page! Add it to the list.
            results.push(currentRoute === "" ? "/" : `/${currentRoute}`);
        }
    });
    return results;
}

export default async function sitemap() {
    // 1. Get Local Static Routes automatically
    // This looks inside src/app/(pages) for any page.jsx files
    const pagesDir = path.join(process.cwd(), "src", "app", "(pages)");
    const localRoutes = getLocalPages(pagesDir);

    // Map local routes to the sitemap format
    const staticSitemap = localRoutes.map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '/' ? 1 : 0.8,
    }));

    // 2. Fetch Dynamic Pages from Strapi (Landing Pages)
    // This runs every time the sitemap is generated, so it's always up-to-date
    let dynamicRoutes = [];
    try {
        const response = await fetchStrapi('landing-pages?fields[0]=fullPath&pagination[limit]=1000');
        dynamicRoutes = response?.data?.map((page) => {
            const data = page.attributes || page;
            return {
                url: `${BASE_URL}/${data.fullPath}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.7,
            };
        }) || [];
    } catch (error) {
        console.error('Error fetching dynamic landing pages for sitemap:', error);
    }

    let caseRoutes = [];
    try {
        const response = await fetchStrapi('casestudies?fields[0]=caseStudySlug&pagination[limit]=1000');
        caseRoutes = response?.data?.map((page) => {
            const data = page.attributes || page;
            return {
                url: `${BASE_URL}/case-studies/${data.caseStudySlug}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.7,
            };
        }) || [];
    } catch (error) {
        console.error('Error fetching dynamic case studies for sitemap:', error);
    }

    let indRoutes = [];
    try {
        const response = await fetchStrapi('industries?fields[0]=pageSlug&pagination[limit]=1000');
        indRoutes = response?.data?.map((page) => {
            const data = page.attributes || page;
            return {
                url: `${BASE_URL}/industries/${data.pageSlug}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.7,
            };
        }) || [];
    } catch (error) {
        console.error('Error fetching dynamic case studies for sitemap:', error);
    }

    // 3. Fetch Blogs from Strapi (If any)
    let blogRoutes = [];
    try {
        const response = await fetchStrapi('blogs?fields[0]=slug&pagination[limit]=1000');
        blogRoutes = response?.data?.map((blog) => {
            const data = blog.attributes || blog;
            return {
                url: `${BASE_URL}/blogs/${data.slug}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.6,
            };
        }) || [];
    } catch (error) {
        // Blogs collection might not exist yet or have different structure
        console.warn('Sitemap: Blogs collection fetch failed or returned invalid structure.');
    }

    // Combine everything: Local Pages + Strapi Landing Pages + Strapi Case Studies + Strapi Blogs
    return [...staticSitemap, ...dynamicRoutes, ...caseRoutes, ...blogRoutes, ...indRoutes];
}
