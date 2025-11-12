import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const MakeEveryTeam = () => {
  const accordionData = [
    {
      title: "1. Create tools and dashboards anyone can use",
      content: `We build user-friendly interfaces with clear visuals. No technical background needed, just click, explore, and act.`,
    },
    {
      title: "2. Train your team to read and use data confidently",
      content: `We offer hands-on training to make sure your team isn’t just using tools, they’re understanding them.`,
    },
    {
      title: "3. Keep every decision grounded in facts, not guesses",
      content: `Whether it’s adjusting a campaign, forecasting sales, or planning hiring, your team will be guided by real numbers not hunches.`,
    }
  ];

  return (
    <CommonAccordion
      title="Make Every Team Smarter with Shared Insights"
      subheding2="Our data analytical services help your whole team make better calls."
      items={accordionData}
      footer=""
    />
  );
};