import React from 'react';
import CommonAccordion2 from '../common/CommonAccordion2';

export const OurProgrametic = () => {
  const accordionData = [
    {
      title: "Discovery",
      content: `We start by understanding your brand and goals. We find out what you want to achieve and how to measure success.`,
    },
    {
      title: "Data Setup",
      content: `We use your own data, other audience data, and CRM information to make the ads more accurate.`,
    },
    {
      title: "Creative Strategy",
      content: `We make ads that change for each person and work well on all devices. This includes Dynamic Creative Optimization (DCO) and responsive designs.`,
    },
    {
      title: "Platform Execution",
      content: `We launch your ads on all platforms, like DSPs, connected TV (CTV), audio, and digital billboards (DOOH).`,
    },
    {
      title: "Reporting",
      content: `We watch the results in real time. You can see clicks, leads, and Return On Ad Spend (ROAS).`,
    },
    {
      title: "Iteration",
      content: `We improve ads continuously. We adjust targeting, messages, and bids so your campaigns get better and better.`,
    },
  ];

  return (
    <CommonAccordion2
      title="Our Programmatic Process – From Strategy to Scale"
      description="A Successful Campaign Is Methodical. Our Programmatic Ad Process Ensures Performance At Every Step:"
      items={accordionData}
      splitRatio={0.5}
    />
  );
};