import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const OurShopify = () => {
  const accordionData = [
    {
      title: "1. Custom Shopify Store Development",
      content: `We design and build unique Shopify stores that are conversion-focused, visually engaging, and user-friendly. From intuitive navigation to seamless checkout experiences, every element is optimized for higher sales and lasting customer loyalty.`,
    },
    {
      title: "2. Shopify Plus Development",
      content: `For high-growth and enterprise brands, our Shopify Plus expertise unlocks advanced features. From custom checkout flows and B2B portals to enterprise-grade integrations, we deliver scalable solutions tailored to complex business needs.`,
    },
    {
      title: "3. Custom Theme Development",
      content: `Stand out with tailor-made Shopify themes coded from scratch using Shopify Liquid. Our custom themes combine speed, flexibility, and originality—built to reflect your brand identity while ensuring superior performance.`,
    },
    {
      title: "4. Shopify App Development & Integrations",
      content: `Extend your store’s capabilities with custom apps and powerful integrations. Whether it’s marketing automation, analytics, or third-party tools, we create solutions that enhance functionality and streamline operations.`,
    },
    {
      title: "5. Headless Commerce Solutions",
      content: `We implement headless commerce setups that decouple your front-end and back-end. This provides lightning-fast performance, complete design freedom, and the flexibility to use modern frameworks like React or Vue.js.`,
    },
    {
      title: "6. Post-Launch Optimization & Support",
      content: `Our partnership doesn’t end at launch. We provide continuous monitoring, SEO optimization, and governance plans to keep your store secure, visible, and primed for long-term growth.`,
    }
  ];

  return (
    <CommonAccordion
      title = "Our Shopify Web Development Services<br/>Designed to Match Your Brand Goals"
      subheding2 = "We provide end-to-end Shopify solutions designed for businesses at every stage."
      items = {accordionData}
      footer = ""
    />
  );
};