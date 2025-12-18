import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const HowOur = () => {
  const accordionData = [
    {
      title: "1. Strategic Mobile App Planning",
      content: `We start by defining a clear roadmap that aligns with your business goals and target audience needs. Every feature, workflow, and design choice is carefully planned to deliver measurable outcomes and maximize ROI.`,
    },
    {
      title: "2. UX/UI Design & Prototyping",
      content: `Using Jetpack Compose, our designers create intuitive interfaces and interactive prototypes. This ensures users navigate your app effortlessly, while prioritizing engagement, accessibility, and a visually compelling experience.`,
    },
    {
      title: "3. High-Performance Native Development",
      content: `Our developers build native Android apps using Kotlin and modular architecture. This approach guarantees scalability, maintainability, and optimal performance across devices, providing a fast and smooth user experience.`,
    },
    {
      title: "4. API Integration & Backend Connectivity",
      content: `We seamlessly connect your app to third-party services, cloud platforms, and internal systems. This enables smooth data flow, enhanced functionality, and a cohesive experience across your digital ecosystem.`,
    },
    {
        title: "5. Security & Compliance",
        content: `Protecting user and business data is critical. We implement enterprise-grade security measures, including data encryption, secure authentication, and adherence to compliance best practices.`,
    },
    {
        title: "6. Offline Functionality & Smart Syncing",
        content: `Our apps remain functional even without constant internet access. Smart syncing ensures data consistency and a seamless user experience under any network conditions.`,
    },
    {
        title: "7. Monetization & Revenue Strategy",
        content: `We help you generate revenue through subscriptions, in-app purchases, or advertising mechanisms while ensuring your app provides genuine value to users.`,
    },
    {
        title: "8. Post-Launch Maintenance",
        content: `Launching the app is just the beginning. We provide continuous optimization, performance monitoring, and app store optimization (ASO) to maintain visibility, enhance engagement, and support long-term growth.`,
    }
  ];

  return (
    <CommonAccordion
      title = "How Our Android App Development Services<br/>Help Businesses Connect With Mobile Users"
      subheding2 = "We specialize in custom Android app development tailored to your business goals.<br/>Our services include:"
      items = {accordionData}
    />
  );
};