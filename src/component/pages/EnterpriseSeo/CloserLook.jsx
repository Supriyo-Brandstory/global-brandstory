import React from 'react';
import CommonAccordion2 from '../common/CommonAccordion2';

export const CloserLook = () => {
  const accordionData = [
    {
      title: "Make Your Site Work in Every Country and Language",
      content: `
        Big websites often show content in many countries and languages. We make sure users see the right page every time.
        <br><br/>
        <ul>
          <li>Set up <b>hreflang tags</b> correctly</li>
          <li>Choose the best <b>domain setup</b> (ccTLD, subfolder, subdomain)</li>
          <li>Fix <b>local search visibility</b> so pages don’t compete with each other</li>
        </ul>
      `,
    },
    {
      title: "Fix Speed, Errors, and Site Structure",
      content: `
        Big sites can be slow or have errors. We make your website fast and easy to use.
        <br><br/>
        <ul>
          <li>Clean up pages so search engines <b>see only important content</b></li>
          <li>Fix <b>JavaScript issues</b> so Google can read your pages</li>
          <li>Improve <b>Core Web Vitals</b> like load time, interactivity, and layout</li>
        </ul>
      `,
    },
    {
      title: "Plan, Write, and Organize Content",
      content: `
        Good content needs a clear plan. We help you <b>plan, write, and organize</b> content to get more visitors.
        <br><br/>
        <ul>
          <li>Build <b>pillar pages and content clusters</b></li>
          <li>Map existing content and <b>find gaps</b></li>
          <li>Set up <b>publishing calendars</b></li>
          <li>Use <b>AI tools + human review</b> to make content fast and high quality</li>
        </ul>
      `,
    },
    {
      title: "Get the Right Links From Trusted Sites",
      content: `
        Links from other websites help your site <b>gain authority.</b> We do this safely and smartly.
        <br><br/>
        <ul>
          <li>Use <b>link velocity models</b> to grow naturally</li>
          <li>Run <b>HARO campaigns</b> to get media links</li>
          <li>Build links from <b>trusted, high-authority sites</b></li>
        </ul>
      `,
    },
    {
      title: "Move or Rebuild Your Site Without Losing Rankings",
      content: `
        Changing your website can hurt rankings. We make sure your site keeps its traffic.
        <br><br/>
        <ul>
          <li>Run <b>SEO audits before moving</b></li>
          <li>Make <b>redirect maps</b> so old pages point to new ones</li>
          <li>Set up <b>rollback plans</b> in case anything breaks</li>
        </ul>
      `,
    },
    {
      title: "Protect Your Brand in Search",
      content: `
        Search results show how people see your brand. We help <b>keep your brand safe.</b>
        <br><br/>
        <ul>
          <li>Track <b>negative mentions</b></li>
          <li>Build <b>positive content</b></li>
          <li>Monitor for <b>SEO attacks or bad links</b></li>
        </ul>
      `,
    },
    {
      title: "Understand What’s Working With Data",
      content: `
        You need data to improve your site. We make it <b>easy to see what works.</b>
        <br><br/>
        <ul>
          <li>Build <b>custom dashboards</b></li>
          <li>Map traffic to <b>business goals</b></li>
          <li>Support <b>testing and insights</b> to improve results</li>
        </ul>
      `,
    },
  ];

  return (
    <CommonAccordion2
      title="A Closer Look at What We Offer and How It Helps"
      description="BrandStory’s SEO services are complete and easy to use. We help big websites work better, faster, and grow over time."
      items={accordionData}
      splitRatio={0.5}
    />
  );
};