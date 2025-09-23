import CommonAccordion2 from '../common/CommonAccordion2';

export const ContentMarketingFAQ = () => {
  const accordionData = [
    {
      title: "Tech SaaS company",
      content:
        "Find search terms that match your audience’s intent and have the best chance of bringing in results.",
    },
    {
      title: "E-commerce brand",
      content:
        "AI-powered content strategies designed to align with audience demand and search trends.",
    },
    {
      title: "Healthcare provider",
      content:
        "Leverage AI forecasts to stay ahead of SEO trends and make proactive adjustments.",
    },
  ];

  return (
    <CommonAccordion2
      title="Content Marketing Case Studies"
      description="Numbers tell part of the story, but the real impact is in how content changes the way businesses connect with their audiences. Here’s a look at what we’ve achieved for our clients:"
      items={accordionData}
    />
  );
};