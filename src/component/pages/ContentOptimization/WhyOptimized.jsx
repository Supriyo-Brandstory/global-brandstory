import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const WhyOptimized = () => {
  const accordionData = [
    {
      title: "1. Better Visibility",
      content: `By aligning with what your audience is searching for, optimized content ranks higher and helps you get discovered by the right people at the right time.`,
    },
    {
      title: "2. Stronger Engagement",
      content: `Clear structure, smooth readability, and relevant messaging keep readers on the page longer and encourage them to explore more.`,
    },
    {
      title: "3. Higher Conversions",
      content: `Well-placed calls to action and purposeful messaging turn visitors into leads, customers, or subscribers, whatever matters most for your business.`,
    },
    {
      title: "4. Enhanced Credibility",
      content: `Consistent, authoritative content shows your expertise and builds trust, making your brand the one people rely on.`,
    }
  ];

  return (
    <CommonAccordion
      title="Why Optimized Content Transforms Your Business"
      subheding2="Optimized content is built to bring in the result. When every piece is created with both people and search engines in mind, the results are easy to see:"
      items={accordionData}
      footer="Companies that invest in Content Optimization Services often see 3x more clicks and double the qualified leads compared to non-optimized content."
    />
  );
};