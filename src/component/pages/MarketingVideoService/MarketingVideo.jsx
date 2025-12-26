import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const MarketingVideo = () => {
  const accordionData = [
    {
      title: "1. Brand Videos",
      content: "Your brand is a story waiting to be told. Our brand videos capture your values, vision, and mission, creating an emotional connection that resonates with audiences and strengthens brand loyalty.",
    },
    {
      title: "2. Explainer & Product Videos",
      content: "Complex ideas don’t have to feel complicated. We transform your products and services into clear, engaging, and visually compelling stories that simplify understanding and highlight real-world value for your customers.",
    },
    {
      title: "3. Testimonial & Case Study Videos",
      content: "Nothing builds trust like authentic experiences. By showcasing real customers and their success stories, we create powerful testimonial and case study videos that provide social proof and credibility, helping prospects see the impact of your solutions.",
    },
    {
      title: "4. Social Media Videos",
      content: "Every platform has its own language and we speak them all. From Instagram reels to TikTok snippets and LinkedIn promos, we craft short, dynamic, and platform-optimized videos designed to capture attention, drive engagement, and spark conversations.",
    }
  ];

  return (
    <CommonAccordion
      title = "Marketing Video Services That Help<br/>Brands Connect With Audiences"
      subheding2 = "We specialize in crafting videos that serve your goals, whether you want to explain, inspire, or convert."
      items = {accordionData}
      footer = "The right video strategy turns casual browsers into loyal customers and transforms your marketing from routine to remarkable."
    />
  );
};