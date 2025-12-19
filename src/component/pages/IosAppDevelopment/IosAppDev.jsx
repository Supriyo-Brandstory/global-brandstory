import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const IosAppDev = () => {
  const accordionData = [
    {
      title: "1. Custom iOS App Development",
      content: `We craft tailored iPhone apps using Swift, focusing on high performance, flexibility, and modular architecture. Each app is designed to be scalable, maintainable, and adaptable to your evolving business needs, ensuring long-term value.`, //
    },
    {
      title: "2. Enterprise iOS Solutions",
      content: `For large organizations, we build robust, secure apps that integrate seamlessly with Apple’s ecosystem. Our enterprise-grade solutions support complex workflows, internal processes, and stringent security protocols, ensuring reliability and compliance at scale.`, //
    },
    {
      title: "3. Native App Development",
      content: `By harnessing native frameworks like SwiftUI, Core Data, Core ML, and ARKit, we deliver apps that are fast, responsive, and feature-rich. Users enjoy smooth interactions, while businesses benefit from optimized performance and cutting-edge capabilities.`, //
    },
    {
      title: "4. iPhone App Strategy",
      content: `We align app development with business objectives through deep market research, competitor analysis, and mobile strategy insights. Every feature, workflow, and design choice is strategically planned to meet user expectations and drive measurable results.`, //
    },
    {
      title: "5. App Store Optimization (ASO)",
      content: `Our ASO strategy maximizes app discoverability and downloads. Through targeted keyword research, visually compelling design assets, and persuasive descriptions, we ensure your app stands out in the App Store and attracts the right audience.`, //
    }
  ];

  return (
    <CommonAccordion
      title = "iOS App Development Services That Help<br/>Brands Reach and Retain Customers" //
      subheding2 = "We provide end-to-end iOS app development, covering every stage from strategy to post-launch optimization. Our services include:" //
      items = {accordionData}
    />
  );
};