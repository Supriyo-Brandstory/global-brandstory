import qs from 'qs';
import { notFound } from "next/navigation";
import { fetchStrapi, fetchStrapiSafe } from "../strapi";

export async function getLandingPageBySlug(slug) {
  const query = qs.stringify({
    filters: {
      pageSlug: {
        $eq: slug,
      },
    },
    populate: {
      sections: {
        on: {
          'section.banner': {
            populate: '*',
          },
          'section.accordion1': {
            populate: '*',
          },
          'section.accordion2': {
            populate: '*',
          },
          'section.outcome': {
            populate: '*',
          },
          'section.casestudy': {
            populate: {
              casestudyCard: {
                populate: '*',
              }
            },
          },
          'section.services-sec': {
            populate: {
              imgcards: {
                populate: '*',
              }
            },
          },
          'section.yourbrandyourstrategy': {
            populate: {
              cards: {
                populate: "*",
              }
            }
          },
          'section.testimonials': {
            populate: '*',
          },
          'section.whyyourpartner': {
            populate: {
              cards: {
                populate: '*',
              }
            },
          },
          'section.horizontaltab': {
            populate: '*',
          },
          'section.vertical-tab': {
            populate: '*',
          },
          'section.adv': {
            populate: '*',
          },
          'section.faq': {
            populate: '*',
          }
        },
      },
    },
  }, {
    encodeValuesOnly: true,
  });

  return fetchStrapi(`landing-pages?${query}`);
}

export async function getLandingPageByPath(fullPath) {
  const query = qs.stringify(
    {
      filters: {
        fullPath: {
          $eq: fullPath,
        },
      },
      populate: {
        sections: {
          on: {
            "section.banner": {
              populate: "*",
            },
            "section.accordion1": {
              populate: "*",
            },
            "section.accordion2": {
              populate: "*",
            },
            "section.outcome": {
              populate: "*",
            },
            "section.casestudy": {
              populate: {
                casestudyCard: {
                  populate: "*",
                },
              },
            },
            "section.services-sec": {
              populate: {
                imgcards: {
                  populate: "*",
                },
              },
            },
            "section.yourbrandyourstrategy": {
              populate: {
                cards: {
                  populate: "*",
                },
              },
            },
            "section.testimonials": {
              populate: "*",
            },
            "section.whyyourpartner": {
              populate: {
                cards: {
                  populate: "*",
                },
              },
            },
            "section.horizontaltab": {
              populate: "*",
            },
            "section.vertical-tab": {
              populate: "*",
            },
            "section.adv": {
              populate: "*",
            },
            "section.faq": {
              populate: "*",
            },
          },
        },
      },
    },
    { encodeValuesOnly: true }
  );

  return fetchStrapi(`landing-pages?${query}`);
}

export async function getCaseStudyBySlug(caseStudySlug) {
  const query = qs.stringify(
    {
      filters: {
        caseStudySlug: {
          $eq: caseStudySlug,
        },
      },
      populate: {
        caseSections: {
          populate: "*"
        },
      },
    },
    { encodeValuesOnly: true }
  );
  return fetchStrapi(`casestudies?${query}`);
}

export async function getIndustriesBySlug(pageSlug) {
  const query = qs.stringify(
    {
      filters: {
        pageSlug: {
          $eq: pageSlug,
        },
      },
      populate: {
        sections: {
          on: {
            "section.ind-banner": {
              populate: "*",
            },
            "section.ind-objectives": {
              populate: "*",
            },
            "section.accordion2": {
              populate: "*",
            },
            "section.ind-growth": {
              populate: "*",
            },
            'section.ind-digital-marketing': {
              populate: {
                dmcase: {
                  populate: {
                    services: "*",
                  },
                },
              },
            },
            'section.horizontaltab': {
              populate: '*',
            },
            'section.ind-results': {
              populate: '*',
            },
            'section.faq': {
              populate: '*',
            },
            'section.adv': {
              populate: '*',
            },
          },
        },
      },
    },
    { encodeValuesOnly: true }
  );

  return fetchStrapi(`industries?${query}`);
}

export async function getAllCaseStudies(page = 1, pageSize = 12, search = "") {
  const filters = {};
  if (search) {
    filters.$or = [
      { caseStudyTitle: { $containsi: search } },
    ];
  }

  const query = qs.stringify(
    {
      fields: ["caseStudyTitle", "caseStudySlug", "publishedAt"],
      populate: {
        caseSections: {
          on: {
            "section.case-banner": {
              populate: "*"
            },
          }
        }
      },
      filters,
      sort: ["publishedAt:desc"],
      pagination: {
        page: page,
        pageSize: pageSize,
      },
    },
    { encodeValuesOnly: true }
  );

  return fetchStrapi(`casestudies?${query}`);
}

