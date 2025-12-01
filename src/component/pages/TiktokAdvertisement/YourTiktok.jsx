import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const YourTiktok = () => {
  const accordionData = [
    {
      title: "1. Core Capabilities Include",
      content: `We start by reviewing your website and looking at your competitors.
      <ul>
        <li><b>Creative Strategy & Development</b> – TikTok-native storytelling that matches your brand’s tone</li>
        <li><b>Precision Audience Targeting</b> – Demographics, interests, behaviors, and lookalike audiences</li>
        <li><b>Budget Optimization</b> – Ensuring every dollar is spent where it delivers the highest ROI</li>
        <li><b>Advanced Analytics & Reporting</b> – Transparent performance tracking with actionable insights</li>
      </ul>`,
    },
    {
      title: "2. Ad Formats Mastered",
      content: `
      <ul>
        <li><b>In-Feed Ads</b> – Blend naturally with organic content</li>
        <li><b>Spark Ads</b> – Boost existing high-performing TikTok posts</li>
        <li><b>Branded Effects</b> – Create interactive, immersive brand experiences</li>
        <li><b>TopView Ads</b> – Premium placement for maximum visibility</li>
      </ul>`,
    }
  ];

  return (
    <CommonAccordion
      title="Your TikTok Marketing Goals, Our<br/> Advertising Expertise"
      subheding2="As A Leading TikTok Advertising Agency, Every Element Of The Campaign Is Managed To Deliver Measurable Outcomes:"
      items={accordionData}
      footer=""
    />
  );
};