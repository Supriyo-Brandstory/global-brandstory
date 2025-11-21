import React from 'react';
import CommonAccordion2 from '../common/CommonAccordion2';

export const HowWeStructure = () => {
  const accordionData = [
    {
      title: "Evaluate Existing Content",
      content: `Before creating anything new, we look closely at what you already have. A thorough **audit** helps us spot high-performing pieces worth amplifying, gaps where new formats or topics can add value, and areas that need fine-tuning to boost engagement and conversions. This way, every new effort builds on a strong foundation instead of starting from zero.`,
    },
    {
      title: "Understand Your Audience",
      content: `The heart of any successful strategy is knowing your audience. We build detailed **personas** by studying demographics, behaviors, and preferences. By mapping their journey and key decision points, we ensure each piece of content speaks to the right people at the right time—building relevance, trust, and stronger connections.`,
    },
    {
      title: "Plan Channels and Formats",
      content: `Choosing the right platforms and content types is essential. We craft multi-channel plans that might include **blogs and website content** for SEO and leads, **social media** for awareness and engagement, **email** for nurturing, and **video or interactive formats** for deeper storytelling. Each channel is carefully aligned with your business goals to deliver measurable impact.`,
    },
    {
      title: "Organize Content Workflows",
      content: `Consistency is everything. With **editorial calendars** and streamlined workflows, we schedule content for timely delivery, keep teams aligned, and automate routine tasks wherever possible. This structure ensures a steady flow of high-quality content that reinforces your brand’s authority.`,
    },
    {
      title: "Measure Performance",
      content: `To keep strategies effective, we track what really matters: **website traffic**, page performance, engagement rates, conversions, and **ROI**. Regular monitoring helps us refine approaches, double down on what works, and make smarter, data-driven decisions for ongoing improvement.`,
    },
  ];

  return (
    <CommonAccordion2
      title="How We Structure a Content Strategy That Delivers Results"
      description=""
      items={accordionData}
      splitRatio={0.5}
    />
  );
};