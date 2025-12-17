import React from 'react';
import CommonAccordion2 from '../common/CommonAccordion2';

export const OurDevelopment = () => {
  const accordionData = [
    {
      title: "Phase I: Strategic Discovery & Persona Mapping",
      content: `We begin with a comprehensive discovery process, aligning your Shopify store with your brand vision and business goals. Our team conducts in-depth competitor research and customer journey mapping to understand what drives your audience. Together, we define the essential features and workflows needed to maximize conversions and create a foundation for long-term growth.`,
    },
    {
      title: "Phase II: Custom Architecture & UX/UI Design",
      content: `In this phase, we translate strategy into design. Wireframes and interactive prototypes bring your ideas to life, with a focus on frictionless checkout experiences and intuitive product discovery. Every design element blends usability with storytelling, ensuring your store is not only functional but also a powerful reflection of your brand.`,
    },
    {
      title: "Phase III: Custom Theme & App Development",
      content: `Our developers bring designs into reality with custom-coded themes built in Shopify Liquid. When your business needs go beyond off-the-shelf solutions, we create tailored apps and seamless integrations with marketing, analytics, and automation tools. The result is a store designed for speed, flexibility, and measurable performance.`,
    },
    {
      title: "Phase IV: Post-Launch Optimization & Governance",
      content: `Our work continues well beyond launch. We provide continuous performance monitoring and fine-tuning to ensure your store operates at its peak. With ongoing SEO improvements, your visibility in search grows steadily, while governance plans and proactive support help your Shopify store scale smoothly as your business evolves.`,
    },
  ];

  return (
    <CommonAccordion2
      title="Our Development Process That Ensures Reliable Shopify Websites"
      description="We follow a structured, collaborative methodology that ensures your store is delivered on time, on budget, and aligned with your goals."
      items={accordionData}
      splitRatio={0.5}
    />
  );
};