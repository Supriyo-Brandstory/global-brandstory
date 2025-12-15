import React from 'react';
import CommonAccordion2 from '../common/CommonAccordion2';

export const OurRoadmap = () => {
  const accordionData = [
    {
      title: "Phase I: Strategic Discovery & Audience Mapping",
      content: `We start by understanding your campaign goals, audience behaviors, and competitors. Through detailed persona creation, we uncover visitor pain points and motivations to design pages that resonate and persuade.`,
    },
    {
      title: "Phase II: Conversion-Focused Design",
      content: `Next, we create wireframes and prototypes that balance clarity with persuasion. From intuitive navigation to compelling copy, every design choice is made with one goal in mind—driving conversions.`,
    },
    {
      title: "Phase III: A/B Testing & Optimization",
      content: `We don’t leave performance to chance. By testing headlines, CTAs, layouts, and visuals, we continuously refine your landing pages to scale what works and eliminate what doesn’t.`,
    },
    {
      title: "Phase IV: Analytics & Performance Reporting",
      content: `Finally, we integrate advanced analytics to track key metrics such as conversion rates, bounce rates, and ROAS. Transparent reporting gives you actionable insights for long-term growth and consistent ROI.`,
    },
  ];

  return (
    <CommonAccordion2
      title="Our Roadmap for Building Results-Driven Landing Pages"
      description="Our structured process ensures every landing page delivers measurable results."
      items={accordionData}
      splitRatio={0.5}
    />
  );
};