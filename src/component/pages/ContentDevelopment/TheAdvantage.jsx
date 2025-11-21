import React from 'react';
import CommonAccordion2 from '../common/CommonAccordion2';

export const TheAdvantage = () => {
  const accordionData = [
    {
      title: "We Start With Understanding",
      content: `Every successful piece of content begins with clarity. We take the time to learn your brand, your voice, and your objectives, ensuring that everything we create is purposeful and aligned with your vision.`,
    },
    {
      title: "Audience-First Thinking",
      content: `Content only works if it resonates. Our team studies your audience’s behaviors, needs, and pain points so we can deliver content that engages, informs, and moves them to action.`,
    },
    {
      title: "Proven Experience Across Industries",
      content: `From tech startups looking to scale quickly to established healthcare and finance brands building trust, our strategies have delivered measurable growth across a wide range of sectors.`,
    },
    {
      title: "Commitment to Quality",
      content: `Quality is never negotiable. Every article, video, or campaign undergoes thorough editing, fact-checking, and refinement, so your audience always sees polished, accurate, and credible work.`,
    },
    {
      title: "Built for Long-Term Impact",
      content: `We don’t just create for the moment. Our approach focuses on sustainable content strategies that continue to attract, engage, and convert—well beyond a single campaign.`,
    },
  ];

  return (
    <CommonAccordion2
      title="The Advantage of Working with Our Content Experts"
      description="When you choose us, you’re not just outsourcing content, you’re gaining a partner dedicated to understanding your business, your audience, and your goals."
      items={accordionData}
      splitRatio={0.5}
    />
  );
};