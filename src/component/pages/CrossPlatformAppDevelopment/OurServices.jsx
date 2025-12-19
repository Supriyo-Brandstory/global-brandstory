import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const OurServices = () => {
  const accordionData = [
    {
      title: "1. Flutter Development",
      content: `We create visually stunning, high-performance apps using Flutter, allowing a single codebase to deliver near-native experiences on both iOS and Android. This approach reduces development time and costs while ensuring a smooth, responsive, and engaging user experience across platforms.`,
    },
    {
      title: "2. React Native Development",
      content: `Our team builds efficient, scalable apps using React Native, ideal for organizations familiar with web technologies. This framework allows rapid deployment without compromising performance or functionality, making it easier to maintain and iterate over time.`,
    },
    {
      title: "3. Hybrid App Development",
      content: `We offer cost-effective solutions that maintain consistent performance and a native-like feel across multiple platforms. These apps enable businesses to reach a broader audience while optimizing development resources.`,
    },
    {
      title: "4. Mobile App Strategy",
      content: `Every app is developed with a clearly defined strategy that aligns your business objectives with user needs. We analyze market trends, competitor benchmarks, and audience behavior to guide design and feature decisions that maximize engagement and ROI.`,
    },
    {
      title: "5. UX/UI Design",
      content: `Our designers focus on creating cohesive, intuitive interfaces that feel native on any device. By prioritizing usability, accessibility, and visual storytelling, we deliver an experience that delights users and drives adoption.`,
    },
    {
      title: "6. Post-Launch Optimization",
      content: `Launching the app is just the beginning. We provide continuous support, including bug fixes, feature enhancements, performance tuning, and App Store Optimization (ASO), ensuring your app remains competitive, visible, and user-friendly over time.`,
    }
  ];

  return (
    <CommonAccordion
      title = "Our Services That Help Brands Connect<br/>With Users and Achieve Goals"
      subheding2 = "We offer end-to-end cross-platform app development, tailored to your business goals:"
      items = {accordionData}
    />
  );
};