export async function getBlogBySlug(slug) {
  const query = qs.stringify(
    {
      filters: {
        blogSlug: {
          $eq: slug,
        },
      },
      populate: {
        blogImage: { populate: "*" },
        contentSection: {
          on: {
            "element.blog-content": { populate: "*" },
            "element.blog-image": {
              populate: {
                blogImage: { populate: "*" }
              }
            }
          }
        }
      }
    },
    { encodeValuesOnly: true }
  );

  return fetchStrapi(`blogs?${query}`);
}

export async function getAllBlogs(page = 1, pageSize = 6, category = "All") {
  const filters = {};
  if (category && category !== "All") {
    filters.blog_categories = {
      catName: {
        $eq: category,
      },
    };
  }

  const query = qs.stringify(
    {
      fields: [
        "blogTitle",
        "blogSlug",
        "blogMetaTitle",
        "blogMetaDescription",
        "blogDate",
        "publishedAt"
      ],
      populate: {
        blogImage: true,
        blog_categories: true,
      },
      filters,
      sort: ["publishedAt:desc"],
      pagination: {
        page: page,
        pageSize: pageSize,
      },
    },
    { encodeValuesOnly: true }
  );

  return fetchStrapi(`blogs?${query}`);
}

export async function getLastThreeBlogs() {
  const query = qs.stringify(
    {
      fields: [
        "blogTitle",
        "blogSlug",
        "blogMetaTitle",
        "blogMetaDescription",
        "blogDate",
        "publishedAt",
      ],
      populate: {
        blogImage: true,
        blog_categories: true,
      },
      sort: ["publishedAt:desc"],
      pagination: {
        page: 1,
        pageSize: 3,
      },
    },
    { encodeValuesOnly: true }
  );

  return fetchStrapi(`blogs?${query}`);
}

export async function getLatestBlogs(limit = 10) {
  const query = qs.stringify(
    {
      fields: [
        "blogTitle",
        "blogSlug",
        "blogMetaTitle",
        "blogMetaDescription",
        "blogDate",
        "publishedAt",
      ],
      populate: {
        blogImage: true,
        blog_categories: true,
      },
      sort: ["publishedAt:desc"],
      pagination: {
        page: 1,
        pageSize: limit,
      },
    },
    { encodeValuesOnly: true }
  );

  return fetchStrapi(`blogs?${query}`);
}

/** Section components the connected Strapi does not have (e.g. not yet deployed). */
const unsupportedLocationSections = new Set();

export async function getLocationPageByPath(fullPath) {
  const sectionPopulate = { ...LOCATION_SECTION_POPULATE };
  unsupportedLocationSections.forEach((key) => delete sectionPopulate[key]);

  const maxAttempts = Object.keys(sectionPopulate).length + 1;

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const query = qs.stringify(
      {
        filters: {
          fullPath: {
            $eq: fullPath,
          },
        },
        populate: {
          sections: {
            on: sectionPopulate,
          },
        },
      },
      { encodeValuesOnly: true }
    );

    const result = await fetchStrapiSafe(`location-pages?${query}`);
    if (result.ok) return result.data;

    const invalidKey = result.error?.details?.key;
    const isUnknownSection =
      result.status === 400 &&
      result.error?.details?.param === "populate" &&
      invalidKey &&
      Object.prototype.hasOwnProperty.call(sectionPopulate, invalidKey);

    if (!isUnknownSection) {
      console.error("Strapi Error Details:", result.error);
      notFound();
    }

    unsupportedLocationSections.add(invalidKey);
    delete sectionPopulate[invalidKey];
    console.warn(`Strapi has no "${invalidKey}" component; skipping that section.`);
  }

  notFound();
}

