import React from 'react';
import CommonAccordion2 from '../common/CommonAccordion2';

export const AmplifyReach = () => {
  const accordionData = [
    {
      title: "Influencer Partnerships",
      content: `We collaborate with micro and mid tier creators to generate genuine engagement. Their voices amplify your brand story while building trust with niche audiences globally.`,
    },
    {
      title: "User Generated Content",
      content: `Curated UGC content boosts authenticity and audience confidence. Campaigns deliver measurable results, including up to <b>12x engagement uplift</b> through community driven storytelling.`,
    },
    {
      title: "Paid Social Advertising",
      content: `We run Meta Ads, LinkedIn Ads, Instagram promotions, and TikTok ads to drive targeted reach. Campaigns focus on engagement, traffic, leads, and retargeting to maximize ROI.`,
    },
    {
      title: "Integrated Organic & Paid Strategy",
      content: `By bridging organic and paid strategies, we ensure every post, ad, and campaign contributes to higher visibility and conversions. Results are measurable, impactful, and scalable.`,
    },
  ];

  return (
    <CommonAccordion2
      title="Amplify Reach with Influencer and Paid Social"
      description="We combine influencer marketing, UGC campaigns, and paid social advertising to maximize brand reach and engagement. Our strategies connect brands with authentic audiences while delivering measurable business outcomes. Every campaign is planned to resonate and convert across platforms.<br/><br/>Our approach amplifies reach, builds trust, and drives tangible results. Every strategy we plan focuses on turning engagement into growth."
      items={accordionData}
      splitRatio={0.5}
    />
  );
};