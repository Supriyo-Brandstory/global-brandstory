import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const WhatInclude = () => {
  const accordionData = [
    {
      title: "1. Ad Campaign Setup & Strategy",
      content: `Before we launch anything, we work with you to define the right goals, be it leads, sales, or awareness. Our team then plans the entire funnel, chooses the right ad formats, and sets up targeted ad sets for each stage of the journey. This is how our facebook ad management builds a strong foundation for performance.`,
    },
    {
      title: "2. Creative Design & Copywriting",
      content: `Your audience scrolls fast. So we create visuals and write a copy which makes them stop. Our creative team crafts each ad to match your brand tone and campaign goals whether you are promoting a product or telling a story. From bold graphics to sharp one-liners, we keep everything optimized for action.`,
    },
    {
      title: "3. Performance Tracking & Reporting",
      content: `With real time tracking and weekly reporting, you will see exactly how your campaigns are performing, right down to your ROI, CPA, and CTR. We use facebook pixel tracking and custom dashboards to monitor performance and guide improvements.`,
    },
    {
      title: "4. Audience Retargeting & Lookalike Campaigns",
      content: `Not every visitor converts the first time. That’s where our facebook remarketing strategies come in. We build custom audience flows to re-engage people who’ve shown interest and create lookalike campaigns to expand reach based on high-value behavior.`,
    },
    {
      title: "5. E-commerce Facebook Ads",
      content: `For product-first brands, we build ads that sell. Using catalogue formats, carousel creatives, and dynamic product feeds, we help e-commerce businesses capture intent and close sales. Our ads work smoothly with custom audience ads and full-funnel buying journeys.`,
    },
  ];

  return (
    <CommonAccordion
      title="What’s Included in Our Facebook Marketing Services"
      subheding2="You don’t need five different vendors to handle one campaign. We bring everything you need to run, manage, and grow your ads, under one roof. From strategy and setup to design, targeting, and results, our team handles every layer of execution with clarity and care."
      items={accordionData}
      footer=""
    />
  );
};