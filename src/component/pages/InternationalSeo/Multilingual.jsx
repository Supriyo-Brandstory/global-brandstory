import React from 'react';
import CommonAccordion2 from '../common/CommonAccordion2';

export const Multilingual = () => {
  const accordionData = [
    {
      title: "Hreflang Tag Strategy & Implementation",
      content: `We make sure the right version of your site shows up in the right country. Our team handles hreflang tags carefully to avoid common mistakes like broken URLs or duplicate content. This helps users land on the right page in their language without confusion.`,
    },
    {
      title: "Localized Keyword Research & SERP Mapping",
      content: `People search differently depending on where they live even if they speak the same language. We work with native-speaking SEO experts to find the words people actually use, then match those keywords with local SERPs. The result? You rank where it counts.`,
    },
    {
      title: "Global Content Strategy by Region",
      content: `Every region deserves its own plan. We build custom content calendars based on local holidays, seasonal demand, and cultural trends. From Black Friday to Ramadan, your content stays relevant, timely, and ready to engage.`,
    },
    {
      title: "Multilingual On-Page SEO",
      content: `Translation alone isn’t enough. We optimize every on-page element, meta titles, descriptions, image alt text, structured data, and more, so it fits the local search landscape. It’s full SEO, done in the language your users think in.`,
    },
    {
      title: "Country-Specific Link Building",
      content: `Search engines value links from trusted local sources. That’s why we build links through regional news sites, directories, blogs, and forums that matter in each country. It builds real authority and drives traffic that’s more likely to convert.`,
    },
    {
      title: "Regional SERP Monitoring & Performance Tracking",
      content: `Google doesn’t rank the same way in every country. We track your performance on local search engines like google.ca, google.de, and google.co.jp to see what’s working and where there’s room to grow. You get a clear picture of results by region.`,
    },
    {
      title: "eCommerce International SEO",
      content: `Selling across borders means thinking local. We help you set up region-specific pricing, currency formats, shipping options, and language-ready product pages. We also manage merchant feed optimization to make sure your listings perform well in every market.`,
    },
    {
      title: "Translation vs. Transcreation",
      content: `Word-for-word translation doesn’t always carry the right tone. We use transcreation to rewrite your content with cultural context in mind. That way, your message feels natural and persuasive no matter the language or region.`,
    },
  ];

  return (
    <CommonAccordion2
      title="Multilingual SEO Services Catalog"
      description="Every country has its own search behavior, ranking factors, and user expectations. Here’s how we help you meet them all, one region at a time."
      items={accordionData}
      splitRatio={0.5}
    />
  );
};