const LOCATION_SECTION_POPULATE = {
            "section.banner": {
              populate: "*",
            },
            "section.accordion1": {
              populate: "*",
            },
            "section.accordion2": {
              populate: "*",
            },
            "section.outcome": {
              populate: "*",
            },
            "section.casestudy": {
              populate: {
                casestudyCard: {
                  populate: "*",
                },
              },
            },
            "section.services-sec": {
              populate: {
                imgcards: {
                  populate: "*",
                },
              },
            },
            "section.yourbrandyourstrategy": {
              populate: {
                cards: {
                  populate: "*",
                },
              },
            },
            "section.testimonials": {
              populate: "*",
            },
            "section.whyyourpartner": {
              populate: {
                cards: {
                  populate: "*",
                },
              },
            },
            "section.horizontaltab": {
              populate: "*",
            },
            "section.vertical-tab": {
              populate: "*",
            },
            "section.adv": {
              populate: "*",
            },
            "section.faq": {
              populate: "*",
            },
            "section.whystrategic": {
              populate: "*",
            },
            "section.thepeople": {
              populate: "*",
            },
            "section.whyaeomatters": {
              populate: {
                imgcards: {
                  populate: "*",
                },
              },
            },
            "section.client-logos": {
              populate: {
                logos: true,
              },
            },
            "section.our-process": {
              populate: {
                buttons: true,
                steps: true,
              },
            },
            "section.card-slider": {
              populate: {
                slides: true,
              },
            },
            "section.first-30-days": {
              populate: {
                weeks: {
                  populate: {
                    icon: true,
                  },
                },
              },
            },
            "section.industry-results": {
              populate: {
                cards: true,
              },
            },
            "section.team-performance": {
              populate: {
                image: true,
                cards: {
                  populate: {
                    icon: true,
                  },
                },
              },
            },
            "section.reviews-cta": {
              populate: {
                ctaImage: true,
                reviews: {
                  populate: {
                    avatar: true,
                    platformIcon: true,
                  },
                },
              },
            },
};

export async function getIndustryReportBySlug(slugArray) {
  if (!Array.isArray(slugArray) || slugArray.length === 0 || slugArray.length > 2) {
    return null;
  }

  const processPage = (page) => {
    if (!page) return null;
    return {
      ...page,
      fullSlug: page.parentSlug ? `${page.parentSlug}/${page.slug}` : page.slug,
    };
  };

  const [firstSlug, secondSlug] = slugArray;
  const filters =
    slugArray.length === 1
      ? {
        parentSlug: { $eq: firstSlug },
        slug: { $null: true },
      }
      : {
        parentSlug: { $eq: firstSlug },
        slug: { $eq: secondSlug },
      };

  const query = qs.stringify(
    {
      filters,
      populate: {
        sections: {
          on: {
            "industry-reports.rep-banner": { populate: "*" },
            "industry-reports.rep-exc-summary": {
              populate: {
                snapshotOfOpportunities: { populate: "*" },
                keyfindings: { populate: "*" },
              }
            },
            "industry-reports.rep-ind-overview": { populate: "*" },
            "industry-reports.rep-perf-bench-mark": { populate: "*" },
            "industry-reports.rep-comp-and-market-leaders": {
              populate: {
                perfTable: {
                  populate: {
                    heading: "*",
                    Row: {
                      populate: {
                        cells: "*"
                      }
                    }
                  }
                },
                points: "*",
                emergingCompetitor: "*",
                benchmark: "*",
              }
            },
            "industry-reports.rep-search-volume-analysis": {
              populate: {
                cityCards: {
                  populate: {
                    cityTable: {
                      populate: {
                        heading: "*",
                        Row: {
                          populate: {
                            cells: "*",
                          },
                        },
                      },
                    },
                  },
                },
                searchValues: "*"
              },
            },
            "industry-reports.rep-content-and-insights": {
              populate: {
                adoptCard: { populate: "*" },
                listCards: { populate: "*" }
              }
            },
            "industry-reports.rep-optimization": { populate: "*" },
            "industry-reports.rep-tech-bench-mark": {
              populate: {
                listicles: {
                  populate: "*"
                },
                cards: { populate: "*" }
              }
            },
            "industry-reports.rep-future": { populate: "*" },
            "industry-reports.rep-strategy": {
              populate: {
                cards: {
                  populate: {
                    text: "*",
                    points: "*"
                  }
                }
              }
            },
            "element.rep-recommendations": {
              populate: {
                cards: {
                  populate: "*",
                }
              }
            },
            "industry-reports.rep-appendix": {
              populate: {
                sources: { populate: "*" }
              }
            },
          },
          // populate: "*",
        },
      },
    },
    { encodeValuesOnly: true }
  );

  const response = await fetchStrapi(`industry-reports?${query}`);
  const page = processPage(response?.data?.[0]);

  if (!page) return null;
  return { page };
}