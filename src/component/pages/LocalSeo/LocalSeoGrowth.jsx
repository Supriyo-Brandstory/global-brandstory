import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const LocalSeoGrowth = () => {
  const accordionData = [
    {
      title: "Local SEO Audit & Opportunities",
      content: `We start by checking your local SEO. We look at your Google Business Profile, your business info (name, address, phone), your website setup, and how you compare with competitors. You get a simple report, a list of things to fix, and a score that shows how strong your local SEO is right now.`,
    },
    {
      title: "Local Keywords & Content",
      content: `Next, we find the keywords your local customers use. We check what your competitors are doing and plan pages, blogs, and FAQs around those keywords. This makes it easier for people in your area to find you online.`,
    },
    {
      title: "Google Business Profile & Citations",
      content: `Your Google Business Profile is like your online shop window. We make sure it’s complete and updated with the right info, photos, and posts. We also fix your business details across online directories so customers always see the correct name, address, and phone number.`,
    },
    {
      title: "Local Links & Reputation",
      content: `We help you build trust by getting links from local websites, partners, and directories. We also work on your online reviews — asking happy customers to leave feedback and helping you reply to reviews. This builds your reputation and makes your business stand out.`,
    },
    {
      title: "Ongoing Optimization & Reporting",
      content: `Local SEO needs regular updates. We track your keywords, calls, and clicks, and adjust the plan as things change. Each month, you get a simple report that shows what’s working and what we are improving.`,
    },
  ];

  return (
    <CommonAccordion
      title="Mapping Out Your Local SEO Growth"
      subheding2=""
      items={accordionData}
      footer=""
    />
  );
};