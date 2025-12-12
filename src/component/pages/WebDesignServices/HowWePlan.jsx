import React from 'react';
import CommonAccordion2 from '../common/CommonAccordion2';

export const HowWePlan = () => {
  const accordionData = [
    {
      title: "Phase I: Discovery & User Research",
      content: `We start by immersing ourselves in your brand, audience, and objectives. This includes competitive analysis, creating user personas, and mapping customer journeys. By understanding your users and their needs, we lay the foundation for a website that truly resonates.`,
    },
    {
      title: "Phase II: UX/UI Blueprinting",
      content: `Next, we design the structure and flow of your website. Wireframes, sitemaps, and interactive prototypes ensure intuitive navigation and accessibility. Every element is carefully crafted to make the user’s journey effortless and engaging.`,
    },
    {
      title: "Phase III: Visual Design & Brand Storytelling",
      content: `Here, your brand comes to life visually. We apply color psychology, typography, and compelling imagery to create a consistent, on-brand aesthetic. The result is a website that leaves a lasting impression and strengthens your brand identity.`,
    },
    {
      title: "Phase IV: Development & Optimization",
      content: `Finally, we turn design into a fully functional website. Our development ensures responsive CMS integration, SEO-friendly structure, and performance optimization for fast, seamless user experiences across all devices.`,
    },
  ];

  return (
    <CommonAccordion2
      title="How We Plan, Design, and Launch High-<br/>Impact Websites"
      description="Our web design process is collaborative, structured, and results-driven, ensuring every project achieves your goals.<br/><br/><b>Your website is built to last, scale, and convert.</b>"
      items={accordionData}
      splitRatio={0.5}
    />
  );
};