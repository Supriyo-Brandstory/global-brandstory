import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const FiveStep = () => {
  const accordionData = [
    {
      title: "Step 1: Check Your Website and Competitors",
      content: `
        We start by reviewing your website and looking at your competitors.
        <br><br/>
        <ul>
          <li><b>Crawl and heatmap check</b> – We see how search engines move through your site and identify pages they may miss or spend too much time on.</li>
          <li><b>Site layout and page check</b> – We find broken links, errors, and issues in your website design.</li>
          <li><b>Competitor check</b> – We analyze which keywords your competitors rank for that you don’t, so we can spot opportunities.</li>
        </ul>
      `,
    },
    {
      title: "Step 2: Plan Topics and Keywords",
      content: `
        Next, we decide what your website should focus on and which keywords people search for.
        <br><br/>
        <ul>
          <li><b>Group keywords</b> – We organize keywords into groups. Each group has a main page and supporting pages.</li>
          <li><b>Global vs. local</b> – For businesses in multiple countries, we create separate keyword lists for each location to target the right audience.</li>
        </ul>
      `,
    },
    {
      title: "Step 3: Fix SEO on Your Pages",
      content: `
        We improve your website content so it works well for both people and search engines.
        <br><br/>
        <ul>
          <li><b>SEO templates</b> – Add titles, meta descriptions, and structured data automatically to save time and maintain consistency.</li>
          <li><b>Global website fixes</b> – Apply hreflang, canonical tags, and pagination rules so search engines understand your site correctly.</li>
        </ul>
      `,
    },
    {
      title: "Step 4: Build Trust With Backlinks",
      content: `
        Good content alone isn’t enough. Websites need links from trusted sources to gain authority.
        <br><br/>
        <ul>
          <li><b>Link campaigns</b> – Secure links from news sites, industry sites, and experts to boost credibility.</li>
          <li><b>HARO and co-branding</b> – Answer media questions, create partner content, and share original data to earn natural links.</li>
        </ul>
      `,
    },
    {
      title: "Step 5: Keep Improving",
      content: `
        We continuously track, test, and optimize your website.
        <br><br/>
        <ul>
          <li><b>Dashboards</b> – Monitor how users interact with your pages and see which areas need improvement.</li>
          <li><b>A/B testing</b> – Test different headlines, buttons, and page layouts to see what works best.</li>
          <li><b>Personalization</b> – Show tailored messages to new visitors and returning users to improve engagement.</li>
        </ul>
      `,
    },
  ];

  return (
    <CommonAccordion
      title="Our 5-Step Enterprise SEO System That Drives Long-Term Growth"
      subheding2="Big websites have many pages and teams. To make them work better, we follow five simple steps. This helps your site get more visitors, stay organized, and grow over time."
      items={accordionData}
    />
  );
};