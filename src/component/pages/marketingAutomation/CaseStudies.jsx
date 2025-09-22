import CommonAccordion2 from '../common/CommonAccordion2';

export const CaseStudies = () => {
  const accordionData = [
    {
      title: "E-commerce client",
      content:
        "Find search terms that match your audience’s intent and have the best chance of bringing in results.",
    },
    {
      title: "B2B Client",
      content:
        "AI-powered content strategies designed to align with audience demand and search trends.",
    },
    {
      title: "Retail client",
      content:
        "Leverage AI forecasts to stay ahead of SEO trends and make proactive adjustments.",
    },
  ];

  return (
    <CommonAccordion2
      title="Automation Case Studies That Prove ROI"
      description="<b class='highlited-text'>Here’s how automation changes results:</b>"
      items={accordionData}
    />
  );
};