import React from 'react';
import CommonAccordion2 from '../common/CommonAccordion2';

export const ReachTheRight = () => {
  const accordionData = [
    {
      title: "Organic Social Media",
      content: `We cultivate authentic engagement across platforms your audience already loves. From thoughtful posts to consistent community interactions, organic social helps build lasting relationships and keeps your brand top of mind.`,
    },
    {
      title: "Influencer Partnerships",
      content: `People trust people. By collaborating with influencers who already have the ear of your target audience, we expand your reach and add a layer of credibility that paid advertising alone can’t achieve.`,
    },
    {
      title: "Email Campaigns",
      content: `Email remains one of the most powerful tools in digital marketing. We craft personalized campaigns that deliver relevant content directly to your subscribers’ inboxes, driving both loyalty and conversions.`,
    },
    {
      title: "Content Syndication & PR",
      content: `Authority matters. Through syndication and strategic PR placements, we get your content featured in trusted industry publications, boosting both brand visibility and credibility.`,
    },
    {
      title: "Paid Placements",
      content: `Sometimes, the fastest way to scale reach is through paid promotion. We amplify your best-performing content with highly targeted campaigns designed to put your brand in front of new, relevant audiences.`,
    },
  ];

  return (
    <CommonAccordion2
      title="Reach the Right Audience Through Multiple Channels"
      description="Promoting content effectively means being where your audience is. Our content promotion channels include:"
      items={accordionData}
      splitRatio={0.5}
    />
  );
};