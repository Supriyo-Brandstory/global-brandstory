import React from 'react';
import CommonAccordion2 from '../common/CommonAccordion2';

export const HowOur2 = () => {
  const accordionData = [
    {
      title: "Phase I: Digital Audit & Performance Benchmark",
      content: `We dive deep into your current website’s performance. Using tools like Google Analytics, heatmaps, and user surveys, we identify friction points, underperforming pages, and opportunities. This establishes a baseline to measure success.`,
    },
    {
      title: "Phase II: Strategic Blueprint & UX Overhaul",
      content: `We don’t just redesign; we re-architect your website. This phase includes creating a new sitemap, wireframes, and interactive prototypes. Every element focuses on user journey, navigation clarity, and engagement.`,
    },
    {
      title: "Phase III: Visual & Technical Transformation",
      content: `Your blueprint comes to life with a modern visual design aligned with brand storytelling. Our developers build a fast, scalable, and SEO-friendly site on a robust CMS.`,
    },
    {
      title: "Phase IV: Launch & Post-Launch CRO",
      content: `Launching is just the beginning. We perform A/B testing, monitor KPIs, and make data-driven optimizations to maximize conversions and ensure long-term success.`,
    },
  ];

  return (
    <CommonAccordion2
      title="How Our Website Revamp Process Enhances User Engagement"
      description="We approach each website revamp with a clear, phased strategy:"
      items={accordionData}
      splitRatio={0.5}
    />
  );
};