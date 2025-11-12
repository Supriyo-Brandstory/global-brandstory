import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const WhatWeDo = () => {
  const accordionData = [
    {
      title: "Guest Posting That Builds Credibility and Reach",
      content: `We identify high-authority blogs and platforms in your niche, then write helpful, well-structured content that feels native to their audience. These articles include a link back to your site, not as an afterthought, but in a way that supports the story and adds value. The result? You gain referral traffic, stronger SEO signals, and long-term visibility in spaces that matter to your audience.`,
    },
    {
      title: "Digital PR and News Placements That Earn Attention",
      content: `Got expert insights, a company update, or original data? We help you turn that into a press-worthy story. Using platforms like HARO and our relationships with journalists, we pitch your story to trusted media outlets and niche publications. When these stories get published, they include high-quality backlinks that elevate your brand's authority in both search engines and in your industry.`,
    },
    {
      title: "Broken Link Building That Turns Dead Ends Into Wins",
      content: `There are thousands of broken links across the web. We use tools to find those pages, especially on websites relevant to your space. Then, we reach out and offer your content as a replacement, fixing their user experience while earning you a meaningful backlink. It’s a simple, effective, and highly appreciated tactic that delivers steady results.`,
    },
    {
      title: "Niche Edits and Link Insertions With Real Context",
      content: `Instead of writing new content, we find existing articles that already get traffic and rank well. Then, we identify a natural spot where your link would fit in without disrupting the flow. It could be a blog post, guide, or resource page. This way, your link becomes part of a live conversation—not just a footnote.`,
    },
    {
      title: "Local SEO Link Building to Strengthen Local Presence",
      content: `If your business depends on local visibility, like showing up on Google Maps or "near me" searches, we help you earn backlinks from city-specific blogs, business directories, local news sites, and community platforms. These local links play a big role in pushing your site higher for location-based searches.`,
    },
    {
      title: "SaaS & Tech Link Campaigns That Speak the Right Language",
      content: `We run specialized outreach for SaaS and tech companies, where audiences are often developers, product managers, or tech-savvy buyers. That means placing links in product comparisons, API-related articles, startup roundups, and thought leadership blogs. These campaigns help you earn both trust and traffic from the people who matter most.`,
    },
    {
      title: "Link Reclamation and Technical Audits to Recover Missed Value",
      content: `Sometimes your brand is mentioned online, but not linked. Or maybe your site has old backlinks pointing to broken URLs. We track those down, request proper links where needed, and set up redirects to preserve SEO value. This helps you regain authority and plug gaps that most companies don’t even know exist.`,
    },
    {
      title: "Link Velocity Strategy to Grow Naturally and Safely",
      content: `We tailor a link velocity plan based on how new or aged your site is, how competitive your niche is, and what your growth goals are. That way, you avoid any red flags from search engines while still moving forward steadily.`,
    },
    {
      title: "Need Industry-Specific Backlinks?",
      content: `Whether you’re in eCommerce, Healthcare, Education, or B2B SaaS, our link building services can be fine-tuned to fit your audience and market. Every outreach campaign is customized, so your brand gets featured in places that bring actual ROI.`,
    },
  ];

  return (
    <CommonAccordion
      title="Our Link Building Services – A Closer Look at What We Do"
      subheding2="We don’t just build links — we build authority, trust, and sustainable growth. Every strategy is white-hat, data-driven, and designed to deliver long-term SEO value."
      items={accordionData}
    />
  );
};  