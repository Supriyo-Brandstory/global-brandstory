import React from 'react';
import CommonAccordion2 from '../common/CommonAccordion2';

export const OurAso = () => {
  const accordionData = [
    {
      title: "Phase I: Deep-Dive Audit & Competitive Intelligence",
      content: `We begin with a thorough analysis of your app’s current presence. Our team examines metadata, visuals, reviews, and overall performance. Simultaneously, we conduct competitive research to uncover high-potential, low-competition keywords your competitors may be overlooking. Deliverables include a full ASO audit, comprehensive competitor analysis, and advanced keyword research, providing a strong foundation for a results-driven strategy.`,
    },
    {
      title: "Phase II: Conversion Rate Optimization (CRO) & A/B Testing",
      content: `We focus on maximizing conversion rates by A/B testing every element that influences user behavior, including app icons, screenshots, video previews, and descriptions. Key optimization areas include your app title and subtitle, icon design, visual assets, and descriptive copy, ensuring your app captures attention and encourages downloads.`,
    },
    {
      title: "Phase III: Strategic On- & Off-Page Optimization",
      content: `Effective ASO extends beyond keywords. We optimize on-page elements such as metadata, keywords, and structured content, while also managing off-page factors like ratings, reviews, and download velocity. Engaging with user feedback helps build credibility and improves ranking signals, creating a holistic ASO strategy that strengthens both visibility and trust.`,
    },
    {
      title: "Phase IV: Post-Launch Performance Monitoring & Global Localization",
      content: `We monitor your app’s performance, track keyword rankings, and refine strategies based on algorithm changes and market trends. For apps targeting international audiences, we provide full localization, adapting visuals, language, and keywords to resonate with users in each market. This ensures long-term visibility, relevance, and growth across global app stores.`,
    },
  ];

  return (
    <CommonAccordion2
      title="Our ASO Services"
      description="We offer end-to-end ASO services designed to maximize your app’s growth. From startups launching a new app to enterprises struggling with stagnant downloads, we craft solutions that deliver measurable results."
      items={accordionData}
      splitRatio={0.5}
    />
  );
};