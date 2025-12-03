import React from 'react';
import CommonAccordion2 from '../common/CommonAccordion2';

export const HowWeBuild = () => {
  const accordionData = [
    {
      title: "Market & Subreddit Research",
      content: `We find the communities that give the best chance for growth and the highest ROI.`,
    },
    {
      title: "Tone Calibration",
      content: `We make sure your messages match the culture of each subreddit, so they feel real and authentic.`,
    },
    {
      title: "Ad Creative Experimentation",
      content: `We test different pictures, words, and formats to see what people like the most.`,
    },
    {
      title: "Weekly Testing & Optimization",
      content: `We improve targeting, bids, and messages every week based on results.`,
    },
    {
      title: "Community-Safe Engagement Strategy",
      content: `We avoid spammy methods and always follow Reddit rules to keep your brand trusted.`,
    },
  ];

  return (
    <CommonAccordion2
      title="How We Build Reddit Campaigns That Perform"
      description="At BrandStory, we approach Reddit advertising with care and precision. We use data, cultural understanding, and creative ideas to make sure every campaign works well.<br/><br/>Every campaign we create is meant to build trust, increase engagement, and drive measurable growth for your brand.<br/><br/><span class='highlited-text'>Step-by-step process:</span>"
      items={accordionData}
      splitRatio={0.5}
    />
  );
};