import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const MakeYourContent = () => {
  const accordionData = [
    {
      title: "1. Traffic Growth",
      content: `Our campaigns have the power to drive significant visibility, boosting website visits by up to 300% within weeks through a mix of organic reach and targeted promotions.`,
    },
    {
      title: "2. Enhanced Brand Awareness",
      content: `We ensure your content is seen by the right people, decision-makers, industry leaders, and high-value prospects, strengthening your brand’s presence and credibility in the market.`,
    },
    {
      title: "3. Audience Engagement",
      content: `Beyond reach, we create interactive, shareable content that sparks conversations, encourages participation, and drives conversions.`,
    }
  ];

  return (
    <CommonAccordion
      title="Make Your Content Work Harder: Visibility That Delivers Results"
      subheding2="The benefits of content promotion go beyond simple exposure, they create tangible business outcomes:"
      items={accordionData}
      footer="When executed strategically, content promotion transforms passive consumption into measurable action."
    />
  );
};