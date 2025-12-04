import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const PlatformsWeSpecilize = () => {
  const accordionData = [
    {
      title: "1. Amazon Ads",
      content: `From Sponsored Products to Amazon DSP, we help you rank, retarget, and scale visibility fast, built around the A10 algorithm and your product goals.`,
    },
    {
      title: "2. Flipkart Product Ads",
      content: `We help Indian brands show up higher, sell more, and stay competitive with smart promotion timing and targeted bidding strategies.`,
    },
    {
      title: "3. Etsy PPC",
      content: `Perfect for creators and craft-based businesses. We refine keywords and budgets to help your products shine in a visual, passion-led marketplace.`,
    },
    {
      title: "4. eBay Sponsored Listings",
      content: `With category-specific shoppers and global reach, our eBay playbooks focus on high-intent search visibility and conversion-ready listings.`,
    },
    {
      title: "5. Walmart Marketplace",
      content: `For price-conscious and volume-driven audiences, we run performance-focused ads tuned to keyword trends and shopper behavior.`,
    },
    {
      title: "6. Regional & Niche Marketplaces",
      content: `Selling on a vertical-specific or B2B ecommerce platform? We bring tailored strategies that match platform logic with product fit, no copy-paste campaigns here.`,
    }
  ];

  return (
    <CommonAccordion
      title = "Platforms We Specialize In"
      subheding2 = "Every marketplace is its own ecosystem. Our marketplace advertising platforms expertise spans global giants and niche regional players. We tailor every campaign to how each platform works, not just what they offer."
      items = {accordionData}
    />
  );
};