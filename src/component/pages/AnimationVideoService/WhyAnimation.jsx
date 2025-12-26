import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const WhyAnimation = () => {
  const accordionData = [
    {
      title: "1. Simplify Complex Concepts",
      content: "Some ideas are hard to explain in plain text or static images. Animation transforms abstract ideas, complex processes, or technical products into stories your audience can instantly understand. With creative visual communication, we make your brand’s message clear, engaging, and memorable.",
    },
    {
      title: "2. Boost Conversions & Engagement",
      content: "Animated explainer videos have proven results. On landing pages, they can increase conversion rates by over 20%. By combining storytelling, motion graphics, and clear calls-to-action, your audience isn’t just watching—they’re interacting, remembering, and acting.",
    },
    {
      title: "3. Enhance Brand Recall & Trust",
      content: "A well-crafted animated video creates a unique visual language for your brand. Consistent style frames, character design, and motion graphics strengthen brand recognition, making your company more memorable and trustworthy.",
    },
    {
      title: "4. Cost-Effective & Scalable",
      content: "Unlike live-action production, animation has no logistical constraints. No actors, locations, or elaborate shoots are required. That means you can scale content creation without escalating costs, producing multiple videos efficiently while maintaining high quality.",
    }
  ];

  return (
    <CommonAccordion
      title="Why Animation Is Essential for Modern<br/>Marketing Strategies"
      subheding2=""
      items={accordionData}
    />
  );
};