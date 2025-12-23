import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const OurEnd = () => {
  const accordionData = [
    {
      title: "1. Strategic Discovery & UX/UI Blueprinting",
      content: `We begin by gaining a deep understanding of your business, target audience, and market landscape. From this insight, we create detailed user flows, wireframes, and high-fidelity mockups. Each blueprint is designed to ensure a frictionless, intuitive user journey that aligns with your business goals and maximizes engagement.`,
    },
    {
      title: "2. Component-Driven Development",
      content: `Our development approach focuses on modular, reusable components. This allows for faster development cycles, consistent user experiences across your site, and easier maintenance. By building scalable components, we future-proof your digital product while keeping development efficient and cost-effective.`,
    },
    {
      title: "3. High-Performance Engineering & QA",
      content: `Our developers implement clean, semantic code using the latest frameworks like React.js, Vue.js, and Next.js. We prioritize performance through image compression, lazy loading, and code minification, while rigorous cross-browser and device testing ensures a flawless experience for every visitor.`,
    },
    {
      title: "4. Post-Launch Optimization & Scalability",
      content: `Launching your site is just the beginning. We provide continuous performance monitoring, regular audits, and a roadmap for feature enhancements, ensuring your website remains fast, reliable, and capable of evolving with your business needs.`,
    }
  ];

  return (
    <CommonAccordion
      title = "Our End-to-End Front-End Development<br/>Services for Businesses"
      subheding2 = "We provide end-to-end front-end development services tailored to your unique business goals:"
      items = {accordionData}
      footer = "Our modular architecture ensures your digital presence can grow without expensive overhauls."
    />
  );
};