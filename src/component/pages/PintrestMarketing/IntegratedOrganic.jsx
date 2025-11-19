import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const IntegratedOrganic = () => {

  const accordionData = [
    {
      title: "Organic + Paid Alignment",
      content: `We fuse evergreen organic pins with paid campaigns to maintain consistent visibility. This strategy keeps your brand top of mind while engaging audiences at every stage of the customer journey.`,
    },
    {
      title: "Promoted Pins That Convert",
      content: `Our promoted pins target the right users based on interests, search behavior, and demographics. This increases discovery for your products and drives meaningful interactions on the visual discovery platform.`,
    },
    {
      title: "Retargeting & Funnel Strategy",
      content: `We implement retargeting to reconnect with past visitors and build custom funnels guiding users toward conversion. This approach boosts signups, purchases, and leads with precision.`,
    },
    {
      title: "Campaign Optimization for Maximum ROI",
      content: `All campaigns are regularly monitored and optimized. Using A/B testing and performance analytics, our Pinterest advertising services ensure your ad spend delivers measurable results.`,
    },
  ];

  return (
    <CommonAccordion
      title="Integrated Organic & Paid Pinterest Strategy"
      subheding2="At BrandStory, we combine organic Pinterest marketing with Pinterest advertising services to drive consistent traffic, engagement, and sales. By integrating both approaches, your brand reaches high intent users across the visual discovery platform while building long term visibility.<br/><br/>Here is how we deliver results:"
      items={accordionData}
      footer="Brands we have worked with have seen up to 3x ROAS within a month. Our integrated approach turns pins into traffic, engagement, and revenue while enhancing long term visibility.<br/>With BrandStory, every pin, paid or organic, works together to convert attention into traffic, engagement, and revenue."
    />
  );
};