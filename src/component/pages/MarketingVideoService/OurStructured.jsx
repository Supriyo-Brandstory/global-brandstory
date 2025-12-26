import React from 'react';
import CommonAccordion2 from '../common/CommonAccordion2';

export const OurStructured = () => {
  const accordionData = [
    {
      title: "Phase I: Brand & Audience Discovery",
      content: `We dive deep into your business goals, brand identity, and audience personas. Beyond understanding what you want to say, we explore why your audience needs to hear it. This phase produces a strategic brief that defines your key message, target demographic, and desired business outcomes like lead generation or brand awareness.`,
    },
    {
      title: "Phase II: Creative Strategy & Narrative Blueprint",
      content: `Our creative team develops a custom narrative that aligns with your audience’s pain points and aspirations. We craft detailed scripts and storyboards that guide viewers through the marketing funnel. We also identify the perfect style—live-action, animation, or motion graphics—and tone for maximum impact.`,
    },
    {
      title: "Phase III: High-Fidelity Production",
      content: `This is where your vision becomes reality. Our directors, cinematographers, and animators use state-of-the-art equipment to create visually stunning, sonically perfect videos. Every frame meets our brand quality standards, whether it’s a cinematic shoot or a polished animation.`,
    },
    {
      title: "Phase IV: Distribution, Analytics & Optimization",
      content: `Our job doesn’t stop at delivery. We provide a tailored distribution strategy to ensure your video reaches the right audience across social media, landing pages, and email campaigns. We track KPIs like view-through rate, click-through rate, and conversions to optimize performance and demonstrate tangible ROI.`,
    },
  ];

  return (
    <CommonAccordion2
      title="Our Structured Approach to Marketing Video Production"
      description="Our process is designed to combine creativity, strategy, and technical excellence. Every project follows four structured phases:"
      items={accordionData}
      splitRatio={0.5}
    />
  );
};