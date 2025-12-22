import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const OurMethodology = () => {
  const accordionData = [
    {
      title: "1. Discovery & Audit",
      content: `We begin with a comprehensive audit of your app, your users, and the competitive landscape. By understanding your app’s current performance and your target audience’s behavior, we identify opportunities to improve visibility, engagement, and overall discoverability.`,
    },
    {
      title: "2. Keyword & Market Research",
      content: `Our team conducts in-depth research to identify high-impact keywords that drive organic growth. By analyzing search volume, competition, and relevance, we ensure your app ranks for the terms that matter most to potential users.`,
    },
    {
      title: "3. Visual Asset Optimization",
      content: `First impressions matter. We optimize app icons, screenshots, and preview videos to capture attention and encourage downloads. Our designs are tailored to both aesthetic appeal and strategic messaging to increase conversion rates.`,
    },
    {
      title: "4. On- & Off-Page Optimization",
      content: `We implement a holistic ASO strategy by combining metadata optimization—titles, subtitles, and keyword fields—with off-page management such as ratings, reviews, and download velocity. This integrated approach strengthens both search visibility and credibility.`,
    },
    {
      title: "5. Continuous Monitoring & Reporting",
      content: `ASO is an ongoing process. We track key performance indicators (KPIs), monitor rankings, and adjust strategies based on data insights and market trends. Regular reporting ensures you can measure success and maintain consistent growth over time.`,
    }
  ];

  return (
    <CommonAccordion
      title="Our Methodology"
      subheding2="Our approach to mobile app marketing is both strategic and adaptive."
      items={accordionData}
      footer="Every decision is backed by data and insights, ensuring your ASO efforts translate into real-world results."
    />
  );
};