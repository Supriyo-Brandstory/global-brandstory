import fs from "fs";
import path from "path";
import { getPageMetadata } from "@/app/(pages)/metadata";

export const BASE_URL = "https://brandstoryglobal.com";
export const SITE_NAME = "BrandStory Global";
export const SITE_DESCRIPTION =
  "BrandStory Global is a full-service digital marketing and technology agency delivering growth-focused strategies, campaigns, and development.";

const PAGES_DIR = path.join(process.cwd(), "src", "app", "(pages)");

async function fetchStrapiSafe(endpoint) {
  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://127.0.0.1:1337";
  const STRAPI_TOKEN = process.env.STRAPI_PROD_API_TOKEN;

  try {
    const res = await fetch(`${STRAPI_URL}/api/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
        "Content-Type": "application/json",
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export async function fetchAllStrapiEntries(endpoint, fields = []) {
  const fetchWithFields = async (selectedFields) => {
    const fieldQuery = selectedFields
      .map((field, index) => `fields[${index}]=${field}`)
      .join("&");
    const prefix = fieldQuery ? `${fieldQuery}&` : "";

    let allData = [];
    let start = 0;
    const limit = 100;
    let total = 0;

    do {
      const response = await fetchStrapiSafe(
        `${endpoint}?${prefix}pagination[start]=${start}&pagination[limit]=${limit}`
      );

      if (!response) break;

      total = response?.meta?.pagination?.total || 0;
      allData.push(...(response?.data || []));
      start += limit;
    } while (start < total);

    return allData;
  };

  if (fields.length === 0) {
    return fetchWithFields([]);
  }

  const data = await fetchWithFields(fields);

  // Some Strapi collections reject optional SEO fields — fall back to slug/path only.
  if (data.length === 0 && fields.length > 1) {
    return fetchWithFields([fields[0]]);
  }

  return data;
}

export function getLocalPageEntries(dir = PAGES_DIR, currentRoute = "") {
  let results = [];

  if (!fs.existsSync(dir)) return results;

  for (const file of fs.readdirSync(dir)) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      if (file.startsWith("[") && file.endsWith("]")) continue;

      let nextRoute;
      if (file === "(home)" || (file.startsWith("(") && file.endsWith(")"))) {
        nextRoute = currentRoute;
      } else {
        nextRoute = currentRoute ? `${currentRoute}/${file}` : file;
      }

      results = results.concat(getLocalPageEntries(filePath, nextRoute));
      continue;
    }

    if (file === "page.jsx" || file === "page.js") {
      results.push({
        route: currentRoute === "" ? "/" : `/${currentRoute}`,
        filePath,
      });
    }
  }

  return results;
}

function humanizeRoute(route) {
  if (route === "/") return SITE_NAME;

  const slug = route.split("/").filter(Boolean).at(-1) || "Page";
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function extractMetadataFromPageFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8");

  const metadataKeyMatch = content.match(/getPageMetadata\(["']([^"']+)["']\)/);
  if (metadataKeyMatch) {
    const meta = getPageMetadata(metadataKeyMatch[1]);
    if (meta) {
      return {
        title: meta.title,
        description: meta.description || "",
      };
    }
  }

  const metadataBlockMatch = content.match(/export const metadata\s*=\s*(\{[\s\S]*?\n\});/);
  if (metadataBlockMatch) {
    const block = metadataBlockMatch[1];
    const titleMatch = block.match(/title:\s*["'`]([^"'`]+)["'`]/);
    const descriptionMatch = block.match(/description:\s*["'`]([^"'`]+)["'`]/);

    if (titleMatch || descriptionMatch) {
      return {
        title: titleMatch?.[1] || "",
        description: descriptionMatch?.[1] || "",
      };
    }
  }

  return null;
}

function categorizeRoute(route) {
  if (route === "/") return "main";
  if (route.startsWith("/services")) return "services";
  if (route.startsWith("/case-study") || route.startsWith("/case-studies")) return "case-studies";
  if (route.startsWith("/industries")) return "industries";
  if (route.startsWith("/blogs")) return "blogs";
  if (route.startsWith("/industry-reports")) return "industry-reports";
  return "main";
}

function normalizePage(url, title, description, category, source) {
  const pathname = new URL(url).pathname;
  const cleanTitle = (title || humanizeRoute(pathname)).trim();
  const cleanDescription = (description || SITE_DESCRIPTION).trim();

  return {
    url,
    pathname,
    title: cleanTitle,
    description: cleanDescription,
    category,
    source,
  };
}

function buildPageUrl(fullPath) {
  const normalizedPath = String(fullPath)
    .trim()
    .replace(/^\/+/, "")
    .replace(/\/+/g, "/");

  return normalizedPath ? `${BASE_URL}/${normalizedPath}` : `${BASE_URL}/`;
}

function mergePage(existing, incoming) {
  if (!existing) return incoming;

  return {
    ...existing,
    title:
      existing.title && existing.title !== humanizeRoute(existing.pathname)
        ? existing.title
        : incoming.title || existing.title,
    description:
      existing.description && existing.description !== SITE_DESCRIPTION
        ? existing.description
        : incoming.description || existing.description,
    source:
      existing.source === incoming.source
        ? existing.source
        : `${existing.source}+${incoming.source}`,
  };
}

function addPage(pageMap, page) {
  if (!page?.url) return;

  const existing = pageMap.get(page.url);
  pageMap.set(page.url, existing ? mergePage(existing, page) : page);
}

export async function collectAllSitePages() {
  const pageMap = new Map();

  for (const { route, filePath } of getLocalPageEntries()) {
    const meta = extractMetadataFromPageFile(filePath);
    addPage(
      pageMap,
      normalizePage(
        `${BASE_URL}${route}`,
        meta?.title,
        meta?.description,
        categorizeRoute(route),
        "static"
      )
    );
  }

  const [
    landingPages,
    caseStudies,
    industries,
    blogs,
    locationPages,
    industryReports,
  ] = await Promise.all([
    fetchAllStrapiEntries("landing-pages", [
      "fullPath",
      "seotitle",
      "seodescription",
      "noindex",
    ]),
    fetchAllStrapiEntries("casestudies", [
      "caseStudySlug",
      "seoTitle",
      "seoDescription",
      "noindex",
    ]),
    fetchAllStrapiEntries("industries", [
      "pageSlug",
      "metatitle",
      "metadescription",
      "noindex",
    ]),
    fetchAllStrapiEntries("blogs", [
      "blogSlug",
      "blogTitle",
      "blogMetaTitle",
      "blogMetaDescription",
    ]),
    fetchAllStrapiEntries("location-pages", [
      "fullPath",
      "seotitle",
      "seodescription",
      "noindex",
    ]),
    fetchAllStrapiEntries("industry-reports", [
      "parentSlug",
      "slug",
      "metaTitle",
      "metaDescription",
      "metatitle",
      "metadescription",
      "title",
      "seoTitle",
      "seoDescription",
    ]),
  ]);

  for (const page of landingPages) {
    if (!page.fullPath) continue;

    addPage(
      pageMap,
      normalizePage(
        buildPageUrl(page.fullPath),
        page.seotitle,
        page.seodescription,
        categorizeRoute(`/${page.fullPath}`),
        "strapi-landing"
      )
    );
  }

  for (const page of caseStudies) {
    if (!page.caseStudySlug) continue;

    addPage(
      pageMap,
      normalizePage(
        `${BASE_URL}/case-studies/${page.caseStudySlug}`,
        page.seoTitle,
        page.seoDescription,
        "case-studies",
        "strapi-case-study"
      )
    );
  }

  for (const page of industries) {
    if (!page.pageSlug) continue;

    addPage(
      pageMap,
      normalizePage(
        `${BASE_URL}/industries/${page.pageSlug}`,
        page.metatitle,
        page.metadescription,
        "industries",
        "strapi-industry"
      )
    );
  }

  for (const blog of blogs) {
    if (!blog.blogSlug) continue;

    addPage(
      pageMap,
      normalizePage(
        `${BASE_URL}/blogs/${blog.blogSlug}`,
        blog.blogMetaTitle || blog.blogTitle,
        blog.blogMetaDescription,
        "blogs",
        "strapi-blog"
      )
    );
  }

  for (const page of locationPages) {
    if (!page.fullPath) continue;

    addPage(
      pageMap,
      normalizePage(
        buildPageUrl(page.fullPath),
        page.seotitle,
        page.seodescription,
        categorizeRoute(`/${page.fullPath}`) === "main"
          ? "locations"
          : categorizeRoute(`/${page.fullPath}`),
        "strapi-location"
      )
    );
  }

  for (const report of industryReports) {
    if (!report.parentSlug) continue;

    const route = report.slug
      ? `/industry-reports/${report.parentSlug}/${report.slug}`
      : `/industry-reports/${report.parentSlug}`;

    addPage(
      pageMap,
      normalizePage(
        buildPageUrl(route.replace(/^\//, "")),
        report.metaTitle ||
          report.metatitle ||
          report.seoTitle ||
          report.title,
        report.metaDescription ||
          report.metadescription ||
          report.seoDescription,
        "industry-reports",
        "strapi-industry-report"
      )
    );
  }

  return Array.from(pageMap.values()).sort((a, b) => a.url.localeCompare(b.url));
}

const SECTION_LABELS = {
  main: "Main Pages",
  services: "Services",
  "case-studies": "Case Studies",
  industries: "Industries",
  blogs: "Blog Posts",
  locations: "Location Pages",
  "industry-reports": "Industry Reports",
};

const SECTION_ORDER = [
  "main",
  "services",
  "case-studies",
  "industries",
  "blogs",
  "locations",
  "industry-reports",
];

function escapeLlmsText(text) {
  return text.replace(/\s+/g, " ").trim();
}

function slugifyHeading(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function humanizeSlug(slug) {
  if (!slug) return "General";

  const acronyms = {
    seo: "SEO",
    ppc: "PPC",
    api: "API",
    b2b: "B2B",
    b2c: "B2C",
    llm: "LLM",
    llms: "LLMs",
    aeo: "AEO",
    cms: "CMS",
    ios: "iOS",
    saas: "SaaS",
    paas: "PaaS",
    pwa: "PWA",
    orm: "ORM",
  };

  return slug
    .split("-")
    .map((word) => acronyms[word.toLowerCase()] || word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function getPageSubgroup(page) {
  const parts = page.pathname.split("/").filter(Boolean);

  switch (page.category) {
    case "services":
      return parts.length > 1 ? humanizeSlug(parts[1]) : "General Services";
    case "case-studies":
      return parts[0] === "case-studies" ? "CMS Case Studies" : "Hardcoded Case Studies";
    case "main":
      if (page.pathname === "/") return "Home";
      if (parts.length === 1) return "Core Pages";
      return humanizeSlug(parts[0]);
    case "locations":
      return parts.length > 0 ? humanizeSlug(parts[0]) : "Locations";
    case "industry-reports":
      return parts.length > 1 ? humanizeSlug(parts[1]) : "Industry Reports";
    default:
      return null;
  }
}

function groupPagesByCategory(pages) {
  return pages.reduce((acc, page) => {
    if (!acc[page.category]) acc[page.category] = [];
    acc[page.category].push(page);
    return acc;
  }, {});
}

function groupPagesBySubgroup(pages) {
  const grouped = pages.reduce((acc, page) => {
    const key = getPageSubgroup(page) || "Other";
    if (!acc[key]) acc[key] = [];
    acc[key].push(page);
    return acc;
  }, {});

  for (const key of Object.keys(grouped)) {
    grouped[key].sort((a, b) => a.pathname.localeCompare(b.pathname));
  }

  return grouped;
}

function formatPageEntry(page) {
  return [
    `- [${escapeLlmsText(page.title)}](${page.url})`,
    `  ${escapeLlmsText(page.description)}`,
  ].join("\n");
}

function formatFlatSection(pages) {
  const lines = [];

  for (const page of pages.sort((a, b) => a.title.localeCompare(b.title))) {
    lines.push(formatPageEntry(page));
    lines.push("");
  }

  return lines;
}

function formatNestedSection(pages) {
  const lines = [];
  const subgroups = groupPagesBySubgroup(pages);
  const subgroupNames = Object.keys(subgroups).sort((a, b) => a.localeCompare(b));

  for (const subgroup of subgroupNames) {
    const subgroupPages = subgroups[subgroup];
    lines.push(`### ${subgroup}`);
    lines.push(`_${subgroupPages.length} page${subgroupPages.length === 1 ? "" : "s"}_`);
    lines.push("");

    for (const page of subgroupPages) {
      lines.push(formatPageEntry(page));
      lines.push("");
    }
  }

  return lines;
}

export function formatLlmsTxt(pages) {
  const grouped = groupPagesByCategory(pages);
  const generatedAt = new Date().toISOString().split("T")[0];
  const nestedCategories = new Set([
    "services",
    "case-studies",
    "main",
    "locations",
    "industry-reports",
  ]);

  const lines = [
    `# ${SITE_NAME}`,
    "",
    `> ${SITE_DESCRIPTION}`,
    "",
    `- **Site:** ${BASE_URL}`,
    `- **Pages indexed:** ${pages.length} unique URLs`,
    `- **Note:** XML sitemap total can look higher when the same URL appears in multiple CMS collections`,
    `- **Last generated:** ${generatedAt}`,
    `- **Sources:** hardcoded pages + Strapi CMS`,
    "",
    "---",
    "",
    "## Contents",
    "",
  ];

  for (const category of SECTION_ORDER) {
    const sectionPages = grouped[category];
    if (!sectionPages?.length) continue;

    const label = SECTION_LABELS[category] || category;
    lines.push(
      `- [${label}](#${slugifyHeading(label)}) — ${sectionPages.length} page${sectionPages.length === 1 ? "" : "s"}`
    );
  }

  lines.push("");
  lines.push("---");
  lines.push("");

  for (const category of SECTION_ORDER) {
    const sectionPages = grouped[category];
    if (!sectionPages?.length) continue;

    const label = SECTION_LABELS[category] || category;
    lines.push(`## ${label}`);
    lines.push("");
    lines.push(`_${sectionPages.length} page${sectionPages.length === 1 ? "" : "s"} total_`);
    lines.push("");

    if (nestedCategories.has(category)) {
      lines.push(...formatNestedSection(sectionPages));
    } else {
      lines.push(...formatFlatSection(sectionPages));
    }

    lines.push("---");
    lines.push("");
  }

  return `${lines.join("\n").trim()}\n`;
}

export function getLocalPages() {
  return getLocalPageEntries().map(({ route }) => (route === "" ? "/" : route));
}
