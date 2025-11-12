import FAQs from '@/component/pages/common/CommonFAQ';

export const Faq = () => {
  const data = [
    {
      title: "What is international SEO and how is it different?",
      description: "International SEO is about making sure your website ranks in different countries and languages. It involves geo-targeting, hreflang tags, local search behavior, and cultural relevance."
    },
    {
      title: "How do you ensure translation accuracy?",
      description: "We don’t rely on software. All content is handled by native-language copywriters and ISO-certified translation partners, so it reads naturally and makes sense in context."
    },
    {
      title: "What tools do you use for tracking?",
      description: "We use a mix of industry-standard tools like GA4, Google Search Console International, SEMrush Geo, and Ahrefs. We also create custom dashboards to help you track results by country and language."
    },
    {
      title: "Do you support RTL languages?",
      description: "Yes. We work with full RTL compatibility including CMS layout, font rendering, and metadata localization. Your site will look and work just as well in RTL as in LTR."
    },
    {
      title: "Can you help with link building in each country?",
      description: "Absolutely. Our outreach team works with regional bloggers, publishers, and media contacts to build country-specific backlinks that improve local authority."
    },
    {
      title: "How long until results?",
      description: "Most clients notice early improvements in 3–4 months. Full momentum typically builds between 6 to 9 months, depending on market size, competition, and campaign scale."
    },
    {
      title: "Is keyword strategy different for each market?",
      description: "Yes. Every region gets its own keyword plan based on how people search locally. We align those terms with search intent, language style, and buying behavior."
    }
  ];

  return <FAQs data={data} />;
};