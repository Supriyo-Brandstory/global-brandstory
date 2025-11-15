import React from 'react';
import CommonAccordion2 from '../common/CommonAccordion2';

export const LlmSeo = () => {
  const accordionData = [
    {
      title: "SaaS and Cloud Platforms",
      content: `We help software and cloud-based businesses improve visibility, attract the right users, and build authority online. Our strategies focus on ranking for the right keywords, optimizing content, and earning mentions in AI and search results to drive leads.`,
    },
    {
      title: "Finance and Fintech",
      content: `From banks to fintech startups, we create content and SEO strategies that build trust and authority. We help these companies get discovered by potential customers while ensuring compliance and accuracy in financial content.`,
    },
    {
      title: "Health Tech and Medical Devices",
      content: `We support health tech companies and medical device brands by creating content that’s easy to find, informative, and credible. Our work improves online visibility while building trust with both professionals and end-users.`,
    },
    {
      title: "Logistics, Energy, and Industrial Tech",
      content: `We work with technology companies in logistics, energy, and industrial sectors to make their services and solutions discoverable online. Our strategies focus on driving relevant traffic, improving visibility in niche searches, and generating qualified leads.`,
    },
  ];

  return (
    <CommonAccordion2
      title="LLM SEO for Enterprise & B2B Brands"
      description=""
      items={accordionData}
      splitRatio={0.5}
    />
  );
};