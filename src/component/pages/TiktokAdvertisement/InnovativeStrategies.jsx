import React from 'react';
import CommonAccordion2 from '../common/CommonAccordion2';

export const InnovativeStrategies = () => {
  const accordionData = [
    {
      title: "Awareness",
      content: `Start by building instant visibility with trend-driven creatives and platform native storytelling. These ads blend smoothly with organic content, driving high view rates while positioning your brand in conversations that matter.`,
    },
    {
      title: "Engagement",
      content: `Deepen interest by retargeting users who interacted with initial ads. Use product focused messaging to answer unspoken objections and position your brand as the trusted solution.`,
    },
    {
      title: "Conversion",
      content: `Motivate prospects to take action with compelling offers, testimonials, or proof-driven content. Encourage final steps like adding to cart, signing up, or booking services efficiently.`,
    },
    {
      title: "Retention",
      content: `Keep past customers engaged through loyalty-focused campaigns. Introduce upsells, exclusive launches, and community-driven content to foster repeat purchases and long-term brand advocacy.`,
    },
    {
      title: "A/B Testing Creatives",
      content: `Continuously test ad creatives, formats, and audiences. Identify top-performing versions to maximize engagement, reduce wasted impressions, and increase overall ROI.`,
    },
    {
      title: "Daily Budget Optimization",
      content: `Monitor budgets in real time and reallocate spend toward high-performing audiences. Scale winning campaigns efficiently without overspending while maintaining consistent ROAS.`,
    },
    {
      title: "Utilizing TikTok Pixel Data",
      content: `Use TikTok Pixel to track user actions beyond the platform. Enable precise retargeting, accurate event tracking, and smarter bidding strategies for higher campaign returns.`,
    },
  ];

  return (
    <CommonAccordion2
      title="Innovative Strategies<br/>for Modern<br/>Advertising"
      description="Every TikTok ad strategy is structured to move users from discovery to conversion in the most efficient path possible."
      items={accordionData}
      splitRatio={0.5}
    />
  );
};