import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const Services = () => {
  const accordionData = [
    {
      title: "1. Hybrid App Strategy",
      content: `We begin by aligning your app vision with your business objectives, analyzing your target audience, competitors, and technical requirements. This strategy ensures that the chosen framework and development approach deliver maximum impact and efficiency.`,
    },
    {
      title: "2. Flutter Development",
      content: `Our team builds visually stunning apps with Flutter, offering near-native performance across iOS and Android devices. This approach enables fast deployment while maintaining a seamless and engaging user experience.`,
    },
    {
      title: "3. React Native Development",
      content: `We leverage React Native to create apps within a web-friendly ecosystem, which allows for rapid development, easier maintenance, and scalable solutions that grow with your business.`,
    },
    {
      title: "4. UX/UI Design",
      content: `Our designers craft high-fidelity interfaces that feel native on all devices. Consistent interactions, intuitive navigation, and visually appealing elements ensure users enjoy a seamless, engaging experience.`,
    },
    {
      title: "5. App Maintenance & Optimization",
      content: `We provide ongoing support post-launch, including continuous updates, bug fixes, and App Store Optimization (ASO). This proactive approach ensures your app remains competitive, visible, and high-performing over time.`,
    },
    {
      title: "6. API & Hardware Integration",
      content: `We seamlessly connect your app with third-party services, back-end systems, and device hardware, delivering smooth functionality and reliable performance that enhances the overall user experience.`,
    }
  ];

  return (
    <CommonAccordion
      title="Services That Make Hybrid Mobile App Development Simple and Effective"
      subheding2="We focus on creating apps that are fast, reliable, and user-friendly. Our services include:"
      items={accordionData}
     footer="" 
    />
  );
};