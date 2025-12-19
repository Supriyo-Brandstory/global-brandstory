import React from 'react';
import CommonAccordion2 from '../common/CommonAccordion2';

export const HowWeDeliver = () => {
  const accordionData = [
    {
      title: "Phase I: Strategic Discovery & Framework Selection",
      content: `Our team conducts market research, competitor analysis, and user behavior studies to understand what will deliver the most impact. Based on this understanding, we carefully select the framework that best suits your project: Flutter for visually rich, high-performance apps or React Native for scalable, web-friendly solutions.`,
    },
    {
      title: "Phase II: High-Fidelity UX/UI Design",
      content: `Our designers focus on crafting a seamless, intuitive experience across both iOS and Android platforms. We create reusable design components and establish a cohesive design system to maintain visual consistency and brand identity. Each screen is carefully designed to guide users effortlessly, with interactive prototypes to validate flows before development begins.`,
    },
    {
      title: "Phase III: Single-Codebase Development",
      content: `During development, we build your app using a single codebase, which accelerates development and simplifies ongoing maintenance. Our developers work with Dart, JavaScript/TypeScript, Flutter, and React Native, implementing modern architectural practices such as MVVM for modularity and scalability.`,
    },
    {
      title: "Phase IV: Post-Launch Optimization & Governance",
      content: `Launching the app is only the beginning. We continue to monitor its performance, track user behavior, and optimize features to enhance engagement. Regular updates, bug fixes, and enhancements keep your app competitive, while App Store Optimization (ASO) improves discoverability and downloads.`,
    },
  ];

  return (
    <CommonAccordion2
      title="How We Deliver Cross-Platform App Development Projects"
      description="Our four-phase approach ensures every project is strategically executed and technically flawless."
      items={accordionData}
      splitRatio={0.5}
    />
  );
};