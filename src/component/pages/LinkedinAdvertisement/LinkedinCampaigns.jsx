import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const LinkedinCampaigns = () => {
  const accordionData = [
    {
      title: "1. Sponsored Content & InMail",
      content: `We show your ads to people in their LinkedIn feed or inbox. This helps them see you and know about your brand.`,
    },
    {
      title: "2. LinkedIn Retargeting",
      content: `Some people look but don’t act. We show ads again to these people so they remember you and come back.`,
    },
    {
      title: "3. Lead Gen Forms",
      content: `We use easy forms inside LinkedIn. People can share their details fast. This gives you good leads without extra steps.`,
    },
    {
      title: "4. A/B Testing",
      content: `We try two or more versions of your ads. We see which one works better and keep the best one.`,
    },
    {
      title: "5. Creative + Copy Production",
      content: `We make nice pictures and simple words for your ads. This makes people stop, look, and click.`,
    },
    {
      title: "6. Campaign Monitoring",
      content: `We watch your ads every day. We keep making small changes so you get more leads and better results.`,
    }
  ];

  return (
    <CommonAccordion
      title = "LinkedIn Campaigns Built Around Your Business Goals"
      subheding2 = "BrandStory makes ads on LinkedIn to help your business grow. We keep it simple and clear so you can get more leads and more results."
      items = {accordionData}
      footer = "When You Partner With The Best TikTok Ad Company, Along With Chasing Trends, You Are Setting Them, With A Team That Turns Every Scroll Into Measurable Impact."
    />
  );
};