import React from 'react';
import CommonAccordion2 from '../common/CommonAccordion2';

export const OurProvenWorkflow = () => {
  const accordionData = [
    {
      title: "Phase I: Strategic Discovery & Persona Mapping",
      content: `We start by diving deep into your brand, products, audience, and competitors. This research produces a detailed roadmap that outlines customer journeys, conversion funnels, and overall e-commerce strategy, ensuring every decision is data-driven.`,
    },
    {
      title: "Phase II: Advanced UI/UX Blueprinting",
      content: `Next, we design wireframes, sitemaps, and interactive prototypes that focus on intuitive navigation, personalized user experiences, and mobile-first layouts. Our goal is seamless product discovery and a smooth checkout process that drives conversions.`,
    },
    {
      title: "Phase III: Headless & Custom Development",
      content: `We build scalable and secure platforms tailored to your needs, from open-source Magento and WooCommerce solutions to advanced headless commerce architectures. Flexibility, speed, and scalability are at the core of every build.`,
    },
    {
      title: "Phase IV: Post-Launch Growth & Optimization",
      content: `Your e-commerce site evolves with your business. We provide continuous performance monitoring, SEO optimization, A/B testing, and ongoing maintenance to maximize growth, engagement, and ROI.`,
    },
  ];

  return (
    <CommonAccordion2
      title="Our Proven Workflow for Effective Ecommerce Websites"
      description="We follow a proven, four-phase ecommerce development process to ensure every project is successful:"
      items={accordionData}
      splitRatio={0.5}
    />
  );
};