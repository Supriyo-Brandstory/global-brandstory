import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const WhyContentCreation = () => {
  const accordionData = [
    {
      title: "1. Engage Your Audience",
      content: `Content that speaks directly to your audience’s needs and interests keeps them hooked, encourages interaction, and builds long-term loyalty.`,
    },
    {
      title: "2. Boost Visibility",
      content: `With smart SEO optimization, your content becomes easier to find, helping you rise above competitors and reach the right people at the right time.`,
    },
    {
      title: "3. Drive Conversions",
      content: `Clear, compelling messaging guides your audience toward action—whether that’s subscribing, purchasing, or reaching out for more information.`,
    },
    {
      title: "4. Establish Authority",
      content: `High-quality, consistent content showcases your expertise and positions your brand as a trusted leader in your industry.`,
    }
  ];

  return (
    <CommonAccordion
      title = "Why Content Creation Matters for Your Business"
      subheding2 = "A strong content strategy is one of the most effective ways to build engagement, credibility, and conversions. Here’s why it matters:"
      items = {accordionData}
      footer = "Data shows that businesses with consistent, high-quality content see up to 3x higher engagement rates and stronger ROI than those without. Every blog, video, or graphic contributes to measurable business outcomes."
    />
  );
};