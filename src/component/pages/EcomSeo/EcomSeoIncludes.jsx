import React from 'react';
import CommonAccordion2 from '../common/CommonAccordion2';

export const EcomSeoIncludes = () => {
  const accordionData = [
    {
      title: "Keyword Research for Products",
      content: `
        We find the exact words your customers use while searching. This includes not just common terms but also longer, specific ones that often lead to sales.
      `,
    },
    {
      title: "Technical SEO & Site Fixes",
      content: `
        We make sure search engines can easily read your site. That means fixing broken links, missing tags, slow pages, and setting up a clear site structure for smooth navigation.
      `,
    },
    {
      title: "Product & Category Page SEO",
      content: `
        We optimize product and category pages with clear titles, original descriptions, and useful details that help your products show better in search results.
      `,
    },
    {
      title: "Clean URLs & Internal Links",
      content: `
        We create simple, SEO-friendly URLs and connect pages smartly. This helps both visitors and search engines move easily through your store.
      `,
    },
    {
      title: "Mobile Optimization",
      content: `
        Most people shop on mobile, so your site needs to be fast and user-friendly on phones. We make sure it meets Google’s standards for speed and performance.
      `,
    },
    {
      title: "Content & Blog Strategy",
      content: `
        We help you create helpful content like guides, comparisons, and tips. This builds trust, attracts visitors, and earns backlinks that improve rankings.
      `,
    },
    {
      title: "Conversion Rate Optimization",
      content: `
        Getting traffic is good, but turning visitors into buyers is better. We improve page design, product layout, calls-to-action, and checkout flow so more people complete purchases.
      `,
    },
    {
      title: "Monthly Reports",
      content: `
        Every month, we share simple reports showing keyword growth, traffic, and the results of our SEO work. You’ll always know what’s working.
      `,
    },
  ];

  return (
    <CommonAccordion2
      title="What Do Our eCommerce SEO Services Include?"
      description="Our eCommerce SEO services give your online store everything it needs to grow. We don’t use fixed plans because every store is different. We shape our services to match your goals, platform, and audience."
      items={accordionData}
      splitRatio={0.5}
    />
  );
};