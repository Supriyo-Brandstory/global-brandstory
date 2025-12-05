import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const OurMedia = () => {
  const accordionData = [
    {
      title: "1. Programmatic Media Buying",
      content: `Automate bidding and placements across open exchanges with advanced targeting. This is the core of programmatic ad buying.`,
    },
    {
      title: "2. Display & Video Ad Buying",
      content: `Boost reach through attention-grabbing formats across top websites and streaming platforms.`,
    },
    {
      title: "3. OTT & Connected TV Inventory",
      content: `Reach viewers on premium streaming apps and smart TVs with highly-targeted video ads.`,
    },
    {
      title: "4. Mobile & In-App Inventory",
      content: `Serve ads within high-traffic apps and mobile environments where attention is highest.`,
    },
    {
      title: "5. Audio/Podcast Ad Buying",
      content: `Place your brand in contextually aligned podcast content and streaming audio platforms.`,
    },
    {
      title: "6. Direct Publisher Buys",
      content: `Secure guaranteed ad space from vetted publishers with strategic publisher partnerships.`,
    },
  ];

  
  const titleText = "Our Media Buying Services";
  const subheding2Text = "We Offer A Full Range Of Media Buying Services That Align To Your Goals, Vertical, And Customer Behavior. Every Solution Is Built For Clarity, Control, And Conversion.";
  const footerText = "From targeting to ad inventory management, our team ensures optimal pacing, placement, and performance across every format.";


  return (
    <CommonAccordion
      title={titleText}
      subheding2={subheding2Text}
      items={accordionData}
      footer={footerText}
    />
  );
};