import React from 'react';
import CommonAccordion2 from '../common/CommonAccordion2';

export const StepByStep = () => {
  const accordionData = [
    {
      title: "Phase I: Strategic Discovery & Framework Selection",
      content: `We start by thoroughly understanding your business objectives, target audience, and feature requirements. Based on this analysis, we select the most suitable framework for your app: Flutter, ideal for visually rich, near-native experiences, or React Native, perfect for fast development within a web-compatible ecosystem.`,
    },
    {
      title: "Phase II: High-Fidelity UX/UI Design",
      content: `Our designers focus on crafting a seamless, intuitive experience across all platforms. We create reusable components and a cohesive design system to maintain consistency, while designing interactions that feel natural on both iOS and Android. Every screen is optimized to reduce friction, enhance usability, and maximize user engagement, ensuring a polished experience from start to finish.`,
    },
    {
      title: "Phase III: High-Performance Development",
      content: `Using a single shared codebase, our developers bring the design to life with speed and efficiency. This approach accelerates development cycles, simplifies maintenance, and delivers near-native performance for most use cases. We also integrate advanced APIs and device hardware to provide smooth functionality and a responsive, reliable user experience across platforms.`,
    },
    {
      title: "Phase IV: Post-Launch Optimization & Governance",
      content: `Launching your app is just the beginning. We provide continuous support, including regular updates, bug fixes, and performance monitoring. App Store Optimization (ASO) ensures your app remains visible, discoverable, and competitive, while analytics-driven insights allow ongoing enhancements that align with evolving user expectations and business goals.`,
    },
  ];

  return (
    <CommonAccordion2
      title="Step-by-Step Hybrid Mobile App Development Process"
      description="We follow a proven, four-phase approach to hybrid app development, ensuring efficiency, quality, and business impact."
      items={accordionData}
      splitRatio={0.5}
    />
  );
};