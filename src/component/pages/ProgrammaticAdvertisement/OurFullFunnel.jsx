import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const OurFullFunnel = () => {
  const accordionData = [
    {
      title: "1. Display Ads",
      content: `We show your ads on many websites with smart targeting. This gives you big reach and helps more people know your brand.`,
    },
    {
      title: "2. Video Ads",
      content: `We create ads with video to catch attention. These play on YouTube, social feeds, and connected TV (CTV).`,
    },
    {
      title: "3. Native Ads",
      content: `We place ads that look like part of the page on popular sites. This makes your brand message feel natural and easy to notice.`,
    },
    {
      title: "4. Digital Out-of-Home (DOOH)",
      content: `We show ads on digital billboards and screens in real locations. This makes your brand visible to people while they are out.`,
    },
    {
      title: "5. Connected TV & OTT",
      content: `We reach premium audiences on streaming platforms. These ads play while people watch shows and movies online.`,
    },
    {
      title: "6. Audio Ads",
      content: `We place ads on Spotify, podcasts, and in-app audio. People hear your brand message while listening to music or shows.`,
    },
    {
      title: "7. Retargeting",
      content: `We remind people who already visited your site or clicked before. With personalized messages, we help turn them into customers.`,
    }
  ];

  return (
    <CommonAccordion
      title = "Our Full-Funnel Programmatic<br />Advertising Capabilities"
      subheding2 = "We cover Every Step Of The Marketing Funnel. Our Ads Help People See Your Brand, Think About Your Offer, And Take Action."
      items = {accordionData}
      footer = "Every channel is watched and improved all the time. This way, your ads get better results and higher Return On Ad Spend (ROAS)."
    />
  );
};