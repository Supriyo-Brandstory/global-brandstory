import React from 'react';
import CommonAccordion2 from '../common/CommonAccordion2';

export const PinterestSeo = () => {
  const accordionData = [
    {
      title: "Keyword-Rich Titles & Descriptions", //
      content: `We add the right keywords to every pin’s title and description. This helps your pins show up when people search for related ideas, products, or inspiration on Pinterest. The better your pins are optimized, the more likely they are to be discovered by people who are ready to engage.`, //
    },
    {
      title: "Well-Structured Boards", //
      content: `We organize your pins into boards that match your campaigns and brand themes. This makes it easier for users to find your content, explore more of your pins, and understand your brand story. Clear boards also encourage users to follow your channel and keep coming back.`, //
    },
    {
      title: "Organic + Paid Synergy", //
      content: `We combine SEO efforts with paid Pinterest ads so your brand appears in search results and promoted placements at the same time. This dual approach increases visibility, reinforces your messaging, and helps you reach more people while maximizing engagement and conversions.`, //
    },
  ];

  return (
    <CommonAccordion2
      title="Pinterest SEO + Ads" //
      description="Paid and organic strategies work best together. We optimize pins for Pinterest SEO.<br/>This helps your brand appear in search results and ads simultaneously." //
      items={accordionData}
      splitRatio={0.5}
    />
  );
};