import React from 'react';
import CommonAccordion2 from '../common/CommonAccordion2';

export const AdvancedTargeting = () => {
  const accordionData = [
    {
      title: "Facebook audience targeting that’s built on intent",
      content: `We go beyond demographics to reach users based on interests, buying signals, and online behavior making every impression count.`,
    },
    {
      title: "Lookalike audiences that scale your best customers",
      content: `By analyzing high-performing customer traits, we build <b>lookalike audiences</b> to expand reach without losing relevance.`,
    },
    {
      title: "Facebook Pixel for full-funnel visibility",
      content: `We use <b>facebook pixel</b> to track actions across your site so we know what’s working, what’s not, and where users drop off.`,
    },
    {
      title: "Real-time data for cost-efficient campaigns",
      content: `Every decision is backed by performance data, helping us lower costs while improving conversions at every step of the funnel.`,
    },
  ];

  return (
    <CommonAccordion2
      title="Advanced Targeting & Smarter Facebook Campaigns"
      description="Good targeting doesn’t mean showing up everywhere. It means showing up where it matters. We use data, behavior, and intent to make sure your ads reach the right people at the right time."
      items={accordionData}
      splitRatio={0.5}
    />
  );
};