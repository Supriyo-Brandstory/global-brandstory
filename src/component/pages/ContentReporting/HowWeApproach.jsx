import React from 'react';
import CommonAccordion2 from '../common/CommonAccordion2';

export const HowWeApproach = () => {
  const accordionData = [
    {
      title: "Objective Identification",
      content: `Every successful content strategy begins with clarity. We work closely with you to define specific goals, whether it’s increasing website traffic, boosting audience engagement, generating leads, or driving conversions, so every metric we track aligns with your business objectives.`,
    },
    {
      title: "Metric Selection",
      content: `Not all data points are equally valuable. We carefully choose KPIs that truly measure performance and success for your goals, ensuring that reporting focuses on metrics that matter most to your business.`,
    },
    {
      title: "Data Collection",
      content: `We consolidate data from all your content platforms, social media, email, website, and more, giving us a comprehensive, 360-degree view of your campaign performance.`,
    },
    {
      title: "Analysis & Interpretation",
      content: `Our experts examine the data to identify patterns, trends, and opportunities. By understanding what works and what doesn’t, we uncover actionable insights that can immediately inform strategy adjustments.`,
    },
    {
      title: "Actionable Recommendations",
      content: `Insights are only valuable if they lead to action. We provide clear, practical recommendations to optimize your content strategy, improving engagement, enhancing reach, and ultimately driving better results for your business.`,
    },
  ];

  return (
    <CommonAccordion2
      title="How We Approach Content Reporting to Drive Real Results"
      description="At BrandStory, we take a strategic approach to content reporting that ensures you're always on track to achieve your goals. Our content reporting process is structured to provide you with clear, actionable insights at every stage of the campaign. Here’s how we do it:"
      items={accordionData}
      splitRatio={0.5}
    />
  );
};