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