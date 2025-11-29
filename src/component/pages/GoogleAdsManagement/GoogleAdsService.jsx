import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const GoogleAdsService = () => {
  const accordionData = [
    {
      title: "1. Search Ads",
      content: `Target intent-heavy keywords with structured Google Ads Management services that maximize ad rank and minimize cost-per-click.`,
    },
    {
      title: "2. Display Ads",
      content: `Reach audiences visually across the Display Network with branded storytelling and sharp segmentation strategies.`,
    },
    {
      title: "3. YouTube Ads",
      content: `Position your brand in high-attention video environments using skippable, bumper, and in-feed formats.`,
    },
    {
      title: "4. Performance Max Campaigns",
      content: `Automate channel allocation and asset matching using Google's AI to unlock incremental conversions.`,
    },
    {
      title: "5. App Install Ads",
      content: `Boost qualified app downloads through interest targeting, device segmentation, and store-optimized creatives.`,
    },
    {
      title: "6. Shopping Campaigns",
      content: `Precision product targeting using optimized feeds and dynamic remarketing for superior ROAS.`,
    },
    {
      title: "7. Remarketing Ads",
      content: `Build conversion loops by re-engaging past visitors across search, display, and video channels.`,
    },
    {
      title: "8. Conversion Tracking Setup",
      content: `Ensure every dollar spent is traceable with enhanced conversion signals and first-party data strategies.`,
    },
    {
      title: "9. A/B Testing & Ad Copy Optimization",
      content: `Continual refinement of ad copy, creatives, and landing page alignment using testing frameworks.`,
    },
  ];

  return (
    <CommonAccordion
      title="Google Ads Services That Drive Results"
      items={accordionData}
      footer=""
    />
  );
};
