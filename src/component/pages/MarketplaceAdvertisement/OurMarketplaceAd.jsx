import React from 'react';
import CommonAccordion2 from '../common/CommonAccordion2';

export const OurMarketplaceAd = () => {
  const accordionData = [
    {
      title: "Keyword Research & Trend Mapping",
      content: `We start by identifying what your customers are really typing into the search bar. This includes long-tail keywords, seasonal trends, and product-specific phrases. The goal? Get you discovered by people who are ready to buy.`,
    },
    {
      title: "Competitor Benchmarking",
      content: `We break down how your top competitors are winning traffic and where they are vulnerable. From pricing tactics to keyword gaps, we reverse-engineer their strategy. Then we build smarter campaigns designed to outperform them.`,
    },
    {
      title: "Product Listing Optimization",
      content: `Your listing is the storefront. We make sure it’s built to convert. From SEO-rich titles to persuasive bullet points and A+ content, every detail is fine-tuned. We also optimize backend keywords for better platform search indexing.`,
    },
    {
      title: "Ad Campaign Setup & Bid Management",
      content: `We don’t guess. We plan every campaign structure around budget, SKU type, and performance goals. Our bid management adapts to competition, user behavior, and changing CPC trends. This ensures every dollar you spend is aligned with return, not just reach.`,
    },
    {
      title: "Creative A/B Testing",
      content: `What gets clicks today might not work tomorrow. This is why we test constantly. Thumbnails, ad copy, banners, CTA positioning, we test every visual and message variant. The outcome? Higher CTRs, better engagement, and data that fuels smarter creative.`,
    },
    {
      title: "Ongoing Performance Monitoring",
      content: `We don’t set and forget. We track, tweak, and scale every week. Real time reporting on RoAS, CTR, and ACoS helps us stay one step ahead of performance dips. If the numbers shift, so does the strategy, fast and without guesswork.`,
    },
  ];

  return (
    <CommonAccordion2
      title="Our Marketplace Ad Strategy: Built to Win, Tracked to Scale"
      description="A strong strategy doesn’t just boost visibility, it builds a reliable, scalable engine turning traffic into actual sales. Our approach to marketplace advertising strategy is hands-on, data-first, and fully aligned with how modern buyers shop. Here is how we build it:"
      items={accordionData}
      splitRatio={0.5}
    />
  );
};