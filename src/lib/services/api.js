import qs from 'qs';
import { fetchStrapi } from "../strapi";

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

export async function getAllCaseStudies(page = 1, pageSize = 12) {
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