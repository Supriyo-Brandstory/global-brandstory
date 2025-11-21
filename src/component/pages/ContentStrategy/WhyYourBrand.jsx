import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const WhyYourBrand = () => {
  const accordionData = [
    {
      title: "1. Higher Engagement",
      content: `Up to three times more interactions across blogs, emails, and social platforms.`,
    },
    {
      title: "2. Improved ROI",
      content: `30–40% greater efficiency by focusing resources on targeted, data-backed initiatives.`,
    },
    {
      title: "3. Consistent Messaging",
      content: `A unified voice across all touchpoints, reinforcing credibility and trust.`,
    },
    {
      title: "4. Agility",
      content: `The ability to adapt quickly to changing trends and audience behavior.`,
    }
  ];

  return (
    <CommonAccordion
      title="Why Your Brand Needs a Content Strategy Now"
      subheding2="A thoughtful strategy ensures every asset plays a role in advancing business outcomes. Brands that invest in structured planning often achieve:"
      items={accordionData}
      footer=""
    />
  );
};