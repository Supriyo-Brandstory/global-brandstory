import React from 'react';
import CommonAccordion2 from '../common/CommonAccordion2';

export const OurContent = () => {
  const accordionData = [
    {
      title: "1. Research & Ideation",
      content: `We dive deep into your audience, competitors, and market trends to uncover opportunities and craft messaging that truly connects.`,
    },
    {
      title: "2. Strategy Planning",
      content: `Based on insights, we define the right content types, channels, and performance metrics to ensure every effort drives meaningful results.`,
    },
    {
      title: "3. Content Production",
      content: `From writing and design to multimedia assets, we create high-quality content that aligns with your brand and engages your audience.`,
    },
    {
      title: "4. Editing & Review",
      content: `Each piece undergoes thorough editing and review to guarantee clarity, accuracy, and consistency with your brand voice.`,
    },
    {
      title: "5. Publishing & Distribution",
      content: `Content is released strategically across platforms to reach the right audience at the right time.`,
    },
    {
      title: "6. Optimization",
      content: `We track performance, gather insights, and refine content continuously to improve reach, engagement, and impact.`,
    },
  ];

  return (
    <CommonAccordion2
      title="Our Content Creation Process"
      description="A structured approach ensures every piece of content works toward your goals:"
      items={accordionData}
      splitRatio={0.5}
    />
  );
};