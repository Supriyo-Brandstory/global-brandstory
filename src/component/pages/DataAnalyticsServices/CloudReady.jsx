import React from 'react';
import CommonAccordion2 from '../common/CommonAccordion2';

export const CloudReady = () => {
  const accordionData = [
    {
      title: "Sync data across platforms with cloud pipelines",
      content: `Whether you're using CRMs, ERPs, marketing tools, or custom apps, we connect them all, so your data flows smoothly from one place to another.`,
    },
    {
      title: "Work with millions of records without slowdown",
      content: `No lag. No crashing. We build architecture that handles high-volume data with ease.`,
    },
    {
      title: "Keep your data clean and well-organized",
      content: `Jumbled, duplicate, or outdated data slows everything down. We help you set clear rules so everything stays in order and easy to use.`,
    },
  ];

  return (
    <CommonAccordion2
      title="Cloud-Ready<br/>Analytics That Grow With You"
      description="As your data grows, your systems should keep up. Our big data and analytics services are built for scale."
      items={accordionData}
      splitRatio={0.5}
    />
  );
};