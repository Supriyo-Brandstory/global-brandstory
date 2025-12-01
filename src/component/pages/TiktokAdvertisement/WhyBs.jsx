import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const WhyBs = () => {
  const accordionData = [
    {
      title: "1. Certified TikTok Ad Partner",
      content: `Campaigns are executed with insider knowledge, early access to new ad formats, and best practices direct from TikTok’s own playbook. This certification is a proof of proven performance and compliance at the highest standard.`,
    },
    {
      title: "2. Campaigns Across 30+ Industries",
      content: `Experience spans e-commerce, beauty, SaaS, real estate, mobile apps, and more. This cross-industry perspective allows strategies from one vertical to be adapted and optimized for another, giving clients a competitive advantage.`,
    },
    {
      title: "3. Cross-Channel Marketing Expertise",
      content: `Strategies are integrated with Meta Ads for retargeting and Google Ads for intent capture, creating a seamless full-funnel ecosystem that maximizes conversions.`,
    },
    {
      title: "4. Scaling Brands From Startup To Enterprise",
      content: `From launching a brand’s very first TikTok ad to managing multi-million-dollar monthly budgets, growth strategies are designed to scale without sacrificing efficiency or creative quality.`,
    },
    {
      title: "5. Dedicated Creative Team",
      content: `A specialized content studio produces platform-native TikTok video ads quickly, ensuring every creative feels fresh, trend-aligned, and ready to perform. This speed-to-market keeps brands relevant and competitive in TikTok’s fast-moving environment.`,
    }
  ];

  return (
    <CommonAccordion
      title = "Why BrandStory is the Smart Pick for TikTok Marketing"
      subheding2 = ""
      items = {accordionData}
      footer = ""
    />
  );
};