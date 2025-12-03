import React from 'react';
import CommonTwoCard from '../common/CommonTwoCard';

export const AdTypes = () => {
  const data = {
    heading: "Ad Types That Drive Results on Reddit",
    subheading:
      "At BrandStory, We Choose Ad Formats Carefully To Match Your Campaign Goals. Each Type Is Designed To Get Attention, Drive Engagement, And Grow Your Brand While Respecting Reddit Communities.",
    cards: [
      {
        title: "Promoted Posts",
        description:
          "These Can Be Simple Pictures, Videos, Or Carousel Posts That Slide Through Multiple Images. They Are Perfect For Creating Engagement With Your Audience.",
      },
      {
        title: "Conversation Ads",
        description:
          "These Ads Tell A Story And Invite Users To Reply, Making The Ad Experience Interactive And Personal.",
      },
      {
        title: "Takeover Ads",
        description:
          "These Ads Appear On The Reddit Homepage For A Big, Noticeable Impact, Ideal For Special Brand Moments.",
      },
      {
        title: "Reddit Pixel Tracking",
        description:
          "This Tool Helps Measure Conversions, Retarget Users, And Make Campaigns Better Over Time.",
      },
    ],
  };

  return (
    <>
      <CommonTwoCard {...data} titleClass="text-center" cardLayout="two-col" />
      <p className='max-w-[1200px] text-center mx-auto mb-30'>Every Ad Format We Use Is Chosen To Get The Best ROI While Keeping The Community Happy And Engaged.</p>
    </>
  );
};