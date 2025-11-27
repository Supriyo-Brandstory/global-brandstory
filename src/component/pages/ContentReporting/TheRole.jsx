import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const TheRole = () => {
  const accordionData = [
    {
      title: "1. ROI Tracking",
      content: `Monitor the performance of your content across all channels and see how it contributes to your overall business objectives. This helps you understand which campaigns are delivering the strongest returns.`,
    },
    {
      title: "2. Result Validation",
      content: `Measure the effectiveness of your content efforts against carefully selected KPIs. This allows you to validate strategies, identify what works, and focus on high-impact initiatives.`,
    },
    {
      title: "3. Decision Support",
      content: `Our reporting doesn’t just show numbers, it provides actionable, data-backed insights that guide smarter decisions, optimize resources, and drive sustainable growth over time.`,
    }
  ];

  return (
    <CommonAccordion
      title="The Role of Detailed Reporting in Shaping Your Content Strategy"
      subheding2="At BrandStory, we understand that reporting is about using that data to validate results, track ROI, and make smarter decisions. Here’s why thorough reporting is essential for your content strategy:"
      items={accordionData}
      footer="With content reporting, you can ensure that your content strategy remains accountable and aligned with your business goals, ultimately improving the effectiveness of every campaign."
    />
  );
};