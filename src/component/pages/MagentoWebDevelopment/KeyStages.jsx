import React from 'react';
import CommonAccordion2 from '../common/CommonAccordion2';

export const KeyStages = () => {
  const accordionData = [
    {
      title: "Phase I: Strategic Discovery & Architecture Blueprinting",
      content: `We begin by diving deep into your business model, workflows, and technology ecosystem. This strategic discovery results in a comprehensive architecture blueprint, detailing how Magento will integrate with your systems while supporting business goals and future growth.`,
    },
    {
      title: "Phase II: Bespoke Development & Customization",
      content: `Your store is not just built—it’s crafted. We develop custom modules, themes, and features tailored to your unique business logic and customer experience objectives, ensuring a seamless, high-converting ecommerce environment.`,
    },
    {
      title: "Phase III: Scalability & Performance Engineering",
      content: `High traffic or peak sales periods won’t slow your store down. We optimize caching, databases, and server environments to ensure maximum speed, stability, and reliability, providing a seamless experience for every visitor.`,
    },
    {
      title: "Phase IV: Post-Launch Support & Optimization",
      content: `Our commitment continues after launch. We monitor performance, implement SEO enhancements, and provide a clear governance plan, ensuring your Magento store remains secure, high-performing, and optimized for sustainable growth.`,
    },
  ];

  return (
    <CommonAccordion2
      title="Key Stages in Our Magento Development Methodology"
      description="We follow a clear, structured process to ensure success at every stage."
      items={accordionData}
      splitRatio={0.5}
    />
  );
};