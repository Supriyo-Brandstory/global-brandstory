import React from 'react';
import CommonAccordion2 from '../common/CommonAccordion2';

export const GetPostingService = () => {
  const accordionData = [
    {
      title: "Industry Authority Guest Posts",
      content: `We help you earn placements on well-established websites that are respected in your space. These are the kind of platforms your audience already trusts. The result? Strong backlinks, brand credibility, and content that search engines take seriously.`,
    },
    {
      title: "Niche Blogger Outreach",
      content: `Sometimes, smaller blogs make a bigger impact. We work with dedicated bloggers who write directly for your niche. These writers have loyal readers, and they speak the same language as your customers. This is perfect for brands that care more about relevance than reach.`,
    },
    {
      title: "Sponsored Editorials on High-Traffic Sites",
      content: `Need something more visible? Our team helps place your branded stories on large news sites, publisher networks, or media platforms. These pieces are written like genuine content, not press releases, helping you stand out in a natural and authentic way.`,
    },
    {
      title: "Traffic-Driven Guest Posts",
      content: `If you’re focused on driving more visitors, we identify blogs and websites with steady, organic traffic and real engagement. These posts help push your rankings, bring in qualified leads, and build lasting visibility.`,
    },
    {
      title: "Guest Blogging for eCommerce Brands",
      content: `We place your product-led content on shopping blogs, review websites, and gift guides. These platforms help shoppers discover, compare, and trust your products, even before they visit your website.`,
    },
    {
      title: "SaaS and B2B Tech-Focused Guest Posts",
      content: `For SaaS or B2B tech brands, we write educational and expert-level articles that get featured on tech blogs, industry journals, and software directories. These placements help your brand become a known name in the problem-solving journey of your customers.`,
    },
    {
      title: "Local Guest Posting for Regional Visibility",
      content: `For businesses targeting city-based or local audiences, we work with regional blogs, business directories, and local publishers. These guest posts help your website rank better in local searches and support community awareness.`,
    },
    {
      title: "Guest Posts with Built-In Content Syndication",
      content: `Want to stretch the impact of your content? Along with blog placements, we offer syndication options where your article gets reshared or republished on platforms like LinkedIn, Medium, and other industry news feeds, giving you extended reach without extra effort.`,
    },
  ];

  return (
    <CommonAccordion2
      title="Guest Posting Services That Fit Your Growth Plan"
      description="Every business has a different reason for using guest posting. Some want a stronger search presence. Others want brand recognition. Some want both. That’s why we offer a range of guest posting options that align with your current growth goals."
      items={accordionData}
      splitRatio={0.5}
    />
  );
};