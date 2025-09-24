import CommonAccordion2 from '../common/CommonAccordion2';

export const ORMSuccessStories = () => {
  const accordionData = [
    {
      title: "Tech Startup",
      content:
        "Find search terms that match your audience’s intent and have the best chance of bringing in results.",
    },
    {
      title: "Corporate Executive",
      content:
        "AI-powered content strategies designed to align with audience demand and search trends.",
    },
    {
      title: "E-commerce Brand",
      content:
        "Leverage AI forecasts to stay ahead of SEO trends and make proactive adjustments.",
    },
  ];

  return (
    <CommonAccordion2
      title="ORM Success Stories"
      description="Our ORM case studies show measurable outcomes and real results."
      items={accordionData}
    />
  );
};