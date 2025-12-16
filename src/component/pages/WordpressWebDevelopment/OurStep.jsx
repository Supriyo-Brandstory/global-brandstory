import React from 'react';
import CommonAccordion2 from '../common/CommonAccordion2';

export const OurStep = () => {
  const accordionData = [
    {
      title: "Phase I: Strategic Discovery & Needs Analysis",
      content: `We begin by thoroughly understanding your business, objectives, and competitive landscape. This in-depth analysis helps us map complex workflows, identify challenges, and uncover opportunities for automation and optimization, ensuring every design and development decision is purposeful and aligned with your goals.`,
    },
    {
      title: "Phase II: Custom Architecture & UX/UI Design",
      content: `Rather than adapting a pre-built theme, we create fully custom WordPress themes from scratch. Our wireframes and user-centric designs prioritize intuitive navigation and engaging interfaces, delivering experiences that captivate users and drive conversions.`,
    },
    {
      title: "Phase III: Headless & High-Performance Development",
      content: `Our development team builds secure, scalable platforms tailored to your needs. Whether traditional or headless WordPress, we focus on speed, reliability, and future-proof architecture, ensuring your website performs flawlessly under all conditions.`,
    },
    {
      title: "Phase IV: Post-Launch Optimization & Governance",
      content: `Launching your website is just the beginning. We provide continuous maintenance, implement SEO improvements, and establish governance strategies to ensure long-term stability, optimal performance, and sustainable growth for your site.`,
    },
  ];

  return (
    <CommonAccordion2
      title="Our Step-by-Step Process That Ensures Consistent Website Quality"
      description="We follow a structured WordPress development process to ensure efficiency, transparency, and results."
      items={accordionData}
      splitRatio={0.5}
    />
  );